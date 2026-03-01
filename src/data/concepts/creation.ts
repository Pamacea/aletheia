/*
  Création - Concept Data
  Acte de faire exister quelque chose qui n'existait pas
*/
export const concept = {
  id: 'creation',
  name: 'Création',
  slug: 'creation',
  category: 'metaphysique',

  difficulty: 4,
  importance: 4,
  status: 'COMPLETE' as const,

  definition: 'La création est acte de faire exister quelque chose qui n\'existait pas. La philosophie distingue plusieurs sens : création divine (ex nihilo, à partir de rien) ; création humaine (art, technique, à partir de quelque chose) ; création continuée (Dieu maintient l\'être). Pour les Grecs, rien ne naît de rien (ex nihilo nihil fit) : la création n\'est pas transformation de matière préexistante. Pour le christianisme, Dieu crée ex nihilo par parole. Pour Bergson, la création est continuée : la vie est élan créateur, invention perpétuelle. Pour Sartre, l\'homme se crée : l\'existence précède l\'essence. La création artistique pose problème : l\'œuvre d\'art est-elle création ou imitation ? La création technique transforme le monde mais peut le détruire.',
  shortDefinition: 'Acte de faire exister quelque chose qui n\'existait pas',

  etymology: {
    latin: 'creatio',
    french: 'création',
    root: 'creare : faire croître, produire',
    notes: 'La création désigne à la fois production et œuvre produite'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument de la création divine',
        explanation: 'Dieu crée le monde ex nihilo, à partir de rien, par sa parole. Cette création est libre et gratuite.',
        premises: ['Le monde existe', 'Il n\'a pas toujours existé', 'Il ne peut provenir de lui-même', 'Donc il a été créé par un être nécessaire'],
        conclusion: 'Dieu crée le monde ex nihilo'
      },
      {
        argument: 'Argument bergsonien de l\'élan vital',
        explanation: 'La vie est création continuée. Chaque moment est invention, imprévisible, nouveau. La création n\'est pas exceptionnelle mais structurelle au devenir.',
        premises: ['La vie est changement', 'Ce changement n\'est pas déterminé mécaniquement', 'Chaque instant est invention', 'Donc la création est continuée, pas originelle'],
        conclusion: 'La vie est élan créateur, création perpétuelle'
      }
    ],
    objections: [
      {
        objection: 'Objection grecque',
        content: 'Rien ne naît de rien. La création ex nihilo est absurde. Tout est transformation de matière préexistante.',
        response: 'Les théistes répondent que Dieu n\'est pas soumis au principe rien ne naît de rien car il est infini. Pour Dieu, créer ex nihilo est possible.'
      }
    ],
    distinctions: [
      { distinction: 'Création ex nihilo vs Création ex materia', explanation: 'Ex nihilo : à partir de rien (divine). Ex materia : à partir de matière préexistante (humaine).' },
      { distinction: 'Création divine vs Création humaine', explanation: 'Divine : absolue, à partir de rien. Humaine : relative, à partir de quelque chose.' },
      { distinction: 'Création vs Production', explanation: 'Création : nouveauté radicale. Production : fabrication selon modèle technique.' }
    ]
  },

  relatedConcepts: [
    { concept: 'art', relationship: 'L\'art est création humaine par excellence.', bidirectional: true },
    { concept: 'dieu', relationship: 'Dieu est créateur du monde.', bidirectional: true },
    { concept: 'technique', relationship: 'La technique est création humaine de moyens.', bidirectional: true },
    { concept: 'invention', relationship: 'L\'invention est création de nouveau.', bidirectional: true },
    { concept: 'nature', relationship: 'La nature s\'oppose à la création comme éternelle vs creationnelle. Pour les théistes, nature est création divine. Pour Bergson, nature et vie sont création continuée.', bidirectional: true },
    { concept: 'temps', relationship: 'La création se pense dans le temps : ex nihilo (à l\'origine) vs continuée (dans le temps). La durée bergsonienne est création perpétuelle. La création trouble la succession temporelle par la nouveauté radicale.', bidirectional: true },
    { concept: 'etre', relationship: 'La création interroge l\'être : création divine vs créatures. L\'être créé a une essence distincte de son existence (Thomas d\'Aquin). L\'homme se crée : existence précède essence (Sartre).', bidirectional: true }
  ],

  relatedMovements: [
    { name: 'Christianisme', description: 'Dieu créateur ex nihilo.', role: 'CONCEPT_CENTRAL', keyFigures: ['Augustin', 'Thomas'] },
    { name: 'Bergsonisme', description: 'La vie comme création continuée.', role: 'EXPRESSES', keyFigures: ['Bergson'] }
  ],

  keyFigures: [
    { name: 'Henri Bergson', period: '1859-1941', contribution: 'La vie comme élan créateur' },
    { name: 'Saint Augustin', period: '354-430', contribution: 'Création ex nihilo' },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'L\'homme comme créateur de soi' }
  ],

  examples: [
    'La Genèse : Que la lumière soit - création divine par parole.',
    'L\'œuvre d\'art : création humaine de beauté.',
    'L\'invention technique : création de nouveaux outils.'
  ],

  sources: [
    {
      title: 'L\'Évolution créatrice',
      author: 'Henri Bergson',
      year: 1907,
      type: 'BOOK' as const,
      reference: 'La vie comme élan créateur',
      quotes: ['La vie est création continuée.', 'L\'élan vital est invention perpétuelle.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle différence entre création ex nihilo et ex materia ?',
      back: 'La création ex nihilo (à partir de rien) est création absolue : Dieu crée le monde sans matière préexistante. La création ex materia (à partir de matière) est transformation : l\'artiste transforme la matière, l\'artisan façonne le matériau. Seul Dieu peut créer ex nihilo. L\'humain crée toujours ex materia, à partir de quelque chose déjà là.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Bergson conçoit-il la création ?',
      back: 'Pour Bergson, la création n\'est pas acte originel unique mais processus continu. La vie est élan créateur, invention perpétuelle. Chaque instant est nouveauté radicale, imprévisible, non déterminée par le passé. La création est structurelle au devenir : l\'univers est en création continuée, pas achevé. Cette conception s\'oppose au mécanisme (tout déterminé) et au finalisme (tout vers une fin).',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Bergson définit la création ?',
      back: 'La vie est création continuée (L\'Évolution créatrice, 1907)',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'L\'homme est-il créateur ?',
      back: 'Oui, mais différemment de Dieu. L\'homme crée ex materia (à partir de matière), pas ex nihilo. L\'artiste crée des œuvres nouvelles, l\'inventeur crée des techniques nouvelles, l\'homme se crée soi-même (Sartre). Mais cette création est toujours relative : elle transforme ce qui existe. Seul Dieu peut créer absolu (ex nihilo). Pour Bergson, l\'homme participe à l\'élan créateur de la vie : il est création continuée en tant qu\'être vivant. La création humaine est participation à la création cosmique.',
      difficulty: 5
    }
  ],

  tags: ['création', 'art', 'dieu', 'bergson', 'technique', 'invention', 'ex nihilo', 'élan vital']
};
