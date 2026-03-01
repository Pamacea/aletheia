'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Library, CheckCircle2 } from 'lucide-react';
import { Button } from '@/ui/atoms/Button';
import { FlashcardEditor } from '@/features/flashcards/components/FlashcardEditor';
import type { FlashcardFormData } from '@/features/flashcards/types';
import { createFlashcard } from '@/features/flashcards/actions/flashcards';

interface CreateClientProps {
  userId: string;
  existingTags: string[];
}

export function CreateClient({ userId }: CreateClientProps) {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [createdCount, setCreatedCount] = useState(0);

  const handleSave = async (data: FlashcardFormData) => {
    try {
      await createFlashcard(data);
      setShowSuccess(true);
      setCreatedCount((prev) => prev + 1);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      // Optionally redirect or clear form
      // router.push('/flashcards');
    } catch (error) {
      console.error('Failed to create flashcard:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar bg-white border-b-2 border-sepia-600">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-sepia-900">Create Flashcard</h1>
              <p className="text-sm text-ink-light">Add new flashcards to your collection</p>
            </div>
            <div className="flex items-center gap-3">
              {createdCount > 0 && (
                <span className="text-sm text-sepia-600">
                  {createdCount} card{createdCount !== 1 ? 's' : ''} created
                </span>
              )}
              <Button href="/profile/flashcards" variant="secondary">
                <Library className="w-4 h-4" />
                Back to Deck
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Editor */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white  shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FlashcardEditor onSave={handleSave} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <div className="bg-sepia-50  p-6 border border-sepia-200">
              <h3 className="font-bold text-sepia-900 mb-4">Creation Tips</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-sepia-600 mt-1">•</span>
                  <span>
                    <strong>Keep questions focused:</strong> One concept per card for better retention
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sepia-600 mt-1">•</span>
                  <span>
                    <strong>Use cloze deletion:</strong> Great for definitions, formulas, and lists
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sepia-600 mt-1">•</span>
                  <span>
                    <strong>Add hints sparingly:</strong> Only for truly difficult concepts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sepia-600 mt-1">•</span>
                  <span>
                    <strong>Tag consistently:</strong> Use tags like 'metaphysics', 'ethics', 'logic'
                  </span>
                </li>
              </ul>
            </div>

            {/* Card Type Guide */}
            <div className="bg-white  shadow p-6">
              <h3 className="font-bold text-sepia-900 mb-4">Card Types</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-sepia-700">Basic</div>
                  <p className="text-ink-light">Simple front/back Q&A</p>
                </div>
                <div>
                  <div className="font-medium text-sepia-700">Cloze</div>
                  <p className="text-ink-light">Fill in the blank exercises</p>
                </div>
                <div>
                  <div className="font-medium text-sepia-700">Concept</div>
                  <p className="text-ink-light">Define philosophical concepts</p>
                </div>
                <div>
                  <div className="font-medium text-sepia-700">Quote</div>
                  <p className="text-ink-light">Identify philosophers and works</p>
                </div>
                <div>
                  <div className="font-medium text-sepia-700">Essay</div>
                  <p className="text-ink-light">Long-form explanation prompts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3  shadow-lg flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>Flashcard created successfully!</span>
        </motion.div>
      )}
    </div>
  );
}
