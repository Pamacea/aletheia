/**
 * Profile Tabs Components - Barrel Export
 *
 * Exports all tab content components for the profile page.
 * Each tab displays different aspects of user data: overview, progress, achievements, activity.
 *
 * @example
 * ```tsx
 * import { OverviewTab, ProgressTab, AchievementsTab, ActivityTab } from '@/app/profile/components/tabs';
 *
 * <OverviewTab stats={stats} levelData={levelData} />
 * <ProgressTab progress={progress} />
 * <AchievementsTab achievements={achievements} />
 * <ActivityTab activities={activities} />
 * ```
 */

// ============================================================================
// TAB COMPONENTS
// ============================================================================

export { OverviewTab } from './OverviewTab';
export type { OverviewTabProps } from './OverviewTab';

export { ProgressTab } from './ProgressTab';
export type { ProgressTabProps } from './ProgressTab';

export { AchievementsTab } from './AchievementsTab';
export type { AchievementsTabProps } from './AchievementsTab';

export { ActivityTab } from './ActivityTab';
export type { ActivityTabProps } from './ActivityTab';
