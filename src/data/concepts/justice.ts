/**
 * Justice - Concept Data
 * Principe de droit et d'équité, vertu cardinale et idéal politique
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'justice',
  name: 'Justice',
  slug: 'justice',
  category: 'philosophie_morale_et_politique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'La justice est le principe moral qui exige de donner à chacun ce qui lui est dû. La philosophie distingue plusieurs dimensions : la justice commutative (équité dans les échanges) ; la justice distributive (répartition équitable des biens) ; la justice corrective (réparation des torts) ; la justice sociale (réduction des inégalités). Pour Platon, la justice est harmonie de la cité et de l\'âme : chacun fait ce qui lui convient. Pour Aristote, la justice est « la vertu totale » mais aussi une vertu spécifique qui consiste à respecter l\'égalité. Pour Rawls, la justice est équité : elle consiste à maximiser la situation des plus défavorisés. Pour Nozick, la justice est respect des droits acquis. La justice oppose universalité (règles égales pour tous) et particularité (attention aux situations singulières).',
  shortDefinition: 'Principe de donner à chacun ce qui lui est dû, vertu de droit et d\'équité',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'justitia : jus (droit)',
    greek: 'dikaiosynē (δικαιοσύνη)',
    root: 'droit, ce qui est conforme à la loi divine ou humaine',
    notes: 'Le latin jus désigne le droit sacré ; le grec dikè est la justice cosmique et humaine'
  },

  // ===== REASONING (ARGUMENTS PHILOSOPHIQUES) =====
  reasoning: {
    thesis: 'La justice est la première vertu des institutions sociales et le fondement de la vie morale',
    arguments: [
      {
        title: 'Argument de l\'égalité morale',
        content: 'Tous les humains ont une dignité égale. Si nous sommes égaux en dignité, nous méritons un traitement égal. La justice exige de traiter les égaux également, les inégaux inégalement mais proportionnellement.'
      },
      {
        title: 'Argument du contrat social (Rawls)',
        content: 'Derrière un voile d\'ignorance (sans savoir quelle place on occupera dans la société), personne ne choisirait des règles injustes. La justice comme équité est ce que des personnes rationnelles choisiraient dans ces conditions impartiales.'
      },
      {
        title: 'Argument de l\'utilité (Mill)',
        content: 'La justice maximise le bonheur total. Respecter les droits, tenir ses promesses, punir les coupables : ces pratiques sont justes parce qu\'elles augmentent le bien-être général à long terme.'
      },
      {
        title: 'Argument de la reconnaissance (Hegel)',
        content: 'La justice est reconnaissance mutuelle. Chacun doit être reconnu comme sujet libre, méritant respect. Les injustices (esclavage, exploitation) sont refus de reconnaissance.'
      }
    ],
    counterArguments: [
      {
        title: 'Critique du relativisme culturel',
        content: 'La justice n\'est pas universelle mais varie selon les cultures. Ce qui est juste ici peut être injuste ailleurs. Il n\'y a pas de justice objective, seulement des conventions locales.'
      },
      {
        title: 'Critique du réalisme politique',
        content: 'La justice est idéal utopique. La politique est rapport de force, intérêt, pouvoir. Prétendre imposer la justice est hypocrite ou dangereux (les pires crimes ont été commis au nom de la justice).'
      },
      {
        title: 'Critique libertarienne',
        content: 'La justice distributive est illégitime. Seul compte le processus d\'acquisition (juste acquisition, juste transfert). La redistribution (impôts) est vol, violation des droits. La justice est procédurale, pas distributive.'
      },
      {
        title: 'Critique communautarienne',
        content: 'La justice libérale est abstraite, individuelle, ignorante des appartenances communautaires. La justice véritable reconnaît les différences culturelles, les biens communs, les traditions.'
      }
    ]
  },

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: [
      {
        period: 'Antiquité grecque',
        description: 'Platon : justice comme harmonie de la cité et de l\'âme. Aristote : distinction justice commutative, distributive, corrective. Les stoïciens : loi naturelle, éga ité de tous les humains.'
      },
      {
        period: 'Antiquité romaine',
        description: 'Cicéron : « Justice est la volonté constante et perpétuelle de donner à chacun son droit ». Le droit romain développe le jus (droit) comme système de lois.'
      },
      {
        period: 'Moyen Âge chrétien',
        description: 'Saint Thomas : justice naturelle et loi positive. « La loi injuste n\'est pas une loi ». La justice théologale s\'ajoute aux vertus cardinales.'
      },
      {
        period: 'Moderne (XVIIe-XVIIIe)',
        description: 'Locke : justice comme respect des droits naturels (vie, liberté, propriété). Rousseau : justice comme volonté générale, intérêt commun. Kant : impératif catégorique, traiter l\'humanité comme fin en soi.'
      },
      {
        period: 'XIXe siècle',
        description: 'Utilitarisme (Bentham, Mill) : justice comme maximisation du bonheur. Marx : justice comme abolition de l\'exploitation, distribution selon les besoins. Kierkegaard : justice religieuse vs justice humaine.'
      },
      {
        period: 'XXe siècle',
        description: 'Rawls : justice comme équité, voile d\'ignorance. Nozick : justice libertarienne, droits absolus. Walzer : sphères de justice, pluralisme équitable. Mouvement des droits humains, justice sociale, justice globale.'
      },
      {
        period: 'XXIe siècle',
        description: 'Justice climatique : responsabilités des générations présentes envers les futures. Justice intersectionnelle : combinaison des oppressions (race, genre, classe). Justice restaurative : réparation vs punition. Justice algorithmique : biais des IA.'
      }
    ],
    debates: [
      {
        title: 'Justice distributive : égalité ou équité ?',
        positions: [
          'Égalitarisme (Rawls, socialisme) : La justice exige l\'égalité, du moins des opportunités. Les inégalités ne sont justes que si elles bénéficient aux plus défavorisés.',
          'Libertarianisme (Nozick) : La justice n\'est pas égalité mais respect des droits. Toute redistribution est viol. Ce qui compte est le processus d\'acquisition, pas le résultat.',
          'Méritocratie : La justice est donner à chacun selon son mérite. Les inégalités sont justes si elles reflètent les différences de talent et d\'effort.'
        ]
      },
      {
        title: 'Justice procédurale ou justice substantielle ?',
        positions: [
          'Procédurale (Habermas) : La justice est issue de procédures justes (délibération démocratique, due process). Si la procédure est juste, le résultat est juste.',
          'Substantielle (Marx) : La justice est un certain état de société (égalité réelle). Les procédures formelles masquent les injustices matérielles.',
          'Mixte : Les deux sont nécessaires. Une procédure juste tend vers un résultat juste, mais n\'est pas suffisante.'
        ]
      },
      {
        title: 'Justice et morale',
        positions: [
          'Identification (Kant) : La justice est l\'application du droit moral. Le droit positif doit se conformer à la loi morale.',
          'Séparation (Kelsen) : Le droit est valide s\'il suit les procédures, qu\'il soit juste ou non. La justice est morale, le droit est technique.',
          'Positivisme incor poré (Hart, Fuller) : Il y a un lien minimal entre droit et morale, mais le droit peut être injuste et rester droit.'
        ]
      },
      {
        title: 'Justice punitive ou restaurative ?',
        positions: [
          'Rétibution (Kant, Hegel) : La punition est juste parce que le coupable la mérite. « Œil pour œil, dent pour dent ». La justice est vengeance proportionnée.',
          'Utilitariste (Bentham) : La punition se justifie si elle prévient les crimes futurs. La peine de mort n\'est justifiée que si elle dissuade.',
          'Restaurative : La justice vise à réparer le dommage, réconcilier victime et coupable, réintégrer le délinquant. La punition aggrave le mal.'
        ]
      }
    ],
    contemporaryIssues: [
      {
        issue: 'Justice climatique',
        description: 'Qui est responsable du changement climatique ? Les pays historiquement émetteurs (Occident) doivent-ils indemniser les pays du Sud ? Justice entre générations : nous empruntons à nos enfants. Justice écologique : la nature a-t-elle des droits ?'
      },
      {
        issue: 'Justice algorithmique',
        description: 'Les IA discriminant (race, genre). La décision algorithmique est-elle juste ? Les biais de données reproduisent les injustices sociales. Transparence, explicabilité, responsabilité des algorithmes.'
      },
      {
        issue: 'Justice globale',
        description: 'La justice s\'arrête-t-elle aux frontières ? Pogge : les institutions globales (OMC, FMI) violent les droits humains. Cosmopolitisme : citoyenneté mondiale, redistribution globale. Nationalisme : priorité aux compatriotes.'
      },
      {
        issue: 'Justice intersectionnelle',
        description: 'Kimberlé Crenshaw : les oppressions se combinent (race x genre x classe). Une femme noire subit discriminations raciales ET genrées. La justice doit considérer ces intersections, pas chaque oppression isolément.'
      }
    ]
  },

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      concept: 'droit',
      relationship: 'Le droit est l\'ensemble des lois. La justice est la qualité du droit : un droit juste respecte la morale. « Lex iniusta non est lex » (loi injuste n\'est pas loi).'
    },
    {
      concept: 'égalité',
      relationship: 'La justice implique l\'égalité : traiter les égaux également. Mais traiter inégalement les inégaux (équité). La tension égalité/équité traverse toute la théorie de la justice.'
    },
    {
      concept: 'équité',
      relationship: 'L\'équité est justice tenant compte des particularités. Aristote : l\'équité corrige la loi universelle quand elle est inadéquate au cas particulier.'
    },
    {
      concept: 'loi',
      relationship: 'La loi est l\'expression du droit. Une loi peut être juste ou injuste. La justice civile désobéit aux lois iniques (désobéissance civile).'
    },
    {
      concept: 'morale',
      relationship: 'La justice est à la fois vertu morale (vertu cardinale) et principe politique. La morale individuelle et la justice sociale sont liées.'
    },
    {
      concept: 'responsabilité',
      relationship: 'La justice punitive suppose la responsabilité : on ne punit que si le coupable est responsable. La justice restauration vise à réparer, pas punir.'
    },
    {
      concept: 'rétribution',
      relationship: 'La rétribution est retour du mal pour le mal : punir proportionnellement au tort. C\'est une conception de la justice punitive.'
    },
    {
      concept: 'reconnaissance',
      relationship: 'Pour Hegel et Honneth, la justice est reconnaissance mutuelle. Les injustices sont refus de reconnaissance (sexisme, racisme).'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Platonisme',
      description: 'Justice comme harmonie de la cité et de l\'âme.',
      keyFigures: ['Platon']
    },
    {
      movement: 'Aristotélisme',
      description: 'Distinction justice commutative, distributive, corrective.',
      keyFigures: ['Aristote', 'Thomas d\'Aquin']
    },
    {
      movement: 'Utilitarisme',
      description: 'Justice comme maximisation du bonheur.',
      keyFigures: ['Bentham', 'Mill', 'Sidgwick']
    },
    {
      movement: 'Contractualisme',
      description: 'Justice comme équité, contrat social, voile d\'ignorance.',
      keyFigures: ['Rawls', 'Scanlon']
    },
    {
      movement: 'Libertarianisme',
      description: 'Justice comme respect des droits, rejet de la redistribution.',
      keyFigures: ['Nozick', 'Hayek', 'Friedman']
    },
    {
      movement: 'Communautarisme',
      description: 'Critique du libéralisme, justice dans les communautés.',
      keyFigures: ['Sandel', 'MacIntyre', 'Walzer', 'Taylor']
    },
    {
      movement: 'Féminisme',
      description: 'Justice de genre, discrimination positive, care ethics.',
      keyFigures: ['Okin', 'Gilligan', 'Nussbaum', 'Butler']
    },
    {
      movement: 'Théorie critique',
      description: 'Justice sociale, émancipation, reconnaissance.',
      keyFigures: ['Honneth', 'Fraser', 'Young']
    }
  ],

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Justice commutative (Aristote)',
      description: 'La justice commutative règle les échanges entre particuliers : elle exige l\'équivalence entre ce qui est donné et ce qui est reçu (prix juste, salaire juste, réparation juste). Si je vends un champ, le prix doit correspondre à sa valeur. Si je cause un dommage, je dois réparer. C\'est une justice proportionnelle à l\'échange, à la transaction, entre égaux.'
    },
    {
      title: 'Justice distributive (Aristote)',
      description: 'La justice distributive règle la répartition des biens, des honneurs, des charges dans la cité. Elle est « géométrique » : elle distribue selon le mérite, la contribution, la qualité. Les meilleurs postes aux meilleurs, des récompenses proportionnées aux mérites. Aristote reconnaît que l\'égalité stricte est injuste entre inégaux : il est juste de traiter différemment des personnes différentes.'
    },
    {
      title: 'Justice comme harmonie (Platon)',
      description: 'Dans La République, Platon définit la justice comme harmonie. Dans la cité juste, chaque classe (gouvernants, guerriers, producteurs) remplit sa fonction propre. Dans l\'âme juste, chaque partie (raison, colère, désir) remplit sa fonction. La justice est donc l\'ordre de la pluralité : chaque partie fait ce qui lui convient, et l\'ensemble est harmonieux. L\'injustice est désordre, rébellion des parties contre leur fonction.'
    },
    {
      title: 'Justice comme équité (Rawls)',
      description: 'Dans Théorie de la justice, Rawls défend la justice comme équité (fairness). Il imagine une « position originelle » où des personnes libres et égales choisissent les principes de justice derrière un « voile d\'ignorance » (ils ne savent pas quelle place ils occuperont dans la société). Deux principes émergent : 1) égalité des libertés de base ; 2) inégalités acceptables seulement si elles bénéficient aux plus défavorisés (principe de différence).'
    },
    {
      title: 'Justice comme respect des droits (Nozick)',
      description: 'Dans Anarchie, État et Utopie, Nozick défend une conception libertarienne de la justice comme respect des droits. La justice distributive n\'a pas de sens : la question n\'est pas « qui doit avoir quoi? » mais « comment les biens ont-ils été acquis? ». Si les biens ont été justement acquis et transférés, quelle que soit la distribution résultante, elle est juste. L\'État ne doit pas redistribuer car cela violerait les droits.'
    },
    {
      title: 'Justice sociale',
      description: 'La justice sociale concerne la répartition des biens sociaux (éducation, santé, revenus) et la réduction des inégalités. Pour Rawls, elle exige de maximiser la situation des plus défavorisés. Pour les socialistes, elle exige abolition des classes et égalité réelle. Pour les libéraux, elle exige égalité des chances, pas égalité des résultats. Le débat oppose justice comme procédure (règles justes) et justice comme résultat (distribution juste).'
    },
    {
      title: 'Justice et loi',
      description: 'La question du rapport entre justice et loi est ancienne. Pour les positivistes (Kelsen, Hart), la loi est valide si elle est adoptée selon les procédures, qu\'elle soit juste ou non. La justice est morale, la loi est droit. Pour les naturalistes (Thomas d\'Aquin, Locke), une loi injuste n\'est pas une vraie loi (lex iniusta non est lex). Le droit naturel s\'oppose au droit positif. La justice civile désobéit aux lois iniques (Thoreau, King).'
    },
    {
      title: 'Justice et vengeance',
      description: 'La justice se distingue de la vengeance par sa procédure (règles publiques vs passion privée), son autorité (État vs individu), sa proportionnalité (mesuré vs excessif). Mais la justice punitive a une dimension vindicative : elle répond au tort par la peine. La question de la justice restauration (réparer le dommage) vs punitive (punir le coupable) divise les théories de la peine.'
    },
    {
      title: 'Justice globale',
      description: 'La justice s\'étend-elle au-delà des frontières ? Pour les nationalistes, la justice est d\'abord nationale : nous devons plus à nos compatriotes. Pour les cosmopolitites (Pogge, Singer), la justice est mondiale : les inégalités globales sont injustes. Le devoir d\'assistance ne s\'arrête pas aux frontières. La justice climatique pose la question des responsabilités entre Nord et Sud.'
    },
    {
      title: 'Justice restaurative',
      description: 'La justice restaurative vise à réparer le dommage causé par l\'infraction, plutôt que punir le coupable. Elle implique la victime, l\'offenseur et la communauté dans un processus de dialogue, de réparation, de réconciliation. Elle s\'oppose à la justice punitive (rétributive) qui se concentre sur la punition proportionnée. La justice restaurative est utilisée dans les systèmes traditionnels (Maoris, Africains) et moderne (justice réparatrice).'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Justice comme harmonie de la cité et de l\'âme' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Distinction justice commutative, distributive, corrective' },
    { name: 'John Rawls', period: '1921-2002', contribution: 'Théorie de la justice comme équité et voile d\'ignorance' },
    { name: 'Robert Nozick', period: '1938-2002', contribution: 'Justice comme respect des droits acquis (libertarianisme)' },
    { name: 'Thomas d\'Aquin', period: '1225-1274', contribution: 'Justice naturelle vs loi positive' },
    { name: 'John Stuart Mill', period: '1806-1873', contribution: 'Justice comme utilitarisme et protection des droits' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Justice comme droit et respect de la dignité humaine' },
    { name: 'Michael Walzer', period: '1935-', contribution: 'Sphères de justice et pluralisme équitable' },
    { name: 'Amartya Sen', period: '1933-', contribution: 'Justice comme capabilités et développement humain' },
    { name: 'Martha Nussbaum', period: '1947-', contribution: 'Approche des capabilités et justice globale' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le mythe de l\'anneau de Gygès : Platon raconte l\'histoire de Gygès qui trouve un anneau d\'invisibilité. Avec ce pouvoir, il séduit la reine, tue le roi, s\'empare du trône. Platon demande : si personne ne pouvait nous voir, qui serait juste ? La justice, pour être vraie, doit être choisie pour elle-même, pas par peur d\'être vu. Le juste véritable reste juste même quand il pourrait être injuste impunément.',
    'Le voile d\'ignorance de Rawls : Pour déterminer ce qu\'est une société juste, imaginons que nous devions choisir ses règles sans savoir qui nous serons (riche ou pauvre, homme ou femme, en bonne santé ou malade). Rawls soutient que derrière ce « voile d\'ignorance », nous choisirions de maximiser la position des plus défavorisés, car chacun pourrait être parmi eux. C\'est le « principe de différence ».',
    'La taxation progressive : Rawls pourrait soutenir que la taxation des riches pour aider les pauvres est juste car elle améliore la situation des plus défavorisés. Nozick répondrait que c\'est injuste car elle viole les droits des riches sur leurs biens légitimement acquis. Le débat illustre l\'opposition entre justice comme résultat (Rawls) et justice comme procédure (Nozick).',
    'La discrimination positive : La politique qui favorise les groupes discriminés dans l\'accès à l\'université ou à l\'emploi est-elle juste? Pour certains, elle est juste car elle corrige des injustices historiques et réalise l\'égalité des chances. Pour d\'autres, elle est injuste car elle discrimine selon la race, ce qui contredit le principe d\'égalité. La question oppose justice comme résultat (égalité réelle) et justice comme procédure (égalité formelle).',
    'La peine de mort : La justice punitive exige-t-elle la mort pour les meurtriers? Pour certains (rétibution), oui : le crime mérite une peine proportionnée. Pour d\'autres (réparation), la justice vise à réparer le dommage, pas à nuire davantage au coupable. Pour d\'autres (prévention), la peine vise à empêcher les crimes futurs. Le débat oppose différentes conceptions de la justice.',
    'La justice climatique : Les pays industrialisés (Occident) sont historiquement responsables des émissions de CO2. Les pays du Sud souffrent du changement climatique (sécheresses, inondations). Est-il juste que le Nord paie au Sud pour l\'adaptation ? La justice climatique pose la question des responsabilités historiques et de la solidarité globale.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'République',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Justice comme harmonie de la cité et de l\'âme, mythe de Gygès',
      quotes: [
        'La justice est faire ce qui nous convient.',
        'Chacun doit pratiquer le métier pour lequel il est le plus apte.',
        'La justice est l\'harmonie des parties de l\'âme.',
        'L\'injustice est discorde civile dans l\'âme et dans la cité.',
        'Le juste est heureux, l\'injuste malheureux.',
        'Mieux vaut subir l\'injustice que la commettre.'
      ]
    },
    {
      title: 'Éthique à Nicomaque',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Distinction justice commutative, distributive, corrective',
      quotes: [
        'La justice est la vertu totale.',
        'La justice distributive est géométrique.',
        'La justice commutative est arithmétique.',
        'Le juste milieu est le propre de la vertu.',
        'La justice est une vertu envers autrui.',
        'L\'inégalité entre égaux est injuste.'
      ]
    },
    {
      title: 'Théorie de la justice',
      author: 'John Rawls',
      year: 1971,
      type: 'BOOK' as const,
      reference: 'Justice comme équité et voile d\'ignorance',
      quotes: [
        'La justice est la première vertu des institutions sociales.',
        'Les principes de justice sont choisis derrière un voile d\'ignorance.',
        'Chaque personne a une égale droit aux libertés de base.',
        'Les inégalités doivent profiter aux plus défavorisés.',
        'La position originale assure l\'impartialité du choix.',
        'La justice comme équité est une alternative à l\'utilitarisme.'
      ]
    },
    {
      title: 'Anarchie, État et Utopie',
      author: 'Robert Nozick',
      year: 1974,
      type: 'BOOK' as const,
      reference: 'Justice libertarienne comme respect des droits',
      quotes: [
        'Les individus ont des droits que l\'État ne peut violer.',
        'La justice est historique, pas finale (patterned).',
        'L\'État minimal est le seul État justifié.',
        'La taxation forcée est travail forcé.',
        'La justice d\'une acquisition dépend de son histoire.',
        'La redistribution viole les droits.'
      ]
    },
    {
      title: 'Somme théologique',
      author: 'Thomas d\'Aquin',
      year: 1265,
      type: 'BOOK' as const,
      reference: 'Loi naturelle et justice',
      quotes: [
        'La loi injuste n\'est pas une loi au sens propre.',
        'La loi humaine doit se conformer à la loi naturelle.',
        'La justice est une vertu cardinale.',
        'Le droit naturel est participation à la loi éternelle.',
        'La justice consiste à rendre à chacun son dû.',
        'La justice sociale est la vertu des institutions.'
      ]
    },
    {
      title: 'De la liberté',
      author: 'John Stuart Mill',
      year: 1859,
      type: 'BOOK' as const,
      reference: 'Justice comme utilitarisme et protection des droits',
      quotes: [
        'La justice est le nom le plus fort et le plus élevé de la morale.',
        'La justice implique un droit correspondant.',
        'La justice est imparables, universelle.',
        'La justice protège les droits de l\'individu.',
        'L\'utilité est le fondement ultime de la justice.',
        'La justice sociale est compatible avec la liberté.'
      ]
    },
    {
      title: 'Les sphères de la justice',
      author: 'Michael Walzer',
      year: 1983,
      type: 'BOOK' as const,
      reference: 'Pluralisme équitable et sphères de justice',
      quotes: [
        'La justice est complexe, pluraliste.',
        'Chaque bien social a sa sphère de distribution propre.',
        'Le pouvoir ne doit pas acheter tout.',
        'L\'égalité complexe est justice.',
        'La tyrannie est domination d\'une sphère sur les autres.',
        'La justice se fait dans chaque sphère.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Aristote distingue-t-il justice commutative et distributive ?',
      back: 'La justice commutative règle les échanges entre particuliers : elle exige l\'équivalence entre ce qui est donné et reçu (prix juste, salaire juste). C\'est une justice arithmétique (1=1). La justice distributive règle la répartition des biens et honneurs dans la cité : elle distribue selon le mérite, la qualité. C\'est une justice géométrique (proportionnelle au mérite). Aristote reconnaît qu\'il est juste de traiter différemment des personnes différentes.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le « voile d\'ignorance » chez Rawls ?',
      back: 'Rawls imagine une « position originelle » où des personnes choisissent les principes de justice derrière un « voile d\'ignorance » : elles ne savent pas quelle place elles occuperont dans la société (riche/pauvre, homme/femme, en bonne santé/malade). Dans cette situation d\'impartialité radicale (chacun pouvant être le plus défavorisé), Rawls soutient qu\'elles choisiraient : 1) égalité des libertés de base ; 2) inégalités seulement si elles bénéficient aux plus défavorisés (principe de différence).',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Platon définit-il la justice ?',
      back: 'Dans La République, Platon définit la justice comme harmonie. Dans la cité juste, chaque classe (gouvernants, guerriers, producteurs) remplit sa fonction propre. Dans l\'âme juste, chaque partie (raison, colère, désir) remplit sa fonction. La justice est donc l\'ordre de la pluralité : chaque partie fait ce qui lui convient, et l\'ensemble est harmonieux. Le mythe de Gygès montre que le véritable juste reste juste même quand il pourrait être injuste impunément.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre Rawls et Nozick sur la justice ?',
      back: 'Rawls (justice comme équité) soutient que la justice concerne la distribution finale des biens : les inégalités sont justes seulement si elles bénéficient aux plus défavorisés. Nozick (libertarianisme) soutient que la justice est historique : seuls comptent les processus d\'acquisition et de transfert. Si les biens ont été justement acquis et transférés, quelle que soit la distribution, elle est juste. La redistribution (impôts) est injuste car elle viole les droits. Rawls : justice comme résultat ; Nozick : justice comme procédure.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la justice sociale ?',
      back: 'La justice sociale concerne la répartition équitable des biens sociaux (éducation, santé, revenus) et la réduction des inégalités. Pour Rawls, elle exige de maximiser la situation des plus défavorisés. Pour les socialistes, elle exige égalité réelle, abolition des classes. Pour les libéraux, elle exige égalité des chances, pas égalité des résultats. Le débat oppose justice distributive (comment distribuer?) et justice procédurale (quelles règles équitables?).',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Platon résume sa conception de la justice ?',
      back: '« La justice est faire ce qui nous convient » (République, IVe siècle av. J.-C.)',
      difficulty: 2
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Rawls résume la justice ?',
      back: '« La justice est la première vertu des institutions sociales » (Théorie de la justice, 1971)',
      difficulty: 2
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Aristote, la justice {{commutative}} règle les échanges, la justice {{distributive}} règle la répartition.',
      back: 'commutative | distributive',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'La justice exige-t-elle l\'égalité ou l\'équité ?',
      back: 'La tension entre égalité et équité traverse toute la philosophie de la justice. L\'égalité formelle (traiter tout le monde pareil) peut être injuste : donner la même nourriture à un affamé et à un repu n\'est pas juste. L\'équité (traiter selon les besoins, mérites) peut sembler inégalitaire mais plus juste. Aristote distingue justice arithmétique (égalité stricte) et géométrique (proportion au mérite). Rawls tente de concilier : égalité des libertés pour tous (égalité), inégalités économiques seulement si elles aident les plus défavorisés (équité). Le débat contemporain sur la discrimination positive illustre cette tension : favoriser certains groupes est-il juste? Pour certains, oui (équité corrective). Pour d\'autres, non (égalité formelle). La question reste ouverte mais engage toute conception de la justice : traiter également des égaux, inégalement des inégaux.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['justice', 'platon', 'aristote', 'rawls', 'nozick', 'droit', 'égalité', 'équité', 'morale', 'politique', 'loi', 'inégalités', 'rétribution', 'restauration', 'reconnaissance']
};
