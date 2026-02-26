/**
 * Authenticité - Concept Data
 * Mode d'existence où l'individu assume sa liberté et sa responsabilité
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'authenticite',
  name: 'Authenticité',
  slug: 'authenticite',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'L\'authenticité est le mode d\'existence où l\'individu assume pleinement sa liberté et sa responsabilité, vivant en accord avec lui-même plutôt que dans l\'illusion ou la mauvaise foi. Chez Heidegger, l\'existence authentique (Eigentlichkeit, « propreté ») s\'oppose à l\'inauthenticité (Uneigentlichkeit) du « On » (das Man) où l\'on vit selon les opinions reçues. L\'authenticité n\'est pas un état à atteindre mais une manière d\'être qui implique la « résolution » (Entschlossenheit) : se porter en avant vers sa mort, sa possibilité la plus propre. Pour Sartre, l\'authenticité est le refus de la mauvaise foi, l\'acceptation de notre condition d\'êtres libres et responsables. L\'authenticité exige le courage d\'être soi-même, non pas selon une essence prédéterminée mais comme projet à réaliser à chaque instant.',
  shortDefinition: 'Mode d\'existence où l\'individu assume sa liberté, sa responsabilité et sa mortalité',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    greek: 'authentikos (αὐθεντικός)',
    root: 'autos : soi-même + hentes : celui qui fait',
    notes: 'Étymologiquement, ce qui vient de l\'auteur lui-même, ce qui est original, non contrefait'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Heidegger - Eigentlichkeit (propreté)',
      description: 'Dans Être et Temps (1927), Heidegger distingue l\'existence authentique (Eigentlichkeit) de l\'existence inauthentique (Uneigentlichkeit). L\'inauthenticité est la vie dans le « On » : on pense ce qu\'on pense, on fait ce qu\'on fait, on vit comme on vit. L\'authenticité est le retour à soi, la « résolution » où l\'être-là s\'approprie son existence en se portant vers sa mort. L\'authentique vit sa mortalité, l\'inauthentique la fuit.'
    },
    {
      title: 'Sartre - Authenticité vs mauvaise foi',
      description: 'Pour Sartre, l\'authenticité est le refus de la mauvaise foi (auto-illusion sur notre liberté). L\'homme authentique reconnaît qu\'il est « condamné à être libre », qu\'il n\'a pas d\'essence prédéterminée et qu\'il est totalement responsable de ses choix. La mauvaise foi consiste à se nier cette liberté (en se réduisant à un rôle, en invoquant un déterminisme). L\'authenticité est le courage d\'être « pour-soi » sans fuite.'
    },
    {
      title: 'Kierkegaard - Le choix de soi',
      description: 'Dans Ou bien... ou bien (1843), Kierkegaard oppose le mode esthétique (inauthentique, dispersé, sans engagement) au mode éthique (choix de soi, engagement). L\'individu authentique est celui qui se choisit lui-même dans l\'angoisse de la liberté, qui se « recueille » dans l\'unité d\'un projet de vie. Le désespoir est le refus de devenir soi-même.'
    },
    {
      title: 'L\'authenticité comme projet',
      description: 'L\'authenticité n\'est pas un état définitif mais un projet constant. On n\'est pas authentique une fois pour toutes, on le devient à chaque instant par ses choix. L\'authenticité est « vigilance » : attention à soi, refus de la complaisance, courage de reconnaître ses contradictions et ses échecs. Elle est l\'exigence de cohérence entre ce que l\'on est et ce que l\'on fait.'
    },
    {
      title: 'Authenticité et solitude',
      description: 'L\'existence authentique est solitaire car elle exige de se détacher du « On », de l\'opinion commune, des rassurements de groupe. Celui qui devient authentique éprouve une « désolation » (Heidegger) mais c\'est dans cette solitude qu\'il peut se choisir soi-même. La solitude authentique n\'est pas l\'isolement mais la condition de la rencontre véritable avec autrui.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Analyse systématique de l\'authenticité comme Eigentlichkeit et du « On » comme inauthenticité' },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'L\'authenticité comme refus de la mauvaise foi et acceptation de la liberté absolue' },
    { name: 'Søren Kierkegaard', period: '1813-1855', contribution: 'Le choix de soi comme acte authentique vs le désespoir de la fuite' },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'Devenir ce que l\'on est : l\'authenticité comme création de soi' },
    { name: 'Simone de Beauvoir', period: '1908-1986', contribution: 'L\'authenticité comme refus des justifications et des excuses morales' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le « On » selon Heidegger : « On » pense que le travail est important, « on » s\'indigne des scandales, « on » vote comme tout le monde. Le vivre selon le « On » est inauthentique car on ne s\'approprie pas ses pensées et actions. L\'authentique pense et agit en son nom propre.',
    'Le garçon de café chez Sartre : Le serveur qui joue à être garçon de café avec une rigueur excessive (gestes appris, attitude de serviteur parfait) est dans la mauvaise foi. Il se réduit à sa fonction pour fuir sa liberté d\'être autre chose. L\'authentique serait de reconnaître qu\'il est libre de ne pas être garçon de café.',
    'L\'artiste vs le technicien : L\'artiste authentique crée selon sa vision personnelle, risquant l\'incompréhension. Le technicien inauthentique produit selon les normes du marché, se cachant dans la « nécessité » économique. La différence n\'est pas dans la qualité mais dans l\'appropriation de l\'acte créateur.',
    'Le mariage de convenance : La personne qui se marie par conformisme social (« c\'est l\'âge », « il faut se marier ») est dans l\'inauthenticité. L\'authentique se marie (ou non) en son nom propre, en assumant sa décision sans se référer à la norme extérieure.',
    'Le militant sincère vs le conformiste : Le militant authentique engage sa liberté dans une cause qu\'il s\'est appropriée. Il peut reconnaître les limites de son engagement, voire s\'en détourner. Le conformiste suit le mouvement par peur d\'être exclu, sans s\'approprier son action.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Œuvre majeure sur l\'authenticité (Eigentlichkeit) et le « On » (das Man)',
      quotes: [
        'Le « On » est l\'être-le-plus-proche de l\'être-là.',
        'Le « On » divise toute décision authentique.',
        'L\'être-là authentique est celui qui se porte en avant vers sa mort.',
        'La résolution est le mode d\'être authentique de l\'être-là.',
        'L\'authenticité est le retour à soi de l\'être-là.',
        'Le « On » dit : on meurt, car chaque individu se meurt - mais effectivement on ne meurt pas.',
        'L\'angoisse est la disposition par laquelle nous nous ouvrons à l\'authenticité.'
      ]
    },
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Traité sur la mauvaise foi, la liberté et l\'authenticité existentielle',
      quotes: [
        'L\'homme est condamné à être libre.',
        'La mauvaise foi est le refus de reconnaître notre liberté.',
        'L\'existence précède l\'essence.',
        'L\'homme authentique est celui qui assume sa condition.',
        'Nous sommes une liberté qui choisit.',
        'Le pour-soi est conscience de soi et liberté.',
        'La mauvaise foi est un mensonge à soi-même.'
      ]
    },
    {
      title: 'Ou bien... ou bien',
      author: 'Søren Kierkegaard',
      year: 1843,
      type: 'BOOK' as const,
      reference: 'Traités sur les modes d\'existence esthétique (inauthentique) et éthique (authentique)',
      quotes: [
        'Le moi est une relation qui se rapporte à elle-même.',
        'Le désespoir est le péché.',
        'Devenir soi est la tâche de la vie.',
        'Choisir soi-même est la décision la plus profonde.',
        'L\'angoisse est le vertige de la liberté.',
        'Le mariage est le premier acte authentique de la vie éthique.'
      ]
    },
    {
      title: 'Le Malaise dans la culture',
      author: 'Sigmund Freud',
      year: 1929,
      type: 'BOOK' as const,
      reference: 'Essai sur le conflit entre pulsions individuelles et exigences sociales',
      quotes: [
        'La culture exige la renonciation pulsionnelle.',
        'Le sentiment de culpabilité est la conscience de la faute.',
        'Le surmoi est l\'héritier du complexe d\'Œdipe.'
      ]
    },
    {
      title: 'Pour une morale de l\'ambiguïté',
      author: 'Simone de Beauvoir',
      year: 1947,
      type: 'BOOK' as const,
      reference: 'Essai sur l\'authenticité morale et la responsabilité existentielle',
      quotes: [
        'On ne naît pas femme, on le devient.',
        'L\'homme est libre, mais il est situé.',
        'La liberté est la source de toute valeur.',
        'L\'authenticité est refus des excuses et des justifications.',
        'Je veux être moi et être le monde.',
        'L\'oppression est le refus de la liberté d\'autrui.'
      ]
    },
    {
      title: 'Ainsi parlait Zarathoustra',
      author: 'Friedrich Nietzsche',
      year: 1883,
      type: 'BOOK' as const,
      reference: 'Traité poétique sur la création de soi comme œuvre d\'art',
      quotes: [
        'Devenir ce que l\'on est.',
        'Il faut porter encore un chaos en soi pour pouvoir enfanter une étoile dansante.',
        'Je vous enseigne le surhomme.',
        'Crée, c\'est la grande rédemption de la souffrance.',
        'Devient qui tu es.',
        'L\'homme est une corde entre la bête et le surhomme.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que l\'authenticité selon Heidegger ?',
      back: 'L\'authenticité (Eigentlichkeit) est le mode d\'existence où l\'être-là s\'approprie son existence en se portant vers sa mort. Elle s\'oppose à l\'inauthenticité du « On » où l\'on vit selon l\'opinion commune sans assumer ses choix.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre authenticité et inauthenticité ?',
      back: 'L\'authenticité est l\'existence assumée : on vit ses propres choix, on pense par soi-même, on se porte vers sa mort. L\'inauthenticité est la vie dans le « On » : on pense ce qu\'on pense, on fait ce qu\'on fait, on fuit sa liberté dans la conformité. L\'inauthentique est « dispersé », l\'authentique est « rassemblé » dans la résolution.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Heidegger définit-il le « On » (das Man) ?',
      back: 'Le « On » est l\'être-le-plus-proche de l\'être-là quotidien : c\'eest l\'opinion publique, les normes sociales, la manière « dont on fait les choses ». Le « On » divise toute décision authentique en nous déchargeant de notre responsabilité. Vivre selon le « On », c\'est fuir sa propre existence.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre relie-t-il authenticité et mauvaise foi ?',
      back: 'Pour Sartre, l\'authenticité est le refus de la mauvaise foi. La mauvaise foi est l\'auto-illusion par laquelle on nie sa liberté (en se réduisant à un rôle, en invoquant un déterminisme). L\'authentique reconnaît qu\'il est « condamné à être libre » et assume cette liberté sans fuite.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Nietzsche résume le projet authentique ?',
      back: '« Devenir ce que l\'on est » (Also sprach Zarathoustra, 1883) - L\'authenticité n\'est pas découvrir une essence mais se créer soi-même comme œuvre.',
      difficulty: 2
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Sartre résume la condition authentique ?',
      back: '« L\'homme est condamné à être libre » (L\'Être et le Néant, 1943) - L\'authenticité est d\'accepter cette condamnation sans fuite dans la mauvaise foi.',
      difficulty: 2
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Heidegger, l\'inauthenticité est la vie dans le {{On}} (das {{Man}}).',
      back: 'On | Man',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'L\'authenticité est-elle un état à atteindre ou un projet constant ?',
      back: 'L\'authenticité n\'est pas un état définitif mais un projet constant. On n\'est pas authentique une fois pour toutes, on le devient à chaque instant par ses choix. Heidegger parle de « résolution » : décision de se porter vers sa mort, possibilité la plus propre. Sartre souligne que nous sommes « condamnés à être libres » : chaque instant est un choix, donc une occasion d\'authenticité ou de mauvaise foi. Kierkegaard décrit le « choix de soi » comme acte fondateur qui doit être sans cesse réitéré. L\'authenticité est vigilance, courage d\'être soi-même sans cesse menacé par la facilité du « On ».',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['authenticité', 'heidegger', 'sartre', 'kierkegaard', 'mauvaise foi', 'liberté', 'mort', 'responsabilité', 'pour-soi', 'en-soi', 'existentiel']
};
