/*
  Plaisir - Concept Data
  Sentement de satisfaction accompagnant la satisfaction dun désir
*/
export const concept = {
  id: 'plaisir',
  name: 'Plaisir',
  slug: 'plaisir',
  category: 'ethique',

  difficulty: 3,
  importance: 4,
  status: 'COMPLETE' as const,

  definition: 'Le plaisir est sentiment de satisfaction accompagnant la satisfaction d\'un désir ou besoin. La philosophie distingue plusieurs types : plaisir physique (sensuel), plaisir intellectuel (connaissance), plaisir moral (vertu), plaisir esthétique (beau). Pour Épicure, le plaisir est le souverain bien, mais pas plaisir grossier : plaisir de l\'absence de trouble (ataraxie), plaisir en repos, pas en mouvement. Pour Aristote, le plaisir n\'est pas le bien suprême mais accompagne l\'activité vertueuse. Pour Kant, le plaisir est sentiment subjectif, pas critère de vérité ou de moralité. Le plaisir peut être passif (subir une sensation) ou actif (jouir d\'une activité). La question du plaisir est centrale en éthique : faut-il poursuivre le plaisir (hédonisme) ou le dépasser (stoïcisme) ? Le plaisir peut être égoïste ou partagé, immédiat ou différé.',
  shortDefinition: 'Sentiment de satisfaction accompagnant la satisfaction d\'un désir',

  etymology: {
    latin: 'placere',
    greek: 'hedone (ἡδονή)',
    root: 'plaire : être agréable, satisfaire',
    notes: 'Hedone est la racine d\'hédonisme, doctrine qui fait du plaisir le bien'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument hédoniste (Épicure)',
        explanation: 'Le plaisir est le bien car nous poursuivons tous le plaisir et fuyons la douleur. Mais le vrai plaisir est absence de trouble (ataraxie), pas plaisir des sens.',
        premises: ['Nous cherchons tous le plaisir', 'Le plaisir est le seul bien désiré pour lui-même', 'La douleur est le seul mal', 'Donc le plaisir est le souverain bien'],
        conclusion: 'Le plaisir est le bien suprême, mais compris comme absence de trouble'
      },
      {
        argument: 'Argument aristotélicien',
        explanation: 'Le plaisir n\'est pas le bien mais accomplit l\'activité. Le plaisir de l\'activité vertueuse couronne une vie réussie.',
        premises: ['Le plaisir accomplit l\'activité', 'L\'activité vertueuse est le bien', 'Le plaisir de cette activité est plaisir supérieur', 'Donc le plaisir n\'est pas fin mais accompagnement'],
        conclusion: 'Le plaisir n\'est pas le bien mais couronne de l\'activité bonne'
      }
    ],
    objections: [
      {
        objection: 'Objection stoïcienne',
        content: 'Le plaisir n\'est pas un bien. Il est indifférent. La vertu seule est bien. Poursuivre le plaisir, c\'est être esclave de ses passions.',
        response: 'Épicure répond que le plaisir n\'est pas licence mais modération. Le plaisir suprême est ataraxie (absence de trouble), pas débordement des sens.'
      },
      {
        objection: 'Objection kantienne',
        content: 'Le plaisir est subjectif, pas critère de vérité ou de moralité. Le devoir prime sur le plaisir.',
        response: 'Kant a raison pour la moralité : le devoir ne se calcule pas au plaisir. Mais cela ne supprime pas la valeur du plaisir comme accompagnement de la vie bonne.'
      }
    ],
    distinctions: [
      {
        distinction: 'Plaisir vs Douleur',
        explanation: 'Le plaisir est satisfaction, la douleur est souffrance. Les deux sont liés : fuite de la douleur, recherche du plaisir.'
      },
      {
        distinction: 'Plaisir en mouvement vs Plaisir en repos',
        explanation: 'Plaisir en mouvement : satisfaction active (manger, boire). Plaisir en repos : absence de trouble, contentement (Épicure).'
      },
      {
        distinction: 'Plaisir des sens vs Plaisir de l\'esprit',
        explanation: 'Plaisir des sens : physique, immédiat. Plaisir de l\'esprit : intellectuel, moral, esthétique, supérieur selon Aristote.'
      }
    ]
  },

  relatedConcepts: [
    { concept: 'desir', relationship: 'Le plaisir satisfait le désir.', bidirectional: true },
    { concept: 'douleur', relationship: 'La douleur est opposée au plaisir.', bidirectional: true },
    { concept: 'bonheur', relationship: 'Le plaisir contribue au bonheur mais ne le constitue pas entièrement.', bidirectional: true },
    { concept: 'vertu', relationship: 'Le plaisir peut accompagner ou s\'opposer à la vertu.', bidirectional: true },
    { concept: 'mal', relationship: 'Le plaisir peut devenir mauvais lorsqu\'il mène à l\'excès, à la débauche ou à la négligence des devoirs.', bidirectional: true },
    { concept: 'sens', relationship: 'Le plaisir est souvent lié aux sens : plaisir physique, sensuel, mais aussi plaisir spirituel par les sens moraux.', bidirectional: true },
    { concept: 'bien', relationship: 'Le plaisir est-il un bien ? Hédonistes : oui. Stoïciens : non, seul la vertu est bien. Aristote : le plaisir accompagne le bien mais n\'en est pas.', bidirectional: true }
  ],

  relatedMovements: [
    { name: 'Hédonisme', description: 'Le plaisir comme bien suprême.', role: 'CONCEPT_CENTRAL', keyFigures: ['Épicure', 'Mill'] },
    { name: 'Stoïcisme', description: 'Le plaisir comme indifférent.', role: 'CRITICAL', keyFigures: ['Épictète', 'Marc Aurèle'] }
  ],

  philosophicalAnalysis: {
    history: 'Les hédonistes (Épicure) font du plaisir le bien. Les stoïciens le rejettent comme indifférent. Aristote voit le plaisir comme couronnement de l\'activité vertueuse. Kant distingue plaisir (subjectif) et devoir (objectif).'
  },

  variations: [
    { title: 'Plaisir épicurien', description: 'Le plaisir comme absence de trouble (ataraxie), pas excès des sens.' },
    { title: 'Plaisir aristotélicien', description: 'Le plaisir accomplit l\'activité, plaisir de l\'activité vertueuse.' }
  ],

  keyFigures: [
    { name: 'Épicure', period: '341-270 av. J.-C.', contribution: 'Hédonisme : le plaisir comme souverain bien' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Le plaisir comme couronnement de l\'activité' },
    { name: 'Jeremy Bentham', period: '1748-1832', contribution: 'Utilitarisme : calcul des plaisirs' }
  ],

  examples: [
    'Le repas festif : plaisir des sens, mais aussi plaisir social.',
    'La contemplation philosophique : plaisir intellectuel supérieur selon Aristote.',
    'L\'ataraxie d\'Épicure : plaisir en repos, absence de trouble.'
  ],

  sources: [
    {
      title: 'Lettre à Ménécée',
      author: 'Épicure',
      year: 'IIIe siècle av. J.-C.',
      type: 'ESSAY' as const,
      reference: 'Hédonisme épicurien',
      quotes: ['Le plaisir est le commencement et la fin de la vie heureuse.', 'L\'absence de trouble est plaisir suprême.']
    },
    {
      title: 'Éthique à Nicomaque',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Le plaisir comme couronnement',
      quotes: ['Le plaisir accomplit l\'activité.', 'Le plaisir de l\'activité vertueuse est plaisir supérieur.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Épicure définit-il le plaisir ?',
      back: 'Pour Épicure, le plaisir est le souverain bien, mais pas plaisir grossier des sens. Le vrai plaisir est ataraxie : absence de trouble du corps et de l\'âme. Plaisir en repos, pas en mouvement. La modération, pas l\'excès.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre plaisir en mouvement et plaisir en repos ?',
      back: 'Le plaisir en mouvement est satisfaction active (manger quand on a faim). Le plaisir en repos est absence de trouble, contentement (ne plus avoir faim). Pour Épicure, le plaisir suprême est en repos : ataraxie, tranquillité de l\'âme.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation d\'Épicure résume l\'hédonisme ?',
      back: '"Le plaisir est le commencement et la fin de la vie heureuse',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le plaisir est-il le souverain bien ?',
      back: 'Épicure : oui, mais compris comme ataraxie (absence de trouble). Stoïcisme : non, la vertu seule est bien, le plaisir est indifférent. Aristote : le plaisir n\'est pas le bien mais accomplit l\'activité bonne. Kant : le plaisir est subjectif, pas critère moral. La question divise éthique hédoniste et éthique du devoir. Pour les utilitaristes (Mill), le plaisir est critère du bien moral (maximiser le plaisir). Pour Kant, le devoir prime sur le plaisir. La vérité est peut-être entre les deux : le plaisir n\'est pas le bien mais peut accompagner une vie bonne. Une vie sans plaisir est-elle vraiment bonne ? Une vie de plaisir sans vertu est-elle vraiment heureuse ?',
      difficulty: 5
    }
  ],

  tags: ['plaisir', 'hédonisme', 'épicure', 'douleur', 'bonheur', 'vertu', 'désir', 'ataraxie', 'éthique']
};
