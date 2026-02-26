# E2E Tests Documentation

## Overview

This directory contains End-to-End (E2E) tests using Playwright. These tests verify critical user flows across the application.

## Test Structure

```
tests/e2e/
├── achievements/       # Achievement display tests
├── agora/             # Forum functionality tests
├── auth/              # Authentication tests
├── bibliotheque/      # Library tests
├── collections/       # Collection management tests
├── conceptuaire/      # Concept search & navigation tests
├── courants/          # Philosophical movements tests
├── favorites/         # Favorites CRUD tests
├── flashcards/        # Flashcard creation & review tests
├── notes/             # Notes CRUD tests
├── philosophers/      # Philosophers list tests
└── profile/           # Profile settings & navigation tests
```

## Running Tests

### Run all E2E tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/e2e/profile/settings.spec.ts
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests for specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Coverage

### Profile Settings (6 tests)
- ✅ Display all settings sections
- ✅ Update profile settings
- ✅ Validate email format
- ✅ Toggle privacy settings
- ✅ Update notification preferences
- ✅ Display account password change form

### Conceptuaire Search (4 tests)
- ✅ Search concepts with debouncing
- ✅ Show empty state for no results
- ✅ Filter by category
- ✅ Navigate to concept detail page

### Flashcards Review (6 tests)
- ✅ Display flashcards for review
- ✅ Show flashcard content when available
- ✅ Handle keyboard shortcuts
- ✅ Display completion screen
- ✅ Pause/resume functionality
- ✅ Display session statistics

### Favorites (6 tests)
- ✅ Display favorites page
- ✅ Show empty state when no favorites
- ✅ Navigate to concept from favorites
- ✅ Show action button to explore when empty
- ✅ Display favorite count in subtitle
- ✅ Responsive grid layout

### Authentication (4 tests)
- ✅ Display login form
- ✅ Validate required fields
- ✅ Link to registration page
- ✅ Navigate to register page

### Agora Forum (4 tests)
- ✅ Display forum categories
- ✅ Navigate to category posts
- ✅ Display create post button
- ✅ Show post count or stats

### Bibliotheque (4 tests)
- ✅ Display library page
- ✅ Search functionality
- ✅ Content grid or list
- ✅ Filter options

### Philosophers (4 tests)
- ✅ Display philosophers list
- ✅ Display philosopher cards
- ✅ Navigate to philosopher detail
- ✅ Search or filter functionality

### Courants (4 tests)
- ✅ Display movements list
- ✅ Display movement cards
- ✅ Navigate to movement detail
- ✅ Show movement descriptions

### Notes (4 tests)
- ✅ Display notes list
- ✅ Show create note button
- ✅ Display notes or empty state
- ✅ Navigate to create note page

### Collections (5 tests)
- ✅ Display collections list
- ✅ Show create collection button
- ✅ Display collections or empty state
- ✅ Navigate to collection detail
- ✅ Display collection stats

### Flashcards Creation (3 tests)
- ✅ Display flashcard creation form
- ✅ Validate required fields
- ✅ Create flashcard

### Achievements (6 tests)
- ✅ Display achievements page
- ✅ Display achievement cards or empty state
- ✅ Show locked and unlocked achievements
- ✅ Display progress towards achievements
- ✅ Show achievement details on hover
- ✅ Display total achievement count

**Total: 60 E2E tests**

## Writing New Tests

When adding new E2E tests, follow these guidelines:

1. **Use descriptive test names** - Test names should clearly describe what is being tested
2. **Use beforeEach** - Set up common state (navigation, auth) in beforeEach
3. **Handle both success and empty states** - Tests should work whether data exists or not
4. **Use proper waiting** - Use `waitForTimeout`, `waitForURL`, or `waitForLoadState` appropriately
5. **Test skip when appropriate** - Use `test.skip()` when preconditions aren't met
6. **Make tests resilient** - Tests shouldn't fail due to timing issues

### Test Template

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/path-to-page');
    await page.waitForLoadState('networkidle');
  });

  test('should do something specific', async ({ page }) => {
    // Arrange - Locate elements
    const element = page.locator('selector');

    // Act - Perform action
    await element.click();

    // Assert - Verify result
    await expect(page).toHaveURL(/expected-url/);
  });
});
```

## Best Practices

### 1. Selector Strategies
```typescript
// ✅ Good - Use specific selectors
page.locator('button[type="submit"]')
page.locator('input[name="email"]')
page.locator('a[href="/path"]')

// ❌ Bad - Too generic
page.locator('button')
page.locator('div')
```

### 2. Waiting Strategies
```typescript
// ✅ Good - Specific waits
await page.waitForURL(/expected/)
await page.waitForLoadState('networkidle')
await expect(element).toBeVisible()

// ⚠️ Use sparingly - Fixed timeout
await page.waitForTimeout(500)
```

### 3. Assertions
```typescript
// ✅ Good - Clear assertions
await expect(page).toHaveURL('/expected');
await expect(element).toBeVisible();
await expect(element).toHaveText('Expected');

// ✅ Good - Conditional assertions
const hasElement = await element.count() > 0;
if (hasElement) {
  await expect(element).toBeVisible();
}
```

### 4. Test Organization
```typescript
// Group related tests
test.describe('Auth Flow', () => {
  test.describe('Login', () => {
    test('should login successfully', ...);
    test('should show error on invalid credentials', ...);
  });

  test.describe('Register', () => {
    test('should register new user', ...);
  });
});
```

## Debugging

### View Test Results
After running tests, view the HTML report:
```bash
npx playwright show-report
```

### Debug Mode
Run tests in debug mode to step through:
```bash
npx playwright test --debug
```

### Trace Viewer
View trace for failed tests:
```bash
npx playwright show-trace trace.zip
```

## CI/CD Integration

Tests run automatically in CI. Configuration is in `playwright.config.ts`.

## Troubleshooting

### Tests fail with "Element not found"
- Increase wait time with `waitForTimeout`
- Check if element is in iframe or shadow DOM
- Verify selector is correct

### Tests are flaky
- Use more specific selectors
- Add proper waits
- Check for race conditions
- Use `waitForLoadState('networkidle')`

### Tests timeout
- Increase timeout in config or per test
- Check if app is slow to respond
- Verify network conditions

## Notes

- Tests are designed to work with or without authentication
- Empty states are tested alongside content states
- Tests skip gracefully when preconditions aren't met
- Mobile responsiveness is tested where applicable
