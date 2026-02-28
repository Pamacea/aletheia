/**
 * Marxisme - Philosophical Movement Data
 * Courant philosophique et politique fondé par Marx, centré sur la lutte des classes et le matérialisme historique
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

export const marxisme: MovementData = {
  id: 'marxisme',
  name: "Marxisme",
  slug: 'marxisme',
  category: 'philosophie-moderne',

  description: `Courant philosophique, économique et politique fondé par Karl Marx (1818-1883) et Friedrich Engels (1820-1895), caractérisé par le matérialisme historique, la lutte des classes comme moteur de l'histoire, la critique du capitalisme et la nécessité de la révolution prolétarienne.

Le marxisme naît dans un contexte de révolution industrielle et de misère ouvrière. En Angleterre, la révolution industrielle crée une classe ouvrière exploitée travaillant 12-16 heures par jour dans des conditions atroces. En Allemagne, la montée du socialisme répond à cette misère. Marx, issu d'une famille juive convertie au protestantisme, étudie la philosophie hégélienne à Berlin.

Le marxisme commence par une rupture avec l'idéalisme hégélien. Marx "met Hegel sur la tête" : le moteur de l'histoire n'est pas l'esprit mais la matière, plus précisément le mode de production. Matérialisme historique : ce n'est pas la conscience qui détermine la vie, mais la vie qui détermine la conscience. L'infrastructure économique (forces productives + rapports de production) détermine la superstructure juridique, politique, idéologique.

Marx reprend de Hegel la dialectique mais la met sur un pied matérialiste. Le changement historique procède par contradictions : les forces productives se développent, entrent en conflit avec les rapports de production capitalistes, provoquant une révolution. Les luttes de classes sont le moteur de l'histoire : "L'histoire de toute société jusqu'à nos jours est l'histoire de la lutte des classes." (Manifeste du parti communiste, 1848).

La critique de l'économie politique est centrale. Marx analyse le capitalisme dans Le Capital (1867). La plus-value est la source du profit : le travailleur produit une valeur supérieure à son salaire. Le capitaliste s'approprie cette plus-value, exploitant le travailleur. La propriété privée des moyens de production permet cette exploitation. Le capitalisme est porteur de contradictions internes : tendance à la baisse du taux de profit, crises de surproduction, concentration du capital, paupérisation relative.

L'aliénation est un concept central. Dans les Manuscrits de 1844, Marx analyse quatre formes d'aliénation : du produit du travail (qui s'autonomise comme capital), de l'acte de production (le travail devient contraint), des autres hommes (relation d'exploitation), et de l'essence humaine (l'homme devient une marchandise). L'aliénation est la conséquence de la propriété privée et de la division du travail.

La solution est la révolution prolétarienne : le prolétariat, classe universelle, s'empare du pouvoir, abolit la propriété privée, instaure la dictature du prolétariat comme transition vers le communisme. Le communisme est la société sans classes, sans État, sans aliénation, où chacun contribue selon ses capacités et reçoit selon ses besoins.

Le marxisme a connu un destin historique considérable. Il inspire la Révolution russe (1917), la Révolution chinoise (1949), de nombreux mouvements de libération nationale. Il devient idéologie d'État dans l'URSS, la Chine, Cuba, etc. Le stalinisme, le maoïsme, le castrisme en sont des variantes. La chute de l'URSS (1991) marque une crise du marxisme comme idéologie d'État, mais le marxisme reste une importante école de pensée critique en philosophie, sociologie, économie (théorie critique, études postcoloniales, féminisme matérialiste).`,

  shortDefinition: "Lutte des classes et matérialisme historique - le capitalisme comme exploitation, la révolution comme solution",

  period: "XIXe-XXe siècle (1844-présent)",

  origins: {
    context: "Révolution industrielle en Angleterre, montée du prolétariat industriel, misère ouvrière. Socialisme utopique (Saint-Simon, Fourier, Owen). Philosophie hégélienne en Allemagne (dialectique). Économie politique classique (Smith, Ricardo).",
    predecessors: [
      "Hegel - Dialectique, histoire comme processus rationnel",
      "Feuerbach - Matérialisme, critique de la religion",
      "Saint-Simon, Fourier, Owen - Socialisme utopique",
      "Adam Smith, David Ricardo - Économie politique classique, théorie de la valeur travail",
      " Babeuf - Communisme comme égalité réelle"
    ],
    reactionAgainst: [
      "Idéalisme hégélien - L'esprit ne détermine pas l'histoire, la matière le fait",
      "Socialisme utopique - Le socialisme doit être scientifique, basé sur l'analyse du capitalisme",
      "Libéralisme économique - La propriété privée est source d'exploitation",
      "Anarchisme - Nécessité de l'État transitionnel (dictature du prolétariat)",
      "Réformisme - La révolution, pas la réforme graduelle"
    ]
  },

  keyPrinciples: [
    "Matérialisme historique - l'infrastructure économique détermine la superstructure",
    "Lutte des classes comme moteur de l'histoire",
    "Le travail est source de toute valeur (théorie de la valeur travail)",
    "Plus-value comme source du profit capitaliste",
    "Aliénation comme conséquence de la propriété privée et de la division du travail",
    "Le capitalisme porte en lui ses propres contradictions (crises, chômage, inégalités)",
    "Révolution prolétarienne comme nécessité historique",
    "Dictature du prolétariat comme transition vers le communisme",
    "Le communisme comme société sans classes, sans État, sans aliénation",
    "La philosophie a pour but de transformer le monde, pas seulement de l'interpréter"
  ],

  keyPhilosophers: [
    'karl-marx',
    'friedrich-engels',
    'vladimir-lenine',
    'rosa-luxembourg',
    'antonio-gramsci'
  ],

  keyConcepts: [
    'materialisme-historique',
    'lutte-des-classes',
    'plus-value',
    'alienation',
    'capital',
    'travail',
    'propriete-privee',
    'forces-productives',
    'rapports-de-production',
    'infrastructure',
    'superstructure',
    'dictature-du-proletariat',
    'communisme',
    'ideologie',
    'fausse-conscience'
  ],

  variations: [
    {
      name: "Marxisme orthodoxe",
      description: "Marx, Engels - Matérialisme historique, lutte des classes, révolution prolétarienne. Analyse scientifique du capitalisme. Internationalisme.",
      philosophers: ['karl-marx', 'friedrich-engels']
    },
    {
      name: "Léninisme",
      description: "Lénine - Parti révolutionnaire d'avant-garde, impérialisme comme stade suprême du capitalisme, dictature du prolétariat. Révolution dans le pays le plus faible du capitalisme.",
      philosophers: ['vladimir-lenine']
    },
    {
      name: "Luxembourgisme",
      description: "Luxembourg - Critique du léninisme comme substitutisme (le parti remplace la classe). Mass strike, spontanéité révolutionnaire, démocratie socialiste.",
      philosophers: ['rosa-luxembourg']
    },
    {
      name: "Gramscisme",
      description: "Gramsci - Hégémonie culturelle comme domination. La lutte culturelle précède la lutte politique. Société civile vs société politique. Intellectuels organiques.",
      philosophers: ['antonio-gramsci']
    },
    {
      name: "École de Francfort",
      description: "Horkheimer, Adorno, Marcuse, Habermas - Théorie critique, critique de la raison instrumentale, analyse du culturel industrie,交融 Marx et Freud.",
      philosophers: []
    }
  ],

  criticisms: [
    "Déterminisme économique - réduit la culture et la conscience à l'économie",
    "Économisme - expliquer tout par l'économie est réducteur",
    "Totalitarisme - la dictature du prolétariat devient dictature sur le prolétariat",
    "Violence - la révolution justifie la violence politique",
    "Échec historique - les régimes marxistes sont devenus dictatoriaux",
    "Inefficacité économique - l'économie planifiée est moins efficace que le marché",
    "Utopie - le communisme sans État est une utopie irréalisable",
    "Réductionnisme de classe - néglige race, genre, sexualité",
    "Scientisme - prétention à la science infondée"
  ],

  influence: {
    on: [
      "Mouvements ouvriers et syndicaux - lutte pour les droits des travailleurs",
      "Révolution russe (1917) - prise de pouvoir par les bolcheviks",
      "Révolution chinoise (1949) - maoïsme",
      "Mouvements de libération nationale - décolonisation",
      "Théorie critique - École de Francfort",
      "Féminisme matérialiste - analyse du patriarcat comme système",
      "Études postcoloniales - critique de l'impérialisme",
      "Sociologie - analyse des classes et des inégalités"
    ],
    in: [
      "Russie/URSS - marxisme-léninisme comme idéologie d'État",
      "Chine - maoïsme",
      "Cuba - castrisme",
      "Vietnam - ho-chi-minhisme",
      "Europe de l'Est - bloc soviétique",
      "Amérique latine - révolutions (Cuba, Nicaragua, Chili)",
      "Afrique - mouvements de libération",
      "Occident - partis communistes, syndicats, universités"
    ]
  },

  metadata: {
    representativeWorks: [
      "Manifeste du parti communiste - Marx et Engels (1848)",
      "Manuscrits de 1844 - Marx (1844)",
      "Le Capital - Marx (1867, t.1)",
      "La Lutte des classes en France - Marx (1850)",
      "Les Luttes de classes en France - Marx (1850)",
      "La Guerre civile en France - Marx (1871)",
      "L'Idéologie allemande - Marx et Engels (1846)",
      "L'Origine de la famille, de la propriété privée et de l'État - Engels (1884)",
      "Que faire ? - Lénine (1902)",
      "Cahiers de prison - Gramsci (1929-1935)"
    ],
    relatedMovements: [
      "Socialisme utopique",
      "Anarchisme",
      "Social-démocratie",
      "Théorie critique",
      "Féminisme matérialiste",
      "Postcolonialisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const marxismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'karl-marx',
    role: "Fondateur du marxisme",
    contribution: `Philosophe, économiste et révolutionnaire allemand (1818-1883). Docteur en philosophie (thèse sur Démocrite et Épicure), journaliste, exilé à Londres après 1849. Manuscrits de 1844 : analyse de l'aliénation du travail, critique de la propriété privée. L'Idéologie allemande (avec Engels) : matérialisme historique. Misère de la philosophie (1847) : critique de Proudhon. Manifeste du parti communiste (1848, avec Engels) : "Prolétaires de tous les pays, unissez-vous !" Les Luttes de classes en France (1850) : analyse de la révolution de 1848. Le Capital (1867, t.1) : analyse scientifique du capitalisme, théorie de la plus-value. La Guerre civile en France (1871) : défense de la Commune. Marx meurt en 1883, laissant t.2 et t.3 du Capital inachevés, publiés par Engels. Le marxisme comme synthèse de philosophie allemande (Hegel), économie politique anglaise (Smith, Ricardo) et socialisme français (Saint-Simon, Fourier). La philosophie a pour but de transformer le monde ("Les philosophes n'ont fait qu'interpréter le monde, il s'agit maintenant de le transformer"). Influence immense sur le XXe siècle : révolutions, États socialistes, mouvements ouvriers, théorie critique, postcolonialisme.
`
  },
  {
    philosopherSlug: 'friedrich-engels',
    role: "Collaborateur de Marx et vulgarisateur du marxisme",
    contribution: `Philosophe et révolutionnaire allemand (1820-1895), ami et collaborateur de Marx. Fils d'industriel, observe la condition ouvrière à Manchester. La Situation de la classe laborieuse en Angleterre (1845) : enquête sociologique sur la misère ouvrière. Co-auteur de L'Idéologie allemande (1846) et du Manifeste du parti communiste (1848). Anti-Dühring (1878) : vulgarisation du marxisme, critique du socialisme utopique. L'Origine de la famille, de la propriété privée et de l'État (1884) : application du matérialisme historique à l'anthropologie, analyse de l'oppression des femmes. Dialectique de la nature (1885) : tentative de dialectique naturelle. Engels édite les t.2 et t.3 du Capital après la mort de Marx. Il vulgarise le marxisme dans des ouvrages plus accessibles, influençant la IIe Internationale. Engels insiste sur la dimension scientifique du marxisme comme "socialisme scientifique" contre le "socialisme utopique".
`
  },
  {
    philosopherSlug: 'vladimir-lenine',
    role: "Théoricien du léninisme et de la révolution d'Octobre",
    contribution: `Révolutionnaire russe (1870-1924), fondateur de l'URSS. Que faire ? (1902) : théorie du parti d'avant-garde comme organisation disciplinée de révolutionnaires professionnels. L'Impérialisme, stade suprême du capitalisme (1916) : analyse de l'impérialisme comme domination du capital financier, exportation de capitaux vers les colonies, partition du monde entre puissances. L'État et la révolution (1917) : théorie de la dictature du prolétariat comme État ouvrier destiné à dépérir. Dirige la révolution d'Octobre 1917, instaure le communisme de guerre, puis la NEP (Nouvelle Politique Économique). Crée l'URSS en 1922. Le léninisme ajoute au marxisme : théorie du parti d'avant-garde, analyse de l'impérialisme, possibilité de révolution dans le pays le plus faible du capitalisme (Russie). Dictature du prolétariat comme État ouvrier contre la bourgeoisie. Mort en 1924, laissant un héritage controversé : révolutionnaire bolchevik, créateur de l'État-parti unique.
`
  },
  {
    philosopherSlug: 'rosa-luxembourg',
    role: "Critique du réformisme et du léninisme",
    contribution: `Révolutionnaire polonaise-allemande (1871-1919), théoricienne du socialisme. Réforme ou révolution ? (1900) : critique du réformisme de Bernstein, la révolution est nécessaire. La Crise de la social-démocratie (1900) : défense de la grève générale de masse comme méthode révolutionnaire. L'Accumulation du capital (1913) : analyse de l'impérialisme comme nécessité pour le capital de trouver des marchés extérieurs. Critique de la révolution russe (1918) : critique de la dictature du bolchevisme sur le prolétariat, défense de la démocratie socialiste. Rosa critique le léninisme comme "substitutisme" : le parti remplace la classe, substitue sa volonté à celle du prolétariat. La spontanéité révolutionnaire des masses est aussi importante que l'organisation du parti. Rosa meurt assassinée en 1919 lors de la répression de la révolution spartakiste à Berlin. Influence sur le communisme de gauche, le luxembourgisme, la démocratie socialiste.
`
  },
  {
    philosopherSlug: 'antonio-gramsci',
    role: "Théoricien de l'hégémonie culturelle",
    contribution: `Révolutionnaire italien (1891-1937), fondateur du Parti communiste italien. Arrêté par le fascisme en 1926, meurt en prison. Cahiers de prison (1929-1935) : réflexion sur la révolution en Occident. Hégémonie culturelle : la classe dominante maintient son pouvoir non seulement par la force (société politique) mais par le consentement (société civile). La révolution en Occident nécessite une "guerre de position" culturelle, pas une "guerre de mouvement" comme en Russie. Intellectuels organiques : chaque classe crée ses intellectuels qui organisesent son hégémonie. Le parti comme "intellectuel collectif". Réforme morale et intellectuelle : la révolution commence dans la conscience, pas seulement dans l'économie. Historicisme absolu : toute vérité est historique et située. Gramsci influence la théorie critique, l'eurocommunisme, les études culturelles, le postcolonialisme (Subaltern Studies).
`
  }
];
