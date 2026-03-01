/*
  Beauté - Concept Data
  Qualité de ce qui plaît universellement sans concept
*/
export const concept = {
  // ===== IDENTITÉ =====
  id: 'beaute',
  name: 'Beauté',
  slug: 'beaute',
  category: 'esthetique',

  // ===== MÉTADONNÉES =====
  difficulty: 3,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'La beauté est la qualité de ce qui plaît universellement dans la représentation sans concept. La philosophie distingue plusieurs approches : le beau comme harmonie, proportion (Platon, classicisme) ; le beau comme ce qui plaît universellement sans concept (Kant) ; le beau comme expression de l\'idée (Hegel) ; le beau comme forme (formalisme). Pour Kant, le jugement de beauté est désintéressé : il ne dépend ni de l\'intérêt ni du concept, mais du sentiment de plaisir universel communicable. Le beau se distingue de l\'agréable (qui plaît subjectivement avec intérêt) et du bon (qui plaît avec concept moral). La beauté peut être libre (beauté naturelle, sans concept) ou adhérente (beauté de l\'art, avec concept de fin). Le sublime s\'en distingue : le beau est forme finie, le sublime est dépassement du forme. L\'art contemporain questionne la beauté : l\'art doit-il être beau ? Le laid peut-il être beau ?',
  shortDefinition: 'Qualité de ce qui plaît universellement sans concept, désintéressé',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'pulchritudo',
    greek: 'kalon (καλόν)',
    root: 'beauté : ce qui plaît, ce qui est parfait',
    notes: 'Le kalon grec désigne à la fois la beauté physique et la beauté morale (le beau, le bien)'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du jugement de goût (Kant)',
        explanation: 'Le beau est ce qui plaît universellement sans concept. Le jugement de beauté prétend à l\'universalité (tout le monde devrait être d\'accord) mais sans s\'appuyer sur des concepts prouvables. C\'est un "universalité subjective" : je dis "c\'est beau".',
        premises: [
          'Le beau plaît universellement',
          'Cette universalité ne repose pas sur des concepts (pas de preuves logiques)',
          'Le beau plaît sans intérêt (désintéressement)',
          'Le beau est forme finaleité sans fin (forme qui semble organisée pour une fin)'
        ],
        conclusion: 'Le beau est représentation qui plaît universellement sans concept, dans un libre jeu de facultés'
      },
      {
        argument: 'Argument de l\'harmonie (Platon)',
        explanation: 'Le beau est harmonie, proportion, ordre. La beauté est participation au Beau en soi, Idée suprême. Les belles choses participent plus ou moins parfaitement à cette Idée.',
        premises: [
          'Il y a un Beau en soi, Idée éternelle',
          'Les belles choses participent à cette Idée',
          'La participation est plus ou moins parfaite',
          'Le beau sensible est reflet du Beau intelligible'
        ],
        conclusion: 'La beauté est harmonie qui participe à l\'Idée du Beau'
      },
      {
        argument: 'Argument de la forme (formalisme)',
        explanation: 'La beauté est forme, organisation, structure. Le contenu (sujet moral, message) n\'est pas pertinent pour la beauté. Une œuvre peut être belle formellement même si son contenu est trivial ou immoral.',
        premises: [
          'La beauté dépend de la forme, pas du contenu',
          'La forme est organisation, structure, proportion',
          'Le jugement esthétique porte sur la forme',
          'Le beau est significativité de la forme'
        ],
        conclusion: 'La beauté est forme réussie, organisation harmonieuse des éléments'
      }
    ],
    objections: [
      {
        objection: 'Objection du relativisme',
        content: 'La beauté est subjective : "des goûts et des couleurs, on ne discute pas".',
        response: 'Kant répond que le jugement de beauté prétend à l\'universalité même si elle est subjective. Quand je dis "c\'est beau", je m\'attends à ce que tout le monde soit d\'accord. Le désaccord ne prouve pas le relativisme mais l\'erreur de l\'autre.'
      },
      {
        objection: 'Objection expressionniste',
        content: 'La beauté n\'est pas dans la forme mais dans l\'expression. Une œuvre peut être laide formellement mais belle par son intensité expressive. L\'émotion, l\'authenticité comptent plus que l\'harmonie.',
        response: 'C\'est vrai pour l\'art moderne, qui privilégie l\'expression sur la forme. Mais cela montre que le concept de beauté s\'est élargi, pas qu\'il n\'existe pas.'
      },
      {
        objection: 'Objection de l\'art contemporain',
        content: 'L\'art contemporain rejette souvent la beauté : le ready-made, le conceptuel, le performatif ne cherchent pas le beau. La beauté n\'est plus le but de l\'art.',
        response: 'L\'art contemporain questionne la beauté mais ne l\'abolit pas. Il montre que la beauté n\'est pas le seul critère esthétique, mais elle reste une valeur possible.'
      }
    ],
    distinctions: [
      {
        distinction: 'Beau vs Agréable',
        explanation: 'L\'agréable plaît subjectivement avec intérêt (les sens, le plaisir). Le beau plaît universellement sans intérêt (désintéressement). L\'agréable est empirique, le beau est esthétique.'
      },
      {
        distinction: 'Beau vs Bon',
        explanation: 'Le bon plaît avec concept moral (le bien). Le beau plaît sans concept moral (le beau). Le bon concerne la moralité, le beau concerne l\'esthétique.'
      },
      {
        distinction: 'Beau vs Sublime',
        explanation: 'Le beau est forme finie, harmonie, qui plaît. Le sublime est dépassement de la forme, illimité, qui plaît et déplaît simultanément (mixed emotion).'
      },
      {
        distinction: 'Beauté libre vs Beauté adhérente',
        explanation: 'La beauté libre est beauté sans concept (beauté naturelle). La beauté adhérente est beauté avec concept de fin (beauté de l\'art, architecture).'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    { concept: 'sublime',
      relationship: 'Le sublime dépasse la forme, le beau est forme finie.', bidirectional: true },
    { concept: 'art',
      relationship: 'L\'art est création de beauté ou expression.', bidirectional: true },
    { concept: 'goût',
      relationship: 'Le goût est faculté de juger le beau.', bidirectional: true },
    { concept: 'formalisme',
      relationship: 'Le formalisme définit la beauté comme forme.', bidirectional: true },
    { concept: 'expression',
      relationship: 'L\'expressionnisme privilégie l\'expression sur la beauté formelle.', bidirectional: true },
    { concept: 'verite',
      relationship: 'ALLIED',
      explanation: 'Pour Platon, le beau et le vrai sont alliés : le Beau est aussi vrai que le Vrai est beau. L\'expérience du beau est expérience de vérité.',
      bidirectional: true,
      category: 'epistemologie' },
    { concept: 'bien',
      relationship: 'CONVERGES',
      explanation: 'Pour Platon, le Beau et le Bien convergent dans l\'Idée suprême. La beauté est excellence morale autant qu\'esthétique. Le beau est bien moral.',
      bidirectional: true,
      category: 'ethique' },
    { concept: 'vertu',
      relationship: 'EXPRESSES',
      explanation: 'Le kalon grec désigne à la fois la beauté et la noblesse morale. La beauté extérieure reflète la vertu intérieure. La beauté du corps exprime la beauté de l\'âme.',
      bidirectional: true,
      category: 'ethique' },
    { concept: 'amour',
      relationship: 'AWAKENS',
      explanation: 'Pour Platon, l\'amour du beau est commencement de la philosophie. L\'amour des beaux corps élève vers les beautés supérieures jusqu\'au Beau lui-même.',
      bidirectional: true,
      category: 'ethique' }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    { name: 'Kantisme', description: 'Le beau comme ce qui plaît universellement sans concept.', role: 'CONCEPT_CENTRAL', keyFigures: ['Kant'] },
    { name: 'Platonisme', description: 'Le beau comme participation à l\'Idée du Beau.', role: 'EXPRESSES', keyFigures: ['Platon'] },
    { name: 'Hégélianisme', description: 'Le beau comme expression de l\'idée.', role: 'EXPRESSES', keyFigures: ['Hegel'] },
    { name: 'Formalisme', description: 'La beauté comme forme.', role: 'EXPRESSES', keyFigures: ['Bell', 'Greenberg'] }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `Platon : le beau est participation au Beau en soi, Idée suprême. La beauté ascendante va des beaux corps aux belles âmes, aux sciences, jusqu'au Beau lui-même.

Aristote : la beauté est ordre, grandeur, proportion. L'esthétique est partie de la poétique.

Kant (1790) : la beauté est ce qui plaît universellement sans concept, dans le libre jeu de l'imagination et de l'entendement. Le jugement de goût est désintéressé.

Hegel : le beau est expression sensible de l'idée. L'art est manifestation de l'absolu sous forme sensible.

Le XIXe siècle voit l'émergence de l'esthétique comme discipline autonome.

Le XXe siècle questionne la beauté : l'art moderne privilégie l'expression, l'authenticité, l'originalité sur la beauté. L'art contemporain rejette parfois la beauté.`
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Beauté platonicienne',
      description: 'Le beau est participation à l\'Idée du Beau. Les belles choses participent plus ou moins parfaitement à cette Idée.',
      philosophicalContext: 'Cette conception influence toute l\'esthétique classique.'
    },
    {
      title: 'Beauté kantienne',
      description: 'Le beau est ce qui plaît universellement sans concept. Le jugement de goût est désintéressé, finalité sans fin.',
      philosophicalContext: 'Cette analyse fonde l\'esthétique moderne comme discipline autonome.'
    },
    {
      title: 'Beauté hégélienne',
      description: 'Le beau est expression sensible de l\'idée. L\'art est manifestation de l\'absolu.',
      philosophicalContext: 'Hegel intègre l\'art dans un système philosophique total.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Le Beau comme Idée suprême' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Le beau comme ce qui plaît universellement sans concept' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'Le beau comme expression de l\'idée' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'La beauté comme ordre et proportion' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'La rose (Kant) : la rose est belle naturellement, sans concept, sans fin. Elle plaît universellement, sans intérêt. C\'est le modèle de la beauté libre.',
    'Le nu artistique : le nu est beauté de la forme humaine, mais il peut aussi être obscène selon la présentation. La différence est dans le traitement formel.',
    'L\'architecture : un bâtiment beau est harmonie de proportions, mais aussi fonctionnalité (beauté adhérente avec concept de fin).'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Critique de la faculté de juger',
      author: 'Immanuel Kant',
      year: 1790,
      type: 'BOOK' as const,
      reference: 'Analyse du beau',
      quotes: [
        'Le beau est ce qui plaît universellement sans concept.',
        'Le jugement de goût est désintéressé.',
        'Le beau est finalité sans fin.',
        'Le goût est faculté de juger le beau.',
        'Le beau plaît dans le libre jeu des facultés.'
      ]
    },
    {
      title: 'Le Banquet',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'L\'ascension vers le Beau',
      quotes: [
        'Le Beau est ce qui est vraiment beau.',
        'L\'ascension vers le Beau commence par les beaux corps.',
        'Le Beau est éternel, immuable.',
        'Le philosophe est amant du Beau.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Kant définit-il la beauté ?',
      back: 'Pour Kant, la beauté est ce qui plaît universellement sans concept. Le jugement de beauté prétend à l\'universalité (tout le monde devrait être d\'accord) mais sans s\'appuyer sur des concepts prouvables. Le beau plaît de manière désintéressée (sans intérêt) et manifeste une finalité sans fin (forme qui semble organisée pour une fin mais n\'en a pas). Le jugement de goût repose sur le libre jeu de l\'imagination et de l\'entendement.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre le beau et l\'agréable ?',
      back: 'L\'agréable plaît subjectivement avec intérêt (les sens, le plaisir physique : bon gout, doux parfum). Le beau plaît universellement sans intérêt (désintéressement). L\'agréable dépend de mes sens, le beau prétend à l\'universalité. L\'agréable est empirique, le beau est esthétique. Quand je dis c\'est agréable, je parle de mon plaisir. Quand je dis c\'est beau, je parle de l\'objet.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre le beau et le sublime ?',
      back: 'Le beau est forme finie, harmonie, qui plaît purement. Le sublime est dépassement de la forme, illimité, qui plaît et déplaît simultanément (mixed emotion). Le beau concerne l\'ordre, la proportion, la limite. Le sublime concerne le sans-forme, l\'illimité, l\'excès. Le beau donne sentiment d\'harmonie. Le sublime donne sentiment de respect mêlé de crainte. Le beau est dans la forme, le sublime dans son dépassement.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Kant définit le beau ?',
      back: 'Le beau est ce qui plaît universellement sans concept (Critique de la faculté de juger, 1790)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Kant, le jugement de beauté est {{désintéressé}} et prétend à l\'{{universalité}}.',
      back: 'désintéressé | universalité',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'La beauté est-elle objective ou subjective ?',
      back: 'Kant propose une médiation : la beauté est subjective (sentiment de plaisir) mais prétend à l\'universalité (tout le monde devrait être d\'accord). Ce n\'est ni objectif (propriété de l\'objet) ni purement subjectif (goût arbitraire). Pour Platon, le beau est objectif : participation à l\'Idée du Beau. Pour Hume, la beauté est subjective mais corrélée (il y a des critères du goût). Pour les expressionnistes, la beauté n\'est pas le seul critère esthétique : l\'authenticité, l\'intensité expressive comptent plus. L\'art contemporain questionne la beauté : le laid peut-il être beau ? Le ready-made peut-il être beau ? La beauté reste une valeur esthétique majeure, mais n\'est plus le seul critère.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['beauté', 'esthétique', 'kant', 'platon', 'hegel', 'sublime', 'goût', 'art', 'jugement', 'forme']
};
