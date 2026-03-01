/**
 * Bien - Concept Data
 * Ce qui est désirable, bon, ou a de la valeur, central en éthique et philosophie morale
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'bien',
  name: 'Bien',
  slug: 'bien',
  category: 'ethique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le bien est ce qui est désirable, bon, ou a de la valeur positive. La philosophie distingue plusieurs conceptions : le bien moral (vertu, justice) opposé au mal ; le bienheur ou bonheur comme fin suprême de la vie (eudémonisme) ; le bien utile (avantage, profit) ; le bien plaisir (hédonisme). Pour Platon, le Bien est l\'Idée suprême, source de toute vérité et de toute valeur. Pour Aristote, le bien est la fin de toute action, et le bien suprême est le bonheur (eudaimonia). Pour Kant, le bien moral est la bonne volonté, la seule chose bonne sans condition. Pour les utilitaristes, le bien est maximisation du bonheur. La question du bien est centrale : qu\'est-ce qui rend une vie bonne ? Qu\'est-ce qui vaut la peine d\'être poursuivi ?',
  shortDefinition: 'Ce qui est désirable, moralement bon, ou a de la valeur positive',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'bonum',
    greek: 'agathon (ἀγαθόν)',
    root: 'eu- (bon, bien) : racine indo-européenne',
    notes: 'Le grec agathon désigne ce qui est excellent, désirable. Le latin bonum vient de bonus (bon)'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    thesis: 'Le bien est la fin suprême de toute action humaine et le fondement de la morale',
    arguments: [
      {
        title: 'Argument téléologique (Aristote)',
        content: 'Toute action humaine vise une fin. Les fins visent des biens. Il doit y avoir un bien suprème, bien final, que nous poursuivons pour lui-même et non pour autre chose. Ce bien suprème est le bonheur (eudaimonia).'
      },
      {
        title: 'Argument de l\'impératif catégorique (Kant)',
        content: 'La bonne volonté est la seule chose bonne sans restriction. Les qualités comme l\'intelligence ou le courage peuvent être mauvaises si la volonté est mauvaise. La bonne volonté (vouloir le devoir) est le bien moral suprème.'
      },
      {
        title: 'Argument utilitariste (Mill)',
        content: 'Le bien est ce qui maximise le bonheur. Le plaisir est le seul bien intrinsèque, la douleur le seul mal. Une action est bonne si elle augmente le bonheur total. Le plus grand bonheur pour le plus grand nombre.'
      }
    ],
    counterArguments: [
      {
        title: 'Critique relativiste',
        content: 'Le bien est relatif à chaque culture, individu, situation. Il n\'y a pas de bien universel. Ce qui est bien pour les uns peut être mal pour les autres.'
      },
      {
        title: 'Critique nihiliste (Nietzsche)',
        content: 'Il n\'y a pas de bien en soi, seulement des valeurs créées par les forts. Le bien moral est invention des faibles pour limiter les forts. "Au-delà du bien et du mal".'
      },
      {
        title: 'Critique existentialiste',
        content: 'Il n\'y a pas de bien donné, seulement des choix que nous faisons. L\'existence précède l\'essence : nous créons le bien par nos décisions.'
      }
    ]
  },

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: 'Platon : le Bien comme Idée suprème. Aristote : le bien comme fin de toute action. Épicure : le bien comme plaisir. Kant : la bonne volonté. Utilitarisme : maximisation du bonheur. Nietzsche : critique de la morale du bien.',
    problems: [
      { problem: 'Problème de la définition du bien', description: 'Qu\'est-ce qui rend quelque chose bon ? Plaisir, vertu, utilité ?' },
      { problem: 'Problème du bien vs du bonheur', description: 'Le bien moral se distingue-t-il du bonheur ? Peut-on être heureux sans être moral ?' }
    ],
    debates: [
      {
        issue: 'Qu\'est-ce que le bien suprème ?',
        positions: [
          'Platon : le Bien est l\'Idée suprème, source de toute vérité',
          'Aristote : le bien suprème est le bonheur (eudaimonia)',
          'Kant : le bien moral est la bonne volonté',
          'Mill : le bien est le plus grand bonheur'
        ]
      }
    ]
  },

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    { concept: 'mal', relationship: 'Le bien s\'oppose au mal comme valeur positive à valeur négative' },
    { concept: 'bonheur', relationship: 'Le bonheur est souvent identifié au bien suprème ou fin de la vie' },
    { concept: 'vertu', relationship: 'La vertu est disposition au bien moral' },
    { concept: 'devoir', relationship: 'Le devoir est ce que le bien moral commande' },
    { concept: 'plaisir', relationship: 'Pour les hédonistes, le bien est le plaisir' },
    { concept: 'etre',
      relationship: 'TRANSCENDS',
      explanation: 'Pour Platon, le Bien est au-delà de l\'être en dignity et en puissance. L\'être participe du Bien qui est sa source.',
      bidirectional: true,
      category: 'metaphysique' },
    { concept: 'responsabilite',
      relationship: 'IMPLIES',
      explanation: 'Le bien moral implique responsabilité : être bon, c\'est être responsable. L\'être humain se caractérise par sa capacité au bien.',
      bidirectional: true,
      category: 'ethique' },
    { concept: 'beaute',
      relationship: 'CONVERGES',
      explanation: 'Pour Platon, le Bien et le Beau convergent dans l\'Idée suprême. La beauté est excellence morale autant qu\'esthétique. Le beau est bien moral.',
      bidirectional: true,
      category: 'esthetique' },
    { concept: 'verite',
      relationship: 'UNITED',
      explanation: 'Pour Platon, le Bien et le Vrai s\'unissent dans l\'Idée suprême. Le Vrai est bon, le Bon est vrai. L\'unité du vrai, du beau et du bien.',
      bidirectional: true,
      category: 'epistemologie' },
    { concept: 'dieu',
      relationship: 'PARADIGMATIC',
      explanation: 'Dieu est le Bien suprème, source de toute bonté. Pour Platon, le Bien est au-delà de l\'être comme Dieu est au-delà de la créature.',
      bidirectional: true,
      category: 'spiritualite' }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    { movement: 'Platonisme', description: 'Le Bien comme Idée suprème', keyFigures: ['Platon'] },
    { movement: 'Eudémonisme', description: 'Le bien comme bonheur réalisé', keyFigures: ['Aristote', 'Les stoïciens'] },
    { movement: 'Hédonisme', description: 'Le bien comme plaisir', keyFigures: ['Épicure', 'Mill'] },
    { movement: 'Kantisme', description: 'Le bien comme bonne volonté', keyFigures: ['Kant'] },
    { movement: 'Utilitarisme', description: 'Le bien comme maximisation du bonheur', keyFigures: ['Bentham', 'Mill'] }
  ],

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Bien moral (Kant)',
      description: 'Pour Kant, la seule chose bonne sans restriction est la bonne volonté. L\'intelligence, le courage, la richesse peuvent être mauvais si la volonté est mauvaise. Le bien moral est vouloir le devoir par devoir, agir selon la loi morale.'
    },
    {
      title: 'Bien comme bonheur (Aristote)',
      description: 'Pour Aristote, toute action vise un bien. Le bien suprème est celui que nous poursuivons pour lui-même : le bonheur (eudaimonia). Le bonheur est activité de l\'âme conforme à la vertu. C\'est une vie accomplie, réussie.'
    },
    {
      title: 'Bien comme plaisir (Épicure, Mill)',
      description: 'Pour les hédonistes, le bien est le plaisir, le mal est la douleur. Épicure : le plaisir suprème est l\'absence de trouble (ataraxie). Mill : le bien est le plus grand bonheur pour le plus grand nombre, avec distinction plaisirs supérieurs/inférieurs.'
    },
    {
      title: 'Bien comme Idée suprème (Platon)',
      description: 'Pour Platon, le Bien est l\'Idée la plus élevée, source de toute vérité et de toute valeur. Le soleil est l\'image du Bien : comme le soleil rend les choses visibles, le Bien rend les choses intelligibles. Le Bien est au-delà de l\'être.'
    },
    {
      title: 'Bien comme utilité (utilitarisme)',
      description: 'Pour l\'utilitarisme, le bien est ce qui est utile, ce qui maximise le bonheur. Bentham : " le plus grand bonheur du plus grand nombre ". Le bien est calculable par le calcul fécond (intensité, durée, certitude, proximité du plaisir).'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Théorie du Bien comme Idée suprème et source de toute valeur' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Le bien suprème comme bonheur (eudaimonia) et fin de toute action' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'La bonne volonté comme seul bien sans condition' },
    { name: 'John Stuart Mill', period: '1806-1873', contribution: 'Utilitarisme : le bien comme maximisation du bonheur' },
    { name: 'Épicure', period: '341-270 av. J.-C.', contribution: 'Hédonisme : le bien comme plaisir et absence de trouble' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le dilemme du tramway : Faut-il sacrifier une personne pour en sauver cinq ? L\'utilitarisme dirait oui (maximiser le bien = sauver le plus de vies). Le déontologisme dirait non (on ne doit pas utiliser une personne comme moyen).',
    'L\'anneau de Gygès : Si personne ne pouvait me voir, qui serait juste ? Platon montre que le véritable bien est choisi pour lui-même, pas par peur d\'être vu.',
    'Le médecin nazi : Un médecin ment pour sauver un juif. Le mensonge est moralement mauvais, mais sauver une vie est un bien supérieur. Conflit entre règle morale et bien concret.',
    'Le commerçant honnête : Kant distingue le commerçant honnête par principe (bien moral) du commerçant honnête par intérêt (pas bien moral, car action conforme au devoir mais non par devoir).'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'République',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Théorie du Bien comme Idée suprème',
      quotes: [
        'Le Bien est ce que toute âme poursuit.',
        'Le Bien est au-delà de l\'être.',
        'Le soleil est l\'image du Bien.',
        'Le Bien rend les choses intelligibles.'
      ]
    },
    {
      title: 'Éthique à Nicomaque',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Le bien suprème comme bonheur',
      quotes: [
        'Toute art et toute recherche visent quelque bien.',
        'Le bien suprême est le bonheur.',
        'Le bonheur est activité de l\'âme conforme à la vertu.',
        'Une seule hirondelle ne fait pas le printemps.'
      ]
    },
    {
      title: 'Fondements de la métaphysique des moeurs',
      author: 'Immanuel Kant',
      year: 1785,
      type: 'BOOK' as const,
      reference: 'La bonne volonté comme seul bien sans condition',
      quotes: [
        'Il est impossible de penser rien au monde qui puisse être tenu pour bon sans restriction, sauf une bonne volonté.',
        'La bonne volonté brille comme un joyau.',
        'Le bien moral est la disposition à faire son devoir par devoir.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Kant définit-il le bien moral ?',
      back: 'Pour Kant, la seule chose bonne sans restriction est la bonne volonté. Les qualités comme l\'intelligence, le courage ou la richesse peuvent être mauvaises si la volonté est mauvaise. La bonne volonté est vouloir le devoir par devoir, agir selon la loi morale qu\'on se donne à soi-même.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le bien suprème chez Aristote ?',
      back: 'Pour Aristote, toute action humaine vise une fin, et les fins visent des biens. Il doit y avoir un bien suprème, bien final, que nous poursuivons pour lui-même et non pour autre chose. Ce bien suprème est le bonheur (eudaimonia), défini comme activité de l\'âme conforme à la vertu. Le bonheur n\'est pas un état mais une vie accomplie.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Platon exprime sa conception du Bien ?',
      back: 'Le Bien est ce que toute âme poursuit (République, IVe siècle av. J.-C.)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Kant, la seule chose bonne sans restriction est la {{bonne volonté}}. Pour Aristote, le bien suprème est le {{bonheur}}.',
      back: 'bonne volonté | bonheur',
      difficulty: 1
    }
  ],

  // ===== TAGS =====
  tags: ['bien', 'morale', 'éthique', 'platon', 'aristote', 'kant', 'bonheur', 'vertu', 'devoir', 'utilitarisme', 'hédonisme']
};
