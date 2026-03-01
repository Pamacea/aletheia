/**
 * Humanisme - Philosophical Movement Data
 * Mouvement intellectuel de la Renaissance (XIVe-XVIIe siècle)
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

export const humanisme: MovementData = {
  id: 'humanisme',
  name: "Humanisme",
  slug: 'humanisme',
  category: 'philosophie-renaissance',

  description: `Mouvement intellectuel et philosophique de la Renaissance (XIVe-XVIIe siècle) centré sur la promotion de la dignité, de la liberté et de la perfectibilité de l'être humain. L'humanisme marque une rupture décisive avec la vision médiévale du monde et annonce la philosophie moderne.

L'humanisme naît en Italie au XIVe siècle avec Pétrarque, Boccace et Boccaccio qui redécouvrent les textes antiques (Cicéron, Quintilien, Plutarque) et développent les 'studia humanitatis' : grammaire, rhétorique, poésie, histoire, philosophie morale. Ces études, centrées sur l'homme et sa culture, s'opposent à la scolastique médiévale centrée sur la logique et la métaphysique.

Le programme humaniste se fonde sur plusieurs principes. L'ad fontes (retour aux sources) : retrouver la pureté des textes antiques par la philologie critique. La dignité de l'homme : comme l'affirme Pic de la Mirandole dans son 'Discours sur la dignité de l'homme', Dieu ne l'a pas assigné une place fixe dans la création mais lui a donné liberté de se façonner lui-même. L'éducation intégrale : former l'homme complet (l'honnête homme) par l'étude des lettres, des arts, des sciences et de l'éducation physique.

L'humanisme se diversifie selon les régions. En Italie, l'humanisme civique (Bruni, Valla) insiste sur l'engagement politique et la vie active. En Allemagne, l'humanisme chrétien (Érasme, Reuchlin) veut réformer l'Église par le retour aux textes bibliques originaux. En Angleterre, Thomas More développe l'utopie politique. En France, Rabelais, Montaigne et Budé adaptent l'humanisme à la culture française.

L'influence de l'humanisme est immense et multifacelle. Il transforme l'éducation : création de collèges, développement des langues vernaculaires, diffusion de l'imprimerie. Il réforme l'Église : Érasme critique les abus, prépare la Réforme (Luther sera d'abord humaniste). Il inspire l'art : la Renaissance artistique (Michel-Ange, Léonard de Vinci) célèbre la beauté humaine. Il prépare la philosophie moderne : scepticisme de Montaigne, politique de Machiavel, science de Galilée.`,

  shortDefinition: \"La dignité et la perfectibilité humaines au centre de la pensée, retour aux sources antiques\",

  period: \"XIVe-XVIIe siècle (1350-1650)\",

  origins: {
    context: \"Effondrement de l'Empire byzantin, réfugiés grecs en Italie apportant des manuscrits antiques. Invention de l'imprimerie (1440). Prospérité des cités-États italiennes (Florence, Venise). Déclin de la scolastique médiévale, besoin de renouveau culturel.\",
    predecessors: [
      \"Antiquité gréco-romaine - Cicéron, Quintilien, Sénèque\",
      \"Dante - Première grande œuvre en italien\",
      \"Pétrarque - 'Poeta laureatus', éloge de l'antiquité",
      "Boccace - Décaméron, prose italienne",
      "Chrysoloras - Professeur grec à Florence"
    ],
    reactionAgainst: [
      "Scolastique médiévale - Logique formelle, latin de cuisine",
      "Mysticisme spéculatif - Refus de l'engagement mondain\",
      \"Ascétisme chrétien - Mépris du corps et du monde\",
      \"Barbarisme linguistique - Latin corrompu des clercs\",
      \"Ignorance des textes originaux - Bible grecque et hébraïque\"
    ]
  },

  keyPrinciples: [
    \"Ad fontes - Retour aux sources originales (antiquité, Bible)\",
    \"Dignité humaine - L'homme comme créature libre et créatrice",
    "Éducation intégrale - Formation de l'honnête homme\",
    \"Philologie critique - Analyse rigoureuse des textes\",
    \"Langues vernaculaires - Valorisation des langues nationales\",
    \"Civic humanisme - Engagement politique et social\",
    \"Quintessence antique - Sagesse païenne compatible avec christianisme\",
    \"Perfectibilité - L'homme peut se perfectionner par l'éducation\",
    \"Liberté - Libre arbitre et autonomie de la volonté\",
    \"Paix et tolérance - Humanisme pacifiste (Érasme)\"
  ],

  keyPhilosophers: [
    'petrarque',
    'erasme',
    'thomas-more',
    'guillaume-bude',
    'jacques-lefevre-detaples',
    'juan-luis-vives',
    'pic-della-mirandole',
    'machiavel',
    'rabelais',
    'montaigne'
  ],

  keyConcepts: [
    'dignite-humaine',
    'liberte',
    'education',
    'philologie',
    'ad-fontes',
    'studia-humanitatis',
    'utopie',
    'tolerance',
    'langues-vernaculaires',
    'renaissance'
  ],

  variations: [
    {
      name: \"Humanisme italien\",
      description: \"Pétrarque, Boccace, Pic de la Mirandole - Ad fontes, retour à l'antiquité. Dignité humaine, liberté. Studia humanitatis. Civic humanisme (Bruni, Valla) : engagement politique, république florentine.",
      philosophers: ['petrarque', 'pic-della-mirandole', 'machiavel']
    },
    {
      name: "Humanisme chrétien du Nord",
      description: "Érasme, Thomas More, Lefèvre d'Étaples - Réforme par les textes bibliques originaux (grec, hébreu). 'Philosophie du Christ'. Critique des abus ecclésiastiques. Tolérance, paix chrétienne. Utopie (More).\",
      philosophers: ['erasme', 'thomas-more', 'jacques-lefevre-detaples']
    },
    {
      name: \"Humanisme français\",
      description: \"Guillaume Budé, Rabelais, Montaigne - Collège de France (1530). Collège royal. Rabelais : éducation humaniste (Gargantua). Montaigne : scepticisme et tolérance. 'Essais' comme auto-analyse.\",
      philosophers: ['guillaume-bude', 'rabelais', 'montaigne']
    },
    {
      name: \"Humanisme espagnol\",
      description: \"Juan Luis Vives, Nebrija - 'Érasme espagnol'. Grammaire castillane (1492). Éducation des femmes. Réforme de l'université. Influence sur l'empire espagnol.\"
    },
    {
      name: \"Humanisme anglais\",
      description: \"Thomas More, John Colet - 'Utopia' (1516). Éducation à Oxford. Critique de l'enclosure, défense des pauvres. Humanisme politique, droit naturel. More, martyr sous Henry VIII."
    }
  ],

  criticisms: [
    "Élitisme - humaniste pour lettrés, pas pour le peuple",
    "Incohérence - retour au passé vs innovation moderne",
    "Paupérisation - néglige les questions économiques et sociales",
    "Classicisme limité - dépendance excessive à l'antiquité\",
    \"Impuissance politique - échec à prévenir les guerres de religion\",
    \"Utopisme - rêve sans réalité (More, Campanella)\",
    \"Contradiction chrétienne - valeurs païennes vs Évangile\"
  ],

  influence: {
    on: [
      \"Renaissance artistique - Michel-Ange, Léonard de Vinci\",
      \"Réforme protestante - Luther, Calvin (anciens humanistes)\",
      \"Contre-Réforme catholicisme - Concile de Trente, jésuites\",
      \"Philosophie moderne - Scepticisme (Montaigne), politique (Machiavel)\",
      \"Science moderne - Galilée, Copernic (formation humaniste)\",
      \"Éducation moderne - Collèges, universités, programmes humanistes\",
      \"Droit naturel - Grotius, Pufendorf\",
      \"Démocratie moderne - dignité humaine, droits de l'homme"
    ],
    in: [
      "Italie - Florence, Venise, Rome",
      "Pays-Bas - Érasme, imprimerie",
      "Angleterre - Oxford, Cambridge",
      "France - Collège de France, universités",
      "Allemagne - Universités, Réforme",
      "Espagne - Universités, empire",
      "Europe entière - via imprimerie et voyages"
    ]
  },

  metadata: {
    representativeWorks: [
      "Canzoniere - Pétrarque (1374)",
      "Éloge de la folie - Érasme (1511)",
      "Utopia - Thomas More (1516)",
      "Gargantua - Rabelais (1534)",
      "Essais - Montaigne (1580)",
      "Discours sur la dignité de l'homme - Pic de la Mirandole (1486)\",
      \"Le Prince - Machiavel (1532)\",
      \"De l'institution du prince chrétien - Erasme (1516)"
    ],
    relatedMovements: [
      "Renaissance",
      "Néo-platonisme",
      "Scepticisme",
      "Réforme protestante",
      "Lumières"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const humanismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'erasme',
    role: "Prince des humanistes",
    contribution: `Humaniste hollandais (1466-1536), figure centrale de l'humanisme chrétien. 'Éloge de la folie' (1511) : satire des abus ecclésiastiques et de la folie humaine. Édition critique du Nouveau Testament grec (1516), traduction latine, annotations. 'Adages' (1500) : 3 000 proverbes antiques. 'Manuel du soldat chrétien' : piété laïque. Correspondance immense (plus de 3 000 lettres). Réformateur pacifique : veut changer l'Église de l'intérieur, pas la scission. Conflit avec Luther après 1520 sur le libre arbitre ('Du libre arbitre' contre 'Du serf arbitre'). Influence sur toute l'Europe humaniste.`
  },
  {
    philosopherSlug: 'thomas-more',
    role: "Humaniste anglais et martyr",
    contribution: `Avocat et homme d'État anglais (1478-1535), ami d'Érasme. 'Utopia' (1516) : description d'une île imaginaire où règnent raison, tolérance religieuse, propriété collective. Communisme avant la lettre ? Critique de l'enclosure, des lois sur les pauvres. Défense du droit naturel et de la liberté de conscience. Refuse de reconnaître Henry VIII comme chef de l'Église d'Angleterre, exécuté en 1535. Canonisé en 1935. Figure de l'intégrité morale et politique.`
  },
  {
    philosopherSlug: 'montaigne',
    role: "Sceptique et moraliste humaniste",
    contribution: `Gentilhomme français (1533-1592), auteur des 'Essais' (1580, 1588). Créateur du genre littéraire de l'essai. Scepticisme inspiré de Sextus Empiricus ('Que sais-je ?'). Auto-analyse comme méthode philosophique. Tolérance religieuse (pendant les guerres de religion). Critique du colonialisme (les 'cannibales'). 'Apologie de Raymond Sebond'. Influence sur Pascal, Rousseau, Nietzsche, la philosophie du soupçon. Les Essais comme monument de la subjectivité moderne.`
  },
  {
    philosopherSlug: 'pic-della-mirandole',
    role: "Philosophe de la dignité humaine",
    contribution: `Prodige italien (1463-1494), auteur du 'Discours sur la dignité de l'homme' (1486). Thèse : Dieu n'a pas assigné à l'homme une place fixe dans la création mais lui a donné liberté de se façonner lui-même ('Tu peux te dégrader jusqu'aux bêtes ou t'élever jusqu'aux dieux'). Synthèse de toutes les philosophies et théologies. 900 thèses à débattre à Rome (1486), condamnées par le pape. Figure de la liberté et de la perfectibilité humaines. Mort à 31 ans, laissant une œuvre courte mais influente.`
  }
];
