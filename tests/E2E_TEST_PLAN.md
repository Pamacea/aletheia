# Aletheia E2E Test Plan

> **Version:** 1.0.0
> **Last Updated:** 2026-02-26
> **Framework:** Playwright
> **Base URL:** http://localhost:3000

---

## Table of Contents

1. [Authentication Flow](#1-authentication-flow)
2. [Settings Management](#2-settings-management)
3. [Content Creation](#3-content-creation)
4. [Content Consumption](#4-content-consumption)
5. [User Progress](#5-user-progress)
6. [Test Execution Guide](#test-execution-guide)
7. [Test Results](#test-results)

---

## 1. Authentication Flow

### 1.1 User Registration
**Test File:** `tests/e2e/auth/register.spec.ts`

**Scenarios:**
- ✅ Should display registration form with all required fields
- ✅ Should validate email format
- ✅ Should validate password strength (min 8 characters)
- ✅ Should require password confirmation
- ✅ Should create new user account with valid data
- ✅ Should redirect to dashboard after successful registration
- ✅ Should show error for duplicate email
- ✅ Should show error for weak password

**Acceptance Criteria:**
- Registration form is accessible and functional
- Email validation works correctly
- Password requirements are enforced
- User is created in database
- Session is established after registration

**Test Data:**
```typescript
const validUser = {
  email: `test-${Date.now()}@example.com`,
  password: 'SecurePass123!',
  name: 'Test User'
}

const weakPasswords = [
  '12345678',
  'password',
  'short',
  'nocaps123',
  'NOLOWERCASE'
]
```

---

### 1.2 User Login
**Test File:** `tests/e2e/auth/login.spec.ts`

**Scenarios:**
- ✅ Should display login form
- ✅ Should validate required fields
- ✅ Should authenticate with correct credentials
- ✅ Should redirect to dashboard after successful login
- ✅ Should show error for incorrect email
- ✅ Should show error for incorrect password
- ✅ Should show error for non-existent account
- ✅ Should have link to registration page
- ✅ Should have link to password reset

**Acceptance Criteria:**
- Login form is accessible
- Validation errors are clear
- Authentication works correctly
- Session is established
- Redirect works properly

**Test Data:**
```typescript
const loginTests = [
  { email: 'test@example.com', password: 'CorrectPass123!', shouldSucceed: true },
  { email: 'wrong@example.com', password: 'CorrectPass123!', shouldSucceed: false },
  { email: 'test@example.com', password: 'WrongPass123!', shouldSucceed: false },
  { email: '', password: 'CorrectPass123!', shouldSucceed: false },
  { email: 'test@example.com', password: '', shouldSucceed: false }
]
```

---

### 1.3 Password Reset
**Test File:** `tests/e2e/auth/password-reset.spec.ts`

**Scenarios:**
- ✅ Should display password reset request form
- ✅ Should validate email format
- ✅ Should send reset email for valid account
- ✅ Should show success message after sending email
- ✅ Should display password reset form with valid token
- ✅ Should update password with valid token
- ✅ Should reject invalid token
- ✅ Should reject expired token
- ✅ Should require password confirmation

**Acceptance Criteria:**
- Reset email is sent
- Token is generated and stored
- Password is updated successfully
- Old password no longer works
- User can login with new password

---

### 1.4 OAuth Authentication
**Test File:** `tests/e2e/auth/oauth.spec.ts`

**Scenarios:**
- ✅ Should display GitHub login button
- ✅ Should display Discord login button
- ✅ Should redirect to OAuth provider
- ✅ Should create new account on first OAuth login
- ✅ Should link to existing account on subsequent logins
- ✅ Should handle OAuth errors gracefully
- ✅ Should redirect to dashboard after successful OAuth

**Acceptance Criteria:**
- OAuth buttons are visible
- OAuth flow completes successfully
- Account is created/linked correctly
- Session is established
- Redirect works properly

**Prerequisites:**
- GitHub OAuth app configured
- Discord OAuth app configured
- OAuth environment variables set

---

## 2. Settings Management

### 2.1 Profile Settings
**Test File:** `tests/e2e/profile/settings.spec.ts`

**Scenarios:**
- ✅ Should display all settings sections
- ✅ Should update user name
- ✅ Should update user bio
- ✅ Should validate email format
- ✅ Should show success message on save
- ✅ Should persist changes across sessions
- ✅ Should handle avatar upload (if implemented)

**Sections:**
- Paramètres du profil (Profile Settings)
- Préférences (Preferences)
- Confidentialité (Privacy)
- Notifications (Notifications)
- Compte (Account)

**Acceptance Criteria:**
- All sections are visible and accessible
- Updates save successfully
- Validation works correctly
- Changes persist in database
- Success messages appear

---

### 2.2 Password Change
**Test File:** `tests/e2e/profile/password-change.spec.ts`

**Scenarios:**
- ✅ Should display password change form
- ✅ Should require current password
- ✅ Should validate new password strength
- ✅ Should require password confirmation
- ✅ Should update password with correct current password
- ✅ Should reject incorrect current password
- ✅ Should reject mismatched confirmation
- ✅ Should require re-login after password change

**Acceptance Criteria:**
- Form validates all inputs
- Password updates correctly
- Old password no longer works
- User must re-authenticate
- Error messages are clear

---

### 2.3 Preferences
**Test File:** `tests/e2e/profile/preferences.spec.ts`

**Scenarios:**
- ✅ Should update theme preference (light/dark)
- ✅ Should update language preference
- ✅ Should persist preferences across sessions
- ✅ Should apply theme changes immediately
- ✅ Should display available languages

**Acceptance Criteria:**
- Preferences save correctly
- Theme changes apply immediately
- Language changes apply immediately
- Preferences persist after logout

---

### 2.4 Privacy Settings
**Test File:** `tests/e2e/profile/privacy.spec.ts`

**Scenarios:**
- ✅ Should toggle profile visibility
- ✅ Should toggle activity visibility
- ✅ Should toggle achievements visibility
- ✅ Should save privacy settings
- ✅ Should respect privacy settings on profile

**Acceptance Criteria:**
- Privacy options save correctly
- Settings are enforced on profile
- Private data is hidden appropriately

---

### 2.5 Notification Settings
**Test File:** `tests/e2e/profile/notifications.spec.ts`

**Scenarios:**
- ✅ Should toggle email notifications
- ✅ Should toggle push notifications (if implemented)
- ✅ Should toggle forum reply notifications
- ✅ Should toggle achievement notifications
- ✅ Should save notification preferences

**Acceptance Criteria:**
- Notification preferences save correctly
- Users receive notifications based on preferences
- Notifications can be disabled entirely

---

### 2.6 Account Deletion
**Test File:** `tests/e2e/profile/account-deletion.spec.ts`

**Scenarios:**
- ✅ Should require password confirmation
- ✅ Should show warning about deletion
- ✅ Should delete account after confirmation
- ✅ Should logout after deletion
- ✅ Should redirect to home page
- ✅ Should prevent login with deleted account

**Acceptance Criteria:**
- Deletion requires explicit confirmation
- Account data is removed or anonymized
- Session is terminated
- User cannot login after deletion

**Warning:** ⚠️ **Destructive test - use test account only**

---

## 3. Content Creation

### 3.1 Forum Post Creation
**Test File:** `tests/e2e/agora/create-post.spec.ts`

**Scenarios:**
- ✅ Should display create post form
- ✅ Should validate post title
- ✅ Should validate post content
- ✅ Should select category
- ✅ Should create post with valid data
- ✅ Should redirect to new post
- ✅ Should show success message
- ✅ Should handle rich text editor (if implemented)
- ✅ Should add tags to post
- ✅ Should save post as draft (if implemented)

**Acceptance Criteria:**
- Post form is accessible
- Validation works correctly
- Post is created in database
- Post appears in forum
- Redirect works correctly

**Test Data:**
```typescript
const validPost = {
  title: 'Test Post Title',
  content: 'This is test content for the post.',
  category: 'general',
  tags: ['test', 'e2e']
}

const invalidPosts = [
  { title: '', content: 'Content' }, // Missing title
  { title: 'Title', content: '' }, // Missing content
  { title: 'a', content: 'Content' } // Title too short
]
```

---

### 3.2 Forum Reply Creation
**Test File:** `tests/e2e/agora/create-reply.spec.ts`

**Scenarios:**
- ✅ Should display reply form on post page
- ✅ Should validate reply content
- ✅ Should create reply with valid data
- ✅ Should update reply count
- ✅ Should show success message
- ✅ Should handle nested replies (if implemented)
- ✅ Should notify post author (if notifications enabled)

**Acceptance Criteria:**
- Reply form is accessible
- Validation works correctly
- Reply is created in database
- Reply appears on post page
- Reply count increments

---

### 3.3 Note Creation
**Test File:** `tests/e2e/notes/create-note.spec.ts`

**Scenarios:**
- ✅ Should display create note form
- ✅ Should validate note title
- ✅ Should validate note content
- ✅ Should create note with valid data
- ✅ Should link note to concept (if applicable)
- ✅ Should save note to collection (if applicable)
- ✅ Should show success message
- ✅ Should handle markdown formatting

**Acceptance Criteria:**
- Note form is accessible
- Validation works correctly
- Note is created in database
- Note appears in library
- Markdown renders correctly

---

### 3.4 Flashcard Creation
**Test File:** `tests/e2e/flashcards/create-flashcard.spec.ts`

**Scenarios:**
- ✅ Should display create flashcard form
- ✅ Should validate flashcard question
- ✅ Should validate flashcard answer
- ✅ Should link flashcard to concept
- ✅ Should create flashcard with valid data
- ✅ Should show success message
- ✅ Should add flashcard to deck
- ✅ Should handle rich text in answers

**Acceptance Criteria:**
- Flashcard form is accessible
- Validation works correctly
- Flashcard is created in database
- Flashcard appears in deck
- SM2 algorithm initializes correctly

---

### 3.5 Adding to Favorites
**Test File:** `tests/e2e/favorites/add-favorites.spec.ts`

**Scenarios:**
- ✅ Should display favorite button on concepts
- ✅ Should add concept to favorites
- ✅ Should remove concept from favorites
- ✅ Should toggle favorite state
- ✅ Should display favorites list
- ✅ Should filter favorites by type

**Acceptance Criteria:**
- Favorite button is accessible
- Favorites save correctly
- Favorites appear in profile
- Toggle works correctly
- Removal works correctly

---

### 3.6 Collection Management
**Test File:** `tests/e2e/collections/manage-collections.spec.ts`

**Scenarios:**
- ✅ Should create new collection
- ✅ Should validate collection name
- ✅ Should add items to collection
- ✅ Should remove items from collection
- ✅ Should edit collection details
- ✅ Should delete collection
- ✅ Should display collection contents
- ✅ Should share collection (if implemented)

**Acceptance Criteria:**
- Collections can be created/edited/deleted
- Items can be added/removed
- Collections persist correctly
- Shared collections work (if implemented)

---

## 4. Content Consumption

### 4.1 Browse Concepts
**Test File:** `tests/e2e/conceptuaire/browse-concepts.spec.ts`

**Scenarios:**
- ✅ Should display concepts list
- ✅ Should paginate concepts list
- ✅ Should filter by category
- ✅ Should sort by name/date/popularity
- ✅ Should display concept count
- ✅ Should handle empty state

**Acceptance Criteria:**
- Concepts load correctly
- Pagination works
- Filters work correctly
- Sort options work
- Empty state is handled

---

### 4.2 View Concept Details
**Test File:** `tests/e2e/conceptuaire/view-concept.spec.ts`

**Scenarios:**
- ✅ Should display concept title
- ✅ Should display concept definition
- ✅ Should display concept description
- ✅ Should display related concepts
- ✅ Should display linked philosophers
- ✅ Should display linked movements
- ✅ Should allow adding to favorites
- ✅ Should allow creating notes
- ✅ Should allow creating flashcards
- ✅ Should navigate to related concepts
- ✅ Should display concept graph visualization

**Acceptance Criteria:**
- All concept data displays correctly
- Links work properly
- Actions work correctly
- Graph visualization renders

---

### 4.3 Search Concepts
**Test File:** `tests/e2e/conceptuaire/search-concepts.spec.ts`

**Scenarios:**
- ✅ Should display search input
- ✅ Should search by concept name
- ✅ Should search by definition
- ✅ Should show search results
- ✅ Should highlight search terms
- ✅ Should handle no results
- ✅ Should filter search results
- ✅ Should sort search results

**Acceptance Criteria:**
- Search works correctly
- Results are relevant
- No results state is handled
- Filters work on results

---

### 4.4 Browse Philosophers
**Test File:** `tests/e2e/philosophers/browse-philosophers.spec.ts`

**Scenarios:**
- ✅ Should display philosophers list
- ✅ Should paginate philosophers list
- ✅ Should filter by era/century
- ✅ Should filter by movement/school
- ✅ Should sort by name/birth date
- ✅ Should display philosopher count

**Acceptance Criteria:**
- Philosophers load correctly
- Pagination works
- Filters work correctly
- Sort options work

---

### 4.5 View Philosopher Details
**Test File:** `tests/e2e/philosophers/view-philosopher.spec.ts`

**Scenarios:**
- ✅ Should display philosopher name
- ✅ Should display philosopher dates
- ✅ Should display philosopher biography
- ✅ Should display linked concepts
- ✅ Should display linked movements
- ✅ Should display key works
- ✅ Should display key ideas
- ✅ Should allow adding to favorites
- ✅ Should navigate to related concepts

**Acceptance Criteria:**
- All philosopher data displays correctly
- Links work properly
- Actions work correctly

---

### 4.6 View Forum Posts
**Test File:** `tests/e2e/agora/view-posts.spec.ts`

**Scenarios:**
- ✅ Should display post list
- ✅ Should filter by category
- ✅ Should sort by date/activity
- ✅ Should display post metadata (author, date, replies)
- ✅ Should navigate to post details
- ✅ Should display post content
- ✅ Should display replies
- ✅ Should handle deleted posts

**Acceptance Criteria:**
- Posts load correctly
- Filters/sort work
- Navigation works
- Replies display correctly

---

### 4.7 Graph Visualization
**Test File:** `tests/e2e/graphe/graph-visualization.spec.ts`

**Scenarios:**
- ✅ Should display graph canvas
- ✅ Should render nodes (concepts)
- ✅ Should render edges (relationships)
- ✅ Should allow node selection
- ✅ Should display node details on selection
- ✅ Should allow zoom/pan
- ✅ Should filter graph by category
- ✅ Should search for nodes in graph
- ✅ Should highlight related nodes on selection
- ✅ Should handle large graphs (performance)

**Acceptance Criteria:**
- Graph renders correctly
- Interactions work smoothly
- Performance is acceptable
- Filters/search work

---

## 5. User Progress

### 5.1 Flashcard Review
**Test File:** `tests/e2e/flashcards/review-flashcards.spec.ts`

**Scenarios:**
- ✅ Should display flashcard for review
- ✅ Should show question first
- ✅ Should reveal answer on interaction
- ✅ Should provide quality buttons (0-5)
- ✅ Should calculate next review date (SM2)
- ✅ Should update card statistics
- ✅ Should show progress bar
- ✅ Should show cards due for review first
- ✅ Should handle no cards due
- ✅ Should complete review session

**Acceptance Criteria:**
- SM2 algorithm works correctly
- Cards are scheduled appropriately
- Progress is tracked
- Review session completes successfully

**SM2 Algorithm Verification:**
```typescript
// Verify SM2 calculations
// Ease factor: 1.3 - 2.5
// Interval: 1, 6, 10, 14, 28... days
// Quality: 0-5 (0=blackout, 5=perfect)
```

---

### 5.2 XP Progress
**Test File:** `tests/e2e/profile/xp-progress.spec.ts`

**Scenarios:**
- ✅ Should display current XP
- ✅ Should display XP to next level
- ✅ Should display level progress bar
- ✅ Should award XP for flashcard review
- ✅ Should award XP for forum posts
- ✅ Should award XP for note creation
- ✅ Should award XP for achievements
- ✅ Should level up correctly
- ✅ Should display level up notification

**Acceptance Criteria:**
- XP awards correctly
- Level calculations work
- Progress updates in real-time
- Level up works correctly

**XP Values (example):**
```typescript
const xpValues = {
  flashcardReview: 10,
  forumPost: 50,
  noteCreation: 25,
  achievement: 100
}
```

---

### 5.3 Achievements
**Test File:** `tests/e2e/achievements/view-achievements.spec.ts`

**Scenarios:**
- ✅ Should display achievements list
- ✅ Should filter by status (locked/unlocked)
- ✅ Should display achievement progress
- ✅ Should unlock achievement on completion
- ✅ Should show achievement notification
- ✅ Should award achievement XP
- ✅ Should display achievement rarity

**Acceptance Criteria:**
- Achievements load correctly
- Unlock conditions work
- Notifications appear
- XP is awarded correctly

**Achievement Types:**
- First login
- First flashcard
- Review streak (7 days)
- Forum contributor
- Note creator
- Collection curator

---

### 5.4 Dashboard Stats
**Test File:** `tests/e2e/profile/dashboard-stats.spec.ts`

**Scenarios:**
- ✅ Should display total flashcards
- ✅ Should display cards due today
- ✅ Should display review streak
- ✅ Should display total XP
- ✅ Should display current level
- ✅ Should display forum posts count
- ✅ Should display notes count
- ✅ Should display achievements count
- ✅ Should display recent activity

**Acceptance Criteria:**
- All stats load correctly
- Stats are accurate
- Recent activity displays
- Charts/graphs render (if implemented)

---

## Test Execution Guide

### Prerequisites

1. **Environment Setup:**
   ```bash
   # Install dependencies
   npm install

   # Setup database
   npm run db:generate
   npm run db:push

   # Seed database (optional, for testing with data)
   npm run db:seed
   ```

2. **Environment Variables:**
   Create `.env.test` file:
   ```env
   DATABASE_URL=postgresql://user:pass@localhost:5432/aletheia_test
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   BETTER_AUTH_SECRET=test-secret-min-32-chars-long-for-testing
   ```

3. **Start Dev Server:**
   ```bash
   npm run dev
   ```

### Running Tests

**Run all E2E tests:**
```bash
npm run test:e2e
```

**Run specific test file:**
```bash
npx playwright test tests/e2e/auth/login.spec.ts
```

**Run with UI (interactive):**
```bash
npm run test:e2e:ui
```

**Run in debug mode:**
```bash
npm run test:e2e:debug
```

**Run in headed mode (visible browser):**
```bash
npm run test:e2e:headed
```

**Run specific tests matching pattern:**
```bash
npx playwright test --grep "authentication"
```

### Test Reports

After test execution, reports are available at:
- **HTML Report:** `playwright-report/index.html`
- **JSON Report:** `test-results/results.json`
- **JUnit Report:** `test-results/junit.xml`

View HTML report:
```bash
npx playwright show-report
```

---

## Test Results

### Execution Summary

**Date:** [To be filled after execution]
**Environment:** Development
**Base URL:** http://localhost:3000
**Playwright Version:** 1.58.2

### Results by Category

| Category | Total | Passed | Failed | Skipped | Pass Rate |
|----------|-------|--------|--------|---------|-----------|
| Authentication | 0 | 0 | 0 | 0 | - |
| Settings | 0 | 0 | 0 | 0 | - |
| Content Creation | 0 | 0 | 0 | 0 | - |
| Content Consumption | 0 | 0 | 0 | 0 | - |
| User Progress | 0 | 0 | 0 | 0 | - |
| **TOTAL** | **0** | **0** | **0** | **0** | **-** |

### Issues Found

#### Critical Issues (Blocking)
_None yet_

#### Major Issues (Significant Impact)
_None yet_

#### Minor Issues (Limited Impact)
_None yet_

### Recommendations

#### High Priority
1. [ ] Execute all E2E tests
2. [ ] Fix any critical failures
3. [ ] Add tests for missing scenarios

#### Medium Priority
1. [ ] Increase test coverage
2. [ ] Add visual regression tests
3. [ ] Add performance tests

#### Low Priority
1. [ ] Add accessibility tests
2. [ ] Add security tests
3. [ ] Add mobile-specific tests

---

## Appendix

### Test Data Management

**Test User Credentials:**
```typescript
const testUsers = {
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
}
```

**Database Cleanup:**
```typescript
// Run after test suite
afterAll(async () => {
  await cleanupTestData()
  await db.disconnect()
})
```

### Known Limitations

1. **OAuth Testing:** Requires real OAuth provider credentials
2. **Email Testing:** Email verification may need manual intervention
3. **Performance:** Tests may be slow with large datasets
4. **Parallel Execution:** Some tests may need to run sequentially

### Future Improvements

1. **Visual Regression:** Add Percy or Chromatic integration
2. **API Testing:** Add API-specific E2E tests
3. **Load Testing:** Add k6 or Artillery for performance tests
4. **Accessibility:** Add axe-core for a11y testing
5. **Mobile:** Add device-specific test scenarios

---

**Document Status:** 🟡 Draft - Awaiting Test Execution

**Next Steps:**
1. Review test plan
2. Execute tests
3. Document results
4. Fix any issues found
5. Update test plan based on findings
