/**
 * Postmodernisme - Philosophical Movement Data
 * Courant philosophique de la fin du XXe siècle critique des métarécits et de la rationalité moderne
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

export const postmodernisme: MovementData = {
  id: 'postmodernisme',
  name: "Postmodernisme",
  slug: 'postmodernisme',
  category: 'philosophie-contemporaine',

  description: `Courant philosophique et culturel de la seconde moitié du XXe siècle, caractérisé par la critique des métarécits, le refus de la rationalité totalisante, l'acceptation du pluralisme et la mise en question des certitudes modernes. Le postmodernisme marque la fin de la confiance en la raison, le progrès et l'histoire universelle.

Le postmodernisme émerge dans un contexte de crise des grands récits modernes. Après Auschwitz, Hiroshima, le Goulag, les catastrophes du XXe siècle ont ébranlé la foi dans le progrès et la raison. Mai 1968 remet en cause les institutions et les hiérarchies. La montée de la société de consommation et des médias crée une culture de l'image et du simulacre.

Jean-François Lyotard théorise le postmodernisme dans La Condition postmoderne (1979) : "incrédulité à l'égard des métarécits". Les grands récits modernes - progrès, émancipation, savoir absolu, révolution, libération de l'humanité - ont perdu leur légitimité. Le savoir devient une marchandise dans la société informatisée. La légitimité se fragmente en jeux de langage locaux (Wittgenstein), sans perspective d'unification.

Jacques Derrida développe la déconstruction comme méthode critique. La structure logocentrique de la philosophie occidentale privilégie la présence, la parole, l'identité, la vérité. Derrida critique cette hiérarchie et montre comment chaque texte contient sa propre contradiction. Il n'y a pas de hors-texte : tout est texte, interprétation, différance (différer + différer). Le sens est toujours différé, jamais pleinement présent. La déconstruction lit les textes contre eux-mêmes, montrant leurs tensions et apories.

Michel Foucault analyse les rapports de pouvoir/savoir. L'histoire n'est pas le progrès de la liberté mais l'histoire de la discipline et du contrôle. Surveiller et punir (1975) analyse la naissance de la prison comme modèle de société disciplinaire. Le panoptisme de Bentham devient le modèle de surveillance généralisée. Histoire de la sexualité (1976-1984) analyse comment le pouvoir produit la vérité du sexe (pas seulement réprime). Foucault critique le sujet comme invention moderne : le sujet est constitué par des pratiques de pouvoir et de savoir. L'homme est une "invention récente" dont la fin est possible ("mort de l'homme").

Gilles Deleuze propose une philosophie du multiple et du devenir. Différence et répétition (1968) critique la représentation et le même. Logique du sens (1969) développe une métaphysique de l'événement. L'Anti-Œdipe (1972, avec Guattari) critique le freudisme et propose le "schizophrène" comme modèle révolutionnaire : flux, désir, déterritorialisation. Mille plateaux (1980) développe le concept de rhizome : réseau horizontal, sans centre ni hiérarchie, comme modèle du savoir.

Jean Baudrillard analyse la société des simulacres. L'échange symbolique et la mort (1976) critique l'économie politique du signe. Simulacres et simulation (1981) : nous vivons dans l'hyperréalité, où la copie remplace l'original. Disneyland est plus vrai que la réalité. La guerre du Golfe n'a pas eu lieu (1991) : la guerre comme simulacre médiatique.

Le postmodernisme influence profondément la culture contemporaine. Architecture : retour à l'ornementation, citation historique, ironie. Arts : appropriation, remix, mashup. Littérature : fragmentation, intertextualité, métafiction. Théorie : gender studies, cultural studies, postcolonial studies. Le postmodernisme est critiqué comme relativiste, nihiliste, complice du néolibéralisme (habilitation de la flexibilité et du précaire).`,

  shortDefinition: "Critique des métarécits et fin des certitudes modernes - déconstruction, pluralisme, simulacres",

  period: "Seconde moitié du XXe siècle (1967-présent)",

  origins: {
    context: "Après-guerre, crise des idéologies (après 1968), déclin des socialismes réels. Société de consommation, médias de masse, culture de l'image. Montée du néolibéralisme. Mai 1968 et ses suites.",
    predecessors: [
      "Nietzsche - Critique de la vérité, mort de Dieu, volonté de puissance",
      "Heidegger - Critique de la métaphysique de la présence",
      "Wittgenstein - Jeux de langage, fin de la représentation",
      "Bataille - Excès, transgression, dépense",
      " structuralisme - Saussure, Lévi-Strauss (dont le postmodernisme est rupture)",
      "Freud - Inconscient, désir comme réalité"
    ],
    reactionAgainst: [
      "Modernité - Foi dans la raison, le progrès, l'histoire universelle",
      "Humanisme - Le sujet comme centre et origine du sens",
      "Rationalisme - La raison comme universalisable et émancipatrice",
      "Marxisme orthodoxe - La lutte des classes comme grand récit",
      "Structuralisme - Recherche de structures universelles",
      "Phénoménologie - Conscience comme source de sens"
    ]
  },

  keyPrinciples: [
    "Incrédulité à l'égard des métarécits (progrès, émancipation, révolution)",
    "Refus de la rationalité totalisante et universalisante",
    "Pluralisme et fragmentation des jeux de langage",
    "Critique du sujet comme origine stable et transparente",
    "Déconstruction des hiérarchies et des oppositions binaires",
    "Le sens comme effet de différence, jamais pleinement présent",
    "Le pouvoir comme diffus, producteur de vérité et de subjectivité",
    "Le réel comme simulacre et construction",
    "Acceptation de l'ambiguïté, de l'incertitude, du paradoxe",
    "L'ironie et le pastiche comme modes d'expression"
  ],

  keyPhilosophers: [
    'jean-francois-lyotard',
    'jacques-derrida',
    'michel-foucault',
    'gilles-deleuze',
    'jean-baudrillard'
  ],

  keyConcepts: [
    'metarci',
    'deconstruction',
    'differance',
    'jeu-de-langage',
    'pouvoir',
    'savoir',
    'discipline',
    'biopolitique',
    'simulacre',
    'hyperrlit',
    'rhizome',
    'devenir',
    'deseir',
    'evenement',
    'difference'
  ],

  variations: [
    {
      name: "Poststructuralisme",
      description: "Derrida, Foucault, Deleuze - Rupture avec le structuralisme (recherche de structures). Le sens n'est pas fixe par des structures mais produit par des différences. Sujet comme effet de langage et de pouvoir.",
      philosophers: ['jacques-derrida', 'michel-foucault', 'gilles-deleuze']
    },
    {
      name: "Déconstruction",
      description: "Derrida - Lecture des textes contre eux-mêmes. Critique du logocentrisme (privilège de la présence). Différance : le sens est toujours différé. Il n'y a pas de hors-texte.",
      philosophers: ['jacques-derrida']
    },
    {
      name: "Généalogie du pouvoir",
      description: "Foucault - Analyse des rapports pouvoir/savoir. Disciplinarisation des corps et des populations. Biopolitique. Le sujet comme effet de pratiques de subjectivation.",
      philosophers: ['michel-foucault']
    },
    {
      name: "Schizo-analyse",
      description: "Deleuze et Guattari - Critique de l'Œdipe et du freudisme. Désir comme production, non manque. Rhizome vs arbre. Devenir, multiplicité, flux.",
      philosophers: ['gilles-deleuze']
    },
    {
      name: "Société des simulacres",
      description: "Baudrillard - L'échange symbolique et la mort. Simulacres et simulation. Hyperréalité. La copie remplace l'original. La guerre du Golfe n'a pas eu lieu.",
      philosophers: ['jean-baudrillard']
    }
  ],

  criticisms: [
    "Relativisme - tout se vaut, pas de vérité ni de fondement",
    "Nihilisme - négation de toute valeur et de tout sens",
    "Obscurantisme - jargon inintelligible, refus de la clarté",
    "Complicité avec le néolibéralisme - le postmodernisme comme idéologie de la flexibilité",
    "Politique impuissante - critique sans proposition alternative",
    "Excès de textualisme - réduire tout au texte, nier la matérialité",
    "Subjectivisme - chaque subjectivité est sa propre vérité",
    "Conservatisme caché - la fin des grands récits justifie l'ordre établi",
    "Américanophilie - le postmodernisme comme importation américaine (Derrida français)"
  ],

  influence: {
    on: [
      "Études culturelles - analyse de la culture populaire, médias, identités",
      "Gender studies - performativité du genre (Judith Butler)",
      "Postcolonial studies - critique de l'eurocentrisme, décolonialité",
      "Littérature - métafiction, fragmentation, intertextualité",
      "Architecture - postmodernisme architectural (Venturi, Jencks)",
      "Arts contemporains - appropriation, remix, pastiche",
      "Théorie critique seconde génération - Fraser, Honneth, Butler",
      "Sociologie - individualisme réflexif (Bauman, Beck)"
    ],
    in: [
      "France - années 1960-1980, philosophie dominante",
      "États-Unis - French Theory, départements de littérature et cultural studies",
      "Universités occidentales - diffusion via les humanities",
      "Architecture - postmodernisme architectural",
      "Arts contemporains - influence globale",
      "Médias et culture pop - simulacres, remix, appropriation",
      "Politique identitaire - politiques de la différence"
    ]
  },

  metadata: {
    representativeWorks: [
      "De la grammatologie - Derrida (1967)",
      "Différance - Derrida (1968)",
      "La Condition postmoderne - Lyotard (1979)",
      "Surveiller et punir - Foucault (1975)",
      "Histoire de la sexualité - Foucault (1976-1984)",
      "Différence et répétition - Deleuze (1968)",
      "L'Anti-Œdipe - Deleuze et Guattari (1972)",
      "Simulacres et simulation - Baudrillard (1981)",
      "Écrits - Derrida (1967)",
      "Mille plateaux - Deleuze et Guattari (1980)"
    ],
    relatedMovements: [
      "Structuralisme",
      "Phénoménologie",
      "Existentialisme",
      "Marxisme",
      "Féminisme",
      "Postcolonialisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const postmodernismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'jean-francois-lyotard',
    role: "Théoricien de la condition postmoderne",
    contribution: `Philosophe français (1924-1998). La Condition postmoderne (1979) : rapport sur le savoir dans les sociétés développées. "Incrédulité à l'égard des métarécits" : les grands récits modernes (progrès, émancipation, savoir absolu) ont perdu leur légitimité. Le savoir devient une marchandise dans la société informatisée. La légitimité se fragmente en jeux de langage locaux (Wittgenstein), sans perspective d'unification. Différend (1983) : conflit entre discours sans règle commune de jugement (comme le conflit israélo-palestinien). La figure du "juif" comme métaphore de l'humanité exclue. Lyotard analyse le postmodernisme comme condition culturelle, pas comme esthétique. Le postmoderne est la modernité elle-même en train de se remettre en question ("le moderne postmoderne"). Influence sur la théorie postmoderne, les études culturelles, la philosophie politique.
`
  },
  {
    philosopherSlug: 'jacques-derrida',
    role: "Fondateur de la déconstruction",
    contribution: `Philosophe algérien-français (1930-2004). De la grammatologie (1967) : critique du logocentrisme (privilège de la parole, de la présence, de la vérité) de la philosophie occidentale. Différance : néologisme combinant différer (temporalité) et différer (spatialité). Le sens est toujours différé, différé dans une chaîne infinie de signifiants. Il n'y a pas de hors-texte : tout est texte, interprétation, trace. La structure, le signe et le jeu dans le discours des sciences humaines (1966) : critique du structuralisme comme recherche d'un centre stable. La vérité est production, non découverte. Force de loi (1990) : analyse de la violence fondatrice du droit. Spectres de Marx (1993) : lien entre marxisme et déconstruction ("un certain marxisme"). Derrida influence la théorie littéraire, les études culturelles, le droit (critical legal studies), la théologie (religion sans religion).
`
  },
  {
    philosopherSlug: 'michel-foucault',
    role: "Généalogiste du pouvoir et de la subjectivité",
    contribution: `Philosophe français (1926-1984). Les Mots et les Choses (1966) : "mort de l'homme", le sujet comme produit de l'épistémè (structure épistémologique d'une époque). Surveiller et punir (1975) : naissance de la prison comme modèle de société disciplinaire. Le panoptisme de Bentham comme modèle de surveillance généralisée. Histoire de la sexualité (1976-1984, t.1-3) : le pouvoir produit la vérité du sexe, pas seulement la réprime. Biopolitique : gestion de la vie des populations par l'État. Subjectivation : le sujet se constitue par des pratiques de soi. "Il faut défendre la société" (cours 1975-1976) : biopolitique, racisme d'État, gouvernementalité. Foucault influence les cultural studies, les gender studies, les études postcoloniales, la sociologie de la santé, la criminologie critique.
`
  },
  {
    philosopherSlug: 'gilles-deleuze',
    role: "Philosophe du multiple et du devenir",
    contribution: `Philosophe français (1925-1995). Différence et répétition (1968) : critique de la représentation, du même, de l'identité. La différence pure comme affirmation. Logique du sens (1969) : métaphysique de l'événement, surface de sens. L'Anti-Œdipe (1972, avec Guattari) : critique du freudisme, le désir comme production (non manque). Schizophrénie comme modèle révolutionnaire : flux, déterritorialisation, corps sans organes. Mille plateaux (1980) : rhizome comme modèle du savoir (réseau horizontal sans centre), devenir, multiplicité. Foucault (1986) : analyse du pouvoir/savoir chez Foucault. Qu'est-ce que la philosophie ? (1991, avec Guattari) : la philosophie comme création de concepts. Deleuze influence la théorie littéraire, les études culturelles, la philosophie politique (Hardt et Negri, Empire), la géographie (nouveaux territoires).
`
  },
  {
    philosopherSlug: 'jean-baudrillard',
    role: "Théoricien des simulacres et de l'hyperréalité",
    contribution: `Philosophe et sociologue français (1929-2007). Le Système des objets (1968) : critique de la consommation, l'objet comme signe. La société de consommation (1970). Pour une critique de l'économie politique du signe (1972) : le signe comme valeur d'échange symbolique. L'Échange symbolique et la mort (1976) : critique du marxisme pour n'avoir pas analysé l'échange symbolique (cadeau, potlatch). Simulacres et simulation (1981) : nous vivons dans l'hyperréalité, où la copie remplace l'original. Disneyland est plus vrai que la réalité. Les stratégies fatales (1983) : l'objet séduit, trompe, défait le sujet. Amérique (1986) : voyage en Amérique comme utopie réalisée. La guerre du Golfe n'a pas eu lieu (1991) : la guerre comme simulacre médiatique. L'écran fatal (1991) : la télévision comme événement en temps réel. Baudrillard influence la théorie des médias, la sociologie de la consommation, la culture postmoderne.
`
  }
];
