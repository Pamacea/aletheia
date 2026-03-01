/*
  Fini - Concept Data
  Ce qui a des limites, un début et une fin
*/
export const concept = {
  id: 'fini',
  name: 'Fini',
  slug: 'fini',
  category: 'metaphysique',

  difficulty: 3,
  importance: 4,
  status: 'COMPLETE' as const,

  definition: 'Le fini est ce qui a des limites, un début et une fin, une borne. En philosophie, la finitude est centrale : l\'homme est un être fini, mortel, limité dans sa connaissance et ses capacités. Pour Heidegger, l\'être-pour-la-mort est la structure fondamentale de l\'existence : nous sommes des êtres-jetés, condamnés à mourir, et c\'est cette finitude qui donne son sens à notre vie. Pour Sartre, la finitude n\'est pas une limitation mais la condition de la liberté : nous sommes sans essence prédéfinie, nous devons nous créer dans un temps fini. Pour Kant, la finitude de la raison humaine est ce qui fonde la critique : nous ne pouvons connaître que les phénomènes, pas les noumènes. La religion cherche souvent à dépasser la finitude (promesse d\'immortalité, Dieu infini), mais la philosophie moderne affirme la finitude comme condition de l\'humanité.',
  shortDefinition: 'Ce qui a des limites, condition de l\'existence humaine',

  etymology: {
    latin: 'finis',
    greek: 'peras (πέρας)',
    root: 'fin- : limite, borne, terme',
    notes: 'Le fini se définit par ses limites spatiales, temporelles, ou conceptuelles'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument de l\'être-pour-la-mort (Heidegger)',
        explanation: 'L\'homme est un être-pour-la-mort : sa mort est sa possibilité la plus propre, la plus intransférable. C\'est cette finitude qui donne son sens à l\'existence. Vivre authentiquement, c\'est anticiper sa mort, comprendre sa vie comme totalité finie.',
        premises: [
          'La mort est la possibilité la plus propre de l\'être-là',
          'Elle est absolument non-transférable',
          'Personne ne peut mourir à ma place',
          'Anticiper ma mort me donne une compréhension totale de mon existence'
        ],
        conclusion: 'La finitude (être-pour-la-mort) est la structure fondamentale de l\'existence authentique'
      },
      {
        argument: 'Argument de la finitude comme condition de la liberté (Sartre)',
        explanation: 'La liberté n\'est pas illimitée mais située : nous sommes libres dans un monde fini, avec des contraintes. Ces contraintes ne sont pas obstacles à la liberté mais condition de son exercice.',
        premises: [
          'L\'homme n\'a pas de nature humaine prédéfinie',
          'Il est jeté dans une situation concrète (corps, histoire, monde)',
          'Cette situation est finie (limitée)',
          'La liberté s\'exerce dans et contre cette finitude'
        ],
        conclusion: 'La finitude n\'est pas négation de la liberté mais condition de son exercice authentique'
      },
      {
        argument: 'Argument kantien de la finitude de la raison',
        explanation: 'La raison humaine est finie : elle ne peut connaître que les phénomènes, pas les noumènes. Cette finitude n\'est pas défaut mais essence de la connaissance humaine. Tenter de dépasser cette finitude mène à des illusions (métaphysique dogmatique).',
        premises: [
          'Toute connaissance humaine est structurée par l\'espace et le temps',
          'L\'espace et le temps sont des formes a priori finies de notre sensibilité',
          'Nous ne pouvons connaître les choses qu\'à travers ces structures',
          'Donc nous ne pouvons connaître les choses en soi (noumènes)'
        ],
        conclusion: 'La finitude de la raison est ce qui fonde la possibilité d\'une connaissance valide, mais limitée au phénoménal'
      }
    ],
    objections: [
      {
        objection: 'Objection religieuse',
        content: 'La finitude n\'est qu\'une étape. L\'homme est créé pour l\'infini, son essence est dépasser sa finitude par la foi, l\'espérance, la promesse d\'immortalité.',
        response: 'Heidegger et Sartre répondent que vouloir dépasser la finitude, c\'être inauthentique. La finitude n\'est pas à dépasser mais à assumer.'
      },
      {
        objection: 'Objection prométhéenne',
        content: 'La finitude n\'est pas une fatalité. La technique, la science, la médecine permettent de dépasser nos limites naturelles. L\'homme est un être qui dépasse continûment sa finitude.',
        response: 'C\'est vrai, mais ce dépassement reste lui-même fini. Nous dépassons certaines limites mais en rencontrons d\'autres. La finitude est structurelle, pas accidentelle.'
      },
      {
        objection: 'Objection de l\'angoisse',
        content: 'Reconnaître notre finitude, c\'accepter l\'angoisse, le désespoir, l\'absurdité de la condition humaine. Pourquoi assumer cette souffrance ?',
        response: 'L\'angoisse n\'est pas à fuir mais à affronter. Elle est révélation de notre condition. L\'authenticité commence là où l\'on accepte sa finitude au lieu de la nier.'
      }
    ],
    distinctions: [
      {
        distinction: 'Fini vs Infini',
        explanation: 'Le fini a des limites, l\'infini n\'en a pas. Pour Hegel, le fini est un moment de l\'infini, qui se contient lui-même en se dépassant.'
      },
      {
        distinction: 'Fini vs Mortel',
        explanation: 'Le fini a des limites (espace, temps, connaissance). Le mortel est destiné à mourir. La mortalité est une forme de finitude, mais toute finitude n\'est pas mortelle.'
      },
      {
        distinction: 'Finitude ontologique vs Finitude empirique',
        explanation: 'La finitude ontologique est structurelle (la condition humaine comme être fini). La finitude empirique est contingente (mes limites actuelles : ignorance, faiblesse, etc.).'
      },
      {
        distinction: 'Authentique vs Inauthentique (Heidegger)',
        explanation: 'L\'authentique assume la finitude (être-pour-la-mort). L\'inauthentique fuit la finitude (se divertit, s\'étourdit pour oublier la mort).'
      }
    ]
  },

  relatedConcepts: [
    { concept: 'infini',
      relationship: 'Le fini a des limites, l\'infini n\'en a pas.', bidirectional: true },
    { concept: 'mort',
      relationship: 'La mort est la limite ultime du fini.', bidirectional: true },
    { concept: 'liberte',
      relationship: 'La liberté s\'exerce dans la finitude.', bidirectional: true },
    { concept: 'angoisse',
      relationship: 'L\'angoisse révèle notre finitude.', bidirectional: true },
    { concept: 'temps',
      relationship: 'Le temps fini de la vie humaine.', bidirectional: true }
  ],

  relatedMovements: [
    { name: 'Existentialisme', description: 'La finitude comme condition de l\'existence authentique.', role: 'CONCEPT_CENTRAL', keyFigures: ['Heidegger', 'Sartre', 'Camus'] },
    { name: 'Kantisme', description: 'La finitude de la raison humaine.', role: 'CONCEPT_CENTRAL', keyFigures: ['Kant'] }
  ],

  philosophicalAnalysis: {
    history: `Les Grecs ont conscience de la finitude humaine. Platon décrit l'homme comme être mortel, opposé aux dieux immortels. La philosophie est préparation à la mort (Phédon).

Au XVIIe siècle, Pascal célèbre la grandeur et la misère de l'homme : un roseau pensant mais faible, mortel, limité. La finitude humaine est à la fois notre faiblesse et notre grandeur.

Kant (1781) thématise la finitude de la raison : nous ne pouvons connaître que les phénomènes, pas les noumènes. Cette finitude n'est pas défaut mais condition de la connaissance valide.

Heidegger (1927) fait de l'être-pour-la-mort la structure fondamentale de l'être-là. La finitude n'est pas une limitation mais ce qui donne sens à l'existence. Vivre authentiquement, c'est anticiper sa mort.

Sartre (1943) analyse la liberté dans la finitude : nous sommes sans essence, jetés dans une situation, et nous devons nous créer dans un temps fini.

Aujourd'hui, le transhumanisme promet de dépasser la finitude (immortalité, augmentation humaine). Mais la question reste : que serions-nous sans notre finitude ?`,
    problems: [
      { problem: 'La finitude est-elle à dépasser ou à assumer ?', description: 'Doit-on chercher à dépasser nos limites (technique, médecine) ou les assumer comme condition de l\'humanité ?' },
      { problem: 'L\'authenticité présuppose-t-elle l\'acceptation de la finitude ?', description: 'Peut-on être authentique en niant sa mort ? Ou l\'authenticité commence-t-elle là où l\'on accepte sa finitude ?' }
    ],
    debates: [
      {
        issue: 'La finitude est-elle défaut ou essence ?',
        positions: [
          { philosopher: 'Platon', position: 'La finitude est défaut : l\'âme est emprisonnée dans le corps mortel. La philosophie est préparation à la mort, libération de la finitude.' },
          { philosopher: 'Heidegger', position: 'La finitude est essence : l\'être-là est fondamentalement être-pour-la-mort. Assumer sa finitude est condition de l\'authenticité.' },
          { philosopher: 'Sartre', position: 'La finitude est condition de la liberté : nous sommes situés, limités, et c\'est dans cette finitude que nous devons nous créer.' },
          { philosopher: 'Transhumanistes', position: 'La finitude n\'est ni essence ni défaut mais obstacle technique. La technique permettra de dépasser la mortalité.' }
        ]
      }
    ]
  },

  variations: [
    {
      title: 'Finitude ontologique (Heidegger)',
      description: 'L\'être-là est fondamentalement fini : être-jeté, être-pour-la-mort. Cette finitude n\'est pas une limitation mais la structure même de l\'existence. L\'authenticité est anticipation de sa mort.',
      philosophicalContext: 'Heidegger fonde toute son analytique existentiale sur la finitude : l\'être-là est l\'être dont il s\'agit d\'être, et cette question de l\'être est constituée par la mortalité.'
    },
    {
      title: 'Finitude de la raison (Kant)',
      description: 'La raison humaine est finie : elle ne peut connaître que les phénomènes, pas les noumènes. Cette finitude fonde la possibilité d\'une connaissance valide mais limitée. Tenter de la dépasser mène à des illusions.',
      philosophicalContext: 'La critique kantienne est une philosophie de la finitude : elle délimite le domaine de la connaissance valide pour éviter les excès du dogmatisme.'
    },
    {
      title: 'Finitude comme condition de la liberté (Sartre)',
      description: 'La liberté s\'exerce dans une situation finie. Nous sommes jetés (corps, histoire, monde) et c\'est dans et contre cette finitude que nous devons nous créer.',
      philosophicalContext: 'Pour Sartre, la finitude n\'est pas négation de la liberté mais condition de son exercice. Une liberté absolue serait abstraite, sans contenu.'
    },
    {
      title: 'Finitude comme misère et grandeur (Pascal)',
      description: 'L\'homme est fini : faible, mortel, ignorant. Mais il est roseau pensant : conscient de sa finitude. Cette conscience est sa grandeur. L\'homme dépasse l\'homme par la pensée.',
      philosophicalContext: 'Pascal célèbre la grandeur dans la misère : la conscience de notre finitude nous élève au-dessus de notre condition.'
    }
  ],

  keyFigures: [
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'L\'être-pour-la-mort comme structure fondamentale de l\'existence' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'La finitude de la raison humaine' },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'La liberté dans la finitude' },
    { name: 'Blaise Pascal', period: '1623-1662', contribution: 'La grandeur et la misère de l\'homme fini' },
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'L\'homme comme être mortel, la philosophie comme préparation à la mort' }
  ],

  examples: [
    'Le roseau pensant de Pascal : l\'homme est le plus faible de la nature, un roseau qui plie au moindre vent. Mais il est un roseau pensant : conscient de sa faiblesse, de sa mortalité. Cette conscience est sa grandeur dans la misère.',
    'L\'être-pour-la-mort (Heidegger) : si je m\'attends à mourir, je vis chaque moment comme pouvant être pour la dernière fois. Cette anticipation donne une intensité, une authenticité à l\'existence. Le fini donne sens à l\'infini des moments.',
    'Le vieillard (Sartre) : un vieillard qui regrette sa jeunesse n\'assume pas sa finitude. Il voudrait avoir une autre vie. L\'authentique est d\'accepter que ma vie est cette vie, finie, avec ce passé, ces choix.',
    'Le mythe de Sisyphe : Sisyphe est condamné à rouler son rocher éternellement. Contrairement aux dieux immortels, il est mortel, fini. Mais c\'est cette finitude qui donne sens à sa révolte : il assume son sort.'
  ],

  sources: [
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Analyse de l\'être-pour-la-mort',
      quotes: [
        'La mort est la possibilité la plus propre de l\'être-là.',
        'Être-pour-la-mort.',
        'L\'être-là est jeté dans la mort.',
        'Anticiper sa mort est être authentique.',
        'Le on fuit la mort.',
        'La mort est l\'horizon de l\'existence.'
      ]
    },
    {
      title: 'Critique de la raison pure',
      author: 'Immanuel Kant',
      year: 1781,
      type: 'BOOK' as const,
      reference: 'Finitude de la raison humaine',
      quotes: [
        'La raison ne peut connaître que les phénomènes.',
        'Les noumènes sont inconnaissables.',
        'La finitude de la raison fonde la critique.',
        'Tenter de dépasser la finitude mène à l\'illusion.',
        'La connaissance humaine est valide mais limitée.'
      ]
    },
    {
      title: 'Pensées',
      author: 'Blaise Pascal',
      year: 1670,
      type: 'BOOK' as const,
      reference: 'Grandeur et misère de l\'homme fini',
      quotes: [
        'L\'homme n\'est qu\'un roseau, le plus faible de la nature.',
        'Mais c\'est un roseau pensant.',
        'L\'homme dépasse l\'homme.',
        'Nous connaissons notre finitude.',
        'Cette conscience est notre grandeur.'
      ]
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que l\'être-pour-la-mort chez Heidegger ?',
      back: 'L\'être-pour-la-mort est la structure fondamentale de l\'existence : la mort est ma possibilité la plus propre, absolument non-transférable. Personne ne peut mourir à ma place. Anticiper ma mort me donne une compréhension totale de mon existence comme finie. C\'est cette anticipation qui fonde l\'authenticité.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Kant conçoit-il la finitude de la raison ?',
      back: 'Pour Kant, la raison humaine est finie : elle ne peut connaître que les phénomènes (ce qui nous apparaît à travers l\'espace et le temps), pas les noumènes (les choses en soi). Cette finitude n\'est pas un défaut mais la condition de possibilité d\'une connaissance valide. Tenter de dépasser cette finitude (connaître les choses en soi) mène à des illusions transcendantales. La critique kantienne est une philosophie de la finitude.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Pascal résume la grandeur dans la finitude ?',
      back: 'L\'homme n\'est qu\'un roseau, le plus faible de la nature ; mais c\'est un roseau pensant (Pensées, 1670)',
      difficulty: 2
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Heidegger, la mort est la possibilité la plus {{propre}} de l\'être-là, absolument {{non-transférable}}.',
      back: 'propre | non-transférable',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'La finitude est-elle à dépasser ou à assumer ?',
      back: 'Pour les religieux, la finitude est à dépasser (immortalité, Dieu). Pour Heidegger, elle est à assumer (être-pour-la-mort). Pour Sartre, elle est condition de la liberté (situation finie où nous devons nous créer). Pour les transhumanistes, elle est obstacle technique. La question se pose aujourd\'hui avec la technique : pouvons-nous dépasser la finitude ? Et si oui, que perdons-nous ? Heidegger répondrait que nous perdons notre humanité, car l\'être-là est fondamentalement fini. Sartre dirait que nous perdrions la condition de notre liberté. Pascal célébrait la grandeur dans la misère, pas l\'abolition de la misère. Peut-être la finitude n\'est pas obstacle mais essence : sans finitude, pas de valeur, pas de sens, pas d\'humanité.',
      difficulty: 5
    }
  ],

  tags: ['fini', 'finitude', 'mort', 'infini', 'heidegger', 'kant', 'sartre', 'pascal', 'authenticité', 'existence']
};
