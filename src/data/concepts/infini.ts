/*
  Infini - Concept Data
  Ce qui n'a pas de limite, ni fin, ni borne
*/
export const concept = {
  id: 'infini',
  name: 'Infini',
  slug: 'infini',
  category: 'metaphysique',

  difficulty: 5,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: 'L\'infini est ce qui n\'a pas de limite, ni fin, ni borne. En mathématiques, ensemble infini. En métaphysique, attribut de Dieu comme être sans limite. En cosmologie, question de l\'univers infini.',
  shortDefinition: 'Ce qui n\'a pas de limite ni fin : mathématique, métaphysique, cosmologique',

  etymology: {
    latin: 'infinitus',
    greek: 'apeiron (ἄπειρον)',
    root: 'in- (négation) + finitus (fini, limité)',
    notes: 'Apeiron signifie illimité, indéterminé. Chez Anaximandre, l\'apeiron est le principe originel de toutes choses'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument de l\'idée d\'infini (Descartes)',
        explanation: 'Nous avons l\'idée d\'un être infini. Or, le fini ne peut produire l\'infini. Donc cette idée vient d\'un être réellement infini (Dieu).',
        premises: [
          'J\'ai en moi l\'idée d\'un être infini',
          'Je suis fini, limité',
          'Le fini ne peut produire l\'idée d\'infini',
          'Donc cette idée vient d\'un être réellement infini'
        ],
        conclusion: 'Dieu existe comme être infini'
      },
      {
        argument: 'Argument de l\'infini actuel (Cantor)',
        explanation: 'Il existe des ensembles infinis actuels, non pas seulement potentiels. L\'ensemble des nombres entiers est infini. Mais il existe des infinis plus grands que d\'autres.',
        premises: [
          'Un ensemble est infini s\'il peut être mis en correspondance avec une de ses parties',
          'L\'ensemble des entiers est infini',
          'L\'ensemble des réels est aussi infini mais plus grand',
          'Donc il y a une hiérarchie d\'infinis'
        ],
        conclusion: 'L\'infini mathématique actuel existe et est hiérarchisé'
      },
      {
        argument: 'Argument hégélien du fini comme moment de l\'infini',
        explanation: 'L\'infini vrai n\'est pas l\'infini qui s\'oppose au fini (mauvais infini), mais l\'infini qui contient le fini comme moment dépassé.',
        premises: [
          'Le fini est ce qui a des limites',
          'L\'infini est ce qui n\'a pas de limites',
          'L\'infini qui s\'oppose au fini est fini (il a une limite : le fini)',
          'Le vrai infini contient le fini comme moment dépassé'
        ],
        conclusion: 'L\'infini est le tout qui contient le fini comme moment de son développement'
      }
    ],
    objections: [
      {
        objection: 'Objection aristotélicienne',
        content: 'L\'infini actuel est impossible. Seul l\'infini potentiel existe (une grandeur qui peut toujours croître mais n\'est jamais infinie en acte).',
        response: 'Cantor répond que l\'infini actuel existe en mathématiques. Les paradoxes de l\'infini se résolvent par une théorie rigoureuse des ensembles infinis.'
      },
      {
        objection: 'Objection kantienne',
        content: 'L\'infini est une idée de la raison, pas un objet connaissable. Quand nous pensons le monde comme infini, nous dépassons les limites de l\'expérience possible.',
        response: 'C\'est vrai pour l\'infini cosmologique (le monde est-il infini ?). Mais l\'infini mathématique est un objet de connaissance légitime, pas une simple idée.'
      },
      {
        objection: 'Objection empiriste',
        content: 'Nous n\'expérimentons jamais l\'infini dans la nature. Tout ce que nous rencontrons est fini. Comment alors avons-nous l\'idée d\'infini ?',
        response: 'Descartes répond que précisément, puisque nous ne pouvons abstraire l\'infini du fini, l\'idée d\'infini doit venir d\'ailleurs (innéisme, Dieu).'
      }
    ],
    distinctions: [
      {
        distinction: 'Infini potentiel vs Infini actuel',
        explanation: 'L\'infini potentiel peut toujours croître mais n\'est jamais infini en acte. L\'infini actuel existe réellement comme ensemble infini. Aristote n\'acceptait que l\'infini potentiel. Cantor montre que l\'infini actuel existe en mathématiques.'
      },
      {
        distinction: "Infini mathématique vs Infini métaphysique",
        explanation: 'L\'infini mathématique concerne les ensembles infinis (nombres, espaces). L\'infini métaphysique concerne Dieu comme être infini, sans limitation.'
      },
      {
        distinction: "Infini vs Indéfini",
        explanation: 'L\'infini est sans limite. L\'indéfini est ce qui n\'a pas de limite déterminée mais pourrait en avoir une. L\'infini est absolu, l\'indéfini est relatif.'
      },
      {
        distinction: 'Mauvais infini vs Vrai infini (Hegel)',
        explanation: 'Le mauvais infini est l\'infini qui s\'oppose au fini (infiniment grand par opposition au fini). Le vrai infini contient le fini comme moment, il n\'est pas extérieur au fini.'
      }
    ]
  },

  relatedConcepts: [
    { concept: 'fini',
      relationship: 'L\'infini est sans limite, le fini est limité.', bidirectional: true },
    { concept: 'dieu',
      relationship: "Dieu est souvent conçu comme être infini.", bidirectional: true },
    { concept: 'etre',
      relationship: 'L\'être peut être infini (Dieu) ou fini (créatures).', bidirectional: true },
    { concept: 'temps',
      relationship: 'Le temps est-il infini ou a-t-il un début et une fin ?', bidirectional: true },
    { concept: 'univers',
      relationship: 'L\'univers est-il fini ou infini ?', bidirectional: true }
  ],

  relatedMovements: [
    { name: 'Cartésianisme', description: 'L\'idée d\'infini comme preuve de l\'existence de Dieu.', keyFigures: ['Descartes'] },
    { name: 'Spinozisme', description: 'Dieu comme substance infinie.', role: 'CONCEPT_CENTRAL', keyFigures: ['Spinoza'] },
    { name: 'Hégélianisme', description: 'L\'infini comme Vrai contenant le fini.', keyFigures: ['Hegel'] },
    { name: 'Mathématiques', description: 'Théorie des ensembles infinis.', role: 'EXPRESSES', keyFigures: ['Cantor', 'Hilbert'] }
  ],

  philosophicalAnalysis: {
    history: `Les Grecs se méfiaient de l'infini. Anaximandre appelle le principe originel apeiron (illimité). Aristote rejette l'infini actuel : seul l'infini potentiel existe (une grandeur qui peut toujours croître).

Au Moyen Âge, Dieu est conçu comme être infini : omnipotent, omniscient, éternel. Descartes (1641) fait de l'idée d'infini une preuve de l'existence de Dieu : je ne peux pas former cette idée, elle vient de Dieu.

Spinoza (1677) définit Dieu comme substance infinie, comprenant tous les attributs infinis. L'infini n'est pas seulement quantitatif mais qualitatif.

Leibniz (1714) distingue infini absolu (Dieu) et infini relatif (monades, univers).

Kant (1781) critique les preuves de l'existence de Dieu utilisant l'infini. L'infini cosmologique (monde infini) est une idée de la raison qui dépasse l'expérience.

Hegel (1812) distingue mauvais infini (opposé au fini) et vrai infini (contenant le fini comme moment). Le Vrai est l'infini.

Cantor (1880) fonde la théorie des ensembles infinis. Il montre qu'il existe plusieurs infinis hiérarchisés : certains infinis sont plus grands que d'autres.

Aujourd'hui', la cosmologie se demande si l'univers est fini ou infini. Les observations montrent un univers en expansion mais fini dans le temps (Big Bang).`,
    problems: [
      { problem: 'L\'infini actuel existe-t-il ?', description: 'Aristote rejetait l\'infini actuel. Cantor montre qu\'il existe en mathématiques. Mais existe-t-il physiquement ?' },
      { problem: 'L\'univers est-il fini ou infini ?', description: 'Le Big Bang suggère un univers fini dans le temps. Mais est-il fini spatialement ? La question reste ouverte.' },
      { problem: 'Peut-on penser l\'infini ?', description: 'Nous sommes finis. Comment penser l\'infini ? L\'idée d\'infini est-elle une simple négation du fini ?' }
    ],
    debates: [
      {
        issue: 'L\'infini est-il réel ou seulement idéal ?',
        positions: [
          { philosopher: 'Aristote', position: 'L\'infini n\'existe qu\'en puissance, jamais en acte. Seul l\'infini potentiel est réel.' },
          { philosopher: 'Descartes', position: 'L\'infini est réel : Dieu existe comme être infini. L\'idée d\'infini en moi le prouve.' },
          { philosopher: 'Cantor', position: 'L\'infini actuel existe en mathématiques. Les ensembles infinis sont des objets réels de pensée.' },
          { philosopher: 'Kant', position: 'L\'infini est une idée de la raison, pas un objet d\'expérience. Nous ne pouvons connaître l\'infini que de manière régulative.' }
        ]
      }
    ]
  },

  variations: [
    {
      title: 'Infini potentiel (Aristote)',
      description: 'L\'infini potentiel peut toujours croître mais n\'est jamais infini en acte. Exemple : l\'ensemble des entiers qu\'on peut toujours agrandir.',
      philosophicalContext: 'Aristote rejette l\'infini actuel car il mène à des paradoxes. Seul l\'infini potentiel est intelligible.'
    },
    {
      title: 'Infini actuel (Cantor)',
      description: 'L\'infini actuel existe réellement comme ensemble infini. L\'ensemble des entiers est infini en acte.',
      philosophicalContext: 'Cette révolution mathématique change la conception de l\'infini, qui devient objet d\'étude rigoureux.'
    },
    {
      title: 'Infini métaphysique (Descartes)',
      description: 'Dieu est l\'être infini : omnipotent, omniscient, éternel. L\'idée d\'infini en moi est preuve de l\'existence de Dieu car je ne peux pas la former moi-même.',
      philosophicalContext: 'Cette preuve a priori de l\'existence de Dieu influence toute la philosophie moderne.'
    },
    {
      title: 'Substance infinie (Spinoza)',
      description: 'Dieu est substance infinie comprenant tous les attributs infinis. Tout est en Dieu, Dieu est tout. L\'infini n\'est pas seulement quantitatif mais qualitatif.',
      philosophicalContext: 'Le spinozisme conçoit l\'infini comme unité de tout ce qui est.'
    },
    {
      title: 'Vrai infini (Hegel)',
      description: 'Le vrai infini contient le fini comme moment, il ne lui est pas opposé. Le mauvais infini est l\'infiniment grand par opposition au fini. Le vrai infini est le tout qui se développe.',
      philosophicalContext: 'Hegel dépasse l\'opposition fini/infini en concevant l\'infini comme processus contenant le fini.'
    }
  ],

  keyFigures: [
    { name: 'René Descartes', period: '1596-1650', contribution: 'Preuve de l\'existence de Dieu par l\'idée d\'infini' },
    { name: 'Baruch Spinoza', period: '1632-1677', contribution: 'Dieu comme substance infinie' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'Distinction vrai infini / mauvais infini' },
    { name: 'Georg Cantor', period: '1845-1918', contribution: 'Théorie des ensembles infinis, hiérarchie des infinis' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Critique de l\'infini actuel, défense de l\'infini potentiel' }
  ],

  examples: [
    'L\'hôtel de Hilbert : Un hôtel infini complet (toutes les chambres occupées) peut encore accueillir un client infini. Il suffit de déplacer chaque client de la chambre n à la chambre 2n. Les chambres impaires sont libres pour les nouveaux clients. Ce paradoxe illustre les propriétés contre-intuitives de l\'infini.',
    'L\'ensemble des entiers : L\'ensemble des nombres entiers (0, 1, 2, 3...) est infini. On peut toujours ajouter 1 pour obtenir un entier plus grand. Mais l\'ensemble est infini en acte : il existe comme totalité.',
    'L\'ensemble des réels est plus grand que celui des entiers : Cantor montre par l\'argument de la diagonale qu\'il est impossible de mettre en correspondance les réels et les entiers. Il y a plusieurs infinis, certains plus grands que d\'autres.',
    'Le paradoxe de Zénon : Achille ne peut jamais rattraper la tortue car il doit d\'abord parcourir la moitié de la distance, puis la moitié du reste, et ainsi à l\'infini. Ce paradoxe interroge la divisibilité infinie de l\'espace.'
  ],

  sources: [
    {
      title: 'Méditations métaphysiques',
      author: 'René Descartes',
      year: 1641,
      type: 'BOOK' as const,
      reference: 'Preuve de Dieu par l\'idée d\'infini',
      quotes: [
        'Je trouve en moi l\'idée d\'un être infini.',
        'Je ne pourrais pas avoir cette idée si un être infini ne l\'avait mise en moi.',
        'L\'idée d\'infini est claire et distincte.',
        'Dieu est l\'être infini.',
        'L\'infini ne peut être produit par le fini.'
      ]
    },
    {
      title: 'Éthique',
      author: 'Baruch Spinoza',
      year: 1677,
      type: 'BOOK' as const,
      reference: 'Dieu comme substance infinie',
      quotes: [
        'Dieu est l\'être absolument infini.',
        'La substance infinie comprend tous les attributs infinis.',
        'Tout ce qui est, est en Dieu.',
        'Dieu est cause de soi.',
        'L\'infini n\'est pas seulement quantitatif mais qualitatif.'
      ]
    },
    {
      title: 'Science de la logique',
      author: 'Georg Wilhelm Friedrich Hegel',
      year: 181,
      type: 'BOOK' as const,
      reference: 'Vrai infini et mauvais infini',
      quotes: [
        'Le fini est moment de l\'infini.',
        'Le mauvais infini s\'oppose au fini.',
        'Le vrai infini contient le fini.',
        'L\'infini est le Vrai.',
        'Le fini se nie lui-même dans l\'infini.'
      ]
    },
    {
      title: 'Physique',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Critique de l\'infini actuel',
      quotes: [
        'L\'infini n\'existe qu\'en puissance.',
        'Il n\'y a pas d\'infini en acte.',
        'La grandeur peut toujours croître mais n\'est jamais infinie.',
        'Le temps est infini en puissance mais non en acte.'
      ]
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle est la différence entre infini potentiel et infini actuel ?',
      back: 'L\'infini potentiel peut toujours croître mais n\'est jamais infini en acte. L\'infini actuel existe réellement comme ensemble infini.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Descartes utilise-t-il l\'idée d\'infini ?',
      back: 'Descartes affirme avoir en lui l\'idée d\'un être infini. Or, étant fini, il ne peut pas produire cette idée. Donc elle vient d\'un être réellement infini (Dieu).',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le mauvais infini chez Hegel ?',
      back: 'Le mauvais infini est l\'infini qui s\'oppose au fini. Le vrai infini contient le fini comme moment.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Descartes résume la preuve par l\'infini ?',
      back: 'Je trouve en moi l\'idée d\'un être infini.',
      difficulty: 3
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Aristote, seul l\'infini {{potentiel}} existe, pas l\'infini {{actuel}}.',
      back: 'potentiel | actuel',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'L\'infini existe-t-il réellement ou est-ce une idée de l\'esprit ?',
      back: 'Aristote : seul l\'infini potentiel existe (jamais en acte). Descartes : l\'infini est réel (Dieu). Cantor : l\'infini existe en mathématiques.',
      difficulty: 5
    }
  ],

  tags: ['infini', 'fini', 'dieu', 'descartes', 'spinoza', 'hegel', 'cantor', 'aristote', 'métaphysique', 'mathématiques']
};
