/**
 * Utilitarisme - Philosophical Movement Data
 * Théorie morale fondée sur le principe de maximisation du bonheur
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

export const utilitarisme: MovementData = {
  id: 'utilitarisme',
  name: "Utilitarisme",
  slug: 'utilitarisme',
  category: 'philosophie-moderne',

  description: `Théorie morale et politique fondée sur le principe de maximisation du bonheur (ou de l'utilité) pour le plus grand nombre. L'utilitarisme affirme qu'une action est morale si elle produit la plus grande quantité de bonheur pour le plus grand nombre d'individus.

L'utilitarisme naît avec Jeremy Bentham (1748-1832) qui formule le principe d'utilité : une action est bonne si elle augmente le plaisir et diminue la douleur. Bentham développe un 'calcul félicifère' pour mesurer l'utilité d'une action : intensité, durée, certitude, proximité, fécondité, pureté, étendue du plaisir. Il propose d'appliquer ce calcul à tous les domaines : droit, politique, économie, morale.

John Stuart Mill (1806-1873) raffine la doctrine benthamienne. Dans 'Utilitarianism' (1863), il distingue plaisirs supérieurs (intellectuels, moraux, esthétiques) et plaisirs inférieurs (sensuels), affirmant qu'il vaut mieux 'être un homme insatisfait qu'un porc satisfait'. Mill insiste sur la qualité des plaisirs, pas seulement la quantité. Il défend aussi les droits individuels contre la tyrannie de la majorité.

L'utilitarisme se diversifie en plusieurs courants. L'utilitarisme de l'acte (Bentham) juge chaque action selon ses conséquences. L'utilitarisme des règles (Mill) évalue les règles morales selon leurs conséquences générales. L'utilitarisme de la préférence (R.M. Hare) prend en compte les préférences des individus, pas seulement leur plaisir. L'utilitarisme négatif (Karl Popper) se concentre sur la minimisation de la souffrance plutôt que la maximisation du bonheur.

L'utilitarisme a eu une influence immense. En économie, il fonde l'économie du bien-être (Pareto, Pigou) et la théorie de l'utilité (von Neumann, Morgenstern). En politique, il inspire le welfare state, les politiques publiques fondées sur l'analyse coût-bénéfice, le consequentialisme en morale. En droit, la théorie juridique de Bentham influence le droit pénal et constitutionnel.

L'utilitarisme est critiqué pour plusieurs raisons. Il peut justifier le sacrifice d'individus pour le plus grand nombre (problème du 'monstre utilitaire'). Il ne respecte pas les droits individuels absolus. Il réduit la morale à des calculs, ignorant les intentions, les vertus, les devoirs. Il est difficile à appliquer : comment mesurer et comparer les bonheurs ? Il ne rend pas compte de la justice distributive (Rawls).`,

  shortDefinition: \"La morale comme maximisation du bonheur pour le plus grand nombre\",

  period: \"XVIIIe-XXe siècle (1781 à aujourd'hui)",

  origins: {
    context: "Lumières britanniques, essor de l'économie politique. Critique du droit naturel et de la morale religieuse. Révolution industrielle, besoin de réforme sociale.\",
    predecessors: [
      \"Hédonisme épicurien - Le plaisir comme bien suprême\",
      \"Empirisme - Locke, Hume, Hartley\",
      \"Helvétius - Utilité publique\",
      \"Beccaria - Droit pénal utilitariste\"
    ],
    reactionAgainst: [
      \"Moralisme religieux - Morale divine révélée\",
      \"Droit naturel - Droits inaliénables\",
      \"Déontologisme - Devoirs absolus\",
      \"Vertu éthique - Morale du caractère\"
    ]
  },

  keyPrinciples: [
    \"Principe d'utilité - Maximiser le bonheur",
    "Conséquentialisme - La moralité dépend des conséquences",
    "Impartialité - Chacun compte pour un, personne pour plus d'un\",
    \"Calcul félicifère - Mesure du plaisir/douleur\",
    \"Universalisme - Considérer tous les êtres affectés\",
    \"Welfarisme - Le bien-être est ce qui compte moralement\"
  ],

  keyPhilosophers: [
    'jeremy-bentham',
    'john-stuart-mill',
    'henry-sidgwick',
    'rm-hare',
    'peter-singer',
    'rm-smart'
  ],

  keyConcepts: [
    'utilite',
    'plaisir',
    'douleur',
    'bonheur',
    'consequentialisme',
    'calcul-felicifere',
    'preferenc'
  ],

  variations: [
    {
      name: \"Utilitarisme classique\",
      description: \"Bentham - Calcul félicifère, maximisation du plaisir. 'Principe de morale et de législation'. Réforme du droit pénal, architecture panoptique.\",
      philosophers: ['jeremy-bentham']
    },
    {
      name: \"Utilitarisme millien\",
      description: \"J.S. Mill - Qualité des plaisirs, plaisirs supérieurs vs inférieurs. Défense des droits individuels. 'Utilitarianism', 'On Liberty'. Utilitarisme des règles.\",
      philosophers: ['john-stuart-mill']
    },
    {
      name: \"Utilitarisme de la préférence\",
      description: \"R.M. Hare, R.M. Smart - Prendre en compte les préférences, pas seulement le plaisir. Utilitarisme à deux niveaux : intuitif (quotidien) et critique (réflexif).\",
      philosophers: ['rm-hare', 'rm-smart']
    },
    {
      name: \"Utilitarisme négatif\",
      description: \"Karl Popper - Minimiser la souffrance plutôt que maximiser le bonheur. 'Il faut minimiser la souffrance plutôt que maximiser le bonheur'.\"
    },
    {
      name: \"Utilitarisme des droits\",
      description: \"Mill, Nozick - Utilitarisme respectant les droits individuels. Règles utilitaristes protégeant les libertés fondamentales.\"
    }
  ],

  criticisms: [
    \"Monstre utilitaire - Sacrifice d'innocents pour le plus grand nombre",
    "Tyrannie de la majorité - Oppression des minorités",
    "Déterminisme - Problème de la tyrannie de la majorité",
    "Réductionnisme - La morale comme calcul, ni vertu ni devoir",
    "Mesure impossible - Comment comparer et agréger les bonheurs ?",
    "Justice distributive - Rawls : l'utilitarisme ne protège pas les plus défavorisés\",
    \"Expérience machines - Nozick : préférons-nous une expérience simulée ?\"
  ],

  influence: {
    on: [
      \"Économie du bien-être - Pareto, Pigou, Kaldor\",
      \"Théorie de la décision - Utilité attendue\",
      \"Politique publique - Analyse coût-bénéfice\",
      \"Welfare state - Sécurité sociale, santé publique\",
      \"Droit pénal - Prévention du crime, proportionnalité\",
      \"Environnement - Coût-bénéfice climatique\",
      \"Bioéthique - Peter Singer, libération animale\"
    ],
    in: [
      \"Royaume-Uni - Bentham, Mill, philosophie britannique\",
      \"États-Unis - Singer, philosophie appliquée\",
      \"Australie - Singer, utilitarisme australien\",
      \"Économie mondiale - Théorie de l'utilité",
      "Politique internationale - Développement, aide"
    ]
  },

  metadata: {
    representativeWorks: [
      "Principe de morale et de législation - Bentham (1789)",
      "Introduction aux principes de morale et de législation - Bentham (1789)",
      "Utilitarianism - Mill (1863)",
      "On Liberty - Mill (1859)",
      "The Methods of Ethics - Sidgwick (1874)",
      "Moral Thinking - Hare (1981)",
      "Animal Liberation - Singer (1975)"
    ],
    relatedMovements: [
      "Conséquentialisme",
      "Hédonisme",
      "Libéralisme",
      "Économie du bien-être",
      "Bioéthique"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const utilitarismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'jeremy-bentham',
    role: "Fondateur de l'utilitarisme\",
    contribution: \"Juriste et philosophe britannique (1748-1832), fondateur de l'utilitarisme. 'Principe de morale et de législation' (1789) : formule le principe d'utilité comme 'le plus grand bonheur pour le plus grand nombre'. Calcul félicifère pour mesurer le plaisir. Réforme du droit pénal, abolition de la torture et de la peine de mort, défense des libertés individuelles. Panoptique comme modèle architectural carcéral. Influence sur le droit constitutionnel, l'économie du bien-être et la philosophie morale."
  },
  {
    philosopherSlug: 'john-stuart-mill',
    role: "Défenseur libéral de l'utilitarisme\",
    contribution: \"Philosophe et économiste britannique (1806-1873). 'Utilitarianism' (1863) : distingue plaisirs supérieurs et inférieurs ('mieux vaut être un homme insatisfait qu'un porc satisfait'), défend l'utilitarisme des règles contre l'utilitarisme de l'acte. 'On Liberty' (1859) : défend la liberté individuelle contre la tyrannie de la majorité et de l'État. Harm principle : le seul motif pour limiter la liberté est de prévenir le tort d'autrui. Influence sur le libéralisme moderne, la défense des droits et la philosophie politique.\"
  },
  {
    philosopherSlug: 'peter-singer',
    role: \"Utilitariste contemporain appliqué\",
    contribution: \"Philosophe australien (né en 1949). 'Animal Liberation' (1975) : éthique animale fondée sur l'égalité de considération des intérêts (pas sur l'égalité des droits). 'Practical Ethics' (1979) : analyse utilitariste des problèmes moraux contemporains (avortement, euthanasie, pauvreté mondiale). Défense de l'altruisme efficace : nous devons donner aux plus pauvres jusqu'au point marginal d'utilité égale. Critique du spécisme. Influence sur la bioéthique, le mouvement de libération animale et la philosophie appliquée."
  }
];
