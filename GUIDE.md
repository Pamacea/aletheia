# Guide d'Utilisation d'Aletheia

## 📖 Vue d'Ensemble

Aletheia est une plateforme d'étude philosophique qui transforme un vault Obsidian en application web interactive avec :
- **Navigation par graphe** : Visualisez les connexions entre philosophes et concepts
- **Système de flashcards** : Mémorisez avec l'algorithme SM-2 (répétition espacée)
- **Annotations personnelles** : Ajoutez vos notes sur n'importe quelle fiche
- **Recherche avancée** : Trouvez rapidement ce que vous cherchez

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone <repo-url>
cd aletheia
npm install
```

### 2. Configuration de la Base de Données

**Créer un projet Neon :**
1. Aller sur https://neon.tech
2. Créer un nouveau projet
3. Copier le `DATABASE_URL`

**Configurer `.env` :**
```env
DATABASE_URL="postgresql://..."
BETTER_AUTH_SECRET="<générer avec openssl rand -base64 32>"
BETTER_AUTH_URL="http://localhost:3000"

# Discord OAuth
DISCORD_CLIENT_ID="..."
DISCORD_CLIENT_SECRET="..."

# GitHub OAuth
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."

OBSIDIAN_VAULT_PATH="C:\\Users\\Yanis\\Vault\\!Etudes philosophiques"
```

### 3. Initialiser la Base de Données

```bash
npm run db:generate  # Générer client Prisma
npm run db:push      # Pousser le schéma vers Neon
```

### 4. Charger les Données Philosophiques

```bash
npm run db:seed      # Importer les données depuis data/
```

Le seed script lit les fichiers TypeScript dans `src/data/categories/` et remplit la base de données avec :
- Catégories philosophiques
- Concepts avec définitions
- Sources (livres, poèmes, textes)
- Relations entre concepts
- Flashcards d'étude

### 5. Lancer le Serveur

```bash
npm run dev
```

Ouvrir http://localhost:3000

## 📚 Utilisation

### Navigation

1. **Homepage** : Vue d'ensemble avec liens vers les sections principales
2. **Agora** (`/agora`) : Liste des philosophes avec filtres par siècle
3. **Conceptuaire** (`/conceptuaire`) : Liste des concepts philosophiques
4. **Citations** (`/citations`) : Collection de citations avec contexte
5. **Graphe** (`/graphe`) : Visualisation interactive des connexions

### Graphe de Connaissances

Le graphe permet de :
- **Visualiser** les relations entre philosophes, concepts et citations
- **Naviguer** en cliquant sur les nœuds
- **Filtrer** par type d'entité et par siècle
- **Rechercher** des chemins entre deux philosophes

### Flashcards (À venir)

Le système de flashcards utilisera l'algorithme SM-2 pour :
- Planifier les révisions aux moments optimaux
- Suivre votre progression
- Auto-générer des cartes depuis le contenu

## 🔧 Développement

### Scripts Disponibles

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production
npm run start      # Serveur de production
npm run lint       # ESLint
npm run typecheck  # Vérification TypeScript
```

### Scripts Base de Données

```bash
npm run db:generate  # Générer client Prisma
npm run db:push      # Pousser le schéma vers Neon
npm run db:studio    # Ouvrir Prisma Studio
npm run db:seed      # Importer les données Obsidian
```

## 🎨 Personnalisation

### Thème Couleurs

Le thème "Papier Littéraire" utilise :
- `paper-50` à `paper-900` : Nuances de crème
- `ink` : Noir et gris pour le texte
- `sepia-500` à `sepia-700` : Marron pour les accents

### Fonts

- **Playfair Display** : Titres élégants
- **Inter** : Texte de corps
- **Caveat** : Style manuscrit pour les notes

## 📖 Architecture

```
src/
├── app/                    # Next.js App Router (Server Components)
│   ├── agora/             # Forum de discussion
│   ├── auth/              # Authentication (login, register)
│   ├── conceptuaire/      # Concepts philosophiques
│   ├── courants/          # Courants philosophiques
│   ├── graphe/            # Graph interactif (Client Component)
│   ├── philosophes/       # Philosophes
│   ├── profile/           # Profil utilisateur
│   ├── api/               # API Routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Styles globaux
│
├── types/                 # 🆕 Centralized TypeScript types
│   └── index.ts           # All domain types
│
├── lib/
│   ├── actions/           # Server Actions
│   │   ├── concepts.ts    # Concepts CRUD
│   │   ├── courants.ts    # Courants philosophiques
│   │   └── philosophers.ts# Philosophes
│   ├── db/                # Prisma client
│   ├── react-query/       # TanStack Query providers/hooks
│   └── utils/             # Utilitaires
│
├── ui/                    # Composants UI réutilisables
│   ├── atoms/             # Petits composants (Button, Input...)
│   ├── molecules/         # Composés (Card, Badge, Modal...)
│   ├── components/        # Composants spécifiques (Sidebar, etc.)
│   └── index.ts           # 🆕 Barrel export
│
└── data/                  # Data-driven architecture
    └── categories/        # Catégories philosophiques
```

### 🆕 Types Centralisés

**Nouveau :** Tous les types TypeScript sont maintenant centralisés dans `src/types/index.ts`.

**Avantages :**
- ✅ **Single Source of Truth** : Un seul fichier pour tous les types
- ✅ **No more `any`** : Types explicites pour toute l'application
- ✅ **Reusability** : Importez depuis `@/types`
- ✅ **Consistency** : Mêmes types partout dans le code

