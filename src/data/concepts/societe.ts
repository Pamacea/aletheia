/**
 * Société - Concept Data
 * Ensemble d'individus liés par des rapports sociaux, culturels et économiques
 */

export const concept = {
  id: 'societe',
  name: 'Société',
  slug: 'societe',
  category: 'sociologie',
  difficulty: 3,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: 'La société est l\'ensemble des individus liés par des rapports sociaux, culturels, politiques et économiques. La philosophie distingue plusieurs conceptions : la société civile (Locke, Tocqueville) comme espace associatif indépendant de l\'État ; la société comme organisme (Comte, Durkheim) avec ses fonctions et structures ; la société comme contrat (Rousseau) fondée sur volonté générale ; la société comme lutte des classes (Marx) traversée par conflits. Pour Durkheim, la société est réalité sui generis avec conscience collective. Pour Tocqueville, la société démocratique tend à l\'égalité mais risque la tyrannie de la majorité. Pour Arendt, la société s\'oppose à l\'espace politique véritable. La question centrale : comment vivre ensemble ?',
  shortDefinition: 'Ensemble d\'individus liés par des rapports sociaux et culturels',

  etymology: {
    latin: 'societas : de socius (compagnon, associé)',
    greek: 'koinonia (κοινωνία) : communauté, participation',
    root: 'sekw- (suivre) : être avec, suivre',
    notes: 'Societas désigne l\'association, la compagnie, l\'alliance'
  },

  reasoning: {
    thesis: "La société est forme nécessaire de la vie humaine, fondée soit sur contrat soit sur communauté",
    arguments: [
      { title: 'Argument de la nature sociale (Aristote)', content: 'L\'homme est animal social, ne peut vivre seul.' },
      { title: 'Argument du contrat (Rousseau)', content: 'La société est fondée sur contrat entre individus libres.' },
      { title: 'Argument de la solidarité (Durkheim)', content: 'La division du travail crée interdépendance nécessaire.' }
    ],
    counterArguments: [
      { title: 'Critique individualiste', content: 'La société est somme des individus, pas réalité séparée.' },
      { title: 'Critique anarchiste', content: 'La société opprime l\'individu. Il faut l\'abolir.' }
    ]
  },

  philosophicalAnalysis: {
    history: "Antiquité : cité-état. Moyen Âge : société chrétienne. Moderne : État-nation, société civile. Contemporain : société mondiale, société de consommation.",
    problems: [
      { problem: 'Problème de l\'ordre social', description: 'Comment la société se maintient-elle ? Coercition, consensus, solidarité ?' },
      { problem: 'Problème de la justice sociale', description: 'Comment distribuer équitablement les biens sociaux ?' }
    ],
    debates: [
      {
        issue: "La société est-elle organique ou contractuelle ?",
        positions: ['Organique (Durkheim) : réalité sui generis', 'Contractuelle (Rousseau) : association volontaire']
      }
    ]
  },

  relatedConcepts: [
    { concept: 'politique', relationship: 'La société est le terrain de la politique' },
    { concept: 'culture', relationship: 'La société produit une culture commune' },
    { concept: 'etat', relationship: 'La société se distingue de l\'État' },
    { concept: 'droit', relationship: 'Le droit régit les rapports sociaux au sein de la société. Les règles juridiques encadrent les interactions entre individus et groupes, assurant l\'ordre social. Pour Durkheim, le droit est la forme visible de la solidarité sociale.' },
    { concept: 'pouvoir', relationship: 'Les relations de pouvoir traversent la société entière. Pour Foucault, le pouvoir n\'est pas seulement dans l\'État mais dans toutes les relations sociales. La société est structurée par des rapports de pouvoir multiples qui façonnent les comportements et les identités.' },
    { concept: 'justice', relationship: 'La justice sociale concerne la répartition équitable des biens et des opportunités dans la société. La question de la justice est centrale : comment la société peut-elle être juste? Pour Rawls, la justice est la première vertu des institutions sociales.' },
    { concept: 'solidarite', relationship: 'La solidarité est le lien social qui unit les membres de la société. Pour Durkheim, la solidarité mécanique (similitudes) caractérise les sociétés traditionnelles, la solidarité organique (interdépendance) les sociétés modernes. Sans solidarité, la société se disloque.' },
    { concept: 'morale', relationship: 'La société produit ses normes morales qui régissent le comportement de ses membres. Pour Durkheim, la morale est un fait social : elle vient de la société et exprime la conscience collective. Les valeurs morales varient selon les types de société.' }
  ],

  relatedMovements: [
    { movement: 'Holisme', description: 'La société est réalité totale', keyFigures: ['Durkheim', 'Mauss'] },
    { movement: 'Individualisme', description: 'La société est somme des individus', keyFigures: ['Locke', 'Hayek'] },
    { movement: 'Marxisme', description: 'Société comme lutte des classes', keyFigures: ['Marx'] }
  ],

  variations: [
    { title: 'Société comme organisme (Durkheim)', description: 'La société est réalité sui generis avec conscience collective et fonctions.' },
    { title: 'Société civile (Tocqueville)', description: 'Espace associatif indépendant de l\'État, garant de la liberté.' },
    { title: 'Société comme lutte des classes (Marx)', description: 'La société est divisée en classes aux intérêts contradictoires.' }
  ],

  keyFigures: [
    { name: 'Émile Durkheim', period: '1858-1917', contribution: 'La société comme réalité sui generis et faits sociaux' },
    { name: 'Karl Marx', period: '1818-1883', contribution: 'La société comme lutte des classes' },
    { name: 'Alexis de Tocqueville', period: '1805-1859', contribution: 'La société démocratique et la société civile' },
    { name: 'Jean-Jacques Rousseau', period: '1712-1778', contribution: 'Le contrat social comme fondement de la société' }
  ],

  examples: [
    'La division du travail social (Durkheim) : La solidarité organique remplace la solidarité mécanique. Interdépendance.',
    'La société de consommation (Baudrillard) : La société actuelle est organisée autour de la consommation de masse.',
    'La société du risque (Beck) : Les risques nouveaux (climat, nucléaire) menacent la société globale.'
  ],

  sources: [
    {
      title: 'De la division du travail social',
      author: 'Émile Durkheim',
      year: 1893,
      type: 'BOOK' as const,
      reference: 'Fondation de la sociologie moderne',
      quotes: ['Les faits sociaux sont choses.', 'La société est réalité sui generis.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que la société civile chez Tocqueville ?',
      back: 'La société civile est ensemble des associations (clubs, églises, syndicats) indépendantes de l\'État. Elle garantit la liberté en créant des contre-pouvoirs. Pour Tocqueville, la société civile est essentielle à la démocratie : elle empêche la tyrannie de la majorité en multipliant les centres de pouvoir.',
      difficulty: 3
    },
    {
      type: 'CLOZE' as const,
      front: "Pour Durkheim, les faits sociaux sont des {{choses}}. Pour Marx, la société est {{lutte des classes}}.",
      back: 'choses | lutte des classes',
      difficulty: 1
    }
  ],

  tags: ['société', 'état', 'solidarité', 'classe', 'culture', 'démocratie', 'contrat social', 'ordre social']
};
