/*
  [NOM DU CONCEPT] - Template Concept Data
  Description brève du concept (une phrase)
 
  NOTE: Ce fichier est un TEMPLATE. Copiez-le et adaptez-le pour créer un nouveau concept.
*/
export const concept = {
  // ============================================================================
  // IDENTITÉ
  // ============================================================================
  id: 'identifiant-unique',
  name: 'Nom du Concept',
  slug: 'identifiant-unique',
  category: 'metaphysique' | 'epistemologie' | 'ethique' | 'politique' | 'esthetique' | 'existentialisme' | 'psychologie' | 'semiotique' | 'sociologie' | 'spiritualite',

  // ============================================================================
  // MÉTADONNÉES
  // ============================================================================
  difficulty: 1,          // 1-5 : niveau de difficulté conceptuelle
  importance: 1,          // 1-5 : importance philosophique
  status: 'COMPLETE' as const,  // 'COMPLETE' | 'DRAFT' | 'REVIEW'

  // ============================================================================
  // DÉFINITIONS
  // ============================================================================
  definition: 'Définition complète et détaillée du concept. Cette définition doit capturer l\'essence philosophique du concept, son histoire, ses variations principales, et son importance. Elle doit être complète (3-5 phrases minimum) et accessible tout en étant précise. Évitez les abréviations et le jargon sans explication.',

  shortDefinition: 'Définition en une phrase courte (max 100 caractères) pour les aperçus rapides',

  // ============================================================================
  // DÉFINITION PHILOSOPHIQUE (optionnel mais recommandé)
  // ============================================================================
  philosophicalDefinition: {
    analysis: 'Analyse philosophique approfondie du concept. Cette section permet de développer la compréhension conceptuelle au-delà de la définition de base. Elle peut inclure les implications philosophiques, les débats majeurs, les enjeux épistémologiques ou ontologiques.',

    distinctions: [
      'Concept A vs Concept B : explication de la différence',
      'Concept vs Notion proche : clarification des limites',
      'Ajoutez autant de distinctions que nécessaire'
    ],

    implications: 'Implications philosophiques du concept. Qu\'est-ce que ce concept implique pour d\'autres domaines ? Quelles sont ses conséquences pratiques ou théoriques ?'
  },

  // ============================================================================
  // RAISONNEMENTS PHILOSOPHIQUES (FORMAT STANDARDISÉ)
  // ============================================================================
  reasoning: {
    principalArguments: [
      {
        argument: 'Nom de l\'argument principal',
        explanation: 'Explication détaillée de l\'argument. Décrivez la structure logique, les prémisses implicites, et la conclusion. Soyez clair et pédagogique.',
        premises: [
          'Première prémisse (énoncé factique ou logique)',
          'Seconde prémisse',
          'Ajoutez autant de prémisses que nécessaire'
        ],
        conclusion: 'Conclusion logique de l\'argument'
      }
    ],

    objections: [
      {
        objection: 'Nom de l\'objection ou du philosophe',
        content: 'Contenu de l\'objection. Quelle critique est faite à l\'argument principal ? Pourquoi l\'argument est-il contesté ?',
        response: 'Réponse philosophique à l\'objection. Comment les partisans du concept répondent-ils à cette critique ?'
      }
    ],

    distinctions: [
      {
        distinction: 'Nom de la distinction conceptuelle',
        explanation: 'Explication détaillée de cette distinction. Pourquoi est-elle importante ? Quelles confusions évite-t-elle ?'
      }
    ]
  },

  // ============================================================================
  // ÉTYMOLOGIE
  // ============================================================================
  etymology: {
    latin: 'terme latin (optionnel)',
    greek: 'terme grec original avec alphabet (optionnel)',
    sanskrit: 'terme sanskrit (optionnel, pour concepts orientaux)',
    arabic: 'terme arabe (optionnel, pour philosophie arabe)',
    root: 'Racine étymologique (ex: indo-européen, proto-sémantique, etc.)',
    notes: 'Notes explicatives sur l\'évolution sémantique du terme à travers l\'histoire'
  },

  // ============================================================================
  // VARIATIONS DU CONCEPT
  // ============================================================================
  variations: [
    {
      title: 'Nom du philosophe - Titre de la variation',
      description: 'Description détaillée de la manière dont ce philosophe conçoit le concept. Quels aspects souligne-t-il ? Quelle est son originalité ? Comment sa vision diffère-t-elle des autres ?',
      philosophicalContext: 'Contexte philosophique. Dans quel courant s\'inscrit cette vision ? Quels problèmes cherche-t-elle à résoudre ? (optionnel)'
    }
  ],

  // ============================================================================
  // FIGURES CLÉS
  // ============================================================================
  keyFigures: [
    {
      name: 'Nom du philosophe',
      period: 'dates (ex: 1905-1980)',
      contribution: 'Contribution majeure à ce concept. En quoi ce philosophe a-t-il transformé ou défini le concept ?',
      works: ['Oeuvre 1', 'Oeuvre 2', 'Oeuvre 3'],  // Optionnel
      quotes: [                                            // Optionnel
        'Citation célèbre 1',
        'Citation célèbre 2'
      ]
    }
  ],

  // ============================================================================
  // CONCEPTS LIÉS
  // ============================================================================
  relatedConcepts: [
    {
      name: 'Nom du concept lié',
      type: 'REQUIRES' | 'REVEALS' | 'BUILDS_ON' | 'CONTRASTS_WITH' | 'RELATES_TO' | 'SEEKS' | 'OPPOSE' | 'INFLUENCES' | 'INFLUENCED_BY' | 'REJECTS',
      description: 'Description de la relation entre les deux concepts. Pourquoi sont-ils liés ? Quelle est la nature de leur relation ?',
      bidirectional: true  // true si la relation fonctionne dans les deux sens
    }
  ],

  // ============================================================================
  // COURANTS PHILOSOPHIQUES
  // ============================================================================
  relatedMovements: [
    {
      name: 'Nom du courant philosophique',
      description: 'Description du rapport entre ce concept et le courant. Le concept est-il central ? Est-ce une conséquence ? Une critique ?',
      role: 'CONCEPT_CENTRAL' | 'EXPRESSES' | 'RELATES_TO' | 'CONTRASTS_WITH' | 'FOUNDED' | 'RELATED' | 'CRITICAL',
      keyFigures: ['Philosophe 1', 'Philosophe 2', 'Philosophe 3']  // Optionnel
    }
  ],

  // ============================================================================
  // EXEMPLES
  // ============================================================================
  examples: [
    'Exemple 1 : description concrète d\'une situation qui illustre le concept',
    'Exemple 2 : expérience de pensée, cas historique, ou métaphore célèbre',
    'Exemple 3 : application contemporaine du concept',
    'Ajoutez autant d\'exemples que nécessaire pour illustrer le concept'
  ],

  // ============================================================================
  // SOURCES
  // ============================================================================
  sources: [
    {
      title: 'Titre de l\'oeuvre',
      author: 'Nom de l\'auteur',
      year: number | 'XXXX siècle av. J.-C.',
      type: 'BOOK' | 'ESSAY' | 'PLAY' | 'POEM' | 'ARTICLE' | 'SPEECH',
      reference: 'Référence brève décrivant le contenu de l\'oeuvre par rapport au concept',
      quotes: [
        'Citation 1',
        'Citation 2',
        'Ajoutez autant de citations que nécessaire'
      ]
    }
  ],

  // ============================================================================
  // FLASHCARDES
  // ============================================================================
  flashcards: [
    {
      type: 'BASIC' | 'CONNECTION' | 'QUOTE' | 'CLOZE' | 'ESSAY',
      front: 'Question ou prompt pour la face avant de la flashcard',
      back: 'Réponse détaillée ou contenu pour la face arrière. Pour les types CLOZE, utilisez le format: {{mot}} pour indiquer les trous à remplacer.',
      difficulty: 1  // 1-5 : niveau de difficulté
    }
  ],

  // ============================================================================
  // TAGS
  // ============================================================================
  tags: ['tag1', 'tag2', 'tag3', 'Ajoutez des tags pertinents pour la recherche et la classification']
};

