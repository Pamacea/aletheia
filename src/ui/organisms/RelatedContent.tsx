import Link from 'next/link';
import { BookIcon, PhilosophersIcon, QuoteIcon } from '@/ui/icons/NavigationIcons';
import { ArrowRightIcon } from '@/ui/icons/UIIcons';
import { LinkOrnate } from '@/ui/components/LinkOrnate';

export interface RelatedItem {
 id: string;
 name: string;
 slug: string;
 description?: string;
 type: 'concept' | 'philosopher' | 'current' | 'source';
}

export interface RelatedSection {
 title: string;
 icon: 'concept' | 'philosopher' | 'source' | 'current';
 items: RelatedItem[];
 href: string;
 linkText: string;
}

interface RelatedContentProps {
 sections: RelatedSection[];
}

const sectionConfig = {
 concept: {
  icon: BookIcon,
  color: 'text-sepia-600',
  bgColor: 'bg-amber-50',
 },
 philosopher: {
  icon: PhilosophersIcon,
  color: 'text-blue-600',
  bgColor: 'bg-blue-50',
 },
 source: {
  icon: QuoteIcon,
  color: 'text-green-600',
  bgColor: 'bg-green-50',
 },
 current: {
  icon: BookIcon,
  color: 'text-purple-600',
  bgColor: 'bg-purple-50',
 },
};

export function RelatedContent({ sections }: RelatedContentProps) {
 if (sections.length === 0 || sections.every(s => s.items.length === 0)) {
  return null;
 }

 return (
  <div className="border-t-2 border-paper-200 bg-paper-50 py-12">
   <div className="max-w-7xl mx-auto px-4">
    <h2 className="font-serif text-2xl font-semibold text-ink mb-8">
     Pour aller plus loin
    </h2>

    <div className="space-y-8">
     {sections.map(section => {
      const config = sectionConfig[section.icon];
      const Icon = config.icon;

      if (section.items.length === 0) return null;

      return (
       <section key={section.title} className="bg-white border-2 border-paper-200 p-6">
        <div className="flex items-center justify-between mb-4">
         <div className="flex items-center gap-2">
          <div className={`p-2 ${config.bgColor}`}>
           <Icon className={`w-5 h-5 ${config.color}`} />
          </div>
          <h3 className="font-serif text-xl font-semibold text-ink">
           {section.title}
          </h3>
         </div>
         <Link
          href={section.href}
          className="inline-flex items-center gap-1 text-sm text-sepia-600 hover:text-sepia-700 font-medium group"
         >
          {section.linkText}
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {section.items.slice(0, 6).map(item => (
          <LinkOrnate
           key={item.id}
           href={
            item.type === 'concept'
             ? `/conceptuaire/${item.slug}`
             : item.type === 'philosopher'
              ? `/philosophes/${item.slug}`
              : item.type === 'current'
               ? `/courants/${item.slug}`
               : `/bibliotheque#${item.slug}`
           }
           className="p-4 border-2 border-paper-200 hover:border-sepia-600 hover:shadow-md transition-all"
          >
           <span className="living-word font-medium text-ink">
            {item.name}
           </span>
           {item.description && (
            <p className="text-sm text-ink-light mt-1 line-clamp-2">
             {item.description}
            </p>
           )}
          </LinkOrnate>
         ))}
        </div>

        {section.items.length > 6 && (
         <div className="mt-4 text-center">
          <Link
           href={section.href}
           className="inline-flex items-center gap-2 text-sm text-sepia-600 hover:text-sepia-700 font-medium"
          >
           Voir les {section.items.length} {section.title.toLowerCase()}
           <ArrowRightIcon className="w-4 h-4" />
          </Link>
         </div>
        )}
       </section>
      );
     })}
    </div>
   </div>
  </div>
 );
}
