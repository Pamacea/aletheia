// ============================================================================
// ALETHEIA - UI COMPONENTS BARREL EXPORT
// ============================================================================
// Import all UI components from this central location
// Usage: import { Button, Input, Card } from '@/ui';
// ============================================================================

// ============================================================================
// ATOMS
// ============================================================================
export * from './atoms/Button';
export * from './atoms/Input';
export * from './atoms/Textarea';
export * from './atoms/Select';
export * from './atoms/Checkbox';
export * from './atoms/Label';
export * from './atoms/Error';
export * from './atoms/Skeleton';

// ============================================================================
// MOLECULES
// ============================================================================
export * from './molecules/Card';
export * from './molecules/Badge';
export * from './molecules/Modal';
export * from './molecules/Tooltip';
export * from './molecules/Avatar';
export * from './molecules/Rating';
export * from './molecules/Toast';
export { ToastProvider, useToast } from './molecules/ToastProvider';

// ============================================================================
// COMPONENTS
// ============================================================================
export { Sidebar, SidebarSkeleton } from './components/Sidebar';
export { LinkOrnate } from './components/LinkOrnate';
export { ButtonOrnate } from './components/ButtonOrnate';
export { PageEffects } from './components/PageEffects';
export { HomePageEffects } from './components/HomePageEffects';
export { ScrollReveal } from './components/ScrollReveal';
export { CursorCustom } from './components/CursorCustom';
export { Navigation } from './components/Navigation';
export { NavigationWrapper } from './components/NavigationWrapper';
export { Footer } from './components/Footer';

// ============================================================================
// ICONS
// ============================================================================
// Export all icons from the icons directory
export * from './icons';

// Legacy: Also export from CustomIcons for backward compatibility
export {
  HomeIcon,
  NetworkIcon,
  GraphIcon,
  QuoteIcon,
  PhilosophersIcon,
  CurrentsIcon,
  SparklesIcon,
  UserIcon,
  LoginIcon,
  LogoutIcon,
  MenuIcon,
  CloseIcon,
  SearchIcon,
  BookOpenIcon,
  LightbulbIcon,
  GitBranchIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  Loader2Icon,
  TrendingUpIcon,
  ConceptIcon,
} from './components/CustomIcons';

// ============================================================================
// RE-EXPORT ALL ICONS (convenience)
// ============================================================================
export * as Icons from './icons';
