/**
 * Main seed script - Seeds all data including achievements
 */

import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

async function main() {
  console.log('🌱 Starting seed...\n');

  // Seed categories first (needed by concepts)
  console.log('📁 Seeding categories...');
  await seedCategories();

  // Seed concepts
  console.log('\n💡 Seeding concepts...');
  const { default: seedConcepts } = await import('./seed/concepts-seed');
  await seedConcepts();

  // Seed concept relations (after concepts are created)
  console.log('\n🔗 Seeding concept relations...');
  await seedConceptRelations();

  // Seed achievements
  console.log('\n🏆 Seeding achievements...');
  await seedAchievements();

  // Note: Philosophers and movements should be seeded separately
  console.log('\n👥 Philosophers: Run "npm run db:seed:philosophers"');
  console.log('🎯 Movements: Run "npm run db:seed:movements"');

  // Close pool connection
  await pool.end();

  console.log('\n✅ Seed completed!');
  console.log('\n💡 Tip: For full seeding including philosophers and movements, run:');
  console.log('   npm run db:seed:philosophers && npm run db:seed:movements');
}

/**
 * Seed philosophers from consolidated data
 */
async function seedPhilosophers() {
  // Import and run the philosophers seed script
  const { default: seedPhilosophersScript } = await import('./seed/philosophers-seed');
  // The philosophers-seed script has its own main() function
  // We'll just run it directly via CLI instead
  console.log(`  ✓ Run 'npm run db:seed:philosophers' for detailed philosopher seeding`);
}

/**
 * Seed movements and their philosopher links
 */
async function seedMovements() {
  // Import and run the movements seed script
  console.log(`  ✓ Run 'npm run db:seed:movements' for detailed movement seeding`);
}

async function seedCategories() {
  const categories = [
    { slug: 'stoicisme', name: 'Stoïcisme', description: 'École philosophique fondée par Zénon', color: '#8B4513', icon: '🏛️' },
    { slug: 'existentialisme', name: 'Existentialisme', description: 'Philosophie de l\'existence et de la liberté', color: '#2E5C8A', icon: '🦋' },
    { slug: 'metaphysique', name: 'Métaphysique', description: 'Étude de la nature de la réalité', color: '#6B46C1', icon: '🌌' },
    { slug: 'ethique', name: 'Éthique', description: 'Philosophie morale', color: '#4CAF50', icon: '⚖️' },
    { slug: 'epistemologie', name: 'Épistémologie', description: 'Théorie de la connaissance', color: '#FF9800', icon: '🔍' },
    { slug: 'psychologie', name: 'Psychologie', description: 'Étude de l\'esprit et de ses facultés', color: '#E91E63', icon: '🧠' },
    { slug: 'semiotique', name: 'Sémiotique', description: 'Étude des signes et du langage', color: '#9C27B0', icon: '💬' },
    { slug: 'sociologie', name: 'Sociologie', description: 'Étude de la société et des structures sociales', color: '#FF5722', icon: '👥' },
    { slug: 'spiritualite', name: 'Spiritualité', description: 'Expérience du sacré et du transcendant', color: '#673AB7', icon: '✨' },
    { slug: 'politique', name: 'Politique', description: 'Philosophie politique et sociale', color: '#F44336', icon: '⚖️' },
    { slug: 'esthetique', name: 'Esthétique', description: 'Philosophie de l\'art et du beau', color: '#E91E63', icon: '🎨' },
  ];

  // Get valid slugs
  const validSlugs = new Set(categories.map(c => c.slug));

  // Delete old categories not in the new list
  const deleted = await prisma.category.deleteMany({
    where: {
      slug: {
        notIn: Array.from(validSlugs)
      }
    }
  });

  if (deleted.count > 0) {
    console.log(`  ✓ Deleted ${deleted.count} old categories`);
  }

  // Upsert new categories
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  console.log(`  ✓ Seeded ${categories.length} categories`);
}

