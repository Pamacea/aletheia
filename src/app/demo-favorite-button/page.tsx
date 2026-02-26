'use client';

import { useState } from 'react';
import { FavoriteButton } from '@/features/favorites/components';
import { Card } from '@/ui/molecules';

/**
 * Demo page showcasing the improved FavoriteButton component
 *
 * Features demonstrated:
 * - Automatic favorite status checking
 * - Optimistic UI updates (instant feedback)
 * - Loading states with spinner
 * - All three variants (icon, compact, button)
 */
export default function FavoriteButtonDemo() {
  const [selectedConceptId, setSelectedConceptId] = useState('demo-1');

  // Demo concepts with different IDs
  const concepts = [
    { id: 'demo-1', name: 'Being', description: 'The fundamental concept of existence' },
    { id: 'demo-2', name: 'Time', description: 'The progression of events from past to future' },
    { id: 'demo-3', name: 'Consciousness', description: 'The state of being aware and responsive' },
  ];

  const selectedConcept = concepts.find((c) => c.id === selectedConceptId)!;

  return (
    <div className="min-h-screen bg-paper-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl font-semibold text-ink mb-4">
            FavoriteButton Demo
          </h1>
          <p className="text-ink-light text-lg max-w-2xl mx-auto">
            Demonstrating the improved favorite button with optimistic UI updates,
            automatic status checking, and smooth animations.
          </p>
        </div>

        {/* Variant Showcase */}
        <div className="space-y-8">
          {/* Icon Variant */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-ink mb-2">Icon Variant</h2>
                <p className="text-ink-light text-sm">
                  Minimal icon-only button, perfect for cards and lists
                </p>
              </div>
              <FavoriteButton
                entityType="CONCEPT"
                entityId={selectedConcept.id}
                variant="icon"
              />
            </div>
          </Card>

          {/* Compact Variant */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-ink mb-2">Compact Variant</h2>
                <p className="text-ink-light text-sm">
                  Small button with optional label, great for tables
                </p>
              </div>
              <FavoriteButton
                entityType="CONCEPT"
                entityId={selectedConcept.id}
                variant="compact"
                showLabel
              />
            </div>
          </Card>

          {/* Button Variant */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-ink mb-2">Button Variant</h2>
                <p className="text-ink-light text-sm">
                  Full-sized button with prominent styling
                </p>
              </div>
              <FavoriteButton
                entityType="CONCEPT"
                entityId={selectedConcept.id}
                variant="button"
                showLabel
              />
            </div>
          </Card>

          {/* Interactive Demo */}
          <Card className="p-6 bg-gradient-to-br from-rose-50 to-paper-50">
            <h2 className="text-xl font-semibold text-ink mb-4">
              Interactive Demo
            </h2>
            <p className="text-ink-light mb-4">
              Select a concept and try the favorite button. Notice how it updates instantly!
            </p>

            {/* Concept Selector */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {concepts.map((concept) => (
                <button
                  key={concept.id}
                  onClick={() => setSelectedConceptId(concept.id)}
                  className={`
                    px-4 py-2 rounded-lg border-2 font-medium transition-all duration-200
                    ${
                      selectedConceptId === concept.id
                        ? 'bg-rose-100 border-rose-400 text-rose-700'
                        : 'bg-paper-50 border-paper-300 text-ink-light hover:border-rose-400 hover:bg-rose-50'
                    }
                  `}
                >
                  {concept.name}
                </button>
              ))}
            </div>

            {/* Selected Concept Card */}
            <div className="bg-white border-2 border-paper-300 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-ink mb-2">
                    {selectedConcept.name}
                  </h3>
                  <p className="text-ink-light">
                    {selectedConcept.description}
                  </p>
                </div>
                <FavoriteButton
                  entityType="CONCEPT"
                  entityId={selectedConcept.id}
                  variant="icon"
                  className="flex-shrink-0"
                />
              </div>

              {/* All Variants for This Concept */}
              <div className="flex gap-3 pt-4 border-t border-paper-200 flex-wrap">
                <FavoriteButton
                  entityType="CONCEPT"
                  entityId={selectedConcept.id}
                  variant="icon"
                />
                <FavoriteButton
                  entityType="CONCEPT"
                  entityId={selectedConcept.id}
                  variant="compact"
                  showLabel
                />
                <FavoriteButton
                  entityType="CONCEPT"
                  entityId={selectedConcept.id}
                  variant="button"
                  showLabel
                />
              </div>
            </div>
          </Card>

          {/* Feature List */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-ink mb-4">
              Features Demonstrated
            </h2>
            <ul className="space-y-3">
              {[
                '✅ Instant UI updates (optimistic UI)',
                '✅ Automatic favorite status checking',
                '✅ Loading spinner during server action',
                '✅ Error rollback if server fails',
                '✅ Smooth animations and transitions',
                '✅ Heart icon (filled when favorited)',
                '✅ Rose color scheme for favorites',
                '✅ Three variants: icon, compact, button',
                '✅ Proper ARIA labels for accessibility',
                '✅ 5-minute cache for performance',
              ].map((feature, index) => (
                <li key={index} className="text-ink-light flex items-center gap-2">
                  <span className="text-rose-500">✓</span>
                  <span>{feature.slice(2)}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Tips */}
          <Card className="p-6 bg-amber-50 border-amber-200">
            <h2 className="text-xl font-semibold text-amber-900 mb-4">
              Tips for Testing
            </h2>
            <ul className="space-y-2 text-amber-800">
              <li>• Click the favorite buttons rapidly to see optimistic updates</li>
              <li>• Refresh the page to verify persistence</li>
              <li>• Check the Network tab to see server actions</li>
              <li>• Try with different concepts to see state isolation</li>
              <li>• Test keyboard navigation (Tab + Enter)</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
