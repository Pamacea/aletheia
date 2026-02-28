# CHANGELOG

All notable changes to Aletheia will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.5] - 2026-02-28

### Added
- **Philosophical Content**: 14 nouveaux concepts philosophiques (absurde, autrui, conscience, désir, engagement, être, justice, langage, liberté, pouvoir, sujet, temps, vérité)
- **Movements**: 9 nouveaux courants philosophiques (aristotelisme, empirisme, idéalisme allemand, marxisme, platonisme, postmodernisme, rationalisme, stoïcisme ancien)
- **UI Components**: ContentLayout, DesktopSidebar, MobileMenu, PageHeader, sidebar-navigation
- **Hooks**: useFormState, useNavigation pour la gestion d'état des formulaires et navigation
- **Profile**: ProfileEditForm pour l'édition du profil utilisateur
- **Features Hooks**: Hooks personnalisés pour Agora, Graphe, et Profile

### Changed
- Amélioration de la structure de navigation
- Refactorisation des composants d'authentification
- Mise à jour des configurations Prisma et environnement

### Fixed
- Corrections mineures de style et de structure
- Amélioration de l'organisation des hooks et lib

## [0.2.0] - 2025-02-26

### Added
- **Frontend**: Next.js 16 avec App Router et React 19
- **Styling**: Thème "Papier Littéraire" (crème, sépia, encres)
- **Pages**: Homepage, Agora, Conceptuaire, Citations, Graphe
- **Database**: Schéma Prisma complet pour Neon PostgreSQL
  - Core Entities: Philosophe, Concept, Citation, Oeuvre, Courant, Influence
  - User Models: User, Annotation, Flashcard, Note, Link, Folder
- **Auth**: Better Auth avec Discord et GitHub OAuth
- **Graph**: Visualisation React Flow interactive
- **Data-driven Architecture**: Contenu philosophique dans `src/data/categories/`
- **Types Centralisés**: Tous les types TypeScript dans `src/types/index.ts`
- **UI Barrel Export**: Import simplifié depuis `@/ui`
- **Testing**: Vitest (unit) et Playwright (E2E) configurés
- **State Management**: TanStack Query pour les données serveur

### Changed
- Migration complète vers Next.js 16 App Router
- Migration de Supabase vers Neon PostgreSQL
- Remplacement de Supabase Auth par Better Auth
- Refactorisation des routes (suppression du route group `(user)`)
- Unification des imports avec l'alias `@/`

### Fixed
- Élimination complète de tous les types `any` (84 → 0)
- Correction des erreurs TypeScript strict mode
- Correction des erreurs ESLint
- Nettoyage des dépendances inutilisées
- Scrollbar globale remplacée par scrollbar optionnelle
- Suppression des `!important` inutiles dans les styles

### Technical Improvements
- Server Components privilégiés pour toutes les pages
- Server Actions pour les mutations
- Architecture data-driven avec TypeScript type-safe
- Barrel exports pour UI et types
- Zod validation aux frontières de l'application
