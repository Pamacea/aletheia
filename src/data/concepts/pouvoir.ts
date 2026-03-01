/**
 * Pouvoir - Concept Data
 * Capacité d'agir et d'influencer, relation fondamentale en philosophie politique
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'pouvoir',
  name: 'Pouvoir',
  slug: 'pouvoir',
  category: 'politique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le pouvoir est la capacité d\'agir, d\'influencer ou de déterminer le comportement d\'autrui ou le cours des événements. La philosophie distingue plusieurs dimensions : le pouvoir comme capacité (puissance, ability) ; le pouvoir comme relation (pouvoir sur quelqu\'un) ; le pouvoir comme institution (autorité politique) ; le pouvoir comme structure (les relations de pouvoir qui traversent la société). Pour Weber, le pouvoir est « la probabilité de voir sa volonté s\'imposer malgré la résistance ». Pour Foucault, le pouvoir n\'est pas possession mais stratégie, il n\'est pas seulement répressif mais productif : il produit des savoirs, des subjectivités, des normes. Pour Arendt, le pouvoir est capacité d\'action collective qui émerge quand les gens s\'associent. La question du pouvoir est centrale en politique : qui détient le pouvoir ? comment le limiter ? comment le légitimer ?',
  shortDefinition: 'Capacité d\'agir et d\'influencer, relation politique fondamentale',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'potestas (capacité légale) / potentia (puissance)',
    greek: 'dynamis (δύναμις) / kratos (κράτος)',
    root: 'pouvoir étymologiquement lié à « pouvoir » (être capable de)',
    notes: 'Le latin distingue potestas (pouvoir institutionnel) et potentia (puissance, capacité)'
  },

  // ===== REASONING (ARGUMENTS PHILOSOPHIQUES) =====
  reasoning: {
    thesis: 'Le pouvoir est une relation fondamentale qui structure la société et la politique',
    arguments: [
      {
        title: 'Argument de l\'ordre social (Hobbes)',
        content: 'Sans pouvoir souverain, l\'état de nature est « guerre de tous contre tous ». La vie est « solitaire, pauvre, méchante, brutale et courte ». Le pouvoir de l\'État est nécessaire pour assurer la paix et la sécurité. Le pouvoir est condition de l\'ordre social.'
      },
      {
        title: 'Argument de la liberté (Arendt)',
        content: 'Le pouvoir n\'est pas domination mais capacité d\'agir ensemble. Le pouvoir émerge quand les gens s\'associent dans un espace公共. La liberté politique se réalise dans le pouvoir collectif, non dans l\'isolement individuel.'
      },
      {
        title: 'Argument de la résistance (Foucault)',
        content: 'Là où il y a pouvoir, il y a résistance. Le pouvoir n\'est pas monolithique mais relations multiples, locales. On peut toujours résister, transformer les rapports de force. Le pouvoir est dynamique, jamais définitif.'
      },
      {
        title: 'Argument de la légitimité (Weber)',
        content: 'Le pouvoir doit être légitime pour être stable et accepté. La domination (pouvoir légitime) repose sur la croyance en sa légitimité (traditionnelle, charismatique, légale-rationnelle). Sans légitimité, le pouvoir n\'est que contrainte brute, instable.'
      }
    ],
    counterArguments: [
      {
        title: 'Critique anarchiste',
        content: 'Le pouvoir est par nature oppressif. Toute hiérarchie, toute domination est illégitime. L\'État est instrument de domination des classes dominantes (Bakounine). Il faut abolir le pouvoir politique pour réaliser la liberté.'
      },
      {
        title: 'Critique libertarienne',
        content: 'Le pouvoir étatique est violation des droits naturels. L\'État minimum est le seul justifié (police, justice, défense). Toute ingérence dans la vie économique ou privée est illégitime (Nozick).'
      },
      {
        title: 'Critique féministe',
        content: 'Le pouvoir est patriarcal : les hommes dominent les femmes. Le pouvoir n\'est pas seulement dans l\'État mais dans les relations quotidiennes, la famille, le langage. « Le personnel est politique » : il faut transformer les micro-pouvoirs.'
      },
      {
        title: 'Critique postcoloniale',
        content: 'Le pouvoir colonial a imposé des structures de domination qui persistent après l\'indépendance. Le pouvoir s\'exerce par le savoir (orientalisme), l\'économie, la culture. La décolonisation est transformation des rapports de pouvoir.'
      }
    ]
  },

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: [
      {
        period: 'Antiquité',
        description: 'Platon : pouvoir du philosophe-roi, savoir comme légitimité du pouvoir. Aristote : distinction entre pouvoir royal, aristocratique, républicain (et leurs formes corrompues). Les stoïciens : le pouvoir du sage sur ses passions.'
      },
      {
        period: 'Moyen Âge',
        description: 'Saint Thomas : pouvoir temporel et pouvoir spirituel, les deux glaives. Augustin : pouvoir de l\'État comme remède au péché, nécessaire mais imparfait. « L\'État sans la justice est une grande bande de voleurs ».'
      },
      {
        period: 'Moderne (XIVe-XVIIIe)',
        description: 'Machiavel : analyse réaliste du pouvoir, le Prince doit craindre plus qu\'aimer. Hobbes : pouvoir souverain absolu comme condition de la paix. Locke : pouvoir limité, consentement des gouvernés, droit de résistance. Rousseau : souveraineté du peuple, volonté générale.'
      },
      {
        period: 'XIXe siècle',
        description: 'Tocqueville : tyrannie de la majorité, despotisme doux de la démocratie. Marx : pouvoir comme domination de classe, l\'État comme instrument de la bourgeoisie. Nietzsche : volonté de puissance comme fondement de tout.'
      },
      {
        period: 'XXe siècle',
        description: 'Weber : monopole de la violence légitime, types de légitimité. Arendt : distinction pouvoir/violence, pouvoir comme action collective. Foucault : pouvoir comme relations productives, biopouvoir, pouvoir/savoir. Les féministes : le pouvoir patriarcal.'
      },
      {
        period: 'XXIe siècle',
        description: 'Pouvoir global : puissance émergentes (Chine), gouvernance mondiale, pouvoirs économiques (GAFAM). Pouvoir algorithmique : surveillance, manipulation. Pouvoir écologique : qui décide pour la planète ? Crise de la représentation politique.'
      }
    ],
    debates: [
      {
        title: 'Pouvoir ou violence ?',
        positions: [
          'Arendt : Pouvoir et violence sont opposés. Le pouvoir est action collective accordée. La violence est instrumentalisation de la force. Un régime qui s\'appuie seulement sur la violence a perdu tout pouvoir.',
          'Weber : L\'État a le monopole de la violence légitime. Le pouvoir inclut la potentielle violence.',
          'Fanon : Violence coloniale est violence structurelle. La violence des opprimés est violence libératrice, nécessaire au pouvoir.'
        ]
      },
      {
        title: 'Pouvoir personnel ou structurel ?',
        positions: [
          'Grand homme (Carlyle) : L\'histoire est faite par les grands hommes (Napoléon, César). Le pouvoir est capacité individuelle exceptionnelle.',
          'Structuralisme (Althusser) : Le sujet est effet de structure. Les dirigeants ne sont que « porteurs » de structures économiques et idéologiques.',
          'Foucault : Ni individualisme ni structuralisme. Le pouvoir est stratégie, relations multiples, à la fois contrainte et possibilité d\'action.'
        ]
      },
      {
        title: 'Pouvoir et savoir',
        positions: [
          'Foucault : Pouvoir/savoir sont inséparables. Le savoir produit du pouvoir (sciences humaines, psychiatrie) et le pouvoir produit du savoir (statistiques, enquêtes).',
          'Francis Bacon : « Savoir, c\'est pouvoir ». La science donne pouvoir sur la nature.',
          'Critique : Le savoir peut aussi émanciper du pouvoir. L\'éducation, la critique sont contre-pouvoirs.'
        ]
      },
      {
        title: 'Biopouvoir : gestion de la vie',
        positions: [
          'Foucault : Le biopouvoir émerge au XVIIIe siècle : gestion de la vie (natalité, santé, hygiène). Le pouvoir moderne est « faire vivre et laisser mourir ».',
          'Agamben : L\'État souverain décide de la « vie nue » (homo sacer). Exception juridique où le droit s\'suspend (camps de concentration).',
          'Esposito : La communauté est basée sur l\'immunité (protection de la vie). Le biopouvoir moderne immunise contre les menaces.'
        ]
      }
    ],
    contemporaryIssues: [
      {
        issue: 'Pouvoir algorithmique',
        description: 'Les algorithmes des GAFAM exercent un pouvoir inédit : surveillance (Google), manipulation (Facebook), influence politique (Cambridge Analytica). Le pouvoir est code, invisible, global.'
      },
      {
        issue: 'Pouvoir et fake news',
        description: 'La désinformation exerce un pouvoir politique : manipulation des opinions, élections, démocratie. Le pouvoir médiatique est fragmenté, incontrôlable, mondialisé.'
      },
      {
        issue: 'Pouvoir écologique',
        description: 'Qui décide pour la planète ? Les États sont souverains mais les effets du climat sont globaux. Pouvoir de transformer vs pouvoir de détruire. Pouvoir sur les générations futures.'
      },
      {
        issue: 'Pouvoir médical',
        description: 'COVID-19 : pouvoir de l\'État de confiner, imposer vaccins, certificats sanitaires. Tension entre santé publique et libertés individuelles. Biopouvoir Foucaldien actualisé.'
      }
    ]
  },

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      concept: 'autorité',
      relationship: 'L\'autorité est le pouvoir légitime, accepté par ceux qui lui sont soumis. Elle se distingue de la force brute par la reconnaissance.'
    },
    {
      concept: 'violence',
      relationship: 'Pour Arendt, la violence est l\'opposé du pouvoir : instrumentalisation de la force vs action collective. Pour Weber, l\'État a le monopole de la violence légitime.'
    },
    {
      concept: 'souveraineté',
      relationship: 'Le pouvoir souverain est le pouvoir suprême, qui n\'est soumis à aucun autre pouvoir. Souveraineté de l\'État, souveraineté du peuple.'
    },
    {
      concept: 'état',
      relationship: 'L\'État est la forme moderne du pouvoir politique : monopole de la violence légitime, administration territoriale, impersonnelle.'
    },
    {
      concept: 'légitimité',
      relationship: 'La légitimité est la justification du pouvoir : pourquoi lui obéir ? Tradition, charisme, loi, performance, consentement.'
    },
    {
      concept: 'résistance',
      relationship: 'Pour Foucault, là où il y a pouvoir, il y a résistance. La résistance est interne au pouvoir, elle le transforme.'
    },
    {
      concept: 'liberté',
      relationship: 'Tension entre liberté et pouvoir : trop de pouvoir détruit la liberté, mais sans pouvoir, pas d\'ordre ni de sécurité. La liberté peut être pouvoir collectif (Arendt).'
    },
    {
      concept: 'domination',
      relationship: 'La domination est pouvoir abusif, illégitime. Weber oppose domination (légitime) et contrainte. Marx analyse la domination de classe.'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Réalisme politique',
      description: 'Analyse réaliste du pouvoir comme force, intérêt, contrainte.',
      keyFigures: ['Machiavel', 'Hobbes', 'Morgenthau']
    },
    {
      movement: 'Libéralisme',
      description: 'Limitation du pouvoir, séparation des pouvoirs, État de droit, droits de l\'homme.',
      keyFigures: ['Locke', 'Montesquieu', 'Constant', 'Berlin']
    },
    {
      movement: 'Démocratie',
      description: 'Pouvoir du peuple, par le peuple, pour le peuple. Souveraineté populaire, représentation.',
      keyFigures: ['Rousseau', 'Tocqueville', 'Dahl']
    },
    {
      movement: 'Marxisme',
      description: 'Pouvoir comme domination de classe, État comme instrument de la bourgeoisie, dictature du prolétariat.',
      keyFigures: ['Marx', 'Lénine', 'Gramsci', 'Althusser']
    },
    {
      movement: 'Anarchisme',
      description: 'Abolition de l\'État et de toute hiérarchie, auto-organisation, fédéralisme.',
      keyFigures: ['Proudhon', 'Bakounine', 'Kropotkine']
    },
    {
      movement: 'Féminisme',
      description: 'Pouvoir patriarcal, « le personnel est politique », empowerment des femmes.',
      keyFigures: ['de Beauvoir', 'Friedan', 'Butler', 'MacKinnon']
    },
    {
      movement: 'Postcolonialisme',
      description: 'Pouvoir colonial, décolonisation, subalternité, épistémicide.',
      keyFigures: ['Fanon', 'Said', 'Spivak', 'Mbembe']
    },
    {
      movement: 'Études du pouvoir (Foucault)',
      description: 'Pouvoir comme relations productives, biopouvoir, gouvernementalité.',
      keyFigures: ['Foucault', 'Agamben', 'Deleuze']
    }
  ],

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Pouvoir comme capacité (Arendt)',
      description: 'Pour Hannah Arendt, le pouvoir n\'est pas possession individuelle mais capacité collective qui émerge quand les gens s\'unissent pour agir ensemble. Le pouvoir disparaît avec la dispersion des gens : il n\'existe que dans l\'action concertée. « Le pouvoir correspond à la capacité humaine non seulement d\'agir mais de se réunir et d\'agir de concert ». Le pouvoir est donc fondamentalement politique : il surgit dans l\'espace公共 où les humains s\'associent.'
    },
    {
      title: 'Pouvoir comme relation (Weber)',
      description: 'Max Weber définit le pouvoir comme « la probabilité de voir sa volonté s\'imposer malgré la résistance d\'autrui ». Le pouvoir est donc une relation de force, asymétrique, où un acteur peut contraindre un autre. Weber distingue le pouvoir (Macht) et l\'autorité (Herrschaft) : le pouvoir est la capacité d\'imposer sa volonté ; l\'autorité est le pouvoir légitime, accepté par ceux qui lui sont soumis. Il distingue trois types de légitimité : traditionnelle, charismatique, légale-rationnelle.'
    },
    {
      title: 'Pouvoir et savoir (Foucault)',
      description: 'Michel Foucault analyse le pouvoir non comme possession (« le pouvoir ») mais comme relations (« des pouvoirs »). Le pouvoir n\'est pas seulement en haut (État) mais partout : il circule, il traverse le corps social. Il n\'est pas seulement répressif (interdire) mais productif : il produit des savoirs, des subjectivités, des normes. « Pouvoir/savoir » : il n\'y a pas de pouvoir sans savoir, ni de savoir sans pouvoir. Les sciences humaines sont nées des pratiques de pouvoir (surveillance, discipline, normalisation).'
    },
    {
      title: 'Pouvoir et violence (Arendt)',
      description: 'Arendt distingue radicalement pouvoir et violence. Le pouvoir est capacité d\'action collective qui émerge de l\'accord entre les gens. La violence est instrumentalisation de la force pour contraindre. Le pouvoir et la violence sont opposés : là où la violence apparaît, le pouvoir disparaît. Un régime qui ne s\'appuie que sur la violence est un régime qui a perdu tout pouvoir légitime. La violence peut détruire le pouvoir mais ne peut le créer.'
    },
    {
      title: 'Pouvoir constitutionnel et pouvoir constitué (Sieyès)',
      description: 'Dans Qu\'est-ce que le Tiers-État? (1789), Sieyès distingue le pouvoir constitutionnel (pouvoir constituant) qui établit la Constitution, et les pouvoirs constitués (exécutif, législatif, judiciaire) qui sont créés par la Constitution. Le pouvoir constituant est souverain, il ne peut être limité par aucune Constitution puisqu\'il la précède. Cette distinction est fondamentale pour la théorie constitutionnelle moderne.'
    },
    {
      title: 'Biopouvoir et biopolitique (Foucault)',
      description: 'Foucault analyse l\'émergence du « biopouvoir » à partir du XVIIIe siècle : le pouvoir sur la vie, la capacité de gérer, optimiser, multiplier la vie (natalité, santé, hygiène). Le biopouvoir s\'exerce sur la population (démographie, santé publique) par opposition au pouvoir souverain (faire mourir ou laisser vivre). La biopolitique est la gestion politique de la vie biologique des populations.'
    },
    {
      title: 'Pouvoir et résistance (Foucault)',
      description: 'Foucault insiste : là où il y a pouvoir, il y a résistance. La résistance n\'est pas extérieure au pouvoir mais interne, elle fait partie des relations de pouvoir. On ne peut pas supprimer le pouvoir pour atteindre une liberté pure, car le pouvoir est coextensif à la société. La tâche est de résister localement, spécifiquement, aux relations de pouvoir dominantes. « Il n\'y a pas de pouvoir sans résistance ».'
    },
    {
      title: 'Pouvoir constituant vs pouvoirs constitués',
      description: 'Le pouvoir constituant est le pouvoir de faire une Constitution (le peuple souverain). Les pouvoirs constitués sont les pouvoirs créés par la Constitution (président, parlement, cours). Le pouvoir constituant est illimité (il ne peut être borné par ce qu\'il crée), les pouvoirs constitués sont limités (ils sont bornés par la Constitution). Cette distinction fonde le constitutionalisme moderne.'
    },
    {
      title: 'Volonté de puissance (Nietzsche)',
      description: 'Pour Nietzsche, la volonté de puissance est le fondement de tout être. Non seulement le pouvoir politique, mais toute vie est affirmation de puissance, dépassement de soi. « Le monde est volonté de puissance — et rien除此之外 ! ». La morale du ressentiment est négation de la vie, déclin de puissance. L\'Übermensch est celui qui affirme sa puissance créatrice.'
    },
    {
      title: 'Pouvoir patriarcal',
      description: 'Le féminisme analyse le pouvoir comme structurellement genré : les hommes dominent les femmes non seulement dans la politique mais dans la famille, le travail, le langage, la culture. « Le personnel est politique » : les rapports de pouvoir quotidiens (ménage, enfants, sexualité) sont politiques. Le pouvoir n\'est pas seulement dans l\'État mais dans la « microphysique du pouvoir ».'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Michel Foucault', period: '1926-1984', contribution: 'Analyse du pouvoir comme relations productives et micropolitiques' },
    { name: 'Hannah Arendt', period: '1906-1975', contribution: 'Distinction pouvoir/violence et analyse du pouvoir comme action collective' },
    { name: 'Max Weber', period: '1864-1920', contribution: 'Définition classique du pouvoir et typologie de l\'autorité légitime' },
    { name: 'Nicolas Machiavel', period: '1469-1527', contribution: 'Analyse réaliste du pouvoir politique dans Le Prince' },
    { name: 'Thomas Hobbes', period: '1588-1679', contribution: 'Pouvoir souverain comme condition de sortie de l\'état de nature' },
    { name: 'Emmanuel-Joseph Sieyès', period: '1748-1836', contribution: 'Distinction pouvoir constituant / pouvoirs constitués' },
    { name: 'Baruch Spinoza', period: '1632-1677', contribution: 'Pouvoir (potentia) du peuple et critique de la souveraineté' },
    { name: 'John Locke', period: '1632-1704', contribution: 'Pouvoir limité et droit de résistance' },
    { name: 'Jean-Jacques Rousseau', period: '1712-1778', contribution: 'Souveraineté du peuple et volonté générale' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le pouvoir disciplinaire : Foucault analyse le panoptique de Bentham, prison circulaire où un seul gardien peut surveiller tous les détenus sans qu\'ils sachent s\'ils sont observés. Les prisonniers intériorisent la surveillance et s\'autodisciplinent. Le pouvoir n\'est plus la force brutale mais la discipline : produire des « corps dociles » par la surveillance.',
    'Le révolutionnaire de 1789 : Sieyès distingue le peuple constitué (qui vote, élit des représentants) du peuple constituant (le peuple souverain qui peut changer la Constitution). Le peuple constitué exerce les pouvoirs constitués (législatif, exécutif) créés par la Constitution. Le peuple constituant est au-dessus de la Constitution puisqu\'il l\'a faite. Cette distinction fonde le droit constitutionnel moderne.',
    'Le leader charismatique : Weber distingue trois types de légitimité. Le chef traditionnel (roi, chef tribal) tire sa légitimité de la tradition. Le leader charismatique (Jésus, Napoléon) tire sa légitime de ses qualités personnelles exceptionnelles reconnues par ses disciples. Le leader légal-rationnel (le président moderne) tire sa légitimité de la loi qu\'il applique. Ces trois types pures se mélangent dans la réalité.',
    'Le mouvement social : Pour Arendt, le pouvoir émerge quand les gens s\'associent. Le mouvement des droits civiques aux États-Unis, avec Martin Luther King, montre comment une communauté unie peut exercer un pouvoir immense sans violence. Ce pouvoir disparaît quand la communauté se disperse : le pouvoir n\'est pas une possession mais une capacité collective.',
    'La grève générale : Quand les grévistes se mettent en grève, ils exercent un pouvoir collectif en refusant de travailler. Ce pouvoir n\'appartient à personne en particulier, il émerge de l\'action concertée. L\'État peut utiliser la violence (police, armée) pour briser la grève, mais en le faisant il reconnaît que le pouvoir a changé de camp : le pouvoir est passé du gouvernement aux grévistes.',
    'Le réseau social : Facebook exerce un pouvoir inédit : collecte des données, influence les opinions, manipule les élections (Cambridge Analytica). Ce pouvoir est privé, global, algorithmique, peu contrôlé. Il illustre le déplacement du pouvoir de l\'État vers les entreprises technologiques.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Surveiller et punir',
      author: 'Michel Foucault',
      year: 1975,
      type: 'BOOK' as const,
      reference: 'Analyse du pouvoir disciplinaire et de la société de surveillance',
      quotes: [
        'Le pouvoir n\'est pas une institution mais une relation.',
        'La discipline fabrique des corps dociles.',
        'Le panoptique est le diagramme du pouvoir moderne.',
        'Le pouvoir est productif, il produit du savoir.',
        'Le pouvoir circule, il n\'est pas localisé en haut.',
        'Il n\'y a pas de pouvoir sans résistance.'
      ]
    },
    {
      title: 'La Condition de l\'homme moderne',
      author: 'Hannah Arendt',
      year: 1958,
      type: 'BOOK' as const,
      reference: 'Distinction pouvoir/violence et analyse du pouvoir comme action collective',
      quotes: [
        'Le pouvoir correspond à la capacité humaine d\'agir de concert.',
        'Le pouvoir disparaît quand les gens se dispersent.',
        'La violence est l\'opposé du pouvoir.',
        'Le pouvoir ne peut être stocké, il n\'existe que dans l\'action.',
        'La violence peut détruire le pouvoir mais ne peut le créer.',
        'Le pouvoir est toujours pouvoir de plusieurs, jamais d\'un seul.'
      ]
    },
    {
      title: 'Économie et société',
      author: 'Max Weber',
      year: 1922,
      type: 'BOOK' as const,
      reference: 'Définition du pouvoir et typologie de l\'autorité',
      quotes: [
        'Le pouvoir est la probabilité de voir sa volonté s\'imposer malgré la résistance.',
        'L\'autorité est le pouvoir légitime.',
        'Il y a trois types de légitimité : traditionnelle, charismatique, légale-rationnelle.',
        'L\'État a le monopole de la violence légitime.',
        'Le bureaucrat exerce un pouvoir impersonnel.',
        'La charisme est une qualité extraordinaire d\'une personne.'
      ]
    },
    {
      title: 'Le Prince',
      author: 'Nicolas Machiavel',
      year: 1513,
      type: 'BOOK' as const,
      reference: 'Traité réaliste sur l\'exercice du pouvoir politique',
      quotes: [
        'Il vaut mieux être craint qu\'aimé.',
        'La fin justifie les moyens.',
        'Le prince doit être lion et renard.',
        'La fortune est femme, il faut la dompter.',
        'La politique ne doit pas obéir à la morale.',
        'Le prince doit savoir se faire haïr quand c\'est nécessaire.'
      ]
    },
    {
      title: 'Léviathan',
      author: 'Thomas Hobbes',
      year: 1651,
      type: 'BOOK' as const,
      reference: 'Pouvoir souverain et contrat social',
      quotes: [
        'L\'homme est un loup pour l\'homme.',
        'Le pouvoir souverain est absolu et indivisible.',
        'Le contrat social fonde l\'autorité politique.',
        'Sans pouvoir commun, il n\'y a que guerre de tous contre tous.',
        'Le Léviathan est le dieu mortel qui assure la paix.',
        'La liberté des sujets réside dans le silence des lois.'
      ]
    },
    {
      title: 'Histoire de la sexualité I. La Volonté de savoir',
      author: 'Michel Foucault',
      year: 1976,
      type: 'BOOK' as const,
      reference: 'Biopouvoir et biopolitique',
      quotes: [
        'Le pouvoir n\'est pas répression mais production.',
        'Le biopouvoir est le pouvoir sur la vie.',
        'Le pouvoir est partout parce qu\'il vient de partout.',
        'Il n\'y a pas de centre du pouvoir.',
        'La résistance est premier par rapport au pouvoir.',
        'Le savoir et le pouvoir sont inséparables.'
      ]
    },
    {
      title: 'Du contrat social',
      author: 'Jean-Jacques Rousseau',
      year: 176,
      type: 'BOOK' as const,
      reference: 'Souveraineté du peuple et volonté générale',
      quotes: [
        'L\'homme est né libre, et partout il est dans les fers.',
        'La souveraineté réside dans le peuple.',
        'La volonté générale est toujours droite.',
        'Le prince n\'est que le dépositaire de la loi.',
        'Qui refuse d\'obéir à la volonté générale y sera contraint.',
        'La liberté est obéissance à la loi qu\'on s\'est prescrite.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Weber définit-il le pouvoir ?',
      back: 'Max Weber définit le pouvoir comme « la probabilité de voir sa volonté s\'imposer malgré la résistance d\'autrui ». Le pouvoir est donc une relation de force asymétrique où un acteur peut contraindre un autre. Weber distingue le pouvoir (Macht, capacité de contraindre) et l\'autorité (Herrschaft, pouvoir légitime accepté). Il identifie trois types de légitimité : traditionnelle (coutume), charismatique (qualités du leader), légale-rationnelle (loi).',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Arendt distingue-t-elle pouvoir et violence ?',
      back: 'Pour Arendt, le pouvoir et la violence sont opposés. Le pouvoir est capacité d\'action collective qui émerge quand les gens s\'unissent et s\'accordent. La violence est instrumentalisation de la force pour contraindre. Le pouvoir ne peut être stocké (il existe seulement dans l\'action concertée), la violence peut l\'être (armes, moyens de contrainte). Un régime qui s\'appuie seulement sur la violence a perdu tout pouvoir légitime : la violence peut détruire le pouvoir mais ne peut le créer.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Foucault analyse-t-il le pouvoir ?',
      back: 'Foucault rejette l\'idée du pouvoir comme possession (« le pouvoir ») ou comme institution en haut (État). Le pouvoir est relations (« des pouvoirs ») qui circulent partout dans le corps social. Il n\'est pas seulement répressif (interdire) mais productif : il produit des savoirs, des subjectivités, des normes. Il y a un lien inséparable « pouvoir/savoir » : les sciences (psychologie, démographie) sont nées des pratiques de pouvoir. Là où il y a pouvoir, il y a résistance.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le biopouvoir chez Foucault ?',
      back: 'Le biopouvoir est le pouvoir sur la vie qui émerge à partir du XVIIIe siècle. Alors que le pouvoir souverain était « faire mourir ou laisser vivre », le biopouvoir est « faire vivre et laisser mourir ». Il s\'exerce sur la population (démographie, santé publique, hygiène) pour gérer, optimiser, multiplier la vie. La biopolitique est la gestion politique de la vie biologique des populations. Le pouvoir moderne combine souveraineté (droit de tuer : peine de mort, guerre) et biopouvoir (gestion de la vie).',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle distinction Sieyès fait-il entre pouvoir constituant et pouvoirs constitués ?',
      back: 'Sieyès distingue le pouvoir constituant (le peuple souverain qui établit la Constitution) et les pouvoirs constitués (exécutif, législatif, judiciaire créés par la Constitution). Le pouvoir constituant est illimité : il ne peut être borné par aucune Constitution puisqu\'il la précède. Les pouvoirs constitués sont limités par la Constitution qui les institue. Cette distinction fonde le droit constitutionnel moderne : il y a ce qui est dans la Constitution (pouvoirs constitués) et ce qui est au-dessus (pouvoir constituant).',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation d\'Arendt résume le pouvoir ?',
      back: '« Le pouvoir correspond à la capacité humaine non seulement d\'agir mais de se réunir et d\'agir de concert » (La Condition de l\'homme moderne, 1958)',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Foucault caractérise le pouvoir moderne ?',
      back: '« Le pouvoir n\'est pas une institution mais une relation »',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Weber, l\'{{État}} a le monopole de la {{violence}} légitime.',
      back: 'État | violence',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le pouvoir est-il nécessairement oppresseur ?',
      back: 'La question du pouvoir oppose deux conceptions. Pour la tradition libérale, le pouvoir est nécessairement menaçant : il tend à abuser, donc il faut le limiter (séparation des pouvoirs, État de droit, droits de l\'homme). Pour Arendt, le pouvoir n\'est pas oppression mais capacité d\'action collective : le peuple uni exerce un pouvoir légitime, ce n\'est pas oppression mais démocratie. Pour Foucault, le pouvoir n\'est pas seulement répression mais production : il produit des subjectivités, des savoirs, des normes. Il peut être oppresseur mais aussi producteur de libertés. La question n\'est pas « comment supprimer le pouvoir » (impossible, le pouvoir est coextensif au social) mais « quelles relations de pouvoir acceptables ? ». Les démocraties modernes tentent de canaliser le pouvoir dans des institutions qui le limitent tout en l\'utilisant pour la justice sociale. Le pouvoir n\'est ni bon ni mauvais en soi : tout dépend de son organisation et de ses finalités.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['pouvoir', 'foucault', 'arendt', 'weber', 'machiavel', 'hobbes', 'politique', 'autorité', 'violence', 'biopouvoir', 'état', 'souveraineté', 'résistance', 'légitimité', 'domination']
};
