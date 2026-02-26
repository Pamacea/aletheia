# Annotations Feature Module

A comprehensive text annotation system for Aletheia philosophical wiki, allowing users to highlight, annotate, and organize notes while reading philosophical texts.

## Features

- **Text Selection & Highlighting**: Select any text to create annotations
- **Color-Coded Categories**: 6 philosophical annotation categories
- **Rich Notes**: Add detailed thoughts and connections
- **Annotation Management**: Edit, delete, and filter annotations
- **Export Options**: Export to JSON or Markdown formats
- **Real-time Updates**: Server-side actions with revalidation

## Installation

The annotation system is fully integrated into the `src/features/annotations` directory.

## Quick Start

### Basic Usage

```tsx
'use client';

import { ReadingView } from '@/features/annotations';

export default function ChapterPage({ chapter, user }) {
  return (
    <ReadingView
      userId={user.id}
      textId={chapter.textId}
      chapterId={chapter.id}
      chapterContent={chapter.content}
      chapterTitle={chapter.title}
      textTitle={chapter.text.title}
      initialAnnotations={chapter.annotations}
    />
  );
}
```

### Advanced Usage with Custom Components

```tsx
'use client';

import { TextAnnotator, AnnotationSidebar, useAnnotations } from '@/features/annotations';

export function MyReadingView() {
  const {
    annotations,
    createAnnotation,
    updateAnnotation,
    deleteAnnotation,
    filterByColors,
  } = useAnnotations({
    userId: user.id,
    textId: text.id,
    chapterId: chapter.id,
  });

  return (
    <div className="flex h-full">
      <TextAnnotator
        userId={user.id}
        textId={text.id}
        chapterId={chapter.id}
        onCreateAnnotation={createAnnotation}
        onUpdateAnnotation={updateAnnotation}
        annotations={annotations}
      >
        <div className="prose">
          {chapter.content}
        </div>
      </TextAnnotator>

      <AnnotationSidebar
        annotations={annotations}
        colorCounts={colorCounts}
        onEditAnnotation={(annotation) => {
          // Handle edit
        }}
        onDeleteAnnotation={deleteAnnotation}
        onExport={(format) => {
          // Handle export
        }}
      />
    </div>
  );
}
```

## Color Categories

| Color | Label | Description | Use Case |
|-------|-------|-------------|----------|
| 🟡 Yellow | Important | Idée clé à retenir | Main concepts, key arguments |
| 🔵 Blue | Question | Point à clarifier | Unclear passages, research needed |
| 🟢 Green | Connexion | Lien avec autre concept | Cross-references, connections |
| 🔴 Red | Contradiction | Point contestable | Arguments to question or debate |
| 🟣 Purple | Exemple | Illustration concrète | Examples, illustrations |
| 🟠 Orange | Définition | Terme à définir | New terms, definitions |

## Components

### ReadingView

Complete reading interface with annotation sidebar.

```tsx
<ReadingView
  userId={string}
  textId={string}
  chapterId={string}
  chapterContent={string}
  chapterTitle={string}
  textTitle={string}
  initialAnnotations={Annotation[]}
  className={string}
/>
```

### TextAnnotator

Wrapper component that enables text selection and annotation creation.

```tsx
<TextAnnotator
  userId={string}
  textId={string}
  chapterId={string}
  onCreateAnnotation={(data) => Promise<void>}
  onUpdateAnnotation={(id, data) => Promise<void>}
  annotations={Annotation[]}
  selectedAnnotation={Annotation}
  onSelectAnnotation={(annotation) => void}
  onHighlightAnnotation={(annotation) => void}
>
  {children}
</TextAnnotator>
```

### AnnotationSidebar

Sidebar displaying all annotations with filtering and export options.

```tsx
<AnnotationSidebar
  annotations={Annotation[]}
  colorCounts={Record<AnnotationColor, number>}
  isLoading={boolean}
  filters={AnnotationFilters}
  onFilterChange={(filters) => void}
  onEditAnnotation={(annotation) => void}
  onDeleteAnnotation={(id) => void}
  onClickAnnotation={(annotation) => void}
  onExport={(format) => void}
  onClose={() => void}
  className={string}
/>
```

### AnnotationCard

Individual annotation display component.

```tsx
<AnnotationCard
  annotation={Annotation}
  onEdit={(annotation) => void}
  onDelete={(id) => void}
  onClick={(annotation) => void}
  isSelected={boolean}
  showActions={boolean}
  className={string}
/>
```

### AnnotationEditor

Modal for editing existing annotations.

