# Data Structure - Aletheia Knowledge Base

This directory contains all philosophical content structured as TypeScript data files.

## 📁 Structure

```
src/data/
├── index.ts              # Main export file
└── categories/
    ├── metaphysique.ts   # Métaphysique category (✅ Complete)
    ├── ethique.ts        # Éthique category (🚧 To add)
    ├── politique.ts      # Politique category (🚧 To add)
    ├── esthetique.ts     # Esthétique category (🚧 To add)
    ├── logique.ts        # Logique category (🚧 To add)
    └── epistemologie.ts  # Épistémologie category (🚧 To add)
```

## 📝 Category File Format

Each category file exports two main structures:

### 1. Category Metadata

```typescript
export const category = {
  id: string,              // Unique identifier (e.g., 'metaphysique')
  name: string,            // Display name (e.g., 'Métaphysique')
  slug: string,            // URL-friendly slug (e.g., 'metaphysique')
  description: string,     // Category description
  color: string,           # Hex color (e.g., '#8b6f3c')
  icon: string             # Lucide icon name (e.g., 'book-open')
};
```

### 2. Concepts Array

```typescript
export const concepts = [
  {
    // Identifiers
    id: string,              // Unique ID (e.g., 'verite')
    name: string,            // French name (e.g., 'Vérité')
    greek: string,           // Greek term (e.g., 'ΑΛΗΘΕΙΑ')
    greekTranslit: string,   // Transliteration (e.g., 'Aletheia')
    slug: string,            // URL slug (e.g., 'verite')
    category: string,        // Parent category ID

    // Difficulty & Importance
    difficulty: number,      // 1-5 scale
    importance: number,      // 1-5 scale

    // Content
    definition: string,      // Full definition
    shortDefinition: string, // Brief definition

    // Etymology
    etymology: {
      greek: string,         // Etymology in Greek
      root?: string,         // Root word
      participle?: string,   // If participle
      latin?: string,        // Latin equivalent
      notes: string          // Additional notes
    },

    // Key Figures
    keyFigures: [
      {
        name: string,        // Name (e.g., 'Platon')
        period: string,      // Time period
        contribution: string // Their contribution
      }
    ],

    // Examples
    examples: string[],      // Concrete examples

    // Related Concepts
    relatedConcepts: [
      {
        name: string,        // Related concept name
        relation: string,    // Relationship type
        description: string  // Relationship description
      }
    ],

    // Sources
    sources: [
      {
        title: string,       // Source title
        author: string,      // Author name
        year: number,        // Year (negative for BC)
        type: 'BOOK' | 'POEM' | 'TEXT',
        reference: string,   // Specific reference
        quotes: string[]     // Notable quotes
      }
    ],

    // Flashcards
    flashcards: [
      {
        type: 'BASIC' | 'CONNECTION' | 'QUOTE',
        front: string,       // Question
        back: string,        // Answer
        difficulty: number   // 1-5 scale
      }
    ],

    // Tags
    tags: string[],          // Searchable tags
    status: 'COMPLETE' | 'PARTIAL' | 'DRAFT'
  },
  // ... more concepts
];
```

## 🚀 Adding New Categories

1. **Create the file** in `src/data/categories/`:
   ```bash
   touch src/data/categories/ethique.ts
   ```

2. **Copy the template** from `metaphysique.ts`

3. **Fill in the data** with your philosophical content

4. **Export in index.ts**:
   ```typescript
   export * as ethique from './categories/ethique';
   ```

5. **Add to seed.ts**:
   ```typescript
   import * as ethiqueData from '../src/data/categories/ethique';

   const allCategories = [
     metaphysiqueData,
     ethiqueData,  // Add here
   ];
   ```

6. **Run the seed**:
   ```bash
   npm run db:seed
   ```

## 📊 Data Guidelines

### Quality Standards

- ✅ **Accurate**: Verify all quotes and references
- ✅ **Complete**: Fill all required fields
- ✅ **Consistent**: Use same format across categories
- ✅ **Well-sourced**: Include primary sources
- ✅ **Educational**: Create useful flashcards

### Content Tips

1. **Definitions**: Clear, concise, accurate
2. **Etymology**: Include Greek/Latin roots
3. **Key Figures**: Most influential thinkers
4. **Sources**: Primary texts when possible
5. **Flashcards**: Test understanding, not memorization
6. **Relations**: Connect related concepts

## 🔄 Workflow

### Adding New Concepts

1. Edit the appropriate category file
2. Add concept to `concepts` array
3. Run `npm run db:seed` to update database
4. Test on `/conceptuaire` page

### Updating Content

1. Edit the TypeScript file
2. Re-run seed script
3. Changes propagate to database

### Version Control

- All content is in Git (version controlled)
- Easy to track changes and revert
- Collaborative editing possible

## 🎯 Next Categories to Add

- [ ] Éthique (Ethics)
- [ ] Politique (Politics)
- [ ] Esthétique (Aesthetics)
- [ ] Logique (Logic)
- [ ] Épistémologie (Epistemology)
- [ ] Philosophie Ancienne (Ancient Philosophy)
- [ ] Philosophie Moderne (Modern Philosophy)
- [ ] Philosophie Contemporaine (Contemporary Philosophy)

## 📖 Examples

See `metaphysique.ts` for a complete working example with 4 concepts:
- Vérité (Aletheia)
- Être (To On)
- Substance (Ousia)
- Essence

---

*Last Updated: 2025-02-24*
