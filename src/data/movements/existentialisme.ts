/**
 * Existentialisme - Philosophical Movement Data
 * Courant philosophique du XXe siècle centré sur l'existence humaine
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

export const existentialisme: MovementData = {
  id: 'existentialisme',
  name: "Existentialisme",
  slug: 'existentialisme',
  category: 'philosophie-moderne',

  description: `Courant philosophique du XXe siècle qui pose l'existence humaine comme point de départ de toute réflexion philosophique. L'existence précède l'essence : l'homme d'abord existe, se rencontre, surgit dans le monde, et seulement ensuite se définit.

L'existentialisme émerge dans un contexte marqué par les traumatismes de la Première Guerre mondiale, la montée des totalitarismes et la Seconde Guerre mondiale. Ces événements ont ébranlé les certitudes du progrès, de la rationalité et du sens de l'histoire, créant un besoin de repenser la condition humaine.

Le mouvement se caractérise par plusieurs thèmes centraux : la liberté radicale de l'homme, l'angoisse existentielle face à l'absence de sens préétabli, l'authenticité comme exigence de cohérence avec soi-même, et la responsabilité inévitable de nos choix. L'homme est "condamné à être libre" : il doit inventer sa propre essence à travers ses décisions.

L'existentialisme se divise en plusieurs courants : l'existentialisme athée (Sartre, Camus) qui affirme l'absence de Dieu et la solitude de l'homme ; l'existentialisme chrétien (Kierkegaard, Jaspers, Buber) qui place la relation à Dieu au centre de l'existence ; et l'existentialisme phénoménologique (Heidegger, Merleau-Ponty) qui analyse les structures de l'expérience humaine.

Le mouvement a connu son apogée dans les années 1940-1950, particulièrement en France, où il est devenu un véritable phénomène de culture. L'influence de l'existentialisme s'étend bien au-delà de la philosophie : il a marqué la littérature (le roman, le théâtre de l'absurde), la psychologie (la psychothérapie existentielle), le féminisme (via Simone de Beauvoir), et la pensée politique (l'engagement).`,

  shortDefinition: "L'existence précède l'essence - la liberté et la responsabilité de se définir par ses choix",

  period: "XIXe-XXe siècle (1843-1960)",

  origins: {
    context: "Réaction au rationalisme, à l'optimisme du progrès et aux systèmes philosophiques totalisants. Influencé par les traumatismes de la Première Guerre mondiale, la crise de 1929, la montée des fascismes et la Seconde Guerre mondiale. Contexte de perte de repères traditionnels (religion, raison, progrès).",
    predecessors: [
      "Søren Kierkegaard - Père de l'existentialisme, concept d'angoisse et de saut de la foi",
      "Friedrich Nietzsche - Critique de la morale, volonté de puissance, mort de Dieu",
      "Martin Heidegger - Analytique du Dasein, être-pour-la-mort",
      "Karl Jaspers - Situations limites, existence authentique",
      "Blaise Pascal - Existentialisme chrétien, pari et sens de la vie",
      "Fyodor Dostoevsky - Littérature existentielle, liberté et responsabilité"
    ],
    reactionAgainst: [
      "Rationalisme - La raison ne suffit pas à donner sens à l'existence",
      "Positivisme - Réduction du réel au mesurable et observable",
      "Essentialisme - Refus d'une nature humaine préétablie",
      "Marxisme orthodoxe - Réduction de l'individu aux structures économiques",
      "Hégélianisme - Système totalisant qui nie l'existence concrète"
    ]
  },

  keyPrinciples: [
    "L'existence précède l'essence - l'homme existe d'abord, se définit ensuite",
    "Liberté radicale et responsabilité absolue de nos choix",
    "Angoisse existentiale face à l'absence de sens préétabli",
    "Authenticité vs mauvaise foi - refus de l'auto-illusion",
    "Engagement dans le monde - l'homme se réalise par l'action",
    "Refus des déterminismes - nous ne sommes ni nos gènes, ni notre milieu",
    "Subjectivité comme vérité - l'expérience vécue prime sur l'objectivité",
    "Solitude de l'existence - la condition humaine est fondamentalement solitaire"
  ],

  keyPhilosophers: [
    'jean-paul-sartre',
    'albert-camus',
    'simone-de-beauvoir',
    'martin-heidegger',
    'karl-jaspers',
    'soren-kierkegaard',
    'martin-buber',
    'maurice-merleau-ponty'
  ],

  keyConcepts: [
    'absurde',
    'liberte',
    'authenticite',
    'angoisse',
    'engagement',
    'mauvaise-foi',
    'existentiel',
    'responsabilite',
    'existence',
    'essence',
    'pour-autrui',
    'regard',
    'etre-pour-la-mort',
    'jeté'
  ],

  variations: [
    {
      name: "Existentialisme athée",
      description: "Sartre, Camus - L'homme est seul face à son existence sans Dieu ni essence prédéfinie. L'absurde de la condition humaine appelle la révolte et la création de sens.",
      philosophers: ['jean-paul-sartre', 'albert-camus', 'simone-de-beauvoir']
    },
    {
      name: "Existentialisme chrétien",
      description: "Kierkegaard, Jaspers, Buber - La relation à Dieu donne son sens à l'existence. La foi comme saut dans l'absurde, l'angoisse comme expérience du divin.",
      philosophers: ['soren-kierkegaard', 'karl-jaspers', 'martin-buber']
    },
    {
      name: "Existentialisme phénoménologique",
      description: "Heidegger, Merleau-Ponty - Analyse des structures de l'existence. Dasein, être-au-monde, corps propre, chair du monde.",
      philosophers: ['martin-heidegger', 'maurice-merleau-ponty']
    }
  ],

  criticisms: [
    "Individualisme excessif - néglige les structures sociales et économiques",
    "Pessimisme et désespoir - vision trop sombre de la condition humaine",
    "Manque de projet politique - incapacité à proposer une alternative sociale",
    "Abstraction de la condition matérielle - ignore les classes et inégalités",
    "Élitisme intellectuel - philosophie pour bourgeoisie occidentale",
    "Contingence exagérée - minimise les déterminismes réels (psychologiques, sociaux)",
    "Solipsisme - risque d'enfermer l'individu dans sa subjectivité"
  ],

  influence: {
    on: [
      "Postmodernisme - critique des métarécits et des structures de sens",
      "Féminisme - théorie de l'oppression et construction du genre",
      "Psychologie existentielle - thérapies centrées sur le sens et l'authenticité",
      "Littérature - roman nouveau, théâtre de l'absurde",
      "Théâtre - Ionesco, Beckett, Genet",
      "Cinéma - Nouvelle Vague française",
      "Art - expressionnisme abstrait, art informel"
    ],
    in: [
      "France - épicentre de l'existentialisme sartrien",
      "Allemagne - philosophie de l'existence de Heidegger et Jaspers",
      "États-Unis - théologie existentielle, psychologie humaniste",
      "Europe du Nord - littérature existentielle",
      "Amérique latine - philosophie de la libération"
    ]
  },

  metadata: {
    representativeWorks: [
      "L'Être et le Néant - Sartre (1943)",
      "Le Mythe de Sisyphe - Camus (1942)",
      "Le Deuxième Sexe - de Beauvoir (1949)",
      "Être et Temps - Heidegger (1927)",
      "Traité du libre arbitre - Kierkegaard (1843)",
      "L'Existentialisme est un humanisme - Sartre (1946)",
      "La Nausée - Sartre (1938)",
      "L'Étranger - Camus (1942)"
    ],
    relatedMovements: [
      "Phénoménologie",
      "Nihilisme",
      "Herméneutique",
      "Absurdisme",
      "Personnalisme",
      "Psychologie existentielle"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const existentialismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'jean-paul-sartre',
    role: "Figure principale et théoricien",
    contribution: `Théorise l'existentialisme comme "l'existence précède l'essence". Développe l'ontologie de la liberté radicale, de la mauvaise foi (auto-illusion) et de l'engagement. Dans "L'Être et le Néant" (1943), il systématise la philosophie existentialiste comme ontologie phénoménologique. Popularise le mouvement via conférences ("L'Existentialisme est un humanisme", 1946), littérature ("La Nausée", "Les chemins de la liberté") et engagement politique. Son concept de "regard" analyse la relation à autrui comme conflictuelle mais nécessaire.`
  },
  {
    philosopherSlug: 'albert-camus',
    role: "Fondateur (avec réserve) de l'absurde",
    contribution: `Développe la philosophie de l'absurde dans "Le Mythe de Sisyphe" (1942) : le divorce entre le désir humain de sens et le silence du monde. Se distancie de l'existentialisme de Sartre qu'il juge trop rationnel et systématique. Propose la révolte comme réponse : vivre sans espoir mais sans résignation ("L'Homme révolté", 1951). Explore l'absurde dans la littérature ("L'Étranger", "La Peste"). Focus sur la condition humaine, la mesure et la solidarité contre les totalitarismes. Mort accidentel en 1960, laissant une œuvre profondément humaine.`
  },
  {
    philosopherSlug: 'simone-de-beauvoir',
    role: "Théoricienne majeure et fondatrice du féminisme moderne",
    contribution: `Applique l'existentialisme à la condition des femmes dans "Le Deuxième Sexe" (1949), ouvrage fondateur du féminisme moderne. Pose que "on ne naît pas femme, on le devient" - la féminité est une construction sociale. Analyse la femme comme "Autre" dans la conscience masculine, développant le concept d'altérité. Développe l'éthique de l'ambiguïté dans "Pour une morale de l'ambiguïté" (1947) : la liberté exige de vouloir la liberté des autres. Romancière ("L'Invitée", "Les Mandarins"), elle explore les thèmes de la liberté, du désir et des relations humaines. Figure majeure de l'émancipation féminine et de l'autonomie.`
  },
  {
    philosopherSlug: 'martin-heidegger',
    role: "Précurseur et fondateur de l'analytique existentiale",
    contribution: `Analytique du Dasein dans "Être et Temps" (1927) : l'homme comme "être-là" jeté dans le monde et préoccupé par son existence. Concepts clés : être-pour-la-mort (conscience de sa finitude), être-jeté (condition factice), souci (Sorge) comme structure fondamentale, authenticité vs dévaissance (perdu dans le "on"). Influence Sartre et de Beauvoir via la phénoménologie herméneutique. Se distancie de l'existentialisme français qu'il juge trop subjectiviste et anthropocentrique. Son travail s'oriente ensuite vers la critique de la technique moderne et l'oubli de l'Être dans la métaphysique occidentale. Controversé pour son engagement nazi en 1933.`
  },
  {
    philosopherSlug: 'soren-kierkegaard',
    role: "Père fondateur de l'existentialisme",
    contribution: `Premier existentialiste au XIXe siècle, bien avant le terme. Concepts fondateurs : angoisse comme vertige de la liberté, saut de la foi au-delà du rationnel, stades de l'existence (esthétique, éthique, religieux). Critique Hegel et le système philosophique qui nie l'existence concrète. L'individu singulier supérieur à l'universel. La vérité comme subjectivité ("La vérité est le subjectif"). Paradoxe de la foi : le chrétien est dans un mouvement de folie. Influence toute la tradition existentialiste par son emphasis sur l'existence individuelle, la liberté et le choix. Écrivain de génie utilisant pseudonymes et styles littéraires variés.`
  },
  {
    philosopherSlug: 'karl-jaspers',
    role: "Théoricien de l'existentialisme chrétien",
    contribution: `Développe l'existentialisme chrétien dans "Philosophie" (1932). Concepts : "situations limites" (Grenzsituationen) - mort, souffrance, culpabilité, confrontation à l'existence ; communication existentielle comme mode d'authenticité ; "englobant" (Umgreifende) comme limite de la pensée. Psychiatre de formation, il analyse les "situations-limites" comme moments où l'existence se révèle à elle-même. Se distancie de la religion institutionnelle pour une foi existentielle personnelle. Influence la théologie moderne (Tillich, Bultmann) et la philosophie de l'existence. Œuvre systématique tentant de concilier existentialisme et philosophie universelle.`
  },
  {
    philosopherSlug: 'maurice-merleau-ponty',
    role: "Contributeur de l'existentialisme phénoménologique",
    contribution: `Phénoménologie de la perception et du corps dans "Phénoménologie de la perception" (1945). Critique l'intellectualisme sartrien et l'existentialisme trop subjectiviste. Emphase sur l'"être-au-monde" : la conscience est toujours incarnée, située dans un corps et un monde. Concept de "corps propre" : le corps comme sujet de perception et d'action, pas simple objet. Intercorporéité et relation à autrui comme co-présence plutôt que regard objectivant. Collaborateur de Sartre aux Temps Modernes, s'en distancie philosophiquement et politiquement après 1953. Son œuvre annonce la philosophie cognitive, l'énactive cognition et l'écologie. "Le Visible et l'Invisible" (1964, posthume) développe une ontologie du sensible et de la "chair".`
  },
  {
    philosopherSlug: 'martin-buber',
    role: "Philosophe du dialogue et de la relation",
    contribution: `Existentialisme du dialogue dans "Je et Tu" (1923). La relation comme fondamentale : "Je-Tu" (relation authentique, réciproque) vs "Je-Cela" (relation instrumentale, objectivante). Dieu comme "Tu éternel" rencontré dans la relation. L'homme se réalise dans la relation, pas dans la solitude. Influence la théologie, la philosophie du dialogue et la psychologie humaniste (Rogers). Critique l'existentialisme trop centré sur l'individu isolé. Le dialogue comme mode d'authenticité existentielle et religieuse. Œuvre importante pour le judaïsme moderne, le christianisme dialoctique (Bonhoeffer) et la philosophie interpersonnelle.`
  }
];
