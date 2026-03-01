/**
 * Présocratique - Philosophical Movement Data
 * Premier mouvement philosophique grec (VIe-Ve siècle av. J.-C.)
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

export const presocratique: MovementData = {
  id: 'presocratique',
  name: "Présocratique",
  slug: 'presocratique',
  category: 'philosophie-antique',

  description: `Premier mouvement philosophique de la tradition occidentale, les penseurs présocratiques (VIe-Ve siècle av. J.-C.) ont opéré une révolution intellectuelle majeure en proposant les premières explications naturalistes et rationnelles du monde, rompant avec les récits mythologiques traditionnels.

Le terme "présocratique", forgé par Hermann Diels au XIXe siècle, regroupe des penseurs qui ont vécu avant Socrate ou indépendamment de sa tradition. Malgré son imprécision historique, ce terme demeure utile pour désigner cette période fondatrice où se posent les questions philosophiques fondamentales : quelle est l'archè (principe premier) de toutes choses ? Comment expliquer l'ordre du cosmos ? Comment penser le changement et la multiplicité ?

Les présocratiques se divisent en plusieurs écoles : l'école de Milet (Thalès, Anaximandre, Anaximène) qui cherche un principe matériel unique ; les pythagoriciens qui découvrent les nombres comme structure du réel ; Héraclite qui affirme que tout devient ; les éléatiques (Parménide, Zénon) qui nient le changement ; les pluralistes (Empédocle, Anaxagore, les atomistes) qui proposent des principes multiples.

Ce mouvement pose les fondements de la philosophie et de la science occidentales : distinction entre nature et convention, opposition de la raison et des sens, débats sur l'être et le devenir, invention de la cosmologie rationnelle, des mathématiques et de la physique. Platon et Aristote se construiront en dialogue critique avec les présocratiques, dont ils systématiseront et critiqueront les thèses.`,

  shortDefinition: "Premiers philosophes grecs cherchant le principe naturel de l'univers, rupture avec le mythe",

  period: "VIIe-Ve siècle av. J.-C. (env. -585 à -450)",

  origins: {
    context: "Émergence dans les cités grecques d'Asie Mineure (Ionie) et de Grande Grèce, contexte de colonisation, de développement du commerce, de contacts avec l'Égypte et la Mésopotamie. Passage du mythe à la raison (logos). Premières explications naturalistes des phénomènes cosmologiques.",
    predecessors: [
      "Mythologie grecque - Explications théogoniques du monde (Hésiode)",
      "Sagesse égyptienne - Mathématiques, astronomie, architecture",
      "Mathématiques babyloniennes - Calculs astronomiques, géométrie",
      "Orphisme - Mystiques, âme, purification"
    ],
    reactionAgainst: [
      "Explication mythologique des phénomènes naturels",
      "Théogonie hésiodique - Origine divine du cosmos",
      "Tradition religieuse traditionnelle"
    ]
  },

  keyPrinciples: [
    "Recherche de l'archè - principe premier de toute réalité",
    "Naturalisme - explication naturelle des phénomènes",
    "Rationalité - le monde est intelligible par la raison",
    "Cosmos ordonné - l'univers a une structure cohérente",
    "Uniformité de la nature - mêmes lois partout",
    "Distinction phusis/nomos - nature vs convention humaine",
    "Debat devenir/être - le changement est-il réel ?"
  ],

  keyPhilosophers: [
    'thales-de-milet',
    'anaximandre',
    'anaximene',
    'pythagore',
    'heraclite',
    'parmenide',
    'zenon-delee',
    'anaxagore',
    'empedocle',
    'democrite'
  ],

  keyConcepts: [
    'arche',
    'cosmos',
    'physis',
    'logos',
    'apeiron',
    'devenir',
    'etre',
    'atomisme',
    'nombre',
    'elements'
  ],

  variations: [
    {
      name: "École de Milet",
      description: "Thalès, Anaximandre, Anaximène - Recherche d'un principe matériel unique (eau, apeiron, air). Cosmogonies naturalistes, première cartes géographiques, explications rationnelles des phénomènes célestes.",
      philosophers: ['thales-de-milet', 'anaximandre', 'anaximene']
    },
    {
      name: "Pythagorisme",
      description: "Pythagore - 'Tout est nombre'. Mathématiques comme structure du réel, harmonie des sphères, métempsychose. Communauté de vie religieuse et philosophique.",
      philosophers: ['pythagore']
    },
    {
      name: "Héraclitéisme",
      description: "Héraclite - 'Tout s'écoule'. Le feu comme archè, logos comme loi cosmique, unité des contraires, devenir perpétuel comme réalité fondamentale.",
      philosophers: ['heraclite']
    },
    {
      name: "Éléatisme",
      description: "Parménide, Zénon - L'être est immobile et un. Le changement est illusoire. Arguments logiques contre le mouvement (paradoxes de Zénon).",
      philosophers: ['parmenide', 'zenon-delee']
    },
    {
      name: "Pluralistes",
      description: "Empédocle (quatre éléments), Anaxagore (particules porteuses de formes), Démocrite (atomes et vide). Multiplicité de principes pour expliquer la diversité du réel.",
      philosophers: ['empedocle', 'anaxagore', 'democrite']
    }
  ],

  criticisms: [
    "Dogmatisme - affirmation de principes sans démonstration rigoureuse",
    "Naïveté scientifique - théories physiques dépassées",
    "Manque de méthode - arguments peu systématiques",
    "Contradictions entre écoles - pas d'unité doctrinale",
    "Problème du changement - Éléates contre Héraclite"
  ],

  influence: {
    on: [
      "Platon - Théorie des Idées, critique des présocratiques",
      "Aristote - Métaphysique, physique, logique en réponse",
      "Stoïcisme - Cosmos rationnel, logos, éléments",
      "Néo-platonisme - L'Un, l'êmanation",
      "Science moderne - Premières explications naturalistes",
      "Philosophie médiévale - Transmission arabe et latine"
    ],
    in: [
      "Grèce antique - Athènes, Ionie, Grande Grèce",
      "Empire romain - Transmission via Cicéron, Sénèque",
      "Monde arabe - Traductions et commentaires",
      "Europe médiévale - Redécouverte via Arabes"
    ]
  },

  metadata: {
    representativeWorks: [
      "Sur la nature - Anaximandre (-570)",
      "De la nature - Héraclite (-500)",
      "De la nature - Parménide (-480)",
      "Traité d'astronomie - Thalès (-580)",
      "Fragments - Démocrite"
    ],
    relatedMovements: [
      "Platonisme",
      "Aristotélisme",
      "Stoïcisme",
      "Néo-platonisme",
      "Atomisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const presocratiquePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'thales-de-milet',
    role: "Père de la philosophie occidentale",
    contribution: `Premier philosophe connu, initiateur de la rupture avec le mythe. Postule l'eau comme archè, premier principe matériel unique. Introduit le naturalisme : les phénomènes naturels ont des causes naturelles. Mathématicien et astronome : théorème de Thalès, prédiction d'éclipse de 585 av. J.-C. Pose les principes d'unité du monde et d'intelligibilité par la raison. Sa méthode d'explication rationnelle fonde la philosophie et la science occidentales.`
  },
  {
    philosopherSlug: 'anaximandre',
    role: \"Cosmologue et métaphysicien\",
    contribution: `Disciple de Thalès, dépasse le matérialisme en postulant l'apeiron (indéfini/infini) comme archè. Principe abstrait, indéterminé, englobant les contraires. Première cosmologie scientifique : Terre cylindrique flottant librement, sans support. Première carte géographique. Introduit la justice cosmique (les choses se font justice selon l'ordre du temps) et la nécessité (ananke).`
  },
  {
    philosopherSlug: 'pythagore',
    role: \"Fondateur de l'école pythagoricienne",
    contribution: `Thèse 'tout est nombre' : les nombres sont principes constitutifs de la réalité. Découverte des rapports musicaux comme nombres, harmonie des sphères. Métempsychose (transmigration des âmes), communauté de vie avec règles strictes. Quadrivium (arithmétique, géométrie, musique, astronomie). Influence immense sur Platon, le néo-platonisme et toute la philosophie des mathématiques.`
  },
  {
    philosopherSlug: 'heraclite',
    role: "Philosophe du devenir et du logos",
    contribution: `Le feu comme archè symbole du changement perpétuel. 'Tout s'écoule', 'on ne se baigne jamais deux fois dans le même fleuve'. Logos comme principe d'ordre universel, raison cosmique et humaine. Unité des contraires dans une harmonie cachée. Guerre comme père de toutes choses. Style aphoristique et paradoxal. Influence sur stoïcisme (logos, feu), Hegel (dialectique), Nietzsche (devenir).`
  },
  {
    philosopherSlug: 'parmenide',
    role: "Fondateur de l'ontologie et de l'école éléatique",
    contribution: `Thèse radicale : l'être est, le non-être n'est pas. L'être est un, éternel, immobile, indivisible. Le changement et le mouvement sont illusoires. Primauté absolue la raison sur les sens. Premier usage systématique de l'argumentation logique et déductive. Fonde l'ontologie comme discipline. Influence déterminante sur Platon (théorie des Idées) et toute la philosophie occidentale.`
  }
];
