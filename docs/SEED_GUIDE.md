# Guide de Seed - Aletheia Database

> **Guide complet pour initialiser et maintenir la base de données philosophique**

---

## 📚 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Structure des données](#structure-des-données)
3. [Scripts disponibles](#scripts-disponibles)
4. [Workflow recommandé](#workflow-recommandé)
5. [Résolution de problèmes](#résolution-de-problèmes)
6. [Bonnes pratiques](#bonnes-pratiques)

---

## Vue d'ensemble

### Contenu de la base de données

Le système de seed d'Aletheia permet de peupler la base de données avec :

| Entité | Quantité | Description |
|--------|----------|-------------|
| **Concepts** | 19 | Concepts philosophiques fondamentaux |
| **Philosophes** | 70+ | Penseurs de toutes les époques |
| **Mouvements** | 13+ | Courants philosophiques |
| **Sources** | ~110 | OEuvres et références bibliographiques |
| **Relations** | 43+ | Liens entre concepts |
| **Achievements** | 16 | Succès gamification |
| **Catégories** | 5 | Catégories principales |

### Architecture du système

```
┌─────────────────────────────────────────────────────────────┐
│                     Fichiers de données                       │
│  src/data/concepts/     src/data/philosophers/              │
│  src/data/movements/    src/data/categories/                 │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Text Cleaner (src/lib/)                   │
│           Nettoie markdown, guillemets, espaces              │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   Scripts de Seed (prisma/seed/)             │
│  philosophers-seed.ts  movements-seed.ts  sources-seed.ts    │
│  concept-relations-seed.ts  quality-analyzer.ts              │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Prisma ORM + PostgreSQL                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Structure des données

### 1. Concept (src/data/concepts/)

#### Template

Chaque concept suit le template standardisé dans `_template.ts` :

```typescript
export const concept = {
  // Identité
  id: 'liberte',
  name: 'Liberté',
  slug: 'liberte',
  category: 'existentialisme',

  // Métadonnées
  difficulty: 3,        // 1-5
  importance: 5,        // 1-5
  status: 'COMPLETE',   // COMPLETE | DRAFT | REVIEW

  // Définitions
  definition: 'Définition complète...',
  shortDefinition: 'Définition courte (<100 caractères)',

  // Raisonnement philosophique
  reasoning: {
    principalArguments: [...],
    objections: [...],
    distinctions: [...]
  },

  // Relations
  relatedConcepts: [...],
  relatedMovements: [...],

  // Pédagogie
  examples: [...],
  sources: [...],
  flashcards: [...]
};
```

#### Champs requis

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `id` | string | ✅ | Identifiant unique (kebab-case) |
| `name` | string | ✅ | Nom du concept |
| `slug` | string | ✅ | Slug URL (doit matcher `id`) |
| `category` | Category | ✅ | Catégorie philosophique |
| `definition` | string | ✅ | Définition complète (3-5 phrases) |
| `shortDefinition` | string | ✅ | Définition courte (<100 chars) |
| `reasoning` | object | ⚠️ | Arguments et objections |
| `sources` | array | ⚠️ | Sources bibliographiques |
| `examples` | array | ⚠️ | Exemples concrets |

### 2. Philosophe (src/data/philosophers/)

```typescript
export const philosopher: PhilosopherData = {
  slug: 'jean-paul-sartre',
  name: 'Jean-Paul Sartre',
  fullName: 'Jean-Paul Charles Aymard Sartre',
  birthYear: 1905,
  deathYear: 1980,
  nationality: 'Français',
  century: 'XXe siècle',

  // Contenu
  biography: 'Biographie complète...',
  mainMovements: ['existentialisme', 'phenomenologie'],
  disciplines: ['Philosophie', 'Littérature'],
  keyIdeas: ['Existence précède essence', 'Liberté radicale'],

  // OEuvres
  majorWorks: [
    { title: "L'Être et le Néant", year: 1943, type: 'ESSAY' },
    { title: 'Les Mots', year: 1963, type: 'BOOK' }
  ],

  // Influences
  influences: {
    influencedBy: ['Edmund Husserl', 'Martin Heidegger'],
    influenced: ['Simone de Beauvoir', 'Albert Camus']
  }
};
```

#### Gestion des dates av. J.-C.

```typescript
// Époque classique
birthYear: -384,  // 384 av. J.-C. (Aristote)
deathYear: -322   // 322 av. J.-C.

// Époque moderne
birthYear: 1905,  // 1905 ap. J.-C. (Sartre)
deathYear: 1980
```

### 3. Mouvement (src/data/movements/)

```typescript
export const movement: MovementData = {
  slug: 'existentialisme',
  name: 'Existentialisme',
  description: 'Courant philosophique...',
  shortDefinition: 'Philosophie de l\'existence',
  period: 'XIXe-XXe siècles',

  // Principes
  keyPrinciples: [
    'Existence précède essence',
    'Liberté radicale',
    'Responsabilité absolue'
  ],

  // Philosophes associés
  keyPhilosophers: [
    'Søren Kierkegaard',
    'Jean-Paul Sartre',
    'Simone de Beauvoir'
  ],

  // Origines et influences
  origins: {
    context: 'Réaction contre l\'idéalisme hégélien...',
    predecessors: ['Søren Kierkegaard', 'Friedrich Nietzsche'],
    reactionAgainst: ['Idéalisme allemand', 'Rationalisme']
  },

  // Variations
  variations: [
    {
      title: 'Existentialisme chrétien (Kierkegaard)',
      description: '...'
    },
    {
      title: 'Existentialisme athée (Sartre)',
      description: '...'
    }
  ]
};
```

### 4. Source (extrait des concepts)

```typescript
sources: [
  {
    title: "L'Être et le Néant",
    author: 'Jean-Paul Sartre',
    year: 1943,
    type: 'ESSAY',
    reference: 'Essai fondamental sur l\'ontologie phénoménologique',
    quotes: [
      'L\'existence précède l\'essence.',
      'L\'homme est condamné à être libre.'
    ]
  }
]
```

#### Type mapping

| Type | Usage |
|------|-------|
| `BOOK` | Monographie, traité |
| `ESSAY` | Essai philosophique |
| `PLAY` | Pièce de théâtre |
| `POEM` | Poème ou texte poétique |
| `ARTICLE` | Article académique |
| `SPEECH` | Discours, conférence |

---

## Scripts disponibles

### Seed complet

```bash
npm run db:seed
```

**Ce que fait le script :**
- ✅ Seed les catégories (stoïcisme, existentialisme, etc.)
- ✅ Seed les achievements (16 succès)
- ✅ Seed les relations conceptuelles
- ✅ Seed les sources depuis les concepts
- ⚠️ N'importe PAS les philosophes et mouvements

**Sortie attendue :**
```
🌱 Starting seed...

📁 Seeding categories...
  ✓ Seeded 5 categories

🏆 Seeding achievements...
  ✓ Seeded 16 achievements

🔗 Seeding concept relations...
  ✓ Seeded 43 concept relations

📚 Seeding sources from concepts...
  ✓ Seeded 110 sources

✅ Seed completed!
```

### Seeds individuels

#### Philosophes

```bash
npm run db:seed:philosophers
```

**Fonctionnalités :**
- Importe 70+ philosophes depuis `src/data/philosophers/all.ts`
- Nettoie le markdown des biographies
- Gère les dates av. J.-C.
- Crée les liens avec les mouvements
- Affiche des statistiques détaillées

#### Mouvements

```bash
npm run db:seed:movements
```

**Fonctionnalités :**
- Importe 13+ mouvements philosophiques
- Crée les liens avec les philosophes
- Normalise les slugs

#### Sources

```bash
npm run db:seed:sources
```

**Fonctionnalités :**
- Extrait les sources depuis les concepts
- Normalise les types (BOOK, ESSAY, etc.)
- Crée les citations associées

#### Relations conceptuelles

```bash
npm run db:seed:concept-relations
```

**Options :**
```bash
# Dry-run (simulation sans modifications)
npm run db:seed:concept-relations:dry

# Clear (supprime toutes les relations)
npm run db:seed:concept-relations:clear

# Verbose (détails étape par étape)
npm run db:seed:concept-relations:verbose
```

### Analyse de qualité

```bash
npm run db:seed:analyze
```

**Ce que fait le script :**
- Analyse tous les concepts dans `src/data/concepts/`
- Génère un rapport de qualité (0-100)
- Identifie les champs manquants
- Suggère des améliorations

**Sortie attendue :**
```
╔══════════════════════════════════════════════════╗
║          📊 QUALITY ANALYSIS REPORT 📊             ║
╠══════════════════════════════════════════════════╣
║ Total Concepts:       19                          ║
║ Critical (0-40):      2                           ║
║ High (41-60):         5                           ║
║ Medium (61-80):       8                           ║
║ Low (81-100):         4                           ║
║ Average Score:        65.3                        ║
╚══════════════════════════════════════════════════╝

Priority improvements:
⚠️  liberté: Missing philosophicalDefinition
⚠️  temps: Only 2 examples (need 5+)
```

### Scripts de cleanup

```bash
# Nettoyer tous les textes (concepts, philosophes, mouvements)
npm run cleanup:text

# Nettoyer uniquement les concepts
npm run cleanup:concepts

# Nettoyer uniquement les philosophes
npm run cleanup:philosophers

# Nettoyer uniquement les mouvements
npm run cleanup:movements
```

**Ce que fait le script :**
- Supprime le markdown (**gras**, *italique*, ## titres)
- Normalise les guillemets (« » → ")
- Nettoie les espaces excessives
- Préserve le sens philosophique

### Reset complet

```bash
# Reset + seed ( destructive )
npm run db:seed:force
```

**⚠️ ATTENTION :** Cette commande détruit toutes les données existantes !

---

## Workflow recommandé

### Initialisation de la base de données

```bash
# 1. Configurer l'environnement
cp .env.example .env
# Éditer .env avec vos credentials PostgreSQL

# 2. Initialiser Prisma
npm run db:generate
npm run db:push

# 3. Nettoyer les textes (recommandé)
npm run cleanup:text

# 4. Analyser la qualité (optionnel)
npm run db:seed:analyze

# 5. Seed en ordre
npm run db:seed:movements      # D'abord les mouvements
npm run db:seed:philosophers   # Ensuite les philosophes
npm run db:seed                # Enfin le reste

# 6. Vérifier dans Prisma Studio
npm run db:studio
```

### Mise à jour des données

```bash
# 1. Modifier les fichiers dans src/data/
# 2. Nettoyer les textes si nécessaire
npm run cleanup:concepts

# 3. Relancer le seed partiel
npm run db:seed:philosophers   # Si philosophes modifiés
npm run db:seed:movements      # Si mouvements modifiés
npm run db:seed                # Si autres données modifiées

# 4. Vérifier
npm run db:studio
```

### Ajouter un nouveau concept

```bash
# 1. Copier le template
cp src/data/concepts/_template.ts src/data/concepts/mon-concept.ts

# 2. Éditer mon-concept.ts
# - Remplir tous les champs requis
# - Suivre les conventions du template

# 3. Ajouter à l'index
# Éditer src/data/concepts/index.ts :
#   export { concept as monConcept } from './mon-concept';

# 4. Nettoyer le texte
npm run cleanup:concepts

# 5. Seeder
npm run db:seed

# 6. Vérifier
npm run db:studio
```

---

## Résolution de problèmes

### Erreur: Database URL not found

```
Error: Database URL not found in .env
```

**Solution :**
```bash
# Vérifier que .env existe
ls -la .env

# Vérifier le contenu
cat .env | grep DATABASE_URL

# Si manquant, copier .env.example
cp .env.example .env
# Éditer avec vos credentials
```

### Erreur: Concept not found

```
Error: Concept "liberte" not found in database
```

**Causes possibles :**
1. Le slug ne correspond pas
2. Le concept n'a pas été seedé
3. La base de données est vide

**Solution :**
```bash
# 1. Vérifier le slug dans le fichier de données
cat src/data/concepts/liberte.ts | grep slug

# 2. Vérifier si le concept existe en base
npm run db:studio
# Chercher le concept dans la table "Concept"

# 3. Reseeder les concepts
npm run db:seed
```

### Erreur: Movement not found

```
⚠ Movement not found: existentialisme
```

**Solution :**
```bash
# Seed les mouvements d'abord
npm run db:seed:movements

# Puis les philosophes
npm run db:seed:philosophers
```

### Erreur: Philosopher not found

```
⚠ Philosopher not found: jean-paul-sartre
```

**Solution :**
```bash
# Seed les philosophes d'abord
npm run db:seed:philosophers

# Puis les mouvements
npm run db:seed:movements
```

### Erreur: Type errors

```
Error: Type 'string' is not assignable to type 'SourceType'
```

**Solution :**
```bash
# Vérifier les types autorisés dans le schema Prisma
cat prisma/schema.prisma | enum SourceType

# Corriger le type dans le fichier de données
# types valides: BOOK | ESSAY | PLAY | POEM | ARTICLE | SPEECH
```

### Problème: Dates av. J.-C. incorrectes

```typescript
// ❌ INCORRECT
birthYear: -384,
deathYear: 322   // Signes inconsistants

// ✅ CORRECT
birthYear: -384,
deathYear: -322  // Les deux négatifs
```

### Problème: Slug conflicts

```
Error: Unique constraint failed on the fields: (slug)
```

**Solution :**
```bash
# 1. Vérifier les slugs en double
grep -r "slug: 'liberte'" src/data/

# 2. Corriger pour avoir des slugs uniques
# 3. Reseeder
npm run db:seed
```

### Problème: Markdown dans la base de données

Si vous voyez des caractères markdown dans Prisma Studio :

```
**Liberté** radicale au sens de *Sartre*
```

**Solution :**
```bash
# Relancer le cleanup
npm run cleanup:text

# Reseeder
npm run db:seed
```

---

## Bonnes pratiques

### 1. Toujours nettoyer avant de seeder

```bash
# ✅ BON
npm run cleanup:text
npm run db:seed

# ❌ MAUVAIS
npm run db:seed  # Sans cleanup
```

### 2. Vérifier les slugs

```bash
# Avant de seeder, vérifier que les slugs sont corrects
grep -r "slug:" src/data/concepts/ | sort

# Doit être en kebab-case
✅ slug: 'liberte-absolute'
✅ slug: 'etre-pour-soi'
❌ slug: 'Liberté_Absolue'  # Mauvais
```

### 3. Utiliser upsert

Les scripts de seed utilisent `upsert` pour éviter les doublons :

```typescript
await prisma.concept.upsert({
  where: { slug: 'liberte' },
  update: { name: 'Liberté' },  // Mise à jour si existe
  create: { slug: 'liberte', name: 'Liberté' }  // Création sinon
});
```

### 4. Suivre l'ordre de seed

```
1. Catégories (automatique dans db:seed)
2. Mouvements
3. Philosophes
4. Concepts (si migration depuis Obsidian)
5. Relations conceptuelles
6. Sources
7. Achievements
```

**Pourquoi ?** Les dépendances doivent exister avant d'être liées.

### 5. Lancer les tests après modification

```bash
# Tests unitaires
npm run test

# Tests E2E
npm run test:e2e

# Typecheck
npm run typecheck
```

### 6. Documenter les changements

Dans `prisma/seed/CHANGELOG.md` :

```markdown
## v1.1.0 (2025-03-15)
- ✅ Ajout: 5 nouveaux concepts (angoisse, authenticité, etc.)
- ✅ Fix: Dates av. J.-C. pour Aristote
- ✅ Update: Nettoyage markdown amélioré
```

### 7. Utiliser l'analyseur de qualité

```bash
# Avant de seeder en production
npm run db:seed:analyze

# Corriger les concepts avec score < 60
# Reseeder
npm run db:seed
```

### 8. Sauvegarder avant reset

```bash
# Toujours sauvegarder avant un reset
pg_dump $DATABASE_URL > backup.sql

# Reset
npm run db:reset

# Restaurer si nécessaire
psql $DATABASE_URL < backup.sql
```

---

## Ressources supplémentaires

- **Architecture technique :** `docs/SEED_ARCHITECTURE.md`
- **Guide de dépannage :** `docs/SEED_TROUBLESHOOTING.md`
- **README des seeds :** `prisma/seed/README.md`
- **Changelog :** `prisma/seed/CHANGELOG.md`

---

**Dernière mise à jour :** 2025-03-01
**Version :** 1.0.0
