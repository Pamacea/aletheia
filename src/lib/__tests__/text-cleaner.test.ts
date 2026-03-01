/**
 * Tests pour le module text-cleaner
 */

import { describe, it, expect } from 'vitest';
import {
  cleanMarkdown,
  cleanQuotes,
  cleanWhitespace,
  cleanText,
  cleanQuotesArray,
  cleanConceptData,
  cleanPhilosopherData,
  cleanMovementData,
  hasMarkdown,
  getCleaningStats,
  cleanMarkdownPreserving
} from '../text-cleaner';

describe('text-cleaner', () => {
  describe('cleanMarkdown', () => {
    it('should remove bold markers', () => {
      expect(cleanMarkdown('Ceci est **du texte** en gras'))
        .toBe('Ceci est du texte en gras');
    });

    it('should remove italic markers', () => {
      expect(cleanMarkdown('Ceci est *du texte* en italique'))
        .toBe('Ceci est du texte en italique');
    });

    it('should remove headers', () => {
      expect(cleanMarkdown('## Titre niveau 2'))
        .toBe('Titre niveau 2');
      expect(cleanMarkdown('# Titre niveau 1'))
        .toBe('Titre niveau 1');
    });

    it('should remove links but keep text', () => {
      expect(cleanMarkdown('[un lien](https://example.com)'))
        .toBe('un lien');
    });

    it('should remove inline code markers', () => {
      expect(cleanMarkdown('Du `code` ici'))
        .toBe('Du code ici');
    });

    it('should handle complex markdown', () => {
      const input = '## **Titre** en *gras*\n\nCeci est [un lien](url) avec du `code`.';
      const expected = 'Titre en gras\n\nCeci est un lien avec du code.';
      expect(cleanMarkdown(input)).toBe(expected);
    });

    it('should limit consecutive newlines to 2', () => {
      expect(cleanMarkdown('Texte\n\n\n\n\nAutre texte'))
        .toBe('Texte\n\nAutre texte');
    });

    it('should handle empty string', () => {
      expect(cleanMarkdown('')).toBe('');
    });

    it('should handle null/undefined', () => {
      expect(cleanMarkdown(null as any)).toBe('');
      expect(cleanMarkdown(undefined as any)).toBe('');
    });
  });

  describe('cleanQuotes', () => {
    it('should convert French guillemets to quotes', () => {
      expect(cleanQuotes('« Texte »'))
        .toBe('"Texte"');
    });

    it('should convert curly double quotes', () => {
      expect(cleanQuotes('"Texte"'))
        .toBe('"Texte"');
      expect(cleanQuotes('"Texte"'))
        .toBe('"Texte"');
    });

    it('should convert French single guillemets', () => {
      expect(cleanQuotes('‹ Texte ›'))
        .toBe("'Texte'");
    });

    it('should convert curly single quotes', () => {
      expect(cleanQuotes("'Texte'"))
        .toBe("'Texte'");
      expect(cleanQuotes('\u2019Texte\u2019'))
        .toBe("'Texte'");
    });

    it('should handle apostrophes', () => {
      expect(cleanQuotes("L'homme"))
        .toBe("L'homme");
      expect(cleanQuotes('L\u2019homme'))
        .toBe("L'homme");
    });

    it('should handle mixed quotes', () => {
      expect(cleanQuotes('« "L\'homme" »'))
        .toBe('" "L\'homme" "');
    });

    it('should handle empty string', () => {
      expect(cleanQuotes('')).toBe('');
    });
  });

  describe('cleanWhitespace', () => {
    it('should collapse multiple spaces', () => {
      expect(cleanWhitespace('Texte   avec   espaces'))
        .toBe('Texte avec espaces');
    });

    it('should remove spaces before punctuation', () => {
      expect(cleanWhitespace('Texte , avec , ponctuation'))
        .toBe('Texte, avec, ponctuation');
    });

    it('should remove spaces after opening parenthesis', () => {
      expect(cleanWhitespace('( texte )'))
        .toBe('(texte)');
    });

    it('should trim each line', () => {
      expect(cleanWhitespace('  Texte  \n  Autre  '))
        .toBe('Texte\nAutre');
    });

    it('should handle tabs', () => {
      expect(cleanWhitespace('Texte\t\tavec\ttabs'))
        .toBe('Texte avec tabs');
    });

    it('should handle empty string', () => {
      expect(cleanWhitespace('')).toBe('');
    });
  });

  describe('cleanText', () => {
    it('should apply all cleaning functions', () => {
      const input = '## **"Texte"**\n\nAvec « guillemets » et *italique*.';
      const expected = '"Texte"\n\nAvec "guillemets" et italique.';
      expect(cleanText(input)).toBe(expected);
    });

    it('should handle philosophical text', () => {
      const input = '## L\'**absurde** est « une situation » *fundamentale*';
      const expected = 'L\'absurde est "une situation" fondamentale';
      expect(cleanText(input)).toBe(expected);
    });

    it('should handle empty string', () => {
      expect(cleanText('')).toBe('');
    });
  });

  describe('cleanQuotesArray', () => {
    it('should clean array of quotes', () => {
      const input = [
        '« **Première** citation »',
        '*Seconde* citation'
      ];
      const expected = [
        '"Première" citation',
        'Seconde citation'
      ];
      expect(cleanQuotesArray(input)).toEqual(expected);
    });

    it('should filter out empty strings', () => {
      const input = [
        'Citation',
        '',
        'Autre citation'
      ];
      const expected = ['Citation', 'Autre citation'];
      expect(cleanQuotesArray(input)).toEqual(expected);
    });

    it('should handle empty array', () => {
      expect(cleanQuotesArray([])).toEqual([]);
    });

    it('should handle null/undefined', () => {
      expect(cleanQuotesArray(null as any)).toEqual([]);
      expect(cleanQuotesArray(undefined as any)).toEqual([]);
    });
  });

  describe('cleanConceptData', () => {
    it('should clean concept definition', () => {
      const input = {
        definition: '## **Définition** avec « guillemets »'
      };
      const expected = {
        definition: 'Définition avec "guillemets"'
      };
      expect(cleanConceptData(input)).toEqual(expected);
    });

    it('should clean examples array', () => {
      const input = {
        examples: ['## **Exemple** 1', '*Exemple* 2']
      };
      const expected = {
        examples: ['Exemple 1', 'Exemple 2']
      };
      expect(cleanConceptData(input)).toEqual(expected);
    });

    it('should clean sources', () => {
      const input = {
        sources: [
          {
            reference: '## **Ouvrage**',
            quotes: ['« **Citation** »']
          }
        ]
      };
      const expected = {
        sources: [
          {
            reference: 'Ouvrage',
            quotes: ['"Citation"']
          }
        ]
      };
      expect(cleanConceptData(input)).toEqual(expected);
    });

    it('should clean philosophical definition', () => {
      const input = {
        philosophicalDefinition: {
          analysis: '## **Analyse**',
          distinctions: ['« *Distinction* »'],
          implications: '*Implications*'
        }
      };
      const expected = {
        philosophicalDefinition: {
          analysis: 'Analyse',
          distinctions: ['"Distinction"'],
          implications: 'Implications'
        }
      };
      expect(cleanConceptData(input)).toEqual(expected);
    });

    it('should clean origins', () => {
      const input = {
        origins: {
          context: '## **Contexte**',
          predecessors: ['« *Prédécesseur* »'],
          reactionAgainst: ['## *Réaction*']
        }
      };
      const expected = {
        origins: {
          context: 'Contexte',
          predecessors: ['"Prédécesseur"'],
          reactionAgainst: ['Réaction']
        }
      };
      expect(cleanConceptData(input)).toEqual(expected);
    });

    it('should handle nested objects without losing data', () => {
      const input = {
        definition: 'Définition',
        id: 'test',
        name: 'Test',
        slug: 'test',
        keyPrinciples: ['Principe 1', 'Principe 2']
      };
      const result = cleanConceptData(input);
      expect(result.definition).toBe('Définition');
      expect(result.id).toBe('test');
      expect(result.name).toBe('Test');
      expect(result.slug).toBe('test');
      expect(result.keyPrinciples).toEqual(['Principe 1', 'Principe 2']);
    });
  });

  describe('cleanPhilosopherData', () => {
    it('should clean biography', () => {
      const input = {
        biography: '## **Biographie** avec « guillemets »'
      };
      const expected = {
        biography: 'Biographie avec "guillemets"'
      };
      expect(cleanPhilosopherData(input)).toEqual(expected);
    });

    it('should clean key ideas', () => {
      const input = {
        keyIdeas: ['## **Idée** 1', '*Idée* 2']
      };
      const expected = {
        keyIdeas: ['Idée 1', 'Idée 2']
      };
      expect(cleanPhilosopherData(input)).toEqual(expected);
    });

    it('should clean major works', () => {
      const input = {
        majorWorks: [
          { title: 'Œuvre', year: 2024, description: '## **Description**' }
        ]
      };
      const expected = {
        majorWorks: [
          { title: 'Œuvre', year: 2024, description: 'Description' }
        ]
      };
      expect(cleanPhilosopherData(input)).toEqual(expected);
    });
  });

  describe('cleanMovementData', () => {
    it('should clean description', () => {
      const input = {
        description: '## **Description** avec « guillemets »'
      };
      const expected = {
        description: 'Description avec "guillemets"'
      };
      expect(cleanMovementData(input)).toEqual(expected);
    });

    it('should clean key principles', () => {
      const input = {
        keyPrinciples: ['## **Principe** 1', '*Principe* 2']
      };
      const expected = {
        keyPrinciples: ['Principe 1', 'Principe 2']
      };
      expect(cleanMovementData(input)).toEqual(expected);
    });

    it('should clean variations', () => {
      const input = {
        variations: [
          { name: 'Variation', description: '## **Description**' }
        ]
      };
      const expected = {
        variations: [
          { name: 'Variation', description: 'Description' }
        ]
      };
      expect(cleanMovementData(input)).toEqual(expected);
    });
  });

  describe('hasMarkdown', () => {
    it('should detect bold', () => {
      expect(hasMarkdown('**text**')).toBe(true);
    });

    it('should detect italic', () => {
      expect(hasMarkdown('*text*')).toBe(true);
    });

    it('should detect headers', () => {
      expect(hasMarkdown('# Title')).toBe(true);
    });

    it('should detect links', () => {
      expect(hasMarkdown('[text](url)')).toBe(true);
    });

    it('should detect code', () => {
      expect(hasMarkdown('`code`')).toBe(true);
    });

    it('should return false for plain text', () => {
      expect(hasMarkdown('Plain text')).toBe(false);
    });

    it('should handle empty string', () => {
      expect(hasMarkdown('')).toBe(false);
    });
  });

  describe('getCleaningStats', () => {
    it('should calculate cleaning statistics', () => {
      const original = '## **Title**';
      const cleaned = 'Title';
      const stats = getCleaningStats(original, cleaned);

      expect(stats.originalLength).toBe(12);
      expect(stats.cleanedLength).toBe(5);
      expect(stats.removedChars).toBe(7);
      expect(stats.removedPercentage).toBeCloseTo(58.33, 2);
    });

    it('should handle no change', () => {
      const text = 'Plain text';
      const stats = getCleaningStats(text, text);

      expect(stats.removedChars).toBe(0);
      expect(stats.removedPercentage).toBe(0);
    });
  });

  describe('cleanMarkdownPreserving', () => {
    it('should preserve bold when specified', () => {
      const result = cleanMarkdownPreserving('**text**', { bold: true });
      expect(result).toBe('**text**');
    });

    it('should preserve italic when specified', () => {
      const result = cleanMarkdownPreserving('*text*', { italic: true });
      expect(result).toBe('*text*');
    });

    it('should preserve links when specified', () => {
      const result = cleanMarkdownPreserving('[text](url)', { links: true });
      expect(result).toBe('[text](url)');
    });

    it('should preserve code when specified', () => {
      const result = cleanMarkdownPreserving('`code`', { code: true });
      expect(result).toBe('`code`');
    });

    it('should preserve multiple formats', () => {
      const result = cleanMarkdownPreserving('**bold** and *italic*', {
        bold: true,
        italic: true
      });
      expect(result).toBe('**bold** and *italic*');
    });

    it('should remove headers even when preserving other formats', () => {
      const result = cleanMarkdownPreserving('## **Title**', { bold: true });
      expect(result).toBe('**Title**');
    });

    it('should handle empty string', () => {
      expect(cleanMarkdownPreserving('')).toBe('');
    });
  });

  describe('philosophical text examples', () => {
    it('should clean Camus quote', () => {
      const input = '« Il faut imaginer Sisyphe **heureux**. »';
      const expected = '"Il faut imaginer Sisyphe heureux."';
      expect(cleanText(input)).toBe(expected);
    });

    it('should clean Sartre quote', () => {
      const input = '## *L\'existence précède l\'essence*';
      const expected = 'L\'existence précède l\'essence';
      expect(cleanText(input)).toBe(expected);
    });

    it('should clean Nietzsche quote', () => {
      const input = '« **Dieu est mort** » - *Thus Spoke Zarathustra*';
      const expected = '"Dieu est mort" - Thus Spoke Zarathustra';
      expect(cleanText(input)).toBe(expected);
    });

    it('should preserve philosophical meaning', () => {
      const input = '« L\'**homme** est *condamné* à être **libre** »';
      const expected = '"L\'homme est condamné à être libre"';
      expect(cleanText(input)).toBe(expected);
    });
  });
});
