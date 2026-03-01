/*
  Réalité - Concept Data
  Ce qui est, indépendamment de ce qui en est pensé ou perçu
*/
export const concept = {
  // ===== IDENTITÉ =====
  id: 'realite',
  name: 'Réalité',
  slug: 'realite',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: `La réalité est ce qui est, indépendamment de ce qui en est pensé, perçu ou imaginé. La philosophie distingue plusieurs approches : le réalisme (la réalité existe indépendamment de l'esprit) ; l'idéalisme (la réalité est dépendante de l'esprit) ; le phénoménalisme (la réalité est le donné de l'expérience). Pour Platon, la réalité véritable est le monde des Idées, le monde sensible n'étant qu'apparence. Pour Kant, la réalité se divise en phénomènes (ce qui nous apparaît) et noumènes (les choses en soi, inconnaissables). Pour la physique moderne, la réalité quantique défie l'intuition : une particule peut être onde et corpuscule, présente en plusieurs lieux simultanément. La question "qu'est-ce que la réalité ?" est métaphysique par excellence car elle interroge ce qui est ultimement.`,
  shortDefinition: 'Ce qui est, indépendamment de la pensée ou de la perception',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'realitas',
    greek: 'ousia (οὐσία)',
    root: 'res : chose',
    notes: 'La réalité est ce qui a consistance, ce qui existe vraiment. Ousia désigne l\'être, la substance, l\'essence'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du réalisme métaphysique',
        explanation: 'La réalité existe indépendamment de notre esprit. Nos perceptions peuvent être erronées, mais il y a un monde réel qui les cause. Quand je dors et rêve, le monde continue d\'exister.',
        premises: [
          'Nous pouvons nous tromper sur ce que nous percevons',
          'Nos perceptions représentent quelque chose d\'extérieur',
          'Le monde existe indépendamment de notre conscience',
          'La science découvre des vérités indépendantes de nous'
        ],
        conclusion: 'Donc il existe une réalité objective indépendante de l\'esprit'
      },
      {
        argument: 'Argument de l\'idéalisme (Berkeley)',
        explanation: `Être, c'est être perçu ou percevoir. Nous n'avons pas accès à une réalité en dehors de notre conscience. La matière est une abstraction inutile : tout est esprit.`,
        premises: [
          'Nous ne connaissons que nos perceptions et idées',
          'L\'idée de matière en soi est inintelligible',
          'Dieu garantit la continuité des perceptions',
          'Être signifie être perçu (esse est percipi)'
        ],
        conclusion: 'Donc la réalité est mentale ou spirituelle, pas matérielle'
      },
      {
        argument: 'Argument kantien de la distinction phénomène/noumène',
        explanation: `Kant distingue ce qui nous apparaît (phénomènes) et ce qui est en soi (noumènes). Nous ne connaissons jamais les choses en soi elles-mêmes, mais seulement telles qu'elles nous apparaissent à travers les formes de notre sensibilité.`,
        premises: [
          'Notre connaissance est structurée par l\'espace et le temps',
          'L\'espace et le temps sont des formes a priori de notre sensibilité',
          'Nous ne pouvons connaître les choses qu\'à travers ces structures',
          'Les choses en soi (noumènes) sont inconnaissables'
        ],
        conclusion: 'Donc la réalité se divise en réalité apparente (phénomènes) et réelle mais inconnaissable (noumènes)'
      }
    ],
    objections: [
      {
        objection: 'Objection empiriste',
        content: `Comment prouver l'existence d'une réalité externe ? Tous mes arguments reposent sur mes perceptions. Je ne peux sortir de ma conscience pour vérifier qu'il y a quelque chose en dehors.`,
        response: 'Le réaliste répond que la régularité de nos perceptions, le consensus interpersonnel et le succès prédictif de la science prouvent l\'existence d\'une réalité externe. Mais cette preuve reste indirecte.'
      },
      {
        objection: 'Objection sceptique',
        content: `Rien ne garantit que la réalité est telle que nous la percevons. Nous pourrions être dans un rêve, une simulation, un cerveau dans un vat. La réalité pourrait être radicalement différente.`,
        response: 'Cette objection est logiquement irréfutable. Mais elle est stérile : si toute expérience est illusion, la distinction réalité/illusion perd son sens. La réalité se définit pragmatiquement par ce qui résiste à l\'expérience.'
      },
      {
        objection: 'Objection de la physique quantique',
        content: `La réalité quantique défie l'intuition : une particule n'a pas de position définie avant mesure, peut être dans plusieurs états simultanément. La réalité n'est ni déterminée ni locale.`,
        response: 'Cela ne remet pas en cause l\'existence d\'une réalité, mais montre qu\'elle n\'est pas comme nous l\'imaginons. La réalité quantique est étrange, mais réelle : elle résiste à l\'expérience et prédit des phénomènes vérifiés.'
      }
    ],
    distinctions: [
      {
        distinction: 'Réalité vs Apparence',
        explanation: `La réalité est ce qui est véritablement. L'apparence est ce qui paraît être mais pourrait ne pas être. Pour Platon, le monde sensible est apparence, le monde des Idées est réalité.`
      },
      {
        distinction: 'Réalité vs Vérité',
        explanation: 'La réalité est ce qui est (ontologique). La vérité est l\'adéquation entre la pensée et la réalité (épistémologique). Une proposition peut être vraie ou fausse, seule la réalité est.'
      },
      {
        distinction: 'Réalité vs Existence',
        explanation: 'L\'existence est le fait d\'être. La réalité est ce qui est véritablement. Un rêve existe (comme rêve) mais n\'est pas réel (comme état de choses objectif).'
      },
      {
        distinction: 'Phénomène vs Noumène (Kant)',
        explanation: 'Le phénomène est ce qui nous apparaît, structuré par notre sensibilité. Le noumène est la chose en soi, inconnaissable. Nous connaissons les phénomènes, pas les noumènes.'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      concept: 'verite',
      relationship: 'La vérité est adéquation avec la réalité. Mais qu\'est-ce que la réalité ? Est-elle indépendante de nous ?',
      bidirectional: true
    },
    {
      concept: 'connaissance',
      relationship: 'La connaissance cherche à appréhender la réalité. Mais la connaissance peut-elle atteindre la réalité en soi ou seulement les phénomènes ?',
      bidirectional: true
    },
    {
      concept: 'apparence',
      relationship: `La réalité est ce qui est véritablement. L'apparence est ce qui paraît mais pourrait ne pas être. Platon oppose monde sensible (apparence) et monde des Idées (réalité).`,
      bidirectional: false
    },
    {
      concept: 'etre',
      relationship: 'La réalité est ce qui est. L\'être est l\'acte d\'être. La réalité est l\'être considéré dans son indépendance par rapport à la pensée.',
      bidirectional: true
    },
    {
      concept: 'langage',
      relationship: 'Le langage représente la réalité. Mais le langage peut-il appréhender la réalité telle qu\'elle est ou seulement la construire ?',
      bidirectional: true
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Réalisme',
      description: 'La réalité existe indépendamment de l\'esprit. Aristote, Thomas d\'Aquin, philosophie analytique contemporaine.',
      keyFigures: ['Aristote', 'Thomas d\'Aquin', 'Quine']
    },
    {
      movement: 'Idéalisme',
      description: 'La réalité est dépendante de l\'esprit. Berkeley, Hegel. La matière n\'existe pas indépendamment de la conscience.',
      keyFigures: ['Berkeley', 'Hegel', 'Fichte']
    },
    {
      movement: 'Kantisme',
      description: 'Distinction entre phénomènes (apparence) et noumènes (chose en soi). La réalité est accessible mais médiatisée par les structures de l\'esprit.',
      keyFigures: ['Kant', 'Fichte', 'Schelling']
    },
    {
      movement: 'Phénoménologie',
      description: 'Retour aux choses elles-mêmes. La réalité est ce qui se donne dans l\'expérience. Husserl, Heidegger, Merleau-Ponty.',
      keyFigures: ['Husserl', 'Heidegger', 'Merleau-Ponty']
    },
    {
      movement: 'Constructivisme',
      description: 'La réalité est construction sociale, linguistique ou scientifique. Pas de réalité indépendante, seulement des constructions.',
      keyFigures: ['Goodman', 'Latour', 'Wittgenstein']
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `La question de la réalité commence avec les Grecs. Parménide affirme que seul l'être est réel, le changement n'est qu'illusion. Platon oppose monde des Idées (réalité véritable) et monde sensible (apparence). Aristote réaffirme la réalité du monde sensible : les substances existent réellement.

Au XVIIe siècle, Descartes doute de tout mais trouve une certitude dans le cogito. Il prouve l'existence de Dieu puis la réalité du monde matériel. Mais il établit une dualité âme/corps qui traversera toute la philosophie moderne.

Berkeley (1713) radicalise l'idéalisme : être, c'est être perçu (esse est percipi). La matière n'existe pas, tout est esprit. Dieu garantit la continuité du monde quand personne ne le perçoit.

Kant (1781) opère la révolution copernicienne : ce sont nos structures subjectives (espace, temps, catégories) qui structurent la réalité que nous connaissons. Il distingue phénomènes (ce qui nous apparaît) et noumènes (les choses en soi, inconnaissables).

Hegel (1807) tente de dépasser réalisme/idéalisme : la réalité est esprit qui se connaît lui-même à travers l'histoire. La réalité est processus, pas substance.

La phénoménologie (Husserl) retourne aux choses elles-mêmes : la réalité est ce qui se donne dans l'expérience. Heidegger analyse l'être comme ce qui est dévoilé dans l'existence.

La physique quantique (XXe siècle) découvre une réalité étrange : indéterminisme, non-localité, dualité onde-corpuscule. La réalité ne correspond plus à l'intuition classique.

Aujourd'hui, le débat continue entre réalisme scientifique (la science décrit la réalité), réalisme structural (seules les structures sont réelles), et anti-réalisme (la science n'est qu'instrument de prédiction).`,
    problems: [
      {
        problem: 'Problème de la réalité externe',
        description: `Comment prouver l'existence d'une réalité en dehors de ma conscience ? Tous mes arguments reposent sur mes perceptions. L'argument du rêve ou de la simulation met en question l'accès à la réalité.`
      },
      {
        problem: 'Problème de l\'accès à la réalité en soi',
        description: `Même s'il existe une réalité indépendante, pouvons-nous la connaître telle qu'elle est ? Kant répond non : nous ne connaissons que les phénomènes, pas les noumènes.`
      },
      {
        problem: 'Problème de la réalité quantique',
        description: `La réalité quantique défie l'intuition : indéterminisme, non-localité, dualité. La réalité est-elle fondamentalement probabiliste ? La mesure crée-t-elle la réalité ?`
      },
      {
        problem: 'Problème de la construction sociale',
        description: 'Une partie de la réalité (institutions, faits sociaux) est-elle construite ou découverte ? Le constructivisme risque de tout relativiser, le réalisme de naturaliser l\'arbitraire.'
      }
    ],
    debates: [
      {
        issue: 'La réalité est-elle indépendante de l\'esprit ?',
        positions: [
          { philosopher: 'Aristote', position: 'Oui : le réalisme. La réalité existe indépendamment de notre esprit. Nos perceptions la représentent, parfois correctement, parfois non.' },
          { philosopher: 'Berkeley', position: `Non : l'idéalisme. Être, c'est être perçu. La matière n'existe pas, tout est esprit. Dieu garantit la continuité.` },
          { philosopher: 'Kant', position: 'La réalité en soi existe mais est inconnaissable. Nous connaissons les phénomènes (apparences) structurés par notre esprit, pas les noumènes (choses en soi).' },
          { philosopher: 'Hegel', position: `La réalité est esprit. Il n'y a pas de réalité indépendante de l'esprit car tout est esprit qui se connaît lui-même à travers l'histoire.` }
        ]
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Réalisme aristotélicien',
      description: `Pour Aristote, la réalité est composée de substances concrètes existant indépendamment de l'esprit. Les substances ont des essences et des accidents. Le monde sensible est réel, pas illusoire comme chez Platon. La connaissance est abstraction des formes à partir des substances concrètes.`,
      philosophicalContext: 'Cette conception réaliste domine la philosophie médiévale (Thomas d\'Aquin) et reste la conception du sens commun : il y a un monde réel extérieur.'
    },
    {
      title: 'Idéalisme berkeleyen',
      description: `Berkeley affirme "être, c'est être perçu " (esse est percipi). La matière est une abstraction inutile : nous ne connaissons que nos idées et perceptions. La réalité est mentale ou spirituelle. Dieu garantit que le monde continue d'exister quand personne ne le perçoit.`,
      philosophicalContext: `L'idéalisme radical résout le problème sceptique de la réalité externe : il n'y a pas de réalité en dehors de la conscience.`
    },
    {
      title: 'Réalisme transcendantal (Kant)',
      description: `Kant distingue les phénomènes (ce qui nous apparaît, structuré par l'espace et le temps) des noumènes (les choses en soi). Nous ne pouvons connaître que les phénomènes, pas les noumènes. La réalité en soi existe mais est inconnaissable. La réalité que nous connaissons est en partie construite par notre esprit.`,
      philosophicalContext: 'Cette position médiane entre réalisme et idéalisme influence toute la philosophie post-kantienne.'
    },
    {
      title: 'Idéalisme absolu (Hegel)',
      description: `Pour Hegel, la réalité est esprit absolu qui se connaît lui-même à travers l'histoire. La réalité n'est pas substance fixe mais processus de développement. La nature est esprit "aliéné ", l'histoire est esprit qui revient à soi. La réalité est totale, intelligible, rationnelle.`,
      philosophicalContext: 'Cette conception téléologique de la réalité comme processus spirituel influence le marxisme et l\'existentialisme.'
    },
    {
      title: 'Phénoménologie (Husserl, Heidegger)',
      description: `La phénoménologie retourne "aux choses elles-mêmes " : la réalité est ce qui se donne dans l'expérience. Husserl analyse la constitution de la réalité dans la conscience. Heidegger analyse l'être comme ce qui est dévoilé dans l'existence. La réalité n'est ni objecte ni sujet, mais l'événement de leur rencontre.`,
      philosophicalContext: 'Cette approche influence l\'existentialisme, la philosophie du XXe siècle, et la critique du dualisme sujet/objet.'
    },
    {
      title: 'Réalisme scientifique',
      description: `Le réalisme scientifique affirme que la science décrit la réalité telle qu'elle est. Les électrons, les quarks, les trous noirs existent réellement, pas seulement comme instruments de prédiction. Le succès prédictif de la science prouve qu'elle appréhende la réalité.`,
      philosophicalContext: 'Cette position domine la philosophie des sciences contemporaines mais est contestée par les instrumentistes et les constructivistes.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Distinction entre monde des Idées (réalité) et monde sensible (apparence)' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Réalisme : la réalité existe indépendamment de l\'esprit' },
    { name: 'René Descartes', period: '1596-1650', contribution: 'Preuve de la réalité du monde matériel à partir du cogito et de Dieu' },
    { name: 'George Berkeley', period: '1685-1753', contribution: 'Idéalisme radical : être, c\'est être perçu' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Distinction phénomène/noumène, critique de la métaphysique' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'Idéalisme absolu : la réalité comme esprit qui se connaît' },
    { name: 'Edmund Husserl', period: '1859-1938', contribution: 'Phénoménologie : retour aux choses elles-mêmes' }
  ],

  // ===== EXEMPLES =====
  examples: [
    `Le rêve de Descartes : Descartes se demande s'il rêve ou est éveillé. Dans un rêve, tout semble réel mais ne l'est pas. Comment distinguer rêve et réalité ? Cette expérience de pensée met en question l'accès à la réalité.`,
    `Le cerveau dans un vat : Un scientifique maléfique pourrait nourrir votre cerveau de stimuli électriques pour simuler une réalité. Tout ce que vous percevez serait illusion. Comment prouver que vous n'êtes pas dans cette situation ? Le scepticisme montre que l'accès à la réalité n'est pas certain.`,
    `La physique quantique : Une particule quantique n'a pas de position définie avant d'être mesurée. Elle peut être dans plusieurs états simultanément (superposition). Deux particules peuvent être intriquées : mesurer l'une affecte instantanément l'autre, même à des années-lumière. La réalité quantique défie l'intuition classique.`,
    `La table de Berkeley : Berkeley demande : existe-t-il une table quand personne ne la perçoit ? Sa réponse : oui, car Dieu la perçoit toujours. L'argument montre que l'idéalisme n'aboutit pas au nihilisme : Dieu garantit la continuité de la réalité.`,
    'Le navire de Thésée : Le navire de Thésée voit toutes ses planches remplacées progressivement. Est-ce le même navire ? La réalité matérielle change mais l\'identité reste. Ce problème interroge ce qui rend une chose réellement ce qu\'elle est : matière ou forme ?'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Méditations métaphysiques',
      author: 'René Descartes',
      year: 1641,
      type: 'BOOK' as const,
      reference: 'Preuve de la réalité du monde matériel',
      quotes: [
        'Je suppose donc que... quelque puissance trompeuse... m\'a employé toute ma vie à me persuader de ces faussetés.',
        'Mais il y a un je ne sais quoi de très admirable dans cette croyance.',
        'Je remarque ici de la pensée et la réalité d\'une pensée.',
        'La réalité objective de mes idées est telle qu\'elle ne peut venir de moi.',
        'L\'existence de Dieu est donc démontrée.',
        'Il reste à examiner s\'il n\'y a rien de matériel.'
      ]
    },
    {
      title: 'Trois dialogues entre Hylas et Philonous',
      author: 'George Berkeley',
      year: 1713,
      type: 'BOOK' as const,
      reference: 'Défense de l\'idéalisme immatérialiste',
      quotes: [
        'Être, c\'est être perçu.',
        'La matière n\'existe pas.',
        'Nous ne connaissons que nos idées.',
        'Dieu garantit la continuité du monde.',
        'L\'existence des choses sensibles consiste à être perçues.',
        'La réalité spirituelle est la seule réalité.'
      ]
    },
    {
      title: 'Critique de la raison pure',
      author: 'Immanuel Kant',
      year: 1781,
      type: 'BOOK' as const,
      reference: 'Distinction phénomène/noumène',
      quotes: [
        'Le temps et l\'espace sont des formes a priori de la sensibilité.',
        'Nous ne connaissons les choses qu\'autant qu\'elles nous apparaissent.',
        'Les choses en soi sont inconnaissables.',
        'La réalité empirique se distingue de la réalité transcendante.',
        'L\'entendement est la faculté de connaître les phénomènes.',
        'La raison aspire à connaître l\'inconditionné mais n\'y parvient pas.'
      ]
    },
    {
      title: 'La République',
      author: 'Platon',
      year: -300,
      type: 'BOOK' as const,
      reference: 'Allégorie de la caverne et distinction réalité/apparence',
      quotes: [
        'Le monde sensible est l\'opinion, le monde intelligible est la vérité.',
        'Le soleil est le fils du Bien, qui rend les choses visibles.',
        'Les prisonniers prennent les ombres pour la réalité.',
        'Le philosophe contemple les vrais êtres.',
        'L\'art est imitation d\'une imitation.',
        'L\'Idée du Bien est au-delà de l\'être.'
      ]
    },
    {
      title: 'Idées directrices pour une phénoménologie',
      author: 'Edmund Husserl',
      year: 1913,
      type: 'BOOK' as const,
      reference: 'Retour aux choses elles-mêmes',
      quotes: [
        'Aux choses elles-mêmes.',
        'La réalité se donne dans l\'expérience.',
        'La conscience est toujours conscience de quelque chose.',
        'L\'intentionnalité est la structure de la conscience.',
        'L\'évidence est l\'expérience de la vérité.',
        'Le monde est le corrélat de la conscience.'
      ]
    },
    {
      title: 'De la réalité',
      author: 'Alain Badiou',
      year: 2006,
      type: 'BOOK' as const,
      reference: 'Ontologie contemporaine de la réalité',
      quotes: [
        'La réalité n\'est pas donnée, elle est procédurale.',
        'Un événement est ce qui advient de la réalité.',
        'La vérité est un processus de réalité.',
        'Le multiple est l\'être tel qu\'il est.',
        'L\'événement est ce qui ne peut être déduit.',
        'La fidélité construit une nouvelle réalité.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle est la définition classique de la réalité ?',
      back: `La réalité est ce qui est, indépendamment de ce qui en est pensé, perçu ou imaginé. C'est l'être considéré dans son indépendance par rapport à l'esprit. Le réalisme affirme que la réalité existe objectivement, indépendamment de notre conscience.`,
      difficulty: 1
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle distinction Kant fait-il entre phénomène et noumène ?',
      back: `Kant distingue les phénomènes (ce qui nous apparaît, structuré par les formes a priori de notre sensibilité : espace et temps) des noumènes (les choses en soi, telles qu'elles sont indépendamment de notre perception). Nous ne pouvons connaître que les phénomènes, pas les noumènes. La réalité se divise donc en réalité apparente (phénomènes) et réalité en soi (noumènes) mais cette dernière reste inconnaissable.`,
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Berkeley définit-il la réalité ?',
      back: `Pour Berkeley, "être, c'est être perçu " (esse est percipi). La réalité n'est pas matérielle mais spirituelle ou mentale. Nous ne connaissons que nos idées et perceptions. La matière est une abstraction inutile. Dieu garantit que le monde continue d'exister quand personne ne le perçoit. C'est l'idéalisme radical.`,
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre réalisme et idéalisme ?',
      back: `Le réalisme affirme que la réalité existe indépendamment de l'esprit. Nos perceptions peuvent être erronées mais il y a un monde réel qui les cause. L'idéalisme affirme que la réalité est dépendante de l'esprit. Berkeley va jusqu'à dire que la matière n'existe pas : tout est esprit. Kant propose une voie moyenne : il y a une réalité en soi (noumènes) mais elle est inconnaissable, nous ne connaissons que les apparences (phénomènes).`,
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Berkeley résume l\'idéalisme ?',
      back: '"Être, c\'est être perçu ',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Platon distingue réalité et apparence ?',
      back: '"Le monde sensible est l\'opinion, le monde intelligible est la vérité ',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Kant, nous ne connaissons que les {{phénomènes}}, pas les {{noumènes}}.',
      back: 'phénomènes | noumènes',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'La réalité est-elle indépendante de notre esprit ou construite par lui ?',
      back: `Le débat réalisme/idéalisme structure la métaphysique. Le réalisme (Aristote) : la réalité existe indépendamment de nous. L'idéalisme (Berkeley) : la réalité est mentale, "être, c'est être perçu ". Kant propose une médiation : il y a une réalité en soi mais nous n'avons accès qu'aux apparences structurées par notre esprit. La phénoménologie (Husserl) retourne à l'expérience : la réalité est ce qui se donne. La physique quantique révèle une réalité étrange qui défie l'intuition. Aujourd'hui, le constructivisme affirme que la réalité est construction sociale. Mais comment alors expliquer le succès prédictif de la science ? La question de la réalité reste ouverte, mais ce qui est sûr : nous ne pouvons sortir de notre conscience pour vérifier ce qu'il y a en dehors. La réalité se donne toujours à travers une expérience, jamais "en soi ".`,
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['réalité', 'métaphysique', 'réalisme', 'idéalisme', 'kant', 'berkeley', 'phénomène', 'noumène', 'apparence', 'vérité', 'connaissance']
};
