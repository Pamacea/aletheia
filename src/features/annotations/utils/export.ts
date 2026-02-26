/**
 * Export utilities for annotations
 */

import type { Annotation } from '../types';

export function downloadAsJson(data: any, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadAsMarkdown(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generateAnnotationMarkdown(annotations: Annotation[], textTitle?: string): string {
  let markdown = `# Annotations${textTitle ? ` - ${textTitle}` : ''}\n\n`;
  markdown += `Exporté le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}\n\n`;
  markdown += `**Total:** ${annotations.length} annotations\n\n`;
  markdown += `---\n\n`;

  // Group by chapter
  const byChapter: Record<string, Annotation[]> = {};
  annotations.forEach((annotation) => {
    const chapterTitle = annotation.chapter?.title || 'Général';
    if (!byChapter[chapterTitle]) {
      byChapter[chapterTitle] = [];
    }
    byChapter[chapterTitle].push(annotation);
  });

  // Generate markdown for each chapter
  Object.entries(byChapter).forEach(([chapterTitle, chapterAnnotations]) => {
    markdown += `## ${chapterTitle}\n\n`;

    chapterAnnotations.forEach((annotation, index) => {
      const colorEmoji = {
        yellow: '🟡',
        blue: '🔵',
        green: '🟢',
        red: '🔴',
        purple: '🟣',
        orange: '🟠',
      }[annotation.color || 'yellow'];

      const colorLabel = {
        yellow: 'Important',
        blue: 'Question',
        green: 'Connexion',
        red: 'Contradiction',
        purple: 'Exemple',
        orange: 'Définition',
      }[annotation.color || 'yellow'];

      markdown += `### ${colorEmoji} ${colorLabel} #${index + 1}\n\n`;

      if (annotation.quote) {
        markdown += `> ${annotation.quote.text}\n\n`;
      }

      markdown += `${annotation.content}\n\n`;

      markdown += `*_Créée le ${new Date(annotation.createdAt).toLocaleDateString('fr-FR')}_*\n\n`;

      if (annotation.isPublic) {
        markdown += `*🌍 Publique*\n\n`;
      }

      markdown += `---\n\n`;
    });
  });

  return markdown;
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
}
