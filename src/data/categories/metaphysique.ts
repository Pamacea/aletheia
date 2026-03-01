/**
 * Métaphysique - Category Data
 */

export const category = {
  id: 'metaphysique',
  name: 'Métaphysique',
  slug: 'metaphysique',
  description: 'Étude de la nature de la réalité, de l\'être et de l\'existence',
  color: '#8b6f3c',
  icon: 'book-open'
};

export const concepts = [
  {
    id: 'verite',
    name: 'Vérité',
    greek: 'ΑΛΗΘΕΙΑ',
    greekTranslit: 'Aletheia',
    slug: 'verite',
    category: 'metaphysique',
    difficulty: 3,
    importance: 5,
    definition: 'L\'aletheia chez les Grecs désigne le " dévoilement ", le passage de l\'occulte à la manifeste. La vérité n\'est pas une adéquation entre intellect et chose, mais l\'émergence de la chose elle-même dans sa luminosité propre.',
    shortDefinition: 'Le dévoilement de ce qui est, passage de l\'occulte à la manifeste',
    etymology: {
      greek: 'α-ληθής (a-lethes) : non-caché, non-oublié',
      root: 'ληθώ (lethô) : oublier, cacher',
      notes: 'Littéralement " dévoilement " ou " non-occultation "'
    },
    variations: [
      {
        title: 'Étymologie grecque',
        description: 'L\'aletheia n\'est pas une " vérité " au sens moderne (correspondance), mais le " dévoilement " - le passage de l\'occulte à la manifeste, où la chose apparaît elle-même.'
      },
      {
        title: 'Interprétation platonicienne',
        description: 'La vérité comme illumination de l\'âme par le Bien. Le soleil métaphorique révèle les idées éternelles, et la connaissance est une reminiscence de ce qui est déjà vu.'
      },
      {
        title: 'Interprétation aristotélicienne',
        description: 'La vérité comme adéquation entre l\'intellect et la chose. " Dire de ce qui est qu\'il est, et de ce qui n\'est pas qu\'il n\'est pas. "'
      },
      {
        title: 'Interprétation heideggerienne',
        description: 'L\'aletheia comme dévoilement ontologique de l\'être. La vérité n\'est pas une propriété de la proposition, mais l\'ouverture même où l\'être peut se manifester.'
      }
    ],
    keyFigures: [
      { name: 'Platon', period: '427-347 av. J.-C.', contribution: 'Théorie de la vérité comme illumination de l\'âme' },
      { name: 'Heidegger', period: '1889-1976', contribution: 'Réinterprétation de l\'aletheia comme dévoilement de l\'être' },
      { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Correspondance entre intellect et chose' }
    ],
    examples: [
      'L\'idée du Bien chez Platon comme vérité suprême',
      'La lumière comme métaphore de la vérité dans la tradition philosophique'
    ],
    relatedConcepts: [
      { name: 'Bien', relation: 'Est lié à', description: 'La vérité est une forme du Bien' },
      { name: 'Sagesse', relation: 'Suppose', description: 'La sagesse cherche la vérité' },
      { name: 'Logos', relation: 'Est proche de', description: 'Le logos comme vérité du discours' }
    ],
    sources: [
      {
        title: 'La République',
        author: 'Platon',
        year: -380,
        type: 'BOOK',
        reference: 'Livre VI, 509d-511e',
        quotes: [
          '" La vérité est donc ce qui est, et l\'erreur ce qui n\'est pas "',
          '" Le soleil est le fils du bien, qui procède de la vérité "'
        ]
      },
      {
        title: 'Être et Temps',
        author: 'Martin Heidegger',
        year: 1927,
        type: 'BOOK',
        reference: '§44, Dévoilement',
        quotes: [
          '" L\'αλήθεια est le caractère fondamental de l\'être "',
          '" La vérité n\'est pas une propriété de la proposition, mais l\'ouverture de l\'être "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que l\'aletheia chez les Grecs ?',
        back: 'L\'aletheia signifie " dévoilement " ou " non-occultation " - le passage de l\'occulte à la manifeste, où la chose apparaît dans sa luminosité propre.',
        difficulty: 2
      },
      {
        type: 'CONNECTION',
        front: 'Comment Platon et Heidegger conçoivent-ils différemment la vérité ?',
        back: 'Platon: vérité comme illumination intellectuelle et correspondance avec le Bien. Heidegger: vérité comme dévoilement ontologique de l\'être.',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation illustre le mieux l\'aletheia ?',
        back: '" L\'αλήθεια est le caractère fondamental de l\'être " - Heidegger, Être et Temps (1927)',
        difficulty: 3
      }
    ],
    tags: ['vérité', 'dévoilement', 'être', 'ontologie', 'platon', 'heidegger'],
    status: 'COMPLETE'
  },
  {
    id: 'etre',
    name: 'Être',
    greek: 'ΤΟ ΟΝ',
    greekTranslit: 'To On',
    slug: 'etre',
    category: 'metaphysique',
    difficulty: 5,
    importance: 5,
    definition: 'L\'être est ce qui est, ce qui existe par soi, indépendamment de toute autre chose. C\'est l\'objet premier de la métaphysique, compris comme substance, réalité, ou présence.',
    shortDefinition: 'Ce qui est, ce qui existe par soi et en soi',
    etymology: {
      greek: 'τὸ ὂν (to on) : l\'étant',
      participe: 'Participe présent du verbe εἶμί (eimi) : je suis',
      notes: 'Désigne à la fois " ce qui est " et " l\'étant "'
    },
    variations: [
      {
        title: 'Approche parménidienne',
        description: 'L\'Être est un, éternel, immobile. " L\'Être est, le non-être n\'est pas ". Le devenir n\'est qu\'illusion d\'optique. L\'unité de l\'Être exclut toute multiplicité réelle.'
      },
      {
        title: 'Approche platonicienne',
        description: 'L\'Être comme Idée, forme supra-sensible. Le monde sensible n\'est qu\'ombre de l\'Être véritable. L\'Être est stable, immuable, intelligible - contraire au devenir sensible.'
      },
      {
        title: 'Approche aristotélicienne',
        description: 'L\'être en acte et en puissance. La substance comme être par soi. Distinction entre l\'être accidentel (attributs) et l\'être substantiel (ce qui existe par soi).'
      },
      {
        title: 'Approche heideggerienne',
        description: 'La question du sens de l\'être. Différence ontologique entre l\'être et l\'étant. L\'Être n\'est pas une chose, mais " ce qui détermine l\'étant en tant qu\'étant ".'
      },
      {
        title: 'Approche existentialiste',
        description: 'L\'être comme existence d\'abord. " L\'existence précède l\'essence ". L\'être humain se définit par son existence, non par une essence préalable.'
      }
    ],
    keyFigures: [
      { name: 'Parménide', period: '515-450 av. J.-C.', contribution: 'L\'Être est un, immobile, éternel' },
      { name: 'Platon', period: '427-347 av. J.-C.', contribution: 'L\'Être comme idée, forme supra-sensible' },
      { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'L\'être en acte et en puissance, substance et accidents' },
      { name: 'Heidegger', period: '1889-1976', contribution: 'Question du sens de l\'être, différence ontologique' }
    ],
    examples: [
      'L\'argument ontologique de saint Anselme',
      'Le cogito de Descartes comme preuve de l\'être',
      'L\'existence de Dieu comme être nécessaire'
    ],
    relatedConcepts: [
      { name: 'Essence', relation: 'S\'oppose à', description: 'Distinction essence/existence' },
      { name: 'Devenir', relation: 'S\'oppose à', description: 'Être vs devenir chez Platon' },
      { name: 'Néant', relation: 'Est lié à', description: 'Le néant comme négation de l\'être' }
    ],
    sources: [
      {
        title: 'Poème',
        author: 'Parménide',
        year: -475,
        type: 'POEM',
        reference: 'Fragments 1-8',
        quotes: [
          '" Car c\'est la même chose de penser et d\'être "',
          '" L\'être est, le non-être n\'est pas "',
          '" Une seule route reste : " C\'est "'
        ]
      },
      {
        title: 'Métaphysique',
        author: 'Aristote',
        year: -350,
        type: 'BOOK',
        reference: 'Livre Gamma',
        quotes: [
          '" L\'être se dit de plusieurs façons, mais parpriorité selon la substance "',
          '" L\'être désigne ce qui est, en tant que chose, ou comme substance "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que l\'être selon Parménide ?',
        back: 'Pour Parménide, l\'être est un, immobile, éternel et continu. Le changement et le devenir sont illusoires. " L\'être est, le non-être n\'est pas ".',
        difficulty: 3
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence entre essence et existence ?',
        back: 'Essence = ce que la chose est (sa nature). Existence = le fait d\'être (actualité). Chez Descartes: l\'essence précède l\'existence (triangle rectangle). Chez Sartre: l\'existence précède l\'essence.',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation résume le mieux l\'ontologie fondamentale ?',
        back: '" Car c\'est la même chose de penser et d\'être " - Parménide, Poème (475 av. J.-C.)',
        difficulty: 2
      }
    ],
    tags: ['être', 'ontologie', 'parmenide', 'substance', 'existence'],
    status: 'COMPLETE'
  },
  {
    id: 'substance',
    name: 'Substance',
    greek: 'ΟΥΣΙΑ',
    greekTranslit: 'Ousia',
    slug: 'substance',
    category: 'metaphysique',
    difficulty: 4,
    importance: 4,
    definition: 'Ce qui est en soi, qui existe par soi et ne dépend d\'aucune autre chose pour exister. La substance est le substrat, le support permanent des accidents et des changements.',
    shortDefinition: 'Ce qui existe par soi et en soi, substrat des accidents',
    etymology: {
      greek: 'οὐσία (ousia) : être, essence, substance',
      root: 'εἶμί (eimi) : être',
      notes: 'Terme technique créé par Aristote pour désigner la réalité fondamentale'
    },
    variations: [
      {
        title: 'Substance aristotélicienne',
        description: 'Le sujet premier qui subsiste par soi-même. Ce qui porte les accidents (propriétés) sans pouvoir jamais ne pas être. L\'homme comme substance composée d\'âme et de corps.'
      },
      {
        title: 'Substance cartésienne',
        description: 'La res cogitans (chose pensante) et la res extensa (chose étendue). Deux substances distinctes : l\'âme pensante et le corps étendu. Dualisme substance corps/âme.'
      },
      {
        title: 'Substance spinoziste',
        description: '" Deus sive Natura " - Dieu ou la Nature. Une substance unique infinie comprenant tout. Tout ce qui est est un mode de cette substance unique. Monisme radical.'
      },
      {
        title: 'Substance leibnizienne',
        description: 'Les monades comme substances simples. Chaque monade est un " univers en diminutif ", fenêtre sur l\'univers. Harmonie préétablie entre les monades sans causalité directe.'
      },
      {
        title: 'Critique lockéenne',
        description: 'On ne connaît que les qualités, pas la substance même. La substance est un " je-ne-sais-quoi " supposé pour supporter les qualités que nous percevons.'
      }
    ],
    keyFigures: [
      { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Définition classique de la substance comme sujet des accidents' },
      { name: 'Spinoza', period: '1632-1677', contribution: 'Substance unique infinie (Deus sive Natura)' },
      { name: 'Leibniz', period: '1646-1716', contribution: 'Substance simple, monades comme substances métaphysiques' }
    ],
    examples: [
      'L\'âme comme substance pensante',
      'Dieu comme substance infinie',
      'Les atomes comme substances matérielles (Démocrite)'
    ],
    relatedConcepts: [
      { name: 'Accident', relation: 'S\'oppose à', description: 'La substance est le substrat, les accidents en dépendent' },
      { name: 'Forme', relation: 'Est lié à', description: 'Hylémorphisme : matière + forme = substance' },
      { name: 'Attribut', relation: 'Est proche de', description: 'Distinction substance/attributs' }
    ],
    sources: [
      {
        title: 'Métaphysique',
        author: 'Aristote',
        year: -350,
        type: 'BOOK',
        reference: 'Livre Lambda (Z)',
        quotes: [
          '" La substance est ce qui est en soi et par soi, et qui ne se prédique d\'un sujet "',
          '" La substance peut être conçue comme un sujet et comme un substrat "'
        ]
      },
      {
        title: 'Éthique',
        author: 'Baruch Spinoza',
        year: 1677,
        type: 'BOOK',
        reference: 'Partie I, Définition 3',
        quotes: [
          '" Par substance, j\'entends ce qui est en soi, et qui est conçu par soi et par soi "',
          '" Dieu est une substance infinie, consistante en une infinité d\'attributs "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que la substance selon Aristote ?',
        back: 'La substance est ce qui existe en soi et par soi, qui ne dépend d\'aucun sujet pour exister. Elle est le substrat permanent des accidents (qualités changeantes).',
        difficulty: 2
      },
      {
        type: 'CONNECTION',
        front: 'Comment Spinoza modifie-t-il la notion aristotélicienne de substance ?',
        back: 'Pour Spinoza, il n\'y a qu\'une seule substance infinie (Dieu/Nature). Les choses finies ne sont pas des substances mais des " modes " de cette substance unique.',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation définit le mieux la substance ?',
        back: '" La substance est ce qui est en soi et par soi, et qui ne se prédique d\'un sujet " - Aristote, Métaphysique, Livre Z',
        difficulty: 3
      }
    ],
    tags: ['substance', 'ousia', 'aristote', 'spinoza', 'substrat', 'accident'],
    status: 'COMPLETE'
  },
  {
    id: 'bien',
    name: 'Bien',
    greek: 'ΑΓΑΘΟΝ',
    greekTranslit: 'Agathon',
    slug: 'bien',
    category: 'metaphysique',
    difficulty: 4,
    importance: 5,
    definition: 'Le Bien est le principe suprême, l\'idée la plus élevée chez Platon. Il désigne la perfection morale, la finalité ultime de toute action, et parfois Dieu lui-même comme summum bonum.',
    shortDefinition: 'Principe suprême, perfection morale, finalité ultime',
    etymology: {
      greek: 'τὸ ἀγαθόν (to agathon) : le bon, le bien',
      notes: 'Désigne à la fois la bonté morale et la perfection ontologique'
    },
    variations: [
      {
        title: 'Bien platonicien',
        description: 'L\'Idée du Bien comme principe suprême, analogue au soleil. Le Bien est " au-delà de l\'essence ", source de toute vérité et de toute existence. Illumine l\'intelligible comme le soleil illumine le sensible.'
      },
      {
        title: 'Bien aristotélicien',
        description: 'Le bien comme fin (telos) de l\'action. Chaque chose a sa fin propre, le bien humain étant l\'activité de l\'âme conforme à la vertu. Le bonheur (eudaimonia) comme bien suprême.'
      },
      {
        title: 'Bien augustinien',
        description: 'Dieu comme Bien souverain. " Tu nous as faits pour toi, et notre cœur est sans repos tant qu\'il ne repose en toi ". Le bien créature est participation au Bien divin.'
      },
      {
        title: 'Bien thomiste',
        description: 'Le Bien comme transcendental : convertible avec l\'Être. Tout être est bon en tant qu\'il est. Le bien moral est la conformité de l\'action à la loi éternelle.'
      },
      {
        title: 'Bien kantien',
        description: 'Le bien moral comme duty for duty\'s sake. L\'impératif catégorique : " Agis uniquement d\'après la maxime qui fait que tu puisses vouloir en même temps qu\'elle devienne une loi universelle ".'
      }
    ],
    keyFigures: [
      { name: 'Platon', period: '427-347 av. J.-C.', contribution: 'L\'Idée du Bien comme principe suprême, soleil du monde intelligible' },
      { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Le bien comme fin suprême de l\'action humaine' },
      { name: 'Augustin', period: '354-430', contribution: 'Dieu comme Bien souverain, source de tout bien' },
      { name: 'Thomas d\'Aquin', period: '1225-1274', contribution: 'Le Bien comme transcendental, convertible avec l\'être' }
    ],
    examples: [
      'L\'allégorie de la caverne et le soleil chez Platon',
      'Le bonheur comme fin suprême de l\'éthique',
      'Dieu comme Bien infini dans la théologie chrétienne'
    ],
    relatedConcepts: [
      { name: 'Vérité', relation: 'Est lié à', description: 'La vérité est une forme du Bien' },
      { name: 'Beauté', relation: 'Est proche de', description: 'Le Bien, le Beau et le Vrai sont liés' },
      { name: 'Bonheur', relation: 'Suppose', description: 'Le bonheur est la possession du bien suprême' }
    ],
    sources: [
      {
        title: 'La République',
        author: 'Platon',
        year: -380,
        type: 'BOOK',
        reference: 'Livre VI, 509d-511e',
        quotes: [
          '" Le Bien est donc ce qui donne la vérité aux choses connues et la puissance à qui connaît "',
          '" Le Bien est le soleil du monde intelligible "'
        ]
      },
      {
        title: 'Éthique à Nicomaque',
        author: 'Aristote',
        year: -340,
        type: 'BOOK',
        reference: 'Livre I',
        quotes: [
          '" Le bien est la fin de toute chose "',
          '" Le bonheur est le bien suprême de l\'homme "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que l\'Idée du Bien chez Platon ?',
        back: 'L\'Idée du Bien est le principe suprême, le soleil du monde intelligible qui illumine toutes les autres idées et donne leur vérité aux choses connues.',
        difficulty: 3
      },
      {
        type: 'CONNECTION',
        front: 'Quel lien entre Bien et Vérité chez Platon ?',
        back: 'Le Bien est la source de la vérité : il illumine les idées comme le soleil illumine les choses visibles. La vérité est une participation au Bien.',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation platonicienne sur le Bien ?',
        back: '" Le Bien est donc ce qui donne la vérité aux choses connues et la puissance à qui connaît " - Platon, La République',
        difficulty: 3
      }
    ],
    tags: ['bien', 'agathon', 'platon', 'finalité', 'perfection', 'bonheur'],
    status: 'COMPLETE'
  },
  {
    id: 'sagesse',
    name: 'Sagesse',
    greek: 'ΣΟΦΙΑ',
    greekTranslit: 'Sophia',
    slug: 'sagesse',
    category: 'metaphysique',
    difficulty: 4,
    importance: 4,
    definition: 'Connaissance profonde des réalités fondamentales, capacité de juger selon la vérité et de bien agir. La sagesse est la couronne des vertus intellectuelles, alliant connaissance et vie droite.',
    shortDefinition: 'Connaissance profonde du réel et capacité de bien agir',
    etymology: {
      greek: 'σοφία (sophia) : sagesse, savoir',
      notes: 'Désigne la maîtrise, le savoir-faire, puis la sagesse philosophique'
    },
    variations: [
      {
        title: 'Sagesse socratique',
        description: '" Je sais que je ne sais rien ". La vraie sagesse est la conscience de sa propre ignorance. Le sage n\'est pas celui qui sait tout, mais qui sait qu\'il ne sait pas.'
      },
      {
        title: 'Sagesse platonicienne',
        description: 'La sagesse comme connaissance du Bien, contemplation des Idées. Le philosophe-amant de la sagesse (philosophos) s\'élève du sensible à l\'intelligible, jusqu\'à l\'Idée du Bien.'
      },
      {
        title: 'Sagesse aristotélicienne',
        description: 'La sophia comme science des premiers principes, plus haute vertu intellectuelle. Distinction entre sophia (sagesse théorétique) et phronesis (prudence/sagesse pratique).'
      },
      {
        title: 'Sagesse stoïcienne',
        description: 'Vivre selon la raison, conformément à la nature. Ataraxie (absence de trouble) et apathéia (absence de passion pathologique). Le sage est libre et heureux quelles que soient les circonstances.'
      },
      {
        title: 'Sagesse chrétienne',
        description: 'Distinction pascalienne entre sagesse humaine (raison, philosophie) et sagesse chrétienne (foi, révélation). " La sagesse en ce monde est une folie devant Dieu ".'
      }
    ],
    keyFigures: [
      { name: 'Socrate', period: '470-399 av. J.-C.', contribution: 'La sagesse comme reconnaissance de son ignorance' },
      { name: 'Platon', period: '427-347 av. J.-C.', contribution: 'La sagesse comme connaissance du Bien' },
      { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'La sagesse comme science des premiers principes' },
      { name: 'Pascal', period: '1623-1662', contribution: 'Distinction entre sagesse humaine et sagesse chrétienne' }
    ],
    examples: [
      'Le " Je sais que je ne sais rien " de Socrate',
      'La sagesse des anciens philosophes stoïciens',
      'La sagesse biblique comme " crainte de Dieu "'
    ],
    relatedConcepts: [
      { name: 'Vérité', relation: 'Suppose', description: 'La sagesse cherche la vérité' },
      { name: 'Bien', relation: 'Est lié à', description: 'La sagesse oriente vers le bien' },
      { name: 'Science', relation: 'Se distingue de', description: 'La sagesse dépasse la science particulière' }
    ],
    sources: [
      {
        title: 'Apologie de Socrate',
        author: 'Platon',
        year: -399,
        type: 'BOOK',
        reference: '21d-23c',
        quotes: [
          '" Je sais que je ne sais rien "',
          '" La sagesse véritable est de savoir que l\'on ne sait pas "'
        ]
      },
      {
        title: 'Métaphysique',
        author: 'Aristote',
        year: -350,
        type: 'BOOK',
        reference: 'Livre Alpha',
        quotes: [
          '" La sagesse est la science des premiers principes et des premières causes "',
          '" C\'est à cause de l\'étonnement que les hommes commencèrent à philosopher "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que la sagesse philosophique ?',
        back: 'La sagesse est la connaissance profonde des premiers principes et des causes fondamentales, qui permet de juger droitement et de bien agir.',
        difficulty: 2
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence entre sagesse et science ?',
        back: 'La science connaît un domaine particulier. La sagesse connaît les principes premiers et l\'ordre du tout. La science s\'apprend, la sagesse se cultive.',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation de Socrate sur la sagesse ?',
        back: '" Je sais que je ne sais rien " - Socrate, Apologie de Socrate (Platon)',
        difficulty: 2
      }
    ],
    tags: ['sagesse', 'sophia', 'socrate', 'connaissance', 'principes'],
    status: 'COMPLETE'
  },
  {
    id: 'logos',
    name: 'Logos',
    greek: 'ΛΟΓΟΣ',
    greekTranslit: 'Logos',
    slug: 'logos',
    category: 'metaphysique',
    difficulty: 5,
    importance: 5,
    definition: 'Terme grec polysémique désignant la parole, la raison, le principe organisateur du monde. Chez les stoïciens, c\'est la raison divine qui ordonne l\'univers. Dans le christianisme, le Verbe divin.',
    shortDefinition: 'Parole, raison, principe organisateur du monde',
    etymology: {
      greek: 'λόγος (logos) : parole, discours, raison, raison',
      root: 'λέγω (legô) : parler, dire',
      notes: 'Un des concepts les plus riches et plus complexes de la philosophie grecque'
    },
    variations: [
      {
        title: 'Logos héraclitéen',
        description: 'La loi universelle qui gouverne le cosmos. " Tout est un, et le Un est le Logos ". Ce principe intelligent ordonne le devenir, rendant raison de la multiplicité dans l\'unité.'
      },
      {
        title: 'Logos stoïcien',
        description: 'La raison divine immanente, spermatikos logos (semence rationnelle). Le Logos pénètre toute réalité, ordonnant l\'univers selon la providence divine. Tout participe du Logos.'
      },
      {
        title: 'Logos johannique',
        description: '" Au commencement était le Logos ". Le Verbe de Dieu, seconde personne de la Trinité. Médiation entre Dieu transcendant et création. Le Logos se fait chair en Jésus-Christ.'
      },
      {
        title: 'Logos philonien',
        description: 'Médiation entre le Dieu transcendant de la philosophie grecque et le créationnisme biblique. Le Logos est l\'intermédiaire par lequel Dieu crée et se révèle.'
      },
      {
        title: 'Logos hégélien',
        description: 'La Raison absolue se réalisant dans l\'histoire. " Ce qui est rationnel est réel, ce qui est réel est rationnel ". Le Logos comme processus dialectique de l\'Esprit.'
      }
    ],
    keyFigures: [
      { name: 'Héraclite', period: '544-480 av. J.-C.', contribution: 'Le Logos comme loi universelle, raison du monde' },
      { name: 'Philon d\'Alexandrie', period: '-20-50', contribution: 'Médiation entre le Dieu transcendant et le monde' },
      { name: 'Jean', period: '1er siècle', contribution: 'Le Logos comme Verbe de Dieu incarné' },
      { name: 'Hegel', period: '1770-1831', contribution: 'Le Logos comme raison absolue se réalisant dans l\'histoire' }
    ],
    examples: [
      'Le Logos héraclitéen comme loi du cosmos',
      'Le Logos johannique : " Au commencement était le Verbe "',
      'Le Logos stoïcien comme âme du monde'
    ],
    relatedConcepts: [
      { name: 'Vérité', relation: 'Est proche de', description: 'Le logos comme vérité du discours' },
      { name: 'Raison', relation: 'Est synonyme de', description: 'Le logos comme faculté de raisonner' },
      { name: 'Être', relation: 'Est lié à', description: 'Le Logos comme médiation entre l\'être et le devenir' }
    ],
    sources: [
      {
        title: 'Fragments',
        author: 'Héraclite',
        year: -500,
        type: 'TEXT',
        reference: 'Fragments 1, 2, 50',
        quotes: [
          '" Bien que ce Logos soit toujours, les hommes sont incapables de le comprendre "',
          '" Il est sage d\'écouter le Logos et de convenir que tout est un "'
        ]
      },
      {
        title: 'Évangile selon Jean',
        author: 'Jean',
        year: 100,
        type: 'TEXT',
        reference: 'Prologue, 1-18',
        quotes: [
          '" Au commencement était le Verbe (Logos), et le Verbe était auprès de Dieu, et le Verbe était Dieu "',
          '" Tout a été fait par lui "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que le Logos chez Héraclite ?',
        back: 'Le Logos est la loi universelle qui ordonne le cosmos, la raison divine qui gouverne tout. C\'est le principe d\'unité du multiple.',
        difficulty: 3
      },
      {
        type: 'CONNECTION',
        front: 'Quelles sont les trois significations du Logos ?',
        back: '1) Parole/discours (sens grammatical) 2) Raison/faculté de penser (sens philosophique) 3) Principe organisateur (sens cosmologique)',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation de Jean sur le Logos ?',
        back: '" Au commencement était le Verbe, et le Verbe était auprès de Dieu, et le Verbe était Dieu " - Jean 1:1',
        difficulty: 2
      }
    ],
    tags: ['logos', 'raison', 'parole', 'héraclite', 'stoïcisme', 'christianisme'],
    status: 'COMPLETE'
  },
  {
    id: 'devenir',
    name: 'Devenir',
    greek: 'ΓΕΝΕΣΙΣ',
    greekTranslit: 'Genesis',
    slug: 'devenir',
    category: 'metaphysique',
    difficulty: 4,
    importance: 4,
    definition: 'Processus de changement, de passage d\'un état à un autre. Le devenir s\'oppose à l\'être comme la mobilité à la stabilité, le temps à l\'éternité, le processus à la substance.',
    shortDefinition: 'Processus de changement et de passage d\'un état à un autre',
    etymology: {
      greek: 'γένεσις (genesis) : génération, devenir',
      notes: 'Désigne le mouvement, le changement, le processus de génération'
    },
    variations: [
      {
        title: 'Devenir héraclitéen',
        description: '" Panta rhei " - tout s\'écoule. Le devenir est la réalité fondamentale, l\'être est illusion. " On ne se baigne jamais deux fois dans le même fleuve ". Contradiction des opposés.'
      },
      {
        title: 'Devenir platonicien',
        description: 'Le devenir comme participation imparfaite à l\'Être. Le monde sensible est en devenir, perpétuel changement entre être et non-être. Le devenir est " ce qui est toujours en train de devenir et jamais n\'est ".'
      },
      {
        title: 'Devenir hégélien',
        description: 'Le devenir comme moment dialectique de l\'Idée. Synthèse de l\'Être et du Néant. " Le pur être et le pur néant sont la même chose ". Le devenir est mouvement vers la vérité.'
      },
      {
        title: 'Devenir bergsonien',
        description: 'La durée comme devenir créateur, non mesurable. Le temps vécu comme innovation continue. " La durée est le progrès continu du passé qui ronge l\'avenir ". Élan vital.'
      },
      {
        title: 'Devenir nietzschéen',
        description: 'Le devenir comme volonté de puissance, affirmation de la vie. Éternel retour : devenir cyclique de toute chose. L\'homme comme pont entre l\'animal et le surhomme.'
      }
    ],
    keyFigures: [
      { name: 'Héraclite', period: '544-480 av. J.-C.', contribution: '" Tout s\'écoule " (panta rhei), le devenir comme réalité fondamentale' },
      { name: 'Platon', period: '427-347 av. J.-C.', contribution: 'Le devenir comme participation à l\'être, monde sensible' },
      { name: 'Hegel', period: '1770-1831', contribution: 'La dialectique du devenir comme moment de l\'Idée' },
      { name: 'Bergson', period: '1859-1941', contribution: 'La durée comme devenir créateur' }
    ],
    examples: [
      'Le fleuve d\'Héraclite : " On ne se baigne jamais deux fois dans le même fleuve "',
      'Le devenir-être chez Platon',
      'Devenir, être, dépassement chez Hegel'
    ],
    relatedConcepts: [
      { name: 'Être', relation: 'S\'oppose à', description: 'Être vs devenir chez Platon' },
      { name: 'Temps', relation: 'Est lié à', description: 'Le devenir est la réalisation du temps' },
      { name: 'Changement', relation: 'Est synonyme de', description: 'Le devenir est changement continu' }
    ],
    sources: [
      {
        title: 'Fragments',
        author: 'Héraclite',
        year: -500,
        type: 'TEXT',
        reference: 'Fragments 12, 30',
        quotes: [
          '" On ne descend jamais deux fois dans le même fleuve "',
          '" Tout s\'écoule et rien ne reste "'
        ]
      },
      {
        title: 'Timée',
        author: 'Platon',
        year: -360,
        type: 'BOOK',
        reference: '27d-28a',
        quotes: [
          '" Il est difficile de voir le Créateur et Père de l\'univers, mais impossible de le dire à tous "',
          '" Le monde devenu est l\'image du monde éternel "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que le devenir ?',
        back: 'Le devenir est le processus de changement continu, le passage d\'un état à un autre. Il s\'oppose à l\'être statique et éternel.',
        difficulty: 2
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence être/devenir chez Héraclite et Platon ?',
        back: 'Héraclite : le devenir est la seule réalité (" tout s\'écoule "). Platon : le devenir est imparfait, participation à l\'être immuable.',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation d\'Héraclite sur le devenir ?',
        back: '" On ne descend jamais deux fois dans le même fleuve " - Héraclite, Fragments',
        difficulty: 2
      }
    ],
    tags: ['devenir', 'changement', 'temps', 'héraclite', 'platon', 'flux'],
    status: 'COMPLETE'
  },
  {
    id: 'neant',
    name: 'Néant',
    greek: 'ΜΗ ΔΝ',
    greekTranslit: 'Mê On',
    slug: 'neant',
    category: 'metaphysique',
    difficulty: 5,
    importance: 4,
    definition: 'Ce qui n\'est pas, l\'absence totale d\'être. Le néant pose un problème métaphysique majeur : peut-on penser le néant sans le faire être ? Sartre en fait le fond de la liberté humaine.',
    shortDefinition: 'Absence d\'être, non-existence, rien',
    etymology: {
      greek: 'μὴ ὄν (mê on) : le non-être',
      latin: 'nihil',
      notes: 'Paradoxe : penser le néant, c\'est lui donner une forme d\'existence'
    },
    variations: [
      {
        title: 'Néant parménidien',
        description: '" L\'être est, le non-être n\'est pas ". Impossible de penser le néant, car penser c\'est penser quelque chose. La négation du néant fonde la rationalité occidentale.'
      },
      {
        title: 'Néant heideggerien',
        description: 'Le néant comme " négation de l\'être ". L\'angoisse nous révèle le néant - l\'être tout entier sombre dans l\'indifférence. Le néant n\'est pas un étant, mais l\'horizon de l\'être.'
      },
      {
        title: 'Néant sartrien',
        description: '" L\'être et le néant ". Le néant comme fond de la liberté humaine. L\'homme se " néantise " - peut toujours dire non à ce qu\'il est. La liberté est cette faille d\'être.'
      },
      {
        title: 'Néant hégélien',
        description: 'Premier moment de la dialectique. Le pur être et le pur néant sont identiques - l\'un comme l\'autre sont indéterminés. Le devenir est leur unité.'
      },
      {
        title: 'Néant existentialiste',
        description: 'Le néant comme condition de l\'existence authentique. Confrontation au rien qui révèle l\'absurdité de l\'existence et la responsabilité de créer du sens.'
      }
    ],
    keyFigures: [
      { name: 'Parménide', period: '515-450 av. J.-C.', contribution: '" L\'être est, le non-être n\'est pas " - impossibilité du néant' },
      { name: 'Heidegger', period: '1889-1976', contribution: '" Qu\'est-ce que la métaphysique ? " - le néant comme négation de l\'être' },
      { name: 'Sartre', period: '1905-1980', contribution: 'L\'être et le néant - le néant comme fond de la liberté' },
      { name: 'Hegel', period: '1770-1831', contribution: 'Le néant comme premier moment de la dialectique' }
    ],
    examples: [
      'L\'argument ontologique : le néant absolu ne peut être pensé',
      'La liberté sartrienne comme néantisation',
      'Le " trou noir " comme néant physique'
    ],
    relatedConcepts: [
      { name: 'Être', relation: 'Est lié à', description: 'Le néant comme négation de l\'être' },
      { name: 'Liberté', relation: 'Suppose', description: 'La liberté sartrienne se fonde sur le néant' },
      { name: 'Mort', relation: 'Est proche de', description: 'La mort comme expérience du néant' }
    ],
    sources: [
      {
        title: 'L\'Être et le Néant',
        author: 'Jean-Paul Sartre',
        year: 1943,
        type: 'BOOK',
        reference: 'Introduction',
        quotes: [
          '" Le néant est l\'horizon de la réalité humaine "',
          '" La liberté est le néant qui sépare l\'homme de lui-même "'
        ]
      },
      {
        title: 'Qu\'est-ce que la métaphysique ?',
        author: 'Martin Heidegger',
        year: 1929,
        type: 'TEXT',
        reference: 'Conférence',
        quotes: [
          '" Pourquoi y a-t-il quelque chose plutôt que rien ? "',
          '" Le néant n\'est pas un objet, mais l\'autre par rapport à l\'étant "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que le néant ?',
        back: 'Le néant est l\'absence totale d\'être, ce qui n\'est pas. Il pose un problème métaphysique : peut-on parler de ce qui n\'est pas sans lui donner existence ?',
        difficulty: 3
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence être/néant chez Sartre ?',
        back: 'L\'être est l\'en-soi (chose, pleine, identique). Le néant est le pour-soi (conscience, vide, liberté). L\'homme est " être qui fait surgir le néant dans le monde ".',
        difficulty: 5
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation de Sartre sur le néant ?',
        back: '" Le néant est l\'horizon de la réalité humaine " - Sartre, L\'Être et le Néant (1943)',
        difficulty: 3
      }
    ],
    tags: ['néant', 'rien', 'sartre', 'heidegger', 'liberté', 'conscience'],
    status: 'COMPLETE'
  },
  {
    id: 'existence',
    name: 'Existence',
    greek: 'ΕΞΙΣ',
    greekTranslit: 'Exis',
    slug: 'existence',
    category: 'metaphysique',
    difficulty: 4,
    importance: 5,
    definition: 'Le fait d\'être, l\'actualité de l\'être. L\'existence désigne la réalité concrète, le fait de se trouver là, par opposition à l\'essence ou à la possibilité.',
    shortDefinition: 'Le fait d\'être, actualité de l\'être',
    etymology: {
      latin: 'existentia : action de se tenir dehors, de se manifester',
      root: 'existo : se tenir debout, paraître',
      notes: 'Désigne le fait de se manifester, d\'être présent dans le monde'
    },
    variations: [
      {
        title: 'Existence kierkegaardienne',
        description: 'L\'existence comme subjectivité, engagement personnel. " La vérité est la subjectivité ". L\'individu devant l\'existence doit choisir, s\'engager, assumer. Le saut dans la foi.'
      },
      {
        title: 'Existence sartrienne',
        description: '" L\'existence précède l\'essence ". L\'homme existe d\'abord, se rencontre, surgit dans le monde, et seulement ensuite se définit. L\'homme est " projet de soi ", liberté radicale.'
      },
      {
        title: 'Existence heideggerienne',
        description: 'Dasein - être-là, être-jeté. L\'existence comme " être-au-monde ", structure d\'être qui comprend l\'être. " L\'essence du Dasein réside dans son existence ".'
      },
      {
        title: 'Existence marcelienne',
        description: 'Distinction entre problème (résolvable par technique) et mystère (impliquant le sujet). " Je suis " vs " J\'ai ". L\'existence comme participation à l\'être, communion.'
      },
      {
        title: 'Existentialisme chrétien',
        description: 'L\'existence comme relation à Dieu. Créature devant son Créateur, appelée à la liberté et à l\'amour. L\'existence trouve son sens dans la réponse à l\'appel divin.'
      }
    ],
    keyFigures: [
      { name: 'Kierkegaard', period: '1813-1855', contribution: 'L\'existence comme subjectivité, engagement personnel' },
      { name: 'Marcel', period: '1889-1973', contribution: 'Être et avoir, distinction entre problème et mystère' },
      { name: 'Sartre', period: '1905-1980', contribution: '" L\'existence précède l\'essence " - l\'homme existe d\'abord' },
      { name: 'Heidegger', period: '1889-1976', contribution: 'Dasein, être-là, analytique existentiale' }
    ],
    examples: [
      'L\'existence comme choix et engagement chez Kierkegaard',
      '" L\'existence précède l\'essence " chez Sartre',
      'Le Dasein chez Heidegger : être-jeté dans le monde'
    ],
    relatedConcepts: [
      { name: 'Essence', relation: 'S\'oppose à', description: 'Essence vs Existence : problème de leur priorité' },
      { name: 'Être', relation: 'Est lié à', description: 'L\'existence est l\'actualisation de l\'être' },
      { name: 'Liberté', relation: 'Suppose', description: 'L\'existence est liberté de se faire' }
    ],
    sources: [
      {
        title: 'L\'Existentialisme est un humanisme',
        author: 'Jean-Paul Sartre',
        year: 1946,
        type: 'BOOK',
        reference: 'pp. 25-30',
        quotes: [
          '" L\'existence précède l\'essence "',
          '" L\'homme existe, se rencontre, surgit dans le monde, et seulement ensuite se définit "'
        ]
      },
      {
        title: 'Crise et Mort',
        author: 'Søren Kierkegaard',
        year: 1844,
        type: 'BOOK',
        reference: 'Conclusion',
        quotes: [
          '" La subjectivité est la vérité "',
          '" L\'existence est l\'actualité de la liberté "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que l\'existence ?',
        back: 'L\'existence est le fait d\'être, le fait d\'être présent dans le monde. Elle désigne la réalité concrète par opposition à la simple essence ou possibilité.',
        difficulty: 2
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence essence/existence ?',
        back: 'Essence = ce que la chose est (nature, définition). Existence = le fait d\'être (actualité). Débat fondamental : est-ce que l\'essence précède l\'existence ou inversement ?',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation de Sartre sur l\'existence ?',
        back: '" L\'existence précède l\'essence " - Sartre, L\'Existentialisme est un humanisme (1946)',
        difficulty: 2
      }
    ],
    tags: ['existence', 'essence', 'sartre', 'kierkegaard', 'liberté', 'actualité'],
    status: 'COMPLETE'
  },
  {
    id: 'quiddite',
    name: 'Quiddité',
    greek: 'ΤΙ ΕΣΤΙ',
    greekTranslit: 'Ti Esti',
    slug: 'quiddite',
    category: 'metaphysique',
    difficulty: 4,
    importance: 3,
    definition: 'Le " ce que c\'est " d\'une chose, sa nature propre, ce qui la définit. La quiddité correspond à l\'essence exprimée dans la définition : " l\'homme est un animal rationnel ".',
    shortDefinition: 'Ce que c\'est, nature propre d\'une chose',
    etymology: {
      latin: 'quidditas : qualité de " ce que c\'est "',
      greek: 'τὸ τί ἐστι (to ti esti) : le ce que c\'est',
      notes: 'Terme scolastique pour traduire le τί ἐστι d\'Aristote'
    },
    variations: [
      {
        title: 'Quiddité aristotélicienne',
        description: 'Le " ti esti " - ce que c\'est. Définition par le genre et la différence spécifique. La quiddité est ce qui fait qu\'une chose est ce qu\'elle est, exprimée dans l\'essence.'
      },
      {
        title: 'Quiddité thomiste',
        description: 'L\'essence comme quiddité, nature commune à tous les individus d\'une espèce. Distinction entre quiddité (essence) et existence (acte d\'être). La quiddité définit, l\'existence actualise.'
      },
      {
        title: 'Quiddité scotiste',
        description: 'Distinction entre quiddité (nature commune) et haeccéité (ceité, individualité). La haeccéité est ce qui fait que cet individu est CET individu-là, indivdualité ultime.'
      },
      {
        title: 'Approche moderne',
        description: 'Critique de la notion de quiddité comme essentialisme métaphysique. Les choses n\'ont pas d\'essence fixe mais se définissent par leurs relations et fonctions.'
      }
    ],
    keyFigures: [
      { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Définition par genre et différence, quiddité de la substance' },
      { name: 'Thomas d\'Aquin', period: '1225-1274', contribution: 'La quiddité comme essence exprimée dans la définition' },
      { name: 'Scot', period: '1266-1308', contribution: 'Distinction entre quiddité et haeccéité (ceité)' }
    ],
    examples: [
      'La quiddité du triangle : figure à trois côtés',
      'La quiddité de l\'homme : animal rationnel',
      'La quiddité du feu : corps chaud et sec'
    ],
    relatedConcepts: [
      { name: 'Essence', relation: 'Est synonyme de', description: '"Quiddité" = ce que c\'est' },
      { name: 'Définition', relation: 'Est lié à', description: 'La quiddité s\'exprime dans la définition' },
      { name: 'Nature', relation: 'Est proche de', description: 'La quiddité est la nature propre de chaque chose' }
    ],
    sources: [
      {
        title: 'Métaphysique',
        author: 'Aristote',
        year: -350,
        type: 'BOOK',
        reference: 'Livre Z, 1030a',
        quotes: [
          '" La quiddité est ce qui est dit de la substance dans sa définition "',
          '" La définition est la parole qui manifeste la quiddité "'
        ]
      },
      {
        title: 'Somme Théologique',
        author: 'Thomas d\'Aquin',
        year: 1274,
        type: 'BOOK',
        reference: 'Partie I, Question 3',
        quotes: [
          '" L\'essence est ce par quoi et ce quoi une chose est ce qu\'elle est "',
          '" La quiddité est l\'essence exprimée par la définition "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que la quiddité ?',
        back: 'La quiddité est le " ce que c\'est " d\'une chose, sa nature propre exprimée dans sa définition. Ex: la quiddité de l\'homme est " animal rationnel ".',
        difficulty: 3
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence entre quiddité et haeccéité ?',
        back: 'Quiddité = ce que la chose est (nature universelle). Haeccéité = ce qui fait que cette chose est celle-ci (singularité). Ex: quiddité de Socrate = homme; haeccéité = Socrate lui-même.',
        difficulty: 5
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation d\'Aristote sur la quiddité ?',
        back: '" La quiddité est ce qui est dit de la substance dans sa définition " - Aristote, Métaphysique Z',
        difficulty: 4
      }
    ],
    tags: ['quiddité', 'essence', 'définition', 'aristote', 'nature', 'thomas'],
    status: 'COMPLETE'
  },
  {
    id: 'nature',
    name: 'Nature',
    greek: 'ΦΥΣΙΣ',
    greekTranslit: 'Physis',
    slug: 'nature',
    category: 'metaphysique',
    difficulty: 3,
    importance: 4,
    definition: 'Ce qui est propre à chaque être, son principe interne de mouvement et de repos. La nature désigne aussi l\'ensemble des choses naturelles, le monde physique dans son organisation autonome.',
    shortDefinition: 'Principe interne de mouvement et d\'organisation',
    etymology: {
      greek: 'φύσις (physis) : nature, croissance',
      root: 'φύω (phuo) : croître, naître',
      notes: 'Désigne à la fois l\'essence d\'une chose et l\'ensemble du monde naturel'
    },
    variations: [
      {
        title: 'Nature aristotélicienne',
        description: 'Principe interne de mouvement et de repos. Chaque être a sa nature qui détermine son mouvement propre. Téléologie immanente : la nature ne fait rien en vain. Finalité sans intention consciente.'
      },
      {
        title: 'Nature cartésienne',
        description: 'Res extensa - chose étendue. La nature comme matière en mouvement, gouvernée par des lois mécaniques. Distinction radicale entre res cogitants (âme) et res extensa (nature/matière).'
      },
      {
        title: 'Nature kantienne',
        description: 'Distinction entre nature (phénomène, déterminisme) et liberté (noumène). La nature est le domaine de la causalité, la liberté celui de la moralité. " Je dus limiter le savoir pour faire place à la foi ".'
      },
      {
        title: 'Nature spinoziste',
        description: '" Deus sive Natura " - Dieu ou la Nature. Substance unique infinie comprenant tout. La nature naturante (Dieu, cause) et la nature naturée (effets, modes). Panthéisme radical.'
      },
      {
        title: 'Nature romantique',
        description: 'La nature comme organisme vivant, manifestation du divin. Opposition à la mécanisation cartésienne. La nature comme source de poésie, de sentiment, de sublime.'
      }
    ],
    keyFigures: [
      { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'La nature comme principe de mouvement, téléologie immanente' },
      { name: 'Descartes', period: '1596-1650', contribution: 'La nature comme res extensa, matière en mouvement' },
      { name: 'Kant', period: '1724-1804', contribution: 'Distinction entre nature et liberté, phénomène et noumène' },
      { name: 'Spinoza', period: '1632-1677', contribution: 'Dieu sive Natura, identité de Dieu et de la nature' }
    ],
    examples: [
      'La nature de la pierre est de tomber',
      'La nature de l\'homme est d\'être rationnel',
      'Les lois de la nature en physique'
    ],
    relatedConcepts: [
      { name: 'Essence', relation: 'Est proche de', description: 'L\'essence est la nature propre de chaque chose' },
      { name: 'Loi', relation: 'Est lié à', description: 'La nature se manifeste par des lois' },
      { name: 'Liberté', relation: 'S\'oppose à', description: 'Nature comme nécessité vs liberté' }
    ],
    sources: [
      {
        title: 'Physique',
        author: 'Aristote',
        year: -330,
        type: 'BOOK',
        reference: 'Livre II, 192b-193b',
        quotes: [
          '" La nature est principe de mouvement et de repos "',
          '" La nature est une fin et un but "'
        ]
      },
      {
        title: 'Éthique',
        author: 'Spinoza',
        year: 1677,
        type: 'BOOK',
        reference: 'Partie IV',
        quotes: [
          '" Dieu sive Natura "',
          '" La liberté n\'est pas une liberté d\'indifférence, mais la connaissance de la nécessité "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que la nature chez Aristote ?',
        back: 'La nature est le principe interne de mouvement et de repos dans chaque être. Elle est aussi la fin ou le téléologie vers laquelle tend chaque chose.',
        difficulty: 2
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence nature/liberté ?',
        back: 'Nature = nécessité, déterminisme, lois fixes. Liberté = contingence, choix, autonomie. Problème : l\'homme est-il un être naturel ou libre ?',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation d\'Aristote sur la nature ?',
        back: '" La nature est principe de mouvement et de repos " - Aristote, Physique II',
        difficulty: 2
      }
    ],
    tags: ['nature', 'physis', 'aristote', 'principe', 'téléologie', 'spinoza'],
    status: 'COMPLETE'
  },
  {
    id: 'essence',
    name: 'Essence',
    greek: 'ΟΥΣΙΑ',
    greekTranslit: 'Ousia',
    slug: 'essence',
    category: 'metaphysique',
    difficulty: 4,
    importance: 4,
    definition: 'Ce qu\'une chose est, sa nature fondamentale, ce qui la définit et la rends ce qu\'elle est. L\'essence correspond à la quiddité, le " ce que c\'est " de la chose.',
    shortDefinition: 'La nature fondamentale d\'une chose, ce qui la définit',
    etymology: {
      greek: 'τὸ τί ἐστι (to ti esti) : le ce que c\'est',
      latin: 'essentia',
      notes: 'Correspond à la quiddité, la nature propre de chaque chose'
    },
    variations: [
      {
        title: 'Essence platonicienne',
        description: 'Les Idées (Eidê) comme essences vraies, éternelles, immuables. Le monde sensible ne participe que imparfaitement aux essences intelligibles. L\'essence précède l\'existence : l\'Idée existe avant les choses qui y participent.'
      },
      {
        title: 'Essence aristotélicienne',
        description: 'L\'essence comme " ce que c\'est ", exprimée dans la définition. Distinction entre essence (quiddité) et existence. L\'essence définit la chose, mais ne garantit pas son existence effective.'
      },
      {
        title: 'Essence thomiste',
        description: 'Distinction réelle entre essence et existence dans les créatures. Seul Dieu a son essence identique à son existence. Les créatures participent à l\'être (esse) par acte d\'être.'
      },
      {
        title: 'Essence existentialiste',
        description: '" L\'existence précède l\'essence " (Sartre). L\'homme existe d\'abord, surgit dans le monde, et seulement ensuite se définit. Pas de nature humaine préalable : l\'homme est ce qu\'il fait de lui-même.'
      },
      {
        title: 'Essence phénoménologique',
        description: 'L\'essence comme structure de l\'expérience, accessible par intuition eidétique. Husserl : " Retour aux choses mêmes ". L\'essence est ce qui rend la chose intelligible.'
      }
    ],
    keyFigures: [
      { name: 'Platon', period: '427-347 av. J.-C.', contribution: 'Les Idées comme essences vraies et éternelles' },
      { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Distinction essence/existence, définition par le genre et la différence' },
      { name: 'Thomas d\'Aquin', period: '1225-1274', contribution: 'Essence et existence dans la création, acte d\'être' },
      { name: 'Sartre', period: '1905-1980', contribution: '" L\'existence précède l\'essence " - l\'homme existe d\'abord, se définit après' }
    ],
    examples: [
      'L\'essence du triangle : figure à trois côtés',
      'L\'essence de l\'homme : animal rationnel',
      'L\'essence de Dieu : bonté infinie'
    ],
    relatedConcepts: [
      { name: 'Existence', relation: 'S\'oppose à', description: 'Essence vs Existence : problème de leur priorité' },
      { name: 'Quiddité', relation: 'Est synonyme de', description: '"Quiddité" = ce que c\'est' },
      { name: 'Nature', relation: 'Est proche de', description: 'L\'essence est la nature propre de chaque chose' }
    ],
    sources: [
      {
        title: 'Somme Théologique',
        author: 'Thomas d\'Aquin',
        year: 1274,
        type: 'BOOK',
        reference: 'Partie I, Question 3',
        quotes: [
          '" L\'essence est ce par quoi une chose est ce qu\'elle est "',
          '" L\'essence se distingue de l\'existence, car on peut connaître l\'essence sans connaître l\'existence "'
        ]
      },
      {
        title: 'L\'Existentialisme est un humanisme',
        author: 'Jean-Paul Sartre',
        year: 1946,
        type: 'BOOK',
        reference: 'pp. 25-30',
        quotes: [
          '" L\'existence précède l\'essence "',
          '" L\'homme existe, se rencontre, surgit dans le monde, et seulement ensuite se définit "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que l\'essence d\'une chose ?',
        back: 'L\'essence est la nature fondamentale d\'une chose, ce qui la définit et la rend ce qu\'elle est. Ex: l\'essence du triangle est " figure à trois côtés égaux ".',
        difficulty: 2
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence entre essence et existence ?',
        back: 'Essence = ce que la chose est (nature). Existence = le fait d\'être (actualité). Débat: Est-ce que l\'essence précède l\'existence (créationnisme) ou l\'existence précède l\'essence (existentialisme) ?',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Quelle citation de Sartre sur l\'essence ?',
        back: '" L\'existence précède l\'essence " - Sartre, L\'Existentialisme est un humanisme (1946)',
        difficulty: 3
      }
    ],
    tags: ['essence', 'existence', 'nature', 'quiddité', 'sartre', 'thomas'],
    status: 'COMPLETE'
  },
  {
    id: 'absurde',
    name: 'Absurde',
    slug: 'absurde',
    category: 'metaphysique',
    difficulty: 4,
    importance: 5,
    definition: 'L\'absurde naît de la confrontation entre le désir humain de sens et l\'indifférence radicale du monde. Ce n\'est ni un objet ni une propriété du monde, mais une relation fondamentale entre l\'homme et l\'univers.',
    shortDefinition: 'Confrontation entre l\'appétit de sens humain et l\'irrationalité du monde',
    etymology: {
      latin: 'absurdus : dérisoire, ridicule, contraire à la raison',
      notes: 'Étymologiquement : ce qui est " sourd " (incompréhensible) ou " dissonant "'
    },
    variations: [
      {
        title: 'Condition humaine',
        description: 'L\'homme veut un sens clair, le monde n\'en donne pas. L\'être humain est un être de recherche de sens, alors que l\'univers est silencieux et indifférent.'
      },
      {
        title: 'Confrontation',
        description: 'Rencontre entre l\'appétit humain de sens et l\'irrationalité du monde. Cette rencontre est brutale, soudaine, et irréversible.'
      },
      {
        title: 'Révélation',
        description: 'Conscience soudaine de l\'absurde (moment de lucidité). C\'est l\'instant où l\'homme comprend que le monde n\'a pas de sens intrinsèque.'
      },
      {
        title: 'Réponse camusienne',
        description: 'Ni suicide, ni foi, mais révolte (acceptation sans espoir). Vivre avec l\'absurde sans le nier, en maintenant la tension.'
      }
    ],
    keyFigures: [
      { name: 'Albert Camus', period: '1913-1960', contribution: 'Théorie de l\'absurde et de la révolte dans Le Mythe de Sisyphe' },
      { name: 'Søren Kierkegaard', period: '1813-1855', contribution: 'Paradoxe de la foi et absurdité de l\'existence chrétienne' },
      { name: 'Franz Kafka', period: '1883-1924', contribution: 'L\'absurde comme structure de l\'existence moderne' }
    ],
    examples: [
      'Sisyphe condamné à rouler son rocher éternellement',
      'L\'attente de Godot qui ne vient jamais',
      'Le procès de Joseph K. sans accusateur ni chef d\'accusation'
    ],
    relatedConcepts: [
      { name: 'Existentialisme', relation: 'Est lié à', description: 'L\'absurde est une condition fondamentale de l\'existence' },
      { name: 'Nihilisme', relation: 'Précède', description: 'L\'absurde mène au nihilisme si on refuse la révolte' },
      { name: 'Sens', relation: 'Questionne', description: 'L\'absurde est l\'absence ou l\'impossibilité du sens' }
    ],
    sources: [
      {
        title: 'Le Mythe de Sisyphe',
        author: 'Albert Camus',
        year: 1942,
        type: 'BOOK',
        reference: 'Essai philosophique',
        quotes: [
          '" Il n\'y a qu\'un problème philosophique vraiment sérieux : le suicide "',
          '" Je vois que cette_route mène à la philosophie. Je reviens à la réalité. Je me demande si un homme peut mourir de la peine qu\'a un autre "',
          '" La lutte elle-même vers les sommets suffit à remplir le cœur d\'un homme. Il faut imaginer Sisyphe heureux "'
        ]
      },
      {
        title: 'L\'Étranger',
        author: 'Albert Camus',
        year: 1942,
        type: 'BOOK',
        reference: 'Roman',
        quotes: [
          '" Je m\'ouvrais pour la première fois à la tendre indifférence du monde "',
          '" Cette parenthèse de ma vie était close "'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que l\'absurde selon Camus ?',
        back: 'L\'absurde est la confrontation entre le désir humain de sens et l\'indifférence du monde - une relation fondamentale qui ne peut être résolue ni par le suicide ni par la foi.',
        difficulty: 3
      },
      {
        type: 'CONNECTION',
        front: 'Quelles sont les trois réponses possibles à l\'absurde ?',
        back: '1) Le suicide physique (échapper à la condition) - REJETÉ par Camus. 2) Le suicide philosophique (le saut dans la foi) - REJETÉ. 3) La révolte (accepter sans céder) - LA RÉPONSE CAMUSIENNE.',
        difficulty: 4
      },
      {
        type: 'QUOTE',
        front: 'Comment Camus conclut-il le Mythe de Sisyphe ?',
        back: '" La lutte elle-même vers les sommets suffit à remplir le cœur d\'un homme. Il faut imaginer Sisyphe heureux " - La révolte rend l\'absurde vivable.',
        difficulty: 3
      }
    ],
    tags: ['absurde', 'camus', 'sisyphe', 'révolte', 'sens', 'condition humaine'],
    status: 'COMPLETE'
  }
];
