'use client';

import { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Button } from '@/ui/atoms/Button';
import { Textarea } from '@/ui/atoms/Textarea';
import { cn } from '@/lib/utils/cn';

interface NoteEditorProps {
  initialTitle?: string;
  initialContent?: string;
  onSave?: (title: string, content: string) => void;
  onCancel?: () => void;
  readOnly?: boolean;
  isSaving?: boolean;
  className?: string;
}

const DRAFT_KEY = 'note-draft';

export function NoteEditor({
  initialTitle = '',
  initialContent = '',
  onSave,
  onCancel,
  readOnly = false,
  isSaving = false,
  className,
}: NoteEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isPreview, setIsPreview] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);

  // Auto-save to localStorage
  useEffect(() => {
    if (!readOnly) {
      const draft = { title, content, timestamp: Date.now() };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    }
  }, [title, content, readOnly]);

  // Load draft on mount if no initial content
  useEffect(() => {
    if (!initialTitle && !initialContent && !readOnly) {
      const savedDraft = localStorage.getItem(DRAFT_KEY);
      if (savedDraft) {
        try {
          const draft = JSON.parse(savedDraft);
          // Only restore if less than 24 hours old
          if (Date.now() - draft.timestamp < 24 * 60 * 60 * 1000) {
            setTitle(draft.title);
            setContent(draft.content);
          }
        } catch (e) {
          // Ignore parse errors
        }
      }
    }
  }, [initialTitle, initialContent, readOnly]);

  const handleSave = useCallback(() => {
    if (title.trim()) {
      onSave?.(title, content);
      localStorage.removeItem(DRAFT_KEY);
    }
  }, [title, content, onSave]);

  const handleCancel = useCallback(() => {
    setTitle(initialTitle);
    setContent(initialContent);
    localStorage.removeItem(DRAFT_KEY);
    onCancel?.();
  }, [initialTitle, initialContent, onCancel]);

  const insertMarkdown = useCallback((prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('note-content') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const before = content.substring(0, start);
    const after = content.substring(end);

    const newText = before + prefix + selectedText + suffix + after;
    setContent(newText);

    // Set cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selectedText.length
      );
    }, 0);
  }, [content]);

  const toolbarButtons = [
    { label: 'H1', action: () => insertMarkdown('# ', ''), title: 'Titre 1' },
    { label: 'H2', action: () => insertMarkdown('## ', ''), title: 'Titre 2' },
    { label: 'H3', action: () => insertMarkdown('### ', ''), title: 'Titre 3' },
    { label: 'B', action: () => insertMarkdown('**', '**'), title: 'Gras' },
    { label: 'I', action: () => insertMarkdown('*', '*'), title: 'Italique' },
    { label: 'S', action: () => insertMarkdown('~~', '~~'), title: 'Barré' },
    { label: 'Link', action: () => insertMarkdown('[', '](url)'), title: 'Lien' },
    { label: 'Code', action: () => insertMarkdown('`', '`'), title: 'Code inline' },
    { label: 'List', action: () => insertMarkdown('- ', ''), title: 'Liste' },
    { label: 'Quote', action: () => insertMarkdown('> ', ''), title: 'Citation' },
    { label: '---', action: () => insertMarkdown('\n\n---\n\n', ''), title: 'Séparateur' },
  ];

  return (
    <div className={cn('flex flex-col h-full', className)}>
      {/* Title Input */}
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de la note..."
          readOnly={readOnly}
          className={cn(
            "w-full px-4 py-3 text-2xl font-serif font-semibold",
            "bg-transparent border-2 border-paper-200",
            "focus:border-sepia-600 focus:outline-none",
            "placeholder:text-paper-400",
            readOnly && "border-transparent cursor-default"
          )}
        />
      </div>

      {/* Toolbar */}
      {!readOnly && showToolbar && (
        <div className="flex items-center gap-2 mb-4 p-2 bg-paper-100 border border-paper-200 flex-wrap">
          {toolbarButtons.map((btn) => (
            <button
              key={btn.label}
              type="button"
              onClick={btn.action}
              title={btn.title}
              className="px-2 py-1 text-sm font-medium text-ink hover:text-sepia-600 hover:bg-paper-200 transition-colors"
            >
              {btn.label}
            </button>
          ))}
          <div className="flex-1" />
          <button
            type="button"
            onClick={() => setIsPreview(!isPreview)}
            className={cn(
              "px-3 py-1 text-sm font-medium transition-colors",
              isPreview
                ? "bg-sepia-600 text-paper-50"
                : "text-ink hover:bg-paper-200"
            )}
          >
            {isPreview ? 'Edit' : 'Preview'}
          </button>
        </div>
      )}

      {/* Editor / Preview */}
      <div className="flex-1 overflow-hidden">
        {!isPreview && !readOnly ? (
          <Textarea
            id="note-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Commencez à écrire votre note en Markdown...

# Exemples de Markdown

## Gras, italique, et plus
- **Texte en gras**
- *Texte en italique*
- ~~Texte barré~~

## Listes
1. Premier élément
2. Deuxième élément
3. Troisième élément

## Citations
> Une citation inspirante

## Code
`code inline`

```
bloc de code
```

## Liens
[Texte du lien](https://example.com)

---
"
            className="h-full resize-none font-mono text-sm leading-relaxed"
          />
        ) : (
          <div className="h-full overflow-y-auto p-4 bg-paper-50 border border-paper-200 prose prose-sm max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-serif font-bold text-ink mb-4 mt-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-serif font-semibold text-ink mb-3 mt-5">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-serif font-medium text-ink mb-2 mt-4">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-ink leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-sepia-600 hover:text-sepia-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-sepia-600 pl-4 italic text-ink-light my-4">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-ink mb-4 space-y-1">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-ink mb-4 space-y-1">
                    {children}
                  </ol>
                ),
                code: ({ className, children }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-paper-200 px-1 py-0.5 text-sm font-mono text-sepia-700">
                      {children}
                    </code>
                  ) : (
                    <code className={cn("block bg-paper-800 text-paper-50 p-4 text-sm font-mono overflow-x-auto my-4", className)}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-paper-800 p-4 overflow-x-auto my-4">
                    {children}
                  </pre>
                ),
                hr: () => (
                  <hr className="border-t-2 border-paper-300 my-6" />
                ),
              }}
            >
              {content || '*Aucun contenu*'}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {!readOnly && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-paper-200">
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={handleSave}
              disabled={!title.trim() || isSaving}
              loading={isSaving}
            >
              {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
            </Button>
            {onCancel && (
              <Button variant="ghost" size="md" onClick={handleCancel} disabled={isSaving}>
                Annuler
              </Button>
            )}
          </div>
          <div className="text-sm text-ink-light">
            {content.length} caractères
          </div>
        </div>
      )}
    </div>
  );
}
