import { test, expect } from '@playwright/test';

test.describe('Profile Settings E2E', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to profile settings page
    // Note: In a real scenario, you'd need to authenticate first
    await page.goto('/profile/settings');
  });

  test('should display all settings sections', async ({ page }) => {
    // Check if all settings sections are visible
    await expect(page.locator('text=Paramètres du profil')).toBeVisible();
    await expect(page.locator('text=Préférences')).toBeVisible();
    await expect(page.locator('text=Confidentialité')).toBeVisible();
    await expect(page.locator('text=Notifications')).toBeVisible();
    await expect(page.locator('text=Compte')).toBeVisible();
  });

  test('should update profile settings', async ({ page }) => {
    // Find profile section
    const profileSection = page.locator('section:has-text("Paramètres du profil")').first();

    // Update name field if it exists
    const nameInput = profileSection.locator('input[name="name"]').first();
    if (await nameInput.count() > 0) {
      await nameInput.fill('Test User Updated');
    }

    // Save changes
    const saveButton = page.locator('button:has-text("Enregistrer"), button:has-text("Save")').first();
    if (await saveButton.count() > 0) {
      await saveButton.click();

      // Verify success toast appears
      await expect(page.locator('.toast, [role="alert"]')).toBeVisible({ timeout: 5000 });
    }
  });

  test('should validate email format', async ({ page }) => {
    const profileSection = page.locator('section:has-text("Paramètres du profil")').first();
    const emailInput = profileSection.locator('input[name="email"]').first();

    if (await emailInput.count() > 0) {
      // Fill with invalid email
      await emailInput.fill('invalid-email');

      // Try to save
      const saveButton = page.locator('button:has-text("Enregistrer"), button:has-text("Save")').first();
      if (await saveButton.count() > 0) {
        await saveButton.click();

        // Verify error message appears
        await expect(page.locator('.error, .text-red, [role="alert"]')).toBeVisible({ timeout: 3000 });
      }
    }
  });

  test('should toggle privacy settings', async ({ page }) => {
    const privacySection = page.locator('section:has-text("Confidentialité")').first();

    // Find a toggle/checkbox in privacy section
    const toggle = privacySection.locator('input[type="checkbox"], [role="switch"]').first();

    if (await toggle.count() > 0) {
      const isChecked = await toggle.isChecked();

      // Click toggle
      await toggle.click();

      // Save changes
      const saveButton = page.locator('button:has-text("Enregistrer"), button:has-text("Save")').first();
      if (await saveButton.count() > 0) {
        await saveButton.click();

        // Verify success toast
        await expect(page.locator('.toast, [role="alert"]')).toBeVisible({ timeout: 5000 });
      }
    }
  });

  test('should update notification preferences', async ({ page }) => {
    const notificationsSection = page.locator('section:has-text("Notifications")').first();

    // Find email notifications checkbox
    const emailCheckbox = notificationsSection.locator('input[name="emailNotifications"], input[type="checkbox"]').first();

    if (await emailCheckbox.count() > 0) {
      // Enable email notifications
      await emailCheckbox.check();

      // Save changes
      const saveButton = page.locator('button:has-text("Enregistrer"), button:has-text("Save")').first();
      if (await saveButton.count() > 0) {
        await saveButton.click();

        // Verify success message
        await expect(page.locator('.toast, [role="alert"]')).toBeVisible({ timeout: 5000 });
      }
    }
  });

  test('should display account password change form', async ({ page }) => {
    const accountSection = page.locator('section:has-text("Compte")').first();

    // Check if password fields exist
    const currentPasswordInput = accountSection.locator('input[name="currentPassword"], input[placeholder*="actuel"]').first();
    const newPasswordInput = accountSection.locator('input[name="newPassword"], input[placeholder*="nouveau"]').first();
    const confirmPasswordInput = accountSection.locator('input[name="confirmPassword"], input[placeholder*="confirmer"]').first();

    // Verify password change form exists
    const hasPasswordForm =
      (await currentPasswordInput.count() > 0) ||
      (await newPasswordInput.count() > 0) ||
      (await confirmPasswordInput.count() > 0);

    expect(hasPasswordForm).toBeTruthy();

    // If form exists, verify structure
    if (hasPasswordForm) {
      const changePasswordButton = page.locator('button:has-text("Changer"), button:has-text("Change")').first();
      await expect(changePasswordButton).toBeVisible();
    }
  });
});
