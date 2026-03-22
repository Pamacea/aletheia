# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-03-22

### Performance
- Eliminated barrel file imports (`@/ui`, `@/ui/icons`, `@/ui/components/CustomIcons`) across 70+ files — direct imports reduce Turbopack compilation from ~6s to ~500ms
- Added `unstable_cache` on all heavy DB queries (concepts, philosophers, movements, quotes, stats) with 60-300s revalidation
- Parallelized sequential `await` calls with `Promise.all` across all pages (conceptuaire, philosophes, courants, citations, profile)
- Implemented React Suspense streaming on home, conceptuaire, achievements, activity, favorites, stats pages — shell renders at 0ms, data streams in
- Converted graph page to TanStack Query (`useQuery`) — auto-cancels stale requests, caches 5 min, deduplicates
- Dynamic imports (`next/dynamic` with `ssr: false`) for heavy components: GraphContainerReactFlow, PathFinder, RelationLegend, Sidebar, ReactQueryDevtools
- Added `optimizePackageImports` for lucide-react, framer-motion, d3, date-fns, zod, @tanstack/*
- Added `serverExternalPackages` for @prisma/client, pg
- Removed `PageEffects` client wrapper (was empty), converted to Server Component pass-through
- `useTransition` on search inputs (conceptuaire, citations) — React auto-cancels previous navigation renders
- Version counter on graph data loading to discard stale results
- Session caching in `sessionStorage` (5 min TTL) to avoid redundant `/api/auth/session` fetches
- `React.cache()` wrapper on `getSession()` for per-request deduplication
- Search debounce increased from 300ms to 600ms to reduce server render calls
- Added `export const revalidate = 60` (ISR) on all major pages

### Added
- Skeleton loading pages (`loading.tsx`) for all major routes: home, conceptuaire, philosophes, courants, citations, profile, dashboard, flashcards, notes, agora
- Graph skeleton with animated placeholder nodes and edges during @xyflow/react lazy load
- `BackButton` component used across all pages for consistent navigation
- `SidebarWrapper` client component to properly handle `ssr: false` dynamic import in Server Component layout
- Mobile dock bottom sheet now includes all profile pages (Dashboard, Notes, Favoris, Collections, Succès, Activité, Stats, Paramètres) in compact icon grid
- Cached query layer (`src/lib/cache/queries.ts`) with 8 cached functions

### Changed
- Responsive mobile-first CSS overhaul: fluid typography with `clamp()`, progressive breakpoints, `overflow-x: hidden`
- All `!important` flags removed from `globals.css`
- `.main-content-with-sidebar` reset to zero margin on mobile, `4rem` on desktop only
- `.content-2-3` mobile-first (100% → 66.67% at lg)
- Hero sections use responsive text sizes (`text-3xl sm:text-4xl lg:text-5xl`)
- Sidebar mobile trigger redesigned (w-10 h-10, rounded, offset from corner)
- Footer responsive padding and typography
- PageHeader responsive with truncation and hidden label on mobile
- Achievement cards: text overflow fix with `break-words`, `min-w-0`, responsive icon sizes
- Philosopher/concept cards: `min-w-0` on flex containers, `[hyphens:auto]` on names
- CSP updated: added `https://va.vercel-scripts.com` to script-src, `https://discord.com https://github.com` to form-action and connect-src for OAuth

### Fixed
- Missing `id` field in concept relation mapping causing React "unique key" warnings
- Discord SVG icon path `d` attribute was corrupted — replaced with official Discord logo path
- Double data fetch on graph page (two useEffects both calling loadGraphData on mount)
- Duplicate concept fetches in conceptuaire page (ConceptsGrid and ConceptsEmptyState re-fetched data already loaded by parent)
- Duplicate philosopher fetch in PhilosophersGrid async component
- `getFeaturedConcepts()` loaded ALL concepts into memory then shuffled — now fetches only 30
- `getConceptRelations()` had no result limit — added `take: 50`
- `getPhilosophers()` 3 sequential DB queries → parallelized with `Promise.all`
- `getPhilosopherBySlug()` 2 sequential DB queries → parallelized
- OAuth login blocked by CSP `form-action 'self'` — added external OAuth domains

### Removed
- Barrel re-exports from `@/ui/index.ts` (animations, duplicate icon exports, namespace re-export)
- `CustomIcons.tsx` barrel file usage (70+ files migrated to direct icon imports)
- `useConceptNetworkData` hook import from graph page (replaced with lazy inline fetch)
- `console.log` statements from graph data server action
- Unused `Suspense`, `PhilosopherCardSkeleton` imports from philosophes page
- BackButton removed from dashboard page (accessible via mobile dock)

## [0.2.8] - 2026-03-02

### Security
- Fixed X-Powered-By header disclosure (explicit removal via headers config)
- Fixed Host Header Injection vulnerability in OAuth callbacks (added allowlist validation)
- Improved secret validation for production environments
- Enhanced HTML sanitization using isomorphic-dompurify

### Changed
- Updated next.config.mjs with explicit X-Powered-By header removal
- Enhanced auth actions with validated host helper function
- Improved sanitizeHTML utility with DOMPurify integration
- Added ALLOWED_HOSTS environment variable support for production OAuth callbacks

### Fixed
- OAuth callback URL construction now validates host header against allowlist
- Better-auth secret now throws error in production if not configured

## [0.2.7] - 2026-03-01

### Added
- Concept relations data seeding functionality
- Multiple philosophical concepts expanded (accident, amour, art, beauté, bien, bonheur, cause, connaissance, création, culture, désir, dieu, droit, égalité, existence, fini, infini, mal, morale, mort, nature, néant, plaisir, politique, pour-soi, réalité, regard, religion, société, solidarité, sublime)
- Philosophical movements expanded (éléatisme, épicurisme, féminisme, herméneutique, humanisme, matérialisme, néo-platonisme, positivisme, pragmatisme, présocratique, scepticisme, scolastique, structuralisme, utilitarisme)
- New philosopher components
- Profile components (ProfileHero, ProfileTabs, tab components)
- Flashcard skeleton loading component
- Concept card skeleton loading component
- Database reset script (prisma/reset-db.ts)
- Concept network utilities (text-cleaner.ts)
- UI animations and confirm dialog components

### Changed
- Updated seeding infrastructure with new seed files (concepts-seed.ts, concept-relations-seed.ts, sources-seed.ts)
- Improved philosophers and movements seeding
- Updated concept data structure with templates
- Enhanced profile dashboard components
- Improved UI components and design tokens

### Removed
- Old seed infrastructure files
- Old documentation files (GUIDE.md)
- Old test documentation files
- Citation actions temporary file
- Concept relations concept file
- Old concept/philosopher verification script

### Fixed
- Various component imports and dependencies
- TypeScript configuration

[0.2.6]: https://github.com/Pamacea/aletheia/compare/v0.2.6...v0.2.7
