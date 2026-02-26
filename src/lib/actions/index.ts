/**
 * Server Actions Barrel Export
 *
 * All server actions are exported from here for easy importing
 */

// Auth actions
export {
  signInWithEmail,
  signUpWithEmail,
  signInWithGithub,
  signInWithDiscord,
  signOut,
} from './auth';

// Auth session
export { getSession } from '../auth';

// Settings actions
export {
  updateProfile,
  uploadAvatar,
  deleteAvatar,
  getPreferences,
  updatePreferences,
  getNotificationSettings,
  updateNotifications,
  unsubscribeEmail,
  updatePrivacy,
  setProfileVisibility,
  exportData,
  deleteAccount,
  updateEmail,
  verifyEmailChange,
  updatePassword,
  getAllSettings,
} from './settings';

// Concepts actions
export {
  getConcept,
  getConcepts,
  getCategories,
} from './concepts';

// Citations actions
export {
  getQuotes,
  getQuoteBySlug,
  createQuote,
  updateQuote,
  deleteQuote,
  toggleQuotePublic,
} from './citations';

// Philosophers/Courants actions
export {
  getPhilosophers,
  getPhilosopherBySlug,
} from './philosophers';

export {
  getMovements,
  getMovementBySlug,
  getCurrentDetails,
  getPhilosophicalCurrents,
} from './courants';

// Graph actions
export {
  getUnifiedGraphData,
} from './graph';

// Concepts graph actions
export {
  getConceptsForGraph,
  getConceptRelations,
} from './concepts';

// Notes actions
export {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  getUserTags,
  getNotesStats,
} from './notes';

// Profile/User actions
export {
  getUserProgress,
  getUserStats,
} from './user';

export {
  getUserActivity,
  getUserAchievements,
  getUserLevel,
  getExtendedUserStats,
  updateProfile as updateProfileData,
  updateBio,
} from './profile';
