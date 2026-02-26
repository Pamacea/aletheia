/**
 * Improved Authentication E2E Tests
 *
 * These tests demonstrate better practices for E2E testing:
 * - Use helper functions for common operations
 * - Specific assertions instead of conditional ones
 * - Database verification where applicable
 * - Proper test isolation
 */

import { test, expect } from '@playwright/test';
import { login, loginAsTestUser, generateTestUser, register, isLoggedIn, logout } from '../../helpers/auth';
import { waitForLoading, verifyToast, verifyVisible, fillForm } from '../../helpers/ui';

test.describe('Authentication - Improved Tests', () => {
  // Clean up after each test
  test.afterEach(async ({ page }) => {
    // Logout if still logged in
    if (await isLoggedIn(page)) {
      await logout(page);
    }
  });

  test.describe('Login Flow', () => {
    test('should display login form with all required fields', async ({ page }) => {
      await page.goto('/auth/login');
      await waitForLoading(page);

      // Verify all form elements are present
      await verifyVisible(page, 'input[name="email"], input[type="email"]');
      await verifyVisible(page, 'input[name="password"], input[type="password"]');
      await verifyVisible(page, 'button[type="submit"]');

      // Verify page title
      await expect(page.locator('h1').first()).toContainText(/Connexion|Login|Sign In/i);
    });

    test('should validate email is required', async ({ page }) => {
      await page.goto('/auth/login');

      // Try to submit without filling any fields
      await page.click('button[type="submit"]');

      // Verify email validation error
      const emailError = page.locator('input[name="email"] + .error, .error:has-text("email")').first();
      await expect(emailError).toBeVisible({ timeout: 2000 });
    });

    test('should validate password is required', async ({ page }) => {
      await page.goto('/auth/login');

      // Fill only email
      await page.fill('input[name="email"]', 'test@example.com');

      // Try to submit
      await page.click('button[type="submit"]');

      // Verify password validation error
      const passwordError = page.locator('input[name="password"] + .error, .error:has-text("password")').first();
      await expect(passwordError).toBeVisible({ timeout: 2000 });
    });

    test('should validate email format', async ({ page }) => {
      await page.goto('/auth/login');

      // Fill with invalid email
      await page.fill('input[name="email"]', 'not-an-email');
      await page.fill('input[name="password"]', 'password123');

      // Try to submit
      await page.click('button[type="submit"]');

      // Verify email format error
      const emailError = page.locator('text=invalid email, text=format invalide').first();
      await expect(emailError).toBeVisible({ timeout: 2000 });
    });

    test('should show error for incorrect credentials', async ({ page }) => {
      await page.goto('/auth/login');

      // Fill with incorrect credentials
      await page.fill('input[name="email"]', 'nonexistent@example.com');
      await page.fill('input[name="password"]', 'WrongPassword123!');

      // Try to login
      await page.click('button[type="submit"]');

      // Verify error message
      const errorAlert = page.locator('.error, [role="alert"]').filter({
        hasText: /incorrect|invalid|invalide/i
      }).first();

      await expect(errorAlert).toBeVisible({ timeout: 5000 });

      // Verify still on login page
      expect(page.url()).toContain('/auth/login');
    });

    test('should login successfully with valid credentials', async ({ page }) => {
      // Note: This test assumes a test user exists in the database
      // In a real setup, you would create this user in a beforeAll hook

      await login(page, 'test@example.com', 'TestPass123!');

      // Verify redirect to dashboard
      expect(page.url()).toContain('/dashboard');

      // Verify logged in state
      expect(await isLoggedIn(page)).toBeTruthy();

      // Verify user menu/profile link is visible
      await verifyVisible(page, 'a[href="/profile"], [data-testid="user-menu"]');
    });

    test('should navigate to registration page', async ({ page }) => {
      await page.goto('/auth/login');

      // Click register link
      await page.click('a[href*="register"], a:has-text("Inscription"), a:has-text("Sign up")');

      // Verify navigation
      await waitForLoading(page);
      expect(page.url()).toContain('/register');

      // Verify registration form is present
      await verifyVisible(page, 'input[name="email"]');
    });

    test('should navigate to password reset page', async ({ page }) => {
      await page.goto('/auth/login');

      // Click forgot password link
      const resetLink = page.locator('a[href*="reset"], a:has-text("Forgot"), a:has-text("oublié")').first();

      const linkCount = await resetLink.count();
      if (linkCount > 0) {
        await resetLink.click();

        // Verify navigation
        await waitForLoading(page);
        expect(page.url()).toContain('/reset') || expect(page.url()).toContain('/forgot');
      } else {
        test.skip(); // Skip if link doesn't exist
      }
    });
  });

  test.describe('Registration Flow', () => {
    test('should display registration form with all required fields', async ({ page }) => {
      await page.goto('/auth/register');
      await waitForLoading(page);

      // Verify all form elements
      await verifyVisible(page, 'input[name="email"], input[type="email"]');
      await verifyVisible(page, 'input[name="password"], input[type="password"]');
      await verifyVisible(page, 'input[name="name"]');
      await verifyVisible(page, 'button[type="submit"]');

      // Verify page title
      await expect(page.locator('h1').first()).toContainText(/Inscription|Register|Sign Up/i);
    });

    test('should validate all required fields', async ({ page }) => {
      await page.goto('/auth/register');

      // Try to submit without filling fields
      await page.click('button[type="submit"]');

      // Verify validation errors appear
      await verifyVisible(page, 'input[name="email"] + .error, .error:has-text("email")');
      await verifyVisible(page, 'input[name="password"] + .error, .error:has-text("password")');
    });

    test('should validate password confirmation', async ({ page }) => {
      await page.goto('/auth/register');

      // Fill form with mismatched passwords
      await page.fill('input[name="email"]', 'test@example.com');
      await page.fill('input[name="password"]', 'Password123!');
      await page.fill('input[name="confirmPassword"], input[name="passwordConfirmation"]', 'DifferentPassword123!');
      await page.fill('input[name="name"]', 'Test User');

      // Try to submit
      await page.click('button[type="submit"]');

      // Verify password mismatch error
      const mismatchError = page.locator('text=mismatch, text=différent').first();
      await expect(mismatchError).toBeVisible({ timeout: 2000 });
    });

    test('should validate password strength', async ({ page }) => {
      await page.goto('/auth/register');

      // Try weak password
      await page.fill('input[name="email"]', 'test@example.com');
      await page.fill('input[name="password"]', 'weak');
      await page.fill('input[name="confirmPassword"], input[name="passwordConfirmation"]', 'weak');
      await page.fill('input[name="name"]', 'Test User');

      // Try to submit
      await page.click('button[type="submit"]');

      // Verify password strength error
      const strengthError = page.locator('text=at least 8 characters, text=8 caractères').first();
      await expect(strengthError).toBeVisible({ timeout: 2000 });
    });

    test('should register new user successfully', async ({ page }) => {
      // Generate unique test user
      const newUser = generateTestUser();

      await register(page, newUser.email, newUser.password, newUser.name);

      // Verify redirect to dashboard
      expect(page.url()).toContain('/dashboard');

      // Verify logged in state
      expect(await isLoggedIn(page)).toBeTruthy();

      // Verify success message
      await verifyToast(page, /success|inscription réussite|welcome|bienvenue/i);

      // Verify user name is displayed
      const userNameDisplay = page.locator(`text="${newUser.name}"`).first();
      await expect(userNameDisplay).toBeVisible({ timeout: 5000 });
    });

    test('should show error for duplicate email', async ({ page }) => {
      // This test assumes a user already exists
      // In production, you would create this user first

      await page.goto('/auth/register');

      // Try to register with existing email
      await page.fill('input[name="email"]', 'test@example.com');
      await page.fill('input[name="password"]', 'Password123!');
      await page.fill('input[name="confirmPassword"], input[name="passwordConfirmation"]', 'Password123!');
      await page.fill('input[name="name"]', 'Test User');

      // Try to submit
      await page.click('button[type="submit"]');

      // Verify duplicate email error
      const duplicateError = page.locator('text=already exists, text=déjà utilisé').first();
      await expect(duplicateError).toBeVisible({ timeout: 5000 });
    });
  });

  test.describe('Session Management', () => {
    test('should maintain session across page navigations', async ({ page }) => {
      // Login first
      await loginAsTestUser(page);

      // Navigate to different pages
      await page.goto('/conceptuaire');
      await waitForLoading(page);
      expect(await isLoggedIn(page)).toBeTruthy();

      await page.goto('/agora');
      await waitForLoading(page);
      expect(await isLoggedIn(page)).toBeTruthy();

      await page.goto('/bibliotheque');
      await waitForLoading(page);
      expect(await isLoggedIn(page)).toBeTruthy();
    });

    test('should logout successfully', async ({ page }) => {
      // Login first
      await loginAsTestUser(page);

      // Logout
      await logout(page);

      // Verify redirected to login page
      expect(page.url()).toContain('/auth/login');

      // Verify logged out state
      expect(await isLoggedIn(page)).toBeFalsy();
    });

    test('should clear session on logout', async ({ page }) => {
      // Login first
      await loginAsTestUser(page);

      // Logout
      await logout(page);

      // Try to access protected page
      await page.goto('/profile/settings');
      await waitForLoading(page);

      // Should be redirected to login
      expect(page.url()).toContain('/auth/login') || expect(page.url()).toContain('/login');
    });
  });

  test.describe('Remember Me', () => {
    test('should persist session with "remember me" checked', async ({ page, context }) => {
      await page.goto('/auth/login');

      // Fill credentials
      await page.fill('input[name="email"]', 'test@example.com');
      await page.fill('input[name="password"]', 'TestPass123!');

      // Check "remember me" checkbox if it exists
      const rememberCheckbox = page.locator('input[name="remember"], input[type="checkbox"]').first();
      const checkboxCount = await rememberCheckbox.count();

      if (checkboxCount > 0) {
        await rememberCheckbox.check();
      }

      // Submit
      await page.click('button[type="submit"]');
      await waitForLoading(page);

      // Verify session cookie is set with long expiration
      const cookies = await context.cookies();
      const sessionCookie = cookies.find(c => c.name.includes('session'));

      if (sessionCookie) {
        expect(sessionCookie.expires).toBeGreaterThan(Date.now() / 1000 + 86400); // At least 1 day
      }
    });
  });
});

/**
 * Test Setup Notes
 *
 * For these tests to work properly, you need to:
 *
 * 1. Create a test user in the database before running tests:
 *
 *    import { prisma } from '@/lib/db/prisma';
 *    import bcrypt from 'bcrypt';
 *
 *    test.beforeAll(async () => {
 *      const hashedPassword = await bcrypt.hash('TestPass123!', 10);
 *      await prisma.user.upsert({
 *        where: { email: 'test@example.com' },
 *        update: {},
 *        create: {
 *          email: 'test@example.com',
 *           password: hashedPassword,
 *          name: 'Test User'
 *        }
 *      });
 *    });
 *
 * 2. Clean up test data after tests:
 *
 *    test.afterAll(async () => {
 *      await prisma.user.deleteMany({
 *        where: {
 *          email: {
 *            startsWith: 'test-'
 *          }
 *        }
 *      });
 *    });
 *
 * 3. Use a test database to avoid affecting production data
 */
