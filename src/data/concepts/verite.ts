/**
 * Vérité - Concept Data
 * Adéquation de l'esprit et de la chose, correspondance, cohérence, dévoilement
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'verite',
  name: 'Vérité',
  slug: 'verite',
  category: 'epistemologie',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'La vérité est l\'adéquation de l\'esprit et de la chose, la correspondance entre ce que l\'on dit ou pense et ce qui est. La philosophie a développé plusieurs théories : la théorie de la correspondance (la vérité comme adéquation entre proposition et réalité) ; la théorie de la cohérence (la vérité comme cohérence avec un système de croyances) ; la théorie pragmatiste (la vérité comme ce qui fonctionne, ce qui est vérifié). Pour Heidegger, la vérité est dévoilement (alètheia) : retirer le voile qui cache l\'être. Pour Nietzsche, la vérité est une illusion dont on a oublié qu\'elle en était une. Pour Kant, la vérité est l\'accord de la connaissance avec son objet. La question de la vérité se pose aussi en morale (sincérité, authenticité) et en politique (post-vérité, fake news).',
  shortDefinition: 'Adéquation de l\'esprit et de la chose, correspondance entre pensée et réalité',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'veritas',
    greek: 'alètheia (ἀλήθεια)',
    root: 'verus : vrai / lethe : oubli + a- : non-oubli',
    notes: 'Alètheia signifie « dévoilement » : le vrai est ce qui n\'est pas caché, ce qui est manifesté'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: 'Argument de la correspondance (Aristote)',
        explanation: 'La vérité est adéquation entre ce qui est dit ou pensé et ce qui est. « Dire de ce qui est qu\'il est, et de ce qui n\'est pas qu\'il n\'est pas ». La proposition « la neige est blanche » est vraie si la neige est effectivement blanche.',
        premises: ['Une proposition est vraie ou fausse', 'La vérité ou fausseté dépend de son rapport à la réalité', 'Si la proposition correspond à la réalité, elle est vraie', 'Si elle ne correspond pas, elle est fausse'],
        conclusion: 'Donc la vérité est correspondance entre pensée et réalité'
      },
      {
        argument: 'Argument pragmatiste (James)',
        explanation: 'La vérité n\'est pas une propriété statique mais dynamique. Une idée est vraie si elle « marche », si elle résiste à l\'épreuve de l\'expérience. La vérité se fait, ne se trouve pas.',
        premises: ['Les idées sont des outils pour agir dans le monde', 'Un outil qui marche est « vrai » en ce sens', 'Les idées se valident par leur succès pratique', 'La vérité est processus de validation'],
        conclusion: 'Donc la vérité est ce qui fonctionne, ce qui se vérifie dans l\'expérience'
      },
      {
        argument: 'Argument du dévoilement (Heidegger)',
        explanation: 'La vérité n\'est pas une propriété des propositions mais un événement : alètheia, dévoilement. L\'être se manifeste, apparaît dans sa luminosité. L\'œuvre d\'art est vérité qui se met en œuvre.',
        premises: ['L\'étant peut être caché ou dévoilé', 'La vérité grecque (alètheia) signifie dévoilement', 'Le dévoilement n\'est pas propriété mais événement', 'L\'œuvre d\'art dévoile le monde'],
        conclusion: 'Donc la vérité est dévoilement de l\'être, pas correspondance des propositions'
      }
    ],
    objections: [
      {
        objection: 'Objection cohérentiste',
        content: 'La théorie de la correspondance est incomplète. Comment comparer pensée et réalité ? Nous n\'avons pas accès à la réalité indépendante de nos pensées. La vérité est cohérence interne d\'un système de croyances.',
        response: 'La correspondance reste la conception la plus intuitive. La cohérence risque le relativisme : des systèmes contradictoires peuvent être chacun cohérents.'
      },
      {
        objection: 'Objection nietzschéenne',
        content: 'La vérité est une illusion dont on a oublié qu\'elle en était une. Il n\'y a pas de faits, seulement des interprétations. La « volonté de vérité » est expression du ressentiment.',
        response: 'Si toute vérité est illusion, cette proposition elle-même est illusion, donc elle ne s\'invalidate pas mais se renforce. Mais comment alors critiquer les fake news ?'
      },
      {
        objection: 'Objection pragmatiste',
        content: 'Une croyance peut être utile sans être vraie (ex: religion comme consolation). Le pragmatisme confond utilité et vérité.',
        response: 'James répond que sur le long terme, seule la vérité fonctionne. Les croyances fausses finissent par échouer. La vérité est l\'expédient à long terme.'
      }
    ],
    distinctions: [
      {
        distinction: 'Vérité vs Validité',
        explanation: 'La vérité concerne le contenu (correspondance avec la réalité). La validité concerne la forme (respect des règles logiques). Un raisonnement peut être valide mais partir de prémisses fausses.'
      },
      {
        distinction: 'Vérité vs Sincérité',
        explanation: 'La vérité est adéquation avec la réalité. La sincérité est adéquation entre ce qu\'on dit et ce qu\'on pense. On peut être sincère et dans l\'erreur (dire ce qu\'on pense de manière fausse).'
      },
      {
        distinction: 'Vérité vs Certitude',
        explanation: 'La vérité est objective (correspondance avec la réalité). La certitude est subjective (sentiment de ne pouvoir douter). On peut être certain et dans l\'erreur.'
      },
      {
        distinction: 'Vérité formelle vs Vérité matérielle (Kant)',
        explanation: 'La vérité formelle est l\'accord de la connaissance avec les lois de l\'entendement (logique). La vérité matérielle est l\'accord de la connaissance avec son objet.'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      conceptId: 'realite',
      relation: 'CORRESPONDS_TO',
      explanation: 'La vérité est correspondance avec la réalité (théorie de la correspondance). Mais qu\'est-ce que la réalité ? Est-elle indépendante de nous ?'
    },
    {
      conceptId: 'connaissance',
      relation: 'BUILDS_ON',
      explanation: 'La connaissance est croyance vraie justifiée. La vérité est une condition nécessaire de la connaissance.'
    },
    {
      conceptId: 'opinion',
      relation: 'OPPOSE',
      explanation: 'L\'opinion (doxa) est croyance sans garantie de vérité. Platon oppose opinion (sensible) et vérité (intelligible).'
    },
    {
      conceptId: 'langage',
      relation: 'INFLUENCES',
      explanation: 'La vérité s\'exprime dans des propositions. Le langage est le véhicule de la vérité mais aussi source d\'illusion (sophisme, mensonge).'
    },
    {
      conceptId: 'mensonge',
      relation: 'OPPOSE',
      explanation: 'Le mensonge est dire le faux en le sachant. Il présuppose la vérité comme norme : on ne peut mentir que par rapport à la vérité.'
    },
    {
      conceptId: 'certitude',
      relation: 'DISTINCT_FROM',
      explanation: 'La certitude est subjective (sentiment d\'évidence). La vérité est objective (correspondance). On peut être certain de l\'erreur.'
    },
    {
      conceptId: 'interpretation',
      relation: 'CRITICAL',
      explanation: 'Nietzsche : il n\'y a pas de faits, seulement des interprétations. La vérité est interprétation stabilisée. Critique radicale du concept de vérité.'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Réalisme philosophique',
      role: 'CENTRAL',
      description: 'La vérité est correspondance avec une réalité indépendante. Aristote, Thomas d\'Aquin, philosophie analytique contemporaine.'
    },
    {
      movement: 'Pragmatisme',
      role: 'CENTRAL',
      description: 'La vérité est ce qui fonctionne, ce qui se vérifie. James, Peirce, Dewey. La vérité se fait, ne se trouve pas.'
    },
    {
      movement: 'Cohérentisme',
      role: 'RELATED',
      description: 'La vérité est cohérence interne d\'un système de croyances. Bradley, Neurath. Alternative à la correspondance.'
    },
    {
      movement: 'Phénoménologie',
      role: 'RELATED',
      description: 'Heidegger : la vérité comme alètheia (dévoilement). Pas propriété des propositions mais événement où l\'être advient.'
    },
    {
      movement: 'Nietzschéisme',
      role: 'CRITICAL',
      description: 'Nietzsche : la vérité comme illusion, interprétation stabilisée. Critique radicale de la « volonté de vérité ».'
    },
    {
      movement: 'Constructivisme',
      role: 'RELATED',
      description: 'La vérité est construction sociale ou linguistique. Pas de réalité indépendante, seulement des constructions culturelles.'
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `La question de la vérité commence avec les Grecs. Parménide oppose « voie de la vérité » (être, immobile) et « voie de l'opinion » (devenir, changement). Platon systématise : le monde sensible est opinion (doxa), le monde des Idées est vérité (épistémè). La vérité est contemplation des êtres éternels.

Aristote donne la définition classique : « dire de ce qui est qu'il est, et de ce qui n'est pas qu'il n'est pas ». C'est la théorie de la correspondance : adéquation entre pensée et réalité. Cette définition domine la philosophie médiévale (Thomas d'Aquin : « adæquatio rei et intellectus »).

Descartes (1641) fonde la vérité sur l'évidence : ce qui est perçu clairement et distinctement est vrai. Le critère de la vérité devient subjectif (clarté, distinction) plutôt qu'objectif (correspondance).

Spinoza (1677) définit la vérité comme « index d'elle-même » : la vérité se reconnaît elle-même. Le faux est connaître inadéquatement.

Leibniz (1704) distingue vérités de raison (nécessaires, analytiques) et vérités de fait (contingentes, synthétiques). Ces dernières reposent sur le principe de raison suffisante.

Kant (1781) transforme la question : la vérité est « accord de la connaissance avec son objet ». Mais il distingue vérité formelle (logique) et vérité matérielle (empirique).

Hegel (1807) voit la vérité comme processus historique : le Vrai est le tout (le système). La vérité se fait dans l'histoire, elle n'est pas donnée d'avance.

Nietzsche (1873) critique radicalement : « la vérité est une illusion dont on a oublié qu'elle en était une ». Il n'y a pas de faits, seulement des interprétations. La « volonté de vérité » est expression du ressentiment.

James (1907) développe le pragmatisme : la vérité est ce qui fonctionne, ce qui se vérifie dans l'expérience. « Le vrai est seulement l'expédient dans notre façon de penser ».

Heidegger (1943) retourne à l'étymologie grecque alètheia : la vérité comme dévoilement. La vérité n'est pas une propriété des propositions mais un événement où l'être se manifeste.

Aujourd'hui, la « post-vérité » semble confirmer Nietzsche : la vérité devient une construction narrative parmi d'autres. Mais la question de la vérité reste politiquement cruciale pour critiquer les fake news et les manipulations.`,

    problems: [
      {
        problem: 'Problème du critère de la vérité',
        description: 'Comment distinguer le vrai du faux ? Descartes propose l'évidence, mais on peut avoir des évidences fausses. L'empirisme propose l'expérience, mais nos sens peuvent nous tromper. Quel est le critère infaillible ?'
      },
      {
        problem: 'Problème de la correspondance',
        description: 'La théorie de la correspondance semble intuitive, mais comment comparer pensée et réalité ? Nous n'avons accès à la réalité qu'à travers nos pensées. La correspondance est-elle vérifiable ?'
      },
      {
        problem: 'Problème du relativisme',
        description: 'Si la vérité est cohérence (cohérentisme) ou construction sociale (constructivisme), des systèmes contradictoires peuvent chacun être « vrais ». Comment éviter le relativisme ?'
      },
      {
        problem: 'Problème de la post-vérité',
        description: 'À l'ère des fake news et des bulles de filtre, la vérité devient-elle une opinion parmi d'autres ? Comment critiquer les manipulations si la vérité est construction ?'
      }
    ],

    debates: [
      {
        issue: 'Qu\'est-ce que la vérité ?',
        positions: [
          {
            philosopher: 'Aristote',
            position: 'Théorie de la correspondance : la vérité est adéquation entre ce qui est dit et ce qui est. « Dire de ce qui est qu\'il est ».'
          },
          {
            philosopher: 'James',
            position: 'Théorie pragmatiste : la vérité est ce qui fonctionne, ce qui se vérifie dans l\'expérience. La vérité se fait, ne se trouve pas.'
          },
          {
            philosopher: 'Heidegger',
            position: 'Théorie du dévoilement : la vérité est alètheia, événement où l\'être se manifeste. Pas correspondance mais révélation.'
          },
          {
            philosopher: 'Nietzsche',
            position: 'Critique radicale : la vérité est illusion, interprétation stabilisée. Il n\'y a pas de faits, seulement des perspectives.'
          }
        ]
      },
      {
        issue: 'Comment accéder à la vérité ?',
        positions: [
          {
            philosopher: 'Descartes',
            position: 'Par l\'évidence : ce qui est perçu clairement et distinctement est vrai. Le cogito est modèle de toute vérité.'
          },
          {
            philosopher: 'Platon',
            position: 'Par la dialectique : ascension vers les Idées, via la raison. La vérité est contemplation des êtres éternels.'
          },
          {
            philosopher: 'Bacon',
            position: 'Par l\'induction expérimentale : observer, généraliser, tester. La vérité scientifique se construit méthodiquement.'
          },
          {
            philosopher: 'Kant',
            position: 'Par la critique : la vérité est accord de la connaissance avec son objet, mais limitée au phénoménal. Le nouménal est inconnaissable.'
          }
        ]
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Théorie de la correspondance (Aristote)',
      description: 'La vérité comme adéquation entre ce qui est dit et ce qui est. Aristote définit la vérité comme « dire de ce qui est qu\'il est, et de ce qui n\'est pas qu\'il n\'est pas ». La proposition « la neige est blanche » est vraie si la neige est effectivement blanche. C\'est la conception classique et la plus intuitive : la vérité comme correspondance entre pensée et réalité.',
      philosophicalContext: 'Cette conception domine la philosophie occidentale, de Thomas d\'Aquin (« adæquatio rei et intellectus ») à la philosophie analytique contemporaine. Elle repose sur le réalisme : il y a une réalité indépendante à laquelle nos pensées correspondent.'
    },
    {
      title: 'Théorie de la cohérence',
      description: 'La vérité comme cohérence interne d\'un système de propositions. Une croyance est vraie si elle s\'intégre de manière cohérente avec l\'ensemble de nos croyances. Cette théorie résout le problème de la correspondance (comment comparer pensée et réalité?) mais pose le problème du relativisme : des systèmes cohérents peuvent être contradictoires entre eux.'
    },
    {
      title: 'Théorie pragmatiste (James, Peirce)',
      description: 'Pour les pragmatistes, la vérité n\'est pas une propriété statique mais dynamique : une idée est vraie si elle « fonctionne », si elle résiste à l\'épreuve de l\'expérience. William James : « Le vrai est seulement l\'expédient dans notre façon de penser ». Charles Sanders Peirce définit la vérité comme l\'opinion finale vers laquelle converge la communauté scientifique à long terme.'
    },
    {
      title: 'Vérité comme dévoilement (Heidegger)',
      description: 'Heidegger revient à l\'étymologie grecque alètheia : la vérité comme dévoilement, retrait du voile qui cache l\'être. La vérité n\'est pas une propriété des propositions mais un événement : l\'être se manifeste, apparaît dans sa luminosité. L\'œuvre d\'art est vérité qui se met en œuvre, elle dévoile le monde d\'un peuple. La vérité n\'est pas à découvrir mais à laisser advenir.'
    },
    {
      title: 'Vérité et interprétation (Nietzsche)',
      description: 'Pour Nietzsche, la vérité est une illusion dont on a oublié qu\'elle en était une. Il n\'y a pas de faits, seulement des interprétations. Ce que nous appelons « vérité » est une interprétation qui s\'est stabilisée, qui a fait oublier son caractère d\'interprétation. La « volonté de vérité » est une forme du ressentiment : les faibles veulent des vérités absolues pour se protéger du chaos du devenir.'
    },
    {
      title: 'Vérité et consensus (Habermas)',
      description: 'Pour Habermas, la vérité est le résultat d\'une communication idéale : ce sur quoi s\'accorderaient des participants à une discussion libre, sans contrainte, avec égalité de parole. La vérité n\'est pas une correspondance avec une réalité indépendante mais l\'aboutissement d\'un processus de dialogue rationnel. C\'est la « théorie consensuelle de la vérité ».'
    },
    {
      title: 'Vérité formelle vs matérielle (Kant)',
      description: 'Kant distingue la vérité formelle (accord de la connaissance avec les lois de l\'entendement) de la vérité matérielle (accord de la connaissance avec son objet). La logique traite de la vérité formelle, la connaissance de la vérité matérielle. La « vérité logique » est la conformité aux règles de la pensée ; la « vérité réelle » est l\'adéquation à l\'objet.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Définition classique de la vérité comme adéquation de l\'esprit et de la chose' },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Réinterprétation de la vérité comme alètheia (dévoilement)' },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'Critique radicale du concept de vérité comme illusion et interprétation' },
    { name: 'William James', period: '1842-1910', contribution: 'Théorie pragmatiste de la vérité comme ce qui fonctionne' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Distinction entre vérité formelle et vérité matérielle' },
    { name: 'Charles Sanders Peirce', period: '1839-1914', contribution: 'Vérité comme opinion finale de la communauté scientifique' },
    { name: 'Jürgen Habermas', period: '1929-', contribution: 'Théorie consensuelle de la vérité' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le paradoxe du menteur : « Cette phrase est fausse ». Si elle est vraie, alors elle est fausse. Si elle est fausse, alors elle est vraie. Ce paradoxe, découvert par Euboulide, montre que la définition classique de la vérité (adéquation) peut mener à des contradictions logiques inquiétantes.',
    'La table blanche : La proposition « la table est blanche » est vraie si la table est effectivement blanche. C\'est la théorie de la correspondance. Mais comment vérifier que la table est blanche ? Par ma perception ? Mais ma perception peut me tromper. Par accord avec d\'autres ? Mais là on glisse vers la théorie de la cohérence.',
    'Le modèle scientifique : La théorie de la relativité est « vraie » non pas parce qu\'elle correspondrait à une réalité ultime, mais parce qu\'elle fait des prédictions précises et résiste à l\'expérience. C\'est la conception pragmatiste : est vrai ce qui fonctionne, ce qui est vérifié dans la pratique.',
    'L\'œuvre d\'art : Pour Heidegger, le temple grec ne représente pas la vérité, il est vérité qui se met en œuvre. En érigeant le temple, un peuple se comprend lui-même, son monde se dévoile. La vérité n\'est pas une copie de la réalité mais l\'événement où la réalité advient dans sa luminosité.',
    'Le mythe de la caverne : Les prisonniers prennent les ombres pour la vérité. Libéré, le philosophe découvre que les ombres étaient illusion et les vraies choses sont celles qui projettent les ombres. Platon oppose ici connaissance sensible (doxa, opinion) et connaissance intelligible (épistémè, vérité).'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Métaphysique',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Définition classique de la vérité comme adéquation',
      quotes: [
        'Dire de ce qui est qu\'il est, et de ce qui n\'est pas qu\'il n\'est pas, c\'est dire le vrai.',
        'Le faux est ce qui est, mais n\'est pas tel qu\'on le dit.',
        'La vérité réside dans la pensée.',
        'L\'homme est mesure de toute chose.',
        'L\'erreur réside dans la synthèse.',
        'La vérité est l\'accord de l\'intellect et de la chose.'
      ]
    },
    {
      title: 'Alètheia',
      author: 'Martin Heidegger',
      year: 1943,
      type: 'ESSAY' as const,
      reference: 'Essai sur l\'essence de la vérité comme dévoilement',
      quotes: [
        'La vérité est le dévoilement de l\'être.',
        'L\'être-la est dans la vérité.',
        'Le faux est le non-dévoilement.',
        'L\'erreur est la patrie de la vérité.',
        'La liberté est le fondement de la vérité.',
        'Le voilement appartient à la vérité comme dévoilement.'
      ]
    },
    {
      title: 'Vérité et mensonge au sens extra-moral',
      author: 'Friedrich Nietzsche',
      year: 1873,
      type: 'ESSAY' as const,
      reference: 'Critique radicale du concept de vérité',
      quotes: [
        'Il n\'y a pas de faits, seulement des interprétations.',
        'La vérité est une illusion dont on a oublié qu\'elle en était une.',
        'Qu\'est-ce que la vérité ? Une multitude mouvante de métaphores.',
        'Le menteur utilise les conventions valides pour faire l\'irréel passer pour réel.',
        'La vérité est une femme : il ne faut pas lui lever le voile.',
        'Nous avons tué le monde des apparences pour le remplacer par le monde de la vérité.'
      ]
    },
    {
      title: 'Le Pragmatisme',
      author: 'William James',
      year: 1907,
      type: 'BOOK' as const,
      reference: 'Défense de la théorie pragmatiste de la vérité',
      quotes: [
        'Le vrai est seulement l\'expédient dans notre façon de penser.',
        'Une idée est vraie si elle fonctionne.',
        'La vérité est ce qui se vérifie dans l\'expérience.',
        'Le vrai est le commencement de l\'utile.',
        'Les idées vraies sont celles que nous pouvons assimiler, valider, corroborer.',
        'La vérité est faite, non découverte.'
      ]
    },
    {
      title: 'Critique de la raison pure',
      author: 'Immanuel Kant',
      year: 1781,
      type: 'BOOK' as const,
      reference: 'Distinction entre vérité formelle et matérielle',
      quotes: [
        'La vérité logique est l\'accord de la connaissance avec les lois de l\'entendement.',
        'La vérité matérielle est l\'accord de la connaissance avec son objet.',
        'Le critère de la vérité est dans l\'accord de la connaissance avec elle-même.',
        'La vérité est l\'accord de la connaissance avec son objet.',
        'On ne peut chercher un critère général de la vérité matérielle.',
        'La logique est la science des règles de l\'entendement en général.'
      ]
    },
    {
      title: 'République',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Allégorie de la caverne et distinction opinion/vérité',
      quotes: [
        'Le philosophe est celui qui contemple les vrais êtres.',
        'Le monde sensible est l\'opinion, le monde intelligible est la vérité.',
        'Le soleil est le fils du Bien, qui rend les choses visibles.',
        'La dialectique est l\'ascension vers le principe de tout.',
        'L\'opinion est entre l\'ignorance et le savoir.',
        'Le philosophe doit descendre dans la caverne pour diriger la cité.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle est la définition classique de la vérité selon Aristote ?',
      back: 'Aristote définit la vérité comme « dire de ce qui est qu\'il est, et de ce qui n\'est pas qu\'il n\'est pas ». C\'est la théorie de la correspondance : la vérité est l\'adéquation entre ce qui est dit ou pensé et ce qui est. La proposition « la neige est blanche » est vraie si la neige est effectivement blanche.',
      difficulty: 2
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre théorie de la correspondance et théorie de la cohérence ?',
      back: 'La théorie de la correspondance (Aristote) définit la vérité comme adéquation entre proposition et réalité. La théorie de la cohérence définit la vérité comme cohérence interne d\'un système de croyances. La correspondance demande : « Est-ce que ma pensée correspond à la réalité? » La cohérence demande : « Est-ce que ma pensée est cohérente avec mes autres pensées? » La première semble plus intuitive, mais la seconde résout le problème de comment comparer pensée et réalité.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Heidegger réinterprète-t-il la vérité comme alètheia ?',
      back: 'Heidegger revient à l\'étymologie grecque alètheia : « dévoilement » (a- privatif + lethe = oubli). La vérité n\'est pas une propriété des propositions (correspondance avec la réalité) mais un événement où l\'être se manifeste, se dévoile dans sa luminosité. L\'œuvre d\'art est « vérité qui se met en œuvre » : elle ne représente pas la réalité mais permet à la réalité d\'advenir. La vérité n\'est pas à découvrir mais à laisser advenir.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle critique Nietzsche fait-il du concept de vérité ?',
      back: 'Pour Nietzsche, la vérité est « une illusion dont on a oublié qu\'elle en était une ». Il n\'y a pas de faits, seulement des interprétations. Ce que nous appelons « vérité » est une interprétation qui s\'est stabilisée, qui a fait oublier qu\'elle est interprétation. La « volonté de vérité » exprime le refus du devenir, du chaos : les faibles veulent des vérités immuables pour se protéger de la réalité du monde. Ce n\'est pas que la vérité n\'existe pas, mais qu\'elle est toujours perspective, toujours liée à des intérêts vitaux.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la théorie pragmatiste de la vérité ?',
      back: 'Pour les pragmatistes (James, Peirce), la vérité n\'est pas une propriété statique mais dynamique : une idée est vraie si elle « marche », si elle résiste à l\'épreuve de l\'expérience. William James : « Le vrai est seulement l\'expédient dans notre façon de penser ». Peirce définit la vérité comme « l\'opinion finale vers laquelle converge la communauté scientifique à long terme ». La vérité n\'est pas à découvrir mais à construire par la recherche collective.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation d\'Aristote résume la conception classique de la vérité ?',
      back: '« Dire de ce qui est qu\'il est, et de ce qui n\'est pas qu\'il n\'est pas » (Métaphysique, IVe siècle av. J.-C.)',
      difficulty: 2
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Nietzsche résume sa critique de la vérité ?',
      back: '« Il n\'y a pas de faits, seulement des interprétations »',
      difficulty: 2
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Heidegger, la vérité est {{dévoilement}} (grec : {{alètheia}}).',
      back: 'dévoilement | alètheia',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'La vérité est-elle correspondence avec la réalité ou construction de l\'esprit ?',
      back: 'Le débat sur la nature de la vérité oppose deux conceptions. La théorie de la correspondance (Aristote) : la vérité est adéquation entre pensée et réalité, indépendante de nous. La théorie cohérentiste ou pragmatiste : la vérité est cohérence interne de nos croyances ou résultat d\'un processus de validation. La première correspond à l\'intuition (la vérité « dehors »), mais se heurte au problème de comment comparer pensée et réalité. La seconde résout ce problème mais risque le relativisme (des systèmes cohérents contradictoires). Heidegger propose une troisième voie : la vérité comme dévoilement, événement où la réalité advient pour nous. Nietzsche pousse plus loin : la vérité est illusion nécessaire, perspective vitale. Aujourd\'hui, la « post-vérité » semble confirmer Nietzsche : la vérité devient une construction narrative parmi d\'autres. Mais comment alors critiquer les fake news ? La question de la vérité reste ouverte et politiquement cruciale.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['vérité', 'aristote', 'heidegger', 'nietzsche', 'épistémologie', 'connaissance', 'correspondance', 'alètheia', 'pragmatisme', 'réalité']
};