// ============================================================================
// TYPES (pour référence TypeScript)
// ============================================================================

/*
  Difficulté conceptuelle : 1 = basique, 5 = très complexe
*/
type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

/*
  Statut du concept dans la base de données
*/
type ConceptStatus = 'COMPLETE' | 'DRAFT' | 'REVIEW';

/*
  Catégories philosophiques principales
*/
type ConceptCategory =
  | 'metaphysique'      // Être, temps, conscience, substance
  | 'epistemologie'     // Connaissance, vérité, science
  | 'ethique'           // Moralité, devoir, bien
  | 'politique'         // Justice, pouvoir, démocratie
  | 'esthetique'        // Beau, art, goût
  | 'existentialisme'   // Liberté, absurde, engagement
  | 'psychologie'       // Conscience, désir, amour, bonheur
  | 'semiotique'        // Langage, signes, communication
  | 'sociologie'        // Culture, société, solidarité
  | 'spiritualite';     // Dieu, religion, foi

/*
  Types de relations entre concepts
*/
type ConceptRelationType =
  | 'REQUIRES'          // Le concept A requiert le concept B
  | 'REVEALS'           // Le concept A révèle le concept B
  | 'BUILDS_ON'         // Le concept A se construit sur le concept B
  | 'CONTRASTS_WITH'    // Le concept A contraste avec le concept B
  | 'RELATES_TO'        // Relation générale
  | 'SEEKS'             // Le concept A cherche le concept B
  | 'OPPOSE'            // Le concept A s'oppose au concept B
  | 'INFLUENCES'        // Le concept A influence le concept B
  | 'INFLUENCED_BY'     // Le concept A est influencé par le concept B
  | 'REJECTS';          // Le concept A rejette le concept B

