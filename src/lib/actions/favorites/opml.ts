'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth';
import { getEntityData, escapeXml } from './helpers';
import type { EntityType } from '@/lib/constants';
import { MESSAGES } from '@/lib/constants';

/**
 * OPML import/export operations for collections
 */

/**
 * Export collection to OPML format
 */
export async function exportCollectionToOPML(collectionId: string): Promise<string> {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  const collection = await prisma.collection.findFirst({
    where: {
      id: collectionId,
      userId: session.user.id,
    },
    include: {
      items: {
        orderBy: { order: 'asc' },
      },
    },
  });

  if (!collection) {
    throw new Error('Collection not found');
  }

  const items = await Promise.all(
    collection.items.map(async (item) => {
      const entityData = await getEntityData(item.entityType as EntityType, item.entityId);
      return {
        ...item,
        entityData,
      };
    })
  );

  const { getEntityDisplayName } = await import('./helpers');

  const opml = `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <title>${escapeXml(collection.name)}</title>
    <dateCreated>${collection.createdAt.toISOString()}</dateCreated>
    <dateModified>${collection.updatedAt.toISOString()}</dateModified>
    ${collection.description ? `<ownerName>${escapeXml(collection.description)}</ownerName>` : ''}
  </head>
  <body>
    ${items.map(item => {
      const name = item.entityData ? getEntityDisplayName(item.entityData) : 'Unknown';
      const note = item.note ? ` note="${escapeXml(item.note)}"` : '';
      return `    <outline text="${escapeXml(name)}" type="${item.entityType}"${note} />`;
    }).join('\n    ')}
  </body>
</opml>`;

  return opml;
}

/**
 * Import items from OPML to collection
 */
export async function importOPMLToCollection(collectionId: string, opml: string) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  // Verify ownership
  const collection = await prisma.collection.findFirst({
    where: {
      id: collectionId,
      userId: session.user.id,
    },
  });

  if (!collection) {
    throw new Error('Collection not found or unauthorized');
  }

  // Parse OPML (simple XML parser)
  const outlineMatches = opml.matchAll(/<outline[^>]*>/g);
  let order = await prisma.collectionItem.count({
    where: { collectionId },
  });

  for (const match of outlineMatches) {
    const outline = match[0];

    // Extract attributes
    const textMatch = outline.match(/text="([^"]*)"/);
    const typeMatch = outline.match(/type="([^"]*)"/);
    const noteMatch = outline.match(/note="([^"]*)"/);

    if (!textMatch || !typeMatch) continue;

    const text = textMatch[1];
    const type = typeMatch[1].toUpperCase() as EntityType;
    const note = noteMatch ? noteMatch[1] : null;

    // Try to find entity by name/slug
    let entityId: string | null = null;

    if (type === 'CONCEPT') {
      const concept = await prisma.concept.findFirst({
        where: {
          OR: [
            { slug: text.toLowerCase().replace(/\s+/g, '-') },
            { name: { contains: text, mode: 'insensitive' } },
          ],
        },
      });
      entityId = concept?.id ?? null;
    } else if (type === 'QUOTE') {
      const quote = await prisma.quote.findFirst({
        where: {
          OR: [
            { slug: text.toLowerCase().replace(/\s+/g, '-') },
            { text: { contains: text, mode: 'insensitive' } },
          ],
        },
      });
      entityId = quote?.id ?? null;
    }

    if (entityId) {
      await prisma.collectionItem.create({
        data: {
          collectionId,
          entityType: type,
          entityId,
          note,
          order: order++,
        },
      });
    }
  }

  revalidatePath('/collections');
  revalidatePath(`/collections/${collectionId}`);
  return { success: true, imported: order - await prisma.collectionItem.count({ where: { collectionId } }) };
}
