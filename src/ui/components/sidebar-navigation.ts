/**
 * Navigation configuration for Sidebar and UserDropdown
 */

import { HomeIcon, NetworkIcon, GraphIcon, QuoteIcon, PhilosophersIcon, CurrentsIcon } from '@/ui/icons/NavigationIcons';

export interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Main navigation items for the application
 */
export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Accueil', icon: HomeIcon },
  { href: '/conceptuaire', label: 'Concepts', icon: NetworkIcon },
  { href: '/graphe', label: 'Graphe', icon: GraphIcon },
  { href: '/citations', label: 'Citations', icon: QuoteIcon },
  { href: '/philosophes', label: 'Philosophes', icon: PhilosophersIcon },
  { href: '/courants', label: 'Courants', icon: CurrentsIcon },
];
