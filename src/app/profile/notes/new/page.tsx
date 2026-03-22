import { redirect } from 'next/navigation';
import { createNote } from '@/lib/actions/notes';
import { BackButton } from '@/ui/components/BackButton';
import { NoteFormWrapper } from '@/features/notes/components/NoteFormWrapper';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth';

interface NewNotePageProps {
 searchParams: Promise<{
  linkedEntityType?: string;
  linkedEntityId?: string;
  linkedEntityName?: string;
 }>;
}

export const metadata = {
 title: 'Nouvelle Note - Aletheia',
 description: 'Créez une nouvelle note',
};

export default async function NewNotePage({ searchParams }: NewNotePageProps) {
 const params = await searchParams;
 const { linkedEntityType, linkedEntityId, linkedEntityName } = params;

 // Get actual userId from session
 const session = await getSession();
 if (!session?.user?.id) {
  redirect('/auth/signin');
 }
 const userId = session.user.id;

 async function handleCreate(formData: FormData) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
   redirect('/auth/signin');
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const tagsInput = formData.get('tags') as string;
  const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : [];
  const linkedEntityType = formData.get('linkedEntityType') as string | null;
  const linkedEntityId = formData.get('linkedEntityId') as string | null;

  const note = await createNote({
   title,
   content,
   tags,
   linkedEntityType,
   linkedEntityId,
  });

  revalidatePath('/profile/notes');
  revalidatePath(`/profile/notes/${note.id}`);
  redirect('/profile/notes');
 }

 return (
  <div className="min-h-screen bg-paper-50">
   {/* Header */}
   <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
    <div className="max-w-5xl mx-auto px-4">
     <div className="flex items-center justify-between">
      <BackButton href="/profile/notes" label="Retour" />
      <h1 className="font-serif text-2xl font-semibold text-ink">
       Nouvelle Note
      </h1>
      <div className="w-32" />
     </div>
    </div>
   </header>

   {/* Main Content */}
   <main className="max-w-5xl mx-auto px-4 py-8 lg:px-8">
    <form action={handleCreate}>
     {/* Note Editor */}
     <div className="bg-white border-2 border-paper-300 p-6 mb-6">
      <NoteFormWrapper
       linkedEntityType={linkedEntityType}
       linkedEntityId={linkedEntityId}
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
       placeholder="philosophie, métaphysique, éthique..."
       className="w-full px-4 py-2 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none transition-colors"
      />
      <p className="text-sm text-ink-light mt-2">
       Ajoutez des tags pour organiser vos notes
      </p>
     </div>

     {/* Linked Entity Info */}
     {linkedEntityType && linkedEntityId && (
      <div className="bg-sepia-50 border-2 border-sepia-200 p-4 mb-6">
       <div className="text-sm text-sepia-600 mb-1">
        Cette note sera liée à :
       </div>
       <div className="text-lg font-serif font-semibold text-ink">
        {linkedEntityName || linkedEntityType}
       </div>
       <input type="hidden" name="linkedEntityType" value={linkedEntityType} />
       <input type="hidden" name="linkedEntityId" value={linkedEntityId} />
      </div>
     )}
    </form>
   </main>
  </div>
 );
}
