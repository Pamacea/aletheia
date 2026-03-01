/**
 * Désir - Concept Data
 * Tension vers un objet absent, force dynamique de la psyché et de l'existence
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'desir',
  name: 'Désir',
  slug: 'desir',
  category: 'ethique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le désir est la tension vers un objet que l\'on n\'a pas, le mouvement de la psyché vers ce qui lui manque. Platon définit le désir comme manque : on désire ce dont on est privé. Aristote distingue désir naturel (besoin : faim, soif) et désir rationnel (vouloir). Pour Spinoza, le désir (cupiditas) est "l\'essence même de l\'homme" : conatus, effort pour persévérer dans son être. Pour Freud, le désir est inconscient, pulsionnel : le sujet est "sujet du désir".',
  shortDefinition: 'Tension vers un objet absent, mouvement de la psyché vers ce qui lui manque',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'desiderium : de + sider (astre)',
    greek: 'epithymia (ἐπιθυμία) / orexis (ὄρεξις)',
    root: 'de-sidus : privé de son astre, aspirant à ce qui est loin',
    notes: 'Le désir étymologiquement est manque : absence de ce qu\'on aspire à rejoindre'
  },

  // ===== REASONING (ARGUMENTS PHILOSOPHIQUES) =====
  reasoning: {
    thesis: 'Le désir est le moteur fondamental de l\'action humaine et de la vie psychique',
    arguments: [
      {
        title: 'Argument du conatus (Spinoza)',
        content: 'Tout être tend à persévérer dans son existence. Cet effort de persistance (conatus) est le désir lui-même. Le désir n\'est pas manque mais affirmation vitale, essence de l\'être. Sans désir, pas d\'action, pas de vie.'
      },
      {
        title: 'Argument de la finitude (Platon)',
        content: 'L\'homme est un être fini, manquant, incomplet. Le désir exprime cette finitude : on désire ce qui nous manque pour être complet. L\'amour (éros) est désir de beauté, de totalité, d\'immortalité.'
      },
      {
        title: 'Argument du plaisir (Aristote)',
        content: 'Le désir est orienté vers le plaisir (ce qui est agréable) et la fuite de la douleur. Toute action visant une fin désirée, le désir est moteur de l\'action. Même la vertu est objet de désir pour celui qui est vertueux.'
      },
      {
        title: 'Argument de la reconnaissance (Hegel)',
        content: 'Le désir fondamental est désir de reconnaissance. Je veux être reconnu par l\'autre comme sujet libre. Ce désir pousse à la lutte, au travail, à l\'histoire. Le désir est moteur de l\'histoire humaine.'
      }
    ],
    counterArguments: [
      {
        title: 'Critique bouddhiste',
        content: 'Le désir est source de souffrance (dukkha). Tant que nous désirons, nous sommes insatisfaits, condamnés à vouloir toujours plus. La libération (nirvana) est extinction du désir. Le désir n\'est pas essence à réaliser mais chaîne à briser.'
      },
      {
        title: 'Critique stoïcienne',
        content: 'Le désir trouble la tranquillité de l\'âme. Il faut distinguer désirs naturels nécessaires (manger, boire) qu\'on peut satisfaire, et désirs vains (richesse, gloire) qu\'il faut supprimer. La sagesse est apathéia : absence de trouble passionnel.'
      },
      {
        title: 'Critique schopenhauerienne',
        content: 'Le désir est condamnation : la Volonté est force aveugle qui nous pousse à vouloir toujours plus sans satisfaction. La vie est oscillation entre souffrance (désir non satisfait) et ennui (désir satisfait). Le salut est dans l\'ascèse, la suspension de la Volonté.'
      },
      {
        title: 'Critique psychanalytique',
        content: 'Le désir est toujours insatisfait car il est désir d\'être, non d\'avoir. L\'objet du désir glisse toujours (objet a). Le désir est structurellement manque-à-être, impossible à combler. La satisfaction illusoire mène à la répétition.'
      }
    ]
  },

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: [
      {
        period: 'Antiquité grecque',
        description: 'Platon : désir comme manque (Banquet), désir de beauté et de vérité. Aristote : distinction entre orexis (désir) et boulesis (volonté rationnelle). Les stoïciens : suppression des désirs vains pour atteindre l\'ataraxie. Épicure : désirs naturels nécessaires vs vains.'
      },
      {
        period: 'Antiquité indienne',
        description: 'Bouddha : les quatre nobles vérités : la vie est souffrance, la souffrance vient du désir (tanha), la cessation du désir est nirvana. La voie est le noble sentier octuple. Le désir est attachement (upadana) à percer.'
      },
      {
        period: 'Moyen Âge chrétien',
        description: 'Distinction entre concupiscence (désir charnel, péché) et amour de Dieu (désir spirituel). Augustin : " Tu nous as faits pour toi, Seigneur, et notre cœur est sans repos tant qu\'il ne repose en toi ". Le désir de Dieu est légitime, les désirs terrestres sont suspects.'
      },
      {
        period: 'Moderne (XVIIe-XVIIIe)',
        description: 'Spinoza : désir comme conatus, essence de l\'homme. Hobbes : désirs comme passions qui déterminent la volonté. Descartes : désir comme passion, trouble de l\'âme. Rousseau : désir de reconnaissance, amour-propre.'
      },
      {
        period: 'XIXe siècle',
        description: 'Hegel : désir de reconnaissance comme moteur de l\'histoire. Schopenhauer : Volonté comme désir infini, source de souffrance. Kierkegaard : désir comme angoisse de la liberté. Nietzsche : volonté de puissance comme désir fondamental.'
      },
      {
        period: 'XXe siècle',
        description: 'Freud : désir inconscient comme moteur du psychisme. Lacan : désir comme manque-à-être, structuré par le langage. Sartre : désir comme projet, néantisation. Bataille : désir comme dépense, transgression. Deleuze-Guattari : désir comme production, non manque.'
      }
    ],
    debates: [
      {
        title: 'Désir comme manque ou comme force ?',
        positions: [
          'Platon/Lacan : Le désir est manque de l\'objet, manque-à-être. Il exprime une incomplétude fondamentale.',
          'Spinoza/Deleuze : Le désir est puissance, affirmation vitale. Il n\'est pas manque mais production, création.',
          'Freud : Le désir est manque (pulsion manque son objet) mais aussi force (énergie psychique).'
        ]
      },
      {
        title: 'Désir et besoin',
        positions: [
          'Distinction classique : Le besoin est naturel, biologique (faim, soif). Le désir est culturel, psychique, peut être sans fin.',
          'Marx : Les besoins sont historiquement déterminés. Ce qui est "besoin" varie selon les époques.',
          'Bataille : Le désir dépasse le besoin, est dépense inutile (luxe, art, érotisme) qui caractérise l\'humain.'
        ]
      },
      {
        title: 'Désir et pulsion',
        positions: [
          'Freud : La pulsion est force constante, biologiquement déterminée, cherchant un but (plaisir). Le désir conscient n\'est que manifestation traduite de la pulsion.',
          'Lacan : La pulsion est ce qui vient du corps (oral, anal, scopique, invocatoire). Le désir est du sujet, structuré par le langage et l\'Autre.',
          'Klein : Le désir est relation d\'objet, relation au bon/mauvais objet (sein, mère).'
        ]
      },
      {
        title: 'Faut-il maîtriser ou réaliser le désir ?',
        positions: [
          'Ascétisme (bouddhisme, stoïcisme) : Maîtriser et supprimer le désir pour atteindre la paix.',
          'Hédonisme (Épicure, Cyrenaïques) : Réaliser les désirs plaisants, modérément pour Épicure, intensément pour Aristippe.',
          'Sagesse moyenne (Aristote) : Tempérance, juste milieu entre excès et défaut. Désirer les bonnes choses (vertueuses) de la bonne manière.'
        ]
      }
    ],
    contemporaryIssues: [
      {
        issue: 'Désir et consommation',
        description: 'La société de consommation crée des désirs artificiels (pub, marketing). Le désir devient infini, toujours insatisfait. Baudrillard : désir de signe, non d\'usage.'
      },
      {
        issue: 'Désir et numérique',
        description: 'Les algorithmes alimentent nos désirs (recommandations, réseaux sociaux). Le désir est anticipé, calculé, marchandisé. Nouvelles addictions (screens, pornographie, jeux).'
      },
      {
        issue: 'Désir et identité',
        description: 'Le désir sexuel comme identité (hétéro, homo, bi, trans, queer). Foucault : la sexualité comme dispositif de pouvoir/savoir. Butler : le désir performatif.'
      },
      {
        issue: 'Désir et écologie',
        description: 'Le désir infini de consommation détruit la planète. Faut-il " décroître " et limiter nos désirs ? Désir de possession vs désir d\'être.'
      }
    ]
  },

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      concept: 'amour',
      relationship: 'L\'amour est une forme de désir : désir de l\'autre, désir de union, désir de reconnaissance.',
      bidirectional: true
    },
    {
      concept: 'volonté',
      relationship: 'La volonté est désir rationnel, décision consciente. Le désir peut être conscient ou inconscient, la volonté est toujours consciente.',
      bidirectional: true
    },
    {
      concept: 'plaisir',
      relationship: 'Le désir vise le plaisir, fuit la douleur. Mais le plaisir peut être sans désir (plaisir spontané), le désir peut être sans plaisir (désir frustré).',
      bidirectional: true
    },
    {
      concept: 'manque',
      relationship: 'Pour Platon et Lacan, le désir est fondamentalement manque : on désire ce qu\'on n\'a pas, on est privé de l\'objet désiré.',
      bidirectional: true
    },
    {
      concept: 'pulsion',
      relationship: 'Freud distingue pulsion (force biologique, inconsciente) et désir (représentation consciente de la pulsion).',
      bidirectional: true
    },
    {
      concept: 'conatus',
      relationship: 'Chez Spinoza, le conatus est l\'effort pour persévérer dans l\'être, identique au désir comme essence de l\'homme.',
      bidirectional: true
    },
    {
      concept: 'reconnaissance',
      relationship: 'Chez Hegel, le désir fondamental est désir de reconnaissance : vouloir être reconnu par l\'autre comme conscience libre.',
      bidirectional: true
    },
    {
      concept: 'jouissance',
      relationship: 'Lacan distingue plaisir (limité, dans le principe de plaisir) et jouissance (débordement, transgression). La jouissance est désir au-delà du plaisir.',
      bidirectional: true
    },
    {
      concept: 'besoin',
      relationship: 'Distinction classique : le besoin est naturel, biologique (faim, soif). Le désir est culturel, psychique, peut être sans fin.',
      bidirectional: true
    },
    {
      concept: 'bonheur',
      relationship: 'Le désir est orienté vers le bonheur (hédonisme). Mais le bonheur par désir est insatisfaisant (Schopenhauer : oscillation souffrance/ennui).',
      bidirectional: true
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Platonisme',
      description: 'Désir comme manque, dialectique ascendante du désir sensible vers le désir intelligible.',
      keyFigures: ['Platon', 'Plotin']
    },
    {
      movement: 'Stoïcisme',
      description: 'Maîtrise des désirs, distinction entre désirs naturels nécessaires et vains, ataraxie.',
      keyFigures: ['Épictète', 'Marc Aurèle', 'Sénèque']
    },
    {
      movement: 'Bouddhisme',
      description: 'Désir comme source de souffrance, extinction du désir comme voie de libération.',
      keyFigures: ['Bouddha', 'Nagarjuna']
    },
    {
      movement: 'Spinozisme',
      description: 'Désir comme conatus, essence de l\'homme, compréhension pour augmenter la puissance d\'agir.',
      keyFigures: ['Spinoza', 'Deleuze']
    },
    {
      movement: 'Idéalisme allemand',
      description: 'Désir de reconnaissance, dialectique du désir (Hegel).',
      keyFigures: ['Hegel', 'Fichte']
    },
    {
      movement: 'Psychanalyse',
      description: 'Désir inconscient, sujet du désir, désir toujours insatisfait.',
      keyFigures: ['Freud', 'Lacan']
    },
    {
      movement: 'Existentialisme',
      description: 'Désir comme projet, néantisation, liberté.',
      keyFigures: ['Sartre', 'de Beauvoir']
    },
    {
      movement: 'Schopenhauerisme',
      description: 'Désir comme condamnation, volonté comme souffrance.',
      keyFigures: ['Schopenhauer', 'Maine de Biran']
    }
  ],

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Désir comme manque (Platon)',
      description: 'Dans Le Banquet et Le Phèdre, Platon analyse le désir comme manque : on désire ce dont on est privé. Le désir est né d\'un manque : on désire la beauté parce qu\'on en est privé. Le mythe de l\'androgyne illustre cette privation : les humains coupés en deux désirent retrouver leur moitié perdue. L\'amour (éros) est désir de beauté, de totalité, d\'immortalité. Le sage apprend à transformer le désir sensible en désir intelligible.'
    },
    {
      title: 'Désir comme conatus (Spinoza)',
      description: 'Pour Spinoza, le désir (cupiditas) est l\'essence même de l\'homme : le conatus, effort pour persévérer dans son être. Tout être tend à persévérer dans son existence, et cet effort de persistance est le désir. Le désir n\'est pas manque mais affirmation vitale. Il n\'y a pas de " bons " ou " mauvais " désirs en soi, mais des désirs qui augmentent ou diminuent notre puissance d\'agir. La liberté n\'est pas supprimer le désir mais le comprendre.'
    },
    {
      title: 'Désir et pulsion (Freud)',
      description: 'Freud distingue désir conscient et pulsion inconsciente. La pulsion est une force constante qui pousse le sujet vers un but (le plaisir). Le désir conscient n\'est que la manifestation traduite d\'un désir inconscient plus profond. Le rêve est "réalisation de désir" : il accomplit symboliquement les désirs refoulés. Le sujet est "sujet du désir", traversé par des désirs qu\'il ne maîtrise pas et dont il ne connaît pas l\'origine.'
    },
    {
      title: 'Désir de l\'Autre (Lacan)',
      description: 'Pour Lacan, le désir est du "manque-à-être". Le petit enfant désire ce que l\'Autre (la mère) désire. Le désir est toujours "désir de l\'Autre" : je désire être ce que l\'Autre désire, je désire ce que l\'Autre désire. Le désir est structuré comme langage et toujours insatisfait : son objet glisse toujours (l\'objet a). Le sujet ne désire pas d\'objet mais d\'être désiré.'
    },
    {
      title: 'Désir et néantisation (Sartre)',
      description: 'Pour Sartre, le désir est néantisation : je désire être ce que je ne suis pas. Je désire l\'autre, le monde, mais ce désir révèle mon manque fondamental. Je ne désire pas simplement posséder l\'objet mais me confondre avec lui, l\'être. Le désir est projet vers un être que je ne suis pas, tentative de combler un néant. Mais ce manque est structurel : le pour-soi poursuit l\'impossible projet de se faire en-soi.'
    },
    {
      title: 'Désir et volonté (Schopenhauer)',
      description: 'Pour Schopenhauer, le désir est manifestation de la Volonté, force aveugle et irrationnelle qui traverse l\'univers. La vie est oscillation entre souffrance (quand le désir n\'est pas satisfait) et ennui (quand il l\'est). Le désir est condamnation : nous sommes voués à vouloir toujours plus sans fin. Le salut est dans l\'ascèse, la contemplation artistique, la compassion qui suspendent la Volonté.'
    },
    {
      title: 'Désir et reconnaissance (Hegel)',
      description: 'Dans la dialectique du maître et de l\'esclave, Hegel montre que le désir fondamental est désir de reconnaissance. Je veux être reconnu par l\'autre comme conscience libre. Ce désir de reconnaissance est désir d\'un désir : je veux que l\'autre désire ma reconnaissance. La lutte pour la reconnaissance est le moteur de l\'histoire. Le sujet se réalise dans la reconnaissance mutuelle.'
    },
    {
      title: 'Désir et ascèse (Stoïciens)',
      description: 'Les stoïciens distinguent désirs naturels nécessaires (faim, soif) qu\'il faut satisfaire, et désirs vains (richesse, gloire, luxe) qu\'il faut supprimer. La sagesse est ataraxie (absence de trouble) obtenue par l\'apatheia (absence de passion). Le sage désire ce qui arrive, car ce qui arrive est nécessaire. Il n\'y a de mal que le jugement erroné.'
    },
    {
      title: 'Désir et souffrance (Bouddha)',
      description: 'Le bouddhisme identifie le désir (tanha, soif) comme origine de la souffrance (dukkha). Les quatre nobles vérités : 1) la vie est souffrance, 2) l\'origine de la souffrance est le désir, 3) la cessation de la souffrance est nirvana (extinction du désir), 4) la voie est le noble sentier octuple. Le désir est attachement (upadana) qui nous enchaîne au cycle des renaissances (samsara).'
    },
    {
      title: 'Désir comme production (Deleuze-Guattari)',
      description: 'Dans L\'Anti-Œdipe, Deleuze et Guattari critiquent la conception du désir comme manque (Platon, Lacan). Le désir est production, création, affirmation. " Le désir ne manque de rien, il ne manque pas de son objet. C\'est au contraire le sujet qui manque du désir, ou le désir qui manque d\'un sujet fixe ". Le désir est machine désirante, flux, connexions.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Analyse du désir comme manque et dialectique de l\'amour' },
    { name: 'Baruch Spinoza', period: '1632-1677', contribution: 'Désir comme conatus, essence de l\'homme' },
    { name: 'Sigmund Freud', period: '1856-1939', contribution: 'Désir inconscient et pulsion comme moteur du psychisme' },
    { name: 'Jacques Lacan', period: '1901-1981', contribution: 'Désir comme manque-à-être et désir de l\'Autre' },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'Désir comme néantisation et projet vers l\'être' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'Désir de reconnaissance comme moteur de l\'histoire' },
    { name: 'Arthur Schopenhauer', period: '1788-1860', contribution: 'Volonté comme désir infini et source de souffrance' },
    { name: 'Gilles Deleuze', period: '1925-1995', contribution: 'Désir comme production, non manque' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'L\'amant platonicien : Dans Le Banquet, l\'amant commence par désirer un beau corps, puis comprend que la beauté se trouve dans tous les beaux corps, puis dans les belles âmes, puis dans les sciences, jusqu\'à atteindre l\'Idée de beauté. Le désir est initiation progressive du sensible à l\'intelligible, transformation du désir en amour de la sagesse.',
    'L\'enfant et le biscuit : L\'enfant qui pleure pour un biscuit qu\'on lui refuse éprouve le désir comme manque, privation douloureuse. Mais dès qu\'on lui donne le biscuit, il cesse de le désirer. Comme dit Platon : "le désir cesse avec la possession". Le désir est orienté vers l\'absence.',
    'Le rêve de la pomme : Dans l\'Interprétation des rêves, Freud raconte le rêve d\'une femme qui voit des fraises et des gâteaux mais ne peut pas en manger. Ce rêve réalise symboliquement son désir refoulé (elle est au régime). Le désir s\'exprime dans le rêve car il est refoulé dans la conscience.',
    'Le désir de reconnaissance : Le stagiaire qui travaille plus que nécessaire cherche la reconnaissance de son chef. Selon Hegel, ce désir de reconnaissance est le désir fondamental : je veux que l\'autre me reconnaisse comme sujet libre, capable. Ce désir pousse à la lutte (risquer sa vie pour être reconnu) puis au travail (transformer le monde pour être reconnu).',
    'Le consommateur insatisfait : Le consommateur achète le dernier iPhone et en est content quelques jours, puis désire déjà le prochain modèle. Le désir s\'inscrit dans une logique de manque toujours renouvelé : on désire ce qu\'on n\'a pas, et une fois qu\'on l\'a, on ne le désire plus mais on désire autre chose. C\'est le "paradoxe hédonique".',
    'Le moine bouddhiste : Le moine qui méditate pour éteindre ses désirs illustre la voie bouddhiste. Observant ses désirs naître et passer, il comprend que le désir est insatisfaisant. En lâchant prise, il atteint le nirvana, état de paix au-delà du désir. Le désir n\'est pas comblé mais éteint : la cessation du désir est la fin de la souffrance.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Le Banquet',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Analyse du désir et de l\'amour comme manque',
      quotes: [
        'On ne désire que ce dont on manque.',
        'L\'amour est désir de beauté.',
        'Le désir cesse avec la possession.',
        'L\'amour est enfant de pauvreté et de ressource.',
        'Le désir est recherche de sa moitié perdue.',
        'L\'initiation amoureuse mène de la beauté des corps à la beauté surnaturelle.'
      ]
    },
    {
      title: 'Éthique',
      author: 'Baruch Spinoza',
      year: 1677,
      type: 'BOOK' as const,
      reference: 'Désir comme conatus et essence de l\'homme',
      quotes: [
        'Le désir est l\'essence même de l\'homme.',
        'Le conatus est l\'effort pour persévérer dans son être.',
        'Nous ne savons pas ce que peut un corps.',
        'La liberté n\'est pas absence de désir mais compréhension du désir.',
        'Le désir est l\'appétit avec conscience de lui-même.',
        'Ce qui est bon est utile à l\'homme.'
      ]
    },
    {
      title: 'L\'Interprétation des rêves',
      author: 'Sigmund Freud',
      year: 1900,
      type: 'BOOK' as const,
      reference: 'Théorie du désir inconscient et réalisation du désir dans le rêve',
      quotes: [
        'Le rêve est la réalisation d\'un désir.',
        'Le désir inconscient est le véritable moteur du psychisme.',
        'Le refoulement est le destin du pulsionnel.',
        'Le Moi n\'est pas maître dans sa propre maison.',
        'L\'inconscient est le siège des désirs refoulés.',
        'Le symptôme est satisfaction substituée du désir.'
      ]
    },
    {
      title: 'Écrits',
      author: 'Jacques Lacan',
      year: 1966,
      type: 'BOOK' as const,
      reference: 'Désir comme manque-à-être et désir de l\'Autre',
      quotes: [
        'Le désir est du manque-à-être.',
        'Le désir est toujours désir de l\'Autre.',
        'Le désir de l\'homme est le désir de l\'Autre.',
        'L\'objet a est l\'objet cause du désir.',
        'Il n\'y a pas de rapport sexuel.',
        'L\'inconscient est structuré comme un langage.'
      ]
    },
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Désir comme néantisation et projet',
      quotes: [
        'Le désir est néantisation de l\'être.',
        'Je désire être ce que je ne suis pas.',
        'Le pour-soi poursuit l\'impossible projet de se faire en-soi.',
        'Le désir est présence à l\'être par absence.',
        'L\'homme est une passion inutile.',
        'Le désir est effort pour combler un manque.'
      ]
    },
    {
      title: 'Phénoménologie de l\'Esprit',
      author: 'Georg Wilhelm Friedrich Hegel',
      year: 1807,
      type: 'BOOK' as const,
      reference: 'Désir de reconnaissance et dialectique maître/esclave',
      quotes: [
        'La conscience de soi est désir d\'une autre conscience.',
        'Le désir est désir de reconnaissance.',
        'La vie est désir vivant.',
        'La lutte pour la reconnaissance est le moteur de l\'histoire.',
        'Le travail est désir contenu.',
        'La reconnaissance mutuelle est la vérité de la conscience.'
      ]
    },
    {
      title: 'Le Monde comme volonté et comme représentation',
      author: 'Arthur Schopenhauer',
      year: 1818,
      type: 'BOOK' as const,
      reference: 'Volonté comme désir infini et source de souffrance',
      quotes: [
        'Le monde est volonté et représentation.',
        'La vie est oscillation entre souffrance et ennui.',
        'Le désir est condamnation à vouloir.',
        'Le vouloir-vivre est aveugle et irrationnel.',
        'L\'art suspend la volonté.',
        'La compassion est la seule voie de salut.'
      ]
    },
    {
      title: 'L\'Anti-Œdipe',
      author: 'Gilles Deleuze et Félix Guattari',
      year: 197,
      type: 'BOOK' as const,
      reference: 'Désir comme production',
      quotes: [
        'Le désir ne manque de rien.',
        'Le désir est production, non manque.',
        'Le désir est machine désirante.',
        'Le désir est réalité, non fantasme.',
        'Partout où il y a du désir, il y a du désir de puissance.',
        'Le désir est révolutionnaire.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Platon définit-il le désir ?',
      back: 'Pour Platon, le désir est manque : on désire ce dont on est privé. L\'amour (éros) est désir de beauté, de totalité, de ce qui nous manque. Le mythe de l\'androgyne illustre cette privation : les humains coupés en deux désirent retrouver leur moitié perdue. Le désir cesse quand on obtient l\'objet désiré, preuve qu\'il est orienté vers l\'absence.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Spinoza définit-il le désir comme conatus ?',
      back: 'Pour Spinoza, le désir (cupiditas) est l\'essence même de l\'homme : le conatus, effort pour persévérer dans son être. Tout être tend à persévérer dans son existence, et cet effort est le désir. Le désir n\'est pas manque mais affirmation vitale, force de vie. Il n\'y a pas de bons ou mauvais désirs en soi, mais des désirs qui augmentent ou diminuent notre puissance d\'agir. La liberté n\'est pas supprimer le désir mais le comprendre.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre désir conscient et pulsion chez Freud ?',
      back: 'Freud distingue le désir conscient (ce dont nous avons conscience de vouloir) et la pulsion inconsciente (force constante qui pousse le sujet sans qu\'il le sache). Le désir conscient n\'est que la manifestation traduite d\'un désir inconscient plus profond. Le rêve est "réalisation de désir" : il accomplit symboliquement les désirs refoulés. Le sujet est "sujet du désir", traversé par des désirs qu\'il ne maîtrise pas.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Lacan caractérise-t-il le désir ?',
      back: 'Pour Lacan, le désir est du "manque-à-être". Il est structuré comme langage et toujours insatisfait : son objet glisse toujours (l\'objet a). Le désir est toujours "désir de l\'Autre" : je désire être ce que l\'Autre désire, je désire ce que l\'Autre désire. Le désir naît du langage et manque essentiellement.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Hegel lie-t-il désir et reconnaissance ?',
      back: 'Hegel montre que le désir fondamental est désir de reconnaissance. Je veux être reconnu par l\'autre comme conscience libre. Ce désir de reconnaissance est désir d\'un désir : je veux que l\'autre désire ma reconnaissance. La lutte pour la reconnaissance (risquer sa vie pour être reconnu) devient lutte pour la vie, puis le travail (l\'esclave travaille pour être reconnu par son travail). L\'histoire est ce processus de reconnaissance mutuelle.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment les bouddhistes voient-ils le désir ?',
      back: 'Le bouddhisme identifie le désir (tanha, "soif") comme origine de la souffrance (dukkha). Les quatre nobles vérités : 1) la vie est souffrance, 2) l\'origine de la souffrance est le désir (attachement, avidité), 3) la cessation de la souffrance est nirvana (extinction du désir), 4) la voie est le noble sentier octuple. Le désir est chaîne qu\'il faut briser pour atteindre la libération.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Spinoza résume le désir ?',
      back: '"Le désir est l\'essence même de l\'homme" (Éthique, 1677)',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Platon résume le désir comme manque ?',
      back: '"On ne désire que ce dont on manque" (Le Banquet, IVe siècle av. J.-C.)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Freud, le rêve est la {{réalisation}} d\'un {{désir}}.',
      back: 'réalisation | désir',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le désir est-il condamnation (Schopenhauer) ou essence de la vie (Spinoza) ?',
      back: 'Deux conceptions opposées du désir. Pour Schopenhauer, le désir est condamnation : la Volonté est force aveugle qui nous pousse à vouloir toujours plus sans satisfaction. La vie est oscillation entre souffrance (désir non satisfait) et ennui (désir satisfait). Le salut est dans l\'ascèse, la suspension de la Volonté. Pour Spinoza, le désir est essence de la vie : le conatus est effort de persévérer dans son être, affirmation vitale. Le désir n\'est pas à supprimer mais à comprendre pour le diriger vers ce qui augmente notre puissance d\'agir. Ces deux conceptions s\'opposent sur le statut du désir : condamnation ou essence de l\'être ? La question engage toute notre compréhension de la vie : faut-il libérer le désir ou se libérer du désir ? Spinoza invite à comprendre le désir pour mieux le vivre ; Schopenhauer invite à s\'en libérer pour atteindre la paix.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['désir', 'platon', 'spinoza', 'freud', 'lacan', 'sartre', 'hegel', 'schopenhauer', 'deleuze', 'conatus', 'manque', 'pulsion', 'reconnaissance', 'amour', 'plaisir', 'jouissance', 'bouddhisme']
};
