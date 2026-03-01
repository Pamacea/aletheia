/**
 * Mal - Concept Data
 * Ce qui est nuisible, destructeur, moralement répréhensible, problème central de la théodicée et de l'éthique
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'mal',
  name: 'Mal',
  slug: 'mal',
  category: 'ethique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: "Le mal est ce qui est nuisible, destructeur, moralement répréhensible ou indésirable. La philosophie distingue plusieurs types : le mal moral (péché, faute, injustice) ; le mal physique (souffrance, douleur, maladie) ; le mal métaphysique (imperfection, finitude). La question du mal pose le problème de la théodicée : si Dieu est tout-puissant et tout bon, pourquoi le mal existe-t-il ? Pour Augustin, le mal est privation du bien, pas une substance positive. Pour Leibniz, nous vivons dans le meilleur des mondes possibles. Pour Arendt, le mal radical est la banalité : des gens ordinaires commettent des atrocités par absence de pensée. Pour Nietzsche, le concept de mal est invention des faibles pour limiter les forts.",
  shortDefinition: "Ce qui est nuisible, moralement répréhensible ou destructeur",

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'malum',
    greek: 'kakon (κακόν)',
    root: 'mel- (noir, sombre) : racine indo-européenne',
    notes: 'Le latin malum désigne le mal moral et physique. Le grec kakon s\'oppose à agathon (bien)'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    thesis: 'Le mal est problème central pour la morale et la philosophie religieuse',
    arguments: [
      {
        title: 'Argument de la privation (Augustin)',
        content: 'Le mal n\'est pas une substance positive mais absence de bien, comme l\"obscurité est absence de lumière. Dieu a tout créé bon, le mal est corruption du bien par les créatures libres.'
      },
      {
        title: 'Argument du libre arbitre',
        content: 'Le mal est le prix de la liberté. Pour qu\'il y ait de vraies créatures libres, elles doivent pouvoir choisir le mal. Un monde avec liberté et mal est meilleur qu\'un monde sans liberté ni mal.'
      },
      {
        title: 'Argument de l\'épreuve (Job)',
        content: "Le mal est épreuve qui permet le développement moral. Sans souffrance, pas de courage, de patience, de compassion. Le mal a une fonction pédagogique."
      }
    ],
    counterArguments: [
      {
        title: 'Critique du problème du mal',
        content: 'Si Dieu est tout-puissant et tout bon, pourquoi le mal existe-t-il ? Soit Dieu n\'est pas tout-puissant (ne peut pas empêcher le mal), soit pas tout bon (ne veut pas empêcher le mal), soit pas existant.'
      },
      {
        title: 'Critique de la banalité du mal (Arendt)',
        content: 'Le mal n\'est pas toujours monstrueux ou démoniaque. Il peut être banal : des gens ordinaires commettent des atrocités par absence de pensée, en suivant les ordres.'
      },
      {
        title: 'Critique nietzschéenne',
        content: 'La distinction bien/mal est invention des faibles (ressentiment). Ce qu\'ils appellent " mal " est la vitalité des forts. " Au-delà du bien et du mal ".'
      }
    ]
  },

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: "Platon : le mal comme ignorance. Augustin : le mal comme privation. Leibniz : le meilleur des mondes possibles. Kant : le mal radical comme propension au mal. Arendt : la banalité du mal.",
    problems: [
      { problem: 'Problème de la théodicée', description: 'Comment concilier l\'existence du mal avec l\'existence d\'un Dieu bon et tout-puissant ?' },
      { problem: 'Problème de l\'origine du mal', description: 'Le mal vient-il de la liberté humaine, de la nature, ou de Dieu ?' }
    ],
    debates: [
      {
        issue: 'Qu\'est-ce que le mal ?',
        positions: [
          'Augustin : le mal est privation du bien',
          'Kant : le mal est propension de la volonté',
          'Arendt : le mal peut être banal, absence de pensée',
          'Nietzsche : le mal est invention des faibles'
        ]
      }
    ]
  },

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    { concept: 'bien', relationship: 'Le mal s\'oppose au bien comme négation du bien' },
    { concept: 'souffrance', relationship: 'Le mal physique se manifeste comme souffrance, douleur' },
    { concept: 'liberte', relationship: 'La liberté humaine est source du mal moral' },
    { concept: 'peche', relationship: 'Le péché est mal moral dans la tradition religieuse' },
    { concept: 'responsabilite', relationship: 'Le mal moral engage la responsabilité' }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    { movement: 'Manichéisme', description: 'Dualisme bien/mal comme principes cosmiques', keyFigures: ['Mani'] },
    { movement: 'Augustinisme', description: 'Le mal comme privation du bien', keyFigures: ['Saint Augustin'] },
    { movement: 'Leibnizianisme', description: 'Théodicée et meilleur des mondes', keyFigures: ['Leibniz'] },
    { movement: 'Kantisme', description: 'Le mal radical', keyFigures: ['Kant'] },
    { movement: 'Nietzschéisme', description: 'Critique de la morale bien/mal', keyFigures: ['Nietzsche'] }
  ],

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Mal comme privation (Augustin)',
      description: 'Pour Augustin, le mal n\'est pas une substance créée par Dieu mais absence ou privation du bien. Comme la cécité est absence de vue, le mal est absence de bien. Cette solution protège la bonté de Dieu : il n\'a pas créé le mal, le mal est corruption du bien par les créatures libres.'
    },
    {
      title: 'Mal radical (Kant)',
      description: 'Pour Kant, le mal radical est une propension innée de la volonté humaine à subordonner la loi morale aux inclinations sensibles. Ce n\'est pas une nature bestiale mais fragilité de la volonté humaine. Le mal est "équivoque" : il peut aussi conduire au bien par la lutte morale.'
    },
    {
      title: "Banalité du mal (Arendt)",
      description: 'À propos du procès Eichmann, Arendt montre que le mal n\'est pas toujours diabolique ou monstrueux. Il peut être banal : des gens ordinaires commettent des atrocités par absence de pensée critique, en suivant les ordres. Le mal peut être commis par n\'importe qui.'
    },
    {
      title: 'Mal comme ressentiment (Nietzsche)',
      description: 'Pour Nietzsche, la distinction bien/mal est invention des faibles pour limiter les forts. Ce qu\'ils appellent "mal" est la vitalité, la créativité des forts. La morale esclave renverse les valeurs : ce qui était bon (puissance, vitalité) devient "mal".'
    },
    {
      title: 'Meilleur des mondes (Leibniz)',
      description: 'Pour Leibniz, notre monde est le meilleur des mondes possibles. Dieu a choisi le monde qui réalise le maximum de bien avec le minimum de mal. Le mal est condition du bien : sans contraintes, pas de courage ; sans finitude, pas d\'effort. Voltaire critique cette thèse dans Candide.'
    },
    {
      title: 'Mal moral vs Mal physique',
      description: 'Le mal moral est la faute, le péché, l\'injustice (vol, meurtre, mensonge). Le mal physique est la souffrance indépendante de la volonté (maladie, tremblement de terre). Le problème de la théodicée concerne surtout le mal physique : pourquoi Dieu permet-il la souffrance des innocents ?'
    },
    {
      title: "Mal métaphysique",
      description: 'Le mal métaphysique est l\'imperfection, la finitude de toute créature. Être limité, mortel, imparfait est un "mal" par rapport à la perfection de Dieu. Pour certains, la finitude elle-même est mal : être limité est moins parfait qu\'être infini.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Saint Augustin', period: '354-430', contribution: 'Théorie du mal comme privation du bien' },
    { name: 'Gottfried Wilhelm Leibniz', period: '1646-1716', contribution: 'Théodicée : le meilleur des mondes possibles' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: "Concept du mal radical comme propension innée" },
    { name: 'Hannah Arendt', period: '1906-1975', contribution: "La banalité du mal : le mal peut être ordinaire" },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'Critique de la distinction bien/mal comme ressentiment' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le problème de Job : Job est juste, mais Dieu permet qu\'il perde tout pour tester sa foi. Ce problème pose la question : pourquoi le mal frappe-t-il les innocents ?',
    'L\'Holocauste : Comment un mal aussi extrême a-t-il été possible ? Arendt analyse le cas Eichmann : pas un monstre, un fonctionnaire ordinaire qui a commis le mal en suivant les ordres. La banalité du mal.',
    'Candide de Voltaire : Critique de la thèse de Leibniz "tout est pour le mieux dans le meilleur des mondes possibles". Les catastrophes du récit (tremblement de terre, guerre, inquisition) montrent l\'absurdité de cette thèse optimiste.',
    'L\'expérience de Milgram : Des gens ordinaires administrent des chocs électriques à une personne parce qu\'une autorité le demande. Montre que le mal peut être commis par n\'importe qui en situation d\'autorité.',
    'Le mythe de la chute : Adam et Ève désobéissent à Dieu, introduisant le mal dans le monde. Le mal vient de la liberté humaine, pas de Dieu. Mais pourquoi Dieu a-t-il créé une liberté capable de produire le mal ?'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Confessions',
      author: 'Saint Augustin',
      year: 397,
      type: 'BOOK' as const,
      reference: 'Théorie du mal comme privation',
      quotes: [
        'Je ne croirais pas à l\'Évangile si l\'autorité de l\'Église ne me poussait.',
        'Le mal n\'est pas une substance.',
        'Le mal est privation du bien.',
        'Tout ce qui est, est bon.',
        'Le mal vient de la liberté de la créature.'
      ]
    },
    {
      title: "Essais de théodicée",
      author: 'Gottfried Wilhelm Leibniz',
      year: 1710,
      type: 'BOOK' as const,
      reference: 'Défense de la thèse du meilleur des mondes possibles',
      quotes: [
        'Tout est pour le mieux dans le meilleur des mondes possibles.',
        'Dieu a choisi le monde le plus parfait.',
        'Le mal est condition du plus grand bien.',
        'L\'univers est une harmonie préétablie.'
      ]
    },
    {
      title: 'La religion dans les limites de la simple raison',
      author: 'Immanuel Kant',
      year: 1793,
      type: 'BOOK' as const,
      reference: 'Théorie du mal radical',
      quotes: [
        'Le mal radical est une propension au mal.',
        'Le mal est dans la volonté, pas dans la sensibilité.',
        'L\'homme est par nature bon mais incliné au mal.',
        'Le mal est équivoque, pas diabolique.'
      ]
    },
    {
      title: 'Eichmann à Jérusalem',
      author: 'Hannah Arendt',
      year: 1963,
      type: 'BOOK' as const,
      reference: 'Analyse de la banalité du mal',
      quotes: [
        'La banalité du mal.',
        'Le mal peut être commis par des gens ordinaires.',
        'Eichmann n\'était pas un monstre, il ne pensait pas.',
        'Le mal est absence de pensée.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: "Comment Augustin résout-il le problème du mal ?",
      back: 'Augustin soutient que le mal n\'est pas une substance créée par Dieu mais privation du bien. Comme la cécité est absence de vue, le mal est absence de bien. Dieu a tout créé bon, le mal est corruption du bien par les créatures libres. Cette solution protège la bonté de Dieu : il n\'a pas créé le mal.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le "mal radical" chez Kant ?',
      back: 'Pour Kant, le mal radical est une propension innée de la volonté humaine à subordonner la loi morale aux inclinations sensibles. Ce n\'est pas une nature bestiale mais fragilité de la volonté humaine. Le mal est en chacun de nous, pas seulement chez les "méchants". Il est "radical" car il est à la racine de la volonté humaine.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la "banalité du mal" chez Arendt ?',
      back: 'Arendt montre que le mal n\'est pas toujours diabolique ou monstrueux. Il peut être banal : des gens ordinaires commettent des atrocités par absence de pensée critique, en suivant les ordres. Le cas Eichmann : pas un monstre, un fonctionnaire ordinaire qui a commis le mal sans réfléchir. N\'importe qui peut commettre le mal.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: "Quelle citation de Leibniz résume sa théodicée ?",
      back: "Tout est pour le mieux dans le meilleur des mondes possibles (Essais de théodicée, 1710)",
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Augustin, le mal est {{privation}} du bien. Pour Kant, le mal est {{radical}}.',
      back: 'privation | radical',
      difficulty: 1
    }
  ],

  // ===== TAGS =====
  tags: ['mal', 'bien', 'théodicée', 'augustin', 'leibniz', 'kant', 'arendt', 'souffrance', 'péché', 'liberté', 'responsabilité']
};
