import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Edit3Icon, EyeIcon } from 'lucide-react';
import { BackButton } from '@/ui/components/BackButton';
import { getNote } from '@/lib/actions/notes';
import { NoteEditor } from '@/features/notes/components/NoteEditor';
import { NoteVisibilityToggle } from '@/features/notes/components/NoteVisibilityToggle';
import { NoteDeleteButton } from '@/features/notes/components/NoteDeleteButton';
import { getSession } from '@/lib/auth';

export const revalidate = 60;

interface NotePageProps {
 params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NotePageProps) {
 const { id } = await params;
 const session = await getSession();
 const note = await getNote(id, session?.user?.id);

 if (!note) {
  return {
   title: 'Note non trouvée - Aletheia',
  };
 }

 return {
  title: `${note.title} - Aletheia`,
  description: note.content?.slice(0, 160) || 'Note personnelle',
 };
}

export default async function NotePage({ params }: NotePageProps) {
 const [{ id }, session] = await Promise.all([
   params,
   getSession(),
 ]);
 const userId = session?.user?.id;

 // Get the note with userId for proper access check
 const note = await getNote(id, userId);

 if (!note) {
  notFound();
 }

 const isOwner = userId && note.userId === userId;

 return (
  <div className="min-h-screen bg-paper-50">
   {/* Header */}
   <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
    <div className="max-w-5xl mx-auto px-4">
     <div className="flex items-center justify-between">
      <BackButton href="/profile/notes" label="Retour" />

      {isOwner && (
       <div className="flex items-center gap-2">
        <NoteVisibilityToggle note={note} />
        <NoteDeleteButton noteId={id} />
       </div>
      )}
     </div>
    </div>
   </header>

   {/* Main Content */}
   <main className="max-w-5xl mx-auto px-4 py-8 lg:px-8">
    {/* Note Info Bar */}
    <div className="mb-6 flex items-center justify-between">
     <div className="flex items-center gap-4 text-sm text-ink-light">
      <span>
       Créée {new Date(note.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
       })}
      </span>
      <span>•</span>
      <span>
       Modifiée {new Date(note.updatedAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
       })}
      </span>
      {note.isPublic && (
       <>
        <span>•</span>
        <span className="flex items-center gap-1 text-sepia-600">
         <EyeIcon className="w-3 h-3" />
         Publique
        </span>
       </>
      )}
     </div>

     {isOwner && (
      <Link
       href={`/profile/notes/${id}/edit`}
       className="inline-flex items-center gap-2 px-4 py-2 bg-sepia-600 hover:bg-sepia-700 text-paper-50 font-medium border-2 border-sepia-600 transition-all duration-200"
      >
       <Edit3Icon className="w-4 h-4" />
       Modifier
      </Link>
     )}
    </div>

    {/* Linked Entity */}
    {(note.linkedConcept || note.linkedText) && (
     <div className="mb-6 p-4 bg-sepia-50 border-2 border-sepia-200 ">
      <div className="text-sm text-sepia-600 mb-1">Liée à :</div>
      {note.linkedConcept && (
       <Link
        href={`/conceptuaire/${note.linkedConcept.slug}`}
        className="text-lg font-serif font-semibold text-ink hover:text-sepia-600 transition-colors"
       >
        {note.linkedConcept.name}
       </Link>
      )}
      {note.linkedText && (
       <Link
        href={`/bibliotheque/${note.linkedText.slug}`}
        className="text-lg font-serif font-semibold text-ink hover:text-sepia-600 transition-colors"
       >
        {note.linkedText.title}
       </Link>
      )}
     </div>
    )}

    {/* Tags */}
    {note.tags.length > 0 && (
     <div className="mb-6 flex flex-wrap gap-2">
      {note.tags.map((tag) => (
       <Link
        key={tag}
        href={`/profile/notes?tags=${tag}`}
        className="inline-flex items-center px-3 py-1 bg-paper-200 text-ink hover:bg-sepia-100 hover:text-sepia-700 text-sm font-medium transition-all"
       >
        #{tag}
       </Link>
      ))}
     </div>
    )}

    {/* Note Content (Read-only view) */}
    <div className="bg-white border-2 border-paper-300 p-8">
     <NoteEditor
      initialTitle={note.title}
      initialContent={note.content}
      readOnly
      className="min-h-[400px]"
     />
    </div>

    {/* Note Stats */}
    <div className="mt-6 flex items-center gap-6 text-sm text-ink-light">
     <span>{note.content.length} caractères</span>
     <span>{note.content.split(/\s+/).filter(Boolean).length} mots</span>
     <span>{note.content.split(/\n+/).filter(Boolean).length} lignes</span>
    </div>
   </main>
  </div>
 );
}
