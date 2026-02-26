import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
import { getNote, updateNote } from '@/lib/actions/notes';
import { NoteFormWrapper } from '@/features/notes/components/NoteFormWrapper';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth';

interface NoteEditPageProps {
 params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NoteEditPageProps) {
 const { id } = await params;
 const note = await getNote(id);

 if (!note) {
  return {
   title: 'Note non trouvée - Aletheia',
  };
 }

 return {
  title: `Modifier: ${note.title} - Aletheia`,
 };
}

export default async function NoteEditPage({ params }: NoteEditPageProps) {
 const { id } = await params;

 // Get actual userId from session
 const session = await getSession();
 if (!session?.user?.id) {
  redirect('/auth/signin');
 }
 const userId = session.user.id;

 const note = await getNote(id, userId);

 if (!note) {
  notFound();
 }

 if (note.userId !== userId) {
  redirect(`/profile/notes/${id}`);
 }

 async function handleUpdate(formData: FormData) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
   redirect('/auth/signin');
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const tagsInput = formData.get('tags') as string;
  const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : [];

  await updateNote({
   id,
   title,
   content,
   tags,
  });

  revalidatePath(`/profile/notes/${id}`);
  revalidatePath('/profile/notes');
  redirect(`/profile/notes/${id}`);
 }

 return (
  <div className="min-h-screen bg-paper-50">
   {/* Header */}
   <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
    <div className="max-w-5xl mx-auto px-4">
     <div className="flex items-center justify-between">
      <Link
       href={`/profile/notes/${id}`}
       className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
      >
       <ArrowLeftIcon className="w-5 h-5" />
       <span className="living-word font-medium">Retour</span>
      </Link>
      <h1 className="font-serif text-2xl font-semibold text-ink">
       Modifier la note
      </h1>
      <div className="w-32" />
     </div>
    </div>
   </header>

   {/* Main Content */}
   <main className="max-w-5xl mx-auto px-4 py-8 lg:px-8">
    <form action={handleUpdate}>
     {/* Note Editor */}
     <div className="bg-white border-2 border-paper-300 p-6 mb-6">
      <NoteFormWrapper
       initialTitle={note.title}
       initialContent={note.content}
       cancelPath={`/profile/notes/${id}`}
       className="min-h-[500px]"
      />
     </div>

     {/* Tags Input */}
     <div className="bg-white border-2 border-paper-300 p-6 mb-6">
      <label className="block text-sm font-semibold text-ink mb-3">
       Tags (séparés par des virgules)
      </label>
      <input
       type="text"
       name="tags"
       defaultValue={note.tags.join(', ')}
       placeholder="philosophie, métaphysique, éthique..."
       className="w-full px-4 py-2 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none transition-colors"
      />
      <p className="text-sm text-ink-light mt-2">
       Ajoutez des tags pour organiser vos notes
      </p>
     </div>

     {/* Linked Entity Info (Read-only) */}
     {(note.linkedConcept || note.linkedText) && (
      <div className="bg-sepia-50 border-2 border-sepia-200 p-4 mb-6">
       <div className="text-sm text-sepia-600 mb-1">Cette note est liée à :</div>
       {note.linkedConcept && (
        <div className="text-lg font-serif font-semibold text-ink">
         {note.linkedConcept.name}
        </div>
       )}
       {note.linkedText && (
        <div className="text-lg font-serif font-semibold text-ink">
         {note.linkedText.title}
        </div>
       )}
      </div>
     )}
    </form>
   </main>
  </div>
 );
}
