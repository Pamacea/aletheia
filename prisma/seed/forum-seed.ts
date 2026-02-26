import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

async function seedForumCategories() {
  console.log('🏛️ Seeding forum categories...')

  const categories = [
    {
      slug: 'metaphysique',
      name: 'Métaphysique',
      description: 'Questions sur l\'être, la réalité, le temps, la causalité, et la nature de l\'existence',
      icon: '🔮',
      color: '#8b5cf6',
      order: 1,
    },
    {
      slug: 'ethique',
      name: 'Éthique',
      description: 'Morale, valeurs, devoir, bien et mal, vertus, et philosophie morale',
      icon: '⚖️',
      color: '#10b981',
      order: 2,
    },
    {
      slug: 'politique',
      name: 'Politique',
      description: 'Justice, pouvoir, démocratie, État, droits, et organisation sociale',
      icon: '🏛️',
      color: '#f59e0b',
      order: 3,
    },
    {
      slug: 'esthetique',
      name: 'Esthétique',
      description: 'Beau, art, sublime, création, goût, et expérience esthétique',
      icon: '🎨',
      color: '#ec4899',
      order: 4,
    },
    {
      slug: 'epistemologie',
      name: 'Épistémologie',
      description: 'Connaissance, vérité, science, raison, scepticisme, et méthode',
      icon: '🔬',
      color: '#3b82f6',
      order: 5,
    },
    {
      slug: 'philosophie-du-langage',
      name: 'Philosophie du langage',
      description: 'Signification, référence, herméneutique, linguistique, et communication',
      icon: '💬',
      color: '#06b6d4',
      order: 6,
    },
    {
      slug: 'phenomenologie',
      name: 'Phénoménologie',
      description: 'Conscience, expérience, intentionnalité, perception, et subjectivité',
      icon: '👁️',
      color: '#6366f1',
      order: 7,
    },
    {
      slug: 'histoire-philosophie',
      name: 'Histoire de la philosophie',
      description: 'Antiquité, Moyen Âge, moderne, contemporaine, et courants philosophiques',
      icon: '📜',
      color: '#a855f7',
      order: 8,
    },
    {
      slug: 'philosophie-contemporaine',
      name: 'Philosophie contemporaine',
      description: 'Courants actuels, pensée post-moderne, et débats contemporains',
      icon: '🚀',
      color: '#ef4444',
      order: 9,
    },
    {
      slug: 'philosophie-pratique',
      name: 'Philosophie pratique',
      description: 'Application de la philosophie au quotidien, sagesse pratique, et vie bonne',
      icon: '🌿',
      color: '#22c55e',
      order: 10,
    },
    // NOUVELLES CATÉGORIES
    {
      slug: 'logique-argumentation',
      name: 'Logique et argumentation',
      description: 'Raisonnement, fallacies, syllogismes, dialectique, et pensée critique',
      icon: '🧠',
      color: '#8b5cf6',
      order: 11,
    },
    {
      slug: 'philosophie-des-sciences',
      name: 'Philosophie des sciences',
      description: 'Épistémologie scientifique, méthode, paradigmes, et révolutions scientifiques',
      icon: '⚗️',
      color: '#0ea5e9',
      order: 12,
    },
    {
      slug: 'philosophie-religion',
      name: 'Philosophie de la religion',
      description: 'Foi, raison, théologie, atheisme, agnosticisme, et expérience religieuse',
      icon: '🕊️',
      color: '#fbbf24',
      order: 13,
    },
    {
      slug: 'ontologie',
      name: 'Ontologie',
      description: 'Être, existence, essence, substance, accident, et métaphysique de l\'être',
      icon: '🌌',
      color: '#6366f1',
      order: 14,
    },
    {
      slug: 'philosophie-de-l-esprit',
      name: 'Philosophie de l\'esprit',
      description: 'Conscience, identité personnelle, intentionnalité, IA, et cognition',
      icon: '🧩',
      color: '#ec4899',
      order: 15,
    },
    {
      slug: 'ethique-appliquee',
      name: 'Éthique appliquée',
      description: 'Bioéthique, éthique des affaires, éthique environnementale, et dilemmes moraux',
      icon: '⚕️',
      color: '#10b981',
      order: 16,
    },
    {
      slug: 'philosophie-politique-contemporaine',
      name: 'Philosophie politique contemporaine',
      description: 'Libéralisme, socialisme, démocratie, justice sociale, et mondialisation',
      icon: '🌍',
      color: '#f59e0b',
      order: 17,
    },
    {
      slug: 'hermeneutique',
      name: 'Herméneutique',
      description: 'Interprétation, compréhension, exégèse, et théorie de l\'interprétation',
      icon: '📖',
      color: '#a855f7',
      order: 18,
    },
    {
      slug: 'stoicisme',
      name: 'Stoïcisme',
      description: 'Sagesse stoïcienne, contrôle émotionnel, vertus cardinales, et vie selon la nature',
      icon: '🏛️',
      color: '#78716c',
      order: 19,
    },
    {
      slug: 'bouddhisme-philosophique',
      name: 'Bouddhisme philosophique',
      description: 'Souffrance, impermanence, vacuité, éveil, et voie du milieu',
      icon: '☸️',
      color: '#f97316',
      order: 20,
    },
    {
      slug: 'existentialisme',
      name: 'Existentialisme',
      description: 'Existence, essence, liberté, authenticité, absurde, et engagement',
      icon: '🎭',
      color: '#ef4444',
      order: 21,
    },
    {
      slug: 'feminisme-philosophique',
      name: 'Féminisme philosophique',
      description: 'Genre, patriarcat, corps, identité, et épistémologie du point de vue',
      icon: '♀️',
      color: '#ec4899',
      order: 22,
    },
    {
      slug: 'philosophie-environnementale',
      name: 'Philosophie environnementale',
      description: 'Écologie profonde, anthropocène, éthique environnementale, et nature',
      icon: '🌱',
      color: '#22c55e',
      order: 23,
    },
    {
      slug: 'philosophie-de-l-education',
      name: 'Philosophie de l\'éducation',
      description: 'Pédagogie, formation, émancipation, culture, et développement humain',
      icon: '🎓',
      color: '#3b82f6',
      order: 24,
    },
    {
      slug: 'philosophie-de-la-technique',
      name: 'Philosophie de la technique',
      description: 'Technologie, IA, transhumanisme, post-humanisme, et société numérique',
      icon: '🤖',
      color: '#06b6d4',
      order: 25,
    },
    {
      slug: 'philosophie-analytique',
      name: 'Philosophie analytique',
      description: 'Frege, Russell, Wittgenstein, langage ordinaire, et analyse logique',
      icon: '🔍',
      color: '#64748b',
      order: 26,
    },
    {
      slug: 'philosophie-continentale',
      name: 'Philosophie continentale',
      description: 'Structuralisme, post-structuralisme, déconstruction, et pensée critique',
      icon: '🎪',
      color: '#8b5cf6',
      order: 27,
    },
    {
      slug: 'ethique-animal',
      name: 'Éthique animale',
      description: 'Droits des animaux, végétarisme, antispécisme, et statut moral des animaux',
      icon: '🐾',
      color: '#84cc16',
      order: 28,
    },
    {
      slug: 'philosophie-de-l-histoire',
      name: 'Philosophie de l\'histoire',
      description: 'Sens de l\'histoire, téléologie, matérialisme historique, et historicité',
      icon: '⏳',
      color: '#a855f7',
      order: 29,
    },
    {
      slug: 'cosmologie',
      name: 'Cosmologie philosophique',
      description: 'Univers, multivers, fine-tuning, origine, et destin du cosmos',
      icon: '🌌',
      color: '#0ea5e9',
      order: 30,
    },
  ]

  for (const category of categories) {
    await prisma.forumCategory.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    })
  }

  console.log(`✅ Created ${categories.length} forum categories`)
}

