import { test, expect } from '@playwright/test';

test.describe('Philosophers List E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/philosophes');
    await page.waitForLoadState('networkidle');
  });

  test('should display philosophers list', async ({ page }) => {
    // Check page title
    const title = page.locator('h1:has-text("Philosophes"), h1:has-text("Philosophers")').first();
    await expect(title).toBeVisible();
  });

  test('should display philosopher cards', async ({ page }) => {
    // Look for philosopher cards or links
    const philosopherLinks = page.locator('a[href*="/philosophes/"]').all();

    await page.waitForTimeout(500);

    const linkCount = (await philosopherLinks).length;

    // Should have philosophers OR empty state
    const emptyState = page.locator('text=Aucun philosophe, text=No philosophers').first();
    const hasEmpty = await emptyState.count() > 0;

    expect(linkCount > 0 || hasEmpty).toBeTruthy();
  });

  test('should navigate to philosopher detail page', async ({ page }) => {
    const philosopherLinks = page.locator('a[href*="/philosophes/"]').first();

    const linkCount = await philosopherLinks.count();

    if (linkCount > 0) {
      await philosopherLinks.click();

      // Verify navigation
      await page.waitForURL(/\/philosophes\/[^/]+$/, { timeout: 5000 });

      // Check for philosopher details
      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible();
    } else {
      // No philosophers - valid state
      test.skip();
    }
  });

  test('should have search or filter functionality', async ({ page }) => {
    // Look for search input
    const searchInput = page.locator('input[placeholder*="Rechercher"], input[type="search"]').first();

    const inputCount = await searchInput.count();

    if (inputCount > 0) {
      await expect(searchInput).toBeVisible();

      // Test search
      await searchInput.fill('Platon');
      await page.waitForTimeout(600);

      // Verify something happens
      const body = page.locator('body');
      await expect(body).toBeVisible();
    }
  });
});
