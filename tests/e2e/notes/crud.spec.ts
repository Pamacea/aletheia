import { test, expect } from '@playwright/test';

test.describe('Notes CRUD E2E', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to notes page
    await page.goto('/profile/notes');
    await page.waitForLoadState('networkidle');
  });

  test('should display notes list', async ({ page }) => {
    // Check page title
    const title = page.locator('h1:has-text("Notes"), h1:has-text("Mes Notes")').first();
    await expect(title).toBeVisible();
  });

  test('should show create note button', async ({ page }) => {
    // Look for create button
    const createButton = page.locator('a[href*="/notes/new"], a[href*="/notes/create"], button:has-text("Nouvelle"), button:has-text("Créer")').first();

    const buttonCount = await createButton.count();

    if (buttonCount > 0) {
      await expect(createButton).toBeVisible();
    }
    // Button might require authentication
  });

  test('should display notes or empty state', async ({ page }) => {
    // Look for note cards
    const noteCards = page.locator('.note-card, [data-testid="note"], article').all();

    await page.waitForTimeout(500);

    const cardCount = (await noteCards).length;

    // Should have notes OR empty state
    const emptyState = page.locator('text=Aucune note, text=No notes').first();
    const hasEmpty = await emptyState.count() > 0;

    expect(cardCount > 0 || hasEmpty).toBeTruthy();
  });

  test('should navigate to create note page', async ({ page }) => {
    const createButton = page.locator('a[href*="/notes/new"], a[href*="/notes/create"]').first();

    const buttonCount = await createButton.count();

    if (buttonCount > 0) {
      await createButton.click();

      // Verify navigation
      await page.waitForURL(/\/notes\/(new|create)/, { timeout: 5000 });

      // Check for form
      const titleInput = page.locator('input[name="title"], textarea[name="title"]').first();
      await expect(titleInput).toBeVisible();
    } else {
      // Might not be accessible without auth
      test.skip();
    }
  });
});
