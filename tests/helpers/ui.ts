/**
 * UI Helper Functions for E2E Tests
 *
 * These helpers provide common UI operations for Playwright tests.
 * They handle form filling, waiting, screenshots, and common interactions.
 */

import { Page, Locator, expect } from '@playwright/test';

/**
 * Wait for page to fully load and settle
 *
 * @param page - Playwright Page object
 * @param timeout - Maximum time to wait (default: 5000ms)
 */
export async function waitForLoading(page: Page, timeout: number = 5000): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout });
  await page.waitForTimeout(500); // Extra wait for animations
}

/**
 * Fill a form with data
 *
 * @param page - Playwright Page object
 * @param data - Object mapping field names to values
 * @param selectorPrefix - Prefix for field selectors (default: 'input[name="')
 */
export async function fillForm(
  page: Page,
  data: Record<string, string>,
  selectorPrefix: string = 'input[name="'
): Promise<void> {
  for (const [key, value] of Object.entries(data)) {
    const selector = `${selectorPrefix}${key}"]`;
    const element = page.locator(selector);

    const count = await element.count();
    if (count > 0) {
      await element.fill(value);
    } else {
      // Try textarea as fallback
      const textarea = page.locator(`textarea[name="${key}"]`);
      const textareaCount = await textarea.count();
      if (textareaCount > 0) {
        await textarea.fill(value);
      }
    }
  }
}

/**
 * Take a screenshot with automatic naming
 *
 * @param page - Playwright Page object
 * @param name - Screenshot name (without extension)
 * @param fullPage - Capture full page or just viewport (default: true)
 */
export async function takeScreenshot(
  page: Page,
  name: string,
  fullPage: boolean = true
): Promise<void> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `${name}-${timestamp}.png`;

  await page.screenshot({
    path: `test-results/screenshots/${filename}`,
    fullPage
  });
}

/**
 * Click element and wait for navigation
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 * @param urlPattern - Expected URL pattern after navigation
 */
export async function clickAndWaitForNavigation(
  page: Page,
  selector: string,
  urlPattern?: string
): Promise<void> {
  const element = page.locator(selector).first();

  if (urlPattern) {
    await Promise.all([
      page.waitForURL(`**${urlPattern}`, { timeout: 5000 }),
      element.click()
    ]);
  } else {
    await Promise.all([
      page.waitForLoadState('networkidle', { timeout: 5000 }),
      element.click()
    ]);
  }
}

/**
 * Fill search input and wait for results
 *
 * @param page - Playwright Page object
 * @param searchText - Text to search for
 * @param debounceTime - Wait time for debounced search (default: 600ms)
 */
export async function search(page: Page, searchText: string, debounceTime: number = 600): Promise<void> {
  const searchInput = page.locator(
    'input[placeholder*="Rechercher"], input[placeholder*="Search"], input[type="search"]'
  ).first();

  await searchInput.fill(searchText);
  await page.waitForTimeout(debounceTime);
}

/**
 * Verify toast/notification appears
 *
 * @param page - Playwright Page object
 * @param message - Expected message text (partial match)
 * @param timeout - Maximum time to wait (default: 5000ms)
 */
export async function verifyToast(
  page: Page,
  message: string,
  timeout: number = 5000
): Promise<Locator> {
  const toast = page.locator(`.toast, [role="alert"], [data-testid="toast"]`).filter({
    hasText: message
  }).first();

  await expect(toast).toBeVisible({ timeout });
  return toast;
}

/**
 * Verify empty state is shown
 *
 * @param page - Playwright Page object
 * @param emptyText - Expected empty state text (partial match)
 */
export async function verifyEmptyState(page: Page, emptyText: string = 'Aucun|Empty|Vide'): Promise<void> {
  const emptyState = page.locator(`text=/${emptyText}/`).first();
  await expect(emptyState).toBeVisible();
}

/**
 * Wait for modal/dialog to appear
 *
 * @param page - Playwright Page object
 * @param timeout - Maximum time to wait (default: 5000ms)
 */
export async function waitForModal(page: Page, timeout: number = 5000): Promise<Locator> {
  const modal = page.locator('[role="dialog"], .modal, .dialog').first();
  await expect(modal).toBeVisible({ timeout });
  return modal;
}

/**
 * Close modal/dialog
 *
 * @param page - Playwright Page object
 */
export async function closeModal(page: Page): Promise<void> {
  const closeButton = page.locator(
    'button[aria-label="Close"], button[aria-label="Fermer"], .modal-close, [data-testid="close-modal"]'
  ).first();

  const count = await closeButton.count();
  if (count > 0) {
    await closeButton.click();
    await page.waitForTimeout(500);
  }
}

