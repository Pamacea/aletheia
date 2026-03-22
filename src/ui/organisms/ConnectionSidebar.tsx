'use client';

import { useState } from 'react';
import { BookIcon, PhilosophersIcon, QuoteIcon } from '@/ui/icons/NavigationIcons';
import { ChevronDownIcon, ChevronRightIcon, XIcon } from '@/ui/icons/UIIcons';
import { ZapIcon } from '@/ui/icons/StatusIcons';
import { LinkOrnate } from '@/ui/components/LinkOrnate';

interface ConnectionItem {
 id: string;
 name: string;
 slug?: string;
 description?: string;
 href?: string;
}

interface ConnectionSection {
 id: string;
 title: string;
 icon: 'concept' | 'philosopher' | 'source' | 'flashcard';
 items: ConnectionItem[];
 defaultOpen?: boolean;
}

interface ConnectionSidebarProps {
 sections: ConnectionSection[];
 isOpen: boolean;
 onClose: () => void;
}

const sectionIcons = {
 concept: BookIcon,
 philosopher: PhilosophersIcon,
 source: QuoteIcon,
 flashcard: ZapIcon,
};

export function ConnectionSidebar({ sections, isOpen, onClose }: ConnectionSidebarProps) {
 const [openSections, setOpenSections] = useState<Set<string>>(
  new Set(sections.filter(s => s.defaultOpen).map(s => s.id))
 );

 const toggleSection = (id: string) => {
  setOpenSections(prev => {
   const next = new Set(prev);
   if (next.has(id)) {
    next.delete(id);
   } else {
    next.add(id);
   }
   return next;
  });
 };

 if (!isOpen) return null;

 return (
  <>
   {/* Mobile backdrop */}
   <div
    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
    onClick={onClose}
   />

   {/* Sidebar */}
   <aside className="fixed right-0 top-0 h-full w-[clamp(16rem,40vw,24rem)] bg-paper-50 border-l-2 border-paper-200 shadow-xl z-50 overflow-y-auto">
    {/* Header */}
    <div className="sticky top-0 bg-paper-50 border-b-2 border-sepia-600 p-4 flex items-center justify-between z-10">
     <h2 className="font-serif text-lg font-semibold text-ink">Connexions</h2>
     <button
      onClick={onClose}
      className="p-2 hover:bg-paper-200 transition-colors"
      aria-label="Fermer"
     >
      <XIcon className="w-5 h-5" />
     </button>
    </div>

    {/* Sections */}
    <div className="p-4 space-y-4">
     {sections.map(section => {
      const Icon = sectionIcons[section.icon];
      const isOpen = openSections.has(section.id);

      return (
       <div key={section.id} className="bg-white border-2 border-paper-200 overflow-hidden">
        <button
         onClick={() => toggleSection(section.id)}
         className="w-full px-4 py-3 flex items-center justify-between hover:bg-paper-50 transition-colors"
        >
         <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-sepia-600" />
          <span className="font-medium text-ink">{section.title}</span>
          <span className="text-xs bg-sepia-100 text-sepia-700 px-2 py-0.5">
           {section.items.length}
          </span>
         </div>
         {isOpen ? (
          <ChevronDownIcon className="w-4 h-4 text-ink-light" />
         ) : (
          <ChevronRightIcon className="w-4 h-4 text-ink-light" />
         )}
        </button>

        {isOpen && section.items.length > 0 && (
         <div className="px-4 py-2 space-y-2 border-t border-paper-200">
          {section.items.map(item => (
           item.href ? (
            <LinkOrnate
             key={item.id}
             href={item.href}
             className="block p-2 hover:bg-paper-100 transition-colors"
            >
             <div className="font-medium text-ink text-sm living-word">
              {item.name}
             </div>
             {item.description && (
              <div className="text-xs text-ink-light mt-1 line-clamp-2">
               {item.description}
              </div>
             )}
            </LinkOrnate>
           ) : (
            <div
             key={item.id}
             className="block p-2 hover:bg-paper-100 transition-colors cursor-pointer"
            >
             <div className="font-medium text-ink text-sm living-word">
              {item.name}
             </div>
             {item.description && (
              <div className="text-xs text-ink-light mt-1 line-clamp-2">
               {item.description}
              </div>
             )}
            </div>
           )
          ))}
         </div>
        )}

        {isOpen && section.items.length === 0 && (
         <div className="px-4 py-4 border-t border-paper-200 text-center text-sm text-ink-light">
          Aucune connexion
         </div>
        )}
       </div>
      );
     })}

     {sections.length === 0 && (
      <div className="text-center py-12 text-ink-light">
       <BookIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
       <p className="text-sm">Aucune connexion disponible</p>
      </div>
     )}
    </div>
   </aside>
  </>
 );
}

interface ConnectionToggleProps {
 count: number;
 onClick: () => void;
 isOpen: boolean;
}

export function ConnectionToggle({ count, onClick, isOpen }: ConnectionToggleProps) {
 return (
  <button
   onClick={onClick}
   className={`
    fixed right-4 bottom-4 z-30 flex items-center gap-2 px-4 py-3
    shadow-lg border-2 transition-all duration-200
    ${isOpen
     ? 'bg-sepia-600 border-sepia-600 text-white'
     : 'bg-white border-sepia-600 text-sepia-600 hover:bg-sepia-50'
    }
   `}
   aria-label={isOpen ? 'Fermer les connexions' : 'Voir les connexions'}
  >
   <span className="font-medium">{count}</span>
   <span className="text-sm">connexions</span>
   {isOpen ? (
    <XIcon className="w-5 h-5" />
   ) : (
    <BookIcon className="w-5 h-5" />
   )}
  </button>
 );
}
