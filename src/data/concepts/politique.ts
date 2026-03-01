/**
 * Politique - Concept Data
 * Art de gouverner la cité, organisation du pouvoir collectif
 */

export const concept = {
  id: 'politique',
  name: 'Politique',
  slug: 'politique',
  category: 'politique',
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: 'La politique est l\'art de gouverner la cité, l\'organisation du pouvoir collectif et la prise de décision concernant la communauté. La philosophie politique distingue plusieurs approches : le réalisme (Machiavel, la politique comme conquête et conservation du pouvoir) ; l\'idéalisme (Platon, la politique comme recherche du bien commun) ; le libéralisme (Locke, protection des droits individuels) ; le marxisme (lutte des classes et émancipation). Pour Aristote, l\'homme est un "animal politique".',
  shortDefinition: "Art de gouverner la cité et organisation du pouvoir collectif",

  etymology: {
    latin: "politicus : de polis (cité)",
    greek: 'politikos (πολιτικός)',
    root: 'polis : cité-état',
    notes: 'La politique est ce qui concerne la cité, la vie commune'
  },

  reasoning: {
    thesis: 'La politique est nécessaire à la vie humaine et repose sur la recherche du bien commun ou la gestion du conflit',
    arguments: [
      {
        title: 'Argument de l\'animal politique (Aristote)',
        content: 'L\'homme est par nature un animal politique. Il ne peut vivre seul, il a besoin de la cité pour s\'épanouir. La cité est fin naturelle, pas convention.'
      },
      {
        title: 'Argument du contrat social (Rousseau)',
        content: 'L\'état de nature est insécurité. Les hommes s\'associent par contrat pour se protéger. En obéissant à la volonté générale, ils restent libres car ils obéissent à la loi qu\'ils se sont prescrite.'
      },
      {
        title: 'Argument de la violence (Weber)',
        content: 'L\'État a le monopole de la violence légitime. La politique est lutte pour le pouvoir. Le pouvoir est moyen légitime de contraindre.'
      }
    ],
    counterArguments: [
      {
        title: 'Critique anarchiste',
        content: 'La politique est domination. L\'État est oppression. Il faut abolir la politique pour réaliser la liberté véritable.'
      },
      {
        title: 'Critique libérale',
        content: 'La politique doit être limitée. L\'État est danger pour les libertés. Il faut minimiser la sphère politique.'
      },
      {
        title: 'Critique marxiste',
        content: 'La politique est superstructure. Les vrais rapports sont économiques. La politique masque la lutte des classes.'
      }
    ]
  },

  philosophicalAnalysis: {
    history: 'Antiquité : cité grecque, vertu politique. Moyen Âge : chrétienté et pouvoir temporel. Moderne : État-nation, souveraineté, droits de l\'homme. Contemporain : démocratie, État de droit, justice globale.',
    problems: [
      { problem: 'Problème de la légitimité', description: 'Qu\'est-ce qui rend le pouvoir légitime ? Force, consentement, loi divine ?' },
      { problem: 'Problème de la justice', description: 'Comment distribuer les biens et les pouvoirs ? Égalité ou mérite ?' },
      { problem: 'Problème de la liberté', description: 'Comment concilier liberté individuelle et contrainte politique ?' }
    ],
    debates: [
      {
        issue: "Quel est le meilleur régime ?",
        positions: [
          'Platon : république philosophique (gouvernement des sages)',
          'Aristote : régime mixte (démocratie modérée)',
          'Rousseau : démocratie directe',
          'Madison : démocratie représentative'
        ]
      }
    ]
  },

  relatedConcepts: [
    { concept: 'pouvoir', relationship: 'La politique est exercice du pouvoir' },
    { concept: 'justice', relationship: 'La politique vise la justice dans la cité' },
    { concept: 'liberté', relationship: 'La politique doit protéger ou réaliser la liberté' },
    { concept: 'loi', relationship: 'La loi est expression de la volonté politique' },
    { concept: 'etat', relationship: 'La politique s\'exerce dans et par l\'État' },
    { concept: 'democratie', relationship: 'La démocratie est régime où le peuple gouverne' }
  ],

  relatedMovements: [
    { movement: 'Réalisme politique', description: 'Politique comme conquête du pouvoir', keyFigures: ['Machiavel', 'Hobbes'] },
    { movement: 'Libéralisme', description: 'Protection des droits individuels', keyFigures: ['Locke', 'Mill'] },
    { movement: 'Démocratisme', description: 'Souveraineté du peuple', keyFigures: ['Rousseau', 'Tocqueville'] },
    { movement: 'Marxisme', description: 'Lutte des classes', keyFigures: ['Marx', 'Lénine'] }
  ],

  variations: [
    {
      title: 'Politique comme bien commun (Aristote)',
      description: "Pour Aristote, la politique vise le bien commun, la vie bonne des citoyens. La cité existe pour permettre la vie heureuse. Le bon politique est celui qui vise la vertu commune."
    },
    {
      title: 'Politique comme pouvoir (Machiavel)',
      description: 'Pour Machiavel, la politique est conquête, conservation et exercice du pouvoir. Le prince doit savoir user de la force et de la ruse. La fin justifie les moyens : la morale ordinaire ne s\'applique pas à la politique.'
    },
    {
      title: 'Politique comme contrat (Rousseau)',
      description: 'Pour Rousseau, la politique est fondée sur le contrat social : chacun aliène tous ses droits à la communauté en recevant en échange la liberté civile. Obéir à la volonté générale, c\'est rester libre.'
    },
    {
      title: "Politique comme violence légitime (Weber)",
      description: 'Pour Weber, l\'État est celui qui a le monopole de la violence légitime. La politique est lutte pour le pouvoir, lutte pour influencer ou partager le pouvoir.'
    },
    {
      title: "Politique comme espace de liberté (Arendt)",
      description: 'Pour Arendt, la politique est espace d\'apparition", où les hommes agissent et parlent ensemble. La politique n\'est pas moyen (économie) ni fin (société) mais fin en soi : espace de liberté.'
    }
  ],

  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'La cité juste et gouvernement des philosophes' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'L\'homme comme animal politique et analyse des régimes' },
    { name: 'Nicolas Machiavel', period: '1469-1527', contribution: 'La politique comme art du pouvoir' },
    { name: 'Jean-Jacques Rousseau', period: '1712-1778', contribution: 'Le contrat social et volonté générale' },
    { name: 'Karl Marx', period: '1818-1883', contribution: 'La politique comme lutte des classes' },
    { name: 'Hannah Arendt', period: '1906-1975', contribution: 'La politique comme espace de liberté et d\'action' }
  ],

  examples: [
    'Le Prince de Machiavel : Comment conserver le pouvoir ? Le prince doit être à la fois lion (force) et renard (ruse). La morale ordinaire ne s\'applique pas : il faut savoir faire le mal quand nécessaire.',
    'Le contrat social de Rousseau : Comment être libre en obéissant ? En obéissant à la loi qu\'on s\'est prescrite à soi-même. La volonté générale exprime l\'intérêt commun.',
    'Le totalitarisme (Arendt) : Quand la politique devient totalitaire, l\'espace de liberté disparaît. La terreur et l\'idéologie détruisent la politique véritable.',
    'La désobéissance civile (Thoreau, King) : Quand la loi est injuste, la désobéissance peut être devoir politique. Mais quand désobéir ?'
  ],

  sources: [
    {
      title: 'La République',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'La cité juste',
      quotes: ['Le philosophe doit roi.', 'La justice dans la cité comme justice dans l\'âme.', 'Les gouvernants doivent connaître le Bien.']
    },
    {
      title: 'Politique',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'L\'homme animal politique',
      quotes: ['L\'homme est animal politique.', 'La cité est fin naturelle.', 'Le meilleur régime est le régime mixte.']
    },
    {
      title: 'Le Prince',
      author: 'Nicolas Machiavel',
      year: 153,
      type: 'BOOK' as const,
      reference: 'Art de gouverner',
      quotes: ['La fin justifie les moyens.', 'Il faut être renard et lion.', 'Mieux vaut être craint qu\'aimé.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Aristote définit-il l\'homme ?',
      back: 'Pour Aristote, l\'homme est par nature un "animal politique" (zoon politikon). Il ne peut réaliser son humanité que dans la cité (polis), en vivant avec ses semblables. La cité est fin naturelle, pas convention.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le contrat social chez Rousseau ?',
      back: 'Pour Rousseau, le contrat social est fondement de la légitimité politique. Chacun aliène tous ses droits à la communauté en recevant en échange la liberté civile. En obéissant à la volonté générale (intérêt commun, pas somme des intérêts particuliers), le citoyen reste libre car il obéit à la loi qu\'il s\'est prescrite à lui-même.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Machiavel résume sa conception de la politique ?',
      back: 'Il faut être renard et lion (Le Prince, 1532)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Aristote, l\'homme est un {{animal politique}}. Pour Weber, l\'État a le monopole de la {{violence légitime}}.',
      back: 'animal politique | violence légitime',
      difficulty: 1
    }
  ],

  tags: ['politique', 'pouvoir', 'état', 'démocratie', 'justice', 'liberté', 'contrat social', 'citoyenneté', 'souveraineté', 'loi']
};
