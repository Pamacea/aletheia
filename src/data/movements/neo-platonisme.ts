/**
 * Néo-platonisme - Philosophical Movement Data
 * Dernière grande philosophie de l'Antiquité (IIIe-VIe siècle)
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

export const neoPlatonisme: MovementData = {
  id: 'neo-platonisme',
  name: \"Néo-platonisme\",
  slug: 'neo-platonisme',
  category: 'philosophie-antique',

  description: `Dernière grande philosophie de l'Antiquité, le néo-platonisme (IIIe-VIe siècle) représente la synthèse la plus ambitieuse de toute la tradition philosophique grecque, unifiée en un système métaphysique d'une extraordinaire complexité et beauté. Fondé par Plotin, ce mouvement exercera une influence décisive sur toute la philosophie médiévale, chrétienne, juive et musulmane.

Le néo-platonisme pose l'existence d'un principe absolu, l'Un, au-delà de l'être et de la pensée. Cet Un, ineffable et transcendant, se déploie par émanation dans une hiérarchie de réalités : l'Intellect (nous), qui contient les Formes platoniciennes ; l'Âme du monde, qui anime l'univers ; et enfin la matière, dernier degré de réalité, principe du mal comme absence d'être. Tout procède de l'Un par surabondance, comme la lumière du soleil, et tout tend à retourner à l'Un par contemplation et amour.

Cette métaphysique fonde une philosophie de la connaissance et de la vie morale. La connaissance véritable n'est pas discursive mais contemplative : l'âme se retourne vers l'Intellect dont elle procède, et au-delà vers l'Un. Ce 'retour' (épistrophè) se fait par purification, pratique des vertus, et finalement union mystique où le sujet s'abolit dans l'objet. Plotin décrit cette expérience dans l'Ennéade VI, 9 : 'La vision de l'Un', état d'extase où l'âme s'unit à son principe.

Le néo-platonisme se diversifie après Plotin. Porphyre systématise l'enseignement du maître. Jamblique développe la théurgie, pratique rituelle pour s'unir au divin. Proclus, à Athènes, construit le système néo-platonicien le plus complet. Damascius, dernier scolarque d'Athènes, ferme l'Académie en 529, marquant symboliquement la fin de la philosophie antique.

L'influence du néo-platonisme est immense et durable. Sur le christianisme : saint Augustin convertit au néo-platonisme avant de devenir chrétien, et toute la théologie médiévale (Pseudo-Denys, Scot Erigène, Thomas d'Aquin) s'en inspire. Sur l'islam : Al-Farabi, Avicenne, Ibn Arabi. Sur le judaïsme : Maïmonide. À la Renaissance, Marsile Ficin traduit Plotin et crée l'Académie platonicienne de Florence, diffusant le néo-platonisme dans toute l'Europe.`,

  shortDefinition: "L'Un au-delà de l'être, émanation hiérarchique et retour mystique à l'origine",

  period: "IIIe-VIe siècle (200-529)",

  origins: {
    context: "Crise de l'Empire romain, montée du christianisme. Alexandrie comme centre intellectuel, Athènes comme bastion païen. Décadence du stoïcisme, besoin de renouveau philosophique spirituel. Syncrétisme philosophique et religieux.",
    predecessors: [
      "Platon - Théorie des Idées, Bien au-delà de l'être",
      "Aristote - Métaphysique de l'acte pur",
      "Stoïcisme - Logos et âme du monde",
      "Pythagorisme - Nombres et transcendances",
      "Hermétisme - Écrits hermétiques d'Alexandrie",
      "Gnosticisme - Dualisme, salut par connaissance"
    ],
    reactionAgainst: [
      "Christianisme - Révélation contre raison païenne",
      "Matérialisme épicurien - Refus du transcendant",
      "Scepticisme - Refus des affirmations métaphysiques",
      "Aristotélisme purement rationnel - Manque de dimension mystique"
    ]
  },

  keyPrinciples: [
    "L'Un - principe absolu au-delà de l'être et de la pensée",
    "Émanation - procession par surabondance, pas création",
    "Hiérarchie des hypostases - Un, Intellect, Âme, Nature",
    "Retour (épistrophè) - tout tend vers l'Un",
    "Contemplation - mode de vie et de connaissance",
    "Matière comme non-être - principe de passivité et de mal",
    "Union mystique - extinction de la subjectivité",
    "Purification et vertus - préparation à l'ascension",
    "Théurgie - rites pour s'unir au divin (Jamblique)"
  ],

  keyPhilosophers: [
    'plotin',
    'porphyre',
    'jamblique',
    'proclus',
    'damascius',
    'pseudo-denys',
    'maitre-eckhart',
    'nicolas-de-cues',
    'marsile-ficin',
    'pic-della-mirandole'
  ],

  keyConcepts: [
    'un',
    'henades',
    'emanation',
    'hypostase',
    'nous',
    'ame-du-monde',
    'matiere',
    'contemplation',
    'extase',
    'retour',
    'theurgie'
  ],

  variations: [
    {
      name: "Néo-platonisme plotinien",
      description: "Plotin - 'Ennéades'. L'Un ineffable, émanation Un-Intellect-Âme-Matière. Retour par contemplation. Accent sur l'expérience mystique et l'ascension de l'âme. Mystique apophatique (négative).",
      philosophers: ['plotin']
    },
    {
      name: "Néo-platonisme syrien",
      description: "Jamblique - Emphase sur la théurgie (rites divins). Hiérarchie plus complexe des principes. Dimension religieuse et rituelle plus marquée. Défense des oracles chaldaïques.",
      philosophers: ['jamblique']
    },
    {
      name: "Néo-platonisme athénien",
      description: "Proclus, Damascius - Système extrêmement complexe. 'Éléments de théologie'de Proclus. Henades (unites), triades, procession,Stay, retour. Damascius pousse la réflexion jusqu'à l'aporie.",
      philosophers: ['proclus', 'damascius']
    },
    {
      name: "Pseudo-Denys et chrétienté",
      description: "Pseudo-Denys l'Aréopagite - Adaptation chrétienne. Théologie négative, hiérarchie céleste. Influence sur toute la théologie médiévale, Scot Erigène, Thomas d'Aquin.",
      philosophers: ['pseudo-denys']
    },
    {
      name: "Renaissance florentine",
      description: "Marsile Ficin, Pic de la Mirandole - Traduction de Plotin, Académie platonicienne. Synthèse christianisme-néo-platonisme. 'Théologie platonicienne'. Influence sur l'art, la poésie, la philosophie de la Renaissance.",
      philosophers: ['marsile-ficin', 'pic-della-mirandole']
    }
  ],

  criticisms: [
    "Obscurité - système complexe, termes techniques",
    "Mysticisme irrationnel - expérience au-delà de la raison",
    "Incompatibilité avec le christianisme - émanation vs création",
    "Élitisme - voie pour quelques initiés",
    "Contemptus mundi - mépris du monde matériel",
    "Escapisme - retraite hors du monde",
    "Synchrétisme confus - mélange de philosophie et de religion"
  ],

  influence: {
    on: [
      "Christianisme - Saint Augustin, Pseudo-Denys, théologie mystique",
      "Islam - Al-Farabi, Avicenna, Sohrawardi, Ibn Arabi",
      "Judaïsme - Maïmonide, Kabbale",
      "Philosophie médiévale - Scot Erigène, Bonaventure, Eckhart",
      "Renaissance - Ficin, Pic de la Mirandole, Giordano Bruno",
      "Romantisme - Schelling, Hegel, Novalis",
      "Philosophie de la religion - toujours actuel"
    ],
    in: [
      "Alexandrie - Centre intellectuel",
      "Rome - Porphyre",
      "Syrie - Jamblique, Apamée",
      "Athènes - École jusqu'en 529",
      "Europe médiévale - Via traductions latines et arabes",
      "Florence - Renaissance néo-platonicienne"
    ]
  },

  metadata: {
    representativeWorks: [
      "Ennéades - Plotin (270)",
      "Isagoge - Porphyre (270)",
      "Mystères d'Égypte - Jamblique (300)",
      "Éléments de théologie - Proclus (450)",
      "Traité des principes - Damascius (520)",
      "Théologie platonicienne - Marsile Ficin (1482)"
    ],
    relatedMovements: [
      "Platonisme",
      "Christianisme",
      "Mysticisme",
      "Kabbale",
      "Soufisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const neoPlatonismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'plotin',
    role: "Fondateur du néo-platonisme",
    contribution: `Philosophe (204-270), élève d'Ammonius Saccas. Écrit les 'Ennéades', réunies et éditées par Porphyre. Théorie de l'Un ineffable, principe au-delà de l'être. Émanation en trois hypostases : Un, Intellect (contenant les Idées), Âme du monde. Tout retourne à l'Un par contemplation. Expérience mystique de l'union à l'Un décrite dans Enn. VI, 9. 'La fuite du seul vers le seul'. Vie ascétique, indifférence au corps. Influence immense sur toute la tradition mystique occidentale et orientale.`
  },
  {
    philosopherSlug: 'proclus',
    role: "Systématicien du néo-platonisme athénien",
    contribution: "Scolarque de l'Académie d'Athènes (412-485). Auteur des 'Éléments de théologie', ouvrage systématique définissant 211 propositions métaphysiques. Développement de la théorie des henades (unites multiples), des triades, des movements de procession, stay (μονή) et retour. Influence immense sur la théologie byzantine et latine (Pseudo-Denys, Scot Erigène). Commentaires de Platon, Aristote, Oracles chaldaïques."
  },
  {
    philosopherSlug: 'pseudo-denys',
    role: "Adaptateur chrétien du néo-platonisme",
    contribution: "Auteur pseudo-épigraphique (vers 500) se présentant comme Denys l'Aréopagite. 'Noms divins', 'Théologie mystique', 'Hiérarchie céleste'. Traduit le néo-platonisme en langage chrétien : Dieu comme 'sur-être', théologie négative, hiérarchie des anges. Influence fondamentale sur toute la théologie médiévale, orthodoxe et catholique. Jean Scot Erigène, Thomas d'Aquin, Maître Eckhart, saint Jean de la Croix."
  }
];
