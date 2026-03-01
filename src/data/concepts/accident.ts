/*
  Accident - Concept Data
  Ce qui arrive par hasard, sans intention apparente
*/
export const concept = {
  id: 'accident',
  name: 'Accident',
  slug: 'accident',
  category: 'metaphysique',

  difficulty: 3,
  importance: 3,
  status: 'COMPLETE' as const,

  definition: 'L\'accident est ce qui arrive par hasard, sans intention ni cause nécessaire. En métaphysique, l\'accident s\'oppose à la substance : la substance est ce qui est par soi, l\'accident est ce qui est dans un sujet (couleur, taille). En éthique, l\'accident est ce qui arrive sans qu\'on l\'ait voulu (malchance). La distinction accident/nécessité est centrale en philosophie : tout est-il nécessaire (déterminisme) ou y a-t-il place pour l\'accident (contingence) ? Pour Aristote, l\'accident est ce qui peut être ou ne pas être. Pour les stoïciens, tout est nécessaire, l\'accident est illusion. Pour les existentialistes, l\'existence est contingente : nous sommes là par hasard.',
  shortDefinition: 'Ce qui arrive par hasard, sans nécessité',

  etymology: {
    latin: 'accidens',
    root: 'accidere : tomber sur, arriver',
    notes: 'L\'accident est ce qui tombe (arrive) sans être prévu'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument de la contingence',
        explanation: 'Tout ce qui est pourrait ne pas être. Le monde est contingent, pas nécessaire. L\'accident est possibilité du non-être.',
        premises: ['Rien dans l\'être n\'est nécessaire par soi', 'Tout pourrait être autrement', 'Donc l\'accident est possible', 'La contingence est structurelle au réel'],
        conclusion: 'L\'accident n\'est pas exception mais structure du réel'
      },
      {
        argument: 'Argument déterministe',
        explanation: 'Ce qui semble accidentel a en fait des causes cachées. L\'accident est ignorance des causes, pas absence de cause.',
        premises: ['Tout événement a une cause', 'Ce que nous appelons accident a des causes', 'Nous ne connaissons pas toutes les causes', 'Donc l\'accident est illusion d\'ignorance'],
        conclusion: 'L\'accident n\'existe pas réellement, tout est nécessaire'
      }
    ],
    objections: [
      {
        objection: 'Objection de la liberté',
        content: 'Si tout est nécessaire, pas de liberté. Si l\'accident existe, la liberté est possible.',
        response: 'Liberté n\'est pas hasard mais spontanéité rationnelle. Je peux être libre sans être accidentel.'
      }
    ],
    distinctions: [
      { distinction: 'Accident vs Substance', explanation: 'Substance : ce qui est par soi. Accident : ce qui est dans un sujet (attribut).' },
      { distinction: 'Accident vs Essence', explanation: 'Essence : ce qui fait être ce qu\'est une chose. Accident : ce qui peut changer sans changement d\'essence.' },
      { distinction: 'Accident vs Nécessité', explanation: 'Accident : ce qui peut être ou ne pas être. Nécessité : ce qui ne peut pas ne pas être.' }
    ]
  },

  relatedConcepts: [
    { concept: 'hasard', relationship: 'L\'accident est réalisation du hasard.', bidirectional: true },
    { concept: 'necessite', relationship: 'L\'accident s\'oppose à la nécessité.', bidirectional: true },
    { concept: 'contingence', relationship: 'La contingence est possibilité de l\'accident.', bidirectional: true },
    { concept: 'substance', relationship: 'La substance est par soi, l\'accident est dans un sujet.', bidirectional: true },
    { concept: 'cause', relationship: 'L\'accident est ce qui n\'a pas de cause propre, il est sans intention.', bidirectional: true },
    { concept: 'fini', relationship: 'Dans le fini, l\'accident est limité dans son temps et son espace.', bidirectional: true },
    { concept: 'nature', relationship: 'L\'accident s\'oppose à l\'essence naturelle, mais peut révéler une vérité cachée.', bidirectional: true }
  ],

  relatedMovements: [
    { name: 'Stoïcisme', description: 'Tout est nécessaire, l\'accident est illusion.', role: 'CRITICAL', keyFigures: ['Épictète'] },
    { name: 'Existentialisme', description: 'L\'existence est contingente.', role: 'EXPRESSES', keyFigures: ['Sartre'] }
  ],

  keyFigures: [
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Distinction substance/accident' },
    { name: 'Cléanthe', period: '301-232 av. J.-C.', contribution: 'Tout est nécessaire' }
  ],

  examples: [
    'La pierre qui tombe : accidentel pour qui passe (hasard), nécessaire pour la physique (gravité).',
    'La rencontre : hasard des circonstances mais raisons cachées.',
    'Le cancer : accidentel pour l\'individu, nécessaire biologiquement.'
  ],

  sources: [
    {
      title: 'Catégories',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Distinction substance/accident',
      quotes: ['La substance est par soi, l\'accident est dans un sujet.', 'L\'accident est ce qui peut être ou ne pas être.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle différence Aristote fait-il entre substance et accident ?',
      back: 'La substance est ce qui est par soi, ce qui existe indépendamment (ex: cet homme). L\'accident est ce qui est dans un sujet, ce qui peut être ou ne pas être sans que le sujet change (ex: blanc, grand). La substance est sujet, l\'accident est attribut. Je peux perdre mes accidents (maigrir, blanchir) sans cesser d\'être moi-même (substance).',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment les stoïciens voient-ils l\'accident ?',
      back: 'Pour les stoïciens, l\'accident est illusion. Tout ce qui arrive est nécessaire, déterminé par le destin (logos). Ce qui semble accidentel (hasard) est en fait ignorance des causes cachées. Cléanthe : si tu avais la raison de Dieu, tu verrais que tout est nécessaire. Cette position élimine l\'accident mais pose problème pour la liberté : si tout est nécessaire, pas de place pour la liberté humaine.',
      difficulty: 4
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Aristote, l\'accident est ce qui peut être ou ne pas {{être}}, la {{substance}} est ce qui est par soi.',
      back: 'être | substance',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'L\'accident existe-t-il vraiment ou est-ce illusion ?',
      back: 'Déterminisme (stoïcisme, science) : l\'accident est illusion d\'ignorance, tout a des causes. Contingentisme (Aristote, existentialisme) : l\'accident est réel, tout pourrait être autrement. La physique quantique : certains événements n\'ont pas de cause déterminée (indéterminisme). L\'accident peut être subjectif (ignorance des causes) ou objectif (absence de cause). Pour le sens commun, l\'accident existe (malchance). Pour la science, l\'accident est ignorance (rechercher les causes). Pour la métaphysique, l\'accident interroge : le monde est-il nécessaire ou contingent ? Le déterminisme élimine l\'accident mais aussi la liberté. La contingence permet la liberté mais aussi l\'angoisse (tout peut arriver).',
      difficulty: 5
    }
  ],

  tags: ['accident', 'hasard', 'nécessité', 'contingence', 'substance', 'aristote', 'déterminisme', 'stoïcisme']
};
