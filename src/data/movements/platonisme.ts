/**
 * Platonisme - Philosophical Movement Data
 * Système philosophique fondé par Platon, centré sur la théorie des Idées
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

export const platonisme: MovementData = {
  id: 'platonisme',
  name: "Platonisme",
  slug: 'platonisme',
  category: 'philosophie-antique',

  description: `Système philosophique fondé par Platon (428-348 av. J.-C.), caractérisé par la théorie des Idées (ou Formes) selon laquelle la réalité véritable se trouve dans un monde intelligible de modèles parfaits et éternels, dont le monde sensible n'est qu'une copie imparfaite.

Le platonisme naît à Athènes au IVe siècle av. J.-C., dans un contexte de crise intellectuelle et politique. La démocratie athénienne vient d'exécuter Socrate (399 av. J.-C.), maître de Platon, pour corruption de la jeunesse. Cet événement traumatique marque Platon profondément et le convainc de la nécessité de fonder une philosophie rationnelle capable de guider la cité vers la justice.

Au cœur du platonisme se trouve la théorie des Idées : les objets sensibles que nous percevons (chaises, chevaux, actions justes) ne sont que des participations imparfaites à des Formes intelligibles, éternelles et parfaites (l'Idée de Chaise, le Cheval en soi, le Juste en soi). Ces Idées existent indépendamment de l'esprit humain, dans un monde intelligible accessible seulement à la raison. L'âme humaine, avant son incarnation, a contemplé ces Idées ; la philosophie est donc une réminiscence (anamnèse) de cette contemplation originelle.

La philosophie platonicienne englobe plusieurs dimensions :
- Épistémologique : la connaissance vraie porte sur les Idées, non sur le sensible ; la dialectique est la méthode d'accès au monde intelligible
- Ontologique : dualisme entre monde intelligible (réel, éternel) et monde sensible (apparence, changeant)
- Anthropologique : l'âme est immortelle, raisonnable et préexiste au corps
- Éthique : le Bien comme Idée suprême, la vertu comme connaissance du Bien
- Politique : la cité juste organisée selon trois classes correspondant aux trois parties de l'âme
- Cosmologique : le Démiurge façonne le cosmos à l'image des Idées

Le platonisme s'exprime littérairement à travers des dialogues où Socrate est le protagoniste principal. Ces dialogues ne sont pas des exposés doctrinaux mais des exercises philosophiques invitant le lecteur à penser par lui-même. Parmi les plus célèbres : l'Apologie de Socrate, le Phédon (immortalité de l'âme), le Banquet (amour et beauté), La République (cité idéale), le Théétète (connaissance), le Timée (cosmologie).

Le platonisme va profondément marquer toute l'histoire de la philosophie occidentale. À travers le néoplatonisme (Plotin), il influence le christianisme (saint Augustin), la philosophie médiévale, la Renaissance, et jusqu'à la philosophie moderne. Critiqué par Aristote (son élève) pour séparer excessivement les Idées des choses, le platonisme reste cependant l'une des plus grandes constructions philosophiques de tous les temps.`,

  shortDefinition: "Théorie des Idées - la réalité véritable réside dans des modèles éternels et parfaits, le monde sensible n'en étant que l'ombre",

  period: "Antiquité (IVe siècle av. J.-C. - VIe siècle ap. J.-C.)",

  origins: {
    context: "Athènes au IVe siècle av. J.-C., après l'exécution de Socrate (399 av. J.-C.). Crise de la démocratie athénienne, défaite dans la guerre du Péloponnèse, montée de la sophistique comme enseignement payant de la rhétorique. Besoin de fonder une philosophie rationnelle capable de guider la cité vers la justice et la vérité.",
    predecessors: [
      "Socrate - Maître de Platon, méthode dialectique, recherche des définitions universelles",
      "Pythagore - Âme immortelle, mathématiques comme accès au réel, dualisme âme-corps",
      "Parménide - Être immuable et éternel, critique du changement et du devenir",
      "Héraclite - Flux perpétuel des choses sensibles, nécessité d'un principe stable",
      "Les Pythagoriciens - Communauté philosophique, importance des mathématiques",
      "Anaxagore - Intellect (Nous) organisant le cosmos"
    ],
    reactionAgainst: [
      "Sophistique - Relativisme de la vérité, rhétorique comme persuasion sans recherche du vrai",
      "Matérialisme des Présocratiques - Réduction du réel à l'élément physique (eau, feu, atomes)",
      "Hédonisme - Recherche du plaisir comme fin de la vie",
      "Démocratie radicale - Égalité de tous les opinions, refus de l'expertise",
      "Naturalisme - Explication purement physique du monde sans principe intelligible"
    ]
  },

  keyPrinciples: [
    "Théorie des Idées - les Formes éternelles sont la réalité véritable",
    "Dualisme monde intelligible/monde sensible - le premier seul est parfaitement réel",
    "L'âme est immortelle et préexiste au corps - réminiscence des Idées contemplées",
    "Le Bien comme Idée suprême - principe ultime de réalité et de valeur",
    "La dialectique comme méthode d'ascension vers le vrai - questionnement et définitions",
    "La vertu est connaissance - connaître le Bien, c'est le pratiquer",
    "La cité juste doit refléter la structure de l'âme - trois classes, trois vertus",
    "L'amour comme désir d'ascension vers le Beau en soi - échelle de l'amour",
    "L'immortalité de l'âme démontrée par plusieurs arguments - cyclicité, affinité, simples",
    "Le Démiurge façonne le cosmos à l'image des Idées - ordre et finalité"
  ],

  keyPhilosophers: [
    'platon',
    'plotin',
    'saint-augustin',
    'marsile-ficin',
    'pic-de-la-mirandole'
  ],

  keyConcepts: [
    'idees',
    'formes',
    'bien',
    'beau',
    'juste',
    'ame',
    'corps',
    'reminiscence',
    'dialectique',
    'caverne',
    'demurge',
    'monde-intelligible',
    'monde-sensible',
    'participation',
    'immortalite'
  ],

  variations: [
    {
      name: "Platonisme ancien",
      description: "Platon et l'Académie ancienne - Développement initial de la théorie des Idées, méthode dialectique, philosophie comme ascension vers le vrai. Dialogues socratiques et œuvres de maturité.",
      philosophers: ['platon']
    },
    {
      name: "Néoplatonisme",
      description: "Plotin, Porphyre, Jamblique - Systématisation du platonisme : l'Un, l'Intellect, l'Âme. Procession des hypostases, retour à l'Un par contemplation. Influence sur le christianisme.",
      philosophers: ['plotin']
    },
    {
      name: "Platonisme chrétien",
      description: "Saint Augustin, Boèce - Synthèse entre platonisme et christianisme. Les Idées sont dans la pensée de Dieu. L'âme accède à Dieu par l'intériorité et l'illumination.",
      philosophers: ['saint-augustin']
    },
    {
      name: "Platonisme de la Renaissance",
      description: "Marsile Ficin, Pic de la Mirandole - Redécouverte de Platon en latin. L'Académie de Florence. Synthèse entre platonisme, christianisme et hermétisme. Dignité de l'homme.",
      philosophers: ['marsile-ficin', 'pic-de-la-mirandole']
    }
  ],

  criticisms: [
    "Dualisme excessif - séparation radicale entre Idées et choses, rendant la participation obscure",
    "Monde intelligible abstrait - les Idées semblent séparées de la réalité concrète",
    "Théorie de la réminiscence invérifiable - pas de preuve de la préexistence de l'âme",
    "Élitisme politique - la cité idéale est une oligarchie de philosophes-rois",
    "Conformisme social - pas de place pour l'individualité dans la cité juste",
    "Dévalorisation du sensible - le corps, les arts, la vie concrète sont dépréciés",
    "Connaissance des Idées problématique - comment accéder à un monde séparé ?",
    "Refus du changement - les Idées sont figées, n'expliquent pas le devenir",
    "Totalitarisme implicite - la cité idéale contrôle tous les aspects de la vie"
  ],

  influence: {
    on: [
      "Christianisme - théologie de la création, concept de Dieu comme Bien suprême",
      "Philosophie médiévale - distinction entre foi et raison, nature et grâce",
      "Néoplatonisme - systématisation et spiritualisation du platonisme",
      "Idéalisme - les Idées annoncent les concepts kantiens et hégéliens",
      "Renaissance - humanisme, dignité de l'homme, synthèse philosophie-religion",
      "Philosophie moderne - dualisme cartésien, idéalisme transcendantal",
      "Romantisme - aspiration vers un idéal suprême",
      "Théologie négative - apophatisme, Dieu au-delà des concepts"
    ],
    in: [
      "Grèce antique - Académie de Platon, formation pendant 900 ans",
      "Rome antique - diffusion du platonisme via Cicéron, Plotin",
      "Europe médiévale - via saint Augustin et Boèce",
      "Renaissance italienne - Académie de Florence, redécouverte de Platon",
      "Monde byzantin - continuation du platonisme grec",
      "Monde arabe - traduction et commentaire des dialogues",
      "Philosophie contemporaine - débats sur le réalisme des universaux"
    ]
  },

  metadata: {
    representativeWorks: [
      "Apologie de Socrate - Platon (399 av. J.-C.)",
      "Phédon - Platon (v. 370 av. J.-C.)",
      "Le Banquet - Platon (v. 380 av. J.-C.)",
      "La République - Platon (v. 375 av. J.-C.)",
      "Théétète - Platon (v. 369 av. J.-C.)",
      "Le Timée - Platon (v. 360 av. J.-C.)",
      "Les Ennéades - Plotin (250-270 ap. J.-C.)",
      "Confessions - Saint Augustin (397-401 ap. J.-C.)"
    ],
    relatedMovements: [
      "Aristotélisme",
      "Néoplatonisme",
      "Stoïcisme",
      "Christianisme",
      "Idéalisme",
      "Néo-platonisme de la Renaissance"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const platonismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'platon',
    role: "Fondateur du platonisme",
    contribution: `Fondateur de l'Académie (première université) et créateur de la théorie des Idées. Dans les dialogues de jeunesse (Apologie, Criton, Euthyphron), figure Socrate cherchant des définitions universelles. Œuvres de maturité : Phédon (arguments pour l'immortalité de l'âme), Le Banquet (l'amour comme ascension vers le Beau), La République (cité idéale, allégorie de la caverne, théorie des Idées), Phèdre (amour et dialectique). Dialogues tardifs : Théétète (critique de la connaissance sensible), Parménide (autocritique de la théorie des Idées), Timée (cosmologie du Démiurge), Lois (constitution idéale plus réaliste). La théorie des Idées : les choses sensibles participent aux Formes intelligibles (le Beau en soi, le Juste en soi). L'âme, avant son incarnation, a contemplé les Idées ; connaître, c'est se ressouvenir (anamnèse). La dialectique est la méthode d'ascension vers le vrai, partant des hypothèses vers le principe anhypothétique (l'Idée du Bien). Allégorie de la caverne : la plupart des hommes vivent dans l'illusion des ombres, le philosophe accède à la lumière du Bien. La cité juste organise trois classes (gouvernants, guerriers, producteurs) correspondant aux trois parties de l'âme (raison, courage, désir). Influence immense sur toute l'histoire de la philosophie occidentale.`
  },
  {
    philosopherSlug: 'plotin',
    role: "Systémateur du néoplatonisme",
    contribution: `Fondateur du néoplatonisme à Rome (IIIe siècle). Systématisation du platonisme dans les Ennéades : trois hypostases émanant de l'Un - l'Un (au-delà de l'être et de la pensée), l'Intellect (contient les Idées), l'Âme (anime le cosmos). Procession : l'Un se déploie comme Intellect, puis Âme, puis matière. Conversion : l'âme retourne à l'Un par contemplation et détachement. L'Un au-delà de l'être : Plotin corrige Platon en situant le Bien au-delà de l'Idée (l'Un n'est pas un être mais au-delà de l'être). La matière comme principe de mal (privation, absence de bien). L'extase comme expérience de fusion avec l'Un. Influence sur saint Augustin, Pseudo-Denys, la théologie mystique chrétienne, l'islam, le judaïsme. Commente Platon, mais propose une métaphysique plus spirituelle que philosophique. Son disciple Porphyre organise ses œuvres en neuf Ennéades (groupes de neuf traités).`
  },
  {
    philosopherSlug: 'saint-augustin',
    role: "Père du platonisme chrétien",
    contribution: `Converti au christianisme après avoir été manichéen, puis néoplatonicien. Synthèse entre platonisme et christianisme dans les Confessions (397-401) et La Cité de Dieu (413-426). Les Idées sont dans la pensée de Dieu, créateur du monde selon des modèles éternels. L'âme accède à Dieu par l'intériorité ("Dieu est plus intime à moi que moi-même") et l'illumination divine. L'illumination remplaçant la réminiscence : nous ne nous ressouvenons pas des Idées préexistentes, mais Dieu illumine notre esprit. Théorie de la création : le monde créé à partir de rien (ex nihilo), non éternel. Concept de temps : créé avec le monde, pas d'éternité du monde. Concept de grâce : l'homme ne peut se sauver seul, besoin de la grâce divine. Prédestination : Dieu choisit qui sera sauvé. Critique du scepticisme : "si je me trompe, je suis" (précurseur du cogito). Influence majeure sur toute la théologie chrétienne occidentale, Luther et Calvin s'en réclameront.`
  },
  {
    philosopherSlug: 'marsile-ficin',
    role: "Traducteur de Platon et chef de file du platonisme de la Renaissance",
    contribution: `Prêtre et philosophe florentin, traducteur de Platon en latin (première traduction complète en Occident, 1484). Fondateur de l'Académie platonicienne de Florence sous la protection de Cosme et Laurent de Médicis. Commentaires sur Platon, especially Le Banquet (De amore). Théologie platonicienne : synthèse entre platonisme, christianisme et hermétisme (Corpus Hermeticum). L'amour comme force cosmique unissant toutes choses. L'homme comme microcosme reliant le ciel et la terre. Les Idées comme pensées de Dieu. L'immortalité de l'âme prouvée philosophiquement. Le "platonisme amoureux" : l'ascension vers le Beau dans Le Banquet comme modèle de l'élévation mystique. Influence sur la Renaissance, la poésie amoureuse (Bembo, Castiglione), l'art (Botticelli). Le platonisme ficinien devient la philosophie officielle de la Renaissance italienne.`
  },
  {
    philosopherSlug: 'pic-de-la-mirandole',
    role: "Humaniste et adepte du platonisme de la Renaissance",
    contribution: `Prodige de la Renaissance, disciple de Ficin mais plus original. Discours sur la dignité de l'homme (1486) : Dieu dit à l'homme "Je ne t'ai donné ni place déterminée, ni visage propre, ni don particulier, afin que ta place, ton visage, tes dons, tu les veuilles, les conquières et les possèdes toi-même". L'homme comme caméléon, capable de se transformer lui-même. L'homme n'a pas de nature fixe, il doit se créer. Synthèse entre platonisme, aristotélisme, kabbale, hermétisme. 900 thèses sur tous les sujets (philosophie, théologie, magie, kabbale) proposées pour débat à Rome. L'homme comme liberté et responsabilité de se définir. Influence sur l'humanisme, la philosophie de la liberté, la pensée moderne.`
  }
];
