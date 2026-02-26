'use client';

import { useToastActions } from '@/ui/hooks/useToastActions';
import { Button } from '@/ui/atoms/Button';
import { Card } from '@/ui/molecules/Card';

/**
 * Demo page showcasing the Toast notification system
 * Access at: /demo-toasts
 *
 * This component demonstrates all toast types and helper functions
 */
export default function ToastsDemoPage() {
  const {
    showXPGained,
    showAchievementUnlocked,
    showSuccess,
    showError,
    showCustomToast,
  } = useToastActions();

  const examples = [
    {
      title: 'XP Notifications',
      description: 'Show XP gained for different actions',
      actions: [
        {
          label: 'Small XP (+10)',
          onClick: () => showXPGained(10, 'Quick action'),
          variant: 'secondary' as const,
        },
        {
          label: 'Medium XP (+50)',
          onClick: () => showXPGained(50, 'Created citation'),
          variant: 'secondary' as const,
        },
        {
          label: 'Large XP (+100)',
          onClick: () => showXPGained(100, 'Completed concept map'),
          variant: 'secondary' as const,
        },
        {
          label: 'Massive XP (+500)',
          onClick: () => showXPGained(500, 'Unlocked achievement chain'),
          variant: 'secondary' as const,
        },
      ],
    },
    {
      title: 'Achievement Unlocks',
      description: 'Celebrate user achievements',
      actions: [
        {
          label: 'First Steps',
          onClick: () => showAchievementUnlocked('First Steps', '🎯', 50),
          variant: 'secondary' as const,
        },
        {
          label: 'Scholar',
          onClick: () => showAchievementUnlocked('Scholar', '📚', 100),
          variant: 'secondary' as const,
        },
        {
          label: 'Philosopher',
          onClick: () => showAchievementUnlocked('Philosopher', '🏛️', 200),
          variant: 'secondary' as const,
        },
        {
          label: 'Sage',
          onClick: () => showAchievementUnlocked('Sage', '🌟', 500),
          variant: 'secondary' as const,
        },
      ],
    },
    {
      title: 'Success & Error',
      description: 'General feedback notifications',
      actions: [
        {
          label: 'Success Message',
          onClick: () => showSuccess('Operation completed successfully'),
          variant: 'primary' as const,
        },
        {
          label: 'Error Message',
          onClick: () => showError('Something went wrong'),
          variant: 'danger' as const,
        },
        {
          label: 'Custom Success',
          onClick: () => showSuccess('Data saved', 'Saved!'),
          variant: 'primary' as const,
        },
        {
          label: 'Custom Error',
          onClick: () => showError('Network error', 'Connection Failed'),
          variant: 'danger' as const,
        },
      ],
    },
    {
      title: 'Advanced Examples',
      description: 'Complex notification scenarios',
      actions: [
        {
          label: 'Action Chain',
          onClick: () => {
            showXPGained(25, 'Step 1: Created draft');
            setTimeout(() => showXPGained(25, 'Step 2: Added content'), 500);
            setTimeout(() => showXPGained(50, 'Step 3: Published!'), 1000);
          },
          variant: 'secondary' as const,
        },
        {
          label: 'Achievement + XP',
          onClick: () => {
            showAchievementUnlocked('Master Creator', '👑', 100);
            setTimeout(() => showXPGained(100, 'Bonus XP'), 500);
          },
          variant: 'secondary' as const,
        },
        {
          label: 'Rapid Fire',
          onClick: () => {
            for (let i = 0; i < 5; i++) {
              setTimeout(() => showXPGained(10, `Action ${i + 1}`), i * 200);
            }
          },
          variant: 'secondary' as const,
        },
        {
          label: 'Custom Toast',
          onClick: () => {
            showCustomToast({
              type: 'xp',
              title: 'Level Up!',
              message: 'You reached level 10',
              xp: 1000,
            });
          },
          variant: 'secondary' as const,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-paper-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-ink mb-4">
            Toast Notification System
          </h1>
          <p className="text-lg text-ink-lighter">
            Interactive demo of the toast notification components
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="p-6">
              <h2 className="text-2xl font-semibold text-ink mb-2">
                {section.title}
              </h2>
              <p className="text-ink-lighter mb-4">{section.description}</p>
              <div className="flex flex-col gap-3">
                {section.actions.map((action, actionIndex) => (
                  <Button
                    key={actionIndex}
                    onClick={action.onClick}
                    variant={action.variant}
                    className="w-full"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Usage Guide */}
        <Card className="mt-8 p-6">
          <h2 className="text-2xl font-semibold text-ink mb-4">
            Usage Guide
          </h2>
          <div className="prose prose-sm max-w-none">
            <h3 className="text-lg font-semibold text-ink mt-4 mb-2">
              Basic Usage
            </h3>
            <pre className="bg-paper-200 p-4 rounded-lg overflow-x-auto text-sm">
              {`import { useToastActions } from '@/ui/hooks/useToastActions';

function MyComponent() {
  const { showXPGained, showAchievementUnlocked } = useToastActions();

  return (
    <button onClick={() => showXPGained(50, 'Action completed')}>
      Gain XP
    </button>
  );
}`}
            </pre>

            <h3 className="text-lg font-semibold text-ink mt-6 mb-2">
              With TanStack Query
            </h3>
            <pre className="bg-paper-200 p-4 rounded-lg overflow-x-auto text-sm">
              {`import { useMutationWithXP } from '@/ui/hooks/useMutationWithToast';

const { executeWithXP, isLoading } = useMutationWithXP(mutation, {
  getXPFromResponse: (data) => data.xpGained || 0,
  actionName: 'Created citation',
});`}
            </pre>

            <h3 className="text-lg font-semibold text-ink mt-6 mb-2">
              Available Toast Types
            </h3>
            <ul className="list-disc list-inside text-ink-lighter space-y-1">
              <li>
                <code>showXPGained(xp, action)</code> - Sepia-colored XP toast
              </li>
              <li>
                <code>showAchievementUnlocked(name, icon, xpReward)</code> - Purple achievement toast
              </li>
              <li>
                <code>showSuccess(message, title?)</code> - Green success toast
              </li>
              <li>
                <code>showError(message, title?)</code> - Red error toast
              </li>
              <li>
                <code>showCustomToast(toast)</code> - Custom toast object
              </li>
            </ul>
          </div>
        </Card>

        {/* Integration Info */}
        <Card className="mt-6 p-6 bg-sepia-50 border-sepia-300">
          <h2 className="text-xl font-semibold text-ink mb-3">
            Integration Status
          </h2>
          <ul className="space-y-2 text-ink-lighter">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              ToastProvider integrated in layout.tsx
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              CSS animations added to globals.css
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Exported from @/ui barrel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              TypeScript types defined
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Documentation available at docs/TOAST_SYSTEM.md
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
