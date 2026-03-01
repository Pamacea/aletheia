/**
 * Herméneutique - Philosophical Movement Data
 * Art et théorie de l'interprétation
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

export const hermeneutique: MovementData = {
  id: 'hermeneutique',
  name: \"Herméneutique\",
  slug: 'hermeneutique',
  category: 'philosophie-contemporaine',

  description: `Art et théorie de l'interprétation, l'herméneutique est née comme discipline pour l'exégèse des textes sacrés, avant de devenir une philosophie générale de la compréhension. Elle affirme que toute connaissance est interprétative, et que le sens n'est pas découvert mais construit dans un dialogue entre l'interprète et le texte.

L'herméneutique commence dans l'Antiquité avec l'exégèse biblique (Philon, Origène) et l'interprétation des mythes grecs. Elle devient discipline autonome avec Schleiermacher (1768-1834) qui l'étend de la Bible à tous les textes et définit l'herméneutique comme 'l'art de comprendre la parole de l'autre'.

Dilthey (1833-1911) distingue les sciences de la nature (Erklären, expliquer) des sciences de l'esprit (Verstehen, comprendre). L'herméneutique devient la méthode fondamentale des sciences humaines : comprendre la signification des actions, des textes, des institutions.

Heidegger transforme l'herméneutique en ontologie dans 'Être et Temps' (1927). La compréhension n'est pas une méthode parmi d'autres mais le mode d'être du Dasein (l'être humain). Comprendre n'est pas une activité cognitive mais une structure existentielle : nous sommes toujours déjà dans un monde interprété. Le 'cercle herméneutique' n'est pas un vice méthodologique mais une structure fondamentale : nous comprenons le tout à partir des parties et les parties à partir du tout.

Gadamer (1900-2002) systématise l'herméneutique philosophique dans 'Vérité et Méthode' (1960). Il critique l'idéal de méthode des sciences modernes et affirme que la compréhension n'est pas une méthode mais un événement de rencontre entre l'interprète et la tradition. Trois moments : le préjugé (nous avons toujours déjà des préjugés issus de notre tradition), la fusion des horizons (l'interprète et le texte dialoguent), la question herméneutique (comprendre, c'est questionner). L'expérience herméneutique est toujours finie, historique et linguistique.

Ricœur (1913-2005) développe l'herméneutique du texte et du soi. 'Soi-même comme un autre' (1990) : le soi se comprend à travers les récits, les mythes, les symboles. L'herméneutique comme 'archéologie du sujet' (creuser en profondeur) et 'téléologie du sujet' (se projeter vers l'avenir). Conflit des interprétations : tout texte a de multiples significations, la vérité est plurielle.

L'herméneutique influence la théologie (Bultmann, Tillich), le droit (l'interprétation juridique), la littérature (la théorie de la réception), l'historiographie (l'histoire comme récit), et la philosophie postmoderne (Vattimo, le 'pensiero debole').`,

  shortDefinition: \"La compréhension comme structure fondamentale de l'existence humaine",

  period: "XIXe-XXe siècle (1800 à aujourd'hui)\",

  origins: {
    context: \"Exégèse biblique, philologie classique. Problème de l'interprétation des textes anciens. Essor des sciences humaines (Geisteswissenschaften). Critique du scientisme positiviste.",
    predecessors: [
      "Exégèse biblique - Philon, Origène",
      "Philologie classique - Friedrich August Wolf",
      "Idéalisme allemand - Hegel, esprit objectif",
      "Romantisme - Expressivité, individualité"
    ],
    reactionAgainst: [
      "Positivisme - Méthode scientifique unique",
      "Expliquer vs comprendre - Dilthey",
      "Objectivisme - L'interprète neutre\",
      \"Littéralisme - Le sens unique du texte\"
    ]
  },

  keyPrinciples: [
    \"Primauté de la compréhension - Comprendre avant d'expliquer",
    "Cercle herméneutique - Tout et parties se comprennent mutuellement",
    "Historicité - La compréhension est toujours historique",
    "Préjugés - Nous comprenons toujours depuis des préjugés",
    "Fusion des horizons - Dialogue entre interprète et texte",
    "Linguisticité - La compréhension est toujours linguistique",
    "Question herméneutique - Comprendre, c'est questionner\"
  ],

  keyPhilosophers: [
    'friedrich-schleiermacher',
    'wilhelm-dilthey',
    'martin-heidegger',
    'hans-georg-gadamer',
    'paul-ricœur',
    'friedrich-schlegel'
  ],

  keyConcepts: [
    'comprehension',
    'interpretation',
    'cercle-hermeneutique',
    'prejuges',
    'fusion-des-horizons',
    'tradition',
    'texte',
    'signification'
  ],

  variations: [
    {
      name: \"Herméneutique romantique\",
      description: \"Schleiermacher - L'herméneutique comme art de comprendre la parole de l'autre. Interprétation grammaticale et psychologique. Divination du génie de l'auteur.",
      philosophers: ['friedrich-schleiermacher', 'friedrich-schlegel']
    },
    {
      name: "Herméneutique des sciences humaines",
      description: "Dilthey - Distinction Expliquer (Erklären) / Comprendre (Verstehen). Les sciences de l'esprit ont leur propre méthode herméneutique. 'Introduction aux sciences de l'esprit'(1883).",
      philosophers: ['wilhelm-dilthey']
    },
    {
      name: "Herméneutique ontologique",
      description: "Heidegger - Comprendre comme mode d'être du Dasein. Cercle herméneutique comme structure existentielle. 'Être et Temps'. Herméneutique du faiticité.\",
      philosophers: ['martin-heidegger']
    },
    {
      name: \"Herméneutique philosophique\",
      description: \"Gadamer - 'Vérité et Méthode'. La compréhension comme événement, pas méthode. Préjugés, tradition, fusion des horizons. Critique de l'idéal de méthode scientifique.",
      philosophers: ['hans-georg-gadamer']
    },
    {
      name: "Herméneutique du texte",
      description: "Ricœur - Herméneutique du texte et du soi. 'Soi-même comme un autre'. Archéologie et téléologie du sujet. Conflit des interprétations. Expliquer et comprendre complémentaires.",
      philosophers: ['paul-ricœur']
    }
  ],

  criticisms: [
    "Relativisme - Chaque époque a sa propre interprétation",
    "Traditionalisme - Dépendance excessive à la tradition",
    "Subjectivisme - L'interprétation dépend de l'interprète",
    "Conservatisme - Gadamer trop conservateur pour Habermas",
    "Indétermination - Les textes peuvent signifier n'importe quoi\",
    \"Impuissance critique - Comment critiquer les traditions ?\"
  ],

  influence: {
    on: [
      \"Théologie - Bultmann, Tillich, herméneutique biblique\",
      \"Droit - Interprétation juridique, constitutionalisme\",
      \"Littérature - Théorie de la réception, Jauss, Iser\",
      \"Historiographie - Histoire comme récit, White\",
      \"Philosophie analytique - Davidson, Quine\",
      \"Postmodernisme - Vattimo, Rorty\",
      \"Psychanalyse - Interprétation des rêves, récits de vie\"
    ],
    in: [
      \"Allemagne - Heidegger, Gadamer, Ricœur\",
      \"France - Ricœur, poststructuralisme\",
      \"Italie - Vattimo, herméneutique faible\",
      \"Amérique du Nord - Philosophie continentale\",
      \"Amérique latine - Herméneutique de la libération\"
    ]
  },

  metadata: {
    representativeWorks: [
      \"Traité d'herméneutique - Ast (1808)",
      "Introduction aux sciences de l'esprit - Dilthey (1883)\",
      \"Être et Temps - Heidegger (1927)\",
      \"Vérité et Méthode - Gadamer (1960)\",
      \"De l'interprétation - Ricœur (1965)",
      "Soi-même comme un autre - Ricœur (1990)"
    ],
    relatedMovements: [
      "Phénoménologie",
      "Postmodernisme",
      "Philosophie analytique",
      "Théologie",
      "Littérature"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const hermeneutiquePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'hans-georg-gadamer',
    role: "Systématicien de l'herméneutique philosophique\",
    contribution: \"Philosophe allemand (1900-2002). 'Vérité et Méthode' (1960) : œuvre fondamentale. L'herméneutique n'est pas une méthode mais une expérience de vérité. Trois moments : les préjugés (nous comprenons toujours depuis une tradition), la fusion des horizons (dialogue entre interprète et texte), la question herméneutique (comprendre, c'est questionner). La compréhension est toujours linguistique, historique, finie. Critique de l'idéal de méthode scientifique. Débat avec Habermas sur l'ideology critique. Influence immense sur la théologie, le droit, la littérature et la philosophie continentale."
  },
  {
    philosopherSlug: 'paul-ricœur',
    role: "Herméneute du texte et du soi",
    contribution: "Philosophe français (1913-2005). Herméneutique du texte et du soi. 'De l'interprétation'(1965) : conflit des interprétations (Freud, Marx, Nietzsche). 'Soi-même comme un autre'(1990) : le soi se comprend à travers les récits. Distinction expliquer/comprendre mais complémentaires. Archéologie du sujet (creuser en profondeur) et téléologie du sujet (se projeter vers l'avenir). Temps et récit (1983-1985) : le temps humain comme récit. Influence sur la philosophie de l'herméneutique, la théorie du récit, la théologie et la psychanalyse.\"
  }
];
