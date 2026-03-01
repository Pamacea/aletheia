/*
  Bonheur - Concept Data
  Eudémonisme, hédonisme, satisfaction, plénitude de vie
*/
export const concept = {
  id: 'bonheur',
  name: 'Bonheur',
  slug: 'bonheur',
  category: 'ethique',
  difficulty: 3,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: 'Le bonheur est un état durable de satisfaction, de plénitude et de joie de vivre. La philosophie distingue plusieurs conceptions : l\'hédonisme (bonheur comme maximisation du plaisir et minimisation de la douleur) ; l\'eudémonisme (bonheur comme réalisation de sa nature, accomplissement de soi) ; le bonheur comme désir (spinoza) ; le bonheur comme contentement (épicurien, ataraxie). Pour Aristote, le bonheur (eudaimonia) est fin ultime de l\'existence, activité de l\'âme conforme à la vertu. Pour Épicure, le bonheur est plaisir (hédonisme) modéré par la prudence. Pour Spinoza, le bonheur est connaissance de Dieu et de soi, joie active. Pour Kant, le bonheur n\'est pas la moralité mais accord du bonheur avec la vertu possible dans le souverain bien. La question du bonheur se pose : est-il accessible à tous ? Est-il stable ou fragile ? Dépend-il de circonstances extérieures ou d\'une attitude intérieure ?',
  shortDefinition: 'État durable de satisfaction et de plénitude, but ultime de l\'existence humaine',

  etymology: {
    latin: 'felicitas, beatitudo',
    greek: 'eudaimonia (εὐδαιμονία)',
    root: 'eu- (bon) + daimon (génie) : avoir bon démon',
    notes: 'Eudaimonia n\'est pas sentiment passager mais état de vie réussie. Bonheur latin vient de bonus (bon) + heure (chance).'
  },

  reasoning: {
    // Perspectives par école philosophique
    perspectives: [
      {
        school: 'Hédonisme',
        philosopher: 'Épicure',
        thesis: 'Le bonheur est maximisation du plaisir et minimisation de la douleur',
        argument: 'Le plaisir est le seul bien, la douleur le seul mal. Le bonheur est ataraxie (absence de trouble dans l\'âme) et aponie (absence de douleur dans le corps). Mais pas tous les plaisirs : il faut distinguer plaisirs naturels/nécessaires (faciles à satisfaire) et désirs vains (source d\'inquiétude). Le bonheur épicurien est contentement de peu, vie modérée, amitié.',
        conclusion: 'Le bonheur comme absence de trouble et satisfaction des désirs naturels'
      },
      {
        school: 'Eudémonisme',
        philosopher: 'Aristote',
        thesis: 'Le bonheur est activité de l\'âme conforme à la vertu',
        argument: 'Le bonheur (eudaimonia) est fin ultime de l\'existence, activité de l\'âme conforme à la vertu parfaite. Pas sentiment passager mais vie réussie, accomplissement. La vertu est nécessaire mais pas suffisante : il faut aussi des biens extérieurs (santé, amis, richesse modérée). Le bonheur est activité, pas état passif.',
        conclusion: 'Le bonheur comme vie vertueuse accomplie et réalisation de sa nature humaine'
      },
      {
        school: 'Utilitarisme',
        philosopher: 'John Stuart Mill',
        thesis: 'Le bonheur est maximisation du bonheur général, pas seulement individuel',
        argument: 'Le plus grand bonheur du plus grand nombre. Mais Mill améliore Bentham : distinction entre plaisirs supérieurs (intellectuels, moraux) et inférieurs (sensuels). "Mieux vaut être un être humain insatisfait qu\'un porc satisfait". La qualité du plaisir compte autant que la quantité. Le bonheur individuel est lié au bonheur collectif.',
        conclusion: 'Le bonheur comme utilité sociale avec hiérarchie qualitative des plaisirs'
      }
    ],
    principalArguments: [
      {
        argument: 'Argument téléologique (Aristote)',
        explanation: 'Tout être humain cherche une fin ultime. Cette fin ne peut être qu\'elle-même, pas un moyen. Le bonheur est cette fin ultime car on le cherche pour lui-même. Il est activité de l\'âme conforme à la vertu parfaite.',
        premises: ['Toute action vise une fin', 'Il doit y avoir une fin ultime, sinon régression infinie', 'Cette fin ultime est le bonheur', 'Le bonheur est activité conforme à la vertu'],
        conclusion: 'Le bonheur est fin ultime, vie vertueuse accomplie'
      },
      {
        argument: 'Argument hédoniste (Épicure, Mill)',
        explanation: 'Le plaisir est le seul bien, la douleur le seul mal. Le bonheur est maximisation du plaisir, minimisation de la douleur. "Le plaisir est le commencement et la fin de la vie heureuse".',
        premises: ['Le plaisir est désiré pour lui-même', 'Tout ce qui est désiré est soit plaisir, soit moyen pour le plaisir', 'Le bonheur est satisfaction des désirs', 'Donc bonheur = maximiser le plaisir'],
        conclusion: 'Le bonheur est calcul hédoniste : plaisirs moins douleurs'
      },
      {
        argument: 'Argument de la suffisance (Spinoza)',
        explanation: 'Le bonheur n\'est pas absence de douleur mais joie active venant de compréhension. Plus je comprends mes affects (passions), plus je les maîtrise, plus je suis heureux. La béatitude est connaissance de soi et de Dieu.',
        premises: ['Nous sommes passifs quand nous ignorons les causes', 'La connaissance augmente notre puissance d\agir', 'La joie est passage à une plus grande perfection', 'La compréhension est source de joie active'],
        conclusion: 'Le bonheur est connaissance et joie active, pas seulement plaisir'
      }
    ],
    objections: [
      {
        objection: 'Critique de l\'hédonisme (Kant)',
        content: 'Le bonheur ne peut être principe de morale car trop éphémère, incertain, ambigu. Le plaisir n\'est pas un guide moral fiable. La morale doit être fondée sur le devoir, pas le bonheur.',
        response: 'L\'hédonisme récent (Mill) distingue plaisirs supérieurs (intellectuels) et inférieurs (sensuels). La qualité compte autant que la quantité.'
      },
      {
        objection: 'Critique de l\'eudémonisme',
        content: 'Le bonheur comme vertu est inaccessible à tous. Les inégalités de fortune, de santé, de chance rendent la vie vertueuse impossible pour beaucoup.',
        response: 'Aristote admet que le bonheur complet demande certaines conditions extérieures, mais tout le monde peut aspirer au bonheur relatif par la vertu.'
      },
      {
        objection: 'Critique existentielle (Camus)',
        content: 'Le bonheur est impossible dans un monde absurde. La vie n\'a pas de sens, le bonheur est illusion. Il faut vivre avec lucidité, pas chercher le bonheur.',
        response: 'Camus lui-même dit "Il faut imaginer Sisyphe heureux". Le bonheur n\'est peut-être pas dans le sens mais dans l\'acceptation joyeuse de l\'absurde.'
      }
    ],
    distinctions: [
      {
        distinction: 'Bonheur vs Plaisir',
        explanation: 'Le plaisir est momentané, lié à la satisfaction d\'un désir. Le bonheur est état durable, satisfaction globale de la vie. On peut éprouver du plaisir sans être heureux, être heureux sans plaisir immédiat.'
      },
      {
        distinction: 'Hédonisme vs Eudémonisme',
        explanation: 'L\'hédonisme définit le bonheur comme maximisation du plaisir (quantitatif). L\'eudémonisme le définit comme réalisation de soi (qualitatif, accomplissement).'
      },
      {
        distinction: 'Bonheur subjectif vs Bonheur objectif',
        explanation: 'Le bonheur subjectif est sentiment ressenti. Le bonheur objectif est vie réussie (vertu, accomplissement), même si on ne se sent pas "heureux".'
      },
      {
        distinction: 'Bonheur vs Sens',
        explanation: 'Le bonheur est état de satisfaction. Le sens est orientation vers quelque chose qui dépasse. On peut avoir du sens sans être heureux, être heureux sans chercher du sens.'
      }
    ]
  },

  relatedConcepts: [
    { concept: 'plaisir', relationship: 'Le plaisir est composante du bonheur (hédonisme) mais distinct (bonheur plus stable).', bidirectional: true },
    { concept: 'vertu', relationship: 'Pour Aristote, le bonheur est activité conforme à la vertu. Vertu et bonheur sont liés.', bidirectional: true },
    { concept: 'desir', relationship: 'Le bonheur peut être satisfaction des désirs (hédonisme) ou maîtrise des désirs (stoïcisme, ataraxie).', bidirectional: true },
    { concept: 'bien', relationship: 'Le bonheur est le souverain bien, fin ultime de toute action humaine.', bidirectional: true },
    { concept: 'souffrance', relationship: 'La question du bonheur face à la souffrance. Comment être heureux quand on souffre ?', bidirectional: true }
  ],

  relatedMovements: [
    { movement: 'Hédonisme', description: 'Bonheur comme maximisation du plaisir', keyFigures: ['Épicure', 'Mill', 'Bentham'] },
    { movement: 'Eudémonisme', description: 'Bonheur comme accomplissement de soi', keyFigures: ['Aristote', 'Stoïciens'] },
    { movement: 'Stoïcisme', description: 'Bonheur comme ataraxie (absence de trouble)', keyFigures: ['Épictète', 'Marc Aurèle', 'Sénèque'] },
    { movement: 'Utilitarisme', description: 'Bonheur comme maximisation du bonheur général', keyFigures: ['Bentham', 'Mill', 'Sidgwick'] },
    { movement: 'Christianisme', description: 'Bonheur comme béatitude, communion avec Dieu', keyFigures: ['Saint Augustin', 'Saint Thomas d\'Aquin'] }
  ],

  philosophicalAnalysis: {
    history: 'Antiquité grecque : eudémonisme (Aristote), hédonisme (Épicure), ataraxie (stoïciens). Moyen Âge : bonheur comme béatitude divine. Moderne : utilitarisme (bonheur du plus grand nombre). Contemporain : psychologie positive, économie du bonheur.',
    problems: [
      { problem: 'Mesure du bonheur', description: 'Comment mesurer le bonheur ? Sondages ? Indicateurs objectifs ? Subjectif ?' },
      { problem: 'Universalité', description: 'Le bonheur est-il le même pour tous ? Relatif à chaque culture/personne ?' },
      { problem: 'Stabilité', description: 'Le bonheur peut-il être durable ou toujours éphémère ?' }
    ],
    debates: [
      {
        issue: 'Le bonheur est-il dans le plaisir ou la vertu ?',
        positions: [
          'Plaisir (Épicure, hédonistes) : bonheur = maximiser plaisirs, minimiser douleurs',
          'Vertu (Aristote) : bonheur = activité conforme à la vertu, accomplissement de soi',
          'Les deux (Mill) : distinction plaisirs supérieurs/inférieurs, qualité autant que quantité'
        ]
      },
      {
        issue: 'Le bonheur dépend-il des circonstances ?',
        positions: [
          'Oui (empiristes) : richesse, santé, chance sont nécessaires au bonheur',
          'Non (stoïciens) : le bonheur est attitude intérieure, indépendante des circonstances',
          'Mixte : certaines conditions favorisent le bonheur mais ne le garantissent pas'
        ]
      }
    ]
  },

  variations: [
    {
      title: 'Eudaimonia (Aristote)',
      description: 'Le bonheur (eudaimonia) est fin ultime, activité de l\'âme conforme à la vertu parfaite. Pas sentiment passager mais vie réussie. " L\'homme heureux est celui qui réalise sa fonction propre ". La vertu est nécessaire mais pas suffisante : il faut aussi des biens extérieurs (santé, amis). Le bonheur est activité, pas état passif.'
    },
    {
      title: 'Ataraxie (Épicure, Stoïciens)',
      description: 'Le bonheur est absence de trouble (ataraxie) et absence de douleur (aponie). Épicure : plaisirs simples, modérés, supprimer les désirs vains. Stoïciens : accepter ce qui ne dépend pas de nous, se concentrer sur ce qui dépend de nous (jugement). Le bonheur est tranquillité de l\'âme.'
    },
    {
      title: 'Utilitarisme (Bentham, Mill)',
      description: 'Le bonheur est maximisation du plaisir. " Le plus grand bonheur du plus grand nombre ". Bentham : calcul fécond (intensité x durée x certitude x proximité x fécondité x pureté x étendue). Mill : distinction plaisirs supérieurs/inférieurs, qualité autant que quantité. Base morale et politique.'
    },
    {
      title: 'Béatitude (Christianisme)',
      description: 'Le bonheur véritable n\'est pas terrestre mais céleste. La béatitude est vision de Dieu, communion éternelle. Le bonheur terrestre est imparfait, mixte de joie et souffrance. " Tu nous a faits pour toi, Seigneur, et notre cœur est sans repos jusqu\'à ce qu\'il repose en toi " (Augustin).'
    },
    {
      title: 'Joie active (Spinoza)',
      description: 'Le bonheur est joie venant de la compréhension. Plus je comprends ma nature et celle de Dieu, plus je suis libre, plus j\'éprouve de joie active. La béatitude est " joie de comprendre ". Sortir de la servitude des passions (connaître) pour atteindre la liberté (joie).'
    }
  ],

  keyFigures: [
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Eudémonisme : bonheur comme activité vertueuse' },
    { name: 'Épicure', period: '341-270 av. J.-C.', contribution: 'Hédonisme modéré : ataraxie, plaisirs simples' },
    { name: 'Jeremy Bentham', period: '1748-1832', contribution: 'Utilitarisme : calcul fécond du bonheur' },
    { name: 'John Stuart Mill', period: '1806-1873', contribution: 'Distinction plaisirs supérieurs/inférieurs' },
    { name: 'Baruch Spinoza', period: '1632-1677', contribution: 'Bonheur comme joie de la compréhension' },
    { name: 'Emmanuel Levinas', period: '1906-1995', contribution: 'Bonheur comme responsabilité pour l\'autre' }
  ],

  examples: [
    'Le jardin d\'Épicure : "Quand nous disons que le plaisir est fin ultime, nous ne parlons pas des plaisirs des débauchés... mais de l\'absence de douleur dans le corps et de trouble dans l\'âme".',
    'Le chose (Bouddha) : Les quatre vérités : 1) Tout est souffrance, 2) La cause est le désir, 3) La fin de la souffrance est extinction du désir, 4) Le chemin est l\'octuple sentier. Le bonheur (nirvana) est détachement, non accumulation.',
    'Le faux bonheur (Kafka) : "Le bonheur est un piège. Dès qu\'on le croit atteint, on s\'aperçoit qu\'on était en train de le perdre".',
    'L\'économie du bonheur : Les pays scandinaves (Danemark, Norvège) sont régulièrement classés les plus heureux malgré climat rude. Le lien PIB/bonheur est faible au-delà d\'un certain seuil. Relations, santé, sens comptent plus que richesse.'
  ],

  sources: [
    {
      title: 'Éthique à Nicomaque',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Eudémonisme : bonheur comme activité vertueuse',
      quotes: [
        'Le bonheur est la fin de toutes nos actions',
        'Le bonheur est activité de l\'âme conforme à la vertu',
        'Un jour ne fait pas le bonheur, ni une heure',
        'L\'homme heureux vit bien et agit bien'
      ]
    },
    {
      title: 'Lettre à Ménécée',
      author: 'Épicure',
      year: 'IIIe siècle av. J.-C.',
      type: 'ESSAY' as const,
      reference: 'Hédonisme modéré et ataraxie',
      quotes: [
        'Le plaisir est commencement et fin de la vie heureuse',
        'L\'absence de douleur dans le corps et de trouble dans l\'âme',
        'Les plaisirs les plus grands sont les plus simples',
        'Vivre en peu de besoins est richesse assurée'
      ]
    },
    {
      title: 'Principes de morale et de législation',
      author: 'Jeremy Bentham',
      year: 1789,
      type: 'BOOK' as const,
      reference: 'Utilitarisme et calcul fécond',
      quotes: [
        'Le plus grand bonheur du plus grand nombre',
        'Chacun compte pour un, personne pour plus d\'un',
        'La nature a placé l\'humanité sous l\'empire de deux maîtres : la peine et le plaisir'
      ]
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle différence entre hédonisme et eudémonisme ?',
      back: 'L\'hédonisme définit le bonheur comme maximisation du plaisir et minimisation de la douleur (approche quantitative). L\'eudémonisme (Aristote) définit le bonheur comme accomplissement de soi, activité conforme à la vertu (approche qualitative). Pour le premier, le bonheur est somme de plaisirs ; pour le second, c\'est vie réussie, réalisation de sa nature.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que l\'ataraxie chez Épicure ?',
      back: 'L\'ataraxie est absence de trouble dans l\'âme, accompagnée de l\'aponie (absence de douleur dans le corps). C\'est le bonheur épicurien : pas accumulation de plaisirs mais suppression des désirs vains, tranquillité. Épicure distingue désirs naturels/nécessaires (faciles à satisfaire) et désirs vains (source d\'inquiétude). Le bonheur est contentement de peu.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Mill améliore-t-il l\'utilitarisme de Bentham ?',
      back: 'Bentham définit le bonheur comme pure quantité de plaisir, tous plaisirs égaux. Mill ajoute la qualité : "Mieux vaut être un être humain insatisfait qu\'un porc satisfait".',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation d\'Aristote résume l\'eudémonisme ?',
      back: '"Le bonheur est activité de l\'âme conforme à la vertu".',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Épicure, le bonheur est {{absence de douleur}} dans le corps et {{absence de trouble}} dans l\'âme.',
      back: 'absence de douleur | absence de trouble',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le bonheur dépend-il de la richesse ?',
      back: 'Cette question divise. Épicure : non, le bonheur est contentement de peu. Aristote : partiellement, certains biens extérieurs (santé, amis) sont nécessaires mais pas suffisants. Études contemporaines : au-delà d\'un seuil (pouvoir satisfaire besoins de base), le lien richesse/bonheur s\'affaiblit. Les pays scandinaves sont les plus heureux malgré niveau de vie modeste. La richesse ne garantit pas le bonheur mais la pauvreté extrême l\'empêche. Plutôt que richesse, relations, santé, sens, liberté comptent plus. Le bonheur dépend moins de ce qu\'on a que de ce qu\'on est et de ce qu\'on fait. Il y a une différence entre avoir (richesse) et être (bonheur). Pourtant, la pauvreté extrême crée souffrance qui empêche le bonheur. La réponse est donc nuancée : la richesse n\'est pas suffisante au bonheur mais elle peut être nécessaire pour certains. Le bonheur dépend surtout d\'attitude intérieure et de relations, pas seulement de possessions.',
      difficulty: 5
    }
  ],

  tags: ['bonheur', 'hédonisme', 'eudémonisme', 'plaisir', 'vertu', 'ataraxie', 'utilitarisme', 'bien', 'désir', 'souffrance', 'épicure', 'aristote', 'mill', 'bentham', 'spinoza']
};
