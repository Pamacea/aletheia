/**
 * Conscience - Concept Data
 * Connaissance réflexive de soi, capacité de représentation et intentionnalité
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'conscience',
  name: 'Conscience',
  slug: 'conscience',
  category: 'philosophie_de_lesprit',

  // ===== MÉTADONNÉES =====
  difficulty: 5,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'La conscience est la connaissance réflexive que l\'esprit a de lui-même et de ses états. La philosophie distingue plusieurs dimensions : la conscience comme conscience de soi (réflexivité) ; la conscience comme intentionalité (conscience de quelque chose) ; la conscience phénoménale (qualia, expérience subjective) vs conscience fonctionnelle (accès à l\'information). Descartes fonde la modernité sur le cogito (« je pense donc je suis ») : la conscience est le point d\'absolu certitude. Pour Husserl, la conscience est toujours conscience de quelque chose (intentionnalité). Pour Sartre, la conscience est néantisation de l\'être : elle est toujours « conscience de » et jamais « conscience ». Pour la philosophie de l\'esprit contemporaine, le « problème difficile de la conscience » (Chalmers) est de comprendre comment des processus physiques peuvent produire des expériences subjectives.',
  shortDefinition: 'Connaissance réflexive de soi et intentionalité - conscience de quelque chose',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'conscientia : cum + scire (savoir avec)',
    greek: 'syneidesis (συνείδησις)',
    root: 'savoir ensemble, connaissance partagée, puis connaissance morale de soi',
    notes: 'À Rome, conscientia désigne le témoignage ; en philosophie, la conscience de soi ; en morale, la conscience morale'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du cogito (Descartes)',
        explanation: 'En doutant de tout, je découvre une vérité indubitable : je doute, donc je pense, donc je suis. La conscience pensante est le point archimédique indubitable sur lequel reconstruire toute la connaissance.',
        premises: ['Je peux douter de tout', 'En doutant, je pense', 'Pour penser, il faut être', 'Donc je suis est indubitable'],
        conclusion: 'La conscience pensante est le fondement certain de toute connaissance'
      },
      {
        argument: 'Argument de l\'intentionnalité (Husserl)',
        explanation: 'Toute conscience est conscience de quelque chose. Il n\'y a pas de conscience vide, fermée sur elle-même. Même quand je pense à « rien », je pense à « rien » - c\'est encore une visée. L\'intentionnalité est la structure essentielle de la conscience.',
        premises: ['Tous les exemples de conscience sont conscience de quelque chose', 'Il n\'y a pas de contre-exemple de conscience sans objet', 'Donc l\'intentionnalité est essentielle à la conscience'],
        conclusion: 'La conscience est toujours visée d\'objet, structure intentionnelle'
      },
      {
        argument: 'Argument du problème difficile (Chalmers)',
        explanation: 'Expliquer les fonctions cognitives (perception, attention, mémoire) est le « problème facile ». Le « problème difficile » est : pourquoi y a-t-il quelque chose que cela fait d\'être conscient ? Pourquoi le traitement de l\'information s\'accompagne-t-il d\'expériences subjectives ?',
        premises: ['Les processus physiques expliquent les fonctions cognitives', 'Mais ils n\'expliquent pas les expériences subjectives (qualia)', 'Le rouge n\'est pas seulement 700nm, c\'est « voir du rouge »', 'Cette expérience subjective n\'est pas réductible au physique'],
        conclusion: 'La conscience a une propriété irréductible : l\'expérience subjective'
      }
    ],
    objections: [
      {
        objection: 'Objection physicaliste',
        content: 'La conscience est un processus physique du cerveau. Si l\'on connaissait tous les processus neuronaux, on comprendrait la conscience. Les qualia sont des illusions.',
        response: 'Chalmers : même une connaissance complète du cerveau n\'expliquerait pas pourquoi il y a « quelque chose que ça fait ». Le « gap explicatif » persiste.'
      },
      {
        objection: 'Objection fonctionnaliste',
        content: 'La conscience n\'est pas un mystère. C\'est un ensemble de fonctions cognitives : traitement de l\'information, attention, mémoire. Pas besoin de propriétés mystérieuses.',
        response: 'Le fonctionnalisme explique ce que la conscience fait mais pas ce que ça fait d\'être conscient. Un zombie fonctionnel (sans expérience) est conceivable.'
      },
      {
        objection: 'Objection behavioriste',
        content: 'La conscience n\'est qu\'un comportement verbal. Dire « j\'ai mal » n\'est pas différent de crier de douleur. C\'est du behaviorisme verbal.',
        response: 'L\'introspection révèle une différence entre dire « j\'ai mal » et avoir mal. La douleur est une expérience, pas seulement un comportement.'
      }
    ],
    distinctions: [
      {
        distinction: 'Conscience vs Inconscient',
        explanation: 'Freud découvre que la conscience n\'est pas le centre du psychisme mais sa surface. La plupart de nos pensées, désirs, souvenirs sont inconscients et nous influencent sans que nous le sachions.'
      },
      {
        distinction: 'Conscience phénoménale vs Conscience d\'accès',
        explanation: 'La conscience phénoménale est l\'expérience subjective (qualia). La conscience d\'accès est la disponibilité de l\'information pour le raisonnement et le comportement. On peut avoir l\'une sans l\'autre.'
      },
      {
        distinction: 'Conscience vs Connaissance',
        explanation: 'La conscience est connaissance réflexive : non seulement connaître quelque chose, mais savoir qu\'on le connaît. Cette réflexivité est unique à la conscience.'
      },
      {
        distinction: 'Conscience vs Attention',
        explanation: 'On peut porter attention à quelque chose sans en être conscient (attention aveugle). On peut être conscient de quelque chose sans y porter attention (conscience périphérique).'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      conceptId: 'esprit',
      relation: 'IS_A',
      explanation: 'La conscience est une propriété de l\'esprit. Mais l\'esprit peut-il exister sans conscience ? L\'inconscient freudien suggère que oui.'
    },
    {
      conceptId: 'corps',
      relation: 'INFLUENCES',
      explanation: 'Le problème corps-esprit : comment des processus neuronaux peuvent-ils produire des expériences conscientes ? Relation énigmatique.'
    },
    {
      conceptId: 'inconscient',
      relation: 'OPPOSE',
      explanation: 'L\'inconscient est la partie du psychisme inaccessible à la conscience. Freud montre que la conscience est la surface, non le centre.'
    },
    {
      conceptId: 'intentionalite',
      relation: 'BUILDS_ON',
      explanation: 'L\'intentionnalité est la propriété de la conscience d\'être toujours « conscience de quelque chose » (Husserl, Brentano).'
    },
    {
      conceptId: 'qualia',
      relation: 'PART_OF',
      explanation: 'Les qualia sont les expériences subjectives de la conscience : le « rouge », la « douleur », etc. C\'est le problème difficile de la conscience.'
    },
    {
      conceptId: 'sujet',
      relation: 'INFLUENCES',
      explanation: 'La conscience présuppose un sujet qui est conscient. Mais le sujet est-il une substance ou une construction ?'
    },
    {
      conceptId: 'liberte',
      relation: 'INFLUENCES',
      explanation: 'La conscience semble être la condition de la liberté. Pour Sartre, la conscience est liberté absolue.'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Cartésianisme',
      role: 'FOUNDATIONAL',
      description: 'Descartes fonde la philosophie moderne sur la conscience comme certitude absolue. Cogito ergo sum : la conscience pensante devient le fondement de la connaissance.'
    },
    {
      movement: 'Phénoménologie',
      role: 'CENTRAL',
      description: 'Husserl, Heidegger, Sartre, Merleau-Ponty : analyse de la conscience comme intentionalité, temporalité, incarnation. « Retour aux choses mêmes ».'
    },
    {
      movement: 'Psychanalyse',
      role: 'CRITICAL',
      description: 'Freud, Lacan : découverte de l\'inconscient. La conscience n\'est plus le centre du psychisme mais sa surface. Révolution copernicienne du sujet.'
    },
    {
      movement: 'Philosophie de l\'esprit',
      role: 'CENTRAL',
      description: 'Chalmers, Nagel, Searle : étude contemporaine de la conscience. Problème difficile, physicalisme, dualisme, fonctionnalisme.'
    },
    {
      movement: 'Existentialisme',
      role: 'RELATED',
      description: 'Sartre, Merleau-Ponty : la conscience comme néantisation, comme corps propre, comme existence projetée.'
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `La conscience comme problème philosophique naît avec Descartes (1641). Dans les Méditations métaphysiques, Descartes découvre le cogito comme vérité indubitable : « je pense, donc je suis ». La conscience pensante (res cogitans) devient le fondement de toute connaissance, par opposition à la substance étendue (res extensa). Cette fondation cartésienne de la philosophie sur la conscience marque la modernité.

Locke (1690) distingue conscience réflexive (conscience de soi) et conscience perceptive. Pour lui, la conscience est ce qui constitue l'identité personnelle à travers le temps.

Leibniz (1704) critique Locke avec la métaphore des « monades » : chaque âme est une monade sans fenêtres, reflétant l'univers de son point de vue. La conscience est apperception : conscience de la conscience.

Kant (1781) transforme la conscience en « unité synthétique de l'aperception » : le « je pense » doit pouvoir accompagner toutes mes représentations. La conscience transcendantale est la condition de l'expérience.

Hegel (1807) analyse la conscience comme moment du développement de l'esprit : conscience malheureuse, désir, reconnaissance. La conscience se réalise dans l'histoire.

Freud (1900) révolutionne la conception de la conscience en découvrant l'inconscient. La conscience n'est plus le centre mais la surface du psychisme. La plupart de nos processus mentaux sont inconscients.

Husserl (1913) fonde la phénoménologie sur l'intentionnalité : « toute conscience est conscience de quelque chose ». L'analyse de la conscience du temps (rétention, protension) inaugure la phénoménologie.

Heidegger (1927) dépasse la conscience comme subjectivité pour aller vers l'« être-là » (Dasein) : être-au-monde, pas être-devant-le-monde. La conscience n'est pas une substance mais une manière d'être.

Sartre (1943) analyse la conscience comme néantisation : « conscience de » jamais « conscience ». Le pour-soi poursuit l'impossible projet de se faire en-soi.

Merleau-Ponty (1945) montre que la conscience est toujours incarnée : « je suis mon corps ». La perception n'est pas représentation mais engagement corporel dans le monde.

Aujourd'hui, la philosophie de l'esprit (Chalmers, Nagel) pose le « problème difficile de la conscience » : pourquoi les processus physiques produisent-ils des expériences subjectives ? La question reste ouverte.`,

    problems: [
      {
        problem: 'Problème corps-esprit',
        description: 'Comment des processus neuronaux, purement physiques, peuvent-ils produire des expériences subjectives ? Pourquoi le traitement de l\'information s\'accompagne-t-il de qualia ?'
      },
      {
        problem: 'Problème difficile de la conscience',
        description: 'Expliquer les fonctions cognitives (perception, attention) est « facile ». Le « difficile » est : pourquoi y a-t-il quelque chose que cela fait d\'être conscient ?'
      },
      {
        problem: 'Problème de l\'unité de la conscience',
        description: 'Comment une multiplicité de processus neuronaux produit-elle l\'unité de l\'expérience consciente ? Pourquoi est-ce que je suis un, pas plusieurs ?'
      },
      {
        problem: 'Problème de la conscience morale',
        description: 'La conscience morale est-elle innée (Rousseau) ou acquise (Kant) ? Est-elle voix de la nature ou raison pratique ?'
      }
    ],

    debates: [
      {
        issue: 'La conscience est-elle physique ou irréductible ?',
        positions: [
          {
            philosopher: 'Descartes',
            position: 'Dualisme substance : la conscience (res cogitans) est une substance distincte du corps (res extensa). Interaction par la glande pinéale.'
          },
          {
            philosopher: 'Chalmers',
            position: 'Dualisme propriété : la conscience est une propriété fondamentale de la matière, comme la masse ou la charge. Irréductible au physique.'
          },
          {
            philosopher: 'Searle',
            position: 'Physicalisme biologique : la conscience est un processus biologique du cerveau, émergent mais naturel. Pas de mystère.'
          },
          {
            philosopher: 'Nagel',
            position: 'Physicalisme ouvert : la conscience est physique mais nous ne comprenons pas encore comment. Le « gap » est épistémique, pas ontologique.'
          }
        ]
      },
      {
        issue: 'La conscience est-elle le centre du psychisme ?',
        positions: [
          {
            philosopher: 'Descartes',
            position: 'Oui. La conscience pensante est le fondement de la connaissance. Tout ce qui est mental est conscient ou accessible à la conscience.'
          },
          {
            philosopher: 'Freud',
            position: 'Non. L\'inconscient est la véritable réalité psychique. La conscience n\'est qu\'une surface, un système parmi d\'autres.'
          },
          {
            philosopher: 'Heidegger',
            position: 'La question est mal posée. L\'être-là n\'est pas conscience mais être-au-monde. La conscience n\'est pas un sujet fermé sur soi.'
          }
        ]
      },
      {
        issue: 'Qu\'est-ce que l\'intentionnalité ?',
        positions: [
          {
            philosopher: 'Husserl',
            position: 'L\'intentionnalité est la propriété essentielle de la conscience : « toute conscience est conscience de quelque chose ». Structure visée d\'objet.'
          },
          {
            philosopher: 'Brentano',
            position: 'L\'intentionnalité est le marqueur du mental : tout phénomène mental est dirigé vers un objet. Distinction phénomène/physique.'
          },
          {
            philosopher: 'Sartre',
            position: 'L\'intentionnalité est néantisante : la conscience est toujours « conscience de », jamais « conscience ». Elle est pure extériorité.'
          }
        ]
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Cogito cartésien',
      description: 'Descartes fonde la philosophie moderne sur le cogito : « je pense, donc je suis ». En doutant de tout, je découvre que je ne peux douter que je doute. La pensée consciente est le point d\'absolu certitude, le fondement indubitable sur lequel reconstruire la connaissance. La conscience est substance pensante (res cogitans), par opposition à la substance étendue (res extensa).',
      philosophicalContext: 'Le cogito est le point archimédique de la connaissance moderne. La conscience devient le sujet certain à partir duquel tout peut être reconstruit, y compris l\'existence de Dieu et du monde.'
    },
    {
      title: 'Intentionnalité (Husserl)',
      description: 'Husserl reprend à Brentano la thèse de l\'intentionnalité : « toute conscience est conscience de quelque chose ». Il n\'y a pas de conscience vide, fermée sur elle-même. La conscience est toujours visée d\'objet, même si cet objet n\'existe pas (je peux penser à une licorne). L\'intentionnalité est la structure essentielle de la conscience.'
    },
    {
      title: 'Conscience réflexive',
      description: 'La conscience a la capacité de se prendre elle-même pour objet. Je ne suis pas seulement conscient des choses, je peux être conscient d\'être conscient. Cette réflexivité est ce qui permet la conscience de soi, l\'auto-examen, la philosophie elle-même. Pour Sartre, c\'est dans l\'acte réflexif que le pour-soi se coïncide avec soi - mais cette coïncidence est toujours fuyante.'
    },
    {
      title: 'Conscience morale',
      description: 'La conscience morale est la faculté de discerner le bien et le mal, de juger ses propres actions. Pour Rousseau, elle est « instinct divin », voix de la nature qui nous guide sans besoin de raison. Pour Kant, elle n\'est pas un sentiment mais la raison pratique qui dicte la loi morale. La mauvaise conscience est le sentiment de culpabilité qui survient quand on trahit ses propres valeurs.'
    },
    {
      title: 'Le problème difficile (Chalmers)',
      description: 'David Chalmers distingue le « problème facile » de la conscience (expliquer les fonctions cognitives : perception, attention, mémoire) du « problème difficile » (expliquer pourquoi et comment il y a quelque chose que cela fait d\'être conscient, d\'avoir des qualia). Pourquoi la perception de la rougeur s\'accompagne-t-elle de l\'expérience subjective du rouge ? Ce mystère reste sans réponse satisfaisante.'
    },
    {
      title: 'Conscience et inconscient (Freud)',
      description: 'Freud révolutionne la conception de la conscience en découvrant l\'inconscient : la conscience n\'est qu\'une petite partie du psychisme, la pointe émergée de l\'iceberg. La plupart de nos pensées, désirs, souvenirs sont inconscients et nous influencent sans que nous le sachions. La conscience n\'est pas le centre mais la surface, elle ne dirige pas mais est dirigée par les processus inconscients.'
    },
    {
      title: 'Conscience et cerveau',
      description: 'Le problème corps-esprit se pose ici de manière aiguë : comment des neurones, processus purement physiques, peuvent-ils produire des expériences conscientes ? Les théories physicalistes (identité esprit-cerveau, fonctionnalisme) affirment que la conscience est un processus physique. Les dualistes soutiennent qu\'elle est irréductible. La question reste ouverte.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'René Descartes', period: '1596-1650', contribution: 'Fondation de la philosophie moderne sur la conscience comme certitude absolue' },
    { name: 'Edmund Husserl', period: '1859-1938', contribution: 'Phénoménologie de la conscience comme intentionalité' },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'Conscience comme néantisation et pour-soi' },
    { name: 'Sigmund Freud', period: '1856-1939', contribution: 'Découverte de l\'inconscient et repositionnement de la conscience' },
    { name: 'David Chalmers', period: '1966-', contribution: 'Formulation du « problème difficile de la conscience »' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Conscience transcendantale et unité synthétique de l\'aperception' },
    { name: 'Maurice Merleau-Ponty', period: '1908-1961', contribution: 'Conscience comme corps propre et perception incarnée' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le doute de Descartes : En doutant de tout (mon corps, le monde extérieur, les mathématiques), Descartes découvre qu\'il ne peut douter qu\'il doute. Cette vérité (« je pense, donc je suis ») est absolument certaine et devient le fondement de toute connaissance. La conscience pensante est le point archimédique indubitable.',
    'La conscience du rouge : La perception du rouge n\'est pas simplement détection de longueur d\'onde 700nm. C\'est une expérience subjective, le « rouge » comme qualité vécue (qualia). Un Martien pourrait analyser physiquement le rouge sans jamais « savoir ce que ça fait » de voir le rouge. C\'est le problème difficile.',
    'Le précepteur chez Rousseau : Dans Émile, Rousseau montre l\'éveil de la conscience morale. L\'enfant doit apprendre à ne pas faire aux autres ce qu\'il ne voudrait pas qu\'on lui fasse. Cette conscience n\'est pas raisonnée mais sentiment immédiat de la valeur de l\'autre, « instinct divin » qui précède la raison.',
    'Le rêveur : Quand je rêve, j\'ai des expériences conscientes (je vois, je ressens) sans perception du monde extérieur. À l\'inverse, dans l\'état végétatif ou sous anesthésie, il peut y avoir perception sans conscience. Ces montrent que conscience et perception sont dissociables.',
    'Le cinéphile qui pleure : Le spectateur qui pleure devant un film sait que l\'histoire est fictive. Pourtant il est ému. Cette double conscience (savoir que c\'est faux + ressentir comme si c\'était vrai) montre la complexité de la conscience : elle peut croire et ne pas croire en même temps.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Méditations métaphysiques',
      author: 'René Descartes',
      year: 1641,
      type: 'BOOK' as const,
      reference: 'Fondation de la philosophie moderne sur le cogito',
      quotes: [
        'Je pense, donc je suis.',
        'Je suis une chose qui pense.',
        'La conscience est la substance pensante.',
        'L\'âme est plus facile à connaître que le corps.',
        'Je ne suis que cette chose qui pense.',
        'La pensée est l\'attribut essentiel de l\'âme.'
      ]
    },
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Ontologie de la conscience comme néantisation',
      quotes: [
        'La conscience est toujours conscience de quelque chose.',
        'Le pour-soi est ce qui n\'est pas ce qu\'il est.',
        'La conscience est un trou d\'être.',
        'Le néant est au cœur de l\'homme.',
        'La conscience est hantée par le corps qu\'elle est.',
        'La conscience est pure extériorité.',
        'Le pour-soi poursuit l\'impossible projet de se faire en-soi.'
      ]
    },
    {
      title: 'Idées directrices pour une phénoménologie',
      author: 'Edmund Husserl',
      year: 1913,
      type: 'BOOK' as const,
      reference: 'Fondation de la phénoménologie sur l\'intentionnalité',
      quotes: [
        'Toute conscience est conscience de quelque chose.',
        'L\'intentionnalité est la propriété essentielle de la conscience.',
        'Retour aux choses mêmes.',
        'La conscience est toujours conscience de...',
        'Le monde vécu est le fondement de toute science.',
        'L\'intentionnalité est visée de sens.'
      ]
    },
    {
      title: 'Métapsychologie',
      author: 'Sigmund Freud',
      year: 1915,
      type: 'BOOK' as const,
      reference: 'Théorie de l\'inconscient comme structure du psychisme',
      quotes: [
        'La conscience est une surface du psychisme.',
        'L\'inconscient est la véritable réalité psychique.',
        'Le Moi n\'est pas maître dans sa propre maison.',
        'Les pensées conscientes ne sont que les actes manqués de l\'inconscient.',
        'Le refoulement est le mécanisme fondamental.',
        'La conscience est le système perception-conscience.'
      ]
    },
    {
      title: 'L\'Émile',
      author: 'Jean-Jacques Rousseau',
      year: 1762,
      type: 'BOOK' as const,
      reference: 'Traité d\'éducation et analyse de la conscience morale',
      quotes: [
        'La conscience est le instinct divin.',
        'La conscience ne trompe point.',
        'La raison nous trompe, la conscience jamais.',
        'Fais à autrui ce que tu voudrais qu\'on te fît.',
        'Le sentiment de l\'existence précède la raison.',
        'La conscience est le guide naturel de l\'homme.'
      ]
    },
    {
      title: 'Phénoménologie de la perception',
      author: 'Maurice Merleau-Ponty',
      year: 1945,
      type: 'BOOK' as const,
      reference: 'Analyse de la conscience incarnée et du corps propre',
      quotes: [
        'Je suis mon corps.',
        'La conscience est au monde, non devant le monde.',
        'Le corps propre est le nœud du monde vécu.',
        'Percevoir, c\'est se lier au monde.',
        'La conscience est toujours incarnée.',
        'Le visible et l\'invisible s\'entrelacent.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que l\'intentionnalité chez Husserl ?',
      back: 'L\'intentionnalité est la propriété de la conscience d\'être toujours « conscience de quelque chose ». Il n\'y a pas de conscience vide, fermée sur elle-même. Même quand je pense à rien, je pense à « rien » - c\'est encore une visée. L\'intentionnalité est la structure essentielle de toute conscience.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Descartes fonde-t-il la philosophie sur la conscience ?',
      back: 'Descartes utilise le doute méthodique pour trouver une vérité indubitable. En doutant de tout, il découvre qu\'il ne peut douter qu\'il doute. Ce cogito (« je pense, donc je suis ») est absolument certain. La conscience pensante devient le fondement (l\'archimède) sur lequel reconstruire toute la connaissance, y compris l\'existence de Dieu et du monde.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le « problème difficile de la conscience » ?',
      back: 'Formulé par Chalmers, le problème difficile distingue expliquer les fonctions cognitives (problème facile : perception, attention, traitement de l\'information) et expliquer pourquoi et comment il y a des expériences subjectives (problème difficile : pourquoi le rouge est vécu comme rouge?). Les processus physiques expliquent les fonctions mais ne semblent pas expliquer les qualia (expériences subjectives).',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Freud transforme-t-il la conception de la conscience ?',
      back: 'Freud découvre l\'inconscient : la conscience n\'est plus le centre du psychisme mais sa surface, une petite partie visible d\'un immense iceberg. La plupart de nos pensées, désirs, souvenirs sont inconscients et nous influencent sans que nous le sachions. La conscience ne dirige pas mais est dirigée par des processus dont elle ignore tout. Cette révolution copernicienne du psychisme change toute la compréhension de l\'homme.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre caractérise-t-il la conscience ?',
      back: 'Pour Sartre, la conscience est néantisation de l\'être : elle est « ce qui n\'est pas ce qu\'elle est et est ce qu\'elle n\'est pas ». Elle est toujours conscience de quelque chose, jamais conscience de soi comme substance. Le pour-soi (conscience) poursuit l\'impossible projet de se faire en-soi (chose) sans jamais y arriver. Cette fuite de soi est la structure même de la conscience.',
      difficulty: 5
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Descartes fonde la philosophie moderne ?',
      back: '« Je pense, donc je suis » (Méditations métaphysiques, 1641) - Cette vérité indubitable devient le fondement de toute connaissance.',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Husserl résume l\'intentionnalité ?',
      back: '« Toute conscience est conscience de quelque chose » (Idées directrices, 1913)',
      difficulty: 2
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Husserl, la conscience est toujours {{conscience de quelque chose}}. C\'est le principe d\'{{intentionnalité}}.',
      back: 'conscience de quelque chose | intentionnalité',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'La conscience est-elle une propriété émergente du cerveau ou quelque chose d\'irréductible ?',
      back: 'Le problème corps-esprit se pose ici de manière cruciale. Les physicalistes soutiennent que la conscience est un processus physique du cerveau : si l\'on connaissait tous les processus neuronaux, on comprendrait la conscience. Les dualistes (comme Chalmers) soutiennent que même une connaissance complète du cerveau n\'expliquerait pas les qualia (le « ce que ça fait » d\'être conscient). Les panpsychistes proposent que la conscience soit une propriété fondamentale de la matière, comme la masse ou la charge. La question reste ouverte mais a des implications majeures : si la conscience n\'est que physique, elle pourrait être artificielle. Si elle est irréductible, l\'IA pourrait être fonctionnelle sans jamais être consciente.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['conscience', 'descartes', 'husserl', 'sartre', 'freud', 'intentionnalité', 'cogito', 'inconscient', 'qualia', 'phénoménologie', 'esprit']
};
