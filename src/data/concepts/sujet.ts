/**
 * Sujet - Concept Data
 * Instance pensante, centre de conscience et d'action, fondement de la modernité
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'sujet',
  name: 'Sujet',
  slug: 'sujet',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 5,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le sujet est l\'instance pensante, consciente et agissante, le centre de la subjectivité. La philosophie moderne (de Descartes à Kant) fait du sujet le fondement de toute connaissance et de toute action : le sujet cartésien (« je pense »), le sujet transcendantal kantien (condition de possibilité de l\'expérience), le sujet hégélien (Esprit absolu se réalisant dans l\'histoire). Le XXe siècle critique cette « centralité du sujet » : pour Heidegger, le sujet est une métaphysique de la subjectivité à dépasser ; pour Foucault, le sujet est construit par des pratiques de pouvoir ; pour Althusser, le sujet est « interpellé » par l\'idéologie ; pour Derrida, le sujet est déconstruit. La question du sujet traverse la philosophie : qui pense ? qui agit ? qui est responsable ?',
  shortDefinition: 'Instance pensante et consciente, centre de la subjectivité et fondement de l\'action',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'subjectus : sub + jacere (jeté dessous)',
    greek: 'hypokeimenon (ὑποκείμενον)',
    root: 'ce qui est posé dessous, le substrat, la substance',
    notes: 'En grammaire, le sujet est ce dont on parle ; en philosophie, le sujet est le fondement, ce qui soutient'
  },

  // ===== REASONING (ARGUMENTS PHILOSOPHIQUES) =====
  reasoning: {
    thesis: 'Le sujet est le fondement de la connaissance et de l\'action morale',
    arguments: [
      {
        title: 'Argument du cogito',
        content: 'Descartes montre que même dans le doute universel, il y a une certitude indubitable : je pense, donc je suis. Ce sujet pensant est le point d\'ancrage de toute connaissance, le premier principe certain sur lequel reconstruire la connaissance.'
      },
      {
        title: 'Argument de l\'unité de la conscience',
        content: 'Kant démontre que le « je pense » doit pouvoir accompagner toutes mes représentations. Cette unité synthétique de l\'aperception est la condition de possibilité de toute expérience : sans sujet unifiant, je n\'aurais pas une expérience cohérente du monde.'
      },
      {
        title: 'Argument de la responsabilité',
        content: 'La responsabilité morale suppose un sujet capable de choix et d\'action. Si je ne suis pas sujet, je ne peux être tenu pour responsable de mes actes. Le sujet est condition de la moralité.'
      },
      {
        title: 'Argument de l\'intériorité',
        content: 'La conscience réflexive me donne accès à mes propres pensées, sentiments, désirs. Cette intériorité inaccessible aux autres constitue la subjectivité comme domaine privé, irréductible à l\'objectivation.'
      }
    ],
    counterArguments: [
      {
        title: 'Critique de l\'inconscient (Freud)',
        content: 'Le « je » conscient n\'est pas maître dans sa propre maison. L\'inconscient détermine des pensées et désirs qui échappent à la conscience. Le sujet transparent à soi est une illusion.'
      },
      {
        title: 'Critique du social (Marx, Durkheim)',
        content: 'Les structures sociales (économiques, culturelles) déterminent la conscience. « Ce n\'est pas la conscience des hommes qui détermine leur existence, c\'est leur existence sociale qui détermine leur conscience » (Marx).'
      },
      {
        title: 'Critique du langage (structuralisme)',
        content: 'Le sujet parlant est parlé par le langage. Ce n\'est pas le sujet qui parle le langage, mais le langage qui parle à travers le sujet (Heidegger). Le sujet est effet de structure, non origine.'
      },
      {
        title: 'Critique de la différence (Derrida)',
        content: 'Le sujet est traversé par la différance : il n\'est jamais présent à soi, toujours différé, divisé. La subjectivité est trace, écriture, non présence pure.'
      }
    ]
  },

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: [
      {
        period: 'Antiquité',
        description: 'Le grec hypokeimenon désigne le substrat, ce qui soutient les attributs. Aristote distingue substance première (l\'individu concret) et substance seconde (l\'espèce). La question du sujet comme conscience de soi n\'est pas centrale : l\'homme est animal rationnel, pas « sujet » au sens moderne.'
      },
      {
        period: 'Moyen Âge',
        description: 'La subjectivité est pensée comme âme individuelle créée par Dieu. Augustin développe l\'intériorité (meipsum) : « Je suis devenu une question pour moi-même ». Mais le sujet reste créé, dépendant de Dieu, non autonome.'
      },
      {
        period: 'Moderne (XVIIe-XVIIIe)',
        description: 'La philosophie moderne fait du sujet le fondement. Descartes : cogito comme première certitude. Locke : le soi comme conscience de soi. Kant : sujet transcendantal comme condition de l\'expérience. Le sujet devient centre, origine, fondement.'
      },
      {
        period: 'XIXe siècle',
        description: 'Hegel : sujet comme Esprit se réalisant dans l\'histoire. Marx : sujet comme produit des relations économiques. Kierkegaard : sujet comme singularité existentielle. Nietzsche : critique du sujet comme illusion métaphysique.'
      },
      {
        period: 'XXe siècle - Crisis du sujet',
        description: 'Freud : décentrement par l\'inconscient. Heidegger : critique de la métaphysique de la subjectivité. Foucault : sujet comme produit de pouvoir/savoir. Structuralisme : sujet comme effet de structure. Derrida : déconstruction du sujet. La « mort du sujet » est annoncée.'
      },
      {
        period: 'XXe-XXIe siècle - Retours du sujet',
        description: 'La phénoménologie (Sartre, Merleau-Ponty) réaffirme le sujet incarné. Le féminisme (Butler) repense le sujet comme performatif. Les études postcoloniales repensent le sujet situé. La question du sujet reste ouverte : ni pleinement central ni totalement mort.'
      }
    ],
    debates: [
      {
        title: 'Sujet ou structure ?',
        positions: [
          'Existentialisme/Sartre : Le sujet est absolument libre, créateur de sens. « L\'existence précède l\'essence ».',
          'Structuralisme/Lévi-Strauss : Le sujet est effet de structures inconscientes (langage, parenté, économie). Le sujet parle sans savoir qu\'il est parlé par les structures.',
          'Post-structuralisme/Foucault : Ni sujet absolu ni déterminisme structural, le sujet est produit par des pratiques de pouvoir/savoir mais peut résister.'
        ]
      },
      {
        title: 'Sujet transcendantal ou empirique ?',
        positions: [
          'Kant : Le sujet transcendantal est condition de possibilité de l\'expérience, non objet d\'expérience.',
          'Empirisme/Hume : Le soi n\'est qu\'un faisceau de perceptions, pas substance stable.',
          'Phénoménologie/Husserl : Retour au sujet transcendantal mais par description de l\'expérience vécue (ego transcendantal).'
        ]
      },
      {
        title: 'Sujet et inconscient',
        positions: [
          'Freud : Le sujet est divisé (Ça, Moi, Surmoi). L\'inconscient est le véritable sujet.',
          'Lacan : Le sujet est « barré » ($), divisé par le langage. « Je suis là où je ne pense pas, je pense où je ne suis pas ».',
          'Cognitivisme : Le sujet pensant peut être étudié scientifiquement, l\'inconscient est processus mental non conscient.'
        ]
      },
      {
        title: 'Sujet et responsabilité',
        positions: [
          'Libertarisme : Le sujet est pleinement responsable, causalité mentale irréductible.',
          'Déterminisme : Le sujet est déterminé (inconscient, social, biologique), la responsabilité est illusion.',
          'Responsabilité située (McKenna, Strawson) : La responsabilité n\'est pas liberté métaphysique mais pratique sociale de tenir responsable.'
        ]
      }
    ],
    contemporaryIssues: [
      {
        issue: 'Sujet et IA',
        description: 'Les machines intelligentes peuvent-elles être sujets ? La conscience artificielle est-elle possible ? Le sujet est-il nécessaire à l\'intelligence ?'
      },
      {
        issue: 'Sujet et neurosciences',
        description: 'Le sujet pensant réduit au cerveau ? Le libre arbitre illusoire (Libet) ? La subjectivité comme émergence du cerveau ?'
      },
      {
        issue: 'Sujet et identité',
        description: 'Comment penser le sujet à l\'âge des identités fluides, multiples, performatives ? Le sujet souverain est-il modèle patriarcal à déconstruire ?'
      },
      {
        issue: 'Sujet et écologie',
        description: 'Le sujet moderne comme maître et possesseur de la nature (Descartes) est-il responsable de la crise écologique ? Faut-il penser un sujet « éco-centré » ?'
      }
    ]
  },

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      concept: 'conscience',
      relationship: 'Le sujet est le siège de la conscience réflexive, la capacité de se savoir existant.'
    },
    {
      concept: 'liberté',
      relationship: 'Le sujet est le lieu de la liberté : capacité d\'autonomie, de choix, d\'action.'
    },
    {
      concept: 'inconscient',
      relationship: 'L\'inconscient freudien décentre le sujet : le « je » conscient n\'est pas maître.'
    },
    {
      concept: 'intersubjectivité',
      relationship: 'Le sujet se constitue dans la relation à l\'autre : reconnaissance, langage, socialisation.'
    },
    {
      concept: 'identité',
      relationship: 'Le sujet se construit une identité personnelle à travers le temps, narrative et sociale.'
    },
    {
      concept: 'corps',
      relationship: 'Le sujet est incarné : pas de conscience sans corps (Merleau-Ponty), dualisme cartésien dépassé.'
    },
    {
      concept: 'langage',
      relationship: 'Le sujet accède à la conscience et au monde par le langage, qui le divise et l\'constitue.'
    },
    {
      concept: 'pouvoir',
      relationship: 'Le sujet est produit par des pratiques de pouvoir (Foucault) mais aussi siège de résistance.'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Cartésianisme',
      description: 'Fondation de la philosophie moderne sur le sujet cogito, substance pensante.',
      keyFigures: ['Descartes', 'Arnauld', 'Malebranche']
    },
    {
      movement: 'Idéalisme allemand',
      description: 'Le sujet absolu (Fichte) ou Esprit (Hegel) comme réalité fondamentale.',
      keyFigures: ['Kant', 'Fichte', 'Schelling', 'Hegel']
    },
    {
      movement: 'Phénoménologie',
      description: 'Étude des structures de la conscience, retour au sujet vécu.',
      keyFigures: ['Husserl', 'Heidegger', 'Sartre', 'Merleau-Ponty']
    },
    {
      movement: 'Existentialisme',
      description: 'Le sujet comme existence libre, projet, choix.',
      keyFigures: ['Kierkegaard', 'Sartre', 'de Beauvoir', 'Camus']
    },
    {
      movement: 'Psychanalyse',
      description: 'Décentrement du sujet par l\'inconscient, sujet divisé.',
      keyFigures: ['Freud', 'Lacan', 'Klein']
    },
    {
      movement: 'Structuralisme',
      description: 'Le sujet comme effet de structures (langage, parenté, économie).',
      keyFigures: ['Saussure', 'Lévi-Strauss', 'Althusser', 'Lacan']
    },
    {
      movement: 'Post-structuralisme',
      description: 'Déconstruction du sujet, sujet comme produit de pouvoir/savoir.',
      keyFigures: ['Foucault', 'Derrida', 'Deleuze', 'Lyotard']
    },
    {
      movement: 'Féminisme',
      description: 'Critique du sujet universel comme mascule, construction du sujet genré.',
      keyFigures: ['de Beauvoir', 'Irigaray', 'Butler', 'Kristeva']
    }
  ],

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Sujet cartésien (cogito)',
      description: 'Descartes fonde la philosophie moderne sur le sujet : « je pense, donc je suis ». Le cogito est le point d\'absolu certitude, la substance pensante (res cogitans) qui se pose comme sujet de la connaissance. Le sujet cartésien est substance, conscience de soi, fondement indubitable sur lequel reconstruire toute la connaissance, y compris l\'existence de Dieu et du monde.'
    },
    {
      title: 'Sujet transcendantal (Kant)',
      description: 'Pour Kant, le sujet transcendantal n\'est pas le sujet empirique (l\'individu concret) mais la condition de possibilité de toute expérience. Le « je pense » doit pouvoir accompagner toutes mes représentations : c\'est « l\'unité synthétique de l\'aperception ». Le sujet transcendantal n\'est pas connu (il n\'est pas un objet d\'expérience) mais il est la condition de toute connaissance d\'objet.'
    },
    {
      title: 'Sujet hégélien (Esprit)',
      description: 'Pour Hegel, le sujet n\'est pas l\'individu isolé mais l\'Esprit (Geist) qui se réalise dans l\'histoire. Le sujet véritable est le « Sujet-Objet » identité de la pensée et de l\'être. L\'histoire est le processus par lequel l\'Esprit prend conscience de soi, devenant sujet absolu. L\'individu n\'est qu\'un moment dans ce processus.'
    },
    {
      title: 'Sujet et inconscient (Freud)',
      description: 'Freud décentre le sujet : le Moi conscient n\'est plus maître dans sa propre maison. Le sujet est divisé entre conscient, préconscient et inconscient. Le « je » qui parle ne sait pas tout ce qui le détermine. La psychanalyse montre que le sujet est traversé par des désirs inconscients qui le dépassent. Le sujet n\'est plus un centre transparent à soi.'
    },
    {
      title: 'Critique du sujet (Heidegger)',
      description: 'Heidegger critique la métaphysique de la subjectivité inaugurée par Descartes. L\'être-là (Dasein) n\'est pas un sujet mais « être-dans-le-monde ». Le sujet moderne est une abstraction qui a oublié l\'être. La question de l\'être est plus originaire que la question du sujet. L\'homme n\'est pas un sujet posé face à des objets, mais être jeté dans un monde qu\'il habite.'
    },
    {
      title: 'Sujet et pouvoir (Foucault)',
      description: 'Foucault montre que le sujet est produit par des pratiques de pouvoir et de savoir. Le sujet n\'est pas donné mais constitué par la discipline, la surveillance, la normalisation. « L\'âme est la prison du corps » : l\'intériorité est le résultat de processus d\'assujettissement. Le sujet est à la fois effet et instrument des relations de pouvoir.'
    },
    {
      title: 'Sujet idéologique (Althusser)',
      description: 'Althusser soutient que l\'idéologie « interpelle » les individus comme sujets. Quand la police crie « hé, vous là! », je me retourne : je me reconnais comme sujet visé. L\'idéologie me donne une identité (« je suis un citoyen », « je suis un élève ») que j\'accepte comme naturelle. Le sujet est donc effet de l\'idéologie.'
    },
    {
      title: 'Sujet de l\'énonciation vs sujet de l\'énoncé (Benveniste)',
      description: 'En linguistique, le sujet de l\'énonciation est le « je » qui parle, présent dans l\'acte d\'énoncer. Le sujet de l\'énoncé est le « je » dont on parle, représenté dans la phrase. Benveniste distingue le sujet de la langue (le « je » comme catégorie linguistique) et le sujet du discours (le « je » comme individu concret). Cette distinction permet d\'analyser la subjectivité dans le langage.'
    },
    {
      title: 'Sujet barré (Lacan)',
      description: 'Lacan note le sujet « $ » (sujet barré) pour indiquer que le sujet est fondamentalement divisé, incomplet, manque-à-être. Le sujet naît dans le miroir (stade du miroir) comme image fictive d\'unité, puis est divisé par l\'entrée dans le langage (symbolique). « Je suis là où je ne pense pas, je pense où je ne suis pas ».'
    },
    {
      title: 'Sujet existentiel (Sartre)',
      description: 'Pour Sartre, le sujet est liberté absolue, projet, néantisation. « L\'existence précède l\'essence » : le sujet n\'a pas de nature donnée, il se définit par ses choix. Le pour-soi est conscience de soi comme néant, projet perpétuel vers un être qu\'il n\'est pas. Le sujet est « condamné à être libre ».'
    },
    {
      title: 'Sujet et corps (Merleau-Ponty)',
      description: 'Merleau-Ponty critique le dualisme cartésien (âme/corps) et affirme le « corps propre » comme sujet incarné. La subjectivité n\'est pas pure conscience désincarnée mais incarnation, être-au-monde. « Je suis mon corps » : le sujet n\'est pas dans un corps, il est son corps. La perception, l\'action, l\'émotion sont modalités du corps sujet.'
    },
    {
      title: 'Sujet performatif (Butler)',
      description: 'Judith Butler montre que le sujet genré est produit par la répétition de normes de genre. Il n\'y a pas de sujet préexistant qui « adopte » un genre, mais le sujet se constitue par la performance de genre. Le sujet est effet de discours, non origine. Cette théorie déconstruit l\'idée d\'un sujet universel neutre (en fait mascule, blanc, hétérosexuel).'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'René Descartes', period: '1596-1650', contribution: 'Fondation de la philosophie moderne sur le sujet pensant (cogito)' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Sujet transcendantal comme condition de possibilité de l\'expérience' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'Sujet comme Esprit absolu se réalisant dans l\'histoire' },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Critique de la métaphysique de la subjectivité' },
    { name: 'Michel Foucault', period: '1926-1984', contribution: 'Sujet comme produit de pratiques de pouvoir et de savoir' },
    { name: 'Sigmund Freud', period: '1856-1939', contribution: 'Décentrement du sujet par l\'inconscient' },
    { name: 'Jacques Lacan', period: '1901-1981', contribution: 'Sujet barré ($) et inconscient structuré comme langage' },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'Sujet comme liberté et projet existentiel' },
    { name: 'Maurice Merleau-Ponty', period: '1908-1961', contribution: 'Sujet incarné, corps propre comme sujet' },
    { name: 'Judith Butler', period: '1956-', contribution: 'Sujet genré comme performatif, critique du sujet universel' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le doute de Descartes : En doutant de tout (mon corps, le monde, les mathématiques), Descartes découvre qu\'il ne peut douter qu\'il doute. Ce « je pense qui doute » devient le sujet indubitable, fondement absolu. Le sujet cartésien est substance pensante, transparente à soi, centre de la connaissance.',
    'Le patient psychanalytique : Le patient qui parle associe librement et dit des choses qu\'il ne savait pas. Freud découvre que son « je » conscient est divisé, qu\'il est traversé par des désirs inconscients. Le sujet psychanalytique est sujet du désir, divisé entre conscient et inconscient.',
    'L\'élève interpellé : Quand l\'instituteur crie « Élève 25, réponds! », l\'enfant se lève et répond. Althusser montre que l\'idéologie interpelle l\'individu comme « élève », et que l\'enfant accepte cette identité. Le sujet n\'est pas donné mais constitué par l\'interpellation.',
    'Le prisonnier panoptique : Le prisonnier qui se sait surveillé se comporte comme s\'il était observé en permanence. Foucault montre que la discipline produit des « corps dociles » : le sujet devient son propre surveillant. L\'intériorité est le résultat d\'un processus d\'assujettissement.',
    'Le locuteur qui dit « je » : Quand je dis « je suis fatigué », le « je » est à la fois sujet de l\'énonciation (celui qui parle maintenant) et sujet de l\'énoncé (celui dont on dit qu\'il est fatigué). Benveniste distingue ces deux sujets pour analyser la subjectivité dans le langage.',
    'Le sujet genré : La femme qui se maquille, porte une robe, adopte des manières « féminines » ne fait pas qu\'exprimer une identité préexistante. Selon Butler, elle performe son genre, contribuant à le produire et le reproduire. Le sujet femme n\'est pas donné mais produit par la répétition de normes.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Méditations métaphysiques',
      author: 'René Descartes',
      year: 1641,
      type: 'BOOK' as const,
      reference: 'Fondation de la philosophie moderne sur le sujet cogito',
      quotes: [
        'Je pense, donc je suis.',
        'Je suis une chose qui pense.',
        'Le « je » est la substance pensante.',
        'L\'âme est plus facile à connaître que le corps.',
        'La pensée est l\'attribut essentiel de l\'âme.',
        'Je ne suis que cette chose qui pense.'
      ]
    },
    {
      title: 'Critique de la raison pure',
      author: 'Immanuel Kant',
      year: 1781,
      type: 'BOOK' as const,
      reference: 'Sujet transcendantal et unité synthétique de l\'aperception',
      quotes: [
        'Le « je pense » doit pouvoir accompagner toutes mes représentations.',
        'L\'unité synthétique de l\'aperception est le principe suprême de toute connaissance.',
        'Le sujet transcendantal est la condition de possibilité de l\'expérience.',
        'Je ne peux connaître que les phénomènes, non les choses en soi.',
        'Le sujet n\'est pas un objet d\'expérience mais sa condition.',
        'L\'aperception pure est la conscience de soi.'
      ]
    },
    {
      title: 'Phénoménologie de l\'Esprit',
      author: 'Georg Wilhelm Friedrich Hegel',
      year: 1807,
      type: 'BOOK' as const,
      reference: 'Sujet comme Esprit se réalisant dans l\'histoire',
      quotes: [
        'L\'Esprit est le sujet absolu.',
        'Le réel est rationnel, le rationnel est réel.',
        'Le sujet est substance devenant sujet.',
        'L\'histoire est le processus par lequel l\'Esprit prend conscience de soi.',
        'Le sujet est identité de la pensée et de l\'être.',
        'La conscience de soi est la vérité de la conscience.'
      ]
    },
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Critique de la métaphysique de la subjectivité',
      quotes: [
        'L\'être-là n\'est pas un sujet.',
        'Le sujet moderne est une métaphysique de la subjectivité.',
        'L\'être-dans-le-monde est la structure fondamentale.',
        'Le « je » ne précède pas l\'être-dans-le-monde.',
        'La question de l\'être est plus originaire que la question du sujet.',
        'L\'homme n\'est pas un sujet posé face au monde.'
      ]
    },
    {
      title: 'Surveiller et punir',
      author: 'Michel Foucault',
      year: 1975,
      type: 'BOOK' as const,
      reference: 'Sujet comme produit de pratiques disciplinaires',
      quotes: [
        'L\'âme est la prison du corps.',
        'Le sujet est l\'effet des relations de pouvoir.',
        'La discipline produit des sujets dociles.',
        'Le panoptique fabrique des corps dociles.',
        'Le savoir est inséparable du pouvoir.',
        'Le sujet est à la fois effet et instrument du pouvoir.'
      ]
    },
    {
      title: 'Métapsychologie',
      author: 'Sigmund Freud',
      year: 1915,
      type: 'BOOK' as const,
      reference: 'Théorie de l\'inconscient et décentrement du sujet',
      quotes: [
        'Le Moi n\'est pas maître dans sa propre maison.',
        'L\'inconscient est la véritable réalité psychique.',
        'Le sujet est divisé entre conscient et inconscient.',
        'Le « ça » parle dans le sujet.',
        'Le refoulement est le mécanisme fondamental.',
        'Le sujet du désir n\'est pas le sujet du besoin.'
      ]
    },
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Sujet comme liberté et projet',
      quotes: [
        'L\'existence précède l\'essence.',
        'L\'homme est condamné à être libre.',
        'Le pour-soi est conscience de soi comme néant.',
        'Le sujet est projet vers un être qu\'il n\'est pas.',
        'Nous sommes une passion inutile.',
        'Le sujet est pure néantisation.'
      ]
    },
    {
      title: 'Phénoménologie de la perception',
      author: 'Maurice Merleau-Ponty',
      year: 1945,
      type: 'BOOK' as const,
      reference: 'Sujet incarné et corps propre',
      quotes: [
        'Je suis mon corps.',
        'Le corps propre est sujet incarné.',
        'La perception est dialogue du sujet et du monde.',
        'L\'être-au-monde est structure fondamentale.',
        'Le sujet n\'est pas pure conscience.',
        'La chair est être du sujet.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que le cogito cartésien ?',
      back: 'Le cogito (« je pense, donc je suis ») est la découverte de Descartes : en doutant de tout, je découvre que je ne peux douter que je doute. Cette pensée consciente qui doute devient le sujet indubitable, fondement absolu de toute connaissance. Le sujet cartésien est substance pensante, transparente à soi, centre de la connaissance.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre sujet empirique et sujet transcendantal ?',
      back: 'Le sujet empirique est l\'individu concret avec son histoire, ses caractéristiques particulières (moi psychologiques). Le sujet transcendantal (Kant) n\'est pas un individu mais la condition de possibilité de toute expérience : c\'est l\'« unité synthétique de l\'aperception », le « je pense » qui doit pouvoir accompagner toutes mes représentations. Le sujet transcendantal n\'est pas connu (il n\'est pas objet d\'expérience) mais il est la condition de toute connaissance.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Freud décentre-t-il le sujet ?',
      back: 'Freud découvre l\'inconscient : le Moi conscient n\'est plus maître dans sa propre maison. Le sujet est divisé entre Ça (pulsions), Moi (réalité) et Surmoi (morale). Le « je » qui parle est traversé par des désirs inconscients qui le dépassent et le déterminent. La psychanalyse décentre le sujet : le centre n\'est plus la conscience transparente à soi mais l\'inconscient qui nous échappe.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Foucault analyse-t-il la formation du sujet ?',
      back: 'Pour Foucault, le sujet n\'est pas donné mais produit par des pratiques de pouvoir et de savoir. La discipline, la surveillance, la normalisation fabriquent des « sujets dociles » qui se conforment aux normes. « L\'âme est la prison du corps » : l\'intériorité n\'est pas naturelle mais résultat de processus d\'assujettissement. Le sujet est à la fois effet (produit) et instrument de relations de pouvoir.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle critique Heidegger fait-il du sujet moderne ?',
      back: 'Heidegger critique la « métaphysique de la subjectivité » inaugurée par Descartes. L\'être-là (Dasein) n\'est pas un sujet posé face au monde mais « être-dans-le-monde ». La question de l\'être est plus originaire que la question du sujet. Le sujet moderne est une abstraction qui a oublié l\'être en se posant comme centre. La pensée moderne doit dépasser cette subjectivité pour retrouver la question de l\'être.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le « sujet barré » chez Lacan ?',
      back: 'Lacan note le sujet « $ » (barré) pour indiquer que le sujet est fondamentalement divisé, incomplet, manque-à-être. Le sujet naît dans le miroir comme image fictive d\'unité, puis est divisé par l\'entrée dans le langage (symbolique). « Je suis là où je ne pense pas, je pense où je ne suis pas » : le sujet est décentré par l\'inconscient structuré comme langage.',
      difficulty: 5
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Kant résume le sujet transcendantal ?',
      back: '« Le « je pense » doit pouvoir accompagner toutes mes représentations » (Critique de la raison pure, 1781)',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Freud exprime le décentrement du sujet ?',
      back: '« Le Moi n\'est pas maître dans sa propre maison » (Introduction à la psychanalyse, 1917)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Descartes, le sujet se découvre dans le {{cogito}} : « je {{pense}}, donc je {{suis}} ».',
      back: 'cogito | pense | suis',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'La « mort du sujet » annoncée au XXe siècle signifie-t-elle la fin de la responsabilité ?',
      back: 'Le XXe siècle a annoncé la « mort du sujet » : Freud (l\'inconscient nous détermine), Marx (les structures économiques nous déterminent), Foucault (le pouvoir nous fabrique), Heidegger (le sujet est une métaphysique à dépasser). Ce décentrement du sujet a pu sembler menacer la responsabilité : si je ne suis pas maître de moi, comment puis-je être responsable ? Mais la responsabilité peut se repenser : non pas responsabilité d\'un sujet souverain parfaitement conscient, mais responsabilité d\'un sujet divisé, situé, historiquement déterminé mais néanmoins capable de répondre de ses actes. La psychanalyse ne supprime pas la responsabilité mais la replace : répondre de ses désirs même inconscients, travailler à se connaître. La responsabilité n\'est pas la liberté absolue mais l\'acceptation de sa propre complexité.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['sujet', 'descartes', 'kant', 'hegel', 'freud', 'foucault', 'heidegger', 'cogito', 'transcendantal', 'inconscient', 'pouvoir', 'subjectivité', 'liberté', 'conscience', 'identité', 'existence']
};
