/*
  Sublime - Concept Data
  Ce qui est absolument grand et dépasse la mesure, le sans-forme
*/
export const concept = {
  // ===== IDENTITÉ =====
  id: 'sublime',
  name: 'Sublime',
  slug: 'sublime',
  category: 'esthetique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 4,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le sublime est ce qui est absolument grand, dépasse toute mesure, et produit un sentiment de respect mêlé de crainte. Le sublime s\'oppose au beau : le beau est forme finie qui plaît, le sublime est sans-forme (informe) ou dépassement de la forme, qui plaît et déplaît simultanément (mixed emotion). Kant distingue le sublime mathématique (l\'immensément grand, le ciel étoilé) et le sublime dynamique (l\'immensément puissant, l\'océan en tempête). Le sublime révèle notre destinée supra-sensible : nous sommes à la fois êtres sensibles (écrasés par l\'immensité) et êtres rationnels (capables de penser l\'illimité). Le sublime est finalité sans fin : la nature semble nous repousser mais en réalité elle élève notre âme au-dessus de la nature. Pour Burke, le sublime est terreur contenue, frayeur qui ne détruit pas. Pour Hegel, le sublime est art où l\'esprit domine la matière (art religieux).',
  shortDefinition: 'Ce qui est absolument grand et dépasse la forme, respect mêlé de crainte',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'sublimis',
    root: 'sub- (sous) + limen (seuil) : qui s\'élève, qui est élevé',
    notes: 'Le sublime désigne ce qui est élevé, ce qui élève l\'âme'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du sublime mathématique (Kant)',
        explanation: 'Face à l\'immensément grand (ciel étoilé, océan infini), l\'imagination échoue à totaliser. Mais la raison peut penser l\'infini. Ce désaccord révèle notre faculté de penser l\'illimité, notre destinée supra-sensible.',
        premises: [
          'L\'immensément grand dépasse notre capacité de représentation',
          'L\'imagination échoue à totaliser l\'illimité',
          'La raison peut penser l\'infini (comme idée)',
          'Ce désaccord révèle notre faculté de nous élever au-dessus de la nature'
        ],
        conclusion: 'Le sublime mathématique est sentiment de notre destinée supra-sensible, capacité à penser l\'illimité'
      },
      {
        argument: 'Argument du sublime dynamique (Kant)',
        explanation: 'Face à l\'immensément puissant (tempête, volcan), nous nous sentons physiquement écrasés. Mais moralement, nous pouvons nous résister, nous discovering notre liberté. La nature nous repousse mais nous élève.',
        premises: [
          'La puissance de la nature peut nous détruire physiquement',
          'Face à elle, nous nous sentons petits, vulnérables',
          'Mais nous pouvons nous en détacher moralement, résister',
          'Cette résistance révèle notre liberté, notre dignité morale'
        ],
        conclusion: 'Le sublime dynamique est sentiment de notre liberté face à la puissance de la nature'
      },
      {
        argument: 'Argument de la terreur contenue (Burke)',
        explanation: 'Le sublime est terreur qui ne détruit pas. Nous sommes effrayés mais pas en danger réel. Cette terreur contenue produit plaisir excitation.',
        premises: [
          'Le sublime suscite la terreur',
          'Mais cette terreur est à distance, contenue',
          'L\'émotion est forte mais sans danger',
          'Cette tension produit plaisir excitation'
        ],
        conclusion: 'Le sublime est terreur esthétique, frayeur contenue qui plaît'
      }
    ],
    objections: [
      {
        objection: 'Objection de l\'ambiguïté',
        content: 'Le sublime est ambigu : à la fois plaisir et déplaisir. Comment un sentiment mixte peut-il être esthétique ? Est-ce vraiment de l\'esthétique ou de la moralité ?',
        response: 'Kant répond que le plaisir du sublime n\'est pas sensible comme le beau, mais intellectuel : satisfaction de notre raison qui se découvre capable de penser l\'illimité. C\'est un \"plaisir négatif \": contentement de notre élévation.'
      },
      {
        objection: 'Objection de la trivialisation',
        content: 'Le sublime est devenu concept marketing, trivialisé. Tout est sublime aujourd\'hui. Le concept a perdu sa force.',
        response: 'C\'est vrai, mais le concept philosophique reste pertinent : il désigne une expérience spécifique de dépassement de la forme, de rencontre avec l\'illimité qui nous élève.'
      },
      {
        objection: 'Objection culturelle',
        content: 'Le sublime est eurocentrique, lié à une culture et une époque. D\'autres cultures ont d\'autres expériences esthétiques.',
        response: 'Le sublime comme analyse philosophique d\'une expérience peut s\'appliquer à d\'autres cultures, mais les expressions concrètes du sublime varient effectivement selon les contextes culturels.'
      }
    ],
    distinctions: [
      {
        distinction: 'Sublime vs Beau',
        explanation: 'Le beau est forme finie qui plaît purement. Le sublime est sans-forme ou dépassement de la forme, qui plaît et déplaît (mixed emotion). Le beau donne harmonie, le sublime donne tension.'
      },
      {
        distinction: 'Sublime mathématique vs Sublime dynamique',
        explanation: 'Le sublime mathématique concerne l\'immensément grand (taille). Le sublime dynamique concerne l\'immensément puissant (force). Tous deux révèlent notre destinée supra-sensible.'
      },
      {
        distinction: 'Sublime vs Terreur',
        explanation: 'Le sublime est terreur contenue, esthétique (à distance, sans danger réel). La terreur réelle détruit, le sublime élève.'
      },
      {
        distinction: 'Sublime naturel vs Sublime artistique',
        explanation: 'Le sublime naturel (océan, montagne, orage) est dans la nature. Le sublime artistique est représenté dans l\'art (peinture de tempête, architecture monumentale).'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    { concept: 'beauté',
      relationship: 'Le sublime dépasse la forme, le beau est forme.', bidirectional: true },
    { concept: 'art',
      relationship: 'L\'art peut représenter le sublime.', bidirectional: true },
    { concept: 'nature',
      relationship: 'Le sublime est souvent dans la nature.', bidirectional: true },
    { concept: 'raison',
      relationship: 'Le sublime révèle la puissance de la raison.', bidirectional: true },
    { concept: 'desir',
      relationship: 'Le désir du sublime : nous aspirons à être dépassés, à sentir notre petitesse devant l\'immensité qui nous élève.', bidirectional: true },
    { concept: 'transport',
      relationship: 'Le transport esthétique : le sublime nous transporte, nous arrache de nous-mêmes vers une expérience de l\'illimité.', bidirectional: false }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    { name: 'Kantisme', description: 'Le sublime comme révélation de notre destinée supra-sensible.', role: 'CONCEPT_CENTRAL', keyFigures: ['Kant'] },
    { name: 'Romantisme', description: 'Le sublime comme expérience privilégiée de l\'art.', role: 'EXPRESSES', keyFigures: ['Burke', 'Schiller'] }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  subAnalysis: {
    history: `Longinus (Ier siècle) écrit le Traité du sublime, analysant le sublime dans la littérature comme ce qui élève l'âme.

Burke (1757) publie Recherche philosophique sur l'origine de nos idées du sublime et du beau. Il oppose le sublime (terreur) et le beau (plaisir).

Kant (1764, 1790) développe une théorie systématique du sublime dans Observations sur le sentiment du beau et du sublime puis Critique de la faculté de juger. Il distingue sublime mathématique et dynamique.

Hegel analyse le sublime dans l'art : art religieux où l'esprit domine la matière.

Le romantisme privilégie le sublime comme expérience esthétique majeure : ruines, tempêtes, océans, montagnes.`
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Sublime mathématique (Kant)',
      description: 'Face à l\'immensément grand, l\'imagination échoue mais la raison pense l\'infini. Ce désaccord révèle notre destinée supra-sensible.',
      philosophicalContext: 'Le ciel étoilé, l\'océan infini sont exemples du sublime mathématique.'
    },
    {
      title: 'Sublime dynamique (Kant)',
      description: 'Face à l\'immensément puissant, nous sommes écrasés physiquement mais pouvons nous résister moralement. Cette résistance révèle notre liberté.',
      philosophicalContext: 'Les tempêtes, volcans, océans en tempête sont exemples du sublime dynamique.'
    },
    {
      title: 'Sublime comme terreur contenue (Burke)',
      description: 'Le sublime est terreur qui ne détruit pas, frayeur esthétique qui produit plaisir excitation.',
      philosophicalContext: 'Burke influence le romantisme, qui privilégie le sublime.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Théorie systématique du sublime' },
    { name: 'Edmund Burke', period: '1729-1797', contribution: 'Le sublime comme terreur contenue' },
    { name: 'Longinus', period: 'Ier siècle', contribution: 'Premier traité sur le sublime' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'Le sublime dans l\'art' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le ciel étoilé (Kant) : face à l\'immensité du ciel, je me sens infiniment petit, mais je peux penser l\'infini. C\'est le sublime mathématique.',
    'L\'océan en tempête : la puissance de l\'océan m\'écrase, mais je peux m\'en détacher moralement. C\'est le sublime dynamique.',
    'Les Alpes (romantisme) : les montagnes immenses, les glaciers, les avalanches sont expérience du sublime.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Critique de la faculté de juger',
      author: 'Immanuel Kant',
      year: 1790,
      type: 'BOOK' as const,
      reference: 'Analyse du sublime',
      quotes: [
        'Le sublime est ce qui est absolument grand.',
        'Le sublime plaît et déplaît simultanément.',
        'Le sublime révèle notre destinée supra-sensible.',
        'Le sentiment du sublime est respect mêlé de crainte.',
        'La nature nous repousse mais nous élève.'
      ]
    },
    {
      title: 'Recherche philosophique sur l\'origine de nos idées du sublime et du beau',
      author: 'Edmund Burke',
      year: 1757,
      type: 'BOOK' as const,
      reference: 'Le sublime comme terreur',
      quotes: [
        'Le sublime est terreur.',
        'La terreur est le plus fort des sentiments.',
        'Le sublime est terreur qui ne détruit pas.',
        'Le plaisir du sublime est excitation.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle est la différence entre le beau et le sublime ?',
      back: 'Le beau est forme finie qui plaît purement. Le sublime est sans-forme ou dépassement de la forme, qui plaît et déplaît simultanément (mixed emotion). Le beau donne harmonie, satisfaction. Le sublime donne tension, respect mêlé de crainte. Le beau est dans la forme, le sublime dans son dépassement. Le beau satisfait l\'imagination, le sublime la dépasse pour faire appel à la raison.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle distinction Kant fait-il entre sublime mathématique et sublime dynamique ?',
      back: 'Le sublime mathématique concerne l\'immensément grand (taille) : face à l\'illimité (ciel étoilé), l\'imagination échoue mais la raison pense l\'infini. Le sublime dynamique concerne l\'immensément puissant (force) : face à la puissance de la nature (tempête), je suis écrasé physiquement mais peux me résister moralement. Les deux révèlent notre destinée supra-sensible, notre capacité à nous élever au-dessus de la nature.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Kant définit le sublime ?',
      back: '"Le sublime est ce qui est absolument grand et dépasse toute mesure',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Burke, le sublime est {{terreur}} qui ne {{détruit}} pas.',
      back: 'terreur | détruit',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le sublime est-il une expérience esthétique ou morale ?',
      back: 'Kant montre que le sublime est les deux : expérience esthétique (plaisir) mais fondée sur sentiment moral (respect). Le plaisir du sublime n\'est pas sensible (comme le beau) mais intellectuel : satisfaction de notre raison qui se découvre capable de penser l\'illimité, de résister à la puissance de la nature. Le sublime révèle notre dignité morale, notre liberté. C\'est pourquoi il produit respect mêlé de crainte : crainte devant l\'immensité, respect pour notre capacité à la dépasser. Le sublime est donc expérience esthétique qui fonde sentiment moral, pont entre esthétique et moralité.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['sublime', 'beauté', 'esthétique', 'kant', 'burke', 'terreur', 'nature', 'art', 'romantisme', 'raison']
};
