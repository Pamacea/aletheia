/*
  Cause - Concept Data
  Ce qui produit un effet, principe d'explication
*/
export const concept = {
  id: 'cause',
  name: 'Cause',
  slug: 'cause',
  category: 'metaphysique',

  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: 'La cause est ce qui produit un effet, principe d\'explication du changement. Aristote distingue quatre causes : matière (de quoi ça est fait), formelle (ce que c\'est), efficiente (ce qui produit), finale (le but). La science moderne retient surtout la cause efficiente : ce qui produit l\'effet. Pour Hume, la causalité n\'est pas connexion nécessaire mais habitude de l\'esprit : nous voyons A suivi de B, nous attendons que B suive A. Pour Kant, la causalité est catégorie a priori de l\'entendement : nous ne pouvons penser le monde qu\'en termes de causes. Pour la physique quantique, certains événements n\'ont pas de cause déterminée (indéterminisme). La causalité est centrale en science (explication), en droit (responsabilité), en métaphysique (principe de raison suffisante).',
  shortDefinition: 'Ce qui produit un effet, principe d\'explication du changement',

  etymology: {
    latin: 'causa',
    greek: 'aitia (αἰτία)',
    root: 'cause : ce qui produit, ce qui explique',
    notes: 'Aitia signifie à la fois cause, raison, explication, responsabilité'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument des quatre causes (Aristote)',
        explanation: 'Pour expliquer un être, il faut quatre causes : matière (de quoi), formelle (quoi), efficiente (par qui), finale (pour quoi). Ex: statue : matière (bronze), formelle (forme), efficiente (sculpteur), finale (beauté).',
        premises: ['Tout changement a une cause', 'Une seule cause est insuffisante pour expliquer', 'Il faut distinguer matière, forme, producteur, but', 'Les quatre causes ensemble donnent explication complète'],
        conclusion: 'La causalité est quadruple : matière, formelle, efficiente, finale'
      },
      {
        argument: 'Argument humien de l\'habitude',
        explanation: 'Nous n\'observons jamais de connexion nécessaire entre cause et effet. Nous voyons seulement A suivi de B. L\'idée de causalité vient de l\'habitude : après avoir vu A suivi de B plusieurs fois, nous attendons que B suive A.',
        premises: ['Nous n\'observons jamais de connexion nécessaire', 'Nous voyons seulement succession constante', 'L\'idée de connexion nécessaire vient de l\'habitude', 'Donc la causalité n\'est pas dans les choses mais dans l\'esprit'],
        conclusion: 'La causalité est habitude de l\'esprit, pas connexion réelle'
      },
      {
        argument: 'Argument kantien de la catégorie',
        explanation: 'La causalité n\'est pas dans les choses mais catégorie a priori de l\'entendement. Nous ne pouvons penser le monde qu\'en termes de causes. C\'est condition de possibilité de l\'expérience.',
        premises: ['Tout événement a une cause', 'Ce principe n\'est pas empirique (pas dérivé de l\'expérience)', 'Donc il est a priori, structure de l\'entendement', 'Nous ne pouvons penser qu\'avec cette catégorie'],
        conclusion: 'La causalité est catégorie a priori, condition de l\'expérience'
      }
    ],
    objections: [
      {
        objection: 'Objection sceptique',
        content: 'Comment savoir que tout a une cause ? Peut-être y a-t-il des événements sans cause (indéterminisme quantique). Le principe de causalité n\'est pas prouvé.',
        response: 'Kant répond que le principe de causalité n\'est pas empirique mais a priori : condition de possibilité de toute expérience. Nous ne pouvons pas penser le monde sans causalité.'
      },
      {
        objection: 'Objection de la physique quantique',
        content: 'Certains événements quantiques n\'ont pas de cause déterminée. L\'indéterminisme est réel. Le principe de causalité n\'est pas universel.',
        response: 'La physique quantique remet en cause le déterminisme causal classique. Mais cela ne supprime pas la causalité comme catégorie de pensée : même l\'indéterminisme est pensé en termes causaux (probabilités).'
      }
    ],
    distinctions: [
      { distinction: 'Cause efficiente vs Cause finale', explanation: 'La cause efficiente est ce qui produit (le sculpteur). La cause finale est le but (la beauté visée).' },
      { distinction: 'Cause vs Corrélation', explanation: 'La cause produit l\'effet. La corrélation est relation statistique sans production. Corrélation n\'est pas causalité.' },
      { distinction: 'Cause vs Condition', explanation: 'La cause produit l\'effet. La condition rend l\'effet possible sans le produire. Ex: oxygène est condition du feu, pas cause.' }
    ]
  },

  relatedConcepts: [
    { concept: 'effet', relationship: 'L\'effet est produit par la cause.', bidirectional: true },
    { concept: 'determinisme', relationship: 'Le déterminisme affirme que tout a une cause.', bidirectional: true },
    { concept: 'hasard', relationship: 'Le hasard est absence de cause apparente.', bidirectional: true },
    { concept: 'raison', relationship: 'La cause est une sorte de raison (principe de raison suffisante).', bidirectional: true },
    { concept: 'liberte', relationship: 'La liberté humaine pose problème au déterminisme causal : peut-on agir librement si tout a une cause ?', bidirectional: true },
    { concept: 'sens', relationship: 'La cause finale (Aristote) cherche le sens ou la fin de l\'existence. La causalité téléologique s\'oppose à la causalité mécanique.', bidirectional: true },
    { concept: 'connaissance', relationship: 'La causalité est fondement de la connaissance scientifique : expliquer c\'est trouver les causes. Hume montre que la causalité est condition de la science.', bidirectional: true }
  ],

  relatedMovements: [
    { name: 'Aristotélisme', description: 'Les quatre causes.', role: 'CONCEPT_CENTRAL', keyFigures: ['Aristote'] },
    { name: 'Empirisme', description: 'Critique humienne de la causalité.', role: 'CRITICAL', keyFigures: ['Hume'] },
    { name: 'Kantisme', description: 'La causalité comme catégorie a priori.', role: 'CONCEPT_CENTRAL', keyFigures: ['Kant'] }
  ],

  philosophicalAnalysis: {
    history: 'Aristote systématise les quatre causes. Les scolastiques retiennent surtout cause efficiente et finale. La science moderne (XVIIe) retient surtout cause efficiente, rejette cause finale. Hume (1748) critique la causalité comme habitude. Kant (1781) la restaure comme catégorie a priori. La physique quantique (XXe) remet en cause le déterminisme causal.'
  },

  variations: [
    { title: 'Quatre causes (Aristote)', description: 'Matière, formelle, efficiente, finale.' },
    { title: 'Causalité comme habitude (Hume)', description: 'Connexion nécessaire est habitude de l\'esprit.' },
    { title: 'Causalité comme catégorie (Kant)', description: 'Structure a priori de l\'entendement.' }
  ],

  keyFigures: [
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Les quatre causes' },
    { name: 'David Hume', period: '1711-1776', contribution: 'Critique sceptique de la causalité' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'La causalité comme catégorie a priori' }
  ],

  examples: [
    'La statue (Aristote) : matière=bronze, formelle=forme, efficiente=sculpteur, finale=beauté.',
    'Le billard (Hume) : boule A choque boule B, B bouge. Nous voyons succession, pas connexion nécessaire.',
    'Le désordre (Kant) : sans principe de causalité, le chaos. La causalité ordonne l\'expérience.'
  ],

  sources: [
    {
      title: 'Physique',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Les quatre causes',
      quotes: ['On ne connaît une chose qu\'en connaissant ses causes.', 'Il y a quatre causes : matière, forme, moteur, fin.']
    },
    {
      title: 'Enquête sur l\'entendement humain',
      author: 'David Hume',
      year: 1748,
      type: 'BOOK' as const,
      reference: 'Critique de la causalité',
      quotes: ['Tous nos raisonnements sur les faits sont fondés sur la relation de cause à effet.', 'Cette relation est dérivée de l\'expérience, pas de raisonnement.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelles sont les quatre causes d\'Aristote ?',
      back: 'Les quatre causes sont : 1) Cause matérielle (de quoi c\'est fait) ; 2) Cause formelle (ce que c\'est, sa forme) ; 3) Cause efficiente (ce qui le produit) ; 4) Cause finale (le but, la finalité). Exemple pour une statue : matière=bronze, formelle=forme de la statue, efficiente=sculpteur, finale=beauté visée.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Hume critique-t-il la notion de cause ?',
      back: 'Hume soutient que nous n\'observons jamais de connexion nécessaire entre cause et effet. Nous voyons seulement A suivi de B. L\'idée de causalité vient de l\'habitude : après avoir vu A suivi de B plusieurs fois, nous attendons que B suive A. C\'est une habitude psychologique, pas une connexion réelle dans les choses.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation d\'Aristote résume les causes ?',
      back: 'On ne connaît une chose qu\'en connaissant ses causes (Physique, IVe siècle av. J.-C.)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Hume, la causalité est {{habitude}} de l\'esprit, pas {{connexion}} réelle.',
      back: 'habitude | connexion',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Tout événement a-t-il une cause ?',
      back: 'Le principe de causalité affirme que oui. Aristote : quatre causes pour expliquer. Kant : catégorie a priori, condition de l\'expérience. Hume : critique, nous n\'observons pas de connexion nécessaire, seulement succession. Physique quantique : certains événements n\'ont pas de cause déterminée (indéterminisme). Le principe de causalité n\'est ni empiriquement prouvé ni logiquement nécessaire. Mais il est peut-être condition de possibilité de toute pensée : sans causalité, pas de science, pas d\'explication, pas de prévision. La question reste ouverte mais le principe reste outil heuristique indispensable.',
      difficulty: 5
    }
  ],

  tags: ['cause', 'effet', 'aristote', 'hume', 'kant', 'déterminisme', 'hasard', 'causalité', 'explication']
};
