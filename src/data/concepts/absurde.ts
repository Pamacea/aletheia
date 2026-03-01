/**
 * Absurde - Concept Data
 * Confrontation entre le désir humain de sens et le silence indifférent de l'univers
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'absurde',
  name: 'Absurde',
  slug: 'absurde',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: "L'absurde est la situation fondamentale de l'existence humaine née de la confrontation entre le désir rationnel de sens, de clarté et de justification, et le silence obstiné de l'univers. Ce n'est ni un désespoir ni une doctrine, mais « un état fait pour durer » selon l'expression de Camus. L'absurde surgit quand l'homme comprend que le monde ne répond pas à ses questions les plus urgentes : pourquoi la souffrance ? pourquoi la mort ? quel est le sens de l'existence ? Cette confrontation produit un « divorce » entre l'homme et le monde, une « situation absurde » qui ne peut être résolue ni par le suicide (solution physique), ni par le suicide philosophique (le saut religieux ou philosophique qui nie l'absurde). La seule réponse digne est la révolte : vivre sans espoir mais sans résignation, assumer l'absurde tout en le maintenant, comme Sisyphe qui pousse son rocher éternellement. « Il faut imaginer Sisyphe heureux » : dans la conscience lucide de sa tâche sans issue, Sisyphe découvre une liberté supérieure, celle de vivre pleinement l'instant présent sans illusion.",
  shortDefinition: 'Confrontation entre le désir humain de sens et le silence indifférent de l\'univers',

  // ===== DÉFINITION PHILOSOPHIQUE =====
  philosophicalDefinition: {
    analysis: "L'absurde n'est ni dans l'homme ni dans le monde seul, mais dans leur rencontre. L'homme est « être de désir de sens » : il cherche rationnellement à comprendre, à justifier, à trouver des raisons. Le monde est « indifférence » : il existe sans finalité, sans explication, sans raison apparente. La confrontation produit l'absurde. Camus distingue trois conséquences de l'absurde : la révolte (refus de l'espérance), la liberté (vivre sans appel), la passion (donner toute sa force à l'instant présent). L'absurde n'est pas une vérité à découvrir mais une expérience à vivre : celle de l'homme qui s'aperçoit que l'univers ne lui doit rien.",
    distinctions: [
      'Absurde vs Désespoir : Le désespoir est une réaction émotionnelle (abandon). L\'absurde est une situation lucide (confrontation).',
      'Absurde vs Nihilisme : Le nihilisme est une doctrine (« rien n\'a de sens, donc tout est permis »). L\'absurde est une expérience (« le monde ne répond pas »).',
      'Absurde vs Tragique : Le tragique implique une fatalité (le destin s\'accomplit). L\'absurde est absence de destin (le monde n\'a pas de sens, bon ou mauvais).'
    ],
    implications: "L'absurde implique que l'existence est « sans appel » : ni au-delà, ni justification ultime, ni sens donné. Mais cette absence n'est pas tragédie : elle est appel à vivre intensément ici et maintenant. L'homme absurde est celui qui vit « sans lendemain », sans espoir mais sans résignation, donnant toute sa force à l'instant présent."
  },

  // ===== RAISONNEMENTS PHILOSOPHIQUES =====
  reasoning: [
    {
      title: 'L\'argument du divorce homme/monde',
      argument: 'Pour Camus, l\'absurde naît de la confrontation entre le désir humain de sens et le silence du monde.',
      premises: [
        'L\'homme cherche rationnellement du sens, de la clarté, de la justification',
        'Le monde est indifférent, muet, sans raison apparente',
        'Cette rencontre produit un « divorce » entre l\'homme et le monde',
        'Ce divorce est l\'expérience de l\'absurde'
      ],
      conclusion: 'L\'absurde n\'est ni dans l\'homme ni dans le monde, mais dans leur confrontation.',
      objections: [
        { philosopher: 'Les religieux', objection: 'Le monde a un sens, même s\'il nous est inaccessible. L\'absurde est ignorance, pas vérité.' },
        { philosopher: 'Les rationalistes', objection: 'Le sens n\'est pas donné mais se construit. L\'absurde est étape provisoire vers une signification humaine.' }
      ],
      responses: [
        { philosopher: 'Camus', response: 'Le sens construit ne répond pas à la question du « pourquoi ultime ». L\'absurde n\'est pas ignorance mais lucidité : le monde ne doit rien à l\'homme.' },
        { philosopher: 'Sartre', response: 'Le sens n\'est pas donné mais choisi. L\'absurde est condition de la liberté : sans essence donnée, je suis libre de me faire.' }
      ]
    },
    {
      title: 'L\'argument des trois conséquences',
      argument: 'Camus déduit de l\'absurde trois attitudes : la révolte, la liberté, la passion.',
      premises: [
        'L\'absurde est « état fait pour durer »',
        'Il ne peut être résolu ni par le suicide (physique), ni par le saut philosophique (religion)',
        'La seule réponse digne est de maintenir l\'absurde tout en y répondant',
        'Cette réponse produit révolte, liberté, passion'
      ],
      conclusion: 'L\'homme absurde vit sans espoir mais sans résignation, dans la révolte et la passion de l\'instant.',
      objections: [
        { philosopher: 'Les religieux', objection: 'Cette vie sans espoir est désespérée. L\'espérance est essentielle à l\'humanité.' },
        { philosopher: 'Les nihilistes', objection: 'Si tout est absurde, pourquoi se révolter ? L\'indifférence est plus logique.' }
      ],
      responses: [
        { philosopher: 'Camus', response: 'La révolte n\'est pas espoir de succès mais fidélité à soi. L\'homme absurde se révolte contre la mort, l\'injustice, l\'absurde lui-même, sachant qu\'il perdra.' },
        { philosopher: 'Camus', response: 'Le nihilisme est une solution, l\'absurde est une expérience. Le nihiliste conclut, l\'homme absurde vit.' }
      ]
    },
    {
      title: 'L\'argument du mythe de Sisyphe',
      argument: 'Sisyphe est le héros absurde : il pousse son rocher éternellement, conscient de l\'inutilité de sa tâche.',
      premises: [
        'Sisyphe est condamné à pousser un rochet vers le sommet',
        'Le rocher retombe toujours, éternellement',
        'Sisyphe est conscient de cette inutilité',
        'Cette conscience est son supplice mais aussi sa grandeur'
      ],
      conclusion: '« Il faut imaginer Sisyphe heureux » : dans la conscience lucide de l\'absurde, Sisyphe est libre.',
      objections: [
        { philosopher: 'Les optimistes', objection: 'Cette vision est désespérée. Comment être heureux dans une tâche inutile ?' },
        { philosopher: 'Les utilitaristes', objection: 'Le bonheur suppose l\'utilité. Sisyphe est malheureux par définition.' }
      ],
      responses: [
        { philosopher: 'Camus', response: 'Le bonheur n\'est pas dans le succès mais dans la conscience. Sisyphe est heureux car il est conscient, lucide, libre : « sa destinée appartient à lui ».' },
        { philosopher: 'Camus', response: 'La lutte elle-même vers les sommets suffit à remplir le cœur d\'un homme. Il faut imaginer Sisyphe heureux.' }
      ]
    }
  ],

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'absurdus',
    greek: 'aprosdokētos (ἀπροσδόκητος)',
    root: 'ab- : away + surdus : sourd, inintelligible',
    notes: 'Étymologiquement, ce qui est « hors de tout sens », ce qui est dissonant, incohérent, dépourvu de raison'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Camus - Le Mythe de Sisyphe',
      description: 'Dans Le Mythe de Sisyphe (1942), Camus analyse l\'absurde comme « divorce » entre l\'homme et le monde. L\'homme désire du sens, le monde est muet. Deux solutions sont refusées : le suicide (solution physique) et le saut philosophique ou religieux (solution spirituelle qui nie l\'absurde). La seule réponse digne est la révolte : vivre sans espoir mais sans résignation, assumer l\'absurde tout en le maintenant. Sisyphe est le héros de cette condition : « Il faut imaginer Sisyphe heureux ».'
    },
    {
      title: 'Kierkegaard - Le paradoxe de la foi',
      description: 'Dans Crainte et Tremblement (1843), Kierkegaard analyse l\'absurde du sacrifice d\'Isaac. Abraham obéit à Dieu qui lui demande de tuer son fils, ce qui est moralement absurde. Pour Kierkegaard, la foi est « saut dans l\'absurde » : elle dépasse la raison éthique. L\'absurde n\'est pas à résoudre mais à assumer dans la foi.'
    },
    {
      title: 'Nietzsche - L\'éternel retour',
      description: 'L\'éternel retour est la pensée absurde par excellence : si ta vie devait se répéter éternellement, la supporterais-tu ? Cette pensée n\'est pas doctrine mais expérience. Nietzsche propose l\'amor fati (aime ton destin) : accepter l\'existence telle qu\'elle est, dans sa totalité, sans rien refuser. C\'est la réponse nietzschéenne à l\'absurde : dire oui à la vie, même dans ce qu\'elle a de plus terrible.'
    },
    {
      title: 'Sartre - L\'existence sans essence',
      description: 'Pour Sartre, l\'absurde est condition de la liberté. Si « l\'existence précède l\'essence », alors il n\'y a pas de nature humaine donnée, pas de sens prédéterminé. L\'homme est « liberté condamnée » : il doit s\'inventer sans justification. L\'absurde n\'est pas tragédie mais appel à créer soi-même.'
    },
    {
      title: 'Ionesco - Le théâtre de l\'absurde',
      description: 'Le théâtre de l\'absurde (Ionesco, Beckett, Pinter) met en scène la condition absurde de l\'homme : dialogues incohérents, situations sans issue, personnages mécaniques. La Cantatrice chauve d\'Ionesco montre des êtres incapables de communiquer véritablement, répétant des clichés vides. En attendant Godot de Beckett présente des personnages qui attendent un « Godot » qui ne vient jamais, exprimant l\'attente absurde d\'un sens qui n\'arrive pas.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    {
      name: 'Albert Camus',
      period: '1913-1960',
      contribution: 'Analyse systématique de l\'absurde dans Le Mythe de Sisyphe (1942). L\'absurde comme divorce entre l\'homme et le monde, réponse par la révolte, la liberté, la passion. Sisyphe comme héros de l\'absurde.',
      works: ['Le Mythe de Sisyphe', 'L\'Étranger', 'La Peste', 'L\'Homme révolté'],
      quotes: [
        '« Il y a seulement un problème philosophique vraiment sérieux : le suicide. »',
        '« Le monde lui-même n\'est pas raisonnable, c\'est tout ce qu\'on en peut dire. »',
        '« Il faut imaginer Sisyphe heureux. »',
        '« Je me révolte, donc nous sommes. »',
        '« La lutte elle-même vers les sommets suffit à remplir le cœur d\'un homme. »'
      ]
    },
    {
      name: 'Søren Kierkegaard',
      period: '1813-1855',
      contribution: 'La foi comme « saut dans l\'absurde » dans Crainte et Tremblement (1843). Le sacrifice d\'Isaac comme paradoxe éthique et religieux.',
      works: ['Crainte et Tremblement', 'Ou bien... ou bien', 'Le Concept de l\'angoisse'],
      quotes: [
        '« La foi est précisément la contradiction entre l\'impossible et le possible. »',
        '« Abraham est donc à juste titre le père de la foi, lui qui n\'a eu besoin d\'aucune justification. »',
        '« Le paradoxe de la foi est que l\'individu est supérieur à l\'universel. »',
        '« La foi est le miracle de la subjectivité. »'
      ]
    },
    {
      name: 'Friedrich Nietzsche',
      period: '1844-1900',
      contribution: 'L\'éternel retour comme épreuve de l\'absurde dans Ainsi parlait Zarathoustra (1883). L\'amor fati comme réponse : aimer son destin, même dans ce qu\'il a de plus terrible.',
      works: ['Ainsi parlait Zarathoustra', 'Le Gai Savoir', 'Par-delà le bien et le mal'],
      quotes: [
        '« Si cette pensée prenait de la force, elle te transformerait tel que tu es. »',
        '« Voici ma vie, que je l\'aime ou que je la haïsse, je la veux encore une fois. »',
        '« Amor fati : que ce soit ton amour, ton destin. »',
        '« Dire oui à la vie, même dans ce qu\'elle a de plus étranger et de plus cruel. »'
      ]
    },
    {
      name: 'Jean-Paul Sartre',
      period: '1905-1980',
      contribution: 'L\'absurde comme condition de la liberté dans L\'Être et le Néant (1943). L\'existence précède l\'essence : pas de sens donné, mais liberté absolue de se faire.',
      works: ['L\'Être et le Néant', 'L\'Existentialisme est un humanisme', 'La Nausée'],
      quotes: [
        '« L\'existence précède l\'essence. »',
        '« L\'homme est condamné à être libre. »',
        '« Il n\'y a pas de nature humaine, car il n\'y a pas de Dieu pour la concevoir. »',
        '« L\'homme est une passion inutile. »'
      ]
    },
    {
      name: 'Franz Kafka',
      period: '1883-1924',
      contribution: 'L\'absurde comme condition moderne dans Le Procès (1925) et La Métamorphose (1915). L\'individu face à une bureaucratie opaque, sans justification ni sens.',
      works: ['Le Procès', 'La Métamorphose', 'Le Château'],
      quotes: [
        '« Le Procès est sans doute l\'œuvre la plus kafkaïenne de Kafka. »',
        '« Il n\'y a pas de doute, sans légèreté il n\'y a pas de vie. »',
        '« Je suis prisonnier, je reste prisonnier. »'
      ]
    },
    {
      name: 'Eugène Ionesco',
      period: '1909-1994',
      contribution: 'Le théâtre de l\'absurde comme mise en scène de la condition absurde. La Cantatrice chauve (1950) montre l\'impossibilité de communication authentique.',
      works: ['La Cantatrice chauve', 'Rhinocéros', 'Le Roi se meurt'],
      quotes: [
        '« Je ne sais pas pourquoi je meurs. »',
        '« Les mots ne signifient rien. »',
        '« Nous sommes tous des rhinocéros. »'
      ]
    },
    {
      name: 'Samuel Beckett',
      period: '1906-1989',
      contribution: 'L\'attente absurde dans En attendant Godot (1953). Deux personnages attendent un Godot qui ne vient jamais, exprimant l\'attente humaine d\'un sens qui n\'arrive pas.',
      works: ['En attendant Godot', 'Fin de partie', 'Molloy'],
      quotes: [
        '« Rien à faire. »',
        '« On a le temps de s\'ennuyer. »',
        '« Elles me donnent la nausée, ces deux petites minutes. »',
        '« Ça ne compte pas, ça ne compte pas. »'
      ]
    },
    {
      name: 'Arthur Schopenhauer',
      period: '1788-1860',
      contribution: 'Le monde comme Volonté et représentation (1819) : l\'existence est souffrance et ennui. Le désir est insatiable, créant une condition absurde de perpétuel insatisfait.',
      works: ['Le Monde comme Volonté et comme Représentation', 'Parerga et Paralipomena'],
      quotes: [
        '« La vie oscille, comme un pendule, de droite à gauche, de la souffrance à l\'ennui. »',
        '« Le désir est l\'essence même de l\'homme. »',
        '« Tout bonheur est de nature négative. »'
      ]
    },
    {
      name: 'Emil Cioran',
      period: '1911-1995',
      contribution: 'L\'absurde comme conscience lucide du néant de l\'existence dans Précis de décomposition (1949). Le pessimisme comme lucidité.',
      works: ['Précis de décomposition', 'Histoire et utopie', 'La Tentation d\'exister'],
      quotes: [
        '« Je suis en état de décomposition permanente. »',
        '« La conscience est une maladie. »',
        '« L\'être est un vice. »'
      ]
    }
  ],

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      name: 'Suicide',
      type: 'REJECTS',
      description: 'Camus refuse le suicide comme solution à l\'absurde. Le suicide nie l\'absurde au lieu de l\'assumer.',
      bidirectional: true
    },
    {
      name: 'Espoir',
      type: 'REJECTS',
      description: 'L\'homme absurde vit « sans espoir ». L\'espoir est consolation qui nie l\'absurde.',
      bidirectional: true
    },
    {
      name: 'Révolte',
      type: 'REQUIRES',
      description: 'La réponse camusienne à l\'absurde est la révolte : refus de l\'espérance mais engagement dans la lutte.',
      bidirectional: true
    },
    {
      name: 'Liberté',
      type: 'REVEALS',
      description: 'L\'absurde révèle la liberté : sans sens donné, je suis libre de me faire.',
      bidirectional: true
    },
    {
      name: 'Mort',
      type: 'RELATES_TO',
      description: 'La mort est l\'absurde ultime : elle rend toute existence finalement insignifiante.',
      bidirectional: true
    },
    {
      name: 'Sens',
      type: 'SEEKS',
      description: 'L\'absurde naît du désir de sens confronté au silence du monde.',
      bidirectional: true
    },
    {
      name: 'Nihilisme',
      type: 'CONTRASTS_WITH',
      description: 'Le nihilisme est doctrine (« rien n\'a de sens »). L\'absurde est expérience (« le monde ne répond pas »).',
      bidirectional: false
    }
  ],

  // ===== COURANTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      name: 'Existentialisme',
      description: 'L\'absurde comme condition fondamentale de l\'existence. Réponse par la liberté, la révolte, l\'engagement.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Albert Camus', 'Jean-Paul Sartre', 'Simone de Beauvoir']
    },
    {
      name: 'Philosophie de l\'absurde',
      description: 'Courant centré sur l\'analyse de l\'absurde comme expérience existentielle majeure.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Albert Camus', 'Emil Cioran', 'lev Chestov']
    },
    {
      name: 'Théâtre de l\'absurde',
      description: 'Mise en scène littéraire de la condition absurde : dialogues vides, situations sans issue, attente infinie.',
      role: 'EXPRESSES',
      keyPhilosophers: ['Eugène Ionesco', 'Samuel Beckett', 'Arthur Adamov']
    },
    {
      name: 'Nihilisme',
      description: 'L\'absurde comme préfiguration du nihilisme : le monde n\'a pas de sens intrinsèque.',
      role: 'CONTRASTS_WITH',
      keyPhilosophers: ['Friedrich Nietzsche', 'Albert Camus']
    },
    {
      name: 'Pessimisme',
      description: 'L\'absurde comme justification du pessimisme : l\'existence est souffrance, ennui, absurde.',
      role: 'RELATES_TO',
      keyPhilosophers: ['Arthur Schopenhauer', 'Emil Cioran']
    }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Sisyphe : Condamné par les dieux à pousser un rocher jusqu\'au sommet de la montagne, le rocher retombe toujours, éternellement. Sisyphe est conscient de cette inutilité. Pour Camus, Sisyphe est le héros absurde : « Il faut imaginer Sisyphe heureux ». Son supplice devient sa grandeur car il a conscience de sa destinée.',
    'Meursault dans L\'Étranger : Meursault vit dans l\'indifférence totale, sans chercher de justification à ses actes. Il tue un Arabe « à cause du soleil ». Au procès, il refuse de mentir, de se conformer aux attentes morales. Son authenticité le conduit à l\'échafaud où il découvre « l\'indifférente douceur de vivre ».',
    'Vladimir et Estragon dans En attendant Godot : Deux clochards attendent un certain Godot qui ne vient jamais. Ils attendent pour tuer le temps, se querellent, se réconcilient, jouent à des jeux absurdes. Cette attente infinie est métaphore de l\'attente humaine d\'un sens qui n\'arrive jamais.',
    'Joseph K. dans Le Procès : Arrêté un matin sans raison, Joseph K. est jugé par un tribunal opaque. Il cherche inutilement à comprendre sa faute, à se défendre, à rencontrer les juges. La bureaucratie est absurde car sans justification : « On te juge, donc tu es coupable ».',
    'L\'acteur tragique : L\'acteur qui répète inlassablement son rôle, connaissant chaque réplique, chaque geste, chaque émotion, est comme Sisyphe. Il sait que la pièce est fiction, qu\'il ne sera jamais le personnage, et pourtant il joue avec passion. Cette conscience lucide est sa grandeur : comme Sisyphe, il est « heureux » dans sa tâche infinie.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Le Mythe de Sisyphe',
      author: 'Albert Camus',
      year: 1942,
      type: 'BOOK' as const,
      reference: 'Essai philosophique sur l\'absurde comme divorce entre l\'homme et le monde',
      quotes: [
        'Il y a seulement un problème philosophique vraiment sérieux : le suicide.',
        'Le monde lui-même n\'est pas raisonnable, c\'est tout ce qu\'on en peut dire.',
        'Il faut imaginer Sisyphe heureux.',
        'La lutte elle-même vers les sommets suffit à remplir le cœur d\'un homme.',
        'Je me révolte, donc nous sommes.',
        'L\'absurde est un état fait pour durer.',
        'La révolte est la seule réponse digne à l\'absurde.'
      ]
    },
    {
      title: 'L\'Étranger',
      author: 'Albert Camus',
      year: 1942,
      type: 'BOOK' as const,
      reference: 'Roman mettant en scène Meursault, héros absurde indifférent au sens',
      quotes: [
        'Maman est morte aujourd\'hui. Ou peut-être hier, je ne sais pas.',
        'J\'ai ouvert ma fenêtre sur l\'été dans la ville.',
        'Je me suis aperçu que j\'avais détruit l\'équilibre du jour...',
        'Pour la première fois, dans cette nuit pleine de signes, j\'ai ouvert ma conscience à l\'indifférente douceur du monde.',
        'Il me restait un souhait, que le jour vienne où il y ait beaucoup de gens et qu\'on me haisse.'
      ]
    },
    {
      title: 'Crainte et Tremblement',
      author: 'Søren Kierkegaard',
      year: 1843,
      type: 'BOOK' as const,
      reference: 'Analyse du sacrifice d\'Isaac comme « saut dans l\'absurde » de la foi',
      quotes: [
        'La foi est précisément la contradiction entre l\'impossible et le possible.',
        'Abraham est donc à juste titre le père de la foi.',
        'Le paradoxe de la foi est que l\'individu est supérieur à l\'universel.',
        'La foi est le miracle de la subjectivité.',
        'Abraham ne peut pas parler, il ne peut que faire.'
      ]
    },
    {
      title: 'Ainsi parlait Zarathoustra',
      author: 'Friedrich Nietzsche',
      year: 1883,
      type: 'BOOK' as const,
      reference: 'Traité poétique sur l\'éternel retour et l\'amor fati comme réponse à l\'absurde',
      quotes: [
        'Si cette pensée prenait de la force, elle te transformerait tel que tu es.',
        'Voici ma vie, que je l\'aime ou que je la haïsse, je la veux encore une fois.',
        'Amor fati : que ce soit ton amour, ton destin.',
        'Dire oui à la vie, même dans ce qu\'elle a de plus étranger et de plus cruel.',
        'Je t\'enseigne le surhomme.',
        'Dieu est mort.'
      ]
    },
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Traité d\'ontologie phénoménologique sur l\'absurde comme condition de la liberté',
      quotes: [
        'L\'existence précède l\'essence.',
        'L\'homme est condamné à être libre.',
        'Il n\'y a pas de nature humaine, car il n\'y a pas de Dieu pour la concevoir.',
        'L\'homme est une passion inutile.',
        'Nous sommes une liberté qui choisit.',
        'L\'homme est ce qu\'il fait de lui-même.'
      ]
    },
    {
      title: 'En attendant Godot',
      author: 'Samuel Beckett',
      year: 1953,
      type: 'PLAY' as const,
      reference: 'Pièce de théâtre mettant en scène l\'attente absurde de deux personnages',
      quotes: [
        'Rien à faire.',
        'On a le temps de s\'ennuyer.',
        'Elles me donnent la nausée, ces deux petites minutes.',
        'Ça ne compte pas, ça ne compte pas.',
        'On attend Godot.',
        'Nous attendons toujours Godot.'
      ]
    },
    {
      title: 'La Cantatrice chauve',
      author: 'Eugène Ionesco',
      year: 1950,
      type: 'PLAY' as const,
      reference: 'Pièce inaugurale du théâtre de l\'absurde sur l\'impossibilité de communiquer',
      quotes: [
        'Je ne sais pas pourquoi je meurs.',
        'Les mots ne signifient rien.',
        'Il est minuit, le grand-père va se coucher.',
        'Nous sommes tous des rhinocéros.',
        'Le temps passe, le temps passe.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que l\'absurde selon Camus ?',
      back: 'L\'absurde est le « divorce » entre l\'homme et le monde : l\'homme cherche du sens, de la clarté, de la justification, mais le monde est muet, indifférent, sans raison apparente. Cette confrontation produit l\'absurde, qui n\'est ni dans l\'homme ni dans le monde, mais dans leur rencontre.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre absurde et désespoir ?',
      back: 'Le désespoir est une réaction émotionnelle (abandon, résignation). L\'absurde est une situation lucide (confrontation entre l\'homme et le monde). L\'absurde n\'est pas désespoir car il maintient la révolte : refuser l\'espérance mais s\'engager dans la lutte.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre absurde et nihilisme ?',
      back: 'Le nihilisme est une doctrine : « rien n\'a de sens, donc tout est permis ». L\'absurde est une expérience : « le monde ne répond pas ». Le nihiliste conclut, l\'homme absurde vit. Le nihilisme est solution, l\'absurde est condition.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelles sont les trois conséquences de l\'absurde selon Camus ?',
      back: 'La révolte (refus de l\'espérance), la liberté (vivre sans appel), la passion (donner toute sa force à l\'instant présent). Ces trois attitudes sont la réponse digne à l\'absurde, ni suicide physique ni suicide philosophique.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Camus résume la condition absurde ?',
      back: '« Il faut imaginer Sisyphe heureux » (Le Mythe de Sisyphe, 1942) - Dans la conscience lucide de sa tâche sans issue, Sisyphe découvre une liberté supérieure.',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Camus définit le problème philosophique suprême ?',
      back: '« Il y a seulement un problème philosophique vraiment sérieux : le suicide » (Le Mythe de Sisyphe, 1942) - Le suicide est la question fondamentale de l\'absurde : la vie vaut-elle d\'être vécue ?',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Nietzsche exprime l\'amor fati ?',
      back: '« Amor fati : que ce soit ton amour, ton destin » (Le Gai Savoir) - Aimer sa destinée, même dans ce qu\'elle a de plus terrible, est la réponse nietzschéenne à l\'absurde.',
      difficulty: 3
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Camus, l\'absurde est un {{état}} fait pour {{durer}}.',
      back: 'état | durer',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Nietzsche, la réponse à l\'absurde est l\'{{amor}} {{fati}}.',
      back: 'amor | fati',
      difficulty: 3
    },
    {
      type: 'ESSAY' as const,
      front: 'Pourquoi Sisyphe est-il le héros de l\'absurde ?',
      back: 'Sisyphe est le héros de l\'absurde car il incarne la condition humaine : condamné à une tâche inutile (pousser son rocher éternellement), il est lucide sur cette inutilité. Cette conscience est son supplice mais aussi sa grandeur : « sa destinée appartient à lui ». Contrairement aux dieux qui le condamnent, Sisyphe sait pourquoi il pousse son rocher. Cette lucidité le rend libre : il descend conscient de sa condition, il remonte en maître de son rocher. « La lutte elle-même vers les sommets suffit à remplir le cœur d\'un homme ». C\'est pourquoi « il faut imaginer Sisyphe heureux » : dans la conscience de l\'absurde, Sisyphe découvre une joie supérieure, celle d\'être pleinement vivant dans l\'instant présent, sans illusion ni espoir, mais sans résignation.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['absurde', 'camus', 'sisyphe', 'révolte', 'liberté', 'suicide', 'espoir', 'kierkegaard', 'nietzsche', 'sartre', 'beckett', 'ionesco', 'existence']
};
