/**
 * Angoisse - Concept Data
 * Disposition affective fondamentale révélant la liberté et la contingence
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'angoisse',
  name: 'Angoisse',
  slug: 'angoisse',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'L\'angoisse est une disposition affective fondamentale distincte de la peur et de l\'anxiété. Alors que la peur a un objet précis (un danger identifiable) et l\'anxiété est un trouble psychologique, l\'angoisse est d\'ordre existentiel : elle révèle à l\'homme sa condition fondamentale. Pour Kierkegaard, c\'est « le vertige de la liberté », le saisissement devant l\'ouverture infinie des possibles. Chez Heidegger, l\'angoisse révèle le néant : elle nous confronte à l\'être-pour-la-mort, à la contingence radicale de notre existence. Pour Sartre, l\'angoisse est la conscience de notre liberté absolue et de notre responsabilité totale : nous sommes « condamnés à être libres ». L\'angoisse n\'est pas un pathologique mais un moment de vérité où l\'homme se découvre comme existence jetée dans un monde sans raisons prédéterminées.',
  shortDefinition: 'Disposition affective révélant la liberté absolue, la contingence et la responsabilité de l\'existence',

  // ===== DÉFINITION PHILOSOPHIQUE =====
  philosophicalDefinition: {
    analysis: 'L\'angoisse se distingue de la peur par son absence d\'objet déterminé. La peur est « peur de » quelque chose (un chien, un examen), l\'angoisse est angoisse « devant » rien de déterminé. Cette absence d\'objet n\'est pas défaut mais excès : l\'angoisse est devant « l\'être en totalité ». Pour Kierkegaard, l\'angoisse est « sympathie antipathétique » : elle est attirance et répulsion devant ma propre liberté. Pour Heidegger, l\'angoisse est disposition (Befindlichkeit) qui nous « désoeuvrent » (ent-setzt) : le monde ordinaire, familier, perd sa signification. Ce « glissement » (Absturz) nous révèle le néant. Pour Sartre, l\'angoisse est apparition de ma liberté dans le monde : je me découvre totalement libre de choisir, même de me détruire.',
    distinctions: [
      'Peur vs Angoisse : La peur a un objet précis (danger). L\'angoisse n\'a pas d\'objet : elle est devant l\'être lui-même.',
      'Anxiété vs Angoisse : L\'anxiété est trouble psychologique (pathologie). L\'angoisse est disposition existentielle (vérité de la condition).',
      'Angoisse mortelle vs Angoisse existentielle : L\'angoisse mortelle est peur de la mort. L\'angoisse existentielle est angoisse de l\'être-pour-la-mort.'
    ],
    implications: 'L\'angoisse révèle que l\'homme n\'est pas une essence donnée mais une existence à assumer. Elle est « disposition fondamentale » de l\'existence authentique car elle nous arrache à l\'inauthenticité du quotidien.'
  },

  // ===== RAISONNEMENTS PHILOSOPHIQUES =====
  reasoning: [
    {
      title: 'L\'argument du vertige de la liberté',
      argument: 'Pour Kierkegaard, l\'angoisse est le vertige de la liberté : devant le choix possible, l\'homme est saisi par sa propre liberté.',
      premises: [
        'L\'homme est libre de choisir',
        'Cette liberté est infinie (tous les possibles)',
        'Devant l\'ouverture des possibles, l\'homme est saisi de vertige',
        'Ce vertige est l\'angoisse'
      ],
      conclusion: 'L\'angoisse révèle notre liberté absolue. Plus la liberté est grande, plus l\'angoisse est profonde.',
      objections: [
        { philosopher: 'Les déterministes', objection: 'La liberté est une illusion. L\'angoisse n\'est pas vertige de la liberté mais peur de l\'inconnu.' },
        { philosopher: 'Les psychologues', objection: 'L\'angoisse est trouble psychologique, pas expérience philosophique. Elle se traite, pas s\'analyse.' }
      ],
      responses: [
        { philosopher: 'Kierkegaard', response: 'L\'angoisse n\'est pas pathologie mais vérité. Celui qui n\'a pas d\'angoisse est dans l\'illusion, pas dans la vérité. L\'angoisse est « catégorie du saut qualitatif ».' },
        { philosopher: 'Sartre', response: 'Le déterminisme est lui-même un choix de mauvaise foi. L\'angoisse est la vérité que la mauvaise foi fuit.' }
      ]
    },
    {
      title: 'L\'argument de la révélation du néant',
      argument: 'Pour Heidegger, l\'angoisse révèle le néant : dans l\'angoisse, « l\'étant tout entier s\'enfonde ».',
      premises: [
        'L\'angoisse est devant « rien de déterminé »',
        'Dans l\'angoisse, le monde ordinaire perd sa signification',
        'Ce « glissement » révèle le néant',
        'Le néant n\'est pas rien mais possibilité de l\'être'
      ],
      conclusion: 'L\'angoisse est disposition fondamentale de l\'existence authentique car elle nous révèle notre être-pour-la-mort.',
      objections: [
        { philosopher: 'Les rationalistes', objection: 'Le néant n\'est rien. On ne peut pas « révéler » rien. C\'est un non-sens métaphysique.' },
        { philosopher: 'Sartre', objection: 'Le néant heideggérien reste mystique. Le néant n\'est pas possibilité de l\'être mais néantisation de la conscience.' }
      ],
      responses: [
        { philosopher: 'Heidegger', response: 'Le néant n\'est pas objet mais événement. Dans l\'angoisse, l\'étant « s\'enfonde » : nous expérimentons l\'être comme néant. Cette expérience est vérité de l\'existence.' }
      ]
    },
    {
      title: 'L\'argument de la responsabilité',
      argument: 'Pour Sartre, l\'angoisse est conscience de notre responsabilité totale. Cette liberté est « condamnation ».',
      premises: [
        'Nous sommes totalement libres de choisir',
        'Cette liberté est responsabilité de nos choix',
        'Nous sommes responsables de tout ce que nous faisons',
        'Même de ce que nous ne faisons pas (omission)'
      ],
      conclusion: 'L\'angoisse est conscience de notre responsabilité absolue. Elle est « condamnation à être libre ».',
      objections: [
        { philosopher: 'Les moralistes', objection: 'Cette responsabilité est excessive. Nous ne sommes pas responsables de tout (situation, éducation, inconscient).' },
        { philosopher: 'Les psychanalystes', objection: 'L\'inconscient détermine nos choix. La liberté est illusion, la responsabilité est partielle.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'La situation est donnée mais le sens est choisi. Nous sommes responsables du sens que nous donnons à notre situation. L\'inconscient est hypokhèse de mauvaise foi.' }
      ]
    }
  ],

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'angustia',
    greek: 'ankhē (ἀγχή)',
    root: 'angustus : étroit, serré',
    notes: 'Étymologiquement, l\'angoisse est une sensation d\'étranglement, de resserrement qui métaphorise la pression de l\'existence'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Kierkegaard - Le vertige de la liberté',
      description: 'Dans Le Concept de l\'angoisse (1844), Kierkegaard analyse l\'angoisse d\'Adam face à l\'interdiction divine. L\'angoisse est le vertige devant la liberté : devant le choix possible, Adam est saisi par la possibilité de sa possibilité. L\'angoisse n\'est ni la peur (a un objet) ni l\'appréhension (peur d\'un mal futur), mais le sentiment de notre pouvoir absolu de choisir, et donc de notre responsabilité.'
    },
    {
      title: 'Heidegger - La révélation du néant',
      description: 'Dans Qu\'est-ce que la métaphysique? (1929), Heidegger analyse l\'angoisse comme disposition (Befindlichkeit) qui nous révèle le néant. Dans l\'angoisse, « l\'étant tout entier s\'enfonde » : le monde ordinaire, familier, perd sa signification. Ce « glissement » (Absturz) nous confronte à l\'être-pour-la-mort, à notre être-jeté vers la mort. L\'angoisse est l\'expérience fondamentale de l\'existence authentique.'
    },
    {
      title: 'Sartre - Angoisse de la responsabilité',
      description: 'Dans L\'Être et le Néant (1943), Sartre analyse l\'angoisse comme conscience de notre liberté absolue. L\'exemple du vertige sur un précipice : ce n\'est pas la peur de tomber, mais l\'angoisse de se découvrir totalement libre de choisir, y compris de se jeter dans le vide. Cette liberté est « condamnation » car nous sommes responsables de tout ce que nous faisons, et même de ce que nous ne faisons pas.'
    },
    {
      title: 'La distinction peur/angoisse',
      description: 'La peur a un objet précis (un chien qui menace, un examen à passer). Elle est proportionnée au danger et disparaît avec lui. L\'angoisse, elle, n\'a pas d\'objet : elle est devant « rien de déterminé ». Elle est angoisse de l\'être lui-même, de notre condition d\'êtres libres et mortels. On peut fuir ce qui fait peur, on ne peut fuir son angoisse car elle est nous-mêmes.'
    },
    {
      title: 'L\'angoisse et le néant',
      description: 'Chez Heidegger, l\'angoisse n\'est pas une expérience négative à surmonter mais la vérité de l\'existence. En révélant le néant, elle nous arrache à l\'inauthenticité du « On » (das Man) et nous ouvre à notre possibilité la plus propre : la mort. L\'homme authentique est celui qui « se porte en avant vers sa mort », vivant dans la résolution qui anticipe cette possibilité.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    {
      name: 'Søren Kierkegaard',
      period: '1813-1855',
      contribution: 'Première analyse philosophique de l\'angoisse comme « vertige de la liberté » dans Le Concept de l\'angoisse (1844). Kierkegaard analyse l\'angoisse d\'Adam face au choix.',
      works: ['Le Concept de l\'angoisse', 'Ou bien... ou bien', 'Traité du désespoir'],
      quotes: [
        '« L\'angoisse est le vertige de la liberté. »',
        '« Adam n\'a eu besoin d\'aucun cauchemar pour le terrifier : la liberté suffit à produire ce vertige. »',
        '« Celui qui a appris à connaître l\'angoisse a appris à connaître le plus important. »',
        '« L\'angoisse est la catégorie du saut qualitatif. »'
      ]
    },
    {
      name: 'Martin Heidegger',
      period: '1889-1976',
      contribution: 'L\'angoisse comme révélation du néant dans Qu\'est-ce que la métaphysique? (1929). L\'angoisse est disposition fondamentale de l\'existence authentique.',
      works: ['Être et Temps', 'Qu\'est-ce que la métaphysique?', 'De l\'essence de la vérité'],
      quotes: [
        '« L\'angoisse nous révèle le néant. »',
        '« Dans l\'angoisse, l\'étant tout entier s\'enfonde. »',
        '« L\'angoisse est la disposition fondamentale de l\'existence authentique. »',
        '« Le « On » nous fuit toujours l\'angoisse. »'
      ]
    },
    {
      name: 'Jean-Paul Sartre',
      period: '1905-1980',
      contribution: 'L\'angoisse comme conscience de la liberté absolue dans L\'Être et le Néant (1943). L\'exemple du vertige sur un précipice.',
      works: ['L\'Être et le Néant', 'L\'Existentialisme est un humanisme'],
      quotes: [
        '« L\'homme est condamné à être libre. »',
        '« L\'angoisse est la reconnaissance d\'une liberté totale et illimitée. »',
        '« Je suis responsable de tout, sauf de ma responsabilité elle-même. »',
        '« L\'angoisse est l\'apparition de ma liberté dans le monde. »'
      ]
    },
    {
      name: 'Sigmund Freud',
      period: '1856-1939',
      contribution: 'Analyse psychologique de l\'angoisse comme signal de danger. Distinction entre angoisse automatique (traumatique) et angoisse signal (anticipatoire).',
      works: ['Inhibition, symptôme et angoisse', 'Introduction à la psychanalyse'],
      quotes: [
        '« L\'angoisse est la réaction à la situation de danger. »',
        '« Le Moi est l\'angoisse. »'
      ]
    },
    {
      name: 'Karl Jaspers',
      period: '1883-1969',
      contribution: 'Les « situations-limites » (mort, souffrance, culpabilité) comme sources d\'angoisse existentielle. Ces situations révèlent l\'existence.',
      works: ['Philosophie', 'La Question de la culpabilité'],
      quotes: [
        '« Les situations-limites sont l\'expérience de l\'existence. »',
        '« L\'angoisse est le tonus de l\'existence. »'
      ]
    }
  ],

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      name: 'Liberté',
      type: 'REVEALS',
      description: 'L\'angoisse révèle notre liberté absolue. Plus la liberté est grande, plus l\'angoisse est profonde.',
      bidirectional: true
    },
    {
      name: 'Mort',
      type: 'RELATES_TO',
      description: 'L\'angoisse de l\'être-pour-la-mort nous confronte à notre contingence. Elle révèle notre finitude comme possibilité la plus propre.',
      bidirectional: true
    },
    {
      name: 'Responsabilité',
      type: 'REVEALS',
      description: 'L\'angoisse révèle notre responsabilité totale. Nous sommes responsables de tout ce que nous choisissons.',
      bidirectional: true
    },
    {
      name: 'Néant',
      type: 'REVEALS',
      description: 'Pour Heidegger, l\'angoisse révèle le néant. Elle nous confronte à la contingence de l\'étant.',
      bidirectional: true
    },
    {
      name: 'Authenticité',
      type: 'OPENS_TO',
      description: 'L\'angoisse est disposition fondamentale de l\'existence authentique. Elle nous arrache à l\'inauthenticité du « On ».',
      bidirectional: true
    },
    {
      name: 'Peur',
      type: 'DISTINCT_FROM',
      description: 'La peur a un objet précis (danger). L\'angoisse n\'a pas d\'objet : elle est devant l\'être lui-même.',
      bidirectional: false
    },
    {
      name: 'Avenir',
      type: 'OPENS_TO',
      description: 'L\'angoisse est ouverture sur l\'avenir comme indétermination. Kierkegaard : le vertige devant les possibles. Sartre : l\'angoisse devant ce que je serai.',
      bidirectional: true
    }
  ],

  // ===== COURANTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      name: 'Existentialisme',
      description: 'L\'angoisse est disposition fondamentale de l\'existence. Elle révèle la liberté, la mort et la responsabilité.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Søren Kierkegaard', 'Martin Heidegger', 'Jean-Paul Sartre', 'Karl Jaspers']
    },
    {
      name: 'Phénoménologie',
      description: 'L\'angoisse comme disposition (Befindlichkeit) de l\'être-là. Méthode descriptive des structures de l\'expérience.',
      role: 'RELATED',
      keyPhilosophers: ['Martin Heidegger', 'Jean-Paul Sartre', 'Edmund Husserl']
    },
    {
      name: 'Psychanalyse',
      description: 'L\'angoisse comme signal de danger. Distinction entre angoisse automatique et angoisse signal.',
      role: 'CONTRASTS_WITH',
      keyPhilosophers: ['Sigmund Freud', 'Jacques Lacan']
    },
    {
      name: 'Philosophie de l\'existence',
      description: 'L\'angoisse comme expérience de l\'existence dans ses situations-limites.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Karl Jaspers', 'Gabriel Marcel', 'Martin Heidegger']
    },
    {
      name: 'Psychologie existentielle',
      description: 'L\'angoisse comme structure fondamentale de l\'existence humaine. Approche thérapeutique (Roland Kuhn, Ludwig Binswanger).',
      role: 'RELATED',
      keyPhilosophers: ['Ludwig Binswanger', 'Roland Kuhn', 'R.D. Laing']
    }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le vertige du précipice : Sartre décrit un homme sur un bord d\'abîme. Il n\'a pas peur de tomber (danger objectif), mais éprouve l\'angoisse de se découvrir libre de sauter. Cette liberté terrifiante le saisit dans tout son être.',
    'Adam au jardin d\'Eden : Dans l\'analyse de Kierkegaard, Adam éprouve l\'angoisse devant l\'interdiction divine de manger le fruit. Ce n\'est pas la peur de la punition, mais l\'angoisse de sa liberté : il peut obéir ou désobéir, et cette possibilité l\'effraie plus que le châtiment.',
    'Le garçon de café chez Sartre : Le serveur qui « joue à être garçon de café » fuit son angoisse en se réduisant à un rôle. En s\'identifiant totalement à sa fonction, il nie sa liberté infinie et la responsabilité angoissante qui l\'accompagne.',
    'L\'étudiant devant sa blank page : L\'angoisse de la page blanche n\'est pas la peur de l\'échec mais l\'angoisse de la liberté créatrice. Tout est possible, rien n\'est déterminé, et cette ouverture infinie est vertigineuse.',
    'Le parent devant son enfant nouveau-né : Sartre souligne l\'angoisse de la responsabilité parentale. En donnant la vie, on engage l\'existence d\'un autre être, avec tout le poids de responsabilité que cela implique.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Le Concept de l\'angoisse',
      author: 'Søren Kierkegaard',
      year: 1844,
      type: 'BOOK' as const,
      reference: 'Traité philosophique sur l\'angoisse comme vertige de la liberté et péché originel',
      quotes: [
        'L\'angoisse est le vertige de la liberté.',
        'Adam n\'a eu besoin d\'aucun cauchemar pour le terrifier : la liberté suffit à produire ce vertige.',
        'L\'angoisse est une sympathie antipathétique et une antipathie sympathique.',
        'Dans l\'angoisse, il y a l\'infinu subjectivité de l\'esprit.',
        'Celui qui a appris à connaître l\'angoisse a appris à connaître le plus important.',
        'L\'angoisse est la catégorie du saut qualitatif.'
      ]
    },
    {
      title: 'Qu\'est-ce que la métaphysique?',
      author: 'Martin Heidegger',
      year: 1929,
      type: 'BOOK' as const,
      reference: 'Conférence inaugurale sur l\'angoisse comme révélation du néant',
      quotes: [
        'L\'angoisse nous révèle le néant.',
        'Dans l\'angoisse, l\'étant tout entier s\'enfonde.',
        'L\'angoisse est la disposition fondamentale de l\'existence authentique.',
        'Le « On » nous fuit toujours l\'angoisse.',
        'L\'angoisse nous arrache à l\'inauthenticité du quotidien.',
        'Le néant est la « non-propriété » de l\'étant.',
        'Pourquoi y a-t-il de l\'étant et non pas plutôt rien?'
      ]
    },
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Œuvre majeure sur l\'être-pour-la-mort et l\'existence authentique',
      quotes: [
        'L\'être-pour-la-mort est l\'être le plus propre, le plus irremplaçable de l\'être-là.',
        'La mort est la possibilité de l\'impossibilité pure de l\'existence.',
        'L\'angoisse est la disposition par laquelle nous nous ouvrons à la mort.',
        'Le « On » dit : on meurt, car chaque individu se meurt - mais effectivement on ne meurt pas.',
        'L\'être-jeté est l\'être de l\'être-là en vue de sa mort.'
      ]
    },
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Traité d\'ontologie phénoménologique sur la conscience, la liberté et l\'angoisse',
      quotes: [
        'L\'homme est condamné à être libre.',
        'L\'angoisse est la reconnaissance d\'une liberté totale et illimitée.',
        'Je suis responsable de tout, sauf de ma responsabilité elle-même.',
        'L\'existence précède l\'essence.',
        'L\'angoisse est l\'apparition de ma liberté dans le monde.',
        'Je suis ma liberté.',
        'Nous sommes une liberté qui choisit, mais nous ne choisissons pas d\'être libres.'
      ]
    },
    {
      title: 'L\'Existentialisme est un humanisme',
      author: 'Jean-Paul Sartre',
      year: 1946,
      type: 'BOOK' as const,
      reference: 'Conférence présentant l\'existentialisme au grand public',
      quotes: [
        'L\'existence précède l\'essence.',
        'L\'homme est d\'abord une existence qui se rencontre, surgit dans le monde, et se définit après.',
        'L\'homme est responsable de sa passion.',
        'En choisissant pour moi, je choisis pour tous les hommes.',
        'Il n\'y a pas de nature humaine, car il n\'y a pas de Dieu pour la concevoir.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que l\'angoisse selon Kierkegaard ?',
      back: 'L\'angoisse est « le vertige de la liberté » : le saisissement devant l\'ouverture infinie des possibles et la responsabilité de nos choix. Elle est différente de la peur qui a un objet précis.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre peur, anxiété et angoisse ?',
      back: 'La peur a un objet précis (danger identifiable) et disparaît avec lui. L\'anxiété est un trouble psychologique sans objet clair. L\'angoisse est existentielle : elle révèle notre condition de liberté et de mort. On peut fuir la peur, on ne peut fuir l\'angoisse car elle est nous-mêmes.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Kierkegaard relie-t-il angoisse et liberté ?',
      back: 'Pour Kierkegaard, l\'angoisse est le vertige de la liberté. Adam éprouve l\'angoisse non pas devant la punition, mais devant sa liberté de choisir. Plus la liberté est grande, plus l\'angoisse est profonde. L\'angoisse révèle notre pouvoir absolu de choix et donc notre responsabilité.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Heidegger relie-t-il angoisse et néant ?',
      back: 'Pour Heidegger, l\'angoisse révèle le néant : « l\'étant tout entier s\'enfonde ». Ce « glissement » nous confronte à notre être-pour-la-mort, à notre contingence. L\'angoisse est disposition fondamentale de l\'existence authentique car elle nous arrache à l\'inauthenticité du « On ».',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre relie-t-il angoisse et responsabilité ?',
      back: 'Pour Sartre, l\'angoisse est la conscience de notre liberté absolue. Cette liberté est « condamnation » car nous sommes responsables de tout ce que nous faisons. L\'exemple du vertige : ce n\'est pas la peur de tomber, mais l\'angoisse de se découvrir libre de sauter.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle œuvre contient cette citation : « L\'angoisse est le vertige de la liberté » ?',
      back: 'Le Concept de l\'angoisse, Søren Kierkegaard (1844)',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle œuvre contient cette citation : « L\'homme est condamné à être libre » ?',
      back: 'L\'Être et le Néant, Jean-Paul Sartre (1943)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Kierkegaard, l\'angoisse est le {{vertige}} de la {{liberté}}.',
      back: 'vertige | liberté',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'En quoi l\'angoisse est-elle une expérience existentielle et non pathologique ?',
      back: 'Contrairement à l\'anxiété (trouble psychologique) ou à la peur (réaction à un danger), l\'angoisse est une expérience existentielle qui révèle la vérité de notre condition. Chez Kierkegaard, elle révèle notre liberté infinie ; chez Heidegger, elle révèle le néant et notre être-pour-la-mort ; chez Sartre, elle révèle notre responsabilité absolue. L\'angoisse n\'est pas un symptôme à traiter mais un moment de vérité où l\'homme se découvre comme être jeté dans un monde sans raisons, condamné à choisir et responsable de tout. C\'est pourquoi l\'angoisse est « disposition fondamentale » de l\'existence authentique.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['angoisse', 'kierkegaard', 'heidegger', 'sartre', 'liberté', 'mort', 'responsabilité', 'néant', 'existence', 'peur', 'vertige']
};
