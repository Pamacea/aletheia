/**
 * Féminisme - Philosophical Movement Data
 * Mouvement pour l'égalité des sexes et l'émancipation des femmes
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
    reactionAgainst: string [];
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

export const feminisme: MovementData = {
  id: 'feminisme',
  name: "Féminisme",
  slug: 'feminisme',
  category: 'philosophie-politique',

  description: `Mouvement philosophique et politique pour l'égalité des sexes, l'émancipation des femmes et la fin du patriarcat. Le féminisme remet en cause la distinction nature/culture, la construction sociale du genre, et l'universalisme masculin de la philosophie.

Le féminisme moderne naît avec la 'Déclaration des droits de la femme et de la citoyenne' (1791) d'Olympe de Gouges, pendant la Révolution française. Mary Wollstonecraft, dans 'Défense des droits des femmes' (1792), affirme l'égalité intellectuelle des hommes et des femmes et exige l'éducation pour les femmes.

Le XIXe siècle voit les premières vagues féministes. Les suffragettes (Emmeline Pankhurst, en Angleterre) luttent pour le droit de vote. John Stuart Mill, dans 'De l'assujettissement des femmes' (1869), argumente pour l'égalité politique et juridique.

Le XXe siècle est marqué par plusieurs vagues. La première vague (1900-1930) : droit de vote, droits juridiques. La deuxième vague (1960-1980) : Simone de Beauvoir, 'Le deuxième sexe' (1949) : 'On ne naît pas femme, on le devient'. Le genre comme construction sociale. Betty Friedan, 'The Feminine Mystique' (1963) : critique du rôle domestique. Mouvement de libération des femmes, MLF en France.

La troisième vague (1990-2000) : Judith Butler, 'Gender Trouble' (1990) : le genre comme performance, critique de la catégorie 'femme'. Intersectionnalité (Kimberlé Crenshaw) : race, classe, genre s'entrecroisent. Postféminisme : individualisme, sexualité.

Le féminisme philosophique critique l'universalisme de la philosophie : la 'raison', le 'sujet', l''humanité' sont en fait masculins. Il développe une éthique du care (Carol Gilligan), une épistémologie féministe (Sandra Harding, standpoint theory), et une politique de la reconnaissance (Nancy Fraser).

Le féminisme influence le droit (droit de vote, égalité, harcèlement), la littérature, l'art, la politique (quotas, parité), la famille (congé parental, partage des tâches). Il continue de lutter contre les inégalités, les violences, les stéréotypes.`,

  shortDefinition: "Égalité des sexes, émancipation des femmes, critique du patriarcat",

  period: "XVIIIe-XXIe siècle (1792 à aujourd'hui)",

  origins: {
    context: "Lumières, Déclaration des droits de l'homme (1789). Industrialisation, travail des femmes. Révolutions (française, américaine). Essor des démocraties libérales.",
    predecessors: [
      "Christine de Pizan - La cité des dames (1405)",
      "Marguerite de Navarre - Femmes savantes",
      "Quakers - Égalité hommes-femmes",
      "Abolitionnisme - Droits des esclaves"
    ],
    reactionAgainst: [
      "Patriarcat - Domination masculine",
      "Essentialisme - Nature féminine fixe",
      "Naturalisation - La femme comme nature, l'homme comme culture",
      "Sexisme - Discriminations systémiques"
    ]
  },

  keyPrinciples: [
    "Égalité des sexes - Égalité politique, juridique, sociale",
    "Genre comme construction - 'On ne naît pas femme, on le devient'",
    "Autonomie corporelle - Droit à disposer de son corps",
    "Liberation sexuelle - Libre choix de la sexualité",
    "Care ethics - Éthique du soin, de la relation",
    "Intersectionnalité - Race, classe, genre",
    "Sisterhood - Solidarité féminine"
  ],

  keyPhilosophers: [
    'mary-wollstonecraft',
    'simone-de-beauvoir',
    'judith-butler',
    'carol-gilligan',
    'sandra-harding',
    'nancy-fraser',
    'helene-cixous',
    'julia-kristeva',
    'luce-irigaray'
  ],

  keyConcepts: [
    'genre',
    'patriarcat',
    'sexe',
    'care',
    'intersectionnalite',
    'performance',
    'agency',
    'corps'
  ],

  variations: [
    {
      name: "Féminisme libéral",
      description: "Mill, Friedan - Égalité de droit, autonomie individuelle. Droit de vote, éducation, carrière. Réforme, pas révolution. Betty Friedan, 'The Feminine Mystique'.",
      philosophers: ['john-stuart-mill', 'betty-friedan']
    },
    {
      name: "Féminisme radical",
      description: "de Beauvoir, Millett, Firestone - Le patriarcat comme système de domination. 'Le Deuxième Sexe'(1949). 'Sexual Politics'(1970). 'The Dialectic of Sex'(1970). Sisterhood is powerful.",
      philosophers: ['simone-de-beauvoir', 'kate-millett', 'shulamith-firestone']
    },
    {
      name: "Féminisme matérialiste",
      description: "Delphy - Le patriarcat comme mode de production. 'L'ennemi principal'. Les femmes comme classe. Travail domestique gratuit. Christine Delphy, Monique Wittig."
    },
    {
      name: "Féminisme postmoderne",
      description: "Butler, Haraway - Genre comme performance, fluidité. Critique de la catégorie 'femme'. 'Gender Trouble'(1990). 'Manifeste Cyborg'(1985). Différence vs égalité.",
      philosophers: ['judith-butler', 'donna-haraway']
    },
    {
      name: "Féminisme du care",
      description: "Gilligan, Noddings - Éthique du soin, de la relation. Critique de l'éthique masculine (justice, droits). 'In a Different Voice'(1982). Carol Gilligan, Nel Noddings.",
      philosophers: ['carol-gilligan']
    },
    {
      name: "Intersectionnalité",
      description: "Crenshaw, Collins - Race, classe, genre s'entrecroisent. Expériences multiples. Black feminism. 'Intersectionality'(1989). Kimberlé Crenshaw, Patricia Hill Collins."
    }
  ],

  criticisms: [
    "Essentialisme inversé - 'La femme' comme essence universelle",
    "Occidentalisme - Féminisme blanc, occidental",
    "Anti-natalisme - Critique de la maternité",
    "Androcentrisme - Mesure l'émancipation par les critères masculins",
    "Victimisation - Femmes comme victimes, pas agents",
    "Anti-homme - Homophobie, misandrie",
    "Individualisme - Perte du collectif"
  ],

  influence: {
    on: [
      "Droit politique - Droit de vote, candidature",
      "Droit civil - Égalité, divorce, avortement",
      "Éducation - Accès des filles à l'école",
      "Travail - Salaire égal, congé parental",
      "Famille - Partage des tâches, garde d'enfants",
      "Culture - Représentation des femmes",
      "Philosophie - Épistémologie, éthique, politique féministes"
    ],
    in: [
      "Europe - Suffragettes, MLF",
      "Amérique du Nord - WAVAW, NOW",
      "Amérique latine - Féminisme de la libération",
      "Afrique - Féminisme postcolonial",
      "Asie - Féminismes asiatiques",
      "Moyen-Orient - Féminismes musulmans"
    ]
  },

  metadata: {
    representativeWorks: [
      "Défense des droits des femmes - Mary Wollstonecraft (1792)",
      "Déclaration des droits de la femme - Olympe de Gouges (1791)",
      "De l'assujettissement des femmes - Mill (1869)",
      "Le Deuxième Sexe - de Beauvoir (1949)",
      "The Feminine Mystique - Friedan (1963)",
      "Sexual Politics - Millett (1970)",
      "Gender Trouble - Butler (1990)",
      "In a Different Voice - Gilligan (1982)"
    ],
    relatedMovements: [
      "Existentialisme",
      "Postmodernisme",
      "Théorie queer",
      "Marxisme",
      "Postcolonialisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const feminismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'simone-de-beauvoir',
    role: "Fondatrice du féminisme moderne",
    contribution: "Féministe existentialiste française (1908-1986). 'Le Deuxième Sexe'(1949) : œuvre fondatrice du féminisme moderne. 'On ne naît pas femme, on le devient': le genre est une construction sociale. La femme comme 'Autre'dans la conscience masculine, objet désiré, pas sujet. Analyse de la condition féminine : corps, mythe, vie, histoire. 'L'Invitée'(1943) : ambivalence du désir féminin. Influence sur le féminisme radical, la théorie queer et la philosophie féministe contemporaine."
  },
  {
    philosopherSlug: 'judith-butler',
    role: "Théoricienne du genre et postféministe",
    contribution: "Philosophe américaine (née en 1956). 'Gender Trouble'(1990) : le genre comme performance, pas comme identité fixe. Critique de la catégorie 'femme'comme sujet unitaire du féminisme. Performativité : le genre se fait par des actes répétés. 'Bodies That Matter'(1993) : matérialité du corps comme discursive. Influence sur la théorie queer, les études de genre, le poststructuralisme et le féminisme postmoderne."
  },
  {
    philosopherSlug: 'carol-gilligan',
    role: "Fondatrice de l'éthique du care",
    contribution: "Psychologue américaine (née en 1936). 'In a Different Voice'(1982) : critique la théorie morale de Kohlberg (stades du développement moral comme androcentriques). Les femmes privilégient une éthique du care, de la relation, de la responsabilité, plutôt qu'une éthique de la justice et des droits. Influence sur l'éthique féministe, la psychologie du développement et les études de genre."
  }
];
