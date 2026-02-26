# Concept Relations Seed

## Overview

Ce script crée les relations entre concepts philosophiques dans la base de données Aletheia.

## Prérequis

1. **Base de données PostgreSQL** fonctionnelle avec les mots de passe correctement configurés
2. **Concepts existants** dans la base de données (les concepts doivent être créés d'abord)
3. **Variables d'environnement** configurées dans `.env`

## Utilisation

### Afficher les statistiques actuelles

```bash
npm run seed:concept-relations:stats
```

Ou directement :

```bash
cd prisma/seed
npx tsx concept-relations.ts
```

### Recréer toutes les relations

```bash
npm run seed:concept-relations -- --clear
```

Ou :

```bash
cd prisma/seed
npx tsx concept-relations.ts --clear
```

## Structure des Données

Les relations sont définies dans `src/lib/concept-network/network.ts` :

```typescript
export const conceptNetwork: ConceptConnection[] = [
  {
    from: 'absurde',      // slug du concept source
    to: 'revolte',        // slug du concept cible
    type: 'INFLUENCES',   // type de relation
    strength: 5,          // force 1-5
    description: 'La révolte est la réponse authentique à l\'absurde'
  },
  // ... plus de connexions
];
```

## Types de Relations

- **RELATED** : Connexion générique, lien thématique
- **OPPOSES** : Opposition philosophique fondamentale
- **BUILDS_ON** : Un concept se construit sur l'autre
- **INFLUENCES** : Influence philosophique directe
- **CRITIQUES** : Critique ou remise en question
- **EXTENDS** : Extension ou approfondissement
- **CLARIFIES** : Clarification ou précision
- **EXEMPLIFIES** : Un concept exemplifie l'autre

## Force des Connexions

- **5** : Connexion fondamentale, essentielle
- **4** : Connexion forte, importante
- **3** : Connexion moyenne, significative
- **2** : Connexion faible, secondaire
- **1** : Connexion ténue, marginale

## Résultat

Le script affiche :

1. **Statistiques avant** : nombre de relations par type, concepts les plus connectés
2. **Progression** : chaque relation créée ou skippée
3. **Statistiques après** : vérification du résultat

### Exemple de sortie

```
📊 Concept Relations Statistics:

Total relations: 0

Distribution by type:
Distribution by strength:
Top 10 most connected concepts:

🔄 Seeding concept relations...
📊 Found 15 concepts in database
✅ Created: absurde → revolte (INFLUENCES, strength: 5)
✅ Created: absurde → liberte (INFLUENCES, strength: 4)
⏭️  Skipped: absurde → sens (concept not found)

📊 Summary:
✅ Created: 87 relations
⏭️  Skipped: 12 relations
❌ Errors: 0 relations
📈 Total in network: 99 relations

📊 Concept Relations Statistics:

Total relations: 87

Distribution by type:
  INFLUENCES: 25
  OPPOSES: 22
  RELATED: 18
  ...

Distribution by strength:
  Strength 3: 25
  Strength 4: 30
  Strength 5: 15

Top 10 most connected concepts:
  1. Être (etre): 9 connections
  2. Vérité (verite): 6 connections
  ...
```

## Résolution de Problèmes

### Erreur : "client password must be a string"

**Problème** : Le `DATABASE_URL` dans `.env` n'a pas de mot de passe ou est mal formaté.

**Solution** : Vérifiez votre `.env` :

```env
DATABASE_URL="postgresql://user:password@host:port/database"
```

### Erreur : "relation concept_relations does not exist"

**Problème** : La table n'existe pas encore.

**Solution** : Lancez les migrations :

```bash
npx prisma migrate deploy
```

### Erreur : "concept not found"

**Problème** : Un concept référencé dans le réseau n'existe pas dans la base de données.

**Solution** :
1. Vérifiez que les concepts sont créés avec les bons slugs
2. Ajoutez les concepts manquants
3. Ou retirez la connexion du réseau

## Maintenance

### Ajouter une nouvelle connexion

1. Modifiez `src/lib/concept-network/network.ts`
2. Ajoutez la connexion au réseau approprié
3. Relancez le seed

```bash
npm run seed:concept-relations
```

### Mettre à jour une connexion existante

Le seed vérifie si la relation existe déjà. Pour mettre à jour :

1. Supprimez l'ancienne relation manuellement ou utilisez `--clear`
2. Modifiez la connexion dans `src/lib/concept-network/network.ts`
3. Relancez le seed

```bash
npm run seed:concept-relations -- --clear
```

## Architecture

- **Données** : `src/lib/concept-network/network.ts`
- **Seed** : `prisma/seed/concept-relations.ts`
- **Utilitaires** : `src/lib/graph/concepts.ts`
- **Documentation** : `docs/CONCEPT_NETWORK.md`

## Voir aussi

- [Documentation du réseau de concepts](../../docs/CONCEPT_NETWORK.md)
- [Schéma Prisma](../schema.prisma)
- [Utilitaires de graphe](../../src/lib/graph/concepts.ts)
