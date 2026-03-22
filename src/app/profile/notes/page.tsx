import Link from 'next/link';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';
import { getNotes, getUserTags, getNotesStats } from '@/lib/actions/notes';
import { BackButton } from '@/ui/components/BackButton';
import { NotesListClient } from '@/features/notes/components/NotesListClient';
import { Input } from '@/ui/atoms/Input';
import { Badge } from '@/ui/molecules/Badge';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata = {
 title: 'Mes Notes - Aletheia',
 description: 'Gérez vos notes personnelles',
};

interface NotesPageProps {
 searchParams: Promise<{
  search?: string;
  tags?: string;
  page?: string;
 }>;
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
 const params = await searchParams;
 const search = params.search || '';
 const tagParams = params.tags ? params.tags.split(',') : [];
 const page = parseInt(params.page || '1');

 // Get actual userId from session
 const session = await getSession();
 if (!session?.user?.id) {
  redirect('/auth/signin');
 }
 const userId = session.user.id;

 const [notesData, allTags, stats] = await Promise.all([
  getNotes({
   userId,
   search,
   tags: tagParams,
   page,
   limit: 12,
  }),
  getUserTags(userId),
  getNotesStats(userId),
 ]);

 const { notes, total, pages, currentPage } = notesData;

 return (
  <div className="min-h-screen bg-paper-50">
   {/* Header */}
   <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
    <div className="w-full px-4 sm:px-6 lg:px-8">
     <div className="flex items-center justify-between gap-2">
      <BackButton href="/profile/dashboard" label="Retour" />
      <h1 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-ink truncate">
       Mes Notes
      </h1>
      <Link
       href="/profile/notes/new"
       className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-sepia-600 hover:bg-sepia-700 text-paper-50 font-medium transition-colors flex-shrink-0"
      >
       <PlusIcon className="w-3.5 h-3.5" />
       <span className="hidden sm:inline">Nouvelle Note</span>
       <span className="sm:hidden">Créer</span>
      </Link>
     </div>
    </div>
   </header>

   {/* Main Content */}
   <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
    {/* Stats Bar */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
     <div className="bg-white border-2 border-paper-300 p-4 text-center">
      <div className="text-3xl font-bold text-sepia-600">{stats.total}</div>
      <div className="text-sm text-ink-light">Total Notes</div>
     </div>
     <div className="bg-white border-2 border-paper-300 p-4 text-center">
      <div className="text-3xl font-bold text-green-600">{stats.privateNotes}</div>
      <div className="text-sm text-ink-light">Privées</div>
     </div>
     <div className="bg-white border-2 border-paper-300 p-4 text-center">
      <div className="text-3xl font-bold text-blue-600">{stats.publicNotes}</div>
      <div className="text-sm text-ink-light">Publiques</div>
     </div>
     <div className="bg-white border-2 border-paper-300 p-4 text-center">
      <div className="text-3xl font-bold text-purple-600">{allTags.length}</div>
      <div className="text-sm text-ink-light">Tags</div>
     </div>
    </div>

    {/* Search Bar */}
    <div className="mb-6">
     <form className="relative">
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-paper-400" />
      <Input
       type="search"
       name="search"
       placeholder="Rechercher dans vos notes..."
       defaultValue={search}
       className="pl-12 bg-white"
      />
     </form>
    </div>

    {/* Tags Filter */}
    {allTags.length > 0 && (
     <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
       <FilterIcon className="w-5 h-5 text-ink-light" />
       <h3 className="text-sm font-semibold text-ink">Filtrer par tags</h3>
      </div>
      <div className="flex flex-wrap gap-2">
       <Link
        href="/profile/notes"
        className={cn(
         "px-3 py-1.5 text-sm font-medium transition-all",
         tagParams.length === 0
          ? "bg-sepia-600 text-paper-50"
          : "bg-paper-200 text-ink hover:bg-paper-300"
        )}
       >
        Tous
       </Link>
       {allTags.map((tag) => {
        const isActive = tagParams.includes(tag);
        const newTags = isActive
         ? tagParams.filter((t) => t !== tag)
         : [...tagParams, tag];
        const tagUrl = newTags.length > 0
         ? `/profile/notes?tags=${newTags.join(',')}${search ? `&search=${search}` : ''}`
         : `/profile/notes${search ? `?search=${search}` : ''}`;

        return (
         <Link
          key={tag}
          href={tagUrl}
          className={cn(
           "px-3 py-1.5 text-sm font-medium transition-all",
           isActive
            ? "bg-sepia-600 text-paper-50"
            : "bg-paper-200 text-ink hover:bg-paper-300"
          )}
         >
          {tag}
         </Link>
        );
       })}
      </div>
     </div>
    )}

    {/* Notes Grid */}
    {notes.length > 0 ? (
     <>
      <NotesListClient initialNotes={notes} />

      {/* Pagination */}
      {pages > 1 && (
       <div className="flex items-center justify-center gap-2 mt-12">
        {currentPage > 1 && (
         <Link
          href={`/profile/notes?page=${currentPage - 1}${search ? `&search=${search}` : ''}${tagParams.length > 0 ? `&tags=${tagParams.join(',')}` : ''}`}
          className="px-4 py-2 bg-paper-200 text-ink hover:bg-paper-300 transition-colors"
         >
          Précédent
         </Link>
        )}

        <div className="flex items-center gap-1">
         {Array.from({ length: pages }, (_, i) => i + 1).map((pageNum) => (
          <Link
           key={pageNum}
           href={`/profile/notes?page=${pageNum}${search ? `&search=${search}` : ''}${tagParams.length > 0 ? `&tags=${tagParams.join(',')}` : ''}`}
           className={cn(
            "w-10 h-10 flex items-center justify-center transition-colors",
            pageNum === currentPage
             ? "bg-sepia-600 text-paper-50"
             : "bg-paper-200 text-ink hover:bg-paper-300"
           )}
          >
           {pageNum}
          </Link>
         ))}
        </div>

        {currentPage < pages && (
         <Link
          href={`/profile/notes?page=${currentPage + 1}${search ? `&search=${search}` : ''}${tagParams.length > 0 ? `&tags=${tagParams.join(',')}` : ''}`}
          className="px-4 py-2 bg-paper-200 text-ink hover:bg-paper-300 transition-colors"
         >
          Suivant
         </Link>
        )}
       </div>
      )}
     </>
    ) : (
     /* Empty State */
     <div className="text-center py-24">
      <div className="max-w-lg mx-auto">
       <div className="mb-8 inline-block p-6 bg-paper-200 border-2 border-dashed border-sepia-300 ">
        <svg
         className="w-16 h-16 text-sepia-600 opacity-60"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
         />
        </svg>
       </div>
       <h3 className="text-3xl font-serif text-ink mb-4">
        {search || tagParams.length > 0
         ? 'Aucune note trouvée'
         : 'Commencez à prendre des notes'}
       </h3>
       <p className="text-ink-light text-lg mb-8">
        {search || tagParams.length > 0
         ? 'Essayez d\'autres critères de recherche'
         : 'Créez votre première note pour commencer à organiser vos pensées philosophiques'}
       </p>
       <Link
        href="/profile/notes/new"
        className="inline-flex items-center gap-2 px-6 py-3 bg-sepia-600 hover:bg-sepia-700 text-paper-50 font-medium transition-all duration-300"
       >
        <PlusIcon className="w-5 h-5" />
        Créer ma première note
       </Link>
      </div>
     </div>
    )}
    </div>
   </main>
  </div>
 );
}

function cn(...classes: (string | boolean | undefined | null)[]) {
 return classes.filter(Boolean).join(' ');
}