/*
  Rôles du concept dans un courant philosophique
*/
type MovementRole =
  | 'CONCEPT_CENTRAL'   // Le concept est central au courant
  | 'EXPRESSES'         // Le courant exprime ce concept
  | 'RELATES_TO'        // Relation générale
  | 'CONTRASTS_WITH'    // Le courant contraste avec ce concept
  | 'FOUNDED'           // Le courant a fondé ce concept
  | 'RELATED'           // Relation connexe
  | 'CRITICAL';         // Le courant critique ce concept

/*
  Types de sources bibliographiques
*/
type SourceType =
  | 'BOOK'      // Livre
  | 'ESSAY'     // Essai ou article
  | 'PLAY'      // Pièce de théâtre
  | 'POEM'      // Poème
  | 'ARTICLE'   // Article académique
  | 'SPEECH';   // Discours ou conférence

/*
  Types de flashcards
*/
type FlashcardType =
  | 'BASIC'       // Question de base (Q/R)
  | 'CONNECTION'  // Liens entre concepts
  | 'QUOTE'       // Identification de citation
  | 'CLOZE'       // Texte à trous ({{mot}})
  | 'ESSAY';      // Question de réflexion

// ============================================================================
// CHECKLIST DE VALIDATION
// ============================================================================

/*
  À vérifier avant de considérer un concept comme COMPLETE :

  IDENTITÉ
  ☐ id unique et descriptif (kebab-case)
  ☐ name correctement orthographié
  ☐ slug identique à id
  ☐ category appropriée
 
  CONTENU
  ☐ definition complète (3-5 phrases minimum)
  ☐ shortDefinition < 100 caractères
  ☐ reasoning complet avec au moins un argument principal
  ☐ etymology avec racine et notes
  ☐ au moins 3 variations de philosophes différents
  ☐ au moins 5 figures clés
 
  RELATIONS
  ☐ relatedConcepts avec types appropriés
  ☐ relatedMovements avec rôles corrects
 
  PÉDAGOGIE
  ☐ au moins 5 exemples concrets
  ☐ au moins 5 sources avec citations
  ☐ au moins 10 flashcards de types variés
  ☐ tags pertinents pour la recherche
 
  QUALITÉ
  ☐ Pas d'abréviations (sauf courantes)
  ☐ Pas de markdown dans les strings (pas de *, ##, etc.)
  ☐ Texte en français clair et correct
  ☐ Citations exactes (vérifier les sources)
  ☐ Orthographe et grammaire vérifiées
 */
