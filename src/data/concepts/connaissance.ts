/*
  Connaissance - Concept Data
  Épistémologie : vérité, croyance, justification, sources du savoir
*/
export const concept = {
  id: 'connaissance',
  name: 'Connaissance',
  slug: 'connaissance',
  category: 'epistemologie',
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: "La connaissance est la compréhension, l'acquisition ou la compréhension d'informations de faits ou de compétences. La philosophie distingue plusieurs types : la connaissance propositionnelle (savoir que) ; la connaissance procédurale (savoir comment) ; la connaissance par acquaintance (savoir par expérience directe). L'épistémologie analyse la nature, les sources et les limites de la connaissance. La définition classique de Platon (Théétète) est : connaissance = croyance vraie justifiée. Pour Descartes, la connaissance certaine commence par le cogito. Pour Hume, toute connaissance vient soit de l'impression (expérience) soit de l'idée (raison). Pour Kant, la connaissance est synthèse de sensibilité et d'entendement. Pour les empiristes, la connaissance vient de l'expérience. Pour les rationalistes, elle vient de la raison.",
  shortDefinition: 'Compréhension et acquisition du savoir, incluant vérité, croyance et justification',

  etymology: {
    latin: 'cognitio : cognoscere (connaître)',
    greek: 'gnosis (γνῶσις)',
    root: 'gno- (connaître) : racine indo-européenne',
    notes: 'La connaissance est liée à la reconnaissance, la capacité de distinguer et identifier'
  },

  reasoning: {
    // Perspectives par école philosophique
    perspectives: [
      {
        school: 'Rationalisme',
        philosopher: 'René Descartes',
        thesis: 'La connaissance vient de la raison et des idées innées',
        argument: 'Il existe des idées innées (idée de Dieu, de vérité, de substance) que l\'expérience ne peut pas expliquer. La raison peut atteindre des vérités indépendantes de l\'expérience (mathématiques, métaphysique). Le cogito ("je pense, donc je suis") est vérité première, indubitable, fondement de toute connaissance. La clarté et distinction sont critères de vérité.',
        conclusion: 'La connaissance comme déduction rationnelle et idées innées'
      },
      {
        school: 'Empirisme',
        philosopher: 'David Hume',
        thesis: 'Toute connaissance vient de l\'expérience',
        argument: 'L\'esprit à la naissance est tabula rasa (tableau vierge). Toutes nos idées viennent de l\'impression (expérience) ou de l\'idée (copie d\'impression). Pas d\'idées innées. Les relations causales ne sont pas observables mais habitudes de l\'esprit. L\'induction ne peut être justifiée rationnellement. Tout savoir vient de l\'expérience sensible.',
        conclusion: 'La connaissance comme généralisation à partir de l\'expérience sensible'
      },
      {
        school: 'Idéalisme',
        philosopher: 'Platon',
        thesis: 'La véritable connaissance est contemplation des Idées intelligibles',
        argument: 'Le monde sensible est opinion (doxa), changement, imperfection. Le monde intelligible des Idées est vérité (épistémè), éternité, perfection. La connaissance est anamnèse (réminiscence) : se souvenir des Idées contemplées avant la naissance. La dialectique est ascension vers les Idées. Le philosophe connaît véritablement, l\'opinionné croit savoir.',
        conclusion: 'La connaissance comme réminiscence des Idées éternelles'
      }
    ],
    principalArguments: [
      {
        argument: "Argument de la définition tripartite (Platon)",
        explanation: "La connaissance est croyance vraie justifiée. Je dois croire que p, p doit être vrai, et je dois avoir une justification bonne pour croire que p. Si l'un des trois manque, ce n'est pas la connaissance.",
        premises: ['La connaissance requiert la vérité (on ne peut pas connaître le faux)', 'Elle requiert la croyance (on ne peut pas connaître sans le croire)', 'Elle requiert la justification (la croyance vraie par accident n\'est pas connaissance)'],
        conclusion: 'Connaissance = Croyance Vraie Justifiée (CVJ)'
      },
      {
        argument: 'Argument empiriste (Locke, Hume)',
        explanation: "L'esprit à la naissance est tabula rasa (tableau vierge). Toutes nos idées viennent de l'expérience soit par sensation (expérience externe) soit par réflexion (expérience interne). Pas d'idées innées.",
        premises: ['L\'esprit naît vide', 'Toutes les idées sont dérivées de l\'expérience', 'L\'expérience est source de toutes nos connaissances'],
        conclusion: 'La connaissance vient entièrement de l\'expérience (empirisme)'
      },
      {
        argument: 'Argument rationaliste (Descartes)',
        explanation: 'Il existe des idées innées (idée de Dieu, de vérité, de substance). La raison peut atteindre des vérités indépendantes de l\'expérience (mathématiques, métaphysique). Le cogito est vérité première.',
        premises: ['J\'ai l\'idée de parfait/infini', 'Cette idée ne peut pas venir de l\'expérience (tout ce que j\'expérimente est fini/imparfait)', 'Donc elle vient d\'une source supérieure à l\'expérience'],
        conclusion: 'Il existe des connaissances a priori, indépendantes de l\'expérience (rationalisme)'
      }
    ],
    objections: [
      {
        objection: 'Objection sceptique (Hume)',
        content: 'L\'induction ne peut être justifiée rationnellement. Pourquoi croire que le futur ressemblera au passé ? La causalité n\'est pas observable, seulement habitude.',
        response: 'Kant : l\'induction est fondée sur les catégories a priori de l\'entendement. La causalité est condition de l\'expérience pas conclusion empirique.'
      },
      {
        objection: 'Objection du contre-exemple Gettier',
        content: 'La croyance vraie justifiée n\'est pas suffisante pour la connaissance. Gettier propose des cas où quelqu\'a une croyance vraie justifiée mais n\'a pas la connaissance (justification déconnectée de la vérité).',
        response: 'Il faut ajouter une quatrième condition : pas de fausseté épistémique (no false lemmas) ou lien causal entre justification et vérité.'
      }
    ],
    distinctions: [
      {
        distinction: 'Connaissance vs Opinion',
        explanation: 'La connaissance est certaine, justifiée, stable. L\'opinion est incertaine, changeante, non fondée. Pour Platon, l\'opinion porte sur le sensible, la connaissance sur l\'intelligible.'
      },
      {
        distinction: 'Connaissance a priori vs a posteriori',
        explanation: 'A priori : indépendante de l\'expérience (mathématiques, logique). A posteriori : dépendante de l\'expérience (sciences naturelles, histoire).'
      },
      {
        distinction: 'Analytique vs Synthétique',
        explanation: 'Analytique : prédicat contenu dans le sujet (tout célibataire est non marié). Synthétique : prédicat non contenu (tout célibataire est triste). Kant ajoute synthétique a priori.'
      }
    ]
  },

  relatedConcepts: [
    { concept: 'verite', relationship: 'La connaissance est toujours connaissance de la vérité. On ne peut pas connaître le faux, seulement le croire.', bidirectional: true },
    { concept: 'croyance', relationship: 'La connaissance est une croyance vraie justifiée. Toute connaissance est croyance, mais toute croyance n\'est pas connaissance.', bidirectional: true },
    { concept: 'science', relationship: 'La science est connaissance systématique, méthodique, du monde naturel. Elle cherche l\'explication causale.', bidirectional: true },
    { concept: 'raison', relationship: 'La raison est faculté de connaître. Pour les rationalistes, elle est source principale de connaissance.', bidirectional: true },
    { concept: 'experience', relationship: 'L\'expérience est source empirique de connaissance. Pour les empiristes, elle est source unique.', bidirectional: true },
    { concept: 'langage', relationship: 'Le langage est véhicule de la connaissance. Les limites du langage sont limites du monde (Wittgenstein).', bidirectional: true },
    { concept: 'scepticisme', relationship: 'Le scepticisme questionne la possibilité de la connaissance. Pyrrhon : suspendre le jugement. Hume : limites de l\'induction.', bidirectional: true },
    { concept: 'doute', relationship: 'Le doute méthodique (Descartes) est chemin vers la connaissance certaine. Le doute sceptique est fin de la connaissance.', bidirectional: true },
    { concept: 'etre', relationship: 'REVEALS', explanation: 'La connaissance est toujours connaissance de l\'être. Pour Heidegger, la vérité est dévoilement de l\'être. La question de l\'être précède toute connaissance.', bidirectional: true, category: 'metaphysique' },
    { concept: 'existence', relationship: 'FOLLOWS', explanation: 'Pour Kierkegaard, l\'existence précède la connaissance : on ne peut penser l\'existence, il faut la vivre. La connaissance systématique ne capture pas l\'existence.', bidirectional: true, category: 'metaphysique' },
    { concept: 'authenticite', relationship: 'LIMITED', explanation: 'La connaissance rationnelle est limitée face à l\'authenticité existentielle. L\'authenticité se vit plus qu\'elle ne se connaît.', bidirectional: true, category: 'existentialisme' },
    { concept: 'sens', relationship: 'GIVES', explanation: 'La connaissance donne sens à l\'expérience. Comprendre le monde, c\'est lui donner sens et signification.', bidirectional: true, category: 'existentialisme' }
  ],

  relatedMovements: [
    { movement: 'Empirisme', description: 'Connaissance vient de l\'expérience', keyFigures: ['Locke', 'Berkeley', 'Hume'] },
    { movement: 'Rationalisme', description: 'Connaissance vient de la raison', keyFigures: ['Descartes', 'Spinoza', 'Leibniz'] },
    { movement: 'Criticisme', description: 'Synthèse empirisme/rationalisme', keyFigures: ['Kant'] },
    { movement: 'Phénoménologie', description: 'Connaissance comme retour aux choses mêmes', keyFigures: ['Husserl', 'Heidegger', 'Merleau-Ponty'] },
    { movement: 'Pragmatisme', description: 'Connaissance comme outil d\'action', keyFigures: ['Peirce', 'James', 'Dewey'] },
    { movement: 'Scepticisme', description: 'Limites de la connaissance humaine', keyFigures: ['Pyrrhon', 'Hume', 'Montaigne'] }
  ],

  philosophicalAnalysis: {
    history: 'Platon : connaissance comme anamnèse (réminiscence). Aristote : connaissance par abstraction. Descartes : cogito comme fondement. Locke : tabula rasa. Hume : empirisme radical. Kant : révolution copernicienne. Hegel : savoir absolu. Phénoménologie : intentionnalité.',
    problems: [
      { problem: 'Problème de l\'induction', description: 'Pourquoi croire que le futur ressemblera au passé ?' },
      { problem: 'Problème de la justification', description: 'Qu\'est-ce qui justifie une croyance ? Régression infinie ?' },
      { problem: 'Problème du critère de vérité', description: 'Comment distinguer vraie et fausse connaissance ?' }
    ],
    debates: [
      {
        issue: 'Empirisme vs Rationalisme',
        positions: ['Empirisme : tout vient de l\'expérience', 'Rationalisme : il y a des idées innées', 'Kantisme : synthèse des deux']
      },
      {
        issue: 'Réalisme vs Idéalisme',
        positions: ['Réalisme : connaître le monde tel qu\'il est', 'Idéalisme : connaître seulement les apparences', 'Phénoménologie : connaître le monde vécu']
      }
    ]
  },

  variations: [
    {
      title: 'Croyance vraie justifiée (Platon)',
      description: 'Définition classique : connaissance = croyance + vérité + justification. Je dois croire que p, p doit être vrai, et je dois avoir une bonne justification. Contre-exemples Gettier montrent que cette définition est insuffisante mais elle reste le point de départ.'
    },
    {
      title: 'Tabula rasa (Locke)',
      description: "L'esprit à la naissance est tableau vierge, sans idées innées. Toutes les idées viennent de l'expérience : sensation (externe) et réflexion (interne). Critique des idées innées. Fondement de l'empirisme moderne."
    },
    {
      title: 'Idées innées (Descartes)',
      description: 'Certaines idées sont innées : idée de Dieu, de vérité, de substance, de moi. Elles ne peuvent pas venir de l\'expérience car l\'expérience ne me donne que du fini, contingent. Ces idées sont mises en moi par Dieu.'
    },
    {
      title: 'Synthèse a priori (Kant)',
      description: 'Kant découvre des jugements à la fois synthétiques (ajoutent du contenu) et a priori (indépendants de l\'expérience). Ex : "Tout événement a une cause". Ces jugements sont fondement de la science métaphysique.'
    },
    {
      title: 'Connaissance par acquaintance (Russell)',
      description: 'Distinction entre connaissance par description (connaissance indirecte, par description) et connaissance par acquaintance (connaissance directe, immédiate). Je connais par acquaintance : ma sensation présente, mes universaux, moi-même.'
    }
  ],

  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Définition de la connaissance comme croyance vraie justifiée' },
    { name: 'René Descartes', period: '1596-1650', contribution: 'Cogito comme fondement certain de la connaissance' },
    { name: 'John Locke', period: '1632-1704', contribution: 'Empirisme : tabula rasa, idées venant de l\'expérience' },
    { name: 'David Hume', period: '1711-1776', contribution: 'Empirisme radical, problème de l\'induction et de la causalité' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Révolution copernicienne, synthèse a priori' },
    { name: 'Bertrand Russell', period: '1872-1970', contribution: 'Connaissance par acquaintance vs description' },
    { name: 'Ludwig Wittgenstein', period: '1889-1951', contribution: 'Limites du langage comme limites du monde' },
    { name: 'Edmund Gettier', period: '1927-', contribution: 'Contre-exemples à la définition CVJ' }
  ],

  examples: [
    'La caverne de Platon : Les prisonniers voient des ombres et croient que la réalité est les ombres. Le philosophe sort, découvre le soleil (vérité), revient dire que les ombres ne sont pas la vraie réalité. L\'opinion (doxa) vs connaissance (episteme).',
    'Le cogito de Descartes : En doutant de tout, je découvre que je ne peux douter que je doute. "Je pense, donc je suis".',
    'Problème de l\'induction (Hume) : J\'ai vu le soleil se lever tous les matins. Pourquoi croire qu\'il se lèvera demain ? L\'induction (généralisation à partir de cas particuliers) ne peut être justifiée rationnellement, seulement par habitude.',
    'Gettier cas : Je vois une horloge qui marque 11h. Je crois qu\'il est 11h. Il est 11h (l\'horloge s\'est arrêtée à 11h la veille). J\'ai une croyance vraie justifiée mais je ne connais pas vraiment l\'heure (justification accidentelle).'
  ],

  sources: [
    {
      title: 'Théétète',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Définition de la connaissance',
      quotes: ['La connaissance est croyance vraie justifiée', 'L\'opinion est mobile, la connaissance stable']
    },
    {
      title: 'Méditations métaphysiques',
      author: 'René Descartes',
      year: 1641,
      type: 'BOOK' as const,
      reference: 'Cogito comme fondement',
      quotes: ['Je pense, donc je suis', 'Cette vérité est indubitable']
    },
    {
      title: "Enquête sur l'entendement humain",
      author: 'David Hume',
      year: 1748,
      type: 'BOOK' as const,
      reference: 'Empirisme radical',
      quotes: ['Toute connaissance vient de l\'expérience', 'L\'induction ne peut être justifiée']
    },
    {
      title: 'Critique de la raison pure',
      author: 'Immanuel Kant',
      year: 1781,
      type: 'BOOK' as const,
      reference: 'Synthèse a priori',
      quotes: ['La connaissance commence avec l\'expérience', 'Il y a des jugements synthétiques a priori']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle est la définition classique de la connaissance (Platon) ?',
      back: 'La connaissance est croyance vraie justifiée (CVJ). Je dois : 1) croire que p, 2) p doit être vrai, 3) je dois avoir une bonne justification pour croire que p. Si l\'un des trois manque, ce n\'est pas la connaissance mais l\'opinion ou l\'erreur.',
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre empirisme et rationalisme ?',
      back: "L'empirisme (Locke, Hume) soutient que toute connaissance vient de l'expérience : l'esprit naît tabula rasa. Le rationalisme (Descartes, Leibniz) soutient qu'il existe des idées innées et des vérités accessibles par la raison seule, indépendantes de l'expérience (mathématiques, métaphysique). Kant tente de synthétiser les deux.",
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce qu\'un jugement synthétique a priori chez Kant ?',
      back: 'Un jugement synthétique ajoute du contenu (non contenu dans le sujet). Un jugement a priori est indépendant de l\'expérience. Kant découvre des jugements à la fois synthétiques et a priori, comme "Tout événement a une cause".',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Descartes fonde la connaissance moderne ?',
      back: '"Je pense, donc je suis".',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Platon, la connaissance est {{croyance vraie justifiée}}. Pour Locke, l\'esprit est {{tabula rasa}}.',
      back: 'croyance vraie justifiée | tabula rasa',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'La connaissance peut-elle venir entièrement de l\'expérience ?',
      back: "Cette question divise empiristes et rationalistes. Pour les empiristes (Locke, Hume), oui : l'esprit naît vide (tabula rasa) et toutes les idées viennent de sensation ou réflexion. Pour les rationalistes (Descartes), non : il y a des idées innées (Dieu, vérité) que l'expérience ne peut pas expliquer. Kant tente de concilier : certes toute connaissance commence avec l'expérience mais pas toute vient de l'expérience. Il y a des structures a priori (espace, temps, catégories) qui conditionnent l'expérience. Le débat reste ouvert : notre cerveau est-il pré-câblé (innéiste) ou vierge (empiriste) ? La génétique et les neurosciences suggèrent une interaction complexe entre structures innées et apprentissage.",
      difficulty: 5
    }
  ],

  tags: ['connaissance', 'épistémologie', 'vérité', 'croyance', 'justification', 'empirisme', 'rationalisme', 'science', 'raison', 'expérience', 'scepticisme', 'kant', 'descartes', 'platon']
};
