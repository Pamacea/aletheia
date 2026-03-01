/**
 * Histoire - Concept Data
 * Déroulement temporel des événements humains, étude du passé
 */

export const concept = {
  id: 'histoire',
  name: 'Histoire',
  slug: 'histoire',
  category: 'metaphysique',
  difficulty: 4,
  importance: 4,
  status: 'COMPLETE' as const,

  definition: 'L\'histoire est le déroulement temporel des événements humains et la discipline qui les étudie. La philosophie distingue plusieurs sens : histoire comme récit du passé (historiographie) ; histoire comme processus (développement de l\'humanité) ; histoire comme destin (théologie, providence). Pour Hegel, l\'histoire est réalisation progressive de la liberté : l\'Esprit se connaît lui-même à travers l\'histoire. Pour Marx, l\'histoire est lutte des classes, processus matériel déterminé par l\'économie. Pour Nietzsche, l\'histoire est danger (alourdir le présent) mais aussi ressource (forcer à la grandeur). La question philosophique : l\'histoire a-t-elle un sens ? Ou est-elle suite contingente d\'événements ?',
  shortDefinition: 'Déroulement temporel des événements humains et étude du passé',

  etymology: {
    latin: 'historia : enquête, récit',
    greek: 'historia (ἱστορία) : enquête, recherche',
    root: 'wid- (voir, savoir) : savoir par enquête',
    notes: 'L\'histoire est d\'abord enquête, témoignage, puis récit construit'
  },

  reasoning: {
    thesis: 'L\'histoire a un sens et une direction, qu\'elle soit téléologique (fin), dialectique (progrès) ou matérielle',
    arguments: [
      { title: 'Argument de la raison dans l\'histoire (Hegel)', content: 'L\'histoire n\'est pas chaos mais réalisation progressive de la liberté et de la raison.' },
      { title: 'Argument de la lutte des classes (Marx)', content: 'L\'histoire est déterminée par contradictions économiques entre classes. Le communisme est fin nécessaire.' },
      { title: 'Argument du progrès (Condorcet)', content: 'L\'histoire est progrès des lumières et de la raison vers plus de liberté et égalité.' }
    ],
    counterArguments: [
      { title: 'Critique existentialiste', content: 'L\'histoire n\'a pas de sens donné. Nous créons du sens par nos choix.' },
      { title: 'Critique postmoderne', content: 'L\'histoire est récit parmi d\'autres, pas vérité objective. Méta-récits invalidés.' }
    ]
  },

  philosophicalAnalysis: {
    history: 'Antiquité : histoire comme enseignement (Cicéron). Chrétienté : histoire sacrée (providence). Lumières : progrès (Condorcet). XIXe : histoire scientifique, sens de l\'histoire (Hegel, Marx). XXe : critique du sens de l\'histoire, histoire des mentalités.',
    problems: [
      { problem: 'Problème du sens de l\'histoire', description: 'L\'histoire a-t-elle une direction, un but ? Ou est-elle contingence ?' },
      { problem: 'Problème de l\'objectivité historique', description: 'L\'histoire est-elle science ou récit ? Peut-on connaître le passé tel qu\'il fut ?' },
      { problem: 'Problème de la responsabilité historique', description: 'Qui est responsable des crimes du passé ? Comment juger le passé ?' }
    ],
    debates: [
      {
        issue: 'L\'histoire a-t-elle un sens ?',
        positions: [
          'Hegel : oui, réalisation de la liberté',
          'Marx : oui, émancipation des classes',
          'Nietzsche : non, le sens est créé, pas donné',
          'Aron : l\'histoire a sens mais pas fin prédéterminée'
        ]
      }
    ]
  },

  relatedConcepts: [
    { concept: 'temps', relationship: 'L\'histoire est déroulement dans le temps' },
    { concept: 'memoire', relationship: 'L\'histoire se distingue de la mémoire (scientifique vs personnel)' },
    { concept: 'progres', relationship: 'L\'histoire est-elle progrès ?' },
    { concept: 'societe', relationship: 'L\'histoire est le récit des sociétés humaines, de leur organisation et de leurs transformations. Les sociétés produisent l\'histoire autant que l\'histoire les façonne.' },
    { concept: 'culture', relationship: 'L\'histoire est transmission de la culture à travers les générations. Elle permet l\'accumulation des savoirs, des arts et des traditions qui constituent l\'identité collective.' },
    { concept: 'verite', relationship: 'L\'histoire cherche la vérité sur le passé, mais cette vérité est toujours partielle et réinterprétée. L\'historien reconstruit le passé à partir de traces, avec le risque de l\'idéologie.' },
    { concept: 'liberte', relationship: 'Pour Hegel, l\'histoire est le progrès de la conscience de la liberté. Chaque époque réalise une étape vers la liberté universelle, de l\'Orient (un seul libre) au monde moderne (tous libres).' }
  ],

  relatedMovements: [
    { movement: 'Hégélianisme', description: 'Histoire comme réalisation de l\'Esprit', keyFigures: ['Hegel'] },
    { movement: 'Marxisme', description: 'Matérialisme historique', keyFigures: ['Marx'] },
    { movement: 'Historicisme', description: 'Tout est historique, pas de vérité intemporelle', keyFigures: ['Dilthey'] }
  ],

  variations: [
    {
      title: 'Histoire comme ruse de la raison (Hegel)',
      description: 'Pour Hegel, l\'histoire semble chaos, passions individuelles, guerres. Mais en réalité, la « ruse de la raison » se sert des passions humaines pour réaliser des fins supérieures. L\'Esprit se réalise progressivement à travers l\'histoire, atteignant la conscience de soi.'
    },
    {
      title: 'Histoire comme lutte des classes (Marx)',
      description: 'Pour Marx, « l\'histoire de toute société jusqu\'à nos jours est l\'histoire de la lutte des classes ». Oppresseurs/opprimés, maîtres/esclaves, seigneurs/serfs, bourgeois/ouvriers. Le moteur de l\'histoire est contradiction économique. Le communisme est fin nécessaire.'
    },
    {
      title: 'Histoire comme progrès (Condorcet)',
      description: 'Pour Condorcet, l\'histoire est progrès ininterrompu de l\'humanité vers plus de raison, liberté, égalité. Les Lumières annoncent avenir meilleur. L\'éducation est clé du progrès. Cette thèse optimiste sera critiquée par les désastres du XXe siècle.'
    },
    {
      title: 'Histoire comme répétition (Nietzsche)',
      description: 'Nietzsche critique l\'histoire comme savoir qui alourdit le présent. Il faut savoir oublier, créer librement. Mais l\'histoire peut être force : l\'histoire monumentale (exemples à imiter), l\'histoire antiquaire (racines), l\'histoire critique (briser avec le passé).'
    }
  ],

  keyFigures: [
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'La philosophie de l\'histoire comme réalisation de l\'Esprit' },
    { name: 'Karl Marx', period: '1818-1883', contribution: 'Matérialisme historique et lutte des classes' },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'Critique de l\'histoire historicide et utilisation de l\'histoire' },
    { name: 'Raymond Aron', period: '1905-1983', contribution: 'Philosophie critique de l\'histoire et historicisme' },
    { name: 'Walter Benjamin', period: '1892-1940', contribution: 'L\'histoire comme geste de sauvetage du passé' }
  ],

  examples: [
    'La Révolution française : Événement fondateur de la démocratie moderne. Pour Hegel, elle est étape vers la liberté. Pour Tocqueville, elle est accélération de tendances déjà présentes.',
    'L\'Holocauste : Crime contre l\'humanité. Obligation de mémoire (ne pas oublier) mais aussi problème : comment transmettre sans déformer ?',
    'La chute du mur de Berlin : Fin de la guerre froide. Certains y voient « fin de l\'histoire » (Fukuyama), victoire définitive de la démocratie libérale.'
  ],

  sources: [
    {
      title: 'La Raison dans l\'histoire',
      author: 'Georg Wilhelm Friedrich Hegel',
      year: 1837,
      type: 'BOOK' as const,
      reference: 'Philosophie de l\'histoire',
      quotes: ['La raison gouverne le monde.', 'L\'histoire est progrès de la conscience de la liberté.']
    },
    {
      title: 'Le 18 Brumaire de Louis Bonaparte',
      author: 'Karl Marx',
      year: 1852,
      type: 'BOOK' as const,
      reference: 'Matérialisme historique',
      quotes: ['Les hommes font leur histoire, mais pas dans conditions choisies.', 'L\'histoire de toute société est lutte des classes.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Hegel conçoit-il l\'histoire ?',
      back: 'Pour Hegel, l\'histoire n\'est pas chaos mais réalisation progressive de la liberté et de la raison. L\'Esprit (Geist) se connaît lui-même à travers l\'histoire. Chaque époque est étape nécessaire : l\'Orient (un seul libre), les Grecs et Romains (quelques libres), le monde germanique (tous libres). L\'histoire a sens et direction : progrès vers la conscience de la liberté.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Marx conçoit-il l\'histoire ?',
      back: 'Pour Marx, « l\'histoire de toute société jusqu\'à nos jours est l\'histoire de la lutte des classes ». Le moteur de l\'histoire est contradiction économique entre modes de production et rapports de production. L\'histoire est processus matériel déterminé, pas idées. Le communisme est fin nécessaire de l\'histoire : abolition des classes, réalisation de l\'humain.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Marx résume sa conception de l\'histoire ?',
      back: 'L\'histoire de toute société jusqu\'à nos jours est l\'histoire de la lutte des classes (Le 18 Brumaire de Louis Bonaparte, 1852)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Hegel, l\'histoire est {{progrès de la liberté}}. Pour Marx, elle est {{lutte des classes}}.',
      back: 'progrès de la liberté | lutte des classes',
      difficulty: 2
    }
  ],

  tags: ['histoire', 'temps', 'mémoire', 'progrès', 'hégel', 'marx', 'sens de l\'histoire', 'historicisme', 'destin', 'providence']
};
