/**
 * Éléatisme - Philosophical Movement Data
 * École philosophique de Grèce antique (Ve siècle av. J.-C.)
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

export const eleatisme: MovementData = {
  id: 'eleatisme',
  name: "Éléatisme",
  slug: 'eleatisme',
  category: 'philosophie-antique',

  description: `École philosophique fondée par Parménide d'Élée dans le sud de l'Italie (Grande Grèce) au Ve siècle av. J.-C. L'éléatisme représente l'une des révolutions les plus radicales de l'histoire de la philosophie, posant une ontologie de l'immutabilité qui défiera toute la pensée postérieure.

Le cœur de la doctrine éléatique est une thèse apparemment simple mais aux conséquences dévastatrices : l'être est, le non-être n'est pas. De ce principe découle la négation de toute réalité du changement, du mouvement, de la multiplicité et de la génération. Ce que nous percevons comme un monde en devenir est pure illusion des sens ; seule la pensée logique peut accéder à la vérité de l'être un, éternel et immobile.

Cette position philosophique est soutenue par des arguments logiques rigoureux, notamment les célèbres paradoxes de Zénon d'Élée. Ces paradoxes (Achille et la tortue, la flèche, le stade, la dichotomie) visent à démontrer que notre croyance au mouvement mène à des contradictions logiques. Si le mouvement est réel, comment une flèche peut-elle atteindre sa cible puisqu'elle doit d'abord parcourir la moitié de la distance, puis la moitié du reste, et ainsi à l'infini ?

L'éléatisme marque un tournant décisif dans l'histoire de la pensée. Il établit la primauté de la raison sur les sens, fonde l'ontologie comme discipline philosophique, et introduit l'argumentation logique comme méthode philosophique par excellence. Platon tentera de concilier l'être immobile de Parménide avec le devenir sensible par sa théorie des Idées. Aristote développera sa métaphysique en réponse aux défis éléatiques, inventant les notions d'acte et de puissance, de substance et d'accident.

L'influence de l'éléatisme s'étend bien au-delà de l'Antiquité. Les stoïciens reprendront la physique du feu, les néo-platoniciens l'Un au-delà de l'être, et la philosophie médiévale se confrontera continuellement à l'héritage parménidien dans sa réflexion sur Dieu et la création.`,

  shortDefinition: \"L'être est un, immobile et éternel - le changement est illusoire",

  period: "VIe-Ve siècle av. J.-C. (env. -515 à -450)",

  origins: {
    context: "Émerge à Élée, colonie grecque du sud de l'Italie, dans un contexte de foisonnement philosophique (Présocratiques, Pythagoriciens). Réaction contre l'héraclitéisme du devenir perpétuel. Influence possible du pythagorisme (mathématiques, immuabilité des vérités).",
    predecessors: [
      "Pythagore - Mathématiques comme vérité éternelle et immuable",
      "Xénophane - Critique des anthropomorphismes divins",
      "Hésiode - Tradition cosmogonique grecque"
    ],
    reactionAgainst: [
      "Héraclitéisme - 'Tout s'écoule', devenir perpétuel comme réalité\",
      \"Pluralistes - Multiplicité de principes et de substances\",
      \"Sensible comme vérité - Refus de l'expérience comme critère de vérité"
    ]
  },

  keyPrinciples: [
    "L'être est, le non-être n'est pas - principe fondamental",
    "Unité de l'être - l'être est un, indivisible",
    "Immutabilité - l'être ne change pas, est éternel\",
    \"Immobilité - le mouvement est impossible\",
    \"Primauté de la raison - seule la pensée accède à la vérité\",
    \"Illusion des sens - le sensible est trompeur\",
    \"Continuité de l'être - aucune lacune, aucun vide",
    "Nécessité logique - impossibilité du non-être"
  ],

  keyPhilosophers: [
    'parmenide',
    'zenon-delee',
    'melissos'
  ],

  keyConcepts: [
    'etre',
    'non-etre',
    'immutabilite',
    'un',
    'paradoxe',
    'logique',
    'raison',
    'sens',
    'illusion',
    'continuite',
    'infinitude',
    'eternite'
  ],

  variations: [
    {
      name: "Ontologie parménidienne",
      description: "Parménide - L'être comme réalité unique, immobile et éternelle. Poème 'De la nature'révélant la voie de la vérité (raison) vs la voie de l'opinion (sens). Distinction radicale entre pensée et sensation.",
      philosophers: ['parmenide']
    },
    {
      name: "Paradoxes de Zénon",
      description: "Zénon d'Élée - Arguments logiques contre le mouvement et la multiplicité. Paradoxes d'Achille et la tortue, la flèche volante, le stade, la dichotomie. Défense de l'unité de l'être par réductio ad absurdum.",
      philosophers: ['zenon-delee']
    },
    {
      name: "Éléatisme radical",
      description: "Mélissos - Systématisation de Parménide. L'être est infini (contrairement à la sphère finie de Parménide), incorporel, inaltéré. Renforcement de l'argumentation contre le mouvement et le changement.",
      philosophers: ['melissos']
    }
  ],

  criticisms: [
    "Contre-intuitif - nie l'évidence du mouvement et du changement\",
    \"Paralysie pratique - si le changement est illusoire, l'action est absurde",
    "Problème de la connaissance - comment connaître l'être illusoire ?\",
    \"Dogmatisme - affirme sans prouver la primauté de la raison\",
    \"Contradiction avec la science moderne - physique du mouvement\",
    \"Circularité - utilise la logique pour prouver la logique\"
  ],

  influence: {
    on: [
      \"Platon - Théorie des Idées comme monde immobile et parfait\",
      \"Aristote - Métaphysique de l'acte et de la puissance en réponse",
      "Stoïcisme - Logos et raison structurante du cosmos",
      "Néo-platonisme - L'Un au-delà de l'être",
      "Philosophie médiévale - Débat sur Dieu et la création",
      "Hegel - Dialectique comme dépassement de l'opposition être/devenir\",
      \"Philosophie analytique - Logique et ontologie\"
    ],
    in: [
      \"Grèce antique - Athènes, Élée, Grande Grèce\",
      \"Empire romain - Transmission via Cicéron\",
      \"Monde arabe - Commentaires d'Averroès",
      "Europe médiévale - Intégration à la théologie",
      "Philosophie moderne - Descartes, Spinoza, Leibniz"
    ]
  },

  metadata: {
    representativeWorks: [
      "De la nature - Parménide (-480)",
      "Paradoxes (sur le mouvement) - Zénon d'Élée (-460)\",
      \"Traité de l'être - Mélissos (-440)"
    ],
    relatedMovements: [
      "Platonisme",
      "Aristotélisme",
      "Présocratique",
      "Néo-platonisme",
      "Stoïcisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const eleatismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'parmenide',
    role: "Fondateur de l'ontologie et de l'école éléatique",
    contribution: `Thèse fondatrice : 'l'être est, le non-être n'est pas'. De ce principe, déduit l'unité, l'immutabilité, l'éternité et l'immobilité de l'être. Le changement sensible est illusion, seule la pensée logique accède à la vérité. Premier philosophe à utiliser systématiquement l'argumentation logique et déductive. Son poème 'De la nature' révèle la vérité via une déesse. Influence déterminante sur toute la philosophie occidentale.`
  },
  {
    philosopherSlug: 'zenon-delee',
    role: "Défenseur logique de l'éléatisme par les paradoxes\",
    contribution: `Élève et amant de Parménide, défend la doctrine par des paradoxes logiques célèbres. Paradoxe d'Achille et la tortue (le plus rapide ne rattrape jamais le plus lent), de la flèche volante (immobile à chaque instant), du stade, de la dichotomie (division à l'infini). Ces paradoxes visent à montrer que le mouvement mène à des contradictions logiques. Inventeur de la dialectique et de la réductio ad absurdum.`
  },
  {
    philosopherSlug: 'melissos',
    role: \"Systématicien de l'éléatisme",
    contribution: `Approfondit et systématise la doctrine parménidienne. Affirme l'infinitude de l'être (contrairement à la sphère finie de Parménide). L'être est incorporel, inaltéré, inengendré et impérissable. Renforce l'argumentation contre le mouvement et le changement. Son œuvre représente l'éléatisme dans sa forme la plus rigoureuse et conséquente.`
  }
];
