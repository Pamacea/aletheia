/**
 * Phénoménologie - Philosophical Movement Data
 * Méthode philosophique fondée sur la description des structures de la conscience
 */

import { MovementData, PhilosopherLink } from './existentialisme';

export const phenomenologie: MovementData = {
  id: 'phenomenologie',
  name: "Phénoménologie",
  slug: 'phenomenologie',
  category: 'philosophie-moderne',

  description: `Mouvement philosophique fondé par Edmund Husserl au début du XXe siècle, la phénoménologie est à la fois une méthode et une discipline philosophique. Son principe fondateur est le "retour aux choses elles-mêmes" : décrire les phénomènes tels qu'ils se manifestent à la conscience, sans présupposés théoriques.

La phénoménologie naît en réaction contre le naturalisme scientifique qui réduit la conscience à un processus physiologique, et contre l'historicisme qui dissout la vérité dans le relativisme culturel. Husserl cherche à établir la philosophie comme science rigoureuse (Strengwissenschaft) fondée sur l'expérience immédiate de la conscience.

La méthode phénoménologique repose sur deux opérations fondamentales : l'épochè (mise entre parenthèses du monde naturel) et la réduction phénoménologique (retour à la conscience transcendante). Le phénoménologue suspend sa croyance en l'existence du monde extérieur pour se concentrer sur la manière dont les choses se donnent à la conscience.

Le concept central est l'intentionnalité : toute conscience est conscience de quelque chose. La conscience n'est pas un contenant (boîte) avec des représentations, mais une structure de visée dirigée vers des objets. Cette thèse, inspirée de Brentano, rompt avec le dualisme cartésien sujet-objet.

La phénoménologie se divise en plusieurs courants : la phénoménologie transcendantale (Husserl), l'herméneutique (Heidegger, Gadamer), l'existentialiste (Sartre, Merleau-Ponty), et la génétique (Husserl tardif). Chaque courant développe la méthode dans des directions différentes mais partage le souci de décrire l'expérience vécue (Erlebnis).

L'influence de la phénoménologie est immense : elle a fondé l'existentialisme français, inspiré la philosophie analytique de l'esprit, influence la psychologie (gestalt-théorie), la sociologie (Schutz, Berger-Luckmann), la théologie (Rahner, Levinas), et les sciences cognitives contemporaines.`,

  shortDefinition: "Retour aux choses elles-mêmes - description des structures de la conscience et de l'expérience",

  period: "XXe siècle (1900-présent)",

  origins: {
    context: "Crise des sciences européennes à la fin du XIXe siècle. Les sciences naturelles dominent la connaissance, mais leur succès ne répond pas aux questions de sens et de valeur. Besoin de fonder la philosophie comme science rigoureuse capable de donner sens à la culture européenne. Montée du psychologisme et du naturalisme qui réduisent l'esprit à des processus naturels.",
    predecessors: [
      "Franz Brentano - concept d'intentionnalité comme marque de la conscience",
      "René Descartes - cogito comme point de départ indubitable",
      "Immanuel Kant - distinction phénomène/noumène, critique de la métaphysique",
      "Hegel - phénoménologie de l'esprit comme parcours de la conscience",
      "Bernard Bolzano - théorie des représentations et des objets intentionnels",
      "Gottlob Frege - distinction sens/dénotation, critique du psychologisme en logique"
    ],
    reactionAgainst: [
      "Psychologisme - réduction de la logique et de la connaissance aux processus psychologiques",
      "Naturalisme - réduction de la conscience à un processus physiologique",
      "Historicisme - dissolution de la vérité dans le relativisme culturel",
      "Positivisme logique - réduction du sens à ce qui est empiriquement vérifiable",
      "Métaphysique traditionnelle - constructions spéculatives sans ancrage dans l'expérience"
    ]
  },

  keyPrinciples: [
    "Retour aux choses elles-mêmes - décrire sans théories préconçues",
    "Intentionnalité - toute conscience est conscience de quelque chose",
    "Épochè - mise entre parenthèses du monde naturel",
    "Réduction phénoménologique - retour à la conscience pure",
    "Noèse-noème - structure des actes de conscience et de leurs corrélats",
    "Lebenswelt - monde de la vie pré-réflexif et anté-prédicatif",
    "Intersubjectivité - constitution de l'altérité et de la communauté",
    "Idéalisme transcendantal - le monde comme corrélat de la conscience"
  ],

  keyPhilosophers: [
    'edmund-husserl',
    'martin-heidegger',
    'jean-paul-sartre',
    'maurice-merleau-ponty',
    'emmanuel-levinas',
    'edith-stein',
    'max-scheler',
    'alfred-schutz',
    'roman-ingarden',
    'hans-georg-gadamer'
  ],

  keyConcepts: [
    'intentionnalite',
    'epochè',
    'reduction',
    'noese',
    'noeme',
    'lebenswelt',
    'intersubjectivite',
    'constitution',
    'temps-de-la-conscience',
    'corps-propre',
    'etre-au-monde',
    'etre-pour-autrui',
    'chair',
    'visage',
    'donation'
  ],

  variations: [
    {
      name: "Phénoménologie transcendantale (Husserl)",
      description: "Fondée sur l'idéalisme transcendantal : le monde est corrélat noématique de la conscience. Emphase sur la réduction, l'analyse des structures intentionnelles et la constitution du sens. Œuvres : Recherches logiques, Idées I, Méditations cartésiennes, La Crise.",
      philosophers: ['edmund-husserl', 'edith-stein', 'roman-ingarden', 'eugene-fink']
    },
    {
      name: "Herméneutique (Heidegger, Gadamer)",
      description: "Transforme la phénoménologie en herméneutique de l'existence. Heidegger : l'être-au-monde, l'analytique du Dasein, l'interprétation comme structure de l'existence. Gadamer : fusion des horizons, préjugés constitutifs, historicité de la compréhension.",
      philosophers: ['martin-heidegger', 'hans-georg-gadamer', 'leo-strauss', 'paul-ricoeur']
    },
    {
      name: "Phénoménologie existentialiste (Sartre, Merleau-Ponty)",
      description: "Phénoménologie de l'existence concrète. Sartre : être-pour-soi et être-en-soi, le regard, mauvaise foi. Merleau-Ponty : corps propre, perception, chair du monde, être-au-monde incarné. Dépasse l'idéalisme husserlien vers l'engagement existentiel.",
      philosophers: ['jean-paul-sartre', 'maurice-merleau-ponty', 'simone-de-beauvoir']
    },
    {
      name: "Phénoménologie éthique (Levinas, Scheler)",
      description: "La relation à autrui comme fondement de l'éthique. Levinas : le visage comme révélation éthique, responsabilité infinie. Scheler : ordre des valeurs, intuition émotionnelle, symétrie des sentiments.",
      philosophers: ['emmanuel-levinas', 'max-scheler', 'dietrich-von-hildebrand', 'bernard-waldenfels']
    },
    {
      name: "Phénoménologie sociale et cognitive",
      description: "Application aux sciences humaines et cognitives. Schutz : monde de la vie sociale, typifications, intersubjectivité. Neurophénoménologie (Varela) : étude expérimentale de l'expérience vécue. 4E cognition (embodied, embedded, extended, enactive).",
      philosophers: ['alfred-schutz', 'paul-berger', 'thomas-luckmann', 'francisco-varela']
    }
  ],

  criticisms: [
    "Idéalisme problématique - réduction du monde à la constitution subjective",
    "Méthode obscure - concepts difficiles, jargon inaccessible",
    "Solipsisme - difficulté à fonder l'altérité et l'intersubjectivité",
    "Negation du corps et de la nature - trop centré sur la conscience",
    "Ignorance des structures sociales - manque de perspective sociologique",
    "Circularité - la conscience se constitue elle-même?",
    "Élitisme académique - philosophie pour spécialistes, pas applicable"
  ],

  influence: {
    on: [
      "Existentialisme français - méthode phénoménologique appliquée à l'existence",
      "Philosophie analytique de l'esprit - critique et reprise de concepts phénoménologiques",
      "Psychologie - gestalt-théorie, psychothérapie existentielle",
      "Sociologie - phénoménologie du monde social (Schutz, ethnométhodologie)",
      "Théologie - renouveau théologique catholique et protestant",
      "Sciences cognitives - neurophénoménologie, cognition incarnée",
      "Littérature - nouveau roman, théâtre de l'absurde, critique littéraire"
    ],
    in: [
      "Allemagne - Husserl, Heidegger, Scheler, Munich, Göttingen, Fribourg",
      "France - existentialisme sartrien, phénoménologie de la perception",
      "États-Unis - sociologie phénoménologique, ethnométhodologie",
      "Belgique - école de Louvain (Van Breda, Buytendijk)",
      "Japon - Kyoto School (Nishida Kitarō, Tanabe Hajime)",
      "Amérique latine - philosophie de la libération, Zubiri"
    ]
  },

  metadata: {
    representativeWorks: [
      "Recherches logiques - Husserl (1900-1901)",
      "Idées directrices pour une phénoménologie I - Husserl (1913)",
      "Être et Temps - Heidegger (1927)",
      "Méditations cartésiennes - Husserl (1931)",
      "La Crise des sciences européennes - Husserl (1936)",
      "Phénoménologie de la perception - Merleau-Ponty (1945)",
      "Totalité et Infini - Levinas (1961)",
      "Vérité et Méthode - Gadamer (1960)"
    ],
    relatedMovements: [
      "Existentialisme",
      "Herméneutique",
      "Philosophie analytique de l'esprit",
      "Néo-thomisme",
      "Philosophie de l'esprit"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const phenomenologiePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'edmund-husserl',
    role: "Fondateur de la phénoménologie",
    contribution: `Fondateur de la phénoménologie comme discipline et méthode philosophique. Formule le principe "retour aux choses elles-mêmes" : décrire les phénomènes tels qu'ils se manifestent à la conscience, sans présupposés. Développe la méthode de l'épochè (suspension du jugement sur l'existence du monde) et de la réduction phénoménologique (retour à la conscience transcendante). Théorise l'intentionnalité comme structure fondamentale de la conscience : toute conscience est conscience de quelque chose. Analyse les corrélations noèse-noème (actes de conscience et leurs objets intentionnels). Introduit le concept de Lebenswelt (monde de la vie) comme fondement pré-théorique des sciences. Son œuvre évolue de la psychologie descriptive à l'idéalisme transcendantal. Influence immense sur la philosophie du XXe siècle.`
  },
  {
    philosopherSlug: 'martin-heidegger',
    role: "Transformateur de la phénoménologie en herméneutique",
    contribution: `Élève puis assistant de Husserl, Heidegger transforme radicalement la phénoménologie. Dans "Être et Temps" (1927), il développe une "herméneutique du Dasein" : analytique des structures de l'existence humaine. L'homme comme Dasein (être-là) est toujours déjà "jeté" dans un monde qu'il comprend. L'être-au-monde remplace la conscience transcendantale : nous ne sommes pas des sujets face à des objets, mais des êtres toujours immergés dans un monde significatif. La phénoménologie devient herméneutique : interpréter les structures de l'existence plutôt que décrire les actes de conscience. Se distancie de Husserl et de l'idéalisme transcendantal pour s'orienter vers la question de l'Être. Influence l'existentialisme français et la pensée postmoderne.`
  },
  {
    philosopherSlug: 'jean-paul-sartre',
    role: "Phénoménologie de la liberté et de la mauvaise foi",
    contribution: `Dans "L'Être et le Néant" (1943), Sartre développe une ontologie phénoménologique de la liberté. Utilise la méthode phénoménologique husserlienne mais dans une direction existentialiste et athée. Distinction fondamentale : être-en-soi (les choses, pleines d'elles-mêmes) vs être-pour-soi (la conscience, néantisante et libre). La conscience comme "néantisation" : elle introduit du néant dans le monde, elle est ce qu'elle n'est pas et n'est pas ce qu'elle est. Le regard d'autrui comme cristallisation de mon objectivité. La mauvaise foi comme auto-illusion, refus d'assumer sa liberté. L'engagement comme projet de donner sens au monde par l'action. Populaire la phénoménologie en France via conférences et littérature.`
  },
  {
    philosopherSlug: 'maurice-merleau-ponty',
    role: "Phénoménologie de la perception et du corps",
    contribution: `Dans "Phénoménologie de la perception" (1945), Merleau-Ponty développe une phénoménologie du corps et de la perception. Critique l'intellectualisme husserlien et sartrien : la conscience n'est pas pure mais toujours incarnée. Concept de "corps propre" : le corps n'est pas un objet mais notre moyen d'être au monde, "vehicle of being". La perception comme accès primordial au monde, avant toute représentation théorique. L'être-au-monde : nous sommes toujours immergés dans un monde que nous habitons. Intercorporéité et relation à autrui comme co-présence plutôt que regard objectivant. Son œuvre ultérieure ("Le Visible et l'Invisible", 1964, posthume) développe une ontologie du sensible et de la "chair" (chair du monde, chair du corps). Influence la philosophie cognitive, l'esthétique et l'éthique environnementale.`
  },
  {
    philosopherSlug: 'emmanuel-levinas',
    role: "Phénoménologie de l'altérité et de l'éthique",
    contribution: `Élève de Husserl et Heidegger, Levinas développe une phénoménologie de la relation à autrui. Dans "Totalité et Infini" (1961) et "Autrement qu'être" (1974), il place l'éthique comme "philosophie première". Le visage d'autrui me révèle une infinie responsabilité : je suis responsable de l'autre avant même d'avoir choisi. Cette relation est asymétrique : je dois tout à l'autre, il ne me doit rien. Critique l'ontologie occidentale comme totalisation de l'Autre. L'éthique précède l'ontologie : la relation à autrui est plus fondamentale que la compréhension de l'être. Influence la philosophie morale, la théologie et la pensée postcoloniale. Dialogue avec le judaïsme (Talmud) et la phénoménologie husserlienne.`
  },
  {
    philosopherSlug: 'max-scheler',
    role: "Phénoménologie des valeurs et des émotions",
    contribution: `Contemporain de Husserl, Scheler développe une phénoménologie matérialiste des valeurs et des émotions. Contrairement à Husserl, il défend un "matérialisme phénoménologique" : les valeurs sont des réalités objectives, pas des constitutions subjectives. L'ordre des valeurs (vital, esthétique, juridique, éthique, religieux) est hiérarchisé et objectivement accessible à l'intuition émotionnelle. L'amour comme mouvement fondamental vers les valeurs supérieures. La personne comme centre spirituel d'actes. "Le formalisme en éthique" (1913-1916) critique Kant : l'éthique ne peut être purement formelle, elle doit être fondée sur l'intuition des valeurs. Influence la philosophie morale, la psychologie des émotions et l'anthropologie philosophique.`
  },
  {
    philosopherSlug: 'alfred-schutz',
    role: "Phénoménologie du monde social",
    contribution: `Schutz applique la phénoménologie à la sociologie dans "Phénoménologie du monde social" (1932) et "The Structures of the Life-World" (avec Luckmann, 1975). Analyse le "monde de la vie" (Lebenswelt) comme structures de sens pré-théoriques qui rendent possible l'interaction sociale. Concepts : typifications (catégories mentales pour classer autrui), intersubjectivité, stock de connaissance à disposition (handshake库存), structures de pertinence. Fonde l'ethnométhodologie (Garfinkel) et la sociologie phénoménologique. Influence la sociologie de la connaissance (Berger-Luckmann) et les science studies. Pont entre phénoménologie continentale et sciences sociales empiriques.`
  }
];
