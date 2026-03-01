/**
 * Scepticisme - Philosophical Movement Data
 * Courant philosophique remettant en cause la possibilité de connaissance certaine
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

export const scepticisme: MovementData = {
  id: 'scepticisme',
  name: "Scepticisme",
  slug: 'scepticisme',
  category: 'philosophie-antique',

  description: `Courant philosophique qui remet en cause la possibilité d'atteindre une vérité certaine et absolue. Le scepticisme (du grec skepsis, examen) ne nie pas la réalité mais suspend son jugement (epochè) sur toute affirmation dogmatique, reconnaissant les limites de la connaissance humaine.

Le scepticisme antique naît avec Pyrrhon d'Élis (IVe siècle av. J.-C.) qui enseigne l'ataraxie (tranquillité) comme résultat de la suspension du jugement. Face aux contradictions entre les philosophes, le sceptique refuse de prendre parti. L'école sceptique se développe avec Arcésilas et Carnéade à l'Académie, transformant le platonisme en scepticisme.

Sextus Empiricus (IIe-IIIe siècle) systématise le scepticisme dans ses 'Esquisses pyrrhoniennes'. Il expose les tropes (modes) d'argumentation sceptique : désaccord des philosophes, régression à l'infini, relativité, hypothèse arbitraire, cercle vicieux. Ces tropes visent à montrer que pour toute thèse, on peut produire une thèse opposée equally plausible.

Le scepticisme se divise en plusieurs courants. Le pyrrhonisme radical suspend tout jugement, y compris sur l'existence des choses. L'académisme probabiliste (Carnéade) accepte des degrés de probabilité. L'empirisme médical (Méthodiques) refuse de chercher les causes cachées et se contente des phénomènes observables.

L'influence du scepticisme est immense. Dans l'Antiquité, il influence le stoïcisme et la médecine. Au XVIe siècle, la redécouverte de Sextus Empiricus bouleverse la pensée européenne. Montaigne fait du scepticisme le cœur de sa philosophie ('Que sais-je ?'). Descartes utilise le doute sceptique comme méthode pour atteindre la certitude. Hume radicalise l'empirisme jusqu'au scepticisme. Wittgenstein finit par remettre en cause la possibilité de philosophie systématique.`,

  shortDefinition: "Suspension du jugement sur toute vérité dogmatique, reconnaissance des limites de la connaissance",

  period: "IVe siècle av. J.-C. - Present (pyrrhonisme antique + renaissances modernes)",

  origins: {
    context: "Crise de la philosophie dogmatique dans la Grèce hellénistique. Multiplication des écoles (stoïciens, épicuriens, péripatéticiens) se contredisant. Pyrrhon participe à l'expédition d'Alexandre, contact avec les sages indiens (gymnosophistes) qui pratiquent suspension de jugement.",
    predecessors: [
      "Démocrite - Scepticisme sur la connaissance des atomes",
      "Socrate - 'Je sais que je ne sais rien'",
      "Sophistes - Relativité de la vérité",
      "Médecine hippocratique - Observation sans hypothèses"
    ],
    reactionAgainst: [
      "Stoïcisme - Certitude dogmatique du logos",
      "Épicurisme - Atome comme vérité certaine",
      "Aristotélisme - Connaissance des causes",
      "Platonisme - Idées comme vérité absolue"
    ]
  },

  keyPrinciples: [
    "Époque (suspension du jugement) sur toute affirmation dogmatique",
    "Ataraxie comme but - tranquillité née de l'absence d'opinion",
    "Isosthénie - équilibre des arguments opposés",
    "Relativité de toute connaissance",
    "Impossibilité du criterium (critère de vérité)",
    "Phénomènes vs choses en soi - seuls les apparences sont accessibles",
    "Modes d'argumentation - tropes sceptiques",
    "Refus de l'arrogance dogmatique",
    "Vie conforme aux coutumes - pratique sans opinion"
  ],

  keyPhilosophers: [
    'pyrrhon',
    'arcesilas',
    'carnéade',
    'enésidème',
    'sextus-empiricus',
    'montaigne',
    'david-hume',
    'wittgenstein'
  ],

  keyConcepts: [
    'epochè',
    'ataraxie',
    'isosthenie',
    'tropes',
    'phenomene',
    'dogme',
    'probabilite',
    'doute',
    'critere',
    'relativite'
  ],

  variations: [
    {
      name: "Pyrrhonisme",
      description: "Pyrrhon, Enésidème, Sextus Empiricus - Scepticisme radical. Suspension totale de jugement, même sur l'existence des choses. Les tropes (10 modes d'Enésidème, 5 d'Agrippa) pour équilibrer tout argument. Vie pratique conforme aux apparences sans opinion dogmatique.",
      philosophers: ['pyrrhon', 'enesideme', 'sextus-empiricus']
    },
    {
      name: "Académisme sceptique",
      description: "Arcésilas, Carnéade - Nouvelle Académie. Scepticisme modéré acceptant la probabilité. Carnéade distingue le probable, le vraisemblable, le prouvé. Critique du stoïcisme contre les dogmes contradictoires.",
      philosophers: ['arcesilas', 'carnéade']
    },
    {
      name: "Empirisme médical",
      description: "Méthodiques - Secte médicale sceptique. Refus des causes cachées, observation des phénomènes seulement. Traitement basé sur l'expérience, pas la théorie. Influence sur Sextus Empiricus (médecin).",
      philosophers: []
    },
    {
      name: "Scepticisme moderne",
      description: "Montaigne, Hume, Wittgenstein - Renaissances du scepticisme. Montaigne ('Que sais-je ?'), Hume (causalité, induction), Wittgenstein (limites du langage). Utilisation comme méthode ou comme conclusion radicale.",
      philosophers: ['montaigne', 'david-hume', 'wittgenstein']
    }
  ],

  criticisms: [
    "Auto-réfutation - 'je sais qu'on ne peut rien savoir' est contradictoire",
    "Paralysie pratique - comment agir sans jugement ?",
    "Impossibilité d'argumenter - toute argumentation suppose des prémisses",
    "Insincérité - le sceptique ne peut pas croire sa propre doctrine",
    "Passivité intellectuelle - refus de chercher la vérité",
    "Relativisme - si tout est relatif, le scepticisme aussi"
  ],

  influence: {
    on: [
      "Stoïcisme - Réponse aux arguments sceptiques",
      "Descartes - Méthode du doute hyperbolique",
      "Empirisme anglais - Locke, Berkeley, Hume",
      "Philosophie analytique - Critique du langage",
      "Phénoménologie - Retour aux phénomènes",
      "Postmodernisme - Méfiance envers les métarécits",
      "Science moderne - Falsifiabilité (Popper)"
    ],
    in: [
      "Grèce hellénistique - Athènes, Alexandrie",
      "Rome antique - Académie, médecins",
      "Renaissance - Redécouverte de Sextus Empiricus",
      "France XVIe - Montaigne",
      "Écosse XVIIIe - Hume",
      "Autriche XXe - Wittgenstein"
    ]
  },

  metadata: {
    representativeWorks: [
      "Esquisses pyrrhoniennes - Sextus Empiricus (200)",
      "Contre les professeurs - Sextus Empiricus (200)",
      "Essais - Montaigne (1580)",
      "Traité de la nature humaine - Hume (1739)",
      "Recherches sur l'entendement humain - Hume (1748)",
      "De la certitude - Wittgenstein (1969)"
    ],
    relatedMovements: [
      "Stoïcisme",
      "Empirisme",
      "Phénoménologie",
      "Postmodernisme",
      "Empirisme logique"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const scepticismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'pyrrhon',
    role: "Fondateur du scepticisme (pyrrhonisme)",
    contribution: `Initiateur du scepticisme vers 300 av. J.-C. Participant à l'expédition d'Alexandre, rencontre les gymnosophistes indiens. Enseigne l'epochè (suspension du jugement) comme voie vers l'ataraxie. Pour tout argument, on peut opposer un argument contraire equally plausible. N'a rien écrit, son enseignement transmis par Timon. Le pyrrhonisme radical suspend même l'affirmation de l'existence des choses, se contentant des apparences (phénomènes).`
  },
  {
    philosopherSlug: 'sextus-empiricus',
    role: \"Systématicien du pyrrhonisme\",
    contribution: `Médecin et philosophe (IIe-IIIe siècle), auteur des 'Esquisses pyrrhoniennes' et 'Contre les professeurs'. Expose systématiquement le scepticisme pyrrhonien : 10 modes d'Enésidème, 5 modes d'Agrippa (désaccord, régression à l'infini, relativité, hypothèse, cercle vicieux). Distingue scepticisme philosophique (métaphysique) et médical (méthodiques). Son œuvre, redécouverte à la Renaissance, influencera Montaigne, Descartes et toute la philosophie moderne.`
  },
  {
    philosopherSlug: 'montaigne',
    role: "Sceptique moderne humaniste",
    contribution: `Auteur des 'Essais' (1580), place le scepticisme au cœur de sa pensée. 'Que sais-je ?' (emblème). Critique de la prétention humaine à la connaissance. S'inspire de Sextus Empiricus (traduit en 1562). Mais le scepticisme monte-scalien n'est pas une fin : il ouvre à la tolérance religieuse et à la sagesse pratique. Influence immense sur Descartes, Pascal, Rousseau et la philosophie du soupçon.`
  },
  {
    philosopherSlug: 'david-hume',
    role: "Sceptique empiriste radical",
    contribution: `Dans le 'Traité de la nature humaine' (1739) et les 'Recherches' (1748), pousse l'empirisme jusqu'au scepticisme. Critique de la causalité : nous ne voyons que succession, pas connexion nécessaire. Induction : inférence du passé au futur sans justification logique. Moi : bundle of perceptions, pas substance permanente. Scepticisme métaphysique mais naturalisme pratique : nous vivons par custom, pas par raison. Influence sur Kant ('réveil dogmatique'), le positivisme logique et la philosophie analytique.`
  }
];
