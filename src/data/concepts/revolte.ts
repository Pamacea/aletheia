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
  definition: 'La révolte est la réponse authentique à l\'absurde, consistant en le refus simultané du suicide et de l\'espoir. Elle est l\'affirmation de la dignité humaine face au silence du monde, le maintien de la confrontation avec l\'absurde sans céder ni à la résignation ni à la négation. Pour Camus, la révolte n\'est pas une recherche de solution mais une exigence de clarté : elle refuse l\'obscurité du monde tout en refusant de s\'y soustraire. La révolte fonde une solidarité humaine : « je me révolte, donc nous sommes ». Elle devient ensuite, dans l\'œuvre de Camus, une exigence morale et politique contre toute oppression qui nie la dignité humaine.',
  shortDefinition: 'Le refus du suicide et de l\'espoir, affirmation de la dignité humaine face à l\'absurde',

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
    { name: 'Albert Camus', period: '1913-1960', contribution: 'Théorie de la révolte comme réponse à l\'absurde et fondement de la solidarité humaine' },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'La révolte comme engagement politique et affirmation de la liberté' },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'La révolte comme transvaluation des valeurs et affirmation de la vie' },
    { name: 'André Breton', period: '1896-1966', contribution: 'La révolte surréaliste contre la raison et les conventions bourgeoises' },
    { name: 'Rosa Luxemburg', period: '1871-1919', contribution: 'La révolte comme révolution socialiste et spontanéité des masses' }
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
      year: 1872,
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
      difficulty: 2
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
      difficulty: 2
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
