# Annotations Feature - Quick Start Guide

## 5-Minute Integration

### Step 1: Import the Component

```tsx
import { ReadingView } from '@/features/annotations';
```

### Step 2: Add to Your Page

```tsx
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

That's it! You now have a fully functional annotation system.

## Customization

### Change Colors

Edit `src/features/annotations/types.ts`:

```ts
export const ANNOTATION_COLORS: Record<AnnotationColor, ColorConfig> = {
  custom: {
    label: 'Custom Label',
    description: 'Your description',
    bgClass: 'bg-custom-100',
    borderClass: 'border-custom-400',
  },
};
```

### Custom Styling

All components accept a `className` prop:

```tsx
<ReadingView className="max-w-4xl mx-auto" />
```

### Without Sidebar

```tsx
<TextAnnotator userId={user.id} onCreateAnnotation={handleCreate}>
  {children}
</TextAnnotator>
```

## Common Patterns

### Show Annotation Count

```tsx
const { annotations } = useAnnotations({ userId, textId });
return <Badge>{annotations.length} annotations</Badge>;
```

### Filter by Color

```tsx
const { filterByColors } = useAnnotations({ userId, textId });
<button onClick={() => filterByColors(['yellow', 'blue'])}>
  Show Important + Questions
</button>;
```

### Export on Button Click

```tsx
import { exportAnnotationsAsJson } from '@/features/annotations';

const handleExport = async () => {
  const data = await exportAnnotationsAsJson({ userId, textId });
  downloadAsJson(data, 'my-annotations.json');
};
```

## Troubleshooting

### Selection Not Working
- Ensure content is wrapped in `<TextAnnotator>`
- Check that `userId` is provided
- Verify text length > 3 characters

### Annotations Not Saving
- Check server actions are properly imported
- Verify database connection
- Check console for validation errors

### Styling Issues
- Ensure Tailwind colors are defined
- Check `tailwind.config.js` includes the feature directory
- Verify no conflicting global styles

## Next Steps

- Read full documentation: `README.md`
- See working example: `examples/AnnotationDemo.tsx`
- Explore customization: `IMPLEMENTATION.md`

## Support

For issues or questions:
1. Check the README for detailed documentation
2. Review the example component
3. Examine server action logs
4. Verify database schema includes Annotation model

---

**Need Help?** See `README.md` for comprehensive documentation.
