/*
  Égalité - Concept Data
  Principe selon lequel tous les humains ont la même dignité et les mêmes droits
*/
export const concept = {
  id: 'egalite',
  name: 'Égalité',
  slug: 'egalite',
  category: 'politique',

  difficulty: 3,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: 'L\'égalité est principe selon lequel tous les humains ont la même dignité et les mêmes droits. La Déclaration des droits de l\'homme (1789) proclame : "Les hommes naissent et demeurent libres et égaux en droits".',
  shortDefinition: 'Principe selon lequel tous les humains ont la même dignité et droits',

  etymology: {
    latin: 'aequalitas',
    french: 'égalité',
    root: 'aequalis : égal, pareil',
    notes: 'L\'égalité désigne d\'abord ressemblance, puis identité de statut'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument des droits naturels',
        explanation: 'Tous les humains ont les mêmes droits naturels (vie, liberté, propriété) car ils ont la même nature rationnelle.',
        premises: ['Tous les humains sont également rationnels', 'La rationalité confère des droits', 'Ces droits sont universels', 'Donc tous sont égaux en droits'],
        conclusion: 'L\'égalité des droits est fondée sur l\'égalité de nature humaine'
      },
      {
        argument: 'Argument de justice (Rawls)',
        explanation: 'Les inégalités sont justes seulement si elles bénéficient aux plus défavorisés et si les positions sont accessibles à tous (égalité des chances).',
        premises: ['La justice est premier principe de l\'institution sociale', 'Les inégalités doivent profiter aux plus désavantagés', 'Les positions doivent être ouvertes à tous', 'Donc l\'égalité réelle corrige les inégalités naturelles'],
        conclusion: 'L\'égalité est principe de justice distributive'
      }
    ],
    objections: [
      {
        objection: 'Objection de l\'inégalité naturelle',
        content: 'Les humains sont inégaux par nature (force, intelligence). L\'égalité est déni de réalité.',
        response: 'L\'égalité politique et juridique ne supprime pas les différences naturelles mais garantit un statut égal malgré ces différences.'
      },
      {
        objection: 'Objection libertarienne',
        content: 'L\'égalité réelle exige de redistribuer, ce qui viole la liberté. L\'égalité devant la loi suffit.',
        response: 'Rawls répond que les libertés doivent être égales pour tous, et les inégalités économiques sont justes seulement si elles profitent aux plus défavorisés.'
      }
    ],
    distinctions: [
      { distinction: 'Égalité formelle vs Égalité réelle', explanation: 'Formelle : égalité devant la loi. Réelle : égalité des conditions (accès éducation, santé).' },
      { distinction: 'Égalité des chances vs Égalité des résultats', explanation: 'Des chances : même point de départ. Des résultats : même arrivée.' },
      { distinction: 'Égalité vs Équité', explanation: 'Égalité : traitement identique. Équité : traitement différencié selon besoins.' }
    ]
  },

  relatedConcepts: [
    { concept: 'liberté',
      relationship: 'Égalité et liberté sont les deux principes républicains.', bidirectional: true },
    { concept: 'justice',
      relationship: 'L\'égalité est principe de justice distributive.', bidirectional: true },
    { concept: 'fraternité',
      relationship: 'Fraternité complète liberté-égalité.', bidirectional: true },
    { concept: 'droit',
      relationship: 'L\'égalité devant la loi signifie que tous sont soumis aux mêmes règles juridiques.', bidirectional: true },
    { concept: 'politique',
      relationship: 'L\'égalité est principe fondateur de la démocratie moderne : un citoyen, une voix.', bidirectional: true },
    { concept: 'société',
      relationship: 'L\'égalité structure les rapports sociaux et réduit les hiérarchies injustes.', bidirectional: true },
    { concept: 'pouvoir',
      relationship: 'L\'égalité limite le pouvoir arbitraire en soumettant tous les citoyens aux mêmes lois.', bidirectional: false },
    { concept: 'solidarité',
      relationship: 'L\'égalité et la solidarité sont complémentaires : la première garantit les droits, la seconde corrige les inégalités réelles.', bidirectional: true }
  ],

  relatedMovements: [
    { name: 'Libéralisme', description: 'Égalité des droits.', role: 'EXPRESSES', keyFigures: ['Locke', 'Rawls'] },
    { name: 'Socialisme', description: 'Égalité réelle.', role: 'CONCEPT_CENTRAL', keyFigures: ['Marx'] }
  ],

  keyFigures: [
    { name: 'Jean-Jacques Rousseau', period: '1712-1778', contribution: 'Critique de l\'inégalité sociale' },
    { name: 'John Rawls', period: '1921-2002', contribution: 'Théorie de la justice comme équité' },
    { name: 'Karl Marx', period: '1818-1883', contribution: 'Critique de l\'égalité formelle' }
  ],

  examples: [
    'La Déclaration de 1789 : "Les hommes naissent et demeurent libres et égaux en droits".',
    'La discrimination positive : corriger inégalités réelles par traitement préférentiel.',
    'L\'impôt progressif : plus on gagne, plus on paie (redistribution).'
  ],

  sources: [
    {
      title: 'Déclaration des droits de l\'homme',
      author: 'Assemblée constituante',
      year: 1789,
      type: 'SPEECH' as const,
      reference: 'Proclamation de l\'égalité en droits',
      quotes: ['Les hommes naissent et demeurent libres et égaux en droits.']
    },
    {
      title: 'Théorie de la justice',
      author: 'John Rawls',
      year: 1971,
      type: 'BOOK' as const,
      reference: 'Justice comme équité',
      quotes: ['Les inégalités doivent profiter aux plus désavantagés.', 'Chacun doit avoir une égale chance d\'accéder aux positions.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle différence entre égalité formelle et égalité réelle ?',
      back: 'L\'égalité formelle est égalité devant la loi (tous soumis aux mêmes règles). L\'égalité réelle est égalité des conditions (mêmes opportunités réelles). La première ne garantit pas la seconde : des règles formellement identiques peuvent produire des inégalités réelles si les situations de départ diffèrent.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de la Déclaration de 1789 définit l\'égalité ?',
      back: '"Les hommes naissent et demeurent libres et égaux en droits".',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Égalité des chances ou égalité des résultats ?',
      back: 'Égalité des chances : même point de départ, mais résultats différentiés (méritocratie). Égalité des résultats : même arrivée, par redistribution. Libéraux privilégient chances, socialistes privilégient résultats. Rawls propose médiation : inégalités justes si profitent aux plus défavorisés et positions ouvertes à tous. La question divise gauche et droite, mais aussi façon de concevoir la justice : est-elle procédurale (mêmes règles) ou substantive (mêmes résultats) ?',
      difficulty: 5
    }
  ],

  tags: ['égalité', 'liberté', 'justice', 'droits', 'rousseau', 'rawls', 'marx', 'politique', 'fraternité']
};
