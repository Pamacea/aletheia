/**
 * Autrui - Concept Data
 * L'autre personne comme sujet, conscience qui me regarde et me convoque à la responsabilité
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'autrui',
  name: 'Autrui',
  slug: 'autrui',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Autrui désigne l\'autre personne considérée non comme objet mais comme sujet, comme conscience qui me regarde et me constitue comme objet à son tour. Ce concept est central dans la phénoménologie (Husserl, Scheler) et l\'existentialisme (Sartre, Levinas, Merleau-Ponty). Pour Sartre dans L\'Être et le Néant, le regard d\'autrui m\'objective : je deviens un objet pour un sujet, je suis « vu » par autrui qui me vole mon monde. Cette expérience est fondamentalement conflictuelle : « l\'enfer, c\'est les autres » car chaque conscience cherche à assumer sa liberté while niant celle de l\'autre. Pour Levinas dans Totalité et Infini, autrui est avant tout visage qui me convoque à la responsabilité éthique. Le visage d\'autrui me dit « tu ne tueras point » et m\'assigne à une responsabilité infinie que je n\'ai pas choisie. Autrui n\'est pas un objet de connaissance mais le lieu de l\'éthique.',
  shortDefinition: 'L\'autre personne comme sujet qui me regarde, m\'objective et me convoque à la responsabilité éthique',

  // ===== DÉFINITION PHILOSOPHIQUE =====
  philosophicalDefinition: {
    analysis: 'Autrui se distingue de « autre chose » (objet) et des « autres » (masse anonyme). Autrui est un autre sujet, une autre conscience qui m\'apparaît comme sujet. Pour Husserl, autrui est « appresentation » : je perçois autrui comme corps animé par analogie avec mon corps propre. Pour Scheler, autrui est « donné » immédiatement dans l\'expérience de la sympathie. Pour Sartre, autrui m\'apparaît comme « regard » qui m\'objective. Pour Levinas, autrui est « visage » qui me convoque à la responsabilité. Pour Merleau-Ponty, autrui est « autre corps propre » avec qui je suis en « intercorporéité ».',
    distinctions: [
      'Autrui vs Autre chose : Autrui est un sujet (conscience), pas un objet. L\'autre chose est manipulable, autrui est « regard ».',
      'Autrui vs Les autres : Les autres sont la masse anonyme. Autrui est la singularité d\'un sujet.',
      'Autrui vs Société : La société est l\'ensemble anonyme. Autrui est la relation personnelle et éthique.',
      'Regard (Sartre) vs Visage (Levinas) : Le regard m\'objectivise et me confisque. Le visage me convoque à la responsabilité.'
    ],
    implications: 'Autrui révèle que la conscience n\'est pas solipsiste : je ne suis pas seul au monde. L\'existence d\'autrui est la preuve que d\'autres consciences existent. Cette expérience est soit conflictuelle (Sartre) soit éthique (Levinas).'
  },

  // ===== RAISONNEMENTS PHILOSOPHIQUES =====
  reasoning: [
    {
      title: 'L\'argument du regard objectivant',
      argument: 'Pour Sartre, le regard d\'autrui m\'objective : je deviens un objet pour un sujet.',
      premises: [
        'Je suis conscience qui transcende le monde',
        'Autrui est une autre conscience qui me regarde',
        'Dans le regard d\'autrui, je suis « vu » comme objet',
        'Je perds ma transcendance et deviens objet pour autrui'
      ],
      conclusion: 'Le regard d\'autrui me confisque mon monde. Je deviens objet pour un sujet qui me transcende.',
      objections: [
        { philosopher: 'Merleau-Ponty', objection: 'Le regard n\'est pas seulement objectivation. Il est aussi reconnaissance et dialogue. La relation à autrui n\'est pas seulement conflictuelle.' },
        { philosopher: 'Levinas', objection: 'Le regard objectivant est réductionniste. Le visage d\'autrui n\'est pas objet mais commande, éthique qui me convoque.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'Le conflit est structurel : chaque conscience est être-pour-soi qui cherche à nier l\'être-pour-autrui. La reconnaissance est toujours tentative d\'appropriation. L\'enfer, c\'est les autres car chaque liberté s\'affirme contre l\'autre.' }
      ]
    },
    {
      title: 'L\'argument du visage éthique',
      argument: 'Pour Levinas, le visage d\'autrui me convoque à une responsabilité infinie.',
      premises: [
        'Le visage d\'autrui est épiphanie du « faible » (pauvre, veuve, orphelin)',
        'Le visage me dit « tu ne tueras point »',
        'Cette parole est première, antérieure à toute décision',
        'Je suis responsable d\'autrui avant même de l\'avoir choisi'
      ],
      conclusion: 'L\'éthique est « philosophie première ». Avant l\'ontologie (être), il y a l\'éthique (responsabilité pour autrui).',
      objections: [
        { philosopher: 'Sartre', objection: 'Cette responsabilité est aliénation. Je ne suis pas responsable d\'autrui avant de l\'avoir choisi. La liberté est première.' },
        { philosopher: 'Les philosophes politiques', objection: 'L\'éthique du visage est abstraite. La responsabilité pour autrui doit être médiatisée par les institutions.' }
      ],
      responses: [
        { philosopher: 'Levinas', response: 'La responsabilité pour autrui n\'est pas choix mais obligation. Je suis « otage » d\'autrui, « substitué » à lui avant même d\'avoir consenti. Cette passivité est précisément l\'éthique.' }
      ]
    },
    {
      title: 'L\'argument de l\'intercorporéité',
      argument: 'Pour Merleau-Ponty, autrui est « autre corps propre » avec qui je suis en relation de chair.',
      premises: [
        'Mon corps n\'est pas objet mais « chair » (être au monde)',
        'Autrui est « autre corps propre », autre chair',
        'Notre relation est « intercorporéité » (entrelacs de chairs)',
        'Je peux « habiter » le corps d\'autrui par sympathie'
      ],
      conclusion: 'La relation à autrui n\'est pas cognition mais communion. Nous sommes « mêlés » au monde ensemble.',
      objections: [
        { philosopher: 'Sartre', objection: 'Cette intercorporéité est fusion qui nie l\'altérité. Autrui est transcendance, pas immanence.' },
        { philosopher: 'Les rationalistes', objection: 'La notion de « chair » est mystique. On ne peut pas « habiter » le corps d\'autrui.' }
      ],
      responses: [
        { philosopher: 'Merleau-Ponty', response: 'L\'intercorporéité ne nie pas l\'altérité mais la pense. Autrui n\'est pas objet de connaissance mais « autre moi » avec qui je partage un même monde. La sympathie est expérience immédiate de cette communion.' }
      ]
    }
  ],

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'alterius',
    greek: 'heteros (ἕτερος)',
    root: 'alter : autre (d\'un couple)',
    notes: 'Autrui vient de « alter huic » : « un autre pour ceci », « un autre à côté de moi ». Autrui n\'est pas n\'importe quel autre, mais l\'autre en relation avec moi.'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Sartre - Le regard objectivant',
      description: 'Dans L\'Être et le Néant (1943), Sartre analyse le regard d\'autrui comme expérience de mon objectivation. Quand je suis surpris à regarder autrui à travers la keyhole, je deviens « objet pour un sujet ». Le regard d\'autrui me vole mon monde, me confisque ma liberté. Je suis « vu » et donc réduit à ce que l\'autre voit de moi. Cette expérience est inévitable et conflictuelle : chaque conscience est liberté qui s\'affirme contre l\'autre liberté. D\'où la célèbre formule de Huis clos : « l\'enfer, c\'est les autres ».'
    },
    {
      title: 'Levinas - Le visage éthique',
      description: 'Dans Totalité et Infini (1961) et Autrement qu\'être (1974), Levinas analyse autrui comme visage qui me convoque à la responsabilité. Le visage n\'est pas objet de connaissance mais « épiphanie du faible » qui me commande « tu ne tueras point ». Cette parole est première, antérieure à toute décision. Je suis responsable d\'autrui avant même de l\'avoir choisi, responsable de sa responsabilité même. Cette passivité (« otage », « substitution ») est précisément l\'éthique comme « philosophie première ».'
    },
    {
      title: 'Merleau-Ponty - L\'intercorporéité',
      description: 'Dans Phénoménologie de la perception (1945) et Le Visible et l\'Invisible (1964), Merleau-Ponty analyse la relation à autrui comme « intercorporéité ». Autrui n\'est pas objet de connaissance mais « autre corps propre », autre « chair » avec qui je suis en relation d\'« entrelacs ». Je peux « habiter » le corps d\'autrui par sympathie, « voir selon » autrui. Cette communion de chairs précède la cognition : autrui m\'apparaît d\'abord comme « autre moi » avec qui je partage un même monde.'
    },
    {
      title: 'Husserl - L\'appresentation',
      description: 'Dans les Méditations cartésiennes (1931), Husserl analyse la perception d\'autrui comme « appresentation ». Je vois le corps d\'autrui comme corps physique, mais j\'« apprends » qu\'il est « animé » par une conscience par analogie avec mon corps propre. Autrui est « alter ego », autre ego que je constitue par « pairing » (accouplement) avec mon ego. Cette analyse reste solipsiste car c\'est moi qui constitue autrui comme sujet.'
    },
    {
      title: 'Buber - Je et Tu',
      description: 'Dans Je et Tu (1923), Martin Buber analyse la relation à autrui comme relation dialogale « Je-Tu » opposée à la relation « Je-Cela ». Dans le « Je-Tu », autrui n\'est pas objet mais sujet avec qui je suis en relation mutuelle. Cette relation est directe, sans médiation : je m\'adresse à autrui comme à une personne. Le « Je » n\'existe que dans la relation : « Je-Tu » ou « Je-Cela ».'
    },
    {
      title: 'Scheler - La sympathie',
      description: 'Dans Nature et formes de la sympathie (1913), Max Scheler critique la théorie de l\'analogie d\'Husserl. Pour Scheler, autrui m\'est « donné » immédiatement dans l\'expérience de la sympathie. Je ne déduis pas la douleur d\'autrui par analogie avec ma douleur, je « ressens » directement sa douleur « avec » lui. Cette « fusion » des sentiments est expérience originaire de l\'autre comme sujet.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    {
      name: 'Jean-Paul Sartre',
      period: '1905-1980',
      contribution: 'Analyse du regard d\'autrui comme objectivation dans L\'Être et le Néant (1943). Le regard me vole mon monde et me réduit à objet.',
      works: ['L\'Être et le Néant', 'Huis clos', 'L\'Existentialisme est un humanisme'],
      quotes: [
        '« L\'enfer, c\'est les autres. »',
        '« Je suis vu par autrui, donc je suis objet pour un sujet. »',
        '« Le regard d\'autrui me confisque mon monde. »',
        '« Autrui est médiation de ma conscience de soi. »'
      ]
    },
    {
      name: 'Emmanuel Levinas',
      period: '1906-1995',
      contribution: 'Autrui comme visage éthique dans Totalité et Infini (1961). Le visage me convoque à une responsabilité infinie.',
      works: ['Totalité et Infini', 'Autrement qu\'être ou au-delà de l\'essence', 'Éthique et infini'],
      quotes: [
        '« Le visage est l\'épiphanie du faible. »',
        '« Le visage me dit : tu ne tueras point. »',
        '« Je suis otage d\'autrui. »',
        '« L\'éthique est philosophie première. »',
        '« La responsabilité pour autrui est antérieure à toute décision. »'
      ]
    },
    {
      name: 'Maurice Merleau-Ponty',
      period: '1908-1961',
      contribution: 'La relation à autrui comme « intercorporéité » dans Phénoménologie de la perception (1945). Autrui comme « autre corps propre ».',
      works: ['Phénoménologie de la perception', 'Le Visible et l\'Invisible', 'L\'Œil et l\'Esprit'],
      quotes: [
        '« Autrui est un autre corps propre. »',
        '« Nous sommes en intercorporéité. »',
        '« Je peux habiter le corps d\'autrui par sympathie. »',
        '« Le visible et l\'invisible sont mêlés. »'
      ]
    },
    {
      name: 'Edmund Husserl',
      period: '1859-1938',
      contribution: 'L\'expérience d\'autrui comme « appresentation » dans les Méditations cartésiennes (1931). Autrui comme « alter ego ».',
      works: ['Méditations cartésiennes', 'Idées directrices', 'La Crise des sciences européennes'],
      quotes: [
        '« Autrui est alter ego. »',
        '« La conscience d\'autrui est appresentation. »',
        '« Je constitue autrui par analogie avec mon corps propre. »'
      ]
    },
    {
      name: 'Martin Buber',
      period: '1878-1965',
      contribution: 'La relation « Je-Tu » dans Je et Tu (1923). Autrui comme sujet de relation dialogale.',
      works: ['Je et Tu', 'Le problème de l\'homme', 'La Vie en dialogue'],
      quotes: [
        '« Dans le commencement est la relation. »',
        '« Je deviens un Je dans le Je-Tu. »',
        '« Tout véritable vivre est rencontre. »',
        '« Dieu est le Tu éternel. »'
      ]
    },
    {
      name: 'Max Scheler',
      period: '1874-1928',
      contribution: 'La sympathie comme expérience immédiate d\'autrui dans Nature et formes de la sympathie (1913).',
      works: ['Nature et formes de la sympathie', 'L\'Homme du ressentiment', 'Formalisme en éthique'],
      quotes: [
        '« Autrui m\'est donné immédiatement dans la sympathie. »',
        '« Je ne déduis pas la douleur d\'autrui, je la ressens avec lui. »',
        '« La sympathie est fusion des sentiments. »'
      ]
    }
  ],

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      name: 'Regard',
      type: 'REVEALS',
      description: 'Le regard d\'autrui m\'objective et me confisque mon monde (Sartre). Il me transforme en sujet-objet.',
      bidirectional: true
    },
    {
      name: 'Visage',
      type: 'REVEALS',
      description: 'Le visage d\'autrui est épiphanie du faible qui me convoque à la responsabilité éthique (Levinas).',
      bidirectional: true
    },
    {
      name: 'Éthique',
      type: 'OPENS_TO',
      description: 'La rencontre d\'autrui est le commencement de l\'éthique. L\'éthique est responsabilité pour l\'autre (Levinas).',
      bidirectional: true
    },
    {
      name: 'Conscience',
      type: 'RELATES_TO',
      description: 'Autrui est une autre conscience qui me regarde. La conscience n\'est pas solipsiste.',
      bidirectional: true
    },
    {
      name: 'Liberté',
      type: 'CONFLICTS_WITH',
      description: 'La liberté d\'autrui entre en conflit avec ma liberté (Sartre). Chaque conscience s\'affirme contre l\'autre.',
      bidirectional: true
    },
    {
      name: 'Corps',
      type: 'RELATES_TO',
      description: 'Autrui est « autre corps propre » avec qui je suis en intercorporéité (Merleau-Ponty).',
      bidirectional: true
    },
    {
      name: 'Responsabilité',
      type: 'REVEALS',
      description: 'La rencontre d\'autrui me révèle une responsabilité infinie que je n\'ai pas choisie (Levinas).',
      bidirectional: true
    }
  ],

  // ===== COURANTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      name: 'Existentialisme',
      description: 'Autrui comme sujet qui me regarde et m\'objective. Expérience de l\'altérité.',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Jean-Paul Sartre', 'Emmanuel Levinas', 'Maurice Merleau-Ponty', 'Simone de Beauvoir']
    },
    {
      name: 'Phénoménologie',
      description: 'L\'expérience d\'autrui comme « appresentation » (Husserl) ou « autre corps propre » (Merleau-Ponty).',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Edmund Husserl', 'Max Scheler', 'Maurice Merleau-Ponty', 'Emmanuel Levinas']
    },
    {
      name: 'Philosophie du dialogue',
      description: 'La relation « Je-Tu » comme rencontre dialogale avec autrui (Buber).',
      role: 'RELATED',
      keyPhilosophers: ['Martin Buber', 'Franz Rosenzweig', 'Emmanuel Levinas']
    },
    {
      name: 'Éthique',
      description: 'L\'éthique comme responsabilité pour autrui. Autrui comme commencement de l\'éthique (Levinas).',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Emmanuel Levinas', 'Martin Buber', 'Max Scheler']
    },
    {
      name: 'Sociologie',
      description: 'Autrui comme « sociabilité » (Simmel). La relation individuelle comme base de la société.',
      role: 'RELATED',
      keyPhilosophers: ['Georg Simmel', 'Gabriel Tarde']
    }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le keyhole chez Sartre : Sartre décrit un homme qui épie à travers la serrure, fasciné par ce qu\'il voit. Soudain, il entend des pas dans le couloir : quelqu\'un le regarde. Dans cet instant, il est « vu », il devient objet pour un sujet. Son monde lui est volé, il est réduit à ce que l\'autre voit de lui : un voyeur honteux.',
    'Le visage du pauvre chez Levinas : Le visage de l\'autre - surtout du pauvre, de la veuve, de l\'orphelin - m\'apparait comme commande éthique. Dans le visage, je lis « tu ne tueras point ». Cette parole n\'est pas information mais injonction, assignation à une responsabilité que je n\'ai pas choisie.',
    'L\'enfant blessé : Quand je vois un enfant pleurer, je ne « déduis » pas sa douleur par analogie avec la mienne. Je « ressens » sa douleur avec lui, par sympathie immédiate. Cette fusion des sentiments est expérience d\'autrui comme sujet (Scheler).',
    'Le regard du garçon de café : Chez Sartre, le client regarde le serveur. Ce regard transforme le serveur en « garçon de café » comme objet de perception. Le serveur est réduit à ce que le client voit : un homme en tablier qui apporte des consommations.',
    'La danse à deux : Quand je danse avec quelqu\'un, je ne suis pas seul face à un objet. Nous sommes en « intercorporéité » (Merleau-Ponty) : mon corps répond à son corps, nos mouvements s\'harmonisent. Je peux « habiter » son corps, anticiper ses gestes. Cette communion de chairs est relation à autrui comme sujet.',
    'L\'hôpital de campagne : Pendant la guerre, le médecin soigne des soldats ennemis. Il ne voit pas des « Allemands » ou des « Français » mais des visages qui lui commandent « tu ne tueras point ». Sa responsabilité pour ces visages est infinie, antérieure à toute décision politique (Levinas).'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Traité d\'ontologie phénoménologique avec analyse du regard d\'autrui comme objectivation',
      quotes: [
        'L\'enfer, c\'est les autres.',
        'Je suis vu par autrui, donc je suis objet pour un sujet.',
        'Le regard d\'autrui me confisque mon monde.',
        'Autrui est médiation de ma conscience de soi.',
        'Je suis pour autrui un corps-pour-autrui.',
        'Le regard est l\'instrument magique qui me change en objet.',
        'Chaque conscience est être-pour-soi qui cherche à nier l\'être-pour-autrui.'
      ]
    },
    {
      title: 'Huis clos',
      author: 'Jean-Paul Sartre',
      year: 1944,
      type: 'PLAY' as const,
      reference: 'Pièce de théâtre illustrant « l\'enfer, c\'est les autres »',
      quotes: [
        'L\'enfer, c\'est les autres.',
        'On n\'a besoin que de deux consciences pour faire l\'enfer.',
        'Nous sommes tous des pécheurs, mais nous ne pouvons nous pardonner les uns les autres.'
      ]
    },
    {
      title: 'Totalité et Infini',
      author: 'Emmanuel Levinas',
      year: 1961,
      type: 'BOOK' as const,
      reference: 'Essai sur l\'extériorité avec analyse du visage comme commandement éthique',
      quotes: [
        'Le visage est l\'épiphanie du faible.',
        'Le visage me dit : tu ne tueras point.',
        'Je suis otage d\'autrui.',
        'L\'éthique est philosophie première.',
        'La responsabilité pour autrui est antérieure à toute décision.',
        'Autrui n\'est pas un corrélatif de mon être, mais ce dont je suis otage.',
        'La relation à autrui est relation asymétrique.'
      ]
    },
    {
      title: 'Autrement qu\'être ou au-delà de l\'essence',
      author: 'Emmanuel Levinas',
      year: 1974,
      type: 'BOOK' as const,
      reference: 'Approfondissement de l\'éthique comme « substitution » à autrui',
      quotes: [
        'Je suis substitué à autrui avant même d\'avoir consenti.',
        'La responsabilité est responsabilité pour la responsabilité d\'autrui.',
        'La subjectivité est être-hostage.',
        'L\'éthique est antérieure à l\'ontologie.',
        'Dire, c\'est se porter en aide à autrui.'
      ]
    },
    {
      title: 'Phénoménologie de la perception',
      author: 'Maurice Merleau-Ponty',
      year: 1945,
      type: 'BOOK' as const,
      reference: 'Traité de phénoménologie avec analyse de la relation à autrui comme intercorporéité',
      quotes: [
        'Autrui est un autre corps propre.',
        'Nous sommes en intercorporéité.',
        'Je peux habiter le corps d\'autrui par sympathie.',
        'Le visible et l\'invisible sont mêlés.',
        'La chair est être au monde.',
        'Autrui n\'est pas objet de connaissance mais autre moi.'
      ]
    },
    {
      title: 'Le Visible et l\'Invisible',
      author: 'Maurice Merleau-Ponty',
      year: 1964,
      type: 'BOOK' as const,
      reference: 'Œuvre posthume sur l\'ontologie de la chair et l\'intercorporéité',
      quotes: [
        'La chair est matière de l\'être.',
        'Je touche le touchant, je vois le voyant.',
        'L\'intercorporéité est entrelacs des chairs.',
        'Autrui est un « autre moi » avec qui je partage un même monde.'
      ]
    },
    {
      title: 'Méditations cartésiennes',
      author: 'Edmund Husserl',
      year: 1931,
      type: 'BOOK' as const,
      reference: 'Cours sur la réduction phénoménologique et la constitution d\'autrui comme alter ego',
      quotes: [
        'Autrui est alter ego.',
        'La conscience d\'autrui est appresentation.',
        'Je constitue autrui par analogie avec mon corps propre.',
        'L\'expérience d\'autrui est « pairing » avec mon ego.',
        'Mon ego et l\'ego d\'autrui sont « accouplés ».'
      ]
    },
    {
      title: 'Je et Tu',
      author: 'Martin Buber',
      year: 1923,
      type: 'BOOK' as const,
      reference: 'Essai sur la relation dialogale comme structure fondamentale de l\'existence',
      quotes: [
        'Dans le commencement est la relation.',
        'Je deviens un Je dans le Je-Tu.',
        'Tout véritable vivre est rencontre.',
        'Dieu est le Tu éternel.',
        'Le monde est double pour l\'homme : monde-Cela et monde-Tu.',
        'Dans le Je-Tu, je ne fais pas l\'expérience de l\'autre mais la rencontre.'
      ]
    },
    {
      title: 'Nature et formes de la sympathie',
      author: 'Max Scheler',
      year: 1913,
      type: 'BOOK' as const,
      reference: 'Analyse phénoménologique de la sympathie comme expérience immédiate d\'autrui',
      quotes: [
        'Autrui m\'est donné immédiatement dans la sympathie.',
        'Je ne déduis pas la douleur d\'autrui, je la ressens avec lui.',
        'La sympathie est fusion des sentiments.',
        'Il y a autant de formes de sympathie que de formes d\'amour.',
        'La sympathie n\'est ni contagion ni émotion projetée mais participation.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce qu\'autrui selon Sartre ?',
      back: 'Pour Sartre, autrui est un autre sujet qui me regarde et m\'objective. Le regard d\'autrui me vole mon monde et me transforme en objet pour un sujet. Cette expérience est conflictuelle : « l\'enfer, c\'est les autres ».',
      difficulty: 2
    },
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce qu\'autrui selon Levinas ?',
      back: 'Pour Levinas, autrui est « visage » qui me convoque à la responsabilité éthique. Le visage dit « tu ne tueras point » et m\'assigne à une responsabilité infinie. L\'éthique est « philosophie première ».',
      difficulty: 2
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre le regard (Sartre) et le visage (Levinas) ?',
      back: 'Le regard objectivant de Sartre me transforme en objet pour un sujet, me confisque mon monde. Le visage éthique de Levinas me convoque à la responsabilité, me commande « tu ne tueras point ». L\'un est conflictuel, l\'autre est éthique.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre illustre-t-il le regard d\'autrui ?',
      back: 'Sartre utilise l\'exemple du keyhole : un homme qui épie à travers la serrure est fasciné par ce qu\'il voit. Soudain, il entend des pas : quelqu\'un le regarde. Dans cet instant, il est « vu », il devient objet pour un sujet. Son monde lui est volé.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que l\'« intercorporéité » chez Merleau-Ponty ?',
      back: 'L\'intercorporéité est la relation entre « chairs » (corps propre) : autrui est « autre corps propre » avec qui je suis en entrelacs. Je peux « habiter » le corps d\'autrui par sympathie, « voir selon » autrui. La relation à autrui est communion de chairs.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que l\'« appresentation » chez Husserl ?',
      back: 'L\'appresentation est la constitution d\'autrui comme « alter ego » par analogie. Je vois le corps physique d\'autrui et j\'apprends qu\'il est « animé » par analogie avec mon corps propre. Autrui est « autre ego » que je constitue.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la relation « Je-Tu » chez Buber ?',
      back: 'La relation « Je-Tu » est relation dialogale où autrui n\'est pas objet (« Cela ») mais sujet (« Tu ») avec qui je suis en rencontre mutuelle. Le « Je » n\'existe que dans la relation : « Je-Tu » ou « Je-Cela ».',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle œuvre contient cette citation : « L\'enfer, c\'est les autres » ?',
      back: 'Huis clos, Jean-Paul Sartre (1944)',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle œuvre contient cette citation : « Le visage est l\'épiphanie du faible » ?',
      back: 'Totalité et Infini, Emmanuel Levinas (1961)',
      difficulty: 2
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle œuvre contient cette citation : « Dans le commencement est la relation » ?',
      back: 'Je et Tu, Martin Buber (1923)',
      difficulty: 2
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Sartre, le {{regard}} d\'autrui m\'{{objectivise}}.',
      back: 'regard | objectivise',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Levinas, le {{visage}} me dit « tu ne {{tueras}} point ».',
      back: 'visage | tueras',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Merleau-Ponty, nous sommes en {{intercorporéité}}.',
      back: 'intercorporéité',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'En quoi la rencontre d\'autrui est-elle le commencement de l\'éthique selon Levinas ?',
      back: 'Pour Levinas, la rencontre du visage d\'autrui est événement éthique originaire. Le visage - surtout du faible (pauvre, veuve, orphelin) - m\'apparait comme « épiphanie » qui me commande « tu ne tueras point ». Ce commandement n\'est pas information mais injonction, assignation à une responsabilité infinie. Je suis « otage » d\'autrui, « substitué » à lui avant même d\'avoir consenti. Cette passivité est précisément l\'éthique. Contrairement à l\'ontologie qui pense l\'être, l\'éthique pense la relation à autrui comme première. L\'éthique est donc « philosophie première » : avant toute question sur l\'être, il y a la responsabilité pour l\'autre. Le visage révèle que l\'homme n\'est pas être pour soi mais être pour l\'autre.',
      difficulty: 5
    },
    {
      type: 'ESSAY' as const,
      front: 'Comparez les conceptions de l\'autre chez Sartre et Levinas.',
      back: 'Pour Sartre, autrui est d\'abord « regard » qui m\'objective. Dans L\'Être et le Néant, le regard d\'autrui me vole mon monde, me transforme en objet pour un sujet. Cette expérience est conflictuelle : chaque conscience est liberté qui s\'affirme contre l\'autre liberté. D\'où « l\'enfer, c\'est les autres ». Pour Levinas au contraire, autrui est « visage » qui me convoque à la responsabilité. Le visage ne m\'objectivise pas mais m\'assigne à une éthique de l\'accueil. Là où Sartre voit conflit de libertés, Levinas voit obligation éthique. Là où Sartre voit l\'autre comme menace pour ma liberté, Levinas voit l\'autre comme commandement qui me fonde comme sujet éthique. Ces deux conceptions s\'opposent mais se complètent : la relation à l\'autre est à la fois expérience de l\'altérité (Sartre) et événement éthique (Levinas).',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['autrui', 'sartre', 'levinas', 'merleau-ponty', 'husserl', 'buber', 'regard', 'visage', 'éthique', 'responsabilité', 'intercorporéité', 'je-tu']
};
