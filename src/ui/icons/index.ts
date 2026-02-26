/**
 * Icon components organized by category
 * All icons support className and style props
 */

// Base type for all icons
export type LucideIcon = React.ComponentType<{
  className?: string;
  style?: React.CSSProperties;
}>;

// Navigation Icons
export {
  HomeIcon,
  NetworkIcon,
  GraphIcon,
  QuoteIcon,
  PhilosophersIcon,
  CurrentsIcon,
  BookIcon,
  BookOpenIcon,
  FileTextIcon,
} from './NavigationIcons';

// Action Icons
export {
  SearchIcon,
  EditIcon,
  CheckIcon,
  TrashIcon,
  DownloadIcon,
  PlusIcon,
  FilterIcon,
  CameraIcon,
} from './ActionIcons';

// User & Auth Icons
export {
  UserIcon,
  LoginIcon,
  LogoutIcon,
  MailIcon,
  LockIcon,
  KeyIcon,
  ShieldIcon,
} from './UserIcons';

// UI Icons
export {
  MenuIcon,
  CloseIcon,
  XIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Loader2Icon,
  CogIcon,
  BellIcon,
  SettingsIcon,
  RefreshCwIcon,
  EyeIcon,
  PinIcon,
} from './UIIcons';

// Status & Feedback Icons
export {
  AlertCircleIcon,
  AlertTriangleIcon,
  StarIcon,
  TrophyIcon,
  AwardIcon,
  ZapIcon,
  FlameIcon,
  ActivityIcon,
  TrendingUpIcon,
  ClockIcon,
  CalendarIcon,
  HeartIcon,
  InboxIcon,
  CheckCircleIcon,
} from './StatusIcons';

// Social & Miscellaneous Icons
export {
  GithubIcon,
  BookmarkIcon,
  Share2Icon,
  Link2Icon,
  MessageSquareIcon,
  SparklesIcon,
  FolderIcon,
  GlobeIcon,
  UsersIcon,
} from './SocialIcons';

// Analytics & Features Icons
export {
  ChartIcon,
  BarChart3Icon,
  BrainIcon,
  TargetIcon,
  ConceptIcon,
  LayoutGridIcon,
  LayoutDashboardIcon,
  LightbulbIcon,
  GitBranchIcon,
} from './FeatureIcons';
