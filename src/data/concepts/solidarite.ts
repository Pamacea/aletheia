/*
  Solidarité - Concept Data
  Principe de responsabilité mutuelle et d\'entraide entre les membres d\'une communauté
*/
export const concept = {
  id: 'solidarite',
  name: 'Solidarité',
  slug: 'solidarite',
  category: 'politique',

  difficulty: 3,
  importance: 4,
  status: 'COMPLETE' as const,

  definition: 'La solidarité est principe de responsabilité mutuelle et d\'entraide entre membres d\'une communauté. Elle se distingue de la charité (vertu privée) comme obligation sociale. Pour Durkheim, la solidarité est fait social qui unit la société : solidarité mécanique (similitude, société traditionnelle) et solidarité organique (différenciation, société moderne). Pour le catholicisme social, la solidarité est devoir moral envers les plus vulnérables. La solidarité fonde la protection sociale (sécu, chômage, retraite). Elle s\'oppose à l\'individualisme : nous sommes responsables les uns des autres.',
  shortDefinition: 'Responsabilité mutuelle et entraide entre membres d\'une communauté',

  etymology: {
    latin: 'soliditas',
    french: 'solidarité',
    root: 'solidus : solide, compact',
    notes: 'La solidarité désigne d\'abord cohésion, puis entraide'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument durkheimien',
        explanation: 'La solidarité est fait social qui unit. Solidarité mécanique : similitude (conscience collective). Solidarité organique : différenciation, division du travail.',
        premises: ['La société est un', 'Ce qui unit est la solidarité', 'Solidarité mécanique : similitude', 'Solidarité organique : interdépendance'],
        conclusion: 'La solidarité est principe de cohésion sociale'
      },
      {
        argument: 'Argument de la responsabilité sociale',
        explanation: 'Nous sommes responsables les uns des autres. La solidarité est devoir d\'entraide, pas seulement vertu individuelle.',
        premises: ['Nous vivons en société', 'Nos actions affectent les autres', 'Nous avons des devoirs sociaux', 'La solidarité est expression de ces devoirs'],
        conclusion: 'La solidarité est obligation morale et politique'
      }
    ],
    objections: [
      {
        objection: 'Objection libertarienne',
        content: 'La solidarité forcée (impôts) viole la liberté. L\'entraide doit être volontaire, pas obligatoire.',
        response: 'La solidarité organisée (État-providence) protège mieux que la charité privée. La liberté n\'est pas absolue : elle a des limites quand la dignité d\'autrui est menacée.'
      }
    ],
    distinctions: [
      { distinction: 'Solidarité vs Charité', explanation: 'Charité : vertu privée, volontaire. Solidarité : obligation sociale, organisée.' },
      { distinction: 'Solidarité mécanique vs organique', explanation: 'Mécanique : similitude (tradition). Organique : différenciation (moderne).' }
    ]
  },

  relatedConcepts: [
    { concept: 'justice',
      relationship: 'La solidarité réalise la justice sociale.', bidirectional: true },
    { concept: 'fraternité',
      relationship: 'La solidarité est la fraternité en acte.', bidirectional: true },
    { concept: 'individualisme',
      relationship: 'L\'individualisme oppose la solidarité.', bidirectional: true },
    { concept: 'morale',
      relationship: 'La solidarité est principe éthique d\'entraide et de responsabilité envers autrui.', bidirectional: true },
    { concept: 'autrui',
      relationship: 'La solidarité est reconnaissance concrète de la responsabilité envers autrui.', bidirectional: true },
    { concept: 'société',
      relationship: 'La solidarité est le ciment qui cohèse la société par l\'interdépendance.', bidirectional: true },
    { concept: 'égalité',
      relationship: 'La solidarité réduit les inégalités par la redistribution et la protection sociale.', bidirectional: true },
    { concept: 'pouvoir',
      relationship: 'La solidarité est pouvoir collectif d\'action et de transformation sociale.', bidirectional: false }
  ],

  relatedMovements: [
    { name: 'Socialisme', description: 'La solidarité comme principe.', role: 'CONCEPT_CENTRAL', keyFigures: ['Proudhon', 'Blum'] },
    { name: 'Catholicisme social', description: 'La solidarité comme devoir moral.', role: 'EXPRESSES', keyFigures: ['Léon XIII'] }
  ],

  keyFigures: [
    { name: 'Émile Durkheim', period: '1858-1917', contribution: 'Solidarité mécanique et organique' },
    { name: 'Léon Bourgeois', period: '1851-1925', contribution: 'Solidarisme politique' }
  ],

  examples: [
    'La Sécu : solidarité organisée (maladie, retraite).',
    'Les grèves : solidarité ouvrière.',
    'L\'aide internationale : solidarité globale.'
  ],

  sources: [
    {
      title: 'De la division du travail social',
      author: 'Émile Durkheim',
      year: 1893,
      type: 'BOOK' as const,
      reference: 'Solidarité mécanique et organique',
      quotes: ['La solidarité est fait social qui unit.', 'Solidarité mécanique : similitude. Solidarité organique : différenciation.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle différence Durkheim fait-il entre solidarité mécanique et organique ?',
      back: 'La solidarité mécanique repose sur la similitude : tous sont semblables, partagent mêmes croyances, valeurs (société traditionnelle). La solidarité organique repose sur la différenciation : chacun est spécialisé, interdépendant (société moderne). Dans la solidarité mécanique, l\'unité vient de l\'identité. Dans la solidarité organique, l\'unité vient de la complémentarité.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre solidarité et charité ?',
      back: 'La charité est vertu privée, volontaire, individuelle (je donne si je veux). La solidarité est obligation sociale, organisée, collective (nous contribuons tous). La charité est vertu individuelle, la solidarité est principe de justice sociale. La charité est aide ponctuelle, la solidarité est protection systématique. Les deux sont nécessaires mais la solidarité est plus fiable car organisée.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Durkheim définit la solidarité ?',
      back: '"La solidarité est fait social qui unit".',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'La solidarité doit-elle être obligatoire ou volontaire ?',
      back: 'Solidarité volontaire (charité) : respecte la liberté mais risqué d\'insuffisance. Solidarité obligatoire (impôts, Sécu) : plus efficace mais contraint la liberté. Position médiane : solidarité obligatoire pour les besoins fondamentaux (santé, éducation), volontaire pour le reste. La solidarité obligatoire n\'est pas violation de la liberté mais expression de la responsabilité sociale : nous sommes co-responsables des plus vulnérables. La liberté n\'est pas absolue : elle a des limites quand la dignité d\'autrui est menacée.',
      difficulty: 4
    }
  ],

  tags: ['solidarité', 'fraternité', 'justice', 'durkheim', 'charité', 'social', 'entraide', 'société']
};
