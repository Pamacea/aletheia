/**
 * Positivisme - Philosophical Movement Data
 * Courant philosophique affirmant la primauté de la science et des faits observables
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

export const positivisme: MovementData = {
  id: 'positivisme',
  name: "Positivisme",
  slug: 'positivisme',
  category: 'philosophie-moderne',

  description: `Courant philosophique fondé par Auguste Comte au XIXe siècle, affirmant que la connaissance scientifique des faits observables est la seule forme de connaissance valide, et que la métaphysique et la théologie sont des stades inférieurs de l'évolution intellectuelle de l'humanité.

Le positivisme naît dans un contexte de triomphe de la science moderne (physique newtonienne, chimie de Lavoisier, biologie de Lamarck). Comte veut faire de la sociologie une 'physique sociale', utilisant les mêmes méthodes que les sciences naturelles. Il propose une 'loi des trois états' : l'humanité passe de l'état théologique (explications surnaturelles) à l'état métaphysique (explications abstraites) jusqu'à l'état positif (explications scientifiques).

Le positivisme se fonde sur plusieurs principes. L'empirisme : seule l'observation et l'expérience sont sources de connaissance. Le refus de la métaphysique : les questions sur la nature ultime des choses, l'origine du monde, l'essence de la réalité sont sans sens. Le déterminisme scientifique : tout phénomène a des causes naturelles que la science peut découvrir. La réduction des phénomènes complexes aux lois simples.

Le positivisme comte a une dimension religieuse : la 'religion de l'humanité'. L'humanité remplace Dieu comme objet de culte. Les savants sont les prêtres, le calendrier positiviste honore les grands hommes. Cette dimension sera critiquée par les positivistes ultérieurs.

Le positivisme se diversifie. Le positivisme logique (Cercle de Vienne, années 1920) critique la métaphysique comme dénuée de sens : un énoncé n'a de sens que s'il est empiriquement vérifiable ou analytique (tautologique). Le néo-positivisme (Popper) remplace la vérifiabilité par la falsifiabilité comme critère de scientificité. L'empirisme logique (Carnap, Reichenbach) cherche à unifier science et langage.

Le positivisme a influencé profondément les sciences humaines. Durkheim fonde la sociologie française sur le modèle positiviste : étude des faits sociaux comme choses. En économie, l'école autrichienne (Menger) et l'économétrie adoptent le positivisme. En psychologie, le behaviorisme de Watson et Skinner est positiviste : étude du comportement observable, refus de l'inconscient.

Le positivisme est critiqué pour son scientisme, son réductionnisme, son incapacité à rendre compte de la signification et de la valeur. La phénoménologie, l'existentialisme, la philosophie analytique post-positiviste (Kuhn, Feyerabend) ont tous critiqué le positivisme.`,

  shortDefinition: \"La science comme seule connaissance valide, refus de la métaphysique\",

  period: \"XIXe-XXe siècle (1830-1970)\",

  origins: {
    context: \"Triomphe de la science moderne, révolution industrielle. Essor des sciences naturelles (physique, chimie, biologie). Besoin d'appliquer les méthodes scientifiques aux sciences humaines.",
    predecessors: [
      "Empirisme - Locke, Berkeley, Hume",
      "Science newtonienne - Physique mathématique",
      "Saint-Simon - Industrialisme, science sociale",
      "Condorcet - Progrès scientifique"
    ],
    reactionAgainst: [
      "Métaphysique traditionnelle - Questions sur l'essence des choses\",
      \"Théologie - Explications surnaturelles\",
      \"Idéalisme allemand - Philosophie spéculative\",
      \"Romantisme - Éloge du sentiment et de l'intuition"
    ]
  },

  keyPrinciples: [
    "Primauté de l'observation - Seuls les faits observables sont connaissables\",
    \"Refus de la métaphysique - Questions sans sens sur l'au-delà",
    "Loi des trois états - Théologique, métaphysique, positif",
    "Déterminisme scientifique - Tout a des causes naturelles",
    "Unité de la méthode - Les mêmes méthodes pour toutes les sciences",
    "Vérifiabilité - Un énoncé a du sens seulement s'il est testable\",
    \"Progrès par la science - La science améliore l'humanité"
  ],

  keyPhilosophers: [
    'auguste-comte',
    'ernst-mach',
    'moritz-schlick',
    'rudolf-carnap',
    'karl-popper',
    'carl-hempel'
  ],

  keyConcepts: [
    'loi-des-trois-etats',
    'empirisme',
    'verifiabilite',
    'falsifiabilite',
    'science',
    'metaphysique',
    'fait',
    'loi-scientifique'
  ],

  variations: [
    {
      name: "Positivisme comtien",
      description: "Auguste Comte - Loi des trois états, sociologie comme physique sociale. 'Cours de philosophie positive'. Religion de l'humanité. Classement des sciences. Savoir pour prévoir.\",
      philosophers: ['auguste-comte']
    },
    {
      name: \"Positivisme logique\",
      description: \"Cercle de Vienne (Schlick, Carnap) - Critique de la métaphysique comme dénuée de sens. Criterion de signification : vérifiabilité empirique. Unité de la science. Analyse logique du langage.\",
      philosophers: ['moritz-schlick', 'rudolf-carnap']
    },
    {
      name: \"Néo-positivisme popperien\",
      description: \"Karl Popper - Falsifiabilité comme critère de scientificité. Une théorie n'est jamais vérifiée, seulement corroborée. 'Conjectures et réfutations'. Critique du déterminisme scientifique.",
      philosophers: ['karl-popper']
    },
    {
      name: "Empirisme logique",
      description: "Carnap, Reichenbach, Hempel - Analyse logique du langage scientifique. Distinction analytique/synthétique. Explication scientifique comme déduction nomologique-déductique (modèle DN)."
    }
  ],

  criticisms: [
    "Critère de vérification lui-même non vérifiable",
    "Réductionnisme - Réduit la signification à la vérification empirique",
    "Incapacité à rendre compte de la valeur, de l'éthique, de l'art",
    "Histoire des sciences montre rupture et révolution (Kuhn)",
    "Sous-estimation de la théorie dans l'observation (Duhem-Quine)\",
    \"Refus des questions philosophiques légitimes\",
    \"Scientisme - La science n'est pas le seul mode de connaissance"
  ],

  influence: {
    on: [
      "Sociologie - Durkheim, sociologie française",
      "Psychologie - Behaviorisme",
      "Économie - Économétrie",
      "Philosophie des sciences - Philosophie analytique",
      "Linguistique - Structuralisme",
      "Science moderne - Méthodologie scientifique"
    ],
    in: [
      "France - Comte, Durkheim",
      "Autriche - Cercle de Vienne",
      "Allemagne - École de Francfort (critique)",
      "Angleterre - Wittgenstein, Russell",
      "États-Unis - Philosophie analytique",
      "Amérique latine - Positivisme scientifique"
    ]
  },

  metadata: {
    representativeWorks: [
      "Cours de philosophie positive - Auguste Comte (1830-1842)",
      "Système de politique positive - Auguste Comte (1851-1854)",
      "L'analyse générale de la sensation - Mach (1886)\",
      \"Le futur de la philosophie scientifique - Carnap (1931)\",
      \"Logique de la découverte scientifique - Popper (1934)\",
      \"Fondements de la scientométrie - Hempel (1942)\"
    ],
    relatedMovements: [
      \"Empirisme\",
      \"Scientisme\",
      \"Behaviorisme\",
      \"Structuralisme\",
      \"Philosophie analytique\"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const positivismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'auguste-comte',
    role: \"Fondateur du positivisme\",
    contribution: \"Philosophe français (1798-1857), fondateur du positivisme et de la sociologie. 'Cours de philosophie positive' (1830-1842) : loi des trois états (théologique, métaphysique, positif), classement des sciences (mathématiques, astronomie, physique, chimie, biologie, sociologie). 'Système de politique positive' (1851-1854) : religion de l'humanité, calendrier positiviste, 'savoir pour prévoir'. Influence immense sur la sociologie (Durkheim), la politique (république laïque), et la philosophie des sciences."
  },
  {
    philosopherSlug: 'karl-popper',
    role: "Critique du positivisme logique",
    contribution: "Philosophe autrichien (1902-1994). 'Logique de la découverte scientifique'(1934) : critique de la vérifiabilité, propose la falsifiabilité comme critère de scientificité. Une théorie n'est jamais vérifiée, seulement corroborée tant qu'elle n'est pas réfutée. 'Conjectures et réfutations'(1963) : la science progresse par essais et erreurs. Critique du déterminisme scientifique ('L'univers irrésolu'). Influence sur la philosophie des sciences contemporaine."
  }
];