**Usage :**
```typescript
import type { Concept, Category, ConceptWithRelations } from '@/types';
```

### 🆕 UI Barrel Export

**Nouveau :** Importez tous les composants UI depuis un seul point d'entrée.

**Usage :**
```typescript
// ✅ NOUVEAU - Import simplifié
import { Button, Card, Sidebar, LinkOrnate } from '@/ui';

// ❌ AVANT - Imports multiples
import { Button } from '@/ui/atoms/Button';
import { Card } from '@/ui/molecules/Card';
import { Sidebar } from '@/ui/components/Sidebar';
```

### 🎨 Conventions de Style

**Couleurs personnalisées (Tailwind) :**
```tsx
// Utilisez les classes Tailwind au lieu des valeurs hardcodées
className="bg-paper-50 text-ink border-paper-300"

// Au lieu de :
className="bg-[#faf9f7] text-[#2d2b29] border-[#d9d6d0]"
```

**Palette de couleurs :**
- `paper-50` à `paper-900` : Nuances de crème
- `ink`, `ink-light`, `ink-lighter` : Texte
- `sepia-50` à `sepia-900` : Accents

### Convention d'Import

**Utilisez toujours l'alias `@/` :**
```typescript
// ✅ CORRECT
import { Button } from '@/ui';
import { getConcepts } from '@/lib/actions/concepts';
import type { Concept } from '@/types';

// ❌ À ÉVITER
import { Button } from '../../../ui/atoms/Button';
import type { Concept } from './types';
```

### Server Components优先

**Privilégiez les Server Components :**
- ✅ Pages et layouts : Server Components par défaut
- ✅ Récupération de données : Server Actions ou Prisma directement
- ❌ Client Components : Seulement quand nécessaire (interactions)

**Exemple :**
```typescript
// ✅ CORRECT - Server Component
export default async function ConceptuairePage() {
  const concepts = await getConcepts(); // Directement dans le component
  return <ConceptList concepts={concepts} />;
}

// ❌ À ÉVITER - Client Component inutile
"use client";
export default function ConceptuairePage() {
  const [concepts, setConcepts] = useState([]);
  useEffect(() => { fetch... }, []);
  // ...
}
```

### 🆕 Architecture Data-Driven

**Principe :** Tout le contenu philosophique vit dans des fichiers TypeScript dans `src/data/categories/`.

**Avantages :**
- ✅ **Type-safe** : TypeScript garantit la structure
- ✅ **Version control** : Git track tout le contenu
- ✅ **Facile à éditer** : Modifier des .ts plutôt que parser Obsidian
- ✅ **Performant** : Server Components accèdent directement à Prisma
- ✅ **Scalable** : Ajouter des catégories sans changer le code

**Workflow :**
1. Éditer les fichiers dans `src/data/categories/`
2. Lancer `npm run db:seed`
3. Le contenu est dans la base de données
4. Les pages Server Components affichent les données

**Exemple de structure :**
```typescript
// src/data/categories/metaphysique.ts
export const category = { /* ... */ };

export const concepts = [
  {
    id: 'verite',
    name: 'Vérité',
    greek: 'ΑΛΗΘΕΙΑ',
    definition: 'Le dévoilement...',
    sources: [ /* ... */ ],
    flashcards: [ /* ... */ ]
  }
];
```

## 🔐 Authentification

Aletheia utilise **Better Auth** avec :
- **Discord OAuth** : Connexion via Discord
- **GitHub OAuth** : Connexion via GitHub

## 🚢 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres Plateformes

Le projet peut être déployé sur toute plateforme supportant Next.js :
- Netlify
- Railway
- Render
- AWS Amplify

## 🐛 Dépannage

### Problème : Le serveur ne démarre pas

```bash
# Nettoyer le cache
rm -rf .next
npm run dev
```

### Problème : Erreur de connexion à la base de données

```bash
# Vérifier DATABASE_URL dans .env
# Tester la connexion
npx prisma db push
```

### Problème : Les styles ne s'appliquent pas

```bash
# Reconstruire le cache
rm -rf .next
npm run dev
```

## 📝 Notes de Version

### v0.2.0 (2025-02-26) - Refactorisation Majeure

**TypeScript :**
- ✅ Types centralisés dans `src/types/index.ts`
- ✅ Élimination de tous les types `any` (84 → 0)
- ✅ Types stricts pour toutes les entités

**Architecture :**
- ✅ Barrel export UI (`src/ui/index.ts`)
- ✅ Routes réorganisées (suppression du route group `(user)`)
- ✅ Imports unifiés (alias `@/` partout)
- ✅ Data-driven architecture avec contenu dans `src/data/categories/`

**Styles :**
- ✅ Scrollbar optionnelle au lieu de globale
- ✅ Couleurs Tailwind personnalisées (paper, ink, sepia)
- ✅ Suppression des `!important` inutiles
- ✅ Remplacement des inline styles par des classes

**Stack Technique :**
- ✅ Next.js 16 avec App Router
- ✅ Better Auth (Discord, GitHub)
- ✅ TanStack Query pour state management
- ✅ Vitest + Playwright configurés

**Voir le [CHANGELOG](CHANGELOG.md) pour le détail complet des changements.**

---

*Pour plus d'informations, voir le [README](README.md)*
