/**
 * Idéalisme Allemand - Philosophical Movement Data
 * Courant philosophique allemand de la fin du XVIIIe et du XIXe siècle, de Kant à Hegel
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

export const idealismeAllemand: MovementData = {
  id: 'idealisme-allemand',
  name: "Idéalisme Allemand",
  slug: 'idealisme-allemand',
  category: 'philosophie-moderne',

  description: `Courant philosophique allemand de la fin du XVIIIe et du XIXe siècle, de Kant à Hegel, caractérisé par l'analyse des conditions de possibilité de l'expérience, la primauté du sujet et l'identification du réel et du rationnel. L'idéalisme allemand représente l'apogée de la philosophie moderne et l'une des constructions les plus ambitieuses de l'histoire de la pensée.

L'idéalisme allemand naît dans un contexte de révolution philosophique initiée par Kant. La Critique de la raison pure (1781) propose une "révolution copernicienne" : ce ne sont plus les connaissances qui doivent se régler sur les objets, mais les objets sur les connaissances. Le sujet n'est plus un réceptacle passif mais une activité structurante qui organise l'expérience selon des formes a priori (espace, temps, catégories).

Kant inaugure l'idéalisme transcendantal : les phénomènes (les choses telles qu'elles nous apparaissent) sont structurés par le sujet, mais les choses en soi (noumènes) restent inconnaissables. Cette dichotomie laisse un "monde en dehors" inaccessible, ce qui va provoquer les réactions des successeurs de Kant.

Fichte tente de surmonter cette dichotomie en déduisant toute la réalité à partir du Moi absolu. Le Moi se pose lui-même (thèse), s'oppose à un Non-Moi (antithèse), et se réconcilie dans la synthèse. L'idéalisme fichtéen est un idéalisme moral : le Moi doit s'efforcer d'atteindre l'absolu par l'action morale.

Schelling propose un idéalisme de la nature : la nature est esprit invisible, l'esprit est nature visible. L'absolu est l'identité indifférenciée de l'esprit et de la nature. Schelling développe une philosophie de l'identité, puis une philosophie de la révélation (âge de la raison, âge de l'histoire, âge de la révélation).

Hegel réalise la synthèse ultime de l'idéalisme allemand. Pour lui, le réel est rationnel et le rationnel est réel. L'absolu se réalise historiquement à travers le mouvement de la dialectique : thèse, antithèse, synthèse. L'histoire universelle est le progrès de la conscience de la liberté : l'Orient (un seul libre), les Grecs et Romains (quelques-uns libres), le monde germanique (tous libres). La philosophie hégélienne est un système total englobant logique, nature, esprit, histoire, art, religion, philosophie.

L'idéalisme allemand a une influence immense. Il inspire le romantisme, le marxisme (qui inverse l'idéalisme en matérialisme), l'existentialisme (qui réagit contre), la phénoménologie (Husserl, Heidegger), et même la philosophie analytique (via la réception de Kant). Il reste l'un des sommets de la pensée philosophique, par son ambition, sa rigueur et sa puissance systématique.`,

  shortDefinition: "Le sujet comme constitutif du réel - de la révolution copernicienne de Kant à l'absolu hégélien",

  period: "Fin XVIIIe - XIXe siècle (1781-1831)",

  origins: {
    context: "Aufklärung allemande (Lumières), influence de Rousseau et de la Révolution française. Réaction contre le rationalisme dogmatique et l'empirisme sceptique. Kant propose une voie médiane. Contexte culturel du romantisme (Schiller, Goethe, Hölderlin).",
    predecessors: [
      "Kant - Fondateur de l'idéalisme transcendantal",
      "Fichte - Idéalisme subjectif du Moi absolu",
      "Schelling - Idéalisme objectif de la nature",
      "Hegel - Idéalisme absolu de l'esprit",
      "Leibniz - Monadologie, harmonie préétablie",
      "Spinoza - Monisme, déterminisme"
    ],
    reactionAgainst: [
      "Rationalisme dogmatique - Leibniz, Wolff",
      "Empirisme sceptique - Hume",
      "Dualisme cartésien - âme et corps comme substances séparées",
      "Métaphysique traditionnelle - Kant la critique comme \"dogmatisme\"",
      "Matérialisme - l'âme réduite à la matière",
      "Positivisme - réduction du réel au sensible"
    ]
  },

  keyPrinciples: [
    "Le sujet est constitutif de l'expérience",
    "Les formes a priori de la sensibilité et de l'entendement structurent le réel",
    "La chose en soi est inaccessible (Kant) ou surmontable (Fichte, Schelling, Hegel)",
    "L'absolu se réalise dans l'histoire (Hegel)",
    "La dialectique est la méthode de progression de la pensée et du réel",
    "Le rationnel est réel et le réel est rationnel (Hegel)",
    "La liberté est le sens de l'histoire (progrès de la conscience de la liberté)",
    "L'esprit (Geist) est la réalité ultime",
    "La philosophie est son temps saisi dans la pensée (Hegel)",
    "L'art, la religion et la philosophie sont les modes de l'absolu"
  ],

  keyPhilosophers: [
    'immanuel-kant',
    'johann-fichte',
    'friedrich-schelling',
    'georg-wilhelm-friedrich-hegel',
    'friedrich-schlegel'
  ],

  keyConcepts: [
    'idealisme-transcendantal',
    'chose-en-soi',
    'phenomene',
    'categories',
    'moi-absolu',
    'non-moi',
    'identite',
    'dialectique',
    'absolu',
    'esprit',
    'histoire',
    'liberte',
    'raison',
    'desir-reconnaissance'
  ],

  variations: [
    {
      name: "Idéalisme transcendantal (Kant)",
      description: "Kant - Révolution copernicienne : le sujet structure l'expérience. Phénomènes vs choses en soi. Espace et temps comme formes a priori de la sensibilité. Catégories de l'entendement. Idéalisme empirique, réalisme transcendantal.",
      philosophers: ['immanuel-kant']
    },
    {
      name: "Idéalisme subjectif (Fichte)",
      description: "Fichte - Le Moi absolu se pose lui-même et pose le Non-Moi. Idéalisme moral : l'action morale réalise l'absolu. Wissenschaftslehre (doctrine de la science). Liberté comme fondement.",
      philosophers: ['johann-fichte']
    },
    {
      name: "Idéalisme objectif (Schelling)",
      description: "Schelling - Nature et esprit comme deux aspects de l'absolu. Philosophie de l'identité : l'absolu est identité indifférenciée. Philosophie de la révélation : art, religion, philosophie.",
      philosophers: ['friedrich-schelling']
    },
    {
      name: "Idéalisme absolu (Hegel)",
      description: "Hegel - L'absolu est esprit qui se réalise historiquement. Dialectique : thèse, antithèse, synthèse. Phénoménologie de l'esprit, logique, philosophie de la nature, philosophie de l'esprit, philosophie de l'histoire.",
      philosophers: ['georg-wilhelm-friedrich-hegel']
    }
  ],

  criticisms: [
    "Abstraction excessive - système trop abstrait, détaché du réel concret",
    "Panlogisme - tout est rationnel, même l'irrationnel",
    "Historicisme - tout est relatif à l'histoire, pas de vérité éternelle",
    "Élitisme - philosophie pour initiés, jargon obscur",
    "Totalitarisme implicite - l'État est la réalisation de la liberté",
    "Négation de l'individu - l'individu est absorbé dans l'absolu",
    "Mysticisme rationalisé - l'absolu reste un concept mystérieux",
    "Autodestruction - le système nie ses propres présupposés",
    "Conservatisme - la philosophie justifie l'ordre établi comme rationnel"
  ],

  influence: {
    on: [
      "Marxisme - Marx inverse l'idéalisme en matérialisme",
      "Existentialisme - réaction contre le système hégélien (Kierkegaard)",
      "Phénoménologie - Husserl reprend l'idée d'intentionalité",
      "Philosophie analytique - réception de Kant (Frege, Strawson)",
      "Romantisme - inspiration artistique et littéraire",
      "Thologie - théologie dialectique (Barth), théologie de la libération",
      "Psychanalyse - Freud s'inspire de la dialectique",
      "Postmodernisme - critique du système totalisant"
    ],
    in: [
      "Allemagne - philosophie dominante jusqu'en 1831",
      "France - réception via Victor Cousin, éclectisme",
      "Italie - hégélianisme de Croce, Gentile",
      "Angleterre - British Idealism (Bradley, Green)",
      "Amérique - St. Louis Hegelians, Royce",
      "Russie - critique religieuse (Solovyov, Berdyaev)"
    ]
  },

  metadata: {
    representativeWorks: [
      "Critique de la raison pure - Kant (1781, 2e éd. 1787)",
      "Critique de la raison pratique - Kant (1788)",
      "Fondements de la métaphysique des mœurs - Kant (1785)",
      "Doctrine de la science - Fichte (1794-1795)",
      "Système de l'idéalisme transcendantal - Schelling (1800)",
      "Philosophie de la révélation - Schelling (1841-1843)",
      "Phénoménologie de l'esprit - Hegel (1807)",
      "Science de la logique - Hegel (1812-1816)",
      "Encyclopédie des sciences philosophiques - Hegel (1817, 3e éd. 1830)",
      "Principes de la philosophie du droit - Hegel (1820)"
    ],
    relatedMovements: [
      "Romantisme",
      "Marxisme",
      "Existentialisme",
      "Phénoménologie",
      "Philosophie analytique",
      "Postmodernisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const idealismeAllemandPhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'immanuel-kant',
    role: "Fondateur de l'idéalisme transcendantal",
    contribution: `Philosophe allemand de Königsberg (1724-1804), figure majeure de la philosophie moderne. "Révolution copernicienne" : ce ne sont plus les connaissances qui doivent se régler sur les objets, mais les objets sur les connaissances. Critique de la raison pure (1781) : distinction phénomènes/choses en soi. Espace et temps comme formes a priori de la sensibilité (non empiriques, pas concepts). Catégories de l'entendement (quantité, qualité, relation, modalité) qui structurent l'expérience. Idéalisme transcendantal : les objets de l'expérience sont des phénomènes structurés par le sujet, mais les choses en soi (noumènes) restent inconnaissables. Limites de la raison : âme, monde, Dieu sont des idées régulatives, pas objets de connaissance possible. Critique de la raison pratique (1788) : autonomie de la volonté morale, impératif catégorique ("agis selon la maxime qui peut être érigée en loi universelle"). Raison pratique postule liberté, immortalité de l'âme, Dieu comme conditions du devoir être. Critique de la faculté de juger (1790) : jugement esthétique (beauté comme finalité sans concept), jugement téléologique (finalité dans la nature). Kant réalise la synthèse entre rationalisme et empirisme, héritages épistémologique et moraliste. Influence immense sur toute la philosophie postérieure.
`
  },
  {
    philosopherSlug: 'johann-fichte',
    role: "Idéaliste du Moi absolu",
    contribution: `Philosophe allemand (1762-1814), successeur de Kant à Iéna. Doctrine de la science (Wissenschaftslehre, 1794-1795) : tentative de déduire toute la réalité à partir du Moi. Le Moi absolu se pose lui-même (thèse), s'oppose à un Non-Moi (antithèse), se réconcilie dans la synthèse. Idéalisme subjectif : tout objet n'est que produit de l'activité du Moi. Idéalisme moral : le Non-Moi est posé pour que le Moi puisse s'efforcer de le surmonter par l'action morale. Liberté absolue comme fondement. Fichte interprète Kant de manière radicale : la chose en soi n'existe pas, il n'y a que le Moi et son activité. Conférences sur la destination du savant (1794) : le savant doit éduquer le peuple à la liberté. Contribution à la Révolution française (1793) : défense de la Révolution comme réalisation de la liberté. Fichte est un philosophe de l'action et de la liberté, inspirant le nationalisme allemand (Discours à la nation allemande, 1808) et le romantisme.
`
  },
  {
    philosopherSlug: 'friedrich-schelling',
    role: "Idéaliste de la nature et de l'identité",
    contribution: `Philosophe allemand (1775-1854), figure du romantisme philosophique. Système de l'idéalisme transcendantal (1800) : la nature est esprit invisible, l'esprit est nature visible. Philosophie de la nature (1797-1799) : la nature comme organisme vivant, non machine. Philosophie de l'identité (1801) : l'absolu est identité indifférenciée de l'esprit et de la nature, du sujet et de l'objet. Recherches philosophiques sur l'essence de la liberté humaine (1809) : analyse du mal comme possibilité de la liberté. Philosophie de la révélation (1841-1843) : âge de la raison (mythe), âge de l'histoire (philosophie), âge de la révélation (christianisme). Schelling est un philosophe prolifique et changeant, difficile à classer. Il influence le romantisme (Schleiermacher, Novalis), la théologie (Tillich), l'écologie (vision organique de la nature). Dernier grand représentant de l'idéalisme allemand, il critique le système de Hegel comme négation de l'existence.
`
  },
  {
    philosopherSlug: 'georg-wilhelm-friedrich-hegel',
    role: "Systémateur de l'idéalisme absolu",
    contribution: `Philosophe allemand (1770-1831), le plus grand systémateur de l'idéalisme allemand. "Le réel est rationnel et le rationnel est réel" (Préface des Principes de la philosophie du droit). Dialectique : mouvement de la pensée et du réel par contradictions et dépassement (thèse, antithèse, synthèse - terme non hégélien mais commode). Phénoménologie de l'esprit (1807) : itinéraire de la conscience vers le savoir absolu, dialectique maître/esclave comme moment de la reconnaissance. Science de la logique (1812-1816) : développement de l'absolu comme idée pure (être, néant, devenir, essence, existence, concept). Encyclopédie des sciences philosophiques (1817) : logique, nature, esprit. Philosophie de l'histoire universelle (posthume) : l'histoire comme progrès de la conscience de la liberté - Orient (un seul libre), Grèce et Rome (quelques-uns libres), monde germanique (tous libres). Philosophie de l'art : l'art comme manifestation sensible de l'absolu. Philosophie de la religion : la religion comme représentation de l'absolu, la philosophie comme concept de l'absolu. Hegel construit le système le plus ambitieux de l'histoire de la philosophie, influençant Marx (qui inverse l'idéalisme en matérialisme), Kierkegaard (qui réagit contre), la phénoménologie, l'existentialisme.
`
  },
  {
    philosopherSlug: 'friedrich-schlegel',
    role: "Romantique et critique de l'idéalisme systématique",
    contribution: `Écrivain et philosophe allemand (1772-1829), figure du romantisme d'Iéna. Critique de l'idéalisme systématique de Fichte et Hegel comme trop abstrait et délife. La poésie comme modèle de la philosophie : fragmentaire, ironique, inachevé. "La poésie a une mission plus élevée : elle doit réunir, comme dans un mirour magique, toute l'activité spirituelle et intellectuelle." L'ironie romantique comme conscience de l'impossibilité d'atteindre l'absolu. Le fragment comme forme philosophique appropriée à la modernité. Schlegel critique la prétention hégélienne à un système total, affirmant la pluralité, l'inachèvement, l'ironie. Influence sur le romantisme, la postmodernité (Lyotard).
`
  }
];
