# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