/**
 * Select option from dropdown
 *
 * @param page - Playwright Page object
 * @param selector - Select element selector
 * @param value - Option value to select
 */
export async function selectOption(page: Page, selector: string, value: string): Promise<void> {
  const select = page.locator(selector).first();
  await select.selectOption(value);
}

/**
 * Toggle checkbox/switch
 *
 * @param page - Playwright Page object
 * @param selector - Checkbox/switch selector
 * @param checked - Desired state (default: true)
 */
export async function toggleCheckbox(page: Page, selector: string, checked: boolean = true): Promise<void> {
  const checkbox = page.locator(selector).first();

  const isChecked = await checkbox.isChecked();
  if (isChecked !== checked) {
    await checkbox.click();
  }

  // Verify final state
  await expect(checkbox).toBeChecked({ checked });
}

/**
 * Get text content from element
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 * @returns Promise<string> - Text content
 */
export async function getText(page: Page, selector: string): Promise<string> {
  const element = page.locator(selector).first();
  return await element.textContent() || '';
}

/**
 * Get attribute value from element
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 * @param attribute - Attribute name
 * @returns Promise<string | null> - Attribute value
 */
export async function getAttribute(
  page: Page,
  selector: string,
  attribute: string
): Promise<string | null> {
  const element = page.locator(selector).first();
  return await element.getAttribute(attribute);
}

/**
 * Verify element is visible
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 * @param timeout - Maximum time to wait (default: 5000ms)
 */
export async function verifyVisible(page: Page, selector: string, timeout: number = 5000): Promise<void> {
  const element = page.locator(selector).first();
  await expect(element).toBeVisible({ timeout });
}

/**
 * Verify element is hidden
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 * @param timeout - Maximum time to wait (default: 5000ms)
 */
export async function verifyHidden(page: Page, selector: string, timeout: number = 5000): Promise<void> {
  const element = page.locator(selector).first();
  await expect(element).toBeHidden({ timeout });
}

/**
 * Hover over element
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 */
export async function hover(page: Page, selector: string): Promise<void> {
  const element = page.locator(selector).first();
  await element.hover();
  await page.waitForTimeout(500); // Wait for tooltip/dropdown
}

/**
 * Type text with delay (simulates real typing)
 *
 * @param page - Playwright Page object
 * @param selector - Input selector
 * @param text - Text to type
 * @param delay - Delay between keystrokes in ms (default: 50)
 */
export async function typeSlowly(
  page: Page,
  selector: string,
  text: string,
  delay: number = 50
): Promise<void> {
  const element = page.locator(selector).first();
  await element.type(text, { delay });
}

/**
 * Scroll element into view
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 */
export async function scrollToElement(page: Page, selector: string): Promise<void> {
  const element = page.locator(selector).first();
  await element.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
}

/**
 * Wait for API request to complete
 *
 * @param page - Playwright Page object
 * @param urlPattern - URL pattern to match
 * @param timeout - Maximum time to wait (default: 10000ms)
 */
export async function waitForAPI(
  page: Page,
  urlPattern: string,
  timeout: number = 10000
): Promise<void> {
  await page.waitForResponse(
    response => response.url().includes(urlPattern),
    { timeout }
  );
}

/**
 * Get all text matching a selector
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 * @returns Promise<string[]> - Array of text contents
 */
export async function getAllText(page: Page, selector: string): Promise<string[]> {
  const elements = await page.locator(selector).all();
  const texts: string[] = [];

  for (const element of elements) {
    const text = await element.textContent();
    if (text) {
      texts.push(text.trim());
    }
  }

  return texts;
}

/**
 * Count elements matching selector
 *
 * @param page - Playwright Page object
 * @param selector - Element selector
 * @returns Promise<number> - Count of matching elements
 */
export async function countElements(page: Page, selector: string): Promise<number> {
  return await page.locator(selector).count();
}

/**
 * Verify URL contains pattern
 *
 * @param page - Playwright Page object
 * @param pattern - URL pattern to check
 */
export async function verifyURL(page: Page, pattern: string): Promise<void> {
  expect(page.url()).toContain(pattern);
}

/**
 * Navigate and wait for load
 *
 * @param page - Playwright Page object
 * @param url - URL to navigate to
 */
export async function navigateAndWait(page: Page, url: string): Promise<void> {
  await page.goto(url);
  await waitForLoading(page);
}
