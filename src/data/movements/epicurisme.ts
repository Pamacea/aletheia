/**
 * Épicurisme - Philosophical Movement Data
 * École philosophique fondée par Épicure (IVe siècle av. J.-C.)
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

export const epicurisme: MovementData = {
  id: 'epicurisme',
  name: "Épicurisme",
  slug: 'epicurisme',
  category: 'philosophie-antique',

  description: `École philosophique fondée par Épicure à Athènes en 306 av. J.-C., proposant une philosophie du bonheur basée sur la recherche du plaisir compris comme absence de trouble (ataraxie) et de douleur (aponie). Contrairement à la caricature courante, l'épicurisme ne préconise pas les plaisirs sensuels excessifs mais une vie simple, rationnelle et centrée sur l'amitié.

L'épicurisme se fonde sur une physique atomiste inspirée de Démocrite : tout est composé d'atomes et de vide. L'âme elle-même est matérielle, composée d'atomes fins, et se dissout à la mort. Cette thèse a une conséquence libératrice : il n'y a rien à craindre de la mort, puisque 'la mort n'est rien pour nous' - quand nous sommes, elle n'est pas là, et quand elle est là, nous ne sommes plus.

En épistémologie, Épicure défend un empirisme radical : toutes nos connaissances viennent des sens. La pensée ne fait que combiner des images issues des sensations. La canonique (critère de la vérité) repose sur les sensations, les préconceptions (notions innées) et les sentiments (plaisir/douleur comme jugement de valeur).

L'éthique épicurienne est hédoniste mais raffinée. Le plaisir est le bien suprême, mais il faut distinguer les plaisirs naturels et nécessaires (manger, s'abriter), naturels mais non nécessaires (mets raffinés), et ni naturels ni nécessaires (gloire, richesse). Le sage ne recherche que les premiers, faciles à obtenir. Les désirs illimités sont source d'angoisse et doivent être éliminés.

La vie idéale se vit à l'écart de la politique, dans le 'Jardin' (lieu où Épicure enseignait), entouré d'amis fidèles. L'amitié est une valeur centrale. Épicure propose aussi une théologie originale : les dieux existent, vivent dans un bonheur parfait, mais ne s'occupent pas des humains. Les phénomènes naturels ont des causes naturelles, pas divines.

L'influence de l'épicurisme s'étend sur sept siècles. Lucrèce la diffuse dans 'De la nature des choses'. Au XVIIe siècle, Gassendi et Pierre Charron renouent avec l'épicurisme chrétien. Les Lumières (Diderot, d'Holbach) redécouvrent le matérialisme épicurien. Nietzsche voit en Épicure un précurseur de sa philosophie de la vie.`,

  shortDefinition: \"Le bonheur par l'absence de trouble (ataraxie) et les plaisirs simples",

  period: "IVe siècle av. J.-C. - IIIe siècle apr. J.-C. (-341 à 270)",

  origins: {
    context: "Athènes de l'époque hellénistique, après la mort d'Alexandre le Grand. Période d'instabilité politique, de changement de valeurs, de recherche de bonheur individuel. Concurrence avec le stoïcisme, le scepticisme et le cynisme.\",
    predecessors: [
      \"Démocrite - Atomisme, matérialisme\",
      \"Aristippe de Cyrène - Hédonisme cyrénaïque (plaisir immédiat)\",
      \"Pyrrhon - Scepticisme, suspension du jugement\",
      \"Anaxagore - Physique et cosmologie\"
    ],
    reactionAgainst: [
      \"Platonisme - Monde des Idées, immortalité de l'âme",
      "Stoïcisme - Devoir, vertu comme seule fin",
      "Aristotélisme - Vie politique comme fin de l'homme\",
      \"Religion traditionnelle - Peur des dieux et de l'enfer"
    ]
  },

  keyPrinciples: [
    "Plaisir comme bien suprême, compris comme absence de trouble",
    "Ataraxie - tranquillité de l'âme\",
    \"Aponie - absence de douleur physique\",
    \"Atomisme - tout est atomes et vide\",
    \"Mort dissolutive de l'âme - rien à craindre",
    "Empirisme - les sens comme source de connaissance",
    "Autosuffisance - vivre avec peu",
    "Amitié comme bien suprême",
    "Vie retirée - refus de la politique",
    "Dieux indifférents - pas de providence"
  ],

  keyPhilosophers: [
    'epicure',
    'lucrece',
    'philodeme',
    'diogene-denoanda'
  ],

  keyConcepts: [
    'ataraxie',
    'aponie',
    'plaisir',
    'desir',
    'amitie',
    'mort',
    'atomisme',
    'clinamen',
    'physique',
    'canonique'
  ],

  variations: [
    {
      name: "Épicurisme orthodoxe",
      description: "Épicure - Physique atomiste, éthique du plaisir comme absence de trouble. Lettres à Hérodote, Pythoclès et Ménécée. Maximes capitales.",
      philosophers: ['epicure']
    },
    {
      name: "Poésie didactique",
      description: "Lucrèce - 'De la nature des choses'(Ier s. av. J.-C.). Diffusion de l'épicurisme à Rome par la poésie. Exposition systématique de physique, éthique et épistémologie épicuriennes.\",
      philosophers: ['lucrece']
    },
    {
      name: \"Épicurisme romain\",
      description: \"Philodème de Gadara, Diogène d'Œnoanda - Adaptation romaine. Philodème : poésie, esthétique, critique. Diogène : inscription monumentale exposant l'épicurisme.\",
      philosophers: ['philodeme', 'diogene-denoanda']
    }
  ],

  criticisms: [
    \"Hédonisme égoïste - centré sur le plaisir individuel\",
    \"Passivité politique - retrait de la cité\",
    \"Pessimisme - refus de l'engagement et de la grandeur",
    "Contradiction - vie simple mais nécessite ressources",
    "Matérialisme réducteur - nie la dimension spirituelle",
    "Athéisme pratique - dieux sans influence sur le monde",
    "Critique chrétienne - hérésie matérialiste"
  ],

  influence: {
    on: [
      "Lucrèce - Poème 'De la nature des choses'",
      "Sextus Empiricus - Scepticisme empirique",
      "Gassendi - Renaissance de l'épicurisme chrétien\",
      \"Les Lumières - Diderot, d'Holbach, La Mettrie",
      "Utilitarisme - Bentham, Mill (calcul des plaisirs)",
      "Nietzsche - Philosophie de la vie et du corps",
      "Hédonisme contemporain - éthique du bien-être"
    ],
    in: [
      "Grèce hellénistique - Athènes, Le Jardin",
      "Rome antique - Lucrèce, Philodème",
      "Renaissance - Gassendi, Pierre Charron",
      "Lumières - France, Angleterre, Allemagne",
      "Époque moderne - Mouvements hédonistes"
    ]
  },

  metadata: {
    representativeWorks: [
      "Lettre à Hérodote - Épicure (-300)",
      "Lettre à Pythoclès - Épicure (-300)",
      "Lettre à Ménécée - Épicure (-300)",
      "Maximes capitales - Épicure (-300)",
      "De la nature des choses - Lucrèce (-55)",
      "Traité de la musique - Philodème (-75)"
    ],
    relatedMovements: [
      "Atomisme",
      "Scepticisme",
      "Stoïcisme",
      "Utilitarisme",
      "Hédonisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const epicurismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'epicure',
    role: "Fondateur de l'école épicurienne\",
    contribution: `Fonde le Jardin à Athènes en 306 av. J.-C., école mixte accueillant hommes, femmes, esclaves. Développe un système complet : physique (atomisme, clinamen), canonique (empirisme), éthique (plaisir comme ataraxie). Lettres à Hérodote (physique), Pythoclès (astronomie), Ménécée (éthique). Maximes capitales résumant la doctrine. Thèse libératrice : 'la mort n'est rien pour nous'. Éloge de l'amitié, de la vie simple, de l'autosuffisance. Critique de la religion, de la peur de la mort, des désirs illimités.`
  },
  {
    philosopherSlug: 'lucrece',
    role: "Poète et vulgarisateur de l'épicurisme",
    contribution: `Auteur de 'De la nature des choses' (Ier s. av. J.-C.), poème didactique exposant systématiquement l'épicurisme. Six livres couvrant atomisme, cosmologie, âme, sensation, éthique. Argument célèbre contre la peur de la mort : 'la mort ne nous concerne pas'. Formule le principe du clinamen (déviation des atomes) pour expliquer la liberté. Diffuse l'épicurisme à Rome avec une puissance poétique exceptionnelle. Son œuvre redécouverte à la Renaissance influencera Gassendi et les Lumières.`
  },
  {
    philosopherSlug: 'philodeme',
    role: "Épicurien romain, critique et poète",
    contribution: `Philosophe et poète grec vivant à Rome (Ier s. av. J.-C.), protégé de Lucius Calpurnius Piso. Bibliothèque d'Herculanum contient ses œuvres. Traité du luxe (défense modérée), de la musique, de la poétique, de la rhétorique. Développe l'épicurisme vers l'esthétique et la critique littéraire. Influence sur Horace et la poésie latine.`
  }
];
