/**
 * Pragmatisme - Philosophical Movement Data
 * Philosophie américaine de l'action et de la pratique
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

export const pragmatisme: MovementData = {
  id: 'pragmatisme',
  name: \"Pragmatisme\",
  slug: 'pragmatisme',
  category: 'philosophie-moderne',

  description: `Mouvement philosophique américain né à la fin du XIXe siècle, affirmant que la signification d'une idée réside dans ses conséquences pratiques et que la vérité est ce qui fonctionne, ce qui est vérifié par l'expérience et l'action.

Le pragmatisme naît dans le contexte du pragmatisme américain, d'une nation en pleine expansion, optimiste, tournée vers l'action et l'innovation. Charles Sanders Peirce (1839-1914) formule le 'principe de Pragmatique' en 1878 : pour clarifier la signification d'une idée, il faut considérer les 'effets pratiques concevables' de cet objet. Nos idées sont des 'habitudes d'action'.

William James (1842-1910) popularise le terme 'pragmatisme' dans 'Le pragmatisme' (1907). Pour James, la vérité n'est pas une propriété statique des idées mais dynamique : une idée est vraie si elle 'marche', si elle nous aide à naviguer dans l'expérience avec succès. James applique le pragmatisme à la religion : si croire en Dieu nous aide à vivre mieux, cette croyance a une valeur pragmatique.

John Dewey (1859-1952) développe l'instrumentalisme, une variante du pragmatisme. Pour Dewey, les idées sont des outils ('instruments') pour résoudre des problèmes et s'adapter à l'environnement. Il développe une philosophie de l'éducation ('Démocratie et éducation', 1916) centrée sur l'apprentissage par l'expérience et la résolution de problèmes.

Le pragmatisme influence profondément l'éducation progressiste, la psychologie fonctionnaliste, le droit (le 'legal realism'), la théologie (le 'pragmatisme théologique' de Reinhold Niebuhr), et la politique (la démocratie délibérative). Il a aussi inspiré le néo-pragmatisme contemporain (Richard Rorty, Hilary Putnam) qui critique la représentationnalisme et défend une philosophie de la conversation.

Le pragmatisme est critiqué pour son relativisme (si la vérité est ce qui marche, tout marche pour quelqu'un), son utilitarisme (réduit la connaissance à l'utilité), son inconséquence (le principe pragmatique lui-même est-il pragmatiquement vrai ?), et son américanisme (trop optimiste, trop individualiste).`,

  shortDefinition: "La vérité est ce qui marche, la signification réside dans les conséquences pratiques",

  period: "XIXe-XXe siècle (1870 à aujourd'hui)",

  origins: {
    context: "Amérique post-guerre de Sécession, essor industriel, optimisme progressiste. Réaction contre l'idéalisme allemand (Hegel) et le cartesianisme. Influence de Darwin : la pensée comme adaptation.",
    predecessors: [
      "Empirisme - Locke, Berkeley, Hume",
      "Darwinisme - Adaptation, sélection naturelle",
      "Emerson - Individualisme, self-reliance",
      "Méthode scientifique - Expérimentation, vérification"
    ],
    reactionAgainst: [
      "Idéalisme absolu - Hegel, Bradley",
      "Cartésianisme - 'Je pense donc je suis'",
      "Rationalisme - La raison comme source de vérité",
      "Correspondance - Vérité comme correspondance à la réalité"
    ]
  },

  keyPrinciples: [
    "Maxime pragmatique - La signification dans les conséquences pratiques",
    "Vérité comme vérification - Une idée est vraie si elle marche",
    "Anti-représentationnalisme - Les idées ne sont pas des images du monde",
    "Instrumentalisme - Les idées comme outils pour résoudre des problèmes",
    "Fallibilisme - Toutes nos croyances sont révisables",
    "Démocratie délibérative - La vérité emerge de la discussion",
    "Action primordiale - La pensée comme planification de l'action"
  ],

  keyPhilosophers: [
    'charles-sanders-peirce',
    'william-james',
    'john-dewey',
    'george-meade',
    'richard-rorty',
    'hilary-putnam'
  ],

  keyConcepts: [
    'signification',
    'verite',
    'experience',
    'action',
    'consequence',
    'verification',
    'instrument',
    'democratie'
  ],

  variations: [
    {
      name: "Pragmatisme peircéen",
      description: "C.S. Peirce - Maxime pragmatique, sémiotique. La signification comme habitude d'action. Abduction comme inférence. Pragmaticisme (pour se distinguer de James).",
      philosophers: ['charles-sanders-peirce']
    },
    {
      name: "Pragmatisme jamesien",
      description: "William James - Vérité comme ce qui marche. Radical empiricism. Volonté de croire (foi comme option). Applications à la religion, la psychologie, la philosophie de la religion.",
      philosophers: ['william-james']
    },
    {
      name: "Instrumentalisme deweyen",
      description: "John Dewey - Idées comme outils. Éducation progressive. Démocratie comme mode de vie. Reconstruction philosophique. Philosophie de l'éducation (learning by doing).",
      philosophers: ['john-dewey']
    },
    {
      name: "Néo-pragmatisme",
      description: "Rorty, Putnam - Critique du représentationalisme. Ironisme libéral (Rorty). Réalisme interne (Putnam). Philosophie comme conversation, pas fondation. Solidarité vs objectivité.",
      philosophers: ['richard-rorty', 'hilary-putnam']
    }
  ],

  criticisms: [
    "Relativisme - Si la vérité est ce qui marche, tout marche pour quelqu'un",
    "Utilitarisme épistémique - Réduit la connaissance à l'utilité",
    "Auto-réfutation - Le pragmatisme est-il pragmatiquement vrai ?",
    "Américanisme - Optimisme excessif, individualisme",
    "Manque de rigueur - Anti-théorique, pro pratique",
    "Subjectivisme - La vérité dépend de l'individu",
    "Scientisme - La science comme seul modèle de connaissance"
  ],

  influence: {
    on: [
      "Éducation progressiste - Dewey, éducation par l'expérience",
      "Psychologie fonctionnaliste - James, psychologie adaptive",
      "Legal realism - Droit comme pratique, pas logique",
      "Théologie pragmatique - Niebuhr, théologie du processus",
      "Sociologie - G.H. Mead, interactionnisme symbolique",
      "Philosophie analytique - Quine, Davidson",
      "Postmodernisme - Critique du foundationalisme"
    ],
    in: [
      "États-Unis - Harvard, Chicago, Columbia",
      "Grande-Bretagne - Influence via James, Russell",
      "Allemagne - Frankfurt School (critique)",
      "France - Influence sur Bergson, Deleuze",
      "Monde entier - Philosophie américaine dominante"
    ]
  },

  metadata: {
    representativeWorks: [
      "Comment se fixe la croyance - Peirce (1877)",
      "Le pragmatisme - James (1907)",
      "Démocratie et éducation - Dewey (1916)",
      "Logique - La théorie de l'enquête - Dewey (1938)",
      "La philosophie et le miroir de la nature - Rorty (1979)",
      "Raison, vérité et histoire - Putnam (1981)"
    ],
    relatedMovements: [
      "Empirisme",
      "Naturalisme",
      "Instrumentalisme",
      "Philosophie analytique",
      "Postmodernisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const pragmatismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'william-james',
    role: "Popularisateur du pragmatisme",
    contribution: "Psychologue et philosophe américain (1842-1910). 'Le pragmatisme'(1907) : expose la doctrine au grand public. Vérité comme ce qui 'marche'dans l'expérience. 'Essais d'empirisme radical'(1912) : expérience neutre ni mentale ni physique. 'La volonté de croire'(1897) : défend le droit de croire en l'absence de preuves décisives. Applications à la religion, la psychologie, la philosophie de la religion. Influence sur le pragmatisme, la psychologie fonctionnaliste et la philosophie de la religion."
  },
  {
    philosopherSlug: 'john-dewey',
    role: "Père de l'éducation progressive",
    contribution: "Philosophe et pédagogue américain (1859-1952). Développe l'instrumentalisme : les idées sont des outils pour résoudre des problèmes. 'Démocratie et éducation'(1916) : éducation comme processus de vie, pas de préparation à la vie. Learning by doing (apprendre en faisant). 'Logique : La théorie de l'enquête'(1938) : la pensée comme enquête résolvant des problèmes. Influence immense sur l'éducation progressiste, la pédagogie contemporaine, la démocratie délibérative et la philosophie sociale."
  },
  {
    philosopherSlug: 'richard-rorty',
    role: "Néo-pragmatiste ironiste",
    contribution: "Philosophe américain (1931-2007). 'La philosophie et le miroir de la nature'(1979) : critique du représentationalisme (l'idée que l'esprit reflète la nature). Contingence du langage, du soi, de la communauté libérale. Ironisme libéral : conscience de la contingence de ses croyances, solidarité avec les autres comme fin. Philosophie comme conversation, pas fondation. Influence sur le néo-pragmatisme, le postmodernisme et la critique du foundationalisme."
  }
];
