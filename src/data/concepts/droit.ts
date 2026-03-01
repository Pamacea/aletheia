/*
  Droit - Concept Data
  Ensemble de règles qui régissent la vie en société
*/
export const concept = {
  id: 'droit',
  name: 'Droit',
  slug: 'droit',
  category: 'politique',

  difficulty: 3,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: 'Le droit est ensemble de règles qui régissent la vie en société, sanctionnées par l\'autorité publique. La philosophie distingue droit naturel (règles universelles dérivées de la nature humaine) et droit positif (règles posées par l\'autorité). Pour Kant, le droit est "l\'ensemble des conditions par lesquelles l\'arbitraire de chacun peut s\'accorder avec l\'arbitraire de tous selon une loi universelle de liberté".',
  shortDefinition: "Ensemble de règles qui régissent la vie en société",

  etymology: {
    latin: 'directum',
    french: 'droit',
    root: 'dirigere : diriger, rectifier',
    notes: 'Le droit est ce qui est droit, juste, conforme à la règle'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du contrat social',
        explanation: 'Le droit fondé sur le contrat exprime la volonté générale. Les lois sont justes si elles sont l\'expression de la volonté de tous.',
        premises: ['L\'état de nature est insatisfaisant', 'Les hommes conviennent de former un corps politique', 'Ce contrat fonde le droit', 'Les lois justes expriment la volonté générale'],
        conclusion: 'Le droit légitime est fondé sur le consentement des gouvernés'
      },
      {
        argument: 'Argument kantien de la liberté',
        explanation: 'Le droit est ensemble des conditions par lesquelles la liberté de chacun s\'accorde avec la liberté de tous selon une loi universelle.',
        premises: ['Chacun a droit à la liberté', 'Ma liberté ne doit pas nuire à celle d\'autrui', 'Le droit définit les limites de la liberté', 'Ces limites sont universelles'],
        conclusion: "Le droit est loi universelle de liberté"
      }
    ],
    objections: [
      {
        objection: "Objection de la désobéissance civile",
        content: 'Si le droit positif est injuste (lois racistes), la désobéissance est justifiée. Le droit positif n\'est pas critère de justice.',
        response: 'C\'est vrai, mais la désobéissance civile doit être publique, non violente, accepter la sanction. Elle ne rejette pas le droit mais l\'injustice du droit positif.'
      }
    ],
    distinctions: [
      { distinction: 'Droit naturel vs Droit positif', explanation: 'Naturel : règles universelles de la nature humaine. Positif : règles posées par l\'autorité.' },
      { distinction: 'Droit vs Morale', explanation: "Droit : extérieur, actions, sanctionné. Morale : intérieure, intentions, non sanctionnée." },
      { distinction: 'Droit objectif vs Droit subjectif', explanation: 'Objectif : ensemble des règles (le droit). Subjectif : droits dont je suis titulaire (mes droits).' }
    ]
  },

  relatedConcepts: [
    { concept: 'justice',
      relationship: "Le droit cherche à réaliser la justice.", bidirectional: true },
    { concept: 'loi',
      relationship: 'La loi est expression du droit.', bidirectional: true },
    { concept: 'morale',
      relationship: "Le droit est extérieur, la morale intérieure.", bidirectional: true },
    { concept: "liberté",
      relationship: "Le droit définit et protège la liberté.", bidirectional: true },
    { concept: 'politique',
      relationship: "L'État fait le droit, garant de sa légitimité.", bidirectional: true },
    { concept: "pouvoir",
      relationship: "Le droit est l'expression institutionnalisée du pouvoir.", bidirectional: true }
  ],

  relatedMovements: [
    { name: 'Droit naturel', description: 'Le droit comme universel et immuable.', role: 'CONCEPT_CENTRAL', keyFigures: ['Cicéron', 'Aquinnas', 'Locke'] },
    { name: 'Positivisme juridique', description: 'Le droit comme posé par l\'autorité.', role: 'EXPRESSES', keyFigures: ['Austin', 'Kelsen'] }
  ],

  keyFigures: [
    { name: 'Jean-Jacques Rousseau', period: '1712-1778', contribution: 'Le contrat social comme fondement du droit' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Le droit comme loi universelle de liberté' },
    { name: 'Hans Kelsen', period: '1881-1973', contribution: 'Théorie pure du droit' }
  ],

  examples: [
    'La Déclaration de 1789 : les droits naturels (liberté, propriété, résistance).',
    'Les lois racistes : droit positif injuste, justifiant la désobéissance civile.',
    'Le code civil : ensemble des règles de droit privé.'
  ],

  sources: [
    {
      title: 'Du contrat social',
      author: 'Jean-Jacques Rousseau',
      year: 1762,
      type: 'BOOK' as const,
      reference: 'Fondement contractuel du droit',
      quotes: ['Le contrat social est fondement du droit', 'Chacun se donnant à tous, ne se donne à personne.']
    },
    {
      title: 'Métaphysique des mœurs',
      author: 'Immanuel Kant',
      year: 1797,
      type: 'BOOK' as const,
      reference: 'Théorie du droit',
      quotes: ['Le droit est loi universelle de liberté', 'Le droit est externe, la morale interne.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: "Quelle différence entre droit et morale ?",
      back: 'Le droit concerne les actions extérieures, sanctionnées par l\'autorité publique. La morale concerne les intentions intérieures, non sanctionnées (par la conscience). Le droit porte sur le juste (juridiquement), la morale sur le bien (moralement). Une action peut être légale (conforme au droit) mais immorale (mauvaise intention), ou illégale mais morale (désobéissance civile à une loi injuste).',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: "Quelle différence entre droit naturel et droit positif ?",
      back: 'Le droit naturel est l\'ensemble des règles universelles dérivées de la nature humaine (droits de l\'homme). Le droit positif est l\'ensemble des règles posées par l\'autorité (lois, règlements). Le droit naturel sert à critiquer le droit positif : si une loi est injuste (ex: lois racistes), elle contredit le droit naturel.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: "Quelle citation de Rousseau définit la loi ?",
      back: '"La loi est expression de la volonté générale" (Du contrat social, 1762)',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le droit positif est-il toujours juste ?',
      back: 'Non, le droit positif (lois posées par l\'autorité) peut être injuste. Ex: lois racistes, discriminatoires. Le droit naturel (droits humains) sert à critiquer le droit positif. Si le droit positif contredit le droit naturel, la désobéissance civile est justifiée (Thoreau, King, Mandela). Mais la désobéissance civile doit être publique, non violente, accepter la sanction. Elle ne rejette pas le droit mais l\'injustice du droit positif.',
      difficulty: 5
    }
  ],

  tags: ['droit', 'justice', 'loi', 'morale', 'liberté', 'contrat social', 'rousseau', 'kant', 'droits humains']
};
