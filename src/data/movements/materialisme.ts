/**
 * Matérialisme - Philosophical Movement Data
 * Courant philosophique affirmant la primauté de la matière sur l'esprit
 */

export interface MovementData {
  id: string;
  name: string;
  slug: string;
  category?: string;
  description: string;
  shortDefinition: string;
  period: string;
  origins: {
    context: string;
    predecessors: string[];
    reactionAgainst: string[];
  };
  keyPrinciples: string[];
  keyPhilosophers: string[];
  keyConcepts: string[];
  variations: Array<{
    name: string;
    description: string;
    philosophers: string[];
  }>;
  criticisms: string[];
  influence: {
    on: string[];
    in: string[];
  };
  metadata: {
    representativeWorks: string[];
    relatedMovements: string[];
  };
}

export interface PhilosopherLink {
  philosopherSlug: string;
  role: string;
  contribution: string;
}

export const materialisme: MovementData = {
  id: 'materialisme',
  name: \"Matérialisme\",
  slug: 'materialisme',
  category: 'philosophie-moderne',

  description: `Courant philosophique affirmant que la matière est la substance fondamentale de la réalité, et que tout ce qui existe (y compris la conscience, l'esprit, les idées) dérive de processus matériels. Le matérialisme s'oppose à l'idéalisme et au dualisme, et a pris des formes très diverses selon les époques.

Le matérialisme antique naît avec Démocrite (-460) et sa théorie des atomes : tout est composé d'atomes indivisibles se mouvant dans le vide. Épicure reprend cette théorie en l'intégrant à une éthique du plaisir. Lucrèce la diffuse à Rome dans 'De la nature des choses'. Ce matérialisme ancien est mécaniste : le monde s'explique par des collisions d'atomes, sans finalité.

Le matérialisme renaît à la Renaissance avec l'averroïsme latin (Pomponazzi) et les penseurs de la nature (Télése, Bruno). Au XVIIe siècle, Hobbes défend un matérialisme mécaniste radical : tout, y compris la pensée, est mouvement de matière. Au XVIIIe siècle, La Mettrie ('L'Homme machine'), d'Holbach ('Système de la nature') et Diderot développent un matérialisme athée, s'opposant à la religion et au dualisme cartésien.

Le matérialisme se transforme avec Marx qui, inspiré de Feuerbach, développe le matérialisme historique : la conscience est déterminée par l'être social, l'infrastructure économique conditionne la superstructure idéologique. Engels systématise cette doctrine. Lénine en donne une version dogmatique ('Matérialisme et empiriocriticisme').

Au XXe siècle, le matérialisme se renouvelle avec le physicalisme scientifique (tout est réductible à la physique) et le matérialisme éliminatif (les états mentaux n'existent pas, seuls existent les états neurophysiologiques). Le matérialisme reste une position majeure en philosophie de l'esprit, en philosophie des sciences et dans les débats sur la conscience.`,

  shortDefinition: "La matière est le principe fondamental de toute réalité, y compris de la conscience",

  period: "Antiquité - Present (-460 à aujourd'hui)",

  origins: {
    context: "Réaction contre l'idéalisme platonicien et aristotélicien, contre le dualisme corps/âme et contre les explications religieuses. Essor de la science moderne (physique, biologie) montrant que les phénomènes ont des causes naturelles.",
    predecessors: [
      "Démocrite - Atomisme antique",
      "Épicure - Matérialisme éthique",
      "Hobbes - Mécanisme matérialiste",
      "La Mettrie - Homme machine"
    ],
    reactionAgainst: [
      "Idéalisme - L'esprit comme réalité primaire",
      "Dualisme - Âme et corps comme substances distinctes",
      "Religion - Création divine, âme immortelle",
      "Spiritualisme - L'esprit irréductible à la matière"
    ]
  },

  keyPrinciples: [
    "Primauté de la matière - la matière est la substance fondamentale",
    "Réductionnisme - tout est réductible aux processus matériels",
    "Mécanisme - les phénomènes s'expliquent par causes efficientes",
    "Continuité nature - pas de rupture entre matière et esprit",
    "Athéisme - rejection du surnaturel",
    "Scientisme - la science comme mode de connaissance unique",
    "Physicalisme - tout est physique ou réductible au physique"
  ],

  keyPhilosophers: [
    'democrite',
    'la-mettrie',
    'd-holbach',
    'diderot',
    'feuerbach',
    'karl-marx',
    'engels',
    'lenine'
  ],

  keyConcepts: [
    'matiere',
    'atome',
    'physique',
    'reductionnisme',
    'mecanisme',
    'determinisme',
    'atheisme',
    'natura'
  ],

  variations: [
    {
      name: "Matérialisme antique",
      description: "Démocrite, Épicure, Lucrèce - Atomisme. Tout est atomes et vide. L'âme matérielle, mortelle. Matérialisme mécaniste sans finalité.",
      philosophers: ['democrite', 'epicure', 'lucrece']
    },
    {
      name: "Matérialisme mécaniste",
      description: "Hobbes, La Mettrie - Tout est mouvement de matière. L'homme comme machine. Pensée comme mouvement cérébral. Déterminisme rigoureux.",
      philosophers: ['thomas-hobbes', 'la-mettrie']
    },
    {
      name: "Matérialisme des Lumières",
      description: "Diderot, d'Holbach - Athéisme militant. Critique de la religion. 'Système de la nature'. Matérialisme scientifique et politique.",
      philosophers: ['diderot', 'd-holbach']
    },
    {
      name: "Matérialisme historique",
      description: "Marx, Engels - La conscience déterminée par l'être social. Infrastructure économique et superstructure idéologique. Matérialisme dialectique.",
      philosophers: ['karl-marx', 'engels']
    },
    {
      name: "Physicalisme contemporain",
      description: "Matérialisme scientifique moderne. Tout est physique ou réductible au physique. Identité psychophysique, matérialisme éliminatif."
    }
  ],

  criticisms: [
    "Problème de la conscience - Comment la matière produit-elle la conscience ?",
    "Réductionnisme excessif - Négation de la spécificité du mental",
    "Nihilisme - Si tout est matière, où est le sens ?",
    "Déterminisme - Plus de liberté si tout est matériel",
    "Explication causale insuffisante - Les raisons ne sont pas des causes",
    "Gap explicatif - On ne comprend pas comment le cerveau produit la pensée"
  ],

  influence: {
    on: [
      "Marxisme - Matérialisme historique",
      "Science moderne - Méthode naturaliste",
      "Athéisme contemporain - Critique de la religion",
      "Philosophie de l'esprit - Physicalisme, fonctionnalisme",
      "Neurosciences - Approche matérialiste du cerveau",
      "Psychologie comportementaliste - Refus du mental"
    ],
    in: [
      "France - Lumières, matérialisme du XVIIIe",
      "Allemagne - Marxisme",
      "Russie - Marxisme-léninisme",
      "Angleterre - Empirisme, science",
      "États-Unis - Philosophie analytique"
    ]
  },

  metadata: {
    representativeWorks: [
      "De la nature des choses - Lucrèce (-55)",
      "L'Homme machine - La Mettrie (1748)",
      "Système de la nature - d'Holbach (1770)",
      "L'Essence du christianisme - Feuerbach (1841)",
      "L'Idéologie allemande - Marx et Engels (1846)",
      "Matérialisme et empiriocriticisme - Lénine (1909)"
    ],
    relatedMovements: [
      "Atomisme",
      "Marxisme",
      "Naturalisme",
      "Physicalisme",
      "Athéisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const materialismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'democrite',
    role: "Père du matérialisme atomiste",
    contribution: "Philosophe grec (-460), avec Leucippe crée l'atomisme. Tout est composé d'atomes indivisibles se mouvant dans le vide infini. Rien ne se crée, rien ne se perd, tout se transforme. L'âme est composée d'atomes de feu, mortelle. Théorie des eidola (simulacres) pour expliquer la perception. Matérialisme mécaniste, sans providence ni finalité."
  },
  {
    philosopherSlug: 'karl-marx',
    role: "Fondateur du matérialisme historique",
    contribution: "Inspiré de Feuerbach et Hegel, développe le matérialisme historique. La conscience n'est pas déterminée par des idées mais par l'être social. L'infrastructure économique (mode de production) conditionne la superstructure idéologique (politique, religion, philosophie). 'Ce n'est pas la conscience des hommes qui détermine leur être, c'est inversement leur être social qui détermine leur conscience'. Matérialisme dialectique : la matière se transforme selon les lois de la dialectique."
  }
];
