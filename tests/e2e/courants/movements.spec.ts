import { test, expect } from '@playwright/test';

test.describe('Courants (Movements) E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/courants');
    await page.waitForLoadState('networkidle');
  });

  test('should display movements list', async ({ page }) => {
    // Check page title
    const title = page.locator('h1:has-text("Courants"), h1:has-text("Movements")').first();
    await expect(title).toBeVisible();
  });

  test('should display movement cards', async ({ page }) => {
    // Look for movement cards
    const movementLinks = page.locator('a[href*="/courants/"]').all();

    await page.waitForTimeout(500);

    const linkCount = (await movementLinks).length;

    // Should have movements OR empty state
    const emptyState = page.locator('text=Aucun courant, text=No movements').first();
    const hasEmpty = await emptyState.count() > 0;

    expect(linkCount > 0 || hasEmpty).toBeTruthy();
  });

  test('should navigate to movement detail page', async ({ page }) => {
    const movementLinks = page.locator('a[href*="/courants/"]').first();

    const linkCount = await movementLinks.count();

    if (linkCount > 0) {
      await movementLinks.click();

      // Verify navigation
      await page.waitForURL(/\/courants\/[^/]+$/, { timeout: 5000 });

      // Check for movement details
      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible();
    } else {
      // No movements - valid state
      test.skip();
    }
  });

  test('should show movement descriptions', async ({ page }) => {
    // Look for descriptions
    const descriptions = page.locator('p').all();

    await page.waitForTimeout(500);

    const descCount = (await descriptions).length;

    // Should have some content
    expect(descCount > 0).toBeTruthy();
  });
});
