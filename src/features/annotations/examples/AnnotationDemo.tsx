'use client';

import { ReadingView } from '../components/ReadingView';

// Demo content
const DEMO_CHAPTER = `
<p>La philosophie de l'existence chez Jean-Paul Sartre repose sur l'idée fondamentale que l'existence précède l'essence. Cette affirmation, qui constitue l'axe majeur de l'existentialisme sartrien, signifie que l'homme existe d'abord, se rencontre, surgit dans le monde, et seulement ensuite se définit.</p>

<p>L'homme n'est rien d'autre que ce qu'il fait de lui-même. Telle est la première affirmation de l'existentialisme. C'est aussi ce qu'on appelle la subjectivité. Nous voulons dire par là que l'homme existe d'abord, c'est-à-dire que l'homme est d'abord ce qui se jette vers un avenir, et ce qui est conscient de se projeter vers l'avenir.</p>

<p>L'homme est d'abord un projet qui se vit subjectivement, au lieu d'être une mousse, une pourriture ou un chou-fleur ; rien n'existe antérieurement à ce projet ; il n'y a rien dans l'intelligence ; on sera ce qu'on aura fait de soi.</p>

<p>Cette conception de la liberté humaine entraîne une responsabilité totale. Si l'homme est responsable de lui-même, il l'est aussi de tous les hommes. Nos choix engagent non seulement nous-mêmes, mais l'humanité entière. En choisissant ma conduite, je me choisis, mais en même temps je choisis l'homme dans sa totalité.</p>

<p>La liberté est d'abord et avant tout une condition de l'homme. Nous sommes condamnés à être libres, ce qui signifie que nous ne pouvons pas ne pas choisir. Ne pas choisir, c'est encore choisir. Cette liberté absolue est à la source de ce que Sartre appelle la nausée, ce sentiment d'angoisse qui saisit l'homme face à l'absurdité de son existence et la responsabilité de ses choix.</p>
`;

// Demo annotations
const DEMO_ANNOTATIONS = [
  {
    id: '1',
    userId: 'demo-user',
    textId: 'demo-text',
    chapterId: 'demo-chapter',
    quoteId: null,
    content: "Concept central de l'existentialisme sartrien. L'homme n'a pas de nature prédéfinie, il se construit par ses choix.",
    startOffset: 50,
    endOffset: 150,
    color: 'yellow' as const,
    isPublic: false,
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15'),
    chapter: {
      id: 'demo-chapter',
      title: "L'Existentialisme",
      slug: 'l-existentialisme',
    },
  },
  {
    id: '2',
    userId: 'demo-user',
    textId: 'demo-text',
    chapterId: 'demo-chapter',
    quoteId: null,
    content: "Question : Comment concilier cette liberté absolue avec les déterminismes sociaux et biologiques ?",
    startOffset: 300,
    endOffset: 400,
    color: 'blue' as const,
    isPublic: false,
    createdAt: new Date('2026-01-16'),
    updatedAt: new Date('2026-01-16'),
    chapter: {
      id: 'demo-chapter',
      title: "L'Existentialisme",
      slug: 'l-existentialisme',
    },
  },
  {
    id: '3',
    userId: 'demo-user',
    textId: 'demo-text',
    chapterId: 'demo-chapter',
    quoteId: null,
    content: "Connexion avec la notion de 'mauvaise foi' - quand on nie sa liberté pour se cacher derrière des excuses",
    startOffset: 600,
    endOffset: 700,
    color: 'green' as const,
    isPublic: false,
    createdAt: new Date('2026-01-17'),
    updatedAt: new Date('2026-01-17'),
    chapter: {
      id: 'demo-chapter',
      title: "L'Existentialisme",
      slug: 'l-existentialisme',
    },
  },
];

/**
 * Annotation System Demo
 *
 * This component demonstrates the full annotation system with:
 * - Text selection and annotation creation
 * - Color-coded annotations
 * - Annotation sidebar with filtering
 * - Edit and delete functionality
 * - Export to JSON/Markdown
 */
export function AnnotationDemo() {
  return (
    <div className="h-screen bg-paper-50">
      <ReadingView
        userId="demo-user"
        textId="demo-text"
        chapterId="demo-chapter"
        chapterContent={DEMO_CHAPTER}
        chapterTitle="L'Existentialisme est un humanisme"
        textTitle="Jean-Paul Sartre"
        initialAnnotations={DEMO_ANNOTATIONS}
        className="h-full"
      />
    </div>
  );
}

/**
 * Usage Example:
 *
 * ```tsx
 * import { ReadingView } from '@/features/annotations';
 *
 * export default function ChapterPage() {
 *   const chapter = await getChapter(params.slug);
 *   const user = await getCurrentUser();
 *
 *   return (
 *     <ReadingView
 *       userId={user.id}
 *       textId={chapter.textId}
 *       chapterId={chapter.id}
 *       chapterContent={chapter.content}
 *       chapterTitle={chapter.title}
 *       textTitle={chapter.text.title}
 *       initialAnnotations={chapter.annotations}
 *     />
 *   );
 * }
 * ```
 */
