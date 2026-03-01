/**
 * Sens - Concept Data
 * Signification ou direction de l'existence
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'sens',
  name: 'Sens',
  slug: 'sens',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 3,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le sens désigne la signification ou la direction de l\'existence. La question du sens (« Quel est le sens de la vie ? ») est centrale dans la philosophie existentialiste car elle interroge la valeur de l\'existence dans un monde qui n\'en a pas de lui-même. Pour les croyants, le sens est donné : il vient de Dieu ou d\'un ordre transcendant. Pour les existentialistes athées, le sens n\'est ni donné ni découvert, il est créé. Sartre affirme que « l\'existence précède l\'essence » : l\'homme existe d\'abord, sans sens prédéterminé, et crée ensuite son essence par ses choix. Camus, face à l\'absurde, conclut que « la vie sera vécue mieux, sans avoir besoin de sens ». Frankl, survivant des camps, fonde la logothérapie sur la « volonté de sens » : l\'homme peut trouver un sens même dans la souffrance la plus extrême. La question du sens n\'est pas théorique mais existentielle : c\'est en vivant qu\'on répond, pas en raisonnant.',
  shortDefinition: 'Signification de l\'existence : donné (religion) ou créé (existentialisme)',

  // ===== DÉFINITION PHILOSOPHIQUE =====
  philosophicalDefinition: {
    analysis: 'La question du sens peut être analysée comme aporie métaphysique : si le sens est donné, il est transcendant et requiert la foi ; si le sens est créé, il est immanent et risque l\'arbitraire. Les existentialistes tentent de dépasser cette alternative : le sens n\'est ni donné ni arbitraire, il est « à inventer » dans une situation concrète. Pour Sartre, le sens est projet : il n\'est pas une essence à découvrir mais une tâche à accomplir. Pour Frankl, le sens est « découvert » dans l\'existence mais non « donné » par la raison : il surgit de la rencontre avec l\'autre, l\'œuvre, la souffrance. Pour Camus, la question du sens est elle-même absurde : elle présuppose une correspondance entre l\'attente humaine et le silence du monde.',
    distinctions: [
      'Sens donné vs Sens créé : Le sens donné (religion) précède l\'existence. Le sens créé (existentialisme) succède à l\'existence.',
      'Sens objectif vs Sens subjectif : Le sens objectif vaut pour tous. Le sens subjectif est individuel et contingent.',
      'Sens universel vs Sens particulier : Le sens universel est unique et absolu. Le sens particulier est multiple et relatif.'
    ],
    implications: 'L\'analyse du sens implique que la valeur de l\'existence n\'est ni découverte ni inventée mais « engagée ». Le sens n\'est pas un objet mais une manière d\'être-au-monde. Il n\'est pas trouvé mais fait.'
  },

  // ===== RAISONNEMENTS PHILOSOPHIQUES =====
  reasoning: [
    {
      title: 'L\'argument de l\'existence précède l\'essence',
      argument: 'Pour Sartre, l\'homme n\'a pas d\'essence prédéterminée : il existe d\'abord, puis se définit par ses choix. Le sens n\'est donc ni donné ni à découvrir, mais à créer.',
      premises: [
        'Il n\'y a pas de nature humaine (pas de Dieu pour la concevoir)',
        'L\'homme existe d\'abord, surgit dans le monde',
        'Il se définit ensuite par ses choix',
        'Donc le sens est créé par la liberté'
      ],
      conclusion: 'Le sens de la vie n\'est pas une essence à découvrir mais une tâche à accomplir : créer son essence par ses choix.',
      objections: [
        { philosopher: 'Les religieux', objection: 'Si le sens est créé, il est arbitraire. Si chaque homme crée son sens, tous les sens se valent, ce qui est absurde.' },
        { philosopher: 'Les déterministes', objection: 'Si le sens est créé, il présuppose une liberté qui n\'existe pas. Nos choix sont déterminés par l\'inconscient, la société, la biologie.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'Le sens n\'est pas arbitraire car il est choisi en situation. En choisissant pour moi, je choisis pour tous : mes choix engagent une image de l\'homme que je propose à tous. La liberté n\'est pas une donnée mais une tâche.' },
        { philosopher: 'Frankl', response: 'Le sens n\'est pas créé arbitrairement mais découvert dans des situations concrètes : aimer, créer, souffrir. Ces situations donnent un sens qui n\'est ni subjectif ni objectif mais « à découvrir ».' }
      ]
    },
    {
      title: 'L\'argument de la volonté de sens',
      argument: 'Pour Frankl, la motivation première de l\'homme n\'est ni le plaisir (Freud) ni la puissance (Adler) mais le sens. La perte de sens conduit au « vide existentiel ».',
      premises: [
        'L\'homme peut supporter le « comment » s\'il a un « pourquoi »',
        'Le sens est découvert dans l\'existence concrète',
        'La volonté de sens est la motivation fondamentale',
        'Le vide existentiel est la pathologie de la perte de sens'
      ],
      conclusion: 'Le sens n\'est pas donné par la raison mais découvert dans l\'existence : aimer, créer, souffrir.',
      objections: [
        { philosopher: 'Camus', objection: 'La volonté de sens est une fuite devant l\'absurde. Elle nie le silence du monde en inventant un sens.' },
        { philosopher: 'Freud', objection: 'La volonté de sens est sublimation du désir. Le sens est rationalisation, pas motivation première.' }
      ],
      responses: [
        { philosopher: 'Frankl', response: 'Le sens n\'est pas invention mais découverte. Je ne crée pas le sens de mon existence, je le découvre dans des situations qui me dépassent. Camus confond le sens donné (religieux) et le sens découvert (existentiel).' }
      ]
    },
    {
      title: 'L\'argument de l\'absurde',
      argument: 'Pour Camus, la question du sens présuppose une correspondance entre l\'attente humaine et le monde. Cette correspondance n\'existe pas : le monde est absurde.',
      premises: [
        'L\'homme attend un sens du monde',
        'Le monde ne répond pas (silence du monde)',
        'Ce divorce est l\'absurde',
        'L\'espoir de sens nie l\'absurde'
      ],
      conclusion: 'La réponse authentique n\'est pas le sens mais la révolte : vivre sans espoir mais sans résignation.',
      objections: [
        { philosopher: 'Frankl', objection: 'L\'absurde est une conclusion philosophique, pas une expérience. Même dans les camps, j\'ai trouvé un sens.' },
        { philosopher: 'Les religieux', objection: 'Le silence du monde n\'implique pas l\'absence de Dieu. Le sens est donné par la foi, pas par la raison.' }
      ],
      responses: [
        { philosopher: 'Camus', response: 'La foi est une solution intellectuelle qui nie l\'absurde. La révolte l\'assume. Je ne dis pas « il n\'y a pas de sens », je dis « le sens n\'est pas la solution ».' }
      ]
    }
  ],

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'sensus',
    root: 'sentire : percevoir, ressentir',
    notes: 'Le sens est d\'abord la perception (les cinq sens), puis par métaphore la signification, la direction, la finalité'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Sens donné - La perspective religieuse',
      description: 'Dans la perspective religieuse, le sens de l\'existence est donné par Dieu ou par un ordre transcendant. La vie a une finalité qui la précède : connaître Dieu, le servir, participer à son plan. Le sens est découvert, non créé. Les religions proposent des réponses : le sens est le salut, la béatitude, l\'accomplissement d\'une volonté divine. Cette perspective rassure mais exige la foi.',
    },
    {
      title: 'Sens créé - L\'existentialisme',
      description: 'Pour les existentialistes athées (Sartre, Camus), il n\'y a pas de sens donné : « l\'existence précède l\'essence ». Le sens n\'est ni là ni à trouver, il est à inventer. Chaque homme crée son sens par ses choix, ses engagements, ses valeurs. Cette liberté est terrifiante (angoisse) mais aussi exaltante (responsabilité). Le sens est une œuvre, pas une découverte.',
    },
    {
      title: 'Perte du sens - Le nihilisme',
      description: 'Le nihilisme (Nietzsche) est la reconnaissance que « Dieu est mort » et avec lui tous les sens transcendants. Il n\'y a plus de sens donné, plus de valeur absolue. Le nihilisme passif est le désespoir devant ce vide (« rien n\'a de sens, tout est vain »). Le nihilisme actif est l\'affirmation créatrice : puisque aucun sens n\'est donné, je suis libre de créer les miens.',
    },
    {
      title: 'Quête de sens - La logothérapie',
      description: 'Viktor Frankl, psychiatre survivant d\'Auschwitz, fonde la logothérapie sur la « volonté de sens ». Contrairement à Freud (volonté de plaisir) et Adler (volonté de puissance), Frankl soutient que la motivation première de l\'homme est le sens. Même dans la souffrance extrême, l\'homme peut trouver un sens (ex : aimer, souffrir pour une cause). « Celui qui a un pourquoi de vivre peut supporter presque tous les comment. »',
    },
    {
      title: 'Le sens sans l\'absurde - Camus',
      description: 'Face à l\'absurde, la tentation est de nier l\'absurde en inventant un sens (espoir religieux ou idéologique). Camus refuse cette solution : le sens ne résout pas l\'absurde, il le nie. La réponse camusienne est la révolte : vivre sans espoir mais sans résignation, créer des valeurs locales et humaines sans prétendre à un sens absolu. « La vie sera vécue mieux, sans avoir besoin de sens. »'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    {
      name: 'Viktor Frankl',
      period: '1905-1997',
      contribution: 'Fondateur de la logothérapie, théorie de la « volonté de sens » comme motivation fondamentale de l\'homme. Survivant d\'Auschwitz, il montre que le sens peut être trouvé même dans la souffrance extrême.',
      works: ['Découvrir un sens à sa vie', 'La présence ignorée de Dieu'],
      quotes: [
        '« Celui qui a un pourquoi de vivre peut supporter presque tous les comment. »',
        '« La volonté de sens est la motivation fondamentale de l\'homme. »',
        '« L\'homme peut tout supporter sauf un sens à sa vie. »'
      ]
    },
    {
      name: 'Albert Camus',
      period: '1913-1960',
      contribution: 'Analyse de l\'absurde comme divorce entre l\'attente humaine de sens et le silence du monde. Camus refuse le sens comme solution intellectuelle et propose la révolte.',
      works: ['Le Mythe de Sisyphe', 'L\'Homme révolté', 'L\'Étranger'],
      quotes: [
        '« La vie sera vécue mieux, sans avoir besoin de sens. »',
        '« Il n\'y a qu\'un problème philosophique vraiment sérieux : le suicide. »',
        '« Il faut imaginer Sisyphe heureux. »'
      ]
    },
    {
      name: 'Jean-Paul Sartre',
      period: '1905-1980',
      contribution: '« L\'existence précède l\'essence » : le sens n\'est ni donné ni découvert, il est créé par la liberté humaine. L\'homme est « condamné à être libre » et à créer son sens.',
      works: ['L\'Existentialisme est un humanisme', 'L\'Être et le Néant'],
      quotes: [
        '« L\'existence précède l\'essence. »',
        '« L\'homme n\'est rien d\'autre que ce qu\'il fait de lui-même. »',
        '« En choisissant pour moi, je choisis pour tous les hommes. »'
      ]
    },
    {
      name: 'Friedrich Nietzsche',
      period: '1844-1900',
      contribution: 'Critique du nihilisme (« Dieu est mort ») et affirmation de la création de nouvelles valeurs par le surhomme. Le sens n\'est pas donné mais créé.',
      works: ['Ainsi parlait Zarathoustra', 'Généalogie de la morale'],
      quotes: [
        '« Dieu est mort! Dieu reste mort! Et c\'est nous qui l\'avons tué! »',
        '« Devenir ce que l\'on est. »',
        '« Il faut porter encore un chaos en soi pour pouvoir enfanter une étoile dansante. »'
      ]
    },
    {
      name: 'Søren Kierkegaard',
      period: '1813-1855',
      contribution: 'Le sens comme choix personnel et engagement dans la foi. Kierkegaard oppose le mode esthétique (dispersé, sans sens) au mode éthique (choix de soi).',
      works: ['Ou bien... ou bien', 'Le Concept de l\'angoisse', 'Traité du désespoir'],
      quotes: [
        '« Le moi est une relation qui se rapporte à elle-même. »',
        '« Devenir soi est la tâche de la vie. »',
        '« La foi est le sacrifice de l\'intelligence. »'
      ]
    }
  ],

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      name: 'Absurde',
      type: 'QUESTIONS',
      description: 'L\'absurde est le divorce entre l\'attente humaine de sens et le silence du monde. La question du sens naît de l\'expérience de l\'absurde.',
      bidirectional: true
    },
    {
      name: 'Liberté',
      type: 'REQUIRES',
      description: 'Pour créer du sens, l\'homme doit être libre. Le sens est l\'œuvre de la liberté humaine.',
      bidirectional: true
    },
    {
      name: 'Valeur',
      type: 'RELATES_TO',
      description: 'Le sens fonde les valeurs. Créer du sens, c\'est créer des valeurs qui donnent une direction à l\'existence.',
      bidirectional: true
    },
    {
      name: 'Nihilisme',
      type: 'RESPONDS_TO',
      description: 'Le nihilisme est la reconnaissance qu\'il n\'y a pas de sens donné. La réponse est le sens créé (active) ou le désespoir (passif).',
      bidirectional: true
    },
    {
      name: 'Révolte',
      type: 'ALTERNATIVE_TO',
      description: 'Camus oppose la recherche de sens (espoir) à la révolte (vie sans espoir). La révolte refuse le sens comme solution intellectuelle.',
      bidirectional: true
    },
    {
      name: 'Espoir',
      type: 'DISTINCT_FROM',
      description: 'L\'espoir est l\'attente d\'un sens à venir (salut, paradis). Le sens existentialiste est immanent : il est créé ici et maintenant.',
      bidirectional: false
    },
    {
      name: 'Signification',
      type: 'RELATES_TO',
      description: 'Le sens est la signification globale de l\'existence, par opposition à la signification des éléments particuliers. Chercher le sens, c\'est chercher une signification de la vie dans son ensemble.',
      bidirectional: true
    },
    {
      name: 'Quête',
      type: 'EXPRESSED_IN',
      description: 'La question du sens s\'exprime comme quête existentielle. L\'homme est en quête de sens comme le chercheur est en quête de vérité.',
      bidirectional: true
    },
    {
      name: 'But',
      type: 'DISTINCT_FROM',
      description: 'Le but est une fin vers laquelle on tend. Le sens est plus vaste : il peut exister sans but précis, comme dans la création artistique.',
      bidirectional: true
    }
  ],

  // ===== COURANTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      name: 'Existentialisme',
      description: 'L\'existentialisme athée affirme que le sens est créé par la liberté humaine. L\'existence précède l\'essence.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Albert Camus']
    },
    {
      name: 'Logothérapie',
      description: 'Thérapie fondée sur la « volonté de sens ». Le sens est découvert dans l\'existence concrète, pas donné par la raison.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Viktor Frankl']
    },
    {
      name: 'Nihilisme',
      description: 'Reconnaissance de la mort des sens transcendants. Le nihilisme passif est désespoir, le nihilisme actif est création de valeurs.',
      role: 'RELATED',
      keyPhilosophers: ['Friedrich Nietzsche', 'Emil Cioran']
    },
    {
      name: 'Absurdisme',
      description: 'L\'absurde comme expérience du nonsens. La réponse n\'est pas le sens mais la révolte.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Albert Camus', 'Emil Cioran']
    },
    {
      name: 'Philosophie religieuse',
      description: 'Le sens est donné par Dieu ou un ordre transcendant. La question du sens se résout dans la foi.',
      role: 'CONTRASTS_WITH',
      keyPhilosophers: ['Søren Kierkegaard', 'Blaise Pascal', 'Thomas d\'Aquin']
    }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le survivant des camps : Dans Découvrir un sens à sa vie, Frankl raconte qu\'à Auschwitz, ceux qui survivaient étaient ceux qui avaient un sens (un proche à revoir, une œuvre à achever, une vérité à transmettre). Le sens rend supportable l\'insupportable.',
    'Sisyphe : Le héros condamné à un travail inutile est l\'image de l\'absence de sens. Camus le transforme en héros : « Il faut imaginer Sisyphe heureux. » Le bonheur n\'est pas dans le sens du rocher mais dans la conscience claire de sa condition et la révolte.',
    'L\'artiste : L\'artiste créateur ne « trouve » pas son œuvre, il la crée. De même, l\'homme ne trouve pas son sens, il le crée. L\'œuvre d\'art n\'a pas de sens préexistant : c\'est l\'artiste qui lui donne sens. Notre vie est cette œuvre.',
    'Le parent : Pour un parent, la vie de son enfant donne un sens à sa propre vie (se sacrifier, éduquer, transmettre). Ce sens n\'est ni donné par la nature ni décrété par la société, il est choisi et créé quotidiennement par l\'engagement.',
    'Le militant : Le militant qui se consacre à une cause (justice, écologie, liberté) crée un sens à sa vie par cet engagement. Le sens n\'est pas dans la réussite de la cause (incertaine) mais dans l\'acte même de se consacrer à elle.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Découvrir un sens à sa vie',
      author: 'Viktor Frankl',
      year: 1946,
      type: 'BOOK' as const,
      reference: 'Traitement de logothérapie fondé sur l\'expérience des camps de concentration',
      quotes: [
        'Celui qui a un pourquoi de vivre peut supporter presque tous les comment.',
        'La volonté de sens est la motivation fondamentale de l\'homme.',
        'L\'homme peut tout supporter sauf un sens à sa vie.',
        'Le sens n\'est pas donné, il est à découvrir.',
        'La vie nous pose des questions, nous y répondons par nos actes.',
        'L\'amour est la seule façon de saisir un autre être humain dans son être le plus profond.',
        'Le bonheur ne peut être poursuivi, il doit s\'ensuivre.'
      ]
    },
    {
      title: 'Le Mythe de Sisyphe',
      author: 'Albert Camus',
      year: 1942,
      type: 'BOOK' as const,
      reference: 'Essai sur l\'absurde et la réponse de la révolte plutôt que du sens',
      quotes: [
        'Il n\'y a qu\'un problème philosophique vraiment sérieux : le suicide.',
        'La vie sera vécue mieux, sans avoir besoin de sens.',
        'Le combat suprême est celui de l\'homme contre l\'absurde.',
        'Il faut imaginer Sisyphe heureux.',
        'L\'absurde naît de cette confrontation entre l\'appel humain et le silence du monde.',
        'Je tire de cette absurdité trois conséquences : ma révolte, ma liberté, ma passion.',
        'Le sens de la vie est la question la plus urgente de l\'existence humaine.'
      ]
    },
    {
      title: 'L\'Existentialisme est un humanisme',
      author: 'Jean-Paul Sartre',
      year: 1946,
      type: 'BOOK' as const,
      reference: 'Conférence présentant l\'existentialisme comme philosophie de la liberté et de la responsabilité',
      quotes: [
        'L\'existence précède l\'essence.',
        'L\'homme est d\'abord une existence qui se rencontre, surgit dans le monde, et se définit après.',
        'Il n\'y a pas de nature humaine, car il n\'y a pas de Dieu pour la concevoir.',
        'En choisissant pour moi, je choisis pour tous les hommes.',
        'L\'homme est libre, l\'homme est liberté.',
        'Nous sommes seuls, sans excuse.',
        'L\'homme n\'est rien d\'autre que ce qu\'il fait de lui-même.'
      ]
    },
    {
      title: 'Ainsi parlait Zarathoustra',
      author: 'Friedrich Nietzsche',
      year: 1883,
      type: 'BOOK' as const,
      reference: 'Traité poétique sur la mort de Dieu et la création de nouvelles valeurs',
      quotes: [
        'Dieu est mort! Dieu reste mort! Et c\'est nous qui l\'avons tué!',
        'Il faut porter encore un chaos en soi pour pouvoir enfanter une étoile dansante.',
        'Je vous enseigne le surhomme. L\'homme est quelque chose qui doit être surmonté.',
        'Devenir ce que l\'on est.',
        'Crée, c\'est la grande rédemption de la souffrance.',
        'Nier la vie est le péché le plus grave.',
        'Le sens de la terre, pas de l\'au-delà.'
      ]
    },
    {
      title: 'Traité du bonheur',
      author: 'Emil Cioran',
      year: 1973,
      type: 'BOOK' as const,
      reference: 'Réflexions sur l\'absence de sens et l\'art de vivre sans illusion',
      quotes: [
        'Il faut avoir le courage de vivre sans but.',
        'Le sens de la vie est dans le fait qu\'elle n\'en a pas.',
        'Nous naissons tous des origines, nous finissons tous néant.',
        'Vivre, c\'est perdre du terrain.',
        'L\'homme est un animal qui a perdu le sens de sa propre existence.'
      ]
    },
    {
      title: 'Les Frères Karamazov',
      author: 'Fyodor Dostoevsky',
      year: 1880,
      type: 'BOOK' as const,
      reference: 'Roman sur la quête de sens, la foi et la révolte contre Dieu',
      quotes: [
        'Si Dieu n\'existe pas, tout est permis.',
        'Le mystère de l\'homme est dans sa liberté, non dans sa destinée.',
        'L\'harmonie du monde est inaccessible au cœur humain.',
        'La souffrance d\'un enfant innocent rend le monde inacceptable.',
        'La foi est le miracle de la vie éternelle.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que la question du sens dans l\'existence ?',
      back: 'La question du sens interroge la signification ou la direction de l\'existence : « Pourquoi vivons-nous ? », « Quelle est la valeur de la vie ? ». Pour les croyants, le sens est donné par Dieu. Pour les existentialistes athées, le sens est créé par la liberté humaine.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre sens donné et sens créé ?',
      back: 'Le sens donné (perspective religieuse) précède l\'existence : il vient de Dieu ou d\'un ordre transcendant, il est découvert. Le sens créé (existentialisme) succède à l\'existence : « l\'homme existe d\'abord, puis se définit », il invente son sens par ses choix. Le sens donné rassure, le sens créé responsabilise.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre résout-il la question du sens ?',
      back: 'Sartre affirme que « l\'existence précède l\'essence » : il n\'y a pas de sens donné avant que nous existions. Le sens n\'est ni là ni à trouver, il est créé par chaque homme par ses choix et engagements. Cette liberté est angoissante mais exaltante : nous sommes responsables de créer notre propre sens.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Frankl résout-il la question du sens ?',
      back: 'Frankl fonde la logothérapie sur la « volonté de sens » : la motivation première de l\'homme est de trouver un sens, même dans la souffrance. Ce sens n\'est pas donné par la raison mais découvert dans l\'existence concrète : aimer quelqu\'un, accomplir une œuvre, souffrir pour une cause. « Celui qui a un pourquoi de vivre peut supporter presque tous les comment. »',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Camus résout-il la question du sens face à l\'absurde ?',
      back: 'Camus refuse de nier l\'absurde en inventant un sens (religieux ou idéologique). Pour lui, le sens ne résout pas l\'absurde, il le nie. La réponse est la révolte : vivre sans espoir mais sans résignation, créer des valeurs humaines locales sans prétendre à un sens absolu. « La vie sera vécue mieux, sans avoir besoin de sens. »',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Frankl résume la thérapie par le sens ?',
      back: '« Celui qui a un pourquoi de vivre peut supporter presque tous les comment » (Découvrir un sens à sa vie, 1946) - Le sens rend supportable toute souffrance.',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Sartre résume l\'existentialisme ?',
      back: '« L\'existence précède l\'essence » (L\'Existentialisme est un humanisme, 1946) - L\'homme existe d\'abord, sans essence prédéterminée, et se définit ensuite par ses choix.',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Frankl, la motivation fondamentale de l\'homme est la volonté de {{sens}}.',
      back: 'sens',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Camus, « La vie sera vécue {{mieux}}, sans avoir besoin de {{sens}}. »',
      back: 'mieux | sens',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'L\'homme peut-il vivre sans sens ?',
      back: 'La question du sens se pose différemment selon les perspectives. Pour les croyants, vivre sans sens est impossible car Dieu donne un sens à toute vie. Pour les nihilistes, vivre sans sens est la vérité de la condition humaine, ce qui peut mener au désespoir (nihilisme passif). Pour Camus, on peut vivre sans sens absolu mais non sans valeurs : la révolte crée des sens locaux et humains. Pour Frankl, l\'homme ne peut pas vivre sans sens, c\'est sa « volonté de sens ». Pour Sartre, l\'homme peut vivre sans sens donné mais il doit créer le sien : la liberté n\'est pas l\'absence de sens mais la responsabilité de le créer. Vivre sans sens, ce n\'est pas vivre dans le vide mais créer des valeurs à chaque instant. Comme Sisyphe qui « doit s\'imaginer heureux », l\'homme trouve sa grandeur non dans un sens donné mais dans la révolte face à l\'absurde.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['sens', 'existentialisme', 'absurde', 'camus', 'sartre', 'frankl', 'logothérapie', 'nihilisme', 'liberté', 'responsabilité', 'valeur', 'mort']
};
