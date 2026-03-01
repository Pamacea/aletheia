/**
 * Révolte - Concept Data
 * La révolte comme réponse camusienne à l'absurde
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'revolte',
  name: 'Révolte',
  slug: 'revolte',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 3,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'La révolte est la réponse authentique à l\'absurde, consistant en le refus simultané du suicide (fuite physique) et de l\'espoir (fuite spirituelle). Au plan ontologique, la révolte est « le mouvement même de la vie » (Camus) : l\'affirmation de la dignité humaine face au silence du monde par le maintien de la confrontation avec l\'absurde sans céder ni à la résignation ni à la négation. Au plan éthique, la révolte fonde une solidarité ontologique : « je me révolte, donc nous sommes ». En disant « non » à l\'oppresseur, le révolté affirme une limite qui vaut pour tous, fondant ainsi la communauté humaine. Au plan politique, la révolte devient une exigence morale contre toute oppression qui nie la dignité humaine, mais elle se distingue de la révolution totalitaire en refusant les moyens qui détruisent la fin qu\'elle poursuit.',
  shortDefinition: 'Le refus du suicide et de l\'espoir, affirmation de la dignité humaine face à l\'absurde',

  // ===== DÉFINITION PHILOSOPHIQUE =====
  philosophicalDefinition: {
    analysis: 'La révolte chez Camus repose sur une structure aporétique : elle est à la fois refus et affirmation, négation et position. Elle nie l\'ordre inacceptable (l\'absurde, l\'injustice) tout en affirmant une valeur qui la dépasse (la dignité humaine). La révolte n\'est pas un projet (elle ne cherche pas à « résoudre » l\'absurde) mais une exigence : « la révolte est la confrontation constante de l\'homme et de son propre obscurcissement ». Cette confrontation crée une tension qui est « la passion même de l\'homme absurde ».',
    distinctions: [
      'Révolte vs Rébellion : La rébellion cherche à renverser un ordre pour en instaurer un nouveau (tentative de solution). La révolte est le refus permanent de l\'injuste, sans prétendre résoudre l\'absurde.',
      'Révolte vs Révolution : La révolte est le « non » originel qui fonde la valeur humaine. La révolution prétend réaliser définitivement cette valeur mais risque de devenir tyrannique en absolutisant sa fin.',
      'Révolte métaphysique vs Révolte historique : La révolte métaphysique s\'élève contre la condition humaine (mort, souffrance). La révolte historique s\'élève contre l\'injustice humaine.'
    ],
    implications: 'La révolte implique que la valeur humaine n\'est ni donnée (par un ordre transcendant) ni créée (par la liberté subjective), mais révélée dans l\'acte même de refuser ce qui la nie. Elle fonde une éthique de la mesure : le révolté refuse les moyens qui détruisent la dignité humaine au nom de sa défense.'
  },

  // ===== RAISONNEMENTS PHILOSOPHIQUES =====
  reasoning: [
    {
      title: 'L\'argument de la valeur révélée',
      argument: 'La révolte est l\'acte par lequel l\'homme découvre qu\'il y a des choses qu\'il ne peut pas accepter. Cette découverte n\'est pas déduction mais révélation : dans l\'acte de dire « non », l\'homme affirme qu\'il existe une limite que même le pire criminel ne peut franchir sans se contredire.',
      premises: [
        'L\'homme révolté dit « non » à l\'oppression',
        'Ce « non » affirme une limite qui vaut pour tous',
        'Cette limite fonde la valeur humaine',
        'La valeur est donc révélée, non donnée ni créée'
      ],
      conclusion: 'La révolte fonde la première valeur : la dignité humaine comme limite intransgressible.',
      objections: [
        { philosopher: 'Hegel', objection: 'La révolte qui nie l\'ordre existant est négativité abstraite qui ne peut fonder aucune valeur positive. La valeur vient de la reconnaissance mutuelle, pas du refus.' },
        { philosopher: 'Nietzsche', objection: 'La révolte qui se fonde sur la « valeur humaine » reste dans la morale du ressentiment. Le véritable révolté crée ses propres valeurs, il ne se contente pas de refuser.' }
      ],
      responses: [
        { philosopher: 'Camus', response: 'La révolte n\'est pas négativité abstraite mais affirmation concrète : en disant non, j\'affirme qu\'il y a un « oui » qui dépasse mon individualité. Ce « oui » n\'est pas création arbitraire mais découverte d\'une limite commune.' },
        { philosopher: 'Camus', response: 'La révolte nietzschéenne qui crée ses valeurs risque de justifier l\'horreur au nom de la création. La révolte camusienne reste mesurée : elle refuse les moyens qui détruisent la dignité qu\'elle prétend défendre.' }
      ]
    },
    {
      title: 'L\'argument de la solidarité ontologique',
      argument: 'La révolte fonde une communauté qui n\'est pas contrat social mais appartenance ontologique. En disant « non » pour tous, le révolté découvre que sa liberté n\'est pas isolée mais solidaire.',
      premises: [
        'Le révolté dit « non » au nom de tous',
        'Ce « non » affirme une valeur commune',
        'La valeur commune fonde une communauté',
        'La communauté est donc ontologique, pas contractuelle'
      ],
      conclusion: '« Je me révolte, donc nous sommes » : la révolte est l\'acte fondateur de la communauté humaine.',
      objections: [
        { philosopher: 'Sartre', objection: 'La solidarité ne peut être fondée sur l\'acte de révolte car chaque liberté est radicalement singulière. L\'universalité est un idéal, pas une donnée ontologique.' }
      ],
      responses: [
        { philosopher: 'Camus', response: 'La révolte ne supprime pas la singularité mais la dépasse : en disant non pour tous, je découvre que ma liberté n\'est pas isolation mais appartenance à une condition commune.' }
      ]
    },
    {
      title: 'L\'argument de la mesure',
      argument: 'La révolte authentique connaît des limites : elle refuse les moyens qui détruisent la fin qu\'elle poursuit. La révolte devient folle quand elle absolutise sa cause et justifie l\'horreur au nom de la justice.',
      premises: [
        'La révolte affirme la dignité humaine',
        'La fin ne justifie pas les moyens',
        'Les moyens qui détruisent la dignité contredisent la fin',
        'La révolte authentique refuse donc ces moyens'
      ],
      conclusion: 'La révolte légitime est mesurée, la révolution totalitaire est démesurée.',
      objections: [
        { philosopher: 'Les révolutionnaires', objection: 'La révolte qui refuse la violence est impuissante. Pour vaincre l\'oppression, il faut parfois utiliser des moyens qui semblent contredire la fin.' }
      ],
      responses: [
        { philosopher: 'Camus', response: 'La révolte qui utilise les moyens de l\'oppresseur devient l\'oppresseur elle-même. La seule révolte légitime est celle qui refuse de devenir ce qu\'elle combat.' }
      ]
    }
  ],

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'revolutio',
    root: 're-volvere : rouler en arrière, retourner',
    notes: 'Au sens philosophique, la révolte est le mouvement par lequel l\'homme se redresse contre ce qui l\'écrase'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Camus - La confrontation constante',
      description: 'La révolte comme « maintien de la confrontation » avec l\'absurde. Elle refuse le suicide (fuite physique) et l\'espoir (fuite spirituelle). Le révolté vit sans espoir mais sans résignation, dans une tension permanente qui affirme sa dignité. « Je me révolte donc nous sommes » : la révolte fonde la première valeur, la solidarité humaine.'
    },
    {
      title: 'Sartre - L\'engagement politique',
      description: 'La révolte comme prise de conscience de la liberté et engagement pour la liberté de tous. L\'homme révolté reconnaît que sa liberté dépend de celle des autres. L\'action révolutionnaire devient l\'affirmation concrète de cette solidarité nécessaire.'
    },
    {
      title: 'Nietzsche - La transvaluation',
      description: 'La révolte comme « dire non » au monde donné pour créer de nouvelles valeurs. Le surhomme est celui qui ose dire non à la morale du ressentiment et affirmer la vie dans sa puissance créatrice. La révolte est ici affirmation, pas négation.'
    },
    {
      title: 'L\'homme révolté - La mesure',
      description: 'Dans son œuvre de 1951, Camus distingue la révolte légitime (refus de l\'injustice humaine) de la révolution totalitaire (qui nie la dignité humaine au nom d\'une fin). La révolte authentique connaît des limites : elle refuse les moyens qui détruisent ce qu\'elle prétend défendre.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    {
      name: 'Albert Camus',
      period: '1913-1960',
      contribution: 'Théorie de la révolte comme réponse à l\'absurde. Dans Le Mythe de Sisyphe (1942), il analyse la révolte comme « confrontation constante » avec l\'absurde. Dans L\'Homme révolté (1951), il développe une philosophie politique de la révolte fondée sur la mesure et la solidarité.',
      works: ['Le Mythe de Sisyphe', 'L\'Homme révolté', 'L\'Étranger'],
      quotes: [
        '« Je me révolte, donc nous sommes. »',
        '« La révolte est la confrontation constante de l\'homme et de son propre obscurcissement. »',
        '« Une doctrine qui ne sauve pas chaque homme en particulier n\'a pas de valeur. »'
      ]
    },
    {
      name: 'Jean-Paul Sartre',
      period: '1905-1980',
      contribution: 'La révolte comme engagement politique et affirmation de la liberté. Pour Sartre, la révolte est la reconnaissance que ma liberté dépend de celle des autres.',
      works: ['Les Chemins de la liberté', 'Critique de la raison dialectique'],
      quotes: [
        '« On est libre, il faut s\'en faire un devoir. »',
        '« La révolte est la reconnaissance de ma liberté par celle de l\'autre. »'
      ]
    },
    {
      name: 'Friedrich Nietzsche',
      period: '1844-1900',
      contribution: 'La révolte comme transvaluation des valeurs et affirmation de la vie. Le surhomme est celui qui ose dire « non » à la morale du ressentiment pour créer de nouvelles valeurs.',
      works: ['Ainsi parlait Zarathoustra', 'Généalogie de la morale'],
      quotes: [
        '« Il faut porter encore un chaos en soi pour pouvoir enfanter une étoile dansante. »',
        '« Dieu est mort! Dieu reste mort! Et c\'est nous qui l\'avons tué! »'
      ]
    },
    {
      name: 'André Breton',
      period: '1896-1966',
      contribution: 'La révolte surréaliste contre la raison et les conventions bourgeoises. Le surréalisme comme « révolte absolue » de l\'esprit.',
      works: ['Manifeste du surréalisme', 'Nadja'],
      quotes: [
        '« Le merveilleux est toujours beau, quel qu\'il soit. »',
        '« Transformer le monde, a dit Marx, changer la vie, a dit Rimbaud : deux mots-clés pour nous. »'
      ]
    },
    {
      name: 'Rosa Luxemburg',
      period: '1871-1919',
      contribution: 'La révolte comme révolution socialiste fondée sur la spontanéité des masses et le refus du centralisme autoritaire.',
      works: ['Réforme ou révolution', 'La Crise de la social-démocratie'],
      quotes: [
        '« La liberté est toujours et exclusivement la liberté de celui qui pense différemment. »',
        '« Ceux qui ne bougent pas ne sentent pas leurs chaînes. »'
      ]
    }
  ],

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      name: 'Absurde',
      type: 'OPPOSES_SEEKING_RESOLUTION',
      description: 'La révolte est la réponse à l\'absurde. L\'absurde est le divorce entre l\'homme et le monde, la révolte est le refus de ce divorce sans prétendre le résoudre.',
      bidirectional: true
    },
    {
      name: 'Suicide',
      type: 'REJECTS',
      description: 'La révolte refuse le suicide comme fuite physique devant l\'absurde. Le suicide nie la valeur de la vie, la révolte l\'affirme.',
      bidirectional: false
    },
    {
      name: 'Espoir',
      type: 'REJECTS',
      description: 'La révolte refuse l\'espoir comme fuite spirituelle devant l\'absurde. L\'espoir nie l\'absurde en inventant un sens, la révolte l\'assume.',
      bidirectional: false
    },
    {
      name: 'Solidarité',
      type: 'FOUNDS',
      description: 'La révolte fonde la solidarité humaine : « je me révolte, donc nous sommes ». En disant non pour tous, le révolté affirme une communauté.',
      bidirectional: true
    },
    {
      name: 'Authenticité',
      type: 'REQUIRES',
      description: 'La révolte authentique exige l\'authenticité : elle refuse l\'auto-illusion et exige la clarté sur sa condition.',
      bidirectional: true
    },
    {
      name: 'Révolution',
      type: 'DISTINCT_FROM_BUT_RELATED',
      description: 'La révolte est le « non » originel qui fonde la valeur. La révolution prétend réaliser cette valeur mais risque de devenir tyrannique. Camus distingue la révolte mesurée de la révolution démesurée.',
      bidirectional: true
    }
  ],

  // ===== COURANTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      name: 'Absurdisme',
      description: 'Courant philosophique issu de l\'œuvre de Camus. L\'absurde est la condition fondamentale de l\'homme, la révolte est la réponse authentique.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Albert Camus', 'Emil Cioran']
    },
    {
      name: 'Existentialisme',
      description: 'La révolte est une forme d\'engagement existentialiste : affirmation de la liberté et de la dignité dans un monde sans sens donné.',
      role: 'IMPORTANT',
      keyPhilosophers: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Albert Camus']
    },
    {
      name: 'Surréalisme',
      description: 'Le surréalisme comme « révolte absolue » contre la raison bourgeoise et les conventions morales.',
      role: 'RELATED',
      keyPhilosophers: ['André Breton', 'Georges Bataille']
    },
    {
      name: 'Marxisme révolutionnaire',
      description: 'La révolte comme révolution prolétarienne. Rosa Luxemburg et Sartre ont développé une pensée de la révolte dans une perspective marxiste.',
      role: 'RELATED',
      keyPhilosophers: ['Rosa Luxemburg', 'Jean-Paul Sartre', 'Herbert Marcuse']
    },
    {
      name: 'Nihilisme',
      description: 'La révolte comme réponse active au nihilisme : face à la mort de Dieu, l\'homme crée ses propres valeurs.',
      role: 'RELATED',
      keyPhilosophers: ['Friedrich Nietzsche', 'Albert Camus']
    }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Sisyphe : Le héros mythique qui, conscient de son châtiment inutile, continue de pousser son rocher. Sa révolte est intérieure : la conscience claire de son sort et le refus de l\'accepter sans murmure.',
    'Prométhée : Vole le feu aux dieux pour le donner aux humains, subissant le châtiment de l\'aigle qui dévore son foie. Symbole de la révolte contre l\'ordre divin pour la dignité humaine.',
    'Antigone : Chez Sophocle, elle refuse la loi de Créon pour enterrer son frère. Sa révolte est le choix de la loi divine (les liens du sang) contre la loi humaine, au prix de sa vie.',
    'L\'esclave révolté : Analyse par Camus de la première révolte - l\'esclave qui dit « non » à son maître. Ce non affirme qu\'il existe une limite qu\'on ne peut franchir, fondant ainsi la valeur humaine.',
    'Le justicier : Dans L\'Homme révolté, Camus analyse le meurtrier qui tue au nom de la justice. Sa révolte devient folle quand elle absolutise sa cause et justifie les moyens les plus horribles.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Le Mythe de Sisyphe',
      author: 'Albert Camus',
      year: 1942,
      type: 'BOOK' as const,
      reference: 'Essai philosophique sur l\'absurde et la révolte comme réponse authentique',
      quotes: [
        'La révolte est la confrontation constante de l\'homme et de son propre obscurcissement.',
        'Je me révolte, donc nous sommes.',
        'La révolte naît de la comparaison entre l\'homme et son destin.',
        'Ce qui est une passion chez le premier [l\'homme absurde] devient une entreprise chez le second [le révolté].',
        'La révolte est ici le mouvement même de la vie.',
        'La révolte confère à la vie sa valeur et sa grandeur.',
        'Le révolté ne nie pas l\'absurde, il l\'assume.'
      ]
    },
    {
      title: 'L\'Homme révolté',
      author: 'Albert Camus',
      year: 1951,
      type: 'BOOK' as const,
      reference: 'Analyse philosophique et historique de la révolte, de la révolution et du totalitarisme',
      quotes: [
        'Je me révolte, donc nous sommes.',
        'L\'homme révolté dit non et s\'il y a de la force en lui, il dit oui.',
        'La révolte est l\'affaire de tous.',
        'La première démarche d\'un esprit révolté est de refuser son histoire.',
        'Le consentement à la mort est impliqué dans la révolte même.',
        'La révolte métaphysique est la revendication motivée de l\'unité, la protestation contre la souffrance et la mort.',
        'Une doctrine qui ne sauve pas chaque homme en particulier n\'a pas de valeur.'
      ]
    },
    {
      title: 'Les chemins de la liberté',
      author: 'Jean-Paul Sartre',
      year: 1945,
      type: 'BOOK' as const,
      reference: 'Roman-trilogie sur l\'engagement politique et la responsabilité',
      quotes: [
        'On est libre, il faut s\'en faire un devoir.',
        'L\'homme est condamné à être libre.',
        'La révolte est la reconnaissance de ma liberté par celle de l\'autre.',
        'On ne peut pas faire qu\'on ne soit pas libre.'
      ]
    },
    {
      title: 'Ainsi parlait Zarathoustra',
      author: 'Friedrich Nietzsche',
      year: 1883,
      type: 'BOOK' as const,
      reference: 'Traité poétique sur la transvaluation des valeurs et l\'affirmation de la vie',
      quotes: [
        'Il faut porter encore un chaos en soi pour pouvoir enfanter une étoile dansante.',
        'Je vous enseigne le surhomme. L\'homme est quelque chose qui doit être surmonté.',
        'Dieu est mort! Dieu reste mort! Et c\'est nous qui l\'avons tué!',
        'Tous les dieux sont morts : maintenant nous voulons que le surhomme vive.',
        'Devenir ce que l\'on est', 'L\'homme est une corde tendue entre la bête et le surhomme.'
      ]
    },
    {
      title: 'La Naissance de la tragédie',
      author: 'Friedrich Nietzsche',
      year: 187,
      type: 'BOOK' as const,
      reference: 'Essai sur l\'art tragique comme révolte métaphysique contre la souffrance',
      quotes: [
        'Seul en tant que phénomène esthétique l\'existence et le monde sont éternellement justifiés.',
        'Le pessimisme tragique affirme la vie jusque dans son caractère le plus terrible et problématique.',
        'La tragédie est née de l\'esprit de la musique.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que la révolte selon Camus ?',
      back: 'La révolte est la réponse authentique à l\'absurde qui refuse le suicide et l\'espoir. Elle maintient la confrontation avec l\'absurde pour affirmer la dignité humaine.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre révolte et rébellion ?',
      back: 'La rébellion cherche à renverser un ordre pour en instaurer un nouveau (tentative de solution). La révolte est le refus permanent de l\'injuste, sans prétendre résoudre l\'absurde. La révolte est un mode d\'existence, la rébellion est une action.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'De quelle œuvre cette citation est-elle extraite : « Je me révolte, donc nous sommes » ?',
      back: 'L\'Homme révolté, Albert Camus (1951)',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment la révolte fonde-t-elle la solidarité selon Camus ?',
      back: 'En disant non à l\'oppresseur, le révolté affirme une limite qui vaut pour tous : « je me révolte, donc nous sommes ». La révolte reconnaît que l\'homme a une valeur que même le pire criminel ne peut nier, fondant ainsi une communauté humaine.',
      difficulty: 4
    },
    {
      type: 'ESSAY' as const,
      front: 'En quoi la révolte est-elle la réponse camusienne à l\'absurde ?',
      back: 'Face à l\'absurde (divorce entre l\'homme et le monde), Camus rejette deux solutions : le suicide (fuite physique) et l\'espoir (fuite spirituelle). La révolte est la troisième voie : le maintien de la confrontation. Elle refuse le silence du monde mais refuse aussi de s\'y soustraire. Cette tension permanente est l\'affirmation de la dignité humaine : en refusant ce qui l\'écrase, l\'homme affirme qu\'il vaut mieux que son destin. La révolte ne résout pas l\'absurde, elle en assume la condition pour vivre « sans espoir mais sans résignation ».',
      difficulty: 5
    },
    {
      type: 'CLOZE' as const,
      front: 'Selon Camus, « Je me {{révolte}}, donc nous {{sommes}}. »',
      back: 'révolte | sommes',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'La révolte refuse le {{suicide}} et l\'{{espoir}}.',
      back: 'suicide | espoir',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Camus distingue-t-il révolte et révolution ?',
      back: 'La révolte est le refus de l\'injustice, un « non » qui affirme une limite. La révolution prétend résoudre définitivement l\'injustice, mais risque de devenir tyrannique en absolutisant sa fin. Pour Camus, la révolte légitime reste mesurée (elle refuse les moyens qui détruisent la dignité humaine), tandis que la révolution totalitaire justifie l\'horreur au nom d\'un idéal.',
      difficulty: 4
    }
  ],

  // ===== TAGS =====
  tags: ['révolte', 'camus', 'absurde', 'liberté', 'solidarité', 'engagement', 'sartre', 'nietzsche', 'prométhée', 'sisyphe', 'antigone']
};
