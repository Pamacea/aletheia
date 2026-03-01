/**
 * Structuralisme - Philosophical Movement Data
 * Courant intellectuel du XXe siècle centré sur les structures sous-jacentes
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

export const structuralisme: MovementData = {
  id: 'structuralisme',
  name: "Structuralisme",
  slug: 'structuralisme',
  category: 'philosophie-contemporaine',

  description: `Courant intellectuel dominant en France dans les années 1950-1960, affirmant que les phénomènes humains (langage, culture, pensée) sont structurés comme un langage et qu'il faut rechercher les structures inconscientes sous-jacentes plutôt que les consciences ou les intentions.

Le structuralisme naît avec Ferdinand de Saussure (1857-1913), fondateur de la linguistique moderne. Dans le 'Cours de linguistique générale' (1916), Saussure affirme que la langue est un système de signes où chaque signe tire sa valeur de sa différence avec les autres. Le sens ne vient pas de la référence au monde mais de la position dans la structure.

Claude Lévi-Strauss (1908-2009) étend le structuralisme à l'anthropologie dans 'Tristes tropiques' (1955) et 'Anthropologie structurale' (1958). Les mythes, les systèmes de parenté, les classifications culturelles sont des structures. L'esprit humain partout fonctionne de la même manière : il classe, oppose, combine. 'La pensée sauvage' (1962) montre que la pensée mythique est aussi logique que la pensée scientifique.

Roland Barthes (1915-1980) applique le structuralisme à la littérature dans 'Le Degré zéro de l'écriture' (1953) et 'S/Z' (1970). Le texte est un tissu de citations, un réseau de codes. L'auteur n'est plus le sens originaire mais un 'scripteur' qui emprunte au langage. 'La mort de l'auteur' (1968) annonce le poststructuralisme.

Jacques Lacan (1901-1981) structuralise la psychanalyse. 'L'inconscient est structuré comme un langage'. Le sujet se constitue dans le miroir (stade du miroir), l'ordre symbolique (le langage), l'Autre (lieu du langage). Le désir est toujours désir de l'Autre.

Michel Foucault (1926-1984), bien qu'il rejette le label, analyse les structures du savoir-pouvoir. 'Les mots et les choses' (1966) montre comment chaque époque a une structure épistémique (épistémè) qui détermine ce qui peut être dit et pensé.

Le structuralisme influence profondément la linguistique, l'anthropologie, la psychanalyse, la littérature, l'histoire. Il annonce le poststructuralisme (Derrida, Deleuze) qui radicalise la critique du sujet, de la représentation, de la vérité.`,

  shortDefinition: "Les phénomènes humains comme structures, le sens comme différence",

  period: "XXe siècle (1910-1980)",

  origins: {
    context: "Renouveau des sciences humaines après-guerre. Influence de la linguistique, de la mathématique, de l'ethnologie. Critique de l'existentialisme sartrien (tous les hommes sont libres mais différents).",
    predecessors: [
      "Saussure - Linguistique structurale",
      "Jakobson - Phonologie, fonctionnalisme",
      "Trubetzkoy - Phonologie structurale",
      "Mauss - Sociologie, anthropologie",
      "Freud - Inconscient comme structure"
    ],
    reactionAgainst: [
      "Existentialisme - Sartre, liberté, responsabilité",
      "Humanisme - Sujet comme source de sens",
      "Phénoménologie - Conscience intentionnelle",
      "Historicisme - L'histoire comme sens"
    ]
  },

  keyPrinciples: [
    "Primauté de la structure sur l'élément",
    "Langage comme modèle - Tout phénomène humain comme langage",
    "Différence - Le sens comme différence, pas identité",
    "Synchronie - Analyse des systèmes, pas de l'histoire",
    "Inconscient - Les structures sont inconscientes",
    "Anti-humanisme - Mort du sujet, mort de l'auteur",
    "Scientisme - Ambition de scientificité"
  ],

  keyPhilosophers: [
    'ferdinand-de-saussure',
    'claude-levi-strauss',
    'roland-barthes',
    'jacques-lacan',
    'michel-foucault',
    'Louis-althusser'
  ],

  keyConcepts: [
    'structure',
    'langue',
    'signe',
    'difference',
    'synchronie',
    'inconscient',
    'episteme',
    'discours'
  ],

  variations: [
    {
      name: "Linguistique structurale",
      description: "Saussure, Jakobson - Langue comme système de signes. Arbitraire du signe. Valeur différentielle. Synchronie vs diachronie.",
      philosophers: ['ferdinand-de-saussure', 'roman-jakobson']
    },
    {
      name: "Anthropologie structurale",
      description: "Lévi-Strauss - Parenté, mythes, classification comme structures. 'La pensée sauvage'. Universalité de l'esprit humain.",
      philosophers: ['claude-levi-strauss']
    },
    {
      name: "Psychanalyse structurale",
      description: "Lacan - 'L'inconscient est structuré comme un langage'. Stade du miroir, ordre symbolique, Autre. Désir comme manque.",
      philosophers: ['jacques-lacan']
    },
    {
      name: "Sémiotique littéraire",
      description: "Barthes, Genette - Texte comme structure de codes. 'La mort de l'auteur'. Narratologie, analyse du récit.",
      philosophers: ['roland-barthes', 'gerard-genette']
    },
    {
      name: "Marxisme structural",
      description: "Althusser - 'Lire le Capital'. Structures du mode de production. Idéologie comme rapport imaginaire aux conditions réelles. Sujet comme 'effet'de la structure.",
      philosophers: ['Louis-althusser']
    }
  ],

  criticisms: [
    "Réductionnisme - Réduit tout à la structure",
    "Anti-humaniste - Négation de la liberté humaine",
    "Anti-historique - Ignore le changement historique",
    "Scientisme - Ambition de scientificité illusoire",
    "Négation du sens - Le sens n'est que différence, vide",
    "Political quietism - Si tout est structure, pas d'émancipation",
    "Obscurité - Langage technique, jargon"
  ],

  influence: {
    on: [
      "Poststructuralisme - Derrida, Deleuze, Lyotard",
      "Sémiotique - Umberto Eco, Ecole de Paris",
      "Narratologie - Genette, Bal",
      "Théorie littéraire - Barthes, Kristeva",
      "Anthropologie - Lévi-Strauss, Turner",
      "Psychanalyse - Lacan, école lacanienne",
      "Études culturelles - Birmingham School",
      "Féminisme - Kristeva, Cixous"
    ],
    in: [
      "France - École normale supérieure, Collège de France",
      "Europe entière - Diffusion via les revues",
      "États-Unis - French theory, Yale School",
      "Amérique latine - Structuralisme et dépendance",
      "Monde entier - Dominant dans les années 1960"
    ]
  },

  metadata: {
    representativeWorks: [
      "Cours de linguistique générale - Saussure (1916)",
      "Anthropologie structurale - Lévi-Strauss (1958)",
      "Tristes tropiques - Lévi-Strauss (1955)",
      "Écrits - Lacan (1966)",
      "Les mots et les choses - Foucault (1966)",
      "Le degré zéro de l'écriture - Barthes (1953)",
      "Lire le Capital - Althusser (1965)"
    ],
    relatedMovements: [
      "Poststructuralisme",
      "Sémiotique",
      "Postmodernisme",
      "Déconstruction",
      "Anthropologie"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const structuralismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'claude-levi-strauss',
    role: "Fondateur de l'anthropologie structurale",
    contribution: "Anthropologue français (1908-2009). 'Anthropologie structurale'(1958) : étudie les mythes, la parenté, les classifications comme structures. 'La pensée sauvage'(1962) : la pensée mythique est aussi logique que la pensée scientifique. 'Mythologiques'(1964-1971) : analyse de plus de 800 mythes amérindiens comme transformations structurelles. Universalisme de l'esprit humain : partout l'homme classe, oppose, combine. Influence sur l'anthropologie, la philosophie, la théorie littéraire et les études culturelles."
  },
  {
    philosopherSlug: 'roland-barthes',
    role: "Sémiologue et critique structuraliste",
    contribution: "Sémiologue et écrivain français (1915-1980). 'Le degré zéro de l'écriture'(1953) : analyse le style comme structure historique. 'Mythologies'(1957) : déconstruit les mythes de la culture de masse. 'S/Z'(1970) : analyse le texte comme réseau de codes. 'La mort de l'auteur'(1968) : critique la figure de l'auteur comme origine du sens. 'Le plaisir du texte'(1973) : texte de plaisir vs texte de jouissance. Influence sur la théorie littéraire, la sémiotique, les études culturelles et la philosophie postmoderne."
  }
];
