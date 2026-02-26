/**
 * Text utilities for annotation system
 */

/**
 * Find text node and offsets from a Range
 */
export function getTextOffsets(range: Range, container: HTMLElement): { start: number; end: number } | null {
  try {
    const treeWalker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null
    );

    let charCount = 0;
    let startFound = false;
    let startOffset = 0;
    let endOffset = 0;

    while (treeWalker.nextNode()) {
      const node = treeWalker.currentNode as Text;
      const nodeLength = node.textContent?.length || 0;

      if (!startFound && range.intersectsNode(node)) {
        // Find the start offset within this node
        if (node === range.startContainer) {
          startOffset = charCount + range.startOffset;
        } else {
          startOffset = charCount;
        }
        startFound = true;
      }

      if (startFound) {
        // Find the end offset
        if (node === range.endContainer) {
          endOffset = charCount + range.endOffset;
          break;
        } else if (range.endContainer.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_PRECEDING) {
          endOffset = charCount + nodeLength;
          break;
        }
      }

      charCount += nodeLength;
    }

    if (startFound) {
      return { start: startOffset, end: endOffset };
    }

    return null;
  } catch (error) {
    console.error('Error getting text offsets:', error);
    return null;
  }
}

/**
 * Find text range from offsets
 */
export function getRangeFromOffsets(startOffset: number, endOffset: number, container: HTMLElement): Range | null {
  try {
    const range = document.createRange();
    const treeWalker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null
    );

    let charCount = 0;
    let startNode: Text | null = null;
    let startNodeOffset = 0;
    let endNode: Text | null = null;
    let endNodeOffset = 0;

    while (treeWalker.nextNode()) {
      const node = treeWalker.currentNode as Text;
      const nodeLength = node.textContent?.length || 0;
      const nodeStart = charCount;
      const nodeEnd = charCount + nodeLength;

      // Find start node
      if (!startNode && startOffset >= nodeStart && startOffset < nodeEnd) {
        startNode = node;
        startNodeOffset = startOffset - nodeStart;
      }

      // Find end node
      if (!endNode && endOffset > nodeStart && endOffset <= nodeEnd) {
        endNode = node;
        endNodeOffset = endOffset - nodeStart;
      }

      // Check if we've found both
      if (startNode && endNode) {
        break;
      }

      charCount = nodeEnd;
    }

    if (startNode && endNode) {
      range.setStart(startNode, startNodeOffset);
      range.setEnd(endNode, endNodeOffset);
      return range;
    }

    return null;
  } catch (error) {
    console.error('Error getting range from offsets:', error);
    return null;
  }
}

/**
 * Highlight text in container with annotation marks
 */
export function highlightAnnotations(
  container: HTMLElement,
  annotations: Array<{ id: string; startOffset: number; endOffset: number; color: string }>
): void {
  // This would need to be implemented server-side or with React
  // as we're working with React components, not raw DOM manipulation
  // The actual highlighting is done through React components
}

/**
 * Escape HTML special characters
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Truncate text to length with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Strip HTML tags from text
 */
export function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}
