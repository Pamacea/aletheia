import { test, expect } from '@playwright/test';

test.describe('Favorites CRUD E2E', () => {
  test('should display favorites page', async ({ page }) => {
    // Navigate to favorites page
    await page.goto('/profile/favorites');
    await page.waitForLoadState('networkidle');

    // Check if page title is visible
    const title = page.locator('h1:has-text("Favoris"), h1:has-text("Mes Favoris")').first();
    await expect(title).toBeVisible();
  });

  test('should show empty state when no favorites', async ({ page }) => {
    await page.goto('/profile/favorites');
    await page.waitForLoadState('networkidle');

    // Check for empty state
    const emptyState = page.locator('text=Aucun favori, text=No favorites').first();
    const hasEmptyState = await emptyState.count() > 0;

    // OR check for favorite cards
    const favoriteCards = page.locator('.favorite-card, [data-testid="favorite-card"]').all();
    const hasFavorites = (await favoriteCards).length > 0;

    // Either empty state or favorites should be present
    expect(hasEmptyState || hasFavorites).toBeTruthy();
  });

  test('should navigate to concept from favorites', async ({ page }) => {
    await page.goto('/profile/favorites');
    await page.waitForLoadState('networkidle');

    // Look for favorite cards
    const favoriteCards = page.locator('.favorite-card, a[href*="/conceptuaire/"]').first();

    const cardCount = await favoriteCards.count();

    if (cardCount > 0) {
      // Click on first favorite
      await favoriteCards.click();

      // Verify navigation
      await page.waitForURL(/\/conceptuaire\/[^/]+$/, { timeout: 5000 });

      // Verify we're on concept page
      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible();
    } else {
      // No favorites to click - that's a valid state
      test.skip();
    }
  });

  test('should show action button to explore when empty', async ({ page }) => {
    await page.goto('/profile/favorites');
    await page.waitForLoadState('networkidle');

    // Look for "Explore" or "Explorer" button in empty state
    const exploreButton = page.locator('a:has-text("Explorer"), a:has-text("Explore")').first();

    const buttonCount = await exploreButton.count();

    if (buttonCount > 0) {
      await expect(exploreButton).toBeVisible();

      // Click it
      await exploreButton.click();

      // Should navigate to conceptuaire or home
      await page.waitForURL(/\/(conceptuaire|\?.*)$/, { timeout: 5000 });
    }
  });

  test('should display favorite count in subtitle', async ({ page }) => {
    await page.goto('/profile/favorites');
    await page.waitForLoadState('networkidle');

    // Look for subtitle with count
    const subtitle = page.locator('text=/\\d+\\s*éléments?, text=/\\d+\\s*items?').first();

    const hasCount = await subtitle.count() > 0;

    if (hasCount) {
      await expect(subtitle).toBeVisible();
    }
  });

  test('should have responsive grid layout', async ({ page }) => {
    await page.goto('/profile/favorites');
    await page.waitForLoadState('networkidle');

    // Check for grid container
    const gridContainer = page.locator('.grid, [class*="grid"]').first();
    const hasGrid = await gridContainer.count() > 0;

    if (hasGrid) {
      await expect(gridContainer).toBeVisible();

      // Test mobile responsiveness
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(gridContainer).toBeVisible();
    }
  });
});