async function seedSamplePosts() {
  console.log('📝 Seeding sample forum posts...')

  // Get first user and some categories
  const user = await prisma.user.findFirst()
  if (!user) {
    console.log('⚠️  No users found, skipping sample posts')
    return
  }

  const metaphysique = await prisma.forumCategory.findUnique({ where: { slug: 'metaphysique' } })
  const ethique = await prisma.forumCategory.findUnique({ where: { slug: 'ethique' } })
  const politique = await prisma.forumCategory.findUnique({ where: { slug: 'politique' } })

  if (!metaphysique || !ethique || !politique) {
    console.log('⚠️  Categories not found, skipping sample posts')
    return
  }

  const posts = [
    {
      slug: 'nature-du-temps-saint-augustin',
      title: 'La nature du temps chez Saint Augustin',
      content: `# Le paradoxe du temps

Saint Augustin, dans les *Confessions*, soulève l'une des questions les plus profondes de la métaphysique : **qu'est-ce que le temps ?**

## La fameuse formule

> "Qu'est-ce donc que le temps ? Si personne ne me le demande, je le sais ; mais si je veux l'expliquer à quelqu'un qui me le demande, je ne le sais plus."

## Les trois dimensions du temps

Augustin identifie trois "présents" :
1. **Le présent du passé** - la mémoire
2. **Le présent du présent** - l'attention
3. **Le présent du futur** - l'attente

## Le temps et l'éternité

Comment un Dieu éternel peut-il agir dans un monde temporel ? C'est là que se trouve le cœur du paradoxe augustinien.

Qu'en pensez-vous ? Le temps est-il une propriété de l'univers ou une construction de notre esprit ?`,
      excerpt: 'Comment Augustin reconcile-t-il l\'éternité de Dieu avec la temporalité de la création ? Une analyse approfondie des Confessions...',
      userId: user.id,
      categoryId: metaphysique.id,
      tags: ['augustin', 'temps', 'eternite', 'metaphysique', 'theologie'],
      isPinned: true,
    },
    {
      slug: 'ethique-du-care-societe-contemporaine',
      title: 'L\'éthique du care dans la société contemporaine',
      content: `# Le care comme fondement moral

L'éthique du care, développée par Carol Gilligan, Nel Noddings et Joan Tronto, propose une alternative aux théories de la justice basées sur des principes abstraits.

## Care vs Justice

- **Justice** : Universelle, impartiale, basée sur des droits
- **Care** : Particulière, engagée, basée sur les relations

## Applications contemporaines

1. **Santé** : La relation soignant-soigné
2. **Éducation** : L'attention à l'autre dans l'apprentissage
3. **Politique** : Le welfare state et la protection sociale

## Critiques et limites

Certain(e)s philosophes accusent le care de :
- Être trop particulariste
- Manquer de force normative
- Perpétuer des rôles genrés traditionnels

**Question** : Le care peut-il fonder une politique de justice sociale ?`,
      excerpt: 'Exploration des implications du care comme fondement moral alternatif aux théories de la justice...',
      userId: user.id,
      categoryId: ethique.id,
      tags: ['care', 'ethique', 'feminisme', 'politique-sociale'],
    },
    {
      slug: 'liberte-determinisme-debat-persistant',
      title: 'Liberté et déterminisme : le débat persistant',
      content: `# Le paradoxe du libre arbitre

> "L'homme est condamné à être libre." - Jean-Paul Sartre

## Positions philosophiques

### Dur déterminisme
Nos actions sont entièrement déterminées par des causes antérieures.

### Libertisme
Nous avons le libre arbitre, certaines actions sont vraiment libres.

### Compatibilisme
Le déterminisme est vrai mais compatible avec la liberté.

## L'argument de la responsabilité

Si le déterminisme est vrai :
- Comment pouvons-nous être responsables ?
- Quelle est la valeur de la morale ?
- Le système judiciaire a-t-il un sens ?

## Perspectives modernes

Les neurosciences ajoutent une nouvelle dimension au débat :

- Libet et l'activité cérébrale précédant la conscience
- Le "décalage temporel" de 500ms
- Les implications pour notre conception de la volonté

**Pour vous** : Êtes-vous libre ou déterminé ?`,
      excerpt: 'Le compatibilisme offre-t-il une véritable solution au paradoxe du libre arbitre ?',
      userId: user.id,
      categoryId: metaphysique.id,
      tags: ['liberte', 'determinisme', 'sartre', 'neurosciences'],
    },
  ]

  for (const post of posts) {
    await prisma.forumPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }

  console.log(`✅ Created ${posts.length} sample posts`)
}

async function main() {
  await seedForumCategories()
  await seedSamplePosts()
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
