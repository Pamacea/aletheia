'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

export type ProfileTab = 'overview' | 'progress' | 'achievements' | 'activity';

interface ProfileTabsProps {
  defaultTab?: ProfileTab;
  overview: React.ReactNode;
  progress: React.ReactNode;
  achievements: React.ReactNode;
  activity: React.ReactNode;
}

interface TabConfig {
  id: ProfileTab;
  label: string;
  icon: string;
}

const tabs: TabConfig[] = [
  { id: 'overview', label: 'Aperçu', icon: '' },
  { id: 'progress', label: 'Progression', icon: '' },
  { id: 'achievements', label: 'Succès', icon: '' },
  { id: 'activity', label: 'Activité', icon: '' },
];

/**
 * ProfileTabs Component
 *
 * Tab navigation system with smooth animations for the profile page.
 * Features animated active indicator, smooth content transitions, and responsive design.
 *
 * @example
 * ```tsx
 * <ProfileTabs
 *   defaultTab="overview"
 *   overview={<OverviewContent />}
 *   progress={<ProgressContent />}
 *   achievements={<AchievementsContent />}
 *   activity={<ActivityContent />}
 * />
 * ```
 */
export function ProfileTabs({
  defaultTab = 'overview',
  overview,
  progress,
  achievements,
  activity,
}: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>(defaultTab);

  const tabContent = {
    overview,
    progress,
    achievements,
    activity,
  };

  return (
    <div className="bg-white border-2 border-paper-300 overflow-hidden">
      {/* Tab Headers */}
      <div className="border-b-2 border-paper-300">
        <nav className="flex overflow-x-auto" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={cn(
                'relative flex items-center gap-2 px-6 py-4 font-medium text-sm whitespace-nowrap transition-all border-b-2',
                activeTab === tab.id
                  ? 'text-sepia-600 border-sepia-600 bg-sepia-50/50'
                  : 'text-ink-light border-transparent hover:text-ink hover:border-paper-400 hover:bg-paper-50'
              )}
            >
              {tab.icon && <span className="text-lg">{tab.icon}</span>}
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sepia-600"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content with Animation */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`panel-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
