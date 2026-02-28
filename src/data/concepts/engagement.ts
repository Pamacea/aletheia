/**
 * Engagement - Concept Data
 * Concrétisation de la liberté dans l'action et responsabilité envers tous les hommes
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'engagement',
  name: 'Engagement',
  slug: 'engagement',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'L\'engagement est l\'acte par lequel la liberté se concrétise dans le monde en choisissant une orientation et en assumant la responsabilité de ce choix. Pour Sartre, "en choisissant pour moi, je choisis pour tous les hommes" : chaque choix personnel engage l\'humanité entière car il affirme une conception de l\'homme. L\'engagement n\'est ni adhésion aveugle à une cause ni activisme aveugle, mais décision lucide prenant en compte sa responsabilité universelle. L\'écrivain engagé, par exemple, ne fait pas de propagande mais révèle le monde pour le transformer. L\'engagement est la réponse existentialiste à l\'angoisse de la liberté : loin d\'être paralysé par sa responsabilité, l\'homme s\'engage et, par cet engagement, se donne une essence tout en affirmant la valeur de son choix pour tous.',
  shortDefinition: 'Concrétisation de la liberté dans l\'action, engageant sa responsabilité envers tous les hommes',

  // ===== DÉFINITION PHILOSOPHIQUE =====
  philosophicalDefinition: {
    analysis: 'L\'engagement sartrien repose sur deux piliers : l\'unité de la liberté et l\'universalisation du choix. D\'abord, la liberté n\'est pas contemplation mais action : l\'homme est "faire" et se définit par ses actes, non par ses rêves ou intentions. Ensuite, chaque choix engage l\'humanité car il affirme implicitement une valeur. En choisissant le courage plutôt que la lâcheté, j\'affirme que le courage est une valeur et, par là, je "veux" que tous les hommes choisissent le courage. L\'engagement n\'est pas sacrifice de sa liberté mais affirmation de celle-ci : je m\'engage parce que je suis libre et cette liberté se réalise dans l\'action. L\'engagement authentique se distingue de l\'activisme (action sans réflexion) et du parti-pris (soumission à une doctrine).',
    distinctions: [
      'Engagement vs Parti-pris : Le parti-pris est soumission à une doctrine. L\'engagement est choix lucide assumant sa responsabilité.',
      'Engagement vs Activisme : L\'activisme est action aveugle. L\'engagement est action réfléchie, consciente de ses enjeux.',
      'Engagement vs Propagande : La propagande manipule. L\'engagement révèle le monde pour qu\'il soit librement transformé.',
      'Engagement vs Militantisme : Le militantisme peut être aveuglement. L\'engagement exige lucidité et distance critique.'
    ],
    implications: 'L\'engagement transforme l\'angoisse de la liberté en action responsable. Il affirme que la liberté n\'est pas abstraction métaphysique mais concrétisation dans le monde. Choisir, c\'est se choisir et, en même temps, choisir une image de l\'homme que j\'affirme comme valable pour tous.'
  },

  // ===== RAISONNEMENTS PHILOSOPHIQUES =====
  reasoning: [
    {
      title: 'L\'argument de l\'universalisation du choix',
      argument: 'Pour Sartre, chaque choix personnel engage l\'humanité entière car il affirme une conception de l\'homme.',
      premises: [
        'L\'existence précède l\'essence : il n\'y a pas de nature humaine donnée',
        'En choisissant, je me donne une essence (je deviens ce que je choisis)',
        'Mon choix affirme une valeur (ce que je choisis, je l\'affirme comme bon)',
        'En affirmant une valeur pour moi, je l\'affirme comme valable pour tous'
      ],
      conclusion: 'En choisissant pour moi, je choisis pour tous les hommes. Ma liberté est responsabilité universelle.',
      objections: [
        { philosopher: 'Les relativistes', objection: 'Choisir pour soi n\'engage pas les autres. Chacun ses valeurs, pas d\'universalité possible.' },
        { philosopher: 'Les subjectivistes', objection: 'Mes choix sont personnels, ils ne définissent pas l\'humanité. C\'est prétentieux de croire que mes choix engagent tous les hommes.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'Le relativisme est lui-même un choix absolu. Dire "il n\'y a pas de valeurs universelles" est affirmer cette proposition comme universelle. Je suis responsable de mon image de l\'homme et cette image, je la propose à tous.' },
        { philosopher: 'de Beauvoir', response: 'Notre liberté est située mais nos choix, quoique situés, engagent une conception de l\'homme. Refuser de choisir est encore un choix qui engage.' }
      ]
    },
    {
      title: 'L\'argument de la liberté comme action',
      argument: 'La liberté n\'est pas contemplation mais concrétisation dans le monde. L\'engagement est réalisation de la liberté.',
      premises: [
        'L\'homme est existence, non essence : il est "faire", pas "être"',
        'La liberté n\'existe que dans les choix concrets',
        'Un choix non réalisé n\'est pas un choix',
        'S\'engager, c\'est choisir dans le monde'
      ],
      conclusion: 'L\'engagement est la réalisation de la liberté. Sans engagement, la liberté est abstraction vide.',
      objections: [
        { philosopher: 'Les contemplatifs', objection: 'La liberté peut être intérieure, spirituelle. L\'engagement dans le monde est contingence, pas nécessité.' },
        { philosopher: 'Les esthètes', objection: 'L\'artiste contemplatif est aussi libre que l\'homme engagé. La beauté désintéressée est forme de liberté.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'La contemplation est déjà engagement : elle affirme que la beauté vaut plus que l\'action. Ce refus de choisir est un choix qui engage. Il n\'y a pas de neutralité possible.' },
        { philosopher: 'Camus', response: 'La création artistique est engagement. L\'écrivain ne peut pas ne pas témoigner, même par son silence. Ce silence est aussi un choix.' }
      ]
    },
    {
      title: 'L\'argument de la responsabilité intellectuelle',
      argument: 'L\'intellectuel a responsabilité particulière : ses choix (mots, idées) engagent le monde de façon spécifique.',
      premises: [
        'Les mots agissent sur le monde',
        'L\'écrivain ou intellectuel a public',
        'En publiant, il propose au monde sa vision',
        'Cette vision influence les choix des autres'
      ],
      conclusion: 'L\'intellectuel ne peut pas ne pas s\'engager. Son "neutre" est encore position qui engage.',
      objections: [
        { philosopher: 'L\'art pour l\'art', objection: 'La beauté pure existe. L\'art n\'a pas à s\'engager, il doit être désintéressé.' },
        { philosopher: 'Les formalistes', objection: 'La forme prime sur le fond. L\'engagement politise l\'art et le dénature.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'La "prose" est engagement par essence. En écrivant, je dévoile le monde pour le transformer. Le refus de s\'engager est encore engagement (complicité avec l\'ordre établi).' },
        { philosopher: 'Zola', objection: '"J\'accuse" montre que l\'écrivain a pouvoir de dévoiler et donc de transformer. Ce pouvoir est responsabilité.' }
      ]
    }
  ],

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'in + gage (gage, caution)',
    greek: '',
    root: 'in-gagium : engagement, promesse sous serment',
    notes: 'Étymologiquement, l\'engagement est promesse, mise en gage de soi. Le "gagium" germanique (gage) désigne ce qu\'on donne en caution, en garantie de sa parole.'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Sartre - L\'engagement existentialiste',
      description: 'Dans L\'Existentialisme est un humanisme (1946), Sartre formule le principe de l\'engagement : "En choisissant pour moi, je choisis pour tous les hommes". Chaque choix personnel affirme une valeur que je propose à l\'humanité entière. L\'engagement n\'est pas sacrifice de sa liberté mais sa réalisation : ma liberté se concrétise dans mes actes. L\'engagement transforme l\'angoisse en action responsable.'
    },
    {
      title: 'Sartre - L\'engagement littéraire',
      description: 'Dans Qu\'est-ce que la littérature? (1948), Sartre développe la théorie de la "littérature engagée". Pour Sartre, l\'écrivain est "appelé" : par ses mots, il dévoile le monde pour que le lecteur puisse le transformer. La littérature n\'est pas contemplation mais action : écrire, c\'s\'agir pour changer le monde. Le "silence" de l\'écrivain est aussi un choix qui engage (complicité).'
    },
    {
      title: 'Simone de Beauvoir - L\'engagement moral',
      description: 'Dans Pour une morale de l\'ambiguïté (1947), Simone de Beauvoir développe une éthique de l\'engagement fondée sur l\'ambiguïté de la condition humaine. L\'homme est à la fois liberté et situé, transcendant et immergé. L\'engagement moral reconnaît cette ambiguïté : je m\'engage en assumant ma liberté située, en voulant la liberté d\'autrui comme condition de la mienne.'
    },
    {
      title: 'Camus - L\'engagement révolté',
      description: 'Dans L\'Homme révolté (1951), Camus analyse la révolte comme engagement originaire : dire "non" à l\'injustice, c\'affirmer une valeur commune à tous les hommes. La révolte n\'est pas égoïsme mais affirmation d\'une limite qu\'aucun homme ne doit franchir. Cet engagement se distingue de la révolution totale qui nie la liberté d\'autrui.'
    },
    {
      title: 'Heidegger - La résolution (Entschlossenheit)',
      description: 'Dans Être et Temps (1927), Heidegger analyse la "résolution" comme mode d\'existence authentique. Résoudre, c\'est se porter en avant vers sa mort, choisir soi-même en assumant son être-jeté. Cette résolution n\'est pas programme d\'action mais ouverture à l\'appel de la conscience. L\'engagement heideggérien est ontologique plus que politique.'
    },
    {
      title: 'Jaspers - La communication',
      description: 'Pour Karl Jaspers, l\'engagement se réalise dans la "communication existentielle" : dialogue où je m\'expose à autrui sans me dissimuler. Cette communication est engagement de ma liberté dans la relation à l\'autre. Elle se distingue de la simple transmission d\'informations : elle est risque de soi.'
    },
    {
      title: 'L\'engagement politique contemporain',
      description: 'L\'engagement aujourd\'hui peut prendre de multiples formes : militantisme associatif, engagement écologique, activisme numérique. Ce qui distingue l\'engagement authentique de l\'activisme est la lucidité : l\'homme engagé sait pourquoi il s\'engage, assume les conséquences, reste critique de sa propre action.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    {
      name: 'Jean-Paul Sartre',
      period: '1905-1980',
      contribution: 'Théorie de l\'engagement comme concrétisation de la liberté et responsabilité universelle. Auteur de Qu\'est-ce que la littérature? et L\'Existentialisme est un humanisme.',
      works: ['L\'Existentialisme est un humanisme', 'Qu\'est-ce que la littérature?', 'Les Mots', 'Les Chemins de la liberté'],
      quotes: [
        '« En choisissant pour moi, je choisis pour tous les hommes. »',
        '« L\'existence précède l\'essence. »',
        '« La fonction d\'un écrivain est de faire appel pour que le monde, par sa transformation, devienne plus vrai. »',
        '« Il n\'y a pas de spéculation contemplative : la liberté est action. »',
        '« Je suis responsable de tout, sauf de ma responsabilité elle-même. »',
        '« L\'homme n\'est rien d\'autre que ce qu\'il se fait. »'
      ]
    },
    {
      name: 'Simone de Beauvoir',
      period: '1908-1986',
      contribution: 'Éthique de l\'engagement fondée sur l\'ambiguïté de la condition humaine. La liberté d\'autrui comme condition de ma liberté.',
      works: ['Pour une morale de l\'ambiguïté', 'Le Deuxième Sexe', 'Mémoires d\'une jeune fille rangée'],
      quotes: [
        '« Il faut vouloir la liberté d\'autrui comme condition de ma propre liberté. »',
        '« On ne naît pas femme, on le devient. »',
        '« L\'homme est située : il est à la fois liberté et chose. »',
        '« S\'engager, c\'assumer sa condition ambiguë. »',
        '« La liberté est le premier bien, la dernière fin. »'
      ]
    },
    {
      name: 'Albert Camus',
      period: '1913-1960',
      contribution: 'La révolte comme engagement originaire contre l\'injustice. Distinction entre révolte (limitée) et révolution totale.',
      works: ['L\'Homme révolté', 'L\'Étranger', 'La Peste', 'La Chute'],
      quotes: [
        '« Je me révolte, donc nous sommes. »',
        '« La révolte est l\'affirmation d\'un limite commune à tous les hommes. »',
        '« Dire non à l\'injustice, c\'affirmer une valeur. »',
        '« L\'homme révolté dit non et affirme. »'
      ]
    },
    {
      name: 'Martin Heidegger',
      period: '1889-1976',
      contribution: 'La résolution (Entschlossenheit) comme mode d\'existence authentique. Ouverture à l\'appel de la conscience.',
      works: ['Être et Temps', 'Qu\'est-ce que la métaphysique?', 'Lettre sur l\'humanisme'],
      quotes: [
        '« La résolution est le mode d\'existence authentique. »',
        '« L\'être-là se porte en avant vers sa mort. »',
        '« La conscience appelle l\'être-là à sa propre possibilité. »',
        '« Le « On » nous fuit toujours l\'angoisse de la résolution. »'
      ]
    },
    {
      name: 'Karl Jaspers',
      period: '1883-1969',
      contribution: 'La communication existentielle comme engagement dans la relation à autrui. Les situations-limites comme révélations.',
      works: ['Philosophie', 'La Question de la culpabilité', 'Introduction à la philosophie'],
      quotes: [
        '« La communication existentielle est risque de soi. »',
        '« Les situations-limites révèlent l\'existence. »',
        '« L\'engagement est réponse à l\'appel de l\'existence. »',
        '« La vérité est communication. »'
      ]
    },
    {
      name: 'Émile Zola',
      period: '1840-1902',
      contribution: 'L\'intellectuel comme témoin engagé. "J\'accuse" comme exemple d\'engagement littéraire et politique.',
      works: ['J\'accuse...!', 'Germinal', 'Les Rougon-Macquart'],
      quotes: [
        '« J\'accuse...! »',
        '« La vérité est une torche qui luit dans le brouillard. »',
        '« Une œuvre d\'art est un coin de la création vu à travers un tempérament. »'
      ]
    }
  ],

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      name: 'Liberté',
      type: 'REALIZES',
      description: 'L\'engagement est la réalisation de la liberté dans le monde. La liberté n\'est pas contemplation mais action.',
      bidirectional: true
    },
    {
      name: 'Responsabilité',
      type: 'ASSUMES',
      description: 'L\'engagement assume la responsabilité universelle : en choisissant pour moi, je choisis pour tous.',
      bidirectional: true
    },
    {
      name: 'Authenticité',
      type: 'MANIFESTS',
      description: 'L\'engagement authentique se distingue de l\'activisme par la lucidité et la distance critique.',
      bidirectional: true
    },
    {
      name: 'Angoisse',
      type: 'TRANSFORMS',
      description: 'L\'engagement transforme l\'angoisse de la liberté en action responsable.',
      bidirectional: true
    },
    {
      name: 'Choix',
      type: 'CONCRETIZES',
      description: 'Le choix est le moment de l\'engagement : en choisissant, je m\'engage et j\'engage l\'humanité.',
      bidirectional: true
    },
    {
      name: 'Action',
      type: 'MANIFESTS_IN',
      description: 'L\'engagement se manifeste dans l\'action. La liberté est "faire", pas "être".',
      bidirectional: false
    },
    {
      name: 'Mort',
      type: 'RELATES_TO',
      description: 'Chez Heidegger, la résolution (engagement) est être-pour-la-mort : se porter en avant vers sa possibilité la plus propre.',
      bidirectional: true
    }
  ],

  // ===== COURANTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      name: 'Existentialisme',
      description: 'L\'engagement est concrétisation de la liberté et responsabilité envers tous les hommes.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Albert Camus', 'Martin Heidegger', 'Karl Jaspers']
    },
    {
      name: 'Littérature engagée',
      description: 'Courant littéraire où l\'écrivain utilise son art pour transformer le monde.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Albert Camus', 'Émile Zola']
    },
    {
      name: 'Phénoménologie',
      description: 'L\'engagement comme mode d\'existence du Dasein. La résolution comme disposition.',
      role: 'RELATED',
      keyPhilosophers: ['Martin Heidegger', 'Jean-Paul Sartre', 'Maurice Merleau-Ponty']
    },
    {
      name: 'Philosophie politique',
      description: 'L\'engagement comme responsabilité citoyenne et participation au monde commun.',
      role: 'RELATED',
      keyPhilosophers: ['Hannah Arendt', 'Albert Camus', 'Jean-Paul Sartre']
    }
  ],

  // ===== EXEMPLES =====
  examples: [
    'L\'engagement d\'Émile Zola dans l\'affaire Dreyfus : En publiant "J\'accuse...!" dans L\'Aurore en 1898, Zola prend le risque de la prison pour dénoncer une injustice judiciaire. Son geste engage l\'intellectuel comme témoin de la vérité contre le pouvoir.',
    'L\'engagement littéraire de Sartre : Pendant la Seconde Guerre mondiale, Sartre choisit de rester à Paris et d\'écrire. Pour lui, ce n\'est pas neutralité mais engagement : écrire, c\'est agir. Après-guerre, il théorise la "littérature engagée" dans Qu\'est-ce que la littérature?.',
    'L\'engagement féministe de Simone de Beauvoir : Dans Le Deuxième Sexe (1949), Beauvoir analyse la condition des femmes et propose une éthique de la liberté réciproque. Son œuvre engage le féminisme philosophique et politique.',
    'L\'engagement anti-colonial de Camus : Journaliste à Alger, Camus dénonce la misère et l\'injustice coloniale. Dans L\'Homme révolté, il théorise un engagement révolté qui refuse la violence totalitaire.',
    'L\'engagement écologique contemporain : Aujourd\'hui, s\'engager pour le climat, c\'est choisir un mode de vie (alimentation, transport, consommation) qui affirme une valeur : la préservation de la planète. Ce choix personnel engage, pour celui qui s\'engage, une conception de l\'humanité responsable de son environnement.',
    'L\'engagement associatif : Bénévole dans une association, la personne s\'engage sans rémunération. Cet engagement assume une responsabilité envers autrui et affirme que la solidarité est une valeur universelle.',
    'La résolution heideggérienne : Pour Heidegger, l\'existence authentique est "résolution" : se porter en avant vers sa mort en assumant son être-jeté. Cet engagement ontologique n\'est pas programme d\'action mais ouverture à l\'appel de la conscience.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'L\'Existentialisme est un humanisme',
      author: 'Jean-Paul Sartre',
      year: 1946,
      type: 'BOOK' as const,
      reference: 'Conférence présentant l\'existentialisme et le principe de l\'engagement',
      quotes: [
        'L\'existence précède l\'essence.',
        'En choisissant pour moi, je choisis pour tous les hommes.',
        'L\'homme est d\'abord une existence qui se rencontre, surgit dans le monde, et se définit après.',
        'L\'homme est responsable de sa passion.',
        'Il n\'y a pas de nature humaine, car il n\'y a pas de Dieu pour la concevoir.',
        'L\'homme n\'est rien d\'autre que ce qu\'il se fait.',
        'L\'homme est condamné à être libre.'
      ]
    },
    {
      title: 'Qu\'est-ce que la littérature?',
      author: 'Jean-Paul Sartre',
      year: 1948,
      type: 'BOOK' as const,
      reference: 'Traité théorique sur la littérature engagée et la responsabilité de l\'écrivain',
      quotes: [
        'La fonction d\'un écrivain est de faire appel pour que le monde, par sa transformation, devienne plus vrai.',
        'L\'écrivain est en situation : ses mots ont un poids.',
        'La prose est engagement par essence.',
        'Le silence de l\'écrivain est encore un choix.',
        'Écrire, c\'s\'agir pour changer le monde.',
        'Le lecteur est collaborateur de l\'écrivain.',
        'La littérature est dévoilement du monde.'
      ]
    },
    {
      title: 'Pour une morale de l\'ambiguïté',
      author: 'Simone de Beauvoir',
      year: 1947,
      type: 'BOOK' as const,
      reference: 'Essai d\'éthique existentialiste sur l\'engagement moral',
      quotes: [
        'Il faut vouloir la liberté d\'autrui comme condition de ma propre liberté.',
        'L\'homme est située : il est à la fois liberté et chose.',
        'S\'engager, c\'assumer sa condition ambiguë.',
        'La liberté est le premier bien, la dernière fin.',
        'On ne peut pas vouloir la liberté pour soi et la refuser aux autres.',
        'L\'ambiguïté de la condition humaine est donnée, l\'engagement est choix.'
      ]
    },
    {
      title: 'L\'Homme révolté',
      author: 'Albert Camus',
      year: 1951,
      type: 'BOOK' as const,
      reference: 'Essai sur la révolte comme engagement contre l\'injustice',
      quotes: [
        'Je me révolte, donc nous sommes.',
        'La révolte est l\'affirmation d\'un limite commune à tous les hommes.',
        'Dire non à l\'injustice, c\'affirmer une valeur.',
        'L\'homme révolté dit non et affirme.',
        'La révolte naît de l\'homme et de lui seul.',
        'Le révolté dit non et affirme en même temps.'
      ]
    },
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Œuvre majeure sur l\'être-pour-la-mort et la résolution comme engagement authentique',
      quotes: [
        'La résolution est le mode d\'existence authentique.',
        'L\'être-là se porte en avant vers sa mort.',
        'La conscience appelle l\'être-là à sa propre possibilité.',
        'Le « On » nous fuit toujours l\'angoisse de la résolution.',
        'L\'être-pour-la-mort est l\'être le plus propre de l\'être-là.',
        'La résolution est être-en-avant-vers-soi-même.'
      ]
    },
    {
      title: 'J\'accuse...!',
      author: 'Émile Zola',
      year: 1898,
      type: 'ARTICLE' as const,
      reference: 'Lettre ouverte au Président de la République publiée dans L\'Aurore',
      quotes: [
        'J\'accuse...!',
        'La vérité est une torche qui luit dans le brouillard.',
        'Je n\'ai qu\'une passion, celle de la lumière.',
        'La France aura cette vérité ou elle n\'aura pas la paix.',
        'J\'accuse le lieutenant-colonel du Paty de Clam d\'avoir été l\'ouvrier diabolique de la mauvaise foi.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que l\'engagement selon Sartre ?',
      back: 'L\'engagement est la concrétisation de la liberté dans l\'action. Pour Sartre, "en choisissant pour moi, je choisis pour tous les hommes" : chaque choix personnel affirme une valeur qui engage l\'humanité entière.',
      difficulty: 2
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre relie-t-il engagement et liberté ?',
      back: 'Pour Sartre, la liberté n\'est pas contemplation mais action. L\'engagement est la réalisation de la liberté : en choisissant et en agissant, je me donne une essence. Sans engagement, la liberté est abstraction vide. Choisir, c\'est se choisir.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence Sartre fait-il entre engagement et parti-pris ?',
      back: 'Le parti-pris est soumission aveugle à une doctrine. L\'engagement est choix lucide assumant sa responsabilité. L\'écrivain engagé ne fait pas de propagande mais révèle le monde pour le transformer. Il reste critique et autonome.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la "littérature engagée" selon Sartre ?',
      back: 'La littérature engagée est la théorie selon laquelle l\'écrivain a responsabilité de dévoiler le monde pour le transformer. En écrivant, l\'écrivain agit et engage le lecteur dans une collaboration créatrice. Le silence de l\'écrivain est aussi un choix qui engage (complicité).',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Simone de Beauvoir relie-t-elle engagement et morale ?',
      back: 'Dans Pour une morale de l\'ambiguïté, Beauvoir fonde l\'engagement sur la volonté de la liberté d\'autrui comme condition de ma propre liberté. L\'engagement moral assume l\'ambiguïté de la condition humaine : à la fois liberté et située, transcendante et immergée.',
      difficulty: 5
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la "révolte" chez Camus ?',
      back: 'Dans L\'Homme révolté, Camus analyse la révolte comme engagement originaire : dire "non" à l\'injustice, c\'affirmer une valeur commune à tous les hommes. La révolte est affirmation d\'une limite qu\'aucun homme ne doit franchir. Elle se distingue de la révolution totale qui nie la liberté d\'autrui.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la "résolution" chez Heidegger ?',
      back: 'Dans Être et Temps, Heidegger analyse la résolution (Entschlossenheit) comme mode d\'existence authentique. Résoudre, c\'se porter en avant vers sa mort, choisir soi-même en assumant son être-jeté. La résolution est engagement ontologique plus que politique.',
      difficulty: 5
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle œuvre contient cette citation : "En choisissant pour moi, je choisis pour tous les hommes" ?',
      back: 'L\'Existentialisme est un humanisme, Jean-Paul Sartre (1946)',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle œuvre contient cette citation : "Je me révolte, donc nous sommes" ?',
      back: 'L\'Homme révolté, Albert Camus (1951)',
      difficulty: 2
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle œuvre contient cette citation : "J\'accuse...!" ?',
      back: 'Article publié dans L\'Aurore, Émile Zola (1898)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Sartre, en choisissant pour {{moi}}, je choisis pour {{tous les hommes}}.',
      back: 'moi | tous les hommes',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'L\'{{existence}} précède l\'{{essence}}.',
      back: 'existence | essence',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Camus, {{je me révolte}}, donc {{nous sommes}}.',
      back: 'je me révolte | nous sommes',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'En quoi l\'engagement est-il la réalisation de la liberté ?',
      back: 'Pour Sartre, la liberté n\'est pas contemplation mais action : "l\'homme est condamné à être libre" signifie que sa liberté se réalise dans ses choix. L\'engagement est cette concrétisation : en choisissant, je me donne une essence (je deviens ce que je fais). De plus, chaque choix engage l\'humanité entière car il affirme une valeur ("en choisissant pour moi, je choisis pour tous les hommes"). L\'engagement transforme l\'angoisse de la liberté en action responsable. L\'homme s\'engage non pas malgré sa liberté mais parce qu\'il est libre : cette liberté ne devient réalité que dans l\'action engagée.',
      difficulty: 5
    },
    {
      type: 'ESSAY' as const,
      front: 'Quelle différence entre engagement et activisme ?',
      back: 'L\'activisme est action aveugle, action pour l\'action sans réflexion sur les enjeux. L\'engagement authentique se distingue par la lucidité : l\'homme engagé sait pourquoi il s\'engage, comprend les conséquences, reste critique de sa propre action. Pour Sartre, l\'écrivain engagé ne fait pas de propagande (manipulation) mais révèle le monde pour que le lecteur puisse librement le transformer. L\'engagement respecte la liberté d\'autrui, l\'activisme peut la sacrifier pour une "bonne cause". La distinction centrale est : l\'activisme soumet à une fin, l\'engagement assume une responsabilité.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['engagement', 'sartre', 'beauvoir', 'camus', 'heidegger', 'liberté', 'responsabilité', 'action', 'choix', 'littérature engagée', 'révolte', 'résolution']
};
