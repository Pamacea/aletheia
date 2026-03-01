/**
 * Authenticité - Concept Data
 * Mode d'existence où l'individu assume sa liberté et sa responsabilité
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'authenticite',
  name: 'Authenticité',
  slug: 'authenticite',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'L\'authenticité est le mode d\'existence où l\'individu assume pleinement sa liberté et sa responsabilité, vivant en accord avec lui-même plutôt que dans l\'illusion ou la mauvaise foi. Chez Heidegger, l\'existence authentique (Eigentlichkeit, « propreté ») s\'oppose à l\'inauthenticité (Uneigentlichkeit) du « On » (das Man) où l\'on vit selon les opinions reçues. L\'authenticité n\'est pas un état à atteindre mais une manière d\'être qui implique la « résolution » (Entschlossenheit) : se porter en avant vers sa mort, sa possibilité la plus propre. Pour Sartre, l\'authenticité est le refus de la mauvaise foi, l\'acceptation de notre condition d\'êtres libres et responsables. L\'authenticité exige le courage d\'être soi-même, non pas selon une essence prédéterminée mais comme projet à réaliser à chaque instant.',
  shortDefinition: 'Mode d\'existence où l\'individu assume sa liberté, sa responsabilité et sa mortalité',

  // ===== DÉFINITION PHILOSOPHIQUE =====
  philosophicalDefinition: {
    analysis: 'L\'authenticité se distingue de la sincérité. La sincérité est adéquation entre ce qu\'on dit et ce qu\'on pense (ne pas mentir). L\'authenticité est adéquation entre ce qu\'on est et ce qu\'on fait (ne pas se mentir à soi). Pour Heidegger, l\'authenticité est « retour à soi » (Rückkehr zu mir selbst) : l\'être-là seapproprie son existence en se portant vers sa mort. Ce « porter-devant-soi » (Vorlaufen) n\'est pas morbidité mais lucidité : l\'authentique vit sa mortalité, l\'inauthentique la fuit. Pour Sartre, l\'authenticité est refus de la mauvaise foi : reconnaître qu\'on est « condamné à être libre » sans fuite dans l\'auto-illusion. Pour Kierkegaard, l\'authenticité est « choix de soi » : se recueillir dans l\'unité d\'un projet de vie.',
    distinctions: [
      'Authenticité vs Sincérité : La sincérité est ne pas mentir aux autres. L\'authenticité est ne pas se mentir à soi.',
      'Authenticité vs Individualisme : L\'authenticité n\'est pas égoïsme. En devenant soi-même, on se découvre solidaire des autres.',
      'Authenticité vs Perfection : L\'authenticité n\'est pas un idéal à atteindre. Elle est manière d\'être, vigilance constante.'
    ],
    implications: 'L\'authenticité implique que le « soi » n\'est pas donné mais à faire. On ne « est pas » authentique, on le devient. Cette tâche est infinie : on n\'est jamais « arrivé », toujours en devenir.'
  },

  // ===== RAISONNEMENTS PHILOSOPHIQUES =====
  reasoning: [
    {
      title: 'L\'argument de la résolution',
      argument: 'Pour Heidegger, l\'authenticité est « résolution » (Entschlossenheit) : se porter en avant vers sa mort, possibilité la plus propre.',
      premises: [
        'La mort est possibilité la plus propre de l\'être-là',
        'Elle est « irréplaceable » (personne ne peut mourir à ma place)',
        'L\'inauthentique fuit sa mort (« on meurt »)',
        'L\'authentique se porte vers elle (« je meurs »)'
      ],
      conclusion: 'L\'authenticité est anticipation résolue de la mort. Cette anticipation donne son unité à l\'existence.',
      objections: [
        { philosopher: 'Sartre', objection: 'Cette analyse reste abstraite. L\'authenticité n\'est pas anticipation de la mort mais engagement concret dans le monde.' },
        { philosopher: 'Les philosophes de la vie', objection: 'L\'authenticité ne peut se fonder sur la mort. La vie est affirmation, pas anticipation de la fin.' }
      ],
      responses: [
        { philosopher: 'Heidegger', response: 'L\'anticipation de la mort n\'est pas morbide mais vivante. En anticipant ma mort, je découvre ce qui m\'importe vraiment. L\'authenticité est « souci de soi » (Sorge).' },
        { philosopher: 'Sartre', response: 'L\'anticipation heideggérienne reste contemplation. L\'authenticité est action : engagement concret pour la liberté de tous.' }
      ]
    },
    {
      title: 'L\'argument du refus de la mauvaise foi',
      argument: 'Pour Sartre, l\'authenticité est refus de la mauvaise foi. Elle reconnaît qu\'on est « condamné à être libre ».',
      premises: [
        'La mauvaise foi nie notre liberté',
        'Elle se réduit à un rôle, une chose, une essence',
        'L\'authenticité reconnaît la liberté',
        'Cette reconnaissance est « condamnation » mais aussi grandeur'
      ],
      conclusion: 'L\'authenticité est le courage d\'être soi-même sans fuite ni excuse.',
      objections: [
        { philosopher: 'Merleau-Ponty', objection: 'Cette analyse présuppose une conscience purement libre, désincarnée. L\'authenticité doit tenir compte de l\'ancrage corporel et social.' },
        { philosopher: 'Les psychanalystes', objection: 'L\'authenticité qui prétend se connaître soi-même ignore l\'inconscient. On ne peut pas être « authentique » si une partie de soi est inconsciente.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'L\'ancrage situationnel est donné mais le sens est choisi. L\'inconscient est hypokhèse qui nie la liberté. L\'authenticité est choix de soi dans la situation.' },
        { philosopher: 'Merleau-Ponty', response: 'L\'authenticité n\'est pas pure conscience mais « incarnation ». Je suis mon corps, mon histoire, non pas comme choses mais comme situations à assumer.' }
      ]
    },
    {
      title: 'L\'argument du choix de soi',
      argument: 'Pour Kierkegaard, l\'authenticité est « choix de soi » : se recueillir dans l\'unité d\'un projet de vie.',
      premises: [
        'Le mode esthétique est dispersé, sans engagement',
        'Le mode éthique est choix de soi',
        'Ce choix est dans l\'angoisse de la liberté',
        'Le désespoir est refus de devenir soi'
      ],
      conclusion: 'L\'authenticité est tâche infinie : devenir soi est un projet qui n\'est jamais terminé.',
      objections: [
        { philosopher: 'Les individualistes', objection: 'Ce « choisir soi » est narcissique. L\'authenticité devrait être ouverture aux autres, pas repli sur soi.' },
        { philosopher: 'Les religieux', objection: 'L\'authenticité véritable est devant Dieu, pas devant soi. Le « soi » est illusion, l\'authentique est perte de soi.' }
      ],
      responses: [
        { philosopher: 'Kierkegaard', response: 'Choisir soi n\'est pas narcissisme. En me choisissant moi-même, je me découvre devant Dieu. L\'authenticité est relation à soi et à l\'Absolu.' },
        { philosopher: 'Sartre', response: 'En choisissant pour moi, je choisis pour tous. L\'authenticité individuelle est universalité : j\'engage l\'humanité dans mes choix.' }
      ]
    }
  ],

  // ===== ÉTYMOLOGIE =====
  etymology: {
    greek: 'authentikos (αὐθεντικός)',
    root: 'autos : soi-même + hentes : celui qui fait',
    notes: 'Étymologiquement, ce qui vient de l\'auteur lui-même, ce qui est original, non contrefait'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Heidegger - Eigentlichkeit (propreté)',
      description: 'Dans Être et Temps (1927), Heidegger distingue l\'existence authentique (Eigentlichkeit) de l\'existence inauthentique (Uneigentlichkeit). L\'inauthenticité est la vie dans le « On » : on pense ce qu\'on pense, on fait ce qu\'on fait, on vit comme on vit. L\'authenticité est le retour à soi, la « résolution » où l\'être-là s\'approprie son existence en se portant vers sa mort. L\'authentique vit sa mortalité, l\'inauthentique la fuit.'
    },
    {
      title: 'Sartre - Authenticité vs mauvaise foi',
      description: 'Pour Sartre, l\'authenticité est le refus de la mauvaise foi (auto-illusion sur notre liberté). L\'homme authentique reconnaît qu\'il est « condamné à être libre », qu\'il n\'a pas d\'essence prédéterminée et qu\'il est totalement responsable de ses choix. La mauvaise foi consiste à se nier cette liberté (en se réduisant à un rôle, en invoquant un déterminisme). L\'authenticité est le courage d\'être « pour-soi » sans fuite.'
    },
    {
      title: 'Kierkegaard - Le choix de soi',
      description: 'Dans Ou bien... ou bien (1843), Kierkegaard oppose le mode esthétique (inauthentique, dispersé, sans engagement) au mode éthique (choix de soi, engagement). L\'individu authentique est celui qui se choisit lui-même dans l\'angoisse de la liberté, qui se « recueille » dans l\'unité d\'un projet de vie. Le désespoir est le refus de devenir soi-même.'
    },
    {
      title: 'L\'authenticité comme projet',
      description: 'L\'authenticité n\'est pas un état définitif mais un projet constant. On n\'est pas authentique une fois pour toutes, on le devient à chaque instant par ses choix. L\'authenticité est « vigilance » : attention à soi, refus de la complaisance, courage de reconnaître ses contradictions et ses échecs. Elle est l\'exigence de cohérence entre ce que l\'on est et ce que l\'on fait.'
    },
    {
      title: 'Authenticité et solitude',
      description: 'L\'existence authentique est solitaire car elle exige de se détacher du « On », de l\'opinion commune, des rassurements de groupe. Celui qui devient authentique éprouve une « désolation » (Heidegger) mais c\'est dans cette solitude qu\'il peut se choisir soi-même. La solitude authentique n\'est pas l\'isolement mais la condition de la rencontre véritable avec autrui.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    {
      name: 'Martin Heidegger',
      period: '1889-1976',
      contribution: 'Analyse systématique de l\'authenticité (Eigentlichkeit) dans Être et Temps (1927). Distinction entre authenticité et inauthenticité du « On » (das Man). La « résolution » comme mode d\'être authentique.',
      works: ['Être et Temps', 'Qu\'est-ce que la métaphysique?', 'De l\'essence de la vérité'],
      quotes: [
        '« Le « On » est l\'être-le-plus-proche de l\'être-là. »',
        '« Le « On » divise toute décision authentique. »',
        '« L\'être-là authentique est celui qui se porte en avant vers sa mort. »',
        '« La résolution est le mode d\'être authentique de l\'être-là. »'
      ]
    },
    {
      name: 'Jean-Paul Sartre',
      period: '1905-1980',
      contribution: 'L\'authenticité comme refus de la mauvaise foi dans L\'Être et le Néant (1943). L\'homme authentique reconnaît qu\'il est « condamné à être libre ».',
      works: ['L\'Être et le Néant', 'L\'Existentialisme est un humanisme'],
      quotes: [
        '« L\'homme est condamné à être libre. »',
        '« La mauvaise foi est le refus de reconnaître notre liberté. »',
        '« L\'existence précède l\'essence. »',
        '« L\'homme authentique est celui qui assume sa condition. »'
      ]
    },
    {
      name: 'Søren Kierkegaard',
      period: '1813-1855',
      contribution: 'Le choix de soi comme acte authentique dans Ou bien... ou bien (1843). Opposition du mode esthétique (inauthentique) et du mode éthique (authentique).',
      works: ['Ou bien... ou bien', 'Le Concept de l\'angoisse', 'Traité du désespoir'],
      quotes: [
        '« Le moi est une relation qui se rapporte à elle-même. »',
        '« Devenir soi est la tâche de la vie. »',
        '« Choisir soi-même est la décision la plus profonde. »',
        '« Le désespoir est le péché. »'
      ]
    },
    {
      name: 'Friedrich Nietzsche',
      period: '1844-1900',
      contribution: '« Devenir ce que l\'on est » : l\'authenticité comme création de soi dans Ainsi parlait Zarathoustra (1883). Le surhomme comme œuvre d\'art de soi.',
      works: ['Ainsi parlait Zarathoustra', 'Généalogie de la morale', 'Ecce Homo'],
      quotes: [
        '« Devenir ce que l\'on est. »',
        '« Il faut porter encore un chaos en soi pour pouvoir enfanter une étoile dansante. »',
        '« Deviens qui tu es. »',
        '« Crée, c\'est la grande rédemption de la souffrance. »'
      ]
    },
    {
      name: 'Simone de Beauvoir',
      period: '1908-1986',
      contribution: 'L\'authenticité comme refus des justifications et des excuses dans Pour une morale de l\'ambiguïté (1947). L\'homme est « libre mais situé ».',
      works: ['Pour une morale de l\'ambiguïté', 'Le Deuxième Sexe'],
      quotes: [
        '« L\'homme est libre, mais il est situé. »',
        '« L\'authenticité est refus des excuses et des justifications. »',
        '« La liberté est la source de toute valeur. »',
        '« Je veux être moi et être le monde. »'
      ]
    }
  ],

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      name: 'Mauvaise foi',
      type: 'OPPOSES',
      description: 'L\'authenticité est le refus de la mauvaise foi. L\'authentique reconnaît sa liberté, l\'inauthentique la nie.',
      bidirectional: true
    },
    {
      name: 'Angoisse',
      type: 'REVEALS',
      description: 'L\'angoisse est disposition qui nous ouvre à l\'authenticité. Elle nous arrache à l\'inauthenticité du « On ».',
      bidirectional: true
    },
    {
      name: 'Liberté',
      type: 'REQUIRES',
      description: 'L\'authenticité exige la reconnaissance de notre liberté absolue. Elle est le courage d\'être libre.',
      bidirectional: true
    },
    {
      name: 'Mort',
      type: 'RELATES_TO',
      description: 'Pour Heidegger, l\'authenticité est anticipation de sa mort, possibilité la plus propre. L\'inauthentique fuit sa mort.',
      bidirectional: true
    },
    {
      name: 'Responsabilité',
      type: 'REQUIRES',
      description: 'L\'authenticité exige d\'assumer sa responsabilité totale. L\'inauthentique cherche des excuses.',
      bidirectional: true
    },
    {
      name: '« On » (das Man)',
      type: 'OPPOSES',
      description: 'Le « On » est la structure de l\'inauthenticité. L\'authentique se détache du « On » pour vivre ses propres choix.',
      bidirectional: true
    },
    {
      name: 'Sincérité',
      type: 'DISTINCT_FROM',
      description: 'La sincérité est adéquation entre ce qu\'on dit et ce qu\'on pense (ne pas mentir aux autres). L\'authenticité est adéquation entre ce qu\'on est et ce qu\'on fait (ne pas se mentir à soi).',
      bidirectional: true
    },
    {
      name: 'Identité',
      type: 'EXPRESSES',
      description: 'L\'authenticité est devenir soi-même, accomplissement de l\'identité comme projet. L\'inauthentique se dissout dans le « On ».',
      bidirectional: true
    },
    {
      conceptId: 'etre',
      relation: 'APPROPRIATES',
      explanation: 'L\'authenticité est le mode où l\'être-là s\'approprie son être au lieu de le vivre dans le « On ». Pour Heidegger, l\'authentique est « retour à soi » de l\'être.',
      bidirectional: true,
      category: 'metaphysique'
    },
    {
      conceptId: 'existence',
      relation: 'MODE_OF',
      explanation: 'L\'authenticité est le mode d\'existence où l\'individu assume sa liberté et sa responsabilité. L\'existence authentique vs inauthentique.',
      bidirectional: true,
      category: 'metaphysique'
    },
    {
      conceptId: 'connaissance',
      relation: 'LIMITS',
      explanation: 'L\'authenticité se vit plus qu\'elle ne se connaît. Pour Kierkegaard, la connaissance systématique ne peut capturer l\'existence authentique.',
      bidirectional: true,
      category: 'epistemologie'
    },
    {
      conceptId: 'verite',
      relation: 'ALIGNMENT',
      explanation: 'L\'authenticité est adéquation entre ce qu\'on est et ce qu\'on fait. Ce n\'est pas seulement dire vrai (sincérité) mais être vrai (authenticité).',
      bidirectional: true,
      category: 'epistemologie'
    },
    {
      conceptId: 'bien',
      relation: 'MORAL',
      explanation: 'L\'authenticité est une valeur morale : être fidèle à soi-même. Pour Nietzsche, devenir ce qu\'on est est la tâche éthique suprême.',
      bidirectional: true,
      category: 'ethique'
    }
  ],

  // ===== COURANTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      name: 'Ontologie fondamentale',
      description: 'L\'authenticité comme Eigentlichkeit de l\'être-là. Distinction entre authenticité et inauthenticité du « On ».',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Martin Heidegger', 'Karl Jaspers']
    },
    {
      name: 'Existentialisme sartrien',
      description: 'L\'authenticité comme refus de la mauvaise foi et acceptation de la liberté absolue.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Jean-Paul Sartre', 'Simone de Beauvoir']
    },
    {
      name: 'Existentialisme kierkegaardien',
      description: 'L\'authenticité comme choix de soi et engagement dans l\'existence. Opposition esthétique/éthique.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Søren Kierkegaard', 'Gabriel Marcel']
    },
    {
      name: 'Philosophie de la vie',
      description: 'L\'authenticité comme création de soi et affirmation de la vie. Devenir ce que l\'on est.',
      role: 'RELATED',
      keyPhilosophers: ['Friedrich Nietzsche', 'Henri Bergson']
    },
    {
      name: 'Stoïcisme',
      description: 'L\'authenticité comme accord avec la nature rationnelle et « vivre selon soi » (secundum naturam vivere).',
      role: 'PRECEDES',
      keyPhilosophers: ['Épictète', 'Marc Aurèle', 'Sénèque']
    }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le « On » selon Heidegger : « On » pense que le travail est important, « on » s\'indigne des scandales, « on » vote comme tout le monde. Le vivre selon le « On » est inauthentique car on ne s\'approprie pas ses pensées et actions. L\'authentique pense et agit en son nom propre.',
    'Le garçon de café chez Sartre : Le serveur qui joue à être garçon de café avec une rigueur excessive (gestes appris, attitude de serviteur parfait) est dans la mauvaise foi. Il se réduit à sa fonction pour fuir sa liberté d\'être autre chose. L\'authentique serait de reconnaître qu\'il est libre de ne pas être garçon de café.',
    'L\'artiste vs le technicien : L\'artiste authentique crée selon sa vision personnelle, risquant l\'incompréhension. Le technicien inauthentique produit selon les normes du marché, se cachant dans la « nécessité » économique. La différence n\'est pas dans la qualité mais dans l\'appropriation de l\'acte créateur.',
    'Le mariage de convenance : La personne qui se marie par conformisme social (« c\'est l\'âge », « il faut se marier ») est dans l\'inauthenticité. L\'authentique se marie (ou non) en son nom propre, en assumant sa décision sans se référer à la norme extérieure.',
    'Le militant sincère vs le conformiste : Le militant authentique engage sa liberté dans une cause qu\'il s\'est appropriée. Il peut reconnaître les limites de son engagement, voire s\'en détourner. Le conformiste suit le mouvement par peur d\'être exclu, sans s\'approprier son action.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Œuvre majeure sur l\'authenticité (Eigentlichkeit) et le « On » (das Man)',
      quotes: [
        'Le « On » est l\'être-le-plus-proche de l\'être-là.',
        'Le « On » divise toute décision authentique.',
        'L\'être-là authentique est celui qui se porte en avant vers sa mort.',
        'La résolution est le mode d\'être authentique de l\'être-là.',
        'L\'authenticité est le retour à soi de l\'être-là.',
        'Le « On » dit : on meurt, car chaque individu se meurt - mais effectivement on ne meurt pas.',
        'L\'angoisse est la disposition par laquelle nous nous ouvrons à l\'authenticité.'
      ]
    },
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Traité sur la mauvaise foi, la liberté et l\'authenticité existentielle',
      quotes: [
        'L\'homme est condamné à être libre.',
        'La mauvaise foi est le refus de reconnaître notre liberté.',
        'L\'existence précède l\'essence.',
        'L\'homme authentique est celui qui assume sa condition.',
        'Nous sommes une liberté qui choisit.',
        'Le pour-soi est conscience de soi et liberté.',
        'La mauvaise foi est un mensonge à soi-même.'
      ]
    },
    {
      title: 'Ou bien... ou bien',
      author: 'Søren Kierkegaard',
      year: 1843,
      type: 'BOOK' as const,
      reference: 'Traités sur les modes d\'existence esthétique (inauthentique) et éthique (authentique)',
      quotes: [
        'Le moi est une relation qui se rapporte à elle-même.',
        'Le désespoir est le péché.',
        'Devenir soi est la tâche de la vie.',
        'Choisir soi-même est la décision la plus profonde.',
        'L\'angoisse est le vertige de la liberté.',
        'Le mariage est le premier acte authentique de la vie éthique.'
      ]
    },
    {
      title: 'Le Malaise dans la culture',
      author: 'Sigmund Freud',
      year: 1929,
      type: 'BOOK' as const,
      reference: 'Essai sur le conflit entre pulsions individuelles et exigences sociales',
      quotes: [
        'La culture exige la renonciation pulsionnelle.',
        'Le sentiment de culpabilité est la conscience de la faute.',
        'Le surmoi est l\'héritier du complexe d\'Œdipe.'
      ]
    },
    {
      title: 'Pour une morale de l\'ambiguïté',
      author: 'Simone de Beauvoir',
      year: 1947,
      type: 'BOOK' as const,
      reference: 'Essai sur l\'authenticité morale et la responsabilité existentielle',
      quotes: [
        'On ne naît pas femme, on le devient.',
        'L\'homme est libre, mais il est situé.',
        'La liberté est la source de toute valeur.',
        'L\'authenticité est refus des excuses et des justifications.',
        'Je veux être moi et être le monde.',
        'L\'oppression est le refus de la liberté d\'autrui.'
      ]
    },
    {
      title: 'Ainsi parlait Zarathoustra',
      author: 'Friedrich Nietzsche',
      year: 1883,
      type: 'BOOK' as const,
      reference: 'Traité poétique sur la création de soi comme œuvre d\'art',
      quotes: [
        'Devenir ce que l\'on est.',
        'Il faut porter encore un chaos en soi pour pouvoir enfanter une étoile dansante.',
        'Je vous enseigne le surhomme.',
        'Crée, c\'est la grande rédemption de la souffrance.',
        'Devient qui tu es.',
        'L\'homme est une corde entre la bête et le surhomme.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que l\'authenticité selon Heidegger ?',
      back: 'L\'authenticité (Eigentlichkeit) est le mode d\'existence où l\'être-là s\'approprie son existence en se portant vers sa mort. Elle s\'oppose à l\'inauthenticité du « On » où l\'on vit selon l\'opinion commune sans assumer ses choix.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre authenticité et inauthenticité ?',
      back: 'L\'authenticité est l\'existence assumée : on vit ses propres choix, on pense par soi-même, on se porte vers sa mort. L\'inauthenticité est la vie dans le « On » : on pense ce qu\'on pense, on fait ce qu\'on fait, on fuit sa liberté dans la conformité. L\'inauthentique est « dispersé », l\'authentique est « rassemblé » dans la résolution.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Heidegger définit-il le « On » (das Man) ?',
      back: 'Le « On » est l\'être-le-plus-proche de l\'être-là quotidien : c\'eest l\'opinion publique, les normes sociales, la manière « dont on fait les choses ». Le « On » divise toute décision authentique en nous déchargeant de notre responsabilité. Vivre selon le « On », c\'est fuir sa propre existence.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre relie-t-il authenticité et mauvaise foi ?',
      back: 'Pour Sartre, l\'authenticité est le refus de la mauvaise foi. La mauvaise foi est l\'auto-illusion par laquelle on nie sa liberté (en se réduisant à un rôle, en invoquant un déterminisme). L\'authentique reconnaît qu\'il est « condamné à être libre » et assume cette liberté sans fuite.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Nietzsche résume le projet authentique ?',
      back: '« Devenir ce que l\'on est » (Also sprach Zarathoustra, 1883) - L\'authenticité n\'est pas découvrir une essence mais se créer soi-même comme œuvre.',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Sartre résume la condition authentique ?',
      back: '« L\'homme est condamné à être libre » (L\'Être et le Néant, 1943) - L\'authenticité est d\'accepter cette condamnation sans fuite dans la mauvaise foi.',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Heidegger, l\'inauthenticité est la vie dans le {{On}} (das {{Man}}).',
      back: 'On | Man',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'L\'authenticité est-elle un état à atteindre ou un projet constant ?',
      back: 'L\'authenticité n\'est pas un état définitif mais un projet constant. On n\'est pas authentique une fois pour toutes, on le devient à chaque instant par ses choix. Heidegger parle de « résolution » : décision de se porter vers sa mort, possibilité la plus propre. Sartre souligne que nous sommes « condamnés à être libres » : chaque instant est un choix, donc une occasion d\'authenticité ou de mauvaise foi. Kierkegaard décrit le « choix de soi » comme acte fondateur qui doit être sans cesse réitéré. L\'authenticité est vigilance, courage d\'être soi-même sans cesse menacé par la facilité du « On ».',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['authenticité', 'heidegger', 'sartre', 'kierkegaard', 'mauvaise foi', 'liberté', 'mort', 'responsabilité', 'pour-soi', 'en-soi', 'existentiel']
};
