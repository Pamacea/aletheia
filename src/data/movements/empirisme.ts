/**
 * Empirisme - Philosophical Movement Data
 * Courant philosophique moderne affirmant l'expérience comme source principale de connaissance
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

export const empirisme: MovementData = {
  id: 'empirisme',
  name: "Empirisme",
  slug: 'empirisme',
  category: 'philosophie-moderne',

  description: `Courant philosophique du XVIIe-XVIIIe siècle, né en Angleterre, qui affirme l'expérience comme source principale de connaissance. Les empiristes soutiennent que toutes nos idées dérivent de l'expérience sensorielle et que la raison sans expérience est vide ("nihil est in intellectu quod non prius fuerit in sensu").

L'empirisme émerge dans un contexte de révolution scientifique. Bacon, Boyle, Newton découvrent que la science doit être fondée sur l'observation et l'expérimentation, non sur l'autorité des Anciens. Cette méthode empirique en science inspire une philosophie empiriste qui fait de l'expérience la source de toute connaissance.

L'empirisme se caractérise par plusieurs thèses centrales :
- **Tabula rasa** : l'esprit à la naissance est comme une table rase, sans idées innées
- **Origine sensible** : toutes nos idées dérivent de l'expérience (sensations et réflexions)
- **Imitation** : l'esprit ne peut rien créer de lui-même, il combine seulement les matériaux donnés par l'expérience
- **Induction** : le raisonnement inductif (particulier → général) est la méthode d'acquisition de connaissances
- **Limites de la connaissance** : nous ne pouvons connaître que les phénomènes, pas les substances ou les causes ultimes

L'empirisme commence avec Francis Bacon qui propose une méthode inductive : observer les faits, éliminer les hypothèses fausses, atteindre les axiomes généraux. John Locke fonde l'empirisme moderne dans l'Essai sur l'entendement humain (1690). Il distingue idées simples (venues des sens) et idées complexes (combinées par l'esprit). Rejette les idées innées : même les principes logiques et moraux s'apprennent par l'expérience.

George Berkeley radicalise l'empirisme en devenant immatérialiste. Pour lui, "être c'est être perçu" (esse est percipi). Les objets matériels n'existent pas indépendamment de la perception : ce sont des collections d'idées dans les esprits finis (humains) et infini (Dieu). Dieu perçoit tout continuellement, assurant l'existence du monde quand nous ne le percevons pas.

David Hume pousse l'empirisme à sa conclusion sceptique. Dans l'Enquête sur l'entendement humain (1748), il soutient que toutes nos idées dérivent des impressions (sensations vives). La causalité n'est pas une relation nécessaire que nous percevons dans les choses, mais une habitude de l'esprit : après avoir vu A régulièrement suivi de B, nous attendons B quand nous voyons A. L'induction n'a pas de fondement rationnel, c'est une coutume psychologique. Le moi est un faisceau de perceptions, pas une substance permanente. La religion n'a pas de fondement rationnel, elle repose sur la foi et l'expérience du miracle.

L'empirisme influence profondément la philosophie moderne. Kant, éveillé de son "dogmatisme" par Hume, propose le criticisme : la connaissance commence avec l'expérience mais ne vient pas toute de l'expérience (jugements synthétiques a priori). L'empirisme continue dans le positivisme logique (Cercle de Vienne), le pragmatisme américain (James, Dewey), et la philosophie analytique (Russell, Wittgenstein).`,

  shortDefinition: "L'expérience comme source de toute connaissance - tabula rasa, idées dérivées des sens, méthode inductive",

  period: "XVIIe-XVIIIe siècle (1620-1776)",

  origins: {
    context: "Révolution scientifique (Bacon, Boyle, Newton). Montée de la méthode expérimentale contre l'autorité d'Aristote et de l'Église. Développement de la médecine, de la chimie, de la physique. Contexte religieux : protestantisme, individualisme.",
    predecessors: [
      "Aristote - Emphase sur l'observation, bien que contrairement à l'empirisme moderne il accepte l'innéisme",
      "Francis Bacon - Méthode inductive, éloge de l'expérience contre les idoles",
      "William of Ockham - Nominalisme, critique des universaux",
      "Montaigne - Pyrrhonisme, critique de la prétention à la certitude",
      "Sceptiques antiques - Pyrrhon, Sextus Empiricus"
    ],
    reactionAgainst: [
      "Innéisme - Refus des idées innées, l'esprit est tabula rase",
      "Rationalisme - Critique de la raison comme source de connaissance a priori",
      "Scholastique - Refus de l'autorité d'Aristote et de la tradition",
      "Cartésianisme - Critique du cogito et des idées innées",
      "Métaphysique traditionnelle - Critique des notions de substance, causalité, âme"
    ]
  },

  keyPrinciples: [
    "Toute connaissance dérive de l'expérience",
    "L'esprit à la naissance est une table rase (tabula rasa)",
    "Les idées sont des copies ou des combinaisons d'impressions sensorielles",
    "La méthode inductive est la méthode scientifique idéale",
    "Les limites de la connaissance sont fixées par l'expérience",
    "Les concepts métaphysiques (substance, causalité, âme) sont critiquables",
    "La raison sans expérience est vide",
    "Le langage reflète l'expérience, pas un ordre rationnel des choses",
    "La coutume et l'habitude jouent un rôle majeur dans la croyance",
    "Le scepticisme modéré est une attitude philosophique légitime"
  ],

  keyPhilosophers: [
    'francis-bacon',
    'john-locke',
    'george-berkeley',
    'david-hume',
    'etienne-bonnot-de-condillac'
  ],

  keyConcepts: [
    'tabula-rasa',
    'experience',
    'sensation',
    'reflexion',
    'idee',
    'impression',
    'induction',
    'causalite',
    'substance',
    'habitude',
    'coutume',
    'association',
    'immaterialisme',
    'scepticisme'
  ],

  variations: [
    {
      name: "Empirisme modéré",
      description: "Locke, Condillac - Empirisme classique avec reconnaissance d'une certaine activité de l'esprit (réflexion, abstraction, comparaison). Les idées complexes sont construites à partir d'idées simples.",
      philosophers: ['john-locke', 'etienne-bonnot-de-condillac']
    },
    {
      name: "Immatérialisme",
      description: "Berkeley - "Être c'est être perçu". Critique de la matière comme substance inconnue. Les objets sont des collections d'idées dans les esprits humains et divin. Dieu garantit l'existence du monde.",
      philosophers: ['george-berkeley']
    },
    {
      name: "Empirisme sceptique",
      description: "Hume - Radicalisation empiriste : critique de la causalité, de l'induction, de l'identité personnelle, du miracle. La religion n'a pas de fondement rationnel. L'habitude explique la croyance.",
      philosophers: ['david-hume']
    }
  ],

  criticisms: [
    "Problème de l'induction - comment justifier l'inférence du passé au futur ?",
    "Scepticisme excessif - si tout vient de l'expérience, comment connaître la vérité ?",
    "Autodestruction - la thèse empiriste se contredit elle-même (elle n'est pas fondée sur l'expérience)",
    "Réductionnisme - réduit la pensée à la sensation, nie la spécificité de l'esprit",
    "Passivité de l'esprit - l'esprit n'est passif réceptacle, il est aussi actif",
    "Conceptualisme insuffisant - ne rend pas compte des concepts mathématiques et logiques",
    "Relativisme - si tout vient de l'expérience, chaque individu a sa propre vérité",
    "Négation du transcendantal - ne peut expliquer les conditions de possibilité de l'expérience",
    "Matérialisme implicite - tend vers un matérialisme réducteur"
  ],

  influence: {
    on: [
      "Positivisme logique - vérificationnisme, critique de la métaphysique",
      "Pragmatisme américain - vérité comme utilité, expérience comme méthode",
      "Philosophie analytique - analyse du langage, critique de la métaphysique",
      "Psychologie associationniste - lois de l'association, behaviorisme",
      "Science moderne - méthode expérimentale, statistique",
      "Utilitarisme - morale basée sur l'expérience du plaisir et de la douleur",
      "Libéralisme politique - droits naturels fondés sur l'expérience",
      "Phénoménologie - retour aux choses mêmes, description de l'expérience"
    ],
    in: [
      "Angleterre - empirisme dominant (Locke, Berkeley, Hume)",
      "Écosse - réalisme empirique (Reid)",
      "France - Condillac, sensualisme",
      "Allemagne - influence sur Kant (éveil du dogmatisme)",
      "Amérique - pragmatisme (James, Dewey, Peirce)",
      "Europe entière - via les Lumières"
    ]
  },

  metadata: {
    representativeWorks: [
      "Novum Organum - Francis Bacon (1620)",
      "Essai sur l'entendement humain - John Locke (1690)",
      "Principes de la connaissance humaine - George Berkeley (1710)",
      "Trois dialogues entre Hylas et Philonous - George Berkeley (1713)",
      "Enquête sur l'entendement humain - David Hume (1748)",
      "Traité de la nature humaine - David Hume (1739-1740)",
      "Traité des sensations - Étienne Bonnot de Condillac (1754)",
      "Dialogues sur la religion naturelle - David Hume (1779, posthume)"
    ],
    relatedMovements: [
      "Rationalisme",
      "Positivisme",
      "Pragmatisme",
      "Philosophie analytique",
      "Criticisme",
      "Phénoménologie"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const empirismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'francis-bacon',
    role: "Précurseur de l'empirisme et de la méthode scientifique",
    contribution: `Chancelier d'Angleterre (1561-1626), philosophe et scientifique. Novum Organum (1620) : critique de l'Organon d'Aristote et proposition d'une nouvelle méthode inductive. Idéoles de la tribu (erreurs inhérentes à la nature humaine), de la caverne (erreurs individuelles), du marché (erreurs du langage), du théâtre (erreurs philosophiques). Méthode inductive : tables de présence, d'absence, de degrés pour éliminer les hypothèses fausses et atteindre les axiomes généraux ("véritable induction"). "Savoir c'est pouvoir" : la science doit servir à maîtriser la nature pour le bien-être humain. Bacon est un précurseur de l'empirisme, bien qu'il ne soit pas un empiriste complet (il accepte l'existence de Dieu, de l'âme, des formes). Influence sur la Royal Society, Newton, la méthode scientifique moderne.
`
  },
  {
    philosopherSlug: 'john-locke',
    role: "Fondateur de l'empirisme moderne",
    contribution: `Philosophe et médecin anglais (1632-1704), figure majeure des Lumières. Essai sur l'entendement humain (1690) : ouvrage fondateur de l'empirisme. Livre I : critique des idées innées (même les principes logiques et moraux s'apprennent). Livre II : origine des idées dans l'expérience (sensation et réflexion). Idées simples (venues des sens) et idées complexes (combinées par l'esprit : modes, substances, relations). Qualités premières et secondes des corps. Livre III : langage, mots comme signes d'idées. Livre IV : connaissance comme perception de l'accord ou du désaccord entre idées, degrés de connaissance (intuitive, démonstrative, sensitive). Traité du gouvernement civil (1689) : droits naturels (vie, liberté, propriété), gouvernement par consentement, droit de résistance. Locke a une influence immense sur la philosophie, la politique, l'éducation (Quelques pensées sur l'éducation, 1693). Critiqué par Berkeley, Hume, Leibniz.
`
  },
  {
    philosopherSlug: 'george-berkeley',
    role: "Immatérialiste et critique de la matière",
    contribution: `Évêque anglican irlandais (1685-1753), philosophe idéaliste. Principes de la connaissance humaine (1710) et Trois dialogues entre Hylas et Philonous (1713) : critique du concept de matière comme substance existant indépendamment de la perception. "Être c'est être perçu" (esse est percipi) : les objets sont des collections d'idées dans les esprits. L'existence d'une substance matérielle inconnue supportant les qualités est une notion inintelligible. Dieu perçoit tout continuellement, assurant l'existence du monde quand nous ne le percevons pas. Berkeley est un empiriste conséquent : il refuse les substances abstraites (matière) que Locke accepte encore. Sa thèse semble paradoxale mais vise à défendre l'immatérialisme contre l'athéisme (la matière comme concurrente de Dieu). Siris (1744) : poème philosophique sur l'eau de goudron comme panacée, mais aussi méditation sur la causalité, la lumière, Dieu. Influence sur Hume, Kant, la phénoménologie.
`
  },
  {
    philosopherSlug: 'david-hume',
    role: "Empiriste sceptique et critique de la causalité",
    contribution: `Philosophe et historien écossais (1711-1776), figure majeure du scepticisme. Traité de la nature humaine (1739-1740, échec éditorial), puis Enquête sur l'entendement humain (1748). Critique de la causalité : nous ne percevons jamais de connexion nécessaire entre cause et effet, seulement une succession constante. L'induction (passer du passé au futur) n'a pas de fondement rationnel, c'est une habitude de l'esprit (custom). Critique de l'identité personnelle : le moi est un faisceau de perceptions, pas une substance permanente. Critique du miracle : un miracle est une violation des lois de la nature, mais le témoignage humain est toujours moins certain que l'expérience uniforme de la nature. Dialogues sur la religion naturelle (1779) : critique des preuves de l'existence de Dieu (cosmologique, téléologique), problème du mal. Hume est un empiriste radical qui pousse l'empirisme à sa conclusion sceptique. Influence sur Kant ("éveillé de son sommeil dogmatique"), le positivisme logique, la philosophie analytique.
`
  },
  {
    philosopherSlug: 'etienne-bonnot-de-condillac',
    role: "Sensualiste et vulgarisateur de l'empirisme en France",
    contribution: `Abbé et philosophe français (1714-1780). Traité des systèmes (1749) : critique des systèmes métaphysiques (rationalistes) en opposition à Locke. Traité des sensations (1754) : statue qui acquiert toutes les facultés par l'expérience sensorielle. Sensation transformée : attention, comparaison, jugement, réflexion, désir. Le langage analyse les méthodes de signes. Condillac radicalise l'empirisme de Locke : toutes les facultés de l'esprit dérivent de la sensation transformée. Leibniz avait ironisé sur la formule empiriste "nihil est in intellectu quod non prius fuerit in sensu" en ajoutant "nisi intellectus ipse" (sauf l'entendement lui-même). Condillac répond : même l'entendement vient de la sensation. Influence sur la philosophie des Lumières françaises, l'idéologie (Destutt de Tracy, Cabanis), la psychologie associationniste.
`
  }
];