```tsx
<AnnotationEditor
  annotation={Annotation}
  isOpen={boolean}
  onClose={() => void}
  onSave={(data) => Promise<void>}
/>
```

## Hooks

### useAnnotations

Custom hook for managing annotation state.

```tsx
const {
  // State
  annotations,
  filteredAnnotations,
  colorCounts,
  isLoading,
  error,
  filters,
  selectedAnnotation,
  isEditing,

  // Mutations
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,

  // Actions
  fetchAnnotations,
  filterByColors,
  searchAnnotations,
  clearFilters,
  setSelectedAnnotation,
  setIsEditing,
} = useAnnotations({
  userId,
  textId,
  chapterId,
  initialAnnotations,
});
```

## Server Actions

### createAnnotation

```ts
import { createAnnotation } from '@/features/annotations';

const annotation = await createAnnotation({
  userId: string,
  textId?: string,
  chapterId?: string,
  quoteId?: string,
  content: string,
  startOffset?: number,
  endOffset?: number,
  color?: string,
  isPublic?: boolean,
});
```

### getAnnotations

```ts
import { getAnnotations } from '@/features/annotations';

const result = await getAnnotations({
  userId: string,
  textId?: string,
  chapterId?: string,
  colors?: string[],
  search?: string,
  page?: number,
  limit?: number,
});
```

### updateAnnotation

```ts
import { updateAnnotation } from '@/features/annotations';

const annotation = await updateAnnotation({
  id: string,
  userId: string,
  content?: string,
  color?: string,
  isPublic?: boolean,
});
```

### deleteAnnotation

```ts
import { deleteAnnotation } from '@/features/annotations';

await deleteAnnotation(id: string, userId: string);
```

### Export Functions

```ts
import {
  exportAnnotationsAsJson,
  exportAnnotationsAsMarkdown,
} from '@/features/annotations';

const jsonData = await exportAnnotationsAsJson({ userId, textId, chapterId });
const markdownData = await exportAnnotationsAsMarkdown({ userId, textId, chapterId });
```

## Types

```ts
interface Annotation {
  id: string;
  userId: string;
  textId: string | null;
  chapterId: string | null;
  quoteId: string | null;
  content: string;
  startOffset: number | null;
  endOffset: number | null;
  color: string | null;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  chapter?: Chapter;
  quote?: Quote;
}

type AnnotationColor = 'yellow' | 'blue' | 'green' | 'red' | 'purple' | 'orange';

interface AnnotationFilters {
  colors?: AnnotationColor[];
  search?: string;
  textId?: string;
  chapterId?: string;
}
```

## Database Schema

The annotation system uses the following Prisma model:

```prisma
model Annotation {
  id          String   @id @default(cuid())
  userId      String
  textId      String?
  chapterId   String?
  quoteId     String?
  content     String
  startOffset Int?
  endOffset   Int?
  color       String?
  isPublic    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  chapter     Chapter? @relation(fields: [chapterId], references: [id])
  quote       Quote?   @relation(fields: [quoteId], references: [id])
  text        Text?    @relation(fields: [textId], references: [id])
  user        User     @relation(fields: [userId], references: [id])

  @@index([userId])
  @@index([textId])
  @@index([chapterId])
  @@index([quoteId])
  @@index([isPublic])
}
```

## Examples

See `src/features/annotations/examples/AnnotationDemo.tsx` for a complete working example.

## Styling

The annotation system uses Aletheia's sepia/paper/ink color scheme:

- **Highlights**: Subtle pastel backgrounds with colored borders
- **Cards**: Paper-like backgrounds with ink text
- **Sidebar**: Clean, organized layout with color-coded filters
- **Modals**: Traditional modal dialogs with backdrop blur

## Best Practices

1. **Meaningful Annotations**: Add context to why you highlighted the text
2. **Color Consistency**: Use colors consistently for similar types of notes
3. **Regular Exports**: Export annotations periodically as backup
4. **Public vs Private**: Mark annotations as public only when appropriate
5. **Searchable Notes**: Use keywords for easier filtering later

## Future Enhancements

- [ ] Annotation sharing between users
- [ ] AI-powered annotation suggestions
- [ ] Linked annotations (annotations referencing other annotations)
- [ ] Annotation threads (comments on annotations)
- [ ] OCR for scanned texts
- [ ] Audio annotations
- [ ] Collaborative annotation sessions

## Contributing

When contributing to the annotation system:

1. Follow the existing component patterns
2. Use the established color scheme
3. Ensure accessibility (keyboard navigation, screen readers)
4. Test with different text lengths and languages
5. Export functionality should handle edge cases

## License

Part of the Aletheia project.