async function seedAchievements() {
  const achievements = [
    // Learning Achievements
    {
      slug: 'first-note',
      name: 'Première Note',
      description: 'Créer votre première note',
      icon: '📝',
      xpReward: 10,
      category: 'learning',
      requirements: { type: 'notes_created', count: 1 },
    },
    {
      slug: 'bibliothecaire',
      name: 'Bibliothécaire',
      description: 'Créer 10 notes',
      icon: '📚',
      xpReward: 50,
      category: 'learning',
      requirements: { type: 'notes_created', count: 10 },
    },
    {
      slug: 'sage',
      name: 'Sage',
      description: 'Créer 100 notes',
      icon: '🦉',
      xpReward: 200,
      category: 'learning',
      requirements: { type: 'notes_created', count: 100 },
    },
    {
      slug: 'curieux',
      name: 'Curieux',
      description: 'Explorer 10 concepts différents',
      icon: '💡',
      xpReward: 30,
      category: 'learning',
      requirements: { type: 'concepts_explored', count: 10 },
    },
    {
      slug: 'explorateur',
      name: 'Explorateur',
      description: 'Explorer 50 concepts',
      icon: '🗺️',
      xpReward: 100,
      category: 'learning',
      requirements: { type: 'concepts_explored', count: 50 },
    },
    {
      slug: 'lecteur',
      name: 'Lecteur',
      description: 'Lire 5 philosophes différents',
      icon: '📖',
      xpReward: 50,
      category: 'learning',
      requirements: { type: 'philosophers_read', count: 5 },
    },

    // Mastery Achievements
    {
      slug: 'first-favorite',
      name: 'Premier Favori',
      description: 'Ajouter votre premier favori',
      icon: '⭐',
      xpReward: 10,
      category: 'mastery',
      requirements: { type: 'favorites_added', count: 1 },
    },
    {
      slug: 'collectionneur',
      name: 'Collectionneur',
      description: 'Ajouter 50 favoris',
      icon: '🎯',
      xpReward: 150,
      category: 'mastery',
      requirements: { type: 'favorites_added', count: 50 },
    },
    {
      slug: 'flashcard-master',
      name: 'Flashcard Master',
      description: 'Maîtriser 100 flashcards',
      icon: '🧠',
      xpReward: 500,
      category: 'mastery',
      requirements: { type: 'flashcards_mastered', count: 100 },
    },
    {
      slug: 'contributor',
      name: 'Contributeur',
      description: 'Contribuer 25 citations',
      icon: '💬',
      xpReward: 250,
      category: 'mastery',
      requirements: { type: 'quotes_contributed', count: 25 },
    },

    // Level Achievements
    {
      slug: 'level-2-apprenti',
      name: 'Apprenti',
      description: 'Atteindre le niveau 2',
      icon: '📗',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 2 },
    },
    {
      slug: 'level-3-etudiant',
      name: 'Étudiant',
      description: 'Atteindre le niveau 3',
      icon: '📘',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 3 },
    },
    {
      slug: 'level-5-maitre',
      name: 'Maître',
      description: 'Atteindre le niveau 5',
      icon: '📕',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 5 },
    },
    {
      slug: 'level-7-philosophe',
      name: 'Philosophe',
      description: 'Atteindre le niveau 7',
      icon: '📙',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 7 },
    },
    {
      slug: 'level-10-sage',
      name: 'Sage',
      description: 'Atteindre le niveau 10',
      icon: '🏆',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 10 },
    },

    // Streak Achievements
    {
      slug: 'streak-3',
      name: 'En Bonne Voie',
      description: 'Maintenir une série de 3 jours',
      icon: '🔥',
      xpReward: 30,
      category: 'streak',
      requirements: { type: 'streak', count: 3 },
    },
    {
      slug: 'streak-7',
      name: 'Incontrôlable',
      description: 'Maintenir une série de 7 jours',
      icon: '⚡',
      xpReward: 100,
      category: 'streak',
      requirements: { type: 'streak', count: 7 },
    },
    {
      slug: 'streak-30',
      name: 'Légende',
      description: 'Maintenir une série de 30 jours',
      icon: '👑',
      xpReward: 500,
      category: 'streak',
      requirements: { type: 'streak', count: 30 },
    },
  ];

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { slug: achievement.slug },
      update: {},
      create: achievement,
    });
  }

  console.log(`  ✓ Seeded ${achievements.length} achievements`);
}

async function seedConceptRelations() {
  const { conceptNetwork } = await import('../src/lib/concept-network/network');

  // Get all concepts for quick lookup
  const allConcepts = await prisma.concept.findMany({
    select: { id: true, slug: true },
  });

  const conceptSlugToId = new Map<string, string>();
  for (const concept of allConcepts) {
    conceptSlugToId.set(concept.slug, concept.id);
  }

  let created = 0;
  let skipped = 0;

  for (const connection of conceptNetwork) {
    const conceptId = conceptSlugToId.get(connection.from);
    const relatedConceptId = conceptSlugToId.get(connection.to);

    if (!conceptId || !relatedConceptId) {
      skipped++;
      continue;
    }

    await prisma.conceptRelation.upsert({
      where: {
        conceptId_relatedConceptId_relationType: {
          conceptId,
          relatedConceptId,
          relationType: connection.type as any,
        },
      },
      update: {
        description: connection.description,
        strength: connection.strength,
      },
      create: {
        conceptId,
        relatedConceptId,
        relationType: connection.type as any,
        description: connection.description,
        strength: connection.strength,
      },
    });

    created++;
  }

  console.log(`  ✓ Seeded ${created} concept relations (skipped: ${skipped})`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:');
    console.error(e);
    process.exit(1);
  });
