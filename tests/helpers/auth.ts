/**
 * Authentication Helper Functions for E2E Tests
 *
 * These helpers provide common authentication operations for Playwright tests.
 * They handle login, registration, logout, and session management.
 */

import { Page, expect } from '@playwright/test';

export interface TestUser {
  email: string;
  password: string;
  name: string;
}

/**
 * Default test user credentials
 * Note: In production, these should be created in the database before tests run
 */
export const testUsers: Record<string, TestUser> = {
  primary: {
    email: 'test@example.com',
    password: 'TestPass123!',
    name: 'Test User'
  },
  secondary: {
    email: 'test2@example.com',
    password: 'TestPass456!',
    name: 'Test User 2'
  }
};

/**
 * Login with email and password
 *
 * @param page - Playwright Page object
 * @param email - User email
 * @param password - User password
 * @param redirectUrl - Expected URL after login (default: '/dashboard')
 */
export async function login(
  page: Page,
  email: string,
  password: string,
  redirectUrl: string = '/dashboard'
): Promise<void> {
  // Navigate to login page
  await page.goto('/auth/login');
  await page.waitForLoadState('networkidle');

  // Fill login form
  await page.fill('input[name="email"], input[type="email"]', email);
  await page.fill('input[name="password"], input[type="password"]', password);

  // Submit form
  await page.click('button[type="submit"]');

  // Wait for redirect
  await page.waitForURL(`**${redirectUrl}`, { timeout: 5000 });
}

/**
 * Register a new user
 *
 * @param page - Playwright Page object
 * @param email - User email
 * @param password - User password
 * @param name - User display name
 * @param redirectUrl - Expected URL after registration (default: '/dashboard')
 */
export async function register(
  page: Page,
  email: string,
  password: string,
  name: string,
  redirectUrl: string = '/dashboard'
): Promise<void> {
  // Navigate to register page
  await page.goto('/auth/register');
  await page.waitForLoadState('networkidle');

  // Fill registration form
  await page.fill('input[name="email"], input[type="email"]', email);
  await page.fill('input[name="password"], input[type="password"]', password);
  await page.fill('input[name="confirmPassword"], input[name="passwordConfirmation"]', password);
  await page.fill('input[name="name"]', name);

  // Submit form
  await page.click('button[type="submit"]');

  // Wait for redirect
  await page.waitForURL(`**${redirectUrl}`, { timeout: 5000 });
}

/**
 * Logout current user
 *
 * @param page - Playwright Page object
 */
export async function logout(page: Page): Promise<void> {
  // Look for logout button/link
  const logoutButton = page.locator(
    'button:has-text("Déconnexion"), button:has-text("Logout"), a:has-text("Déconnexion"), a:has-text("Logout")'
  ).first();

  const buttonCount = await logoutButton.count();

  if (buttonCount > 0) {
    await logoutButton.click();
    await page.waitForURL('/auth/login', { timeout: 5000 });
  } else {
    // Try clicking user menu first
    const userMenu = page.locator('[aria-label="User menu"], button:has-text("Mon compte")').first();
    const menuCount = await userMenu.count();

    if (menuCount > 0) {
      await userMenu.click();
      await page.waitForTimeout(500);
      await logout(page); // Retry
    }
  }
}

/**
 * Verify user is logged in
 *
 * @param page - Playwright Page object
 * @returns Promise<boolean> - True if user appears to be logged in
 */
export async function isLoggedIn(page: Page): Promise<boolean> {
  // Check for common indicators of logged-in state
  const indicators = [
    'a[href="/profile"]',
    'button:has-text("Déconnexion")',
    'button:has-text("Logout")',
    '[data-testid="user-menu"]'
  ];

  for (const indicator of indicators) {
    const element = page.locator(indicator).first();
    if (await element.count() > 0) {
      return true;
    }
  }

  return false;
}

/**
 * Verify user is logged out
 *
 * @param page - Playwright Page object
 * @returns Promise<boolean> - True if user appears to be logged out
 */
export async function isLoggedOut(page: Page): Promise<boolean> {
  const url = page.url();
  return url.includes('/auth/login') || url.includes('/auth/register');
}

/**
 * Login with test user (convenience wrapper)
 *
 * @param page - Playwright Page object
 * @param userType - 'primary' or 'secondary' (default: 'primary')
 */
export async function loginAsTestUser(
  page: Page,
  userType: 'primary' | 'secondary' = 'primary'
): Promise<void> {
  const user = testUsers[userType];
  await login(page, user.email, user.password);
}

/**
 * Generate random test user credentials
 * Useful for registration tests to avoid duplicate email errors
 *
 * @returns TestUser - Randomly generated user credentials
 */
export function generateTestUser(): TestUser {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);

  return {
    email: `test-${timestamp}-${random}@example.com`,
    password: 'TestPass123!',
    name: `Test User ${timestamp}`
  };
}

/**
 * Wait for session to be established
 * Checks for common indicators that authentication was successful
 *
 * @param page - Playwright Page object
 */
export async function waitForSession(page: Page): Promise<void> {
  // Wait for session cookie or localStorage
  await page.waitForTimeout(1000);

  // Verify we're not on auth pages
  const url = page.url();
  expect(url).not.toContain('/auth/login');
  expect(url).not.toContain('/auth/register');
}
