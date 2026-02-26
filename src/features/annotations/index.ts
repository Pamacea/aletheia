// ============================================================================
// ANNOTATIONS FEATURE MODULE
// ============================================================================

// Types
export type {
  Annotation,
  AnnotationWithText,
  AnnotationColor,
  AnnotationFilters,
  AnnotationFormData,
  TextSelection,
} from './types';

export { ANNOTATION_COLORS } from './types';

// Components
export { AnnotationCard } from './components/AnnotationCard';
export { AnnotationSidebar } from './components/AnnotationSidebar';
export { AnnotationEditor } from './components/AnnotationEditor';
export { TextAnnotator } from './components/TextAnnotator';
export { ReadingView } from './components/ReadingView';

// Hooks
export { useAnnotations } from './hooks/useAnnotations';

// Actions
export {
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,
  getAnnotations,
  getAnnotation,
  getAnnotationsByColor,
  exportAnnotationsAsJson,
  exportAnnotationsAsMarkdown,
} from './actions/annotations';

// Utils
export {
  downloadAsJson,
  downloadAsMarkdown,
  generateAnnotationMarkdown,
  copyToClipboard,
} from './utils/export';

export {
  getTextOffsets,
  getRangeFromOffsets,
  highlightAnnotations,
  escapeHtml,
  truncate,
  stripHtml,
} from './utils/text';

// Demo
export { AnnotationDemo } from './examples/AnnotationDemo';

// Schemas
export {
  createAnnotationSchema,
  updateAnnotationSchema,
  deleteAnnotationSchema,
} from './actions/annotations';
