/**
 * Aristotélisme - Philosophical Movement Data
 * Système philosophique fondé par Aristote, centré sur l'être en tant qu'être et la logique
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

export const aristotelisme: MovementData = {
  id: 'aristotelisme',
  name: "Aristotélisme",
  slug: 'aristotelisme',
  category: 'philosophie-antique',

  description: `Système philosophique fondé par Aristote (384-322 av. J.-C.), élève de Platon, caractérisé par l'analyse de l'être en tant qu'être, la logique formelle, l'empirisme modéré et l'organicisme. Contrairement au platonisme, Aristote ancre les Idées dans les choses mêmes.

L'aristotélisme naît à Athènes au IVe siècle av. J.-C., quand Aristote fonde le Lycée (école péripatétique) après avoir été 20 ans à l'Académie de Platon. Il rompt avec le platonisme sur plusieurs points cruciaux : critique de la théorie des Idées séparées, refus du dualisme monde intelligible/monde sensible, valorisation de l'expérience sensible.

La philosophie aristotélicienne se caractérise par son encyclopédisme et son systématisme. Aristote aborde tous les domaines du savoir : logique (Organon), physique, biologie, métaphysique, éthique, politique, poétique, rhétorique. Son œuvre forme un système cohérent où chaque discipline s'articule avec les autres.

Au cœur de l'aristotélisme se trouve la métaphysique comme science de l'être en tant qu'être. Contrairement à Platon qui sépare les Idées des choses, Aristote affirme que les Formes (essences) sont immanentes aux choses : chaque substance est composée de matière et de forme (hylémorphisme). Le changement s'explique par quatre causes : matérielle (ce dont est faite une chose), formelle (l'essence), efficiente (ce qui la produit), finale (sa finalité). La téléologie (finalité) est omniprésente dans la nature : chaque être tend vers sa fin (entéléchie).

La logique aristotélicienne est la première logique formelle de l'histoire. Aristote invente le syllogisme (raisonnement déductif), les catégories (les prédicables), la théorie de la définition. Son Organon reste la référence en logique jusqu'à Leibniz et Kant.

En éthique, Aristote développe une philosophie de la vie heureuse (eudémonisme) dans l'Éthique à Nicomaque. Le bonheur n'est pas le plaisir mais l'activité de l'âme conforme à la vertu. La vertu est médiété (le juste milieu entre excès et défaut) acquise par l'habitude. Le philosophe est le plus heureux car il contemple la vérité (vie théorétique). L'amitié est la plus grande des relations extérieures.

En politique, Aristote analyse dans la Politique 158 constitutions grecques. L'homme est un "animal politique" naturellement fait pour la cité. La cité existe par nature pour permettre la vie bonne. Les régimes politiques se classent en bons (monarchie, aristocratie, république) et corrompus (tyrannie, oligarchie, démocratie). La meilleure constitution est un mélange équilibré.

En biologie, Aristote est le premier grand naturaliste. Il observe et classe plus de 500 espèces animales. Son scala naturae (chaîne des êtres) ordonne la nature du minéral à l'homme, chaque niveau ayant sa perfection propre. La génération, la croissance, la nutrition sont les fonctions vitales de l'âme (puissance de vivre).

L'aristotélisme va dominer la pensée occidentale et arabe pendant 2000 ans. Via les commentateurs arabes (Avicenne, Averroès), il revient en Occident au XIIIe siècle et devient la philosophie officielle de l'Église (via saint Thomas d'Aquin). Critiqué par les modernes (Descartes, Galilée, Newton), il reste cependant une référence majeure pour la logique, l'éthique des vertus, la philosophie de la biologie.`,

  shortDefinition: "L'être en tant qu'être - étude systématique de la réalité, logique formelle, et immanence des formes dans les choses",

  period: "Antiquité (IVe siècle av. J.-C. - XVIIe siècle)",

  origins: {
    context: "Athènes au IVe siècle av. J.-C., après Platon. Aristote fonde le Lycée (école péripatétique) en 335 av. J.-C. avec le soutien d'Alexandre le Grand. Constitution de la grande bibliothèque du Lycée, travaux empiriques en biologie et physique.",
    predecessors: [
      "Platon - Maître pendant 20 ans, dont Aristote critique la théorie des Idées séparées",
      "Socrate - Maître indirect via Platon, méthode dialectique",
      "Les Présocratiques - Études sur la nature (physis), les éléments, les causes",
      "Hippocrate - Médecine et observation empirique",
      "Les sophistes - Rhétorique et argumentation",
      "Pythagore - Mathématiques et structure du réel"
    ],
    reactionAgainst: [
      "Platonisme - Refus des Idées séparées des choses, critique du dualisme monde intelligible/sensible",
      "Idéalisme - La réalité est dans les choses concrètes, pas dans un monde séparé",
      "Dualisme âme-corps - L'âme est forme du corps, pas une substance séparée",
      "Théorie de la réminiscence - La connaissance vient de l'expérience, pas d'une vie antérieure",
      "Cités idéales - La politique doit partir des constitutions existantes, pas d'un modèle abstrait"
    ]
  },

  keyPrinciples: [
    "L'être en tant qu'être - la métaphysique comme science des premiers principes",
    "Hylémorphisme - toute substance est composée de matière et de forme",
    "Les quatre causes - matérielle, formelle, efficiente, finale expliquent la réalité",
    "Acte et puissance - le changement comme passage de la puissance à l'acte",
    "Téléologie - la nature est orientée vers des fins (entéléchie)",
    "Logique formelle - syllogisme, catégories, définition",
    "Empirisme modéré - la connaissance commence par les sens, mais va au-delà",
    "Éthique des vertus - le bonheur comme activité conforme à la vertu",
    "L'homme comme animal politique - la cité est naturelle",
    "Scala naturae - hiérarchie des êtres du minéral à l'homme"
  ],

  keyPhilosophers: [
    'aristote',
    'avicenne',
    'averroes',
    'saint-thomas-d-aquin',
    'maimonide'
  ],

  keyConcepts: [
    'etre-en-tant-quetre',
    'substance',
    'matiere',
    'forme',
    'acte',
    'puissance',
    'cause',
    'teleologie',
    'entelechie',
    'syllogisme',
    'categories',
    'vertu',
    'eudemonisme',
    'phronesis',
    'mesure',
    'citoyen'
  ],

  variations: [
    {
      name: "Aristotélisme antique",
      description: "Aristote et le Lycée - Développement initial du système, œuvre encyclopédique. L'école péripatétique continue après sa mort (Théophraste, Straton).",
      philosophers: ['aristote']
    },
    {
      name: "Aristotélisme arabe",
      description: "Avicenne, Averroès, Maimonide - Traduction et commentaire d'Aristote en arabe. Synthèse avec religion monothéiste. Distinction essence/existence (Avicenne), intellect unitaire (Averroès).",
      philosophers: ['avicenne', 'averroes', 'maimonide']
    },
    {
      name: "Aristotélisme médiéval",
      description: "Saint Thomas d'Aquin, les scolastiques - Synthèse entre aristotélisme et christianisme. Cinq voies pour prouver Dieu, loi naturelle, vertus cardinales et théologales.",
      philosophers: ['saint-thomas-d-aquin']
    },
    {
      name: "Néo-aristotélisme",
      description: "Aristotélisme moderne adapté - MacIntyre, Anscombe, Nussbaum. Retour à l'éthique des vertus contre le déontologisme et le conséquentialisme.",
      philosophers: []
    }
  ],

  criticisms: [
    "Statique et figé - la téléologie semble nier l'innovation et le hasard",
    "Finalité sans agent - qui fixe les fins dans la nature ?",
    "Essentialisme - les espèces sont fixées, pas d'évolution",
    "Hylémorphisme obscur - le couple matière/forme n'est pas clair",
    "Physique incorrecte - mouvement, causalité, géocentrisme contredits par la physique moderne",
    "Conservatisme politique - justifie l'esclavage, l'inégalité naturelle",
    "Androcentrisme - la femme vue comme homme imparfait",
    "Logique des prédicats limitée - ne capture pas toute la validité déductive",
    "Élitisme intellectuel - la vie théorétique est supérieure à la vie pratique"
  ],

  influence: {
    on: [
      "Philosophie médiévale - base de la scolastique via saint Thomas",
      "Philosophie arabe et juive - Avicenne, Averroès, Maimonide",
      "Logique moderne - inventeur du syllogisme et de la logique formelle",
      "Biologie et classification - précurseur de la taxinomie",
      "Éthique des vertus - renouveau contemporain (MacIntyre, Nussbaum)",
      "Philosophie de la religion - cinq voies pour prouver Dieu",
      "Physique pré-moderne - concepts de cause, mouvement, finalité",
      "Rhétorique et poétique - analyse de la persuasion et de la tragédie"
    ],
    in: [
      "Grèce antique - Lycée et école péripatétique",
      "Empire byzantin - continuation de l'aristotélisme grec",
      "Monde arabe - traduction et commentaire (VIIIe-XIIIe siècle)",
      "Europe médiévale - via les Arabes puis traduction directe (XIIe-XIIIe siècle)",
      "Église catholique - philosophie officielle via saint Thomas",
      "Universités médiévales - base du curriculum",
      "Philosophie contemporaine - renouveau de l'éthique des vertus"
    ]
  },

  metadata: {
    representativeWorks: [
      "Organon - Aristote (ensemble des œuvres logiques)",
      "Métaphysique - Aristote (IVe siècle av. J.-C.)",
      "Physique - Aristote (IVe siècle av. J.-C.)",
      "Éthique à Nicomaque - Aristote (IVe siècle av. J.-C.)",
      "Politique - Aristote (IVe siècle av. J.-C.)",
      "De l'Âme - Aristote (IVe siècle av. J.-C.)",
      "Poétique - Aristote (IVe siècle av. J.-C.)",
      "Somme Théologique - Saint Thomas d'Aquin (1265-1274)"
    ],
    relatedMovements: [
      "Platonisme",
      "Néoplatonisme",
      "Stoïcisme",
      "Scholastique",
      "Thomisme",
      "Éthique des vertus"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const aristotelismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'aristote',
    role: "Fondateur de l'aristotélisme",
    contribution: `Fondateur du Lycée (335 av. J.-C.) et créateur du système philosophique le plus complet de l'Antiquité. Né à Stagire (384 av. J.-C.), étudie 20 ans à l'Académie de Platon. En 343, devient précepteur d'Alexandre le Grand. Fonde le Lycée après son retour à Athènes, enseigne en marchant (d'où "péripatétique"). Œuvre encyclopédique : Organon (logique - Catégories, De l'interprétation, Premiers et Seconds Analytiques, Topiques, Réfutations sophistiques), Physique (8 livres sur mouvement, causalité, infini), Du Ciel, Génération et Corruption, Météorologiques, De l'Âme (biologie et psychologie), Histoire des animaux, Parties des animaux, Métaphysique (14 livres sur l'être en tant qu'être), Éthique à Nicomaque (bonheur, vertu, amitié), Grande Éthique, Éthique à Eudème, Politique (analyse des constitutions), Rhétorique, Poétique (tragédie, catharsis), Constitution d'Athènes (perdue et retrouvée). Concepts clés : substance (ousia), matière et forme (hylémorphisme), acte et puissance, quatre causes (matérielle, formelle, efficiente, finale), téléologie (finalité), entéléchie (réalisation de la fin), scala naturae (chaîne des êtres), syllogisme (raisonnement déductif), catégories (10 prédicables), vertu comme médiété, eudémonisme (bonheur), phronesis (prudence), vie théorétique supérieure, homme comme animal politique. Critique la théorie des Idées de Platon : les Idées ne sont pas séparées des choses, elles sont immanentes. L'essence est dans la chose même. L'âme est forme du corps, pas une substance séparée (sauf intellect agent pour les commentateurs arabes). La connaissance commence par l'expérience sensible mais s'élève à l'intelligible par abstraction. La métaphysique étudie l'être en tant qu'être et ses principes premiers. Dieu comme moteur immobile, acte pur, pensée de pensée. Influences immenses : philosophie arabe (Avicenne, Averroès), philosophie juive (Maimonide), philosophie médiévale (saint Thomas), philosophie moderne (encore référencé par Kant, Hegel, etc.). Mort en 322 av. J.-C.`
  },
  {
    philosopherSlug: 'avicenne',
    role: "Systémateur de l'aristotélisme arabe",
    contribution: `Philosophe et médecin perse (980-1037), l'un des plus grands commentateurs d'Aristote. Œuvre majeure : Le Livre de la Guérison (encyclopédie philosophique), Le Livre de la Directive et de la Remarque. Distinction essentielle/existence : l'essence (quiddité) est distincte de l'existence. L'existence est accident de l'essence, sauf pour Dieu (où essence = existence). Preuve de l'existence de Dieu : l'être nécessaire vs l'être contingent. Les êtres contingents ne peuvent se donner l'existence eux-mêmes, donc il faut un être nécessaire. Émanation : de Dieu émane l'Intellect premier, puis l'Âme du monde, puis les sphères célestes, enfin le monde sublunaire. L'intellect agent : faculté séparée qui illumine l'esprit humain et permet la connaissance des intelligibles. Théorie de la prophétie : le prophète a un intellect agent parfaitement actualisé, lui permettant de connaître les vérités sans apprentissage. Médecin : Canon de la médecine, base de la médecine médiévale en Europe. Influence sur saint Thomas d'Aquin, la philosophie latine, la médecine.
`
  },
  {
    philosopherSlug: 'averroes',
    role: "Commentateur d'Aristote et théoricien de l'intellect unitaire",
    contribution: `Philosophe andalou (1126-1198), surnommé "Le Commentateur" par les latins. Commente entièrement Aristote (commentaires moyen, grand et succinct). Théorie de l'unité de l'intellect : il n'y a qu'un seul intellect agent pour toute l'humanité, individuel et immortel. L'intellect individuel (cognitif) est mortel. Controverse : si l'intellect est un, comment expliquer la pensée individuelle ? Les solutions : l'âme individuelle comme faculté de préparer à recevoir l'intellection, ou l'intellect matériel individuel recevant les formes intelligibles. Théorie de l'éternité du monde : le monde est éternel, créé dans le temps n'a pas de sens (seul un instant). Dieu connaît les universels, pas les particuliers (sinon changement en Dieu). Double vérité : philosophie et religion peuvent dire des choses différentes sans contradiction (philosophie pour les savants, religion pour le peuple). Influence sur la philosophie latine ("averroïsme latin" : Siger de Brabant, Boèce de Dacie), condamné en 1277. Saint Thomas d'Aquin rédige De l'unité de l'intellect contre les averroïstes.
`
  },
  {
    philosopherSlug: 'saint-thomas-d-aquin',
    role: "Synthétiste de l'aristotélisme et du christianisme",
    contribution: `Dominicain italien (1225-1274), le plus grand théologien scolastique. Synthèse entre aristotélisme et christianisme dans la Somme Théologique (1265-1274). Cinq voies pour prouver l'existence de Dieu : mouvement, cause efficiente, contingence, degrés de perfection, finalité. Dieu comme acte pur, être subsistant, parfait. Distinction foi et raison : la raison peut prouver l'existence de Dieu et certaines vérités naturelles, mais la révélation est nécessaire pour connaître la Trinité, l'Incarnation, la grâce. Loi naturelle : participation à la loi éternelle, inscrite dans le cœur humain, base de la morale naturelle. Vertus : cardinales (prudence, justice, force, tempérance) acquises ; théologales (foi, espérité, charité) infusées. Création ex nihilo : le monde est créé dans le temps, pas éternel (contrairement à Aristote et Averroès). L'âme comme forme du corps : individualité, immortalité via intellect. Essence et existence : distinction réelle dans les créatures, identité en Dieu. Commente Aristote. Déclaré docteur de l'Église, "Docteur angélique". Doctrine officielle de l'Église catholique (encyclique Aeterni Patris, 1879). Influence immense sur la théologie, la philosophie médiévale et moderne.
`
  },
  {
    philosopherSlug: 'maimonide',
    role: "Synthétiste de l'aristotélisme et du judaïsme",
    contribution: `Philosophe et médecin juif andalou (1138-1204), né à Cordoue, mort au Caire. Œuvre majeure : Guide des égarés (1190). Synthèse entre aristotélisme (via Avicenne) et judaïsme. Théologie négative : on ne peut dire ce que Dieu est, seulement ce qu'il n'est pas (apophatisme). Dieu est un, simple, incorporel. Preuves de l'existence, de l'unité et de l'incorporalité de Dieu. Création ex nihilo : le monde a un commencement (contrairement à Aristote). La Torah comme loi naturelle et révélée. Les prophètes comme philosophes parfaits recevant une illumination intellectuelle. L'intellect agent comme faculté séparée émanée de Dieu. Les commandements religieux : moyens d'améliorer moralement et intellectuellement le peuple. Distinction entre sens littéral et sens allégorique de l'Écriture. Quand la raison et l'Écriture semblent contradictoires, il faut interpréter allégoriquement. Influence sur la philosophie juive, la scolastique chrétienne, Spinoza (qui le critique).
`
  }
];
