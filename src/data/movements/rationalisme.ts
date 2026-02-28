/**
 * Rationalisme - Philosophical Movement Data
 * Courant philosophique moderne affirmant la raison comme source principale de connaissance
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

export const rationalisme: MovementData = {
  id: 'rationalisme',
  name: "Rationalisme",
  slug: 'rationalisme',
  category: 'philosophie-moderne',

  description: `Courant philosophique du XVIIe siècle, né en France et en Allemagne, qui affirme la raison comme source principale de connaissance. Les rationalistes soutiennent que certaines vérités sont connues a priori, indépendamment de l'expérience, grâce à la raison naturelle ou à des idées innées.

Le rationalisme émerge dans un contexte de révolution scientifique. Galilée, Kepler, Descartes découvrent que le monde obéit à des lois mathématiques intelligibles. Cette découverte suggère que la raison peut atteindre des vérités sur le réel indépendamment de l'expérience. En même temps, la crise religieuse (Réforme, guerres de religion) et la montée du scepticisme (Montaigne) créent un besoin de certitudes absolues, fondées sur la raison plutôt que sur l'autorité ou la tradition.

Le rationalisme se caractérise par plusieurs thèses centrales :
- **Innéisme** : l'esprit contient des idées ou principes innés, non acquis par l'expérience (idée de Dieu, principes logiques, mathématiques)
- **Priorité de la raison** : la raison est la source principale de connaissance, l'expérience étant incertaine et trompeuse
- **Déduction** : le raisonnement déductif (comme en mathématiques) est la méthode idéale d'acquisition de connaissances certaines
- **Substance** : la réalité est composée de substances (pensée, matière, etc.) dont l'essence est connaissable par la raison
- **Système** : la philosophie doit être un système déductif complet, semblable aux mathématiques

Descartes, fondateur du rationalisme moderne, inaugure la méthode du doute méthodique. Rejetant toutes les opinions incertaines, il découvre une première certitude : le cogito ("je pense, donc je suis"). À partir de ce point indubitable, il reconstruit la connaissance par déduction, prouvant l'existence de Dieu, la distinction entre âme et corps, et la fiabilité de la raison humaine.

Leibniz pousse le rationalisme à son extrême. Pour lui, la réalité est composée de monades (substances simples) dont l'essence est la perception et l'appétit. Chaque monade reflète l'univers entier ("monade miroir"). Dieu a harmonisé les monades de telle sorte que chacune se développe selon son propre principe tout en étant synchronisée avec les autres (harmonie préétablie). Les vérités nécessaires sont fondées sur le principe de contradiction, les vérités contingentes sur le principe de raison suffisante.

Spinoza propose un rationalisme moniste. Pour lui, il n'y a qu'une seule substance : Dieu ou Nature (Deus sive Natura). Tout ce qui existe est un mode (modification) de cette substance unique. La connaissance est la compréhension de l'ordre nécessaire des choses à travers leurs causes. L'éthique est la compréhension de la nécessité divine et l'amour intellectuel de Dieu. Le salut n'est pas la liberté d'indifférence mais la compréhension joyeuse de notre place dans l'ordre nécessaire.

Le rationalisme domine la philosophie continentale jusqu'à Kant, qui le critique dans la Critique de la raison pure. Kant montre que la raison sans expérience est vide ("pensées sans contenu sont vides"). Il propose le criticisme : synthèse entre rationalisme (a priori) et empirisme (a posteriori) dans la notion de jugement synthétique a priori.

Le rationalisme a profondément marqué la philosophie moderne. Il a fondé la science moderne comme connaissance mathématique de la nature, inspiré la Révolution française (droits naturels de l'homme), et influencé le développement des mathématiques, de la logique et de l'informatique (Leibniz comme précurseur de l'ordinateur).`,

  shortDefinition: "La raison comme source principale de connaissance - vérités a priori, idées innées, méthode déductive",

  period: "XVIIe-XVIIIe siècle (1637-1781)",

  origins: {
    context: "Révolution scientifique (Galilée, Kepler, Newton) et crise religieuse (Réforme, guerres de religion). Montée du scepticisme (Montaigne, Charron). Besoin de certitudes absolues fondées sur la raison. Développement des mathématiques et de la physique mathématique.",
    predecessors: [
      "Platon - Théorie des Idées et innéisme (réminiscence)",
      "Augustin - Illumination divine, vérités éternelles en Dieu",
      "Thomas d'Aquin - Distinction foi/raison, preuves rationnelles de Dieu",
      "Descartes - Méthode du doute, cogito, innéisme modéré",
      "Galilée - Mathématisation de la nature",
      "Kepler - Lois mathématiques des planètes"
    ],
    reactionAgainst: [
      "Scepticisme - Refus du doute universel, affirmation de certitudes rationnelles",
      "Scholastique - Refus de l'autorité d'Aristote, méthode nouvelle",
      "Empirisme - Critique de l'expérience comme source de connaissance",
      "Tradition - Refus de la révélation et de la tradition comme sources de vérité",
      "Sensualisme - Refus de réduire la connaissance aux sens"
    ]
  },

  keyPrinciples: [
    "La raison est la source principale de connaissance",
    "Existence d'idées ou de principes innés dans l'esprit",
    "La déduction est la méthode idéale de raisonnement",
    "Les vérités nécessaires (mathématiques, logique) sont a priori",
    "L'expérience est incertaine et trompeuse",
    "La réalité est intelligible par la raison",
    "La philosophie doit être un système déductif complet",
    "La substance (ou substances) est le fondement du réel",
    "La causalité rationnelle explique le changement",
    "La liberté de l'indifférence est inférieure à la raison éclairée"
  ],

  keyPhilosophers: [
    'rene-descartes',
    'baruch-spinoza',
    'gottfried-leibniz',
    'nicolas-malebranche',
    'christian-wolff'
  ],

  keyConcepts: [
    'innisme',
    'idees-innees',
    'raison',
    'deduction',
    'substance',
    'cogito',
    'doute-mthodique',
    'diein',
    'monade',
    'harmonie-prtablie',
    'attribut',
    'mode',
    'principe-de-raison-suffisante',
    'intelligences',
    'vidence'
  ],

  variations: [
    {
      name: "Cartésianisme",
      description: "Descartes, Malebranche - Dualisme substance pensante/substance étendue. Innéisme modéré (idées innées venues de Dieu). Dieu garant de la vérité. Méthode analytique.",
      philosophers: ['rene-descartes', 'nicolas-malebranche']
    },
    {
      name: "Spinozisme",
      description: "Spinoza - Monisme : une seule substance (Dieu ou Nature). Panthéisme immanentiste. Éthique comme compréhension de la nécessité. Amour intellectuel de Dieu comme béatitude.",
      philosophers: ['baruch-spinoza']
    },
    {
      name: "Leibnizianisme",
      description: "Leibniz, Wolff - Monadologie, harmonie préétablie. Principe de raison suffisante, optimisme (meilleur des mondes possibles). Innéisme radical. Mathesis universalis.",
      philosophers: ['gottfried-leibniz', 'christian-wolff']
    }
  ],

  criticisms: [
    "Abstraction excessive - les idées innées sont abstraites et détachées de l'expérience",
    "Système fermé - la déduction ne produit rien de nouveau",
    "Idéologie de la clarté - tout ce qui est clair n'est pas vrai pour autant",
    "Dogmatisme - prétention à des certitudes absolues injustifiées",
    "Elitisme - philosophie pour esprits supérieurs, dédaigneuse du commun",
    "Mysticisme rationalisé - Dieu devient concept philosophique abstrait",
    "Physique spéculative - la métaphysique de la substance est invérifiable",
    "Mécanisme - réduction du vivant à la machine, négation du finalisme",
    "Conservatisme - la raison justifie l'ordre établi comme rationnel"
  ],

  influence: {
    on: [
      "Philosophie des Lumières - foi en la raison, critique de la tradition",
      "Révolution française - droits naturels de l'homme, contrat social",
      "Science moderne - mathématisation de la nature, méthode hypothético-déductive",
      "Idéalisme allemand - Kant, Fichte, Schelling, Hegel",
      "Mathématiques et logique - Leibniz comme précurseur de l'informatique",
      "Romantisme - réaction contre le rationalisme excessif",
      "Existentialisme - réaction contre le système rationaliste",
      "Philosophie analytique - critique du rationalisme via l'empirisme logique"
    ],
    in: [
      "France - cartésianisme dominant jusqu'au XXe siècle",
      "Allemagne - leibnizianisme puis idéalisme",
      "Pays-Bas - refuge pour Spinoza et les libres penseurs",
      "Angleterre - débat rationalistes/empiristes",
      "Europe entière - diffusion via les universités et les salons"
    ]
  },

  metadata: {
    representativeWorks: [
      "Discours de la méthode - Descartes (1637)",
      "Méditations métaphysiques - Descartes (1641)",
      "Éthique - Spinoza (1677)",
      "Monadologie - Leibniz (1714)",
      "Nouveaux essais sur l'entendement humain - Leibniz (1765)",
      "De la recherche de la vérité - Malebranche (1674-1675)",
      "Recherche de l'origine cartésienne - Malebranche (1674-1675)",
      "Philosophia rationalis sive logica - Wolff (1728)"
    ],
    relatedMovements: [
      "Empirisme",
      "Idéalisme allemand",
      "Lumières",
      "Criticisme",
      "Romantisme",
      "Philosophie analytique"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const rationalismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'rene-descartes',
    role: "Fondateur du rationalisme moderne",
    contribution: `Philosophe, mathématicien et scientifique français (1596-1650). Fondateur du rationalisme moderne et de la méthode scientifique. Dans le Discours de la méthode (1637), il propose une méthode nouvelle pour bien conduire sa raison : 1) évidence ne recevoir que des idées claires et distinctes ; 2) analyse diviser les difficultés ; 3) synthèse ordonner les pensées ; 4) énumérations complètes. Méditations métaphysiques (1641) : doute méthodique, cogito ("je pense, donc je suis") comme première certitude, preuve de Dieu (idée d'être parfait ne peut venir de moi imparfait), distinction âme-corps, garantie divine de la vérité claire et distincte. Innéisme modéré : certaines idées (Dieu, infini, substance) sont innées, gravées dans l'âme par Dieu. Dualisme substance pensante (âme) / substance étendue (corps) qui se rencontrent dans la glande pinéale (théorie des animaux-machines). Physique : mécanique universelle, loi de conservation du mouvement, tourbillons cosmiques. Mathématiques : géométrie analytique, invention des coordonnées cartésiennes. Le "je pense donc je suis" devient le point de départ de la philosophie moderne : sujet pensant comme centre de la connaissance. Influence immense sur la philosophie, la science, les mathématiques. Critiqué par les empiristes (Locke, Hume) et par Kant (l'idéalisme transcendantal).
`
  },
  {
    philosopherSlug: 'baruch-spinoza',
    role: "Rationaliste moniste et panthéiste",
    contribution: `Philosophe hollandais d'origine portugaise juive (1632-1677). Excommunié pour ses hérésies (panthéisme, refus de la Torah écrite). Vit de la fabrication de lentilles. Œuvre majeure : Éthique (publiée posthume 1677) en ordre géométrique (axiomes, propositions, démonstrations). Monisme : une seule substance infinie, Dieu ou Nature (Deus sive Natura). Cette substance a une infinité d'attributs dont nous connaissons deux : la pensée et l'étendue. Tout ce qui existe est un mode (modification) de cette substance unique. Panthéisme immanentiste : Dieu n'est pas transcendant mais immanent au monde comme sa cause immanente, non créateur ex nihilo. Déterminisme absolu : tout arrive par nécessité divine, pas de libre arbitre humain. Connaissance : trois degrés - imagination (opinion), raison, science intuitive (amour intellectuel de Dieu). Salut : non pas liberté d'indifférence mais compréhension joyeuse de notre place dans l'ordre nécessaire ("liberté" = conscience de la nécessité). Politique : contrat social basé sur la peur et l'espoir, droit naturel comme puissance d'exister. Traité théologico-politique (1670) : critique de l'interprétation littérale de la Bible, défense de la liberté de philosopher. Influence sur Hegel, Nietzsche, le romantisme, l'écologie contemporaine.
`
  },
  {
    philosopherSlug: 'gottfried-leibniz',
    role: "Systémateur du rationalisme et précurseur de l'informatique",
    contribution: `Philosophe, mathématicien, juriste, diplomate allemand (1646-1716). Inventeur du calcul infinitésimal (avec Newton), de la notation dyadique (binaire), précurseur de l'informatique (machine à calculer, caractéristique universelle). Nouveaux essais sur l'entendement humain (1765, écrit en 1704 contre Locke) : défense de l'innéisme contre l'empirisme ("nihil est in intellectu quod non prius fuerit in sensu, nisi intellectus ipse"). Monadologie (1714) : la réalité est composée de monades, substances simples sans parties, immatérielles, dont l'essence est la perception et l'appétit. Chaque monade reflète l'univers entier ("monade miroir vivant"). Harmonie préétablie : Dieu a synchronisé les monades de telle sorte que chacune se développe selon son propre principe tout en étant en harmonie avec les autres (pas d'action directe entre monades). Principe de raison suffisante : rien n'arrive sans raison ("pourquoi quelque chose plutôt que rien ?"). Principe de contradiction : A ne peut être à la fois A et non-A. Identité des indiscernables : il n'y a pas deux êtres exactement semblables. Optimisme : ce monde est le meilleur des mondes possibles car Dieu, étant parfait, a choisi le meilleur. Théodicée (1710) : réponse au problème du mal, Dieu n'est pas responsable du mal moral (liberté humaine) ni du mal physique (limites des créatures). Influence sur Wolff, Kant, Hegel, Whitehead, la logique moderne.
`
  },
  {
    philosopherSlug: 'nicolas-malebranche',
    role: "Cartésien et théoricien de l'occasionnalisme",
    contribution: `Prêtre oratorien français (1638-1715), lecteur de Descartes et d'Augustin. Œuvre majeure : De la recherche de la vérité (1674-1675). Occasionalisme : les créatures n'ont pas de puissance causale propre ; seule Dieu a une efficace véritable. Quand je décide de lever mon bras, c'est Dieu qui lève mon bras à cette occasion. Solution au problème de l'interaction âme-corps chez Descartes. Vision en Dieu : nous voyons les idées (archétypes éternels) en Dieu, non dans les choses. Dieu contient les idées de toutes choses créées comme modèles. L'âme est dans Dieu comme une partie dans le tout. Nos idées sont des perceptions divines. Théorie de la grâce : le péché d'Adam a corrompu la nature humaine, la grâce est nécessaire pour le salut. Déterminisme : tout arrive par la volonté de Dieu, y compris nos actions. Malebranche est un cartésien original qui pousse à l'extrême la dépendance totale de la créature envers le créateur. Influence sur Hume (causalité), Berkeley (vision en Dieu), Condillac.
`
  },
  {
    philosopherSlug: 'christian-wolff',
    role: "Systémateur et vulgarisateur du leibnizianisme",
    contribution: `Philosophe allemand (1679-1754), professeur à Halle puis Marburg. Systémateur et vulgarisateur de Leibniz, créateur de l'école wolffienne. Œuvre encyclopédique : Philosophia rationalis sive logica (1728), Philosophia prima sive ontologia (1729), Psychologia empirica (1732), Jus naturae (1740-1748). Distinction entre philosophie théorétique (logique, métaphysique, ontologie, cosmologie, psychologie, théologie naturelle) et philosophie pratique (éthique, politique, économie, droit). Méthode déductive stricte : définitions, axiomes, théorèmes, démonstrations. Influence majeure sur l'université allemande : le wolffianisme devient la philosophie officielle. Kant professe le wolffianisme avant de le critiquer. Wolff systématise le vocabulaire philosophique allemand (invention de nombreux termes). Érudit prolifique, il diffuse le rationalisme leibnizien auprès d'un large public. Influence sur Mendelssohn, Kant, Hegel.
`
  }
];
