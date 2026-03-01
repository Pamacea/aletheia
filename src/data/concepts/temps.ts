/**
 * Temps - Concept Data
 * Dimension du devenir, forme de la sensibilité, structure de l'existence
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'temps',
  name: 'Temps',
  slug: 'temps',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 5,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le temps est la dimension du devenir, la forme de notre sensibilité interne (Kant), la structure fondamentale de l\'existence (Heidegger). La philosophie distingue plusieurs approches : le temps cosmologique (mesure du mouvement des corps) ; le temps phénoménologique (temps vécu, temps de la conscience) ; le temps réel (Bergson : durée) vs temps spatialisé. Saint Augustin formule le paradoxe : le présent est le seul temps réel, mais comment mesurer le présent s\'il n\'a pas de durée ? Pour Kant, le temps est une forme a priori de la sensibilité : ce n\'est pas une chose en soi mais la condition de toute expérience. Pour Heidegger, le temps est l\'horizon de toute compréhension de l\'être : l\'être-là est « jeté » dans un temps qu\'il doit assumer. Pour Bergson, la durée est la texture même de la conscience, opposition au temps spatialisé de la physique.',
  shortDefinition: 'Dimension du devenir et forme de la sensibilité, structure fondamentale de l\'existence',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'tempus',
    greek: 'chronos (χρόνος)',
    root: 'tem- (couper, diviser) : le temps comme ce qui divise',
    notes: 'Chronos est personnifié comme une divinité ; le temps est ce qui divise, segmente, mesure'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    // Perspectives par école philosophique
    perspectives: [
      {
        school: 'Présocratique',
        philosopher: 'Héraclite',
        thesis: 'Le temps est flux perpétuel, tout s\'écoule',
        argument: '"Tout s\'écoule" (panta rhei). On ne se baigne pas deux fois dans le même fleuve. Rien n\'est stable, tout devient. Le temps est succession, changement, contraste des opposés. L\'être est devenir. Cette vision dynamique oppose la permanence parménidienne. Le temps est la réalité même, pas une apparence.',
        conclusion: 'Le temps comme devenir universel et flux perpétuel'
      },
      {
        school: 'Médiéval',
        philosopher: 'Saint Augustin',
        thesis: 'Le temps est distension de l\'âme, les trois temps sont dans l\'esprit',
        argument: 'Le passé n\'est plus, l\'avenir n\'est pas encore, le présent est sans dimension. Comment le temps existe-t-il ? Solution : les trois temps sont dans l\'âme - présent des choses passées (mémoire), présent des choses présentes (attention), présent des choses futures (attente). Le temps est distension de l\'âme, stretch de la conscience.',
        conclusion: 'Le temps comme structure de la conscience et distension de l\'âme'
      },
      {
        school: 'Moderne',
        philosopher: 'Immanuel Kant et Henri Bergson',
        thesis: 'Le temps est forme a priori de la sensibilité (Kant) ou durée vécue (Bergson)',
        argument: 'Kant : le temps n\'est pas une chose en soi mais une forme subjective de notre sensibilité. C\'est la condition de toute expérience. Bergson : il y a deux temps - le temps spatialisé (physique, mesurable) et la durée (temps vécu, qualitatif, indivisible où les moments se pénètrent). La durée est la texture même de la conscience.',
        conclusion: 'Le temps comme structure subjective (Kant) ou vécue (Bergson) de l\'existence'
      }
    ],
    principalArguments: [
      {
        argument: 'Argument de la réalité du présent (Augustin)',
        explanation: 'Le passé n\'est plus, l\'avenir n\'est pas encore. Si seuls le passé et l\'avenir existent, alors le temps n\'existe pas car ils n\'existent pas. Le présent est le seul temps réel, mais s\'il n\'a pas de durée, comment peut-on le mesurer ?',
        premises: ['Le passé n\'est plus', 'L\'avenir n\'est pas encore', 'Le présent sans durée ne peut être mesuré', 'Cependant, nous mesurons le temps'],
        conclusion: 'Donc il faut repenser la nature du temps comme distension de l\'âme'
      },
      {
        argument: 'Argument de l\'idéalité du temps (Kant)',
        explanation: 'Le temps n\'est pas une propriété des choses en soi mais une forme a priori de notre sensibilité. Nous percevons nécessairement tout dans le temps, mais le temps n\'existe pas indépendamment de notre esprit. C\'est la condition subjective de toute expérience.',
        premises: ['Le temps n\'est pas un concept empirique (dérivé de l\'expérience)', 'Le temps est une représentation nécessaire', 'Le temps n\'est pas une propriété des choses en soi', 'Le temps est la condition de toute expérience'],
        conclusion: 'Donc le temps est une forme a priori de la sensibilité, subjective'
      },
      {
        argument: 'Argument du temps originaire (Heidegger)',
        explanation: 'Le temps vulgaire (succession de maintenants) dérive du temps originaire (structure de l\'existence). L\'être-là est temporel : jeté (passé), projeté (avenir), tombé (présent). Le temps n\'est pas un conteneur mais la structure même de l\'existence.',
        premises: ['Le temps vulgaire est une suite de maintenants (t1, t2, t3...)', 'Ce temps vulgaire présuppose une expérience plus originaire', 'L\'être-là est toujours déjà jeté, projeté, tombé', 'Cette structure ek-statique est le temps originaire'],
        conclusion: 'Donc le temps originaire est la structure de l\'existence, source du temps vulgaire'
      }
    ],
    objections: [
      {
        objection: 'Objection physicienne (Newton)',
        content: 'Le temps est un conteneur absolu qui existe indépendamment des choses et de notre esprit. Les événements se passent « dans » le temps comme dans un espace.',
        response: 'Kant : si le temps était absolu, il serait une chose en soi, mais nous ne pouvons connaître les choses en soi. Le temps est donc subjectif. Einstein : le temps est relatif, pas absolu.'
      },
      {
        objection: 'Objection matérialiste',
        content: 'Le temps est une propriété de la matière en mouvement. Sans matière, pas de temps. Le temps n\'est ni subjectif ni absolu mais relationnel.',
        response: 'Cette position rejoint Aristote (temps = nombre du mouvement). Mais elle n\'explique pas pourquoi nous vivons le temps comme nous le faisons (phénoménologie).'
      },
      {
        objection: 'Objection logiciste (McTaggart)',
        content: 'Le temps est irréel car il conduit à des contradictions. La série temporelle A (passé/présent/avenir) et la série temporelle B (avant/après) sont incompatibles.',
        response: 'Objection basée sur une conception logiciste du temps. La phénoménologie montre que le temps vécu échappe à ces contradictions : c\'est une expérience, pas un concept.'
      }
    ],
    distinctions: [
      {
        distinction: 'Temps cosmologique vs Temps phénoménologique',
        explanation: 'Le temps cosmologique est le temps de la physique, mesurable, objectif. Le temps phénoménologique est le temps vécu, subjectif, qualitatif. Une heure de plaisir ne dure pas une heure d\'ennui.'
      },
      {
        distinction: 'Temps vulgaire vs Temps originaire (Heidegger)',
        explanation: 'Le temps vulgaire est le temps de la chronologie (t1, t2, t3...), objectivable. Le temps originaire est le temps de l\'existence : être-jeté (passé), projet (avenir), chute (présent).'
      },
      {
        distinction: 'Durée vs Temps spatialisé (Bergson)',
        explanation: 'La durée est le temps vécu, continu, indivisible, où les moments se pénètrent. Le temps spatialisé est le temps de la physique, divisé en instants-points, homogène.'
      },
      {
        distinction: 'Temps vs Éternité',
        explanation: 'Le temps est succession, changement. L\'éternité n\'est pas temps infini mais simultanéité totale (Boèce). Pour Platon, le temps est « image mobile de l\'éternité ».'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      conceptId: 'etre',
      relation: 'INFLUENCES',
      explanation: 'Le temps est lié à l\'être. Pour Heidegger, « le temps est l\'horizon de toute compréhension de l\'être ». L\'être-là est temporel.'
    },
    {
      conceptId: 'devenir',
      relation: 'BUILDS_ON',
      explanation: 'Le temps est inséparable du devenir. Là où il y a temps, il y a changement. Le temps est la forme du devenir.'
    },
    {
      conceptId: 'conscience',
      relation: 'INFLUENCED_BY',
      explanation: 'La conscience du temps est structurée par rétention (passé immédiat) et protension (avenir immédiat). La durée est la texture de la conscience.'
    },
    {
      conceptId: 'eternite',
      relation: 'OPPOSE',
      explanation: 'L\'éternité s\'oppose au temps comme simultanéité totale à succession. Pour Plotin, l\'éternité est vie sans changement.'
    },
    {
      conceptId: 'mort',
      relation: 'INFLUENCES',
      explanation: 'La mort donne son sens au temps. L\'être-là est « être-pour-la-mort » : sa finitude temporelle définit son existence.'
    },
    {
      conceptId: 'memoire',
      relation: 'BUILDS_ON',
      explanation: 'La mémoire est ce qui rend le temps mémorable. Sans mémoire, pas de passé, pas d\'identité temporelle. Augustin : le passé est présent de la mémoire.',
      bidirectional: true
    },
    {
      conceptId: 'histoire',
      relation: 'EXPRESSES',
      explanation: 'Le temps est la forme de l\'histoire. L\'histoire est devenir temporel, succession d\'événements significatifs.',
      bidirectional: true
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Phénoménologie',
      role: 'CENTRAL',
      description: 'Husserl, Heidegger, Merleau-Ponty : analyse du temps vécu, temps originaire, conscience du temps comme flux avec rétention/protension.'
    },
    {
      movement: 'Kantisme',
      role: 'CENTRAL',
      description: 'Kant : le temps comme forme a priori de la sensibilité. Condition subjective de toute expérience, pas chose en soi.'
    },
    {
      movement: 'Bergsonisme',
      role: 'CENTRAL',
      description: 'Bergson : distinction durée (temps vécu) vs temps spatialisé. La durée est invention, création, élan vital.'
    },
    {
      movement: 'Existentialisme',
      role: 'RELATED',
      description: 'Heidegger, Sartre : le temps comme structure de l\'existence. L\'homme est temporalité, pas simplement dans le temps.'
    },
    {
      movement: 'Physique moderne',
      role: 'RELATED',
      description: 'Einstein : relativité du temps. Le temps n\'est pas absolu mais relatif à l\'observateur. Révolutionne la conception classique du temps.'
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `La question du temps apparaît dès l'Antiquité. Aristote définit le temps comme « nombre du mouvement selon l'avant et l'après » : il n'y a pas de temps sans mouvement. Cette conception physique prédomine jusqu'à Newton.

Saint Augustin, dans les Confessions (397), pose la première analyse phénoménologique du temps. Son paradoxe : le passé n'est plus, l'avenir n'est pas encore, le présent est sans dimension. Comment le temps existe-t-il ? Sa solution : les trois temps sont dans l'âme (mémoire, attention, attente).

Au XVIIe siècle, Newton conçoit le temps comme conteneur absolu : un espace-temps qui existe indépendamment des choses. Cette conception domine la physique classique.

Kant révolutionne la question dans la Critique de la raison pure (1781) : le temps n'est pas une chose en soi mais une « forme a priori de la sensibilité ». C'est la condition subjective de toute expérience.

Bergson (1889) distingue radicalement la durée (temps vécu, qualitatif) du temps spatialisé (temps de la physique, quantitatif). La durée est la texture même de la conscience.

Heidegger (1927) analyse le « temps originaire » dans Être et Temps : le temps n'est pas un conteneur mais la structure de l'existence. L'être-là est jeté (passé), projeté (avenir), tombé (présent).

La physique moderne (Einstein) découvre que le temps est relatif : il dépend de la vitesse et de la gravitation. Cette découverte confirme partiellement la thèse kantienne du temps comme forme de la sensibilité.`,

    problems: [
      {
        problem: 'Problème de la réalité du temps',
        description: 'Le temps existe-t-il vraiment ou est-ce une illusion de notre esprit ? Le passé n\'est plus, l\'avenir n\'est pas encore : comment le temps peut-il être réel ?'
      },
      {
        problem: 'Problème du présent',
        description: 'Le présent est sans durée (instant ponctuel). Comment pouvons-nous percevoir une durée si seul le présent existe ? Comment mesurer le présent ?'
      },
      {
        problem: 'Problème de l\'écoulement du temps',
        description: 'Pourquoi le temps s\'écoule-t-il toujours dans la même direction ? La flèche du temps est-elle une propriété physique ou une illusion de notre conscience ?'
      },
      {
        problem: 'Problème du temps vécu vs temps mesuré',
        description: 'Pourquoi une heure de plaisir semble-t-elle plus courte qu\'une heure d\'ennui ? Le temps est-il objectif ou subjectif ?'
      }
    ],

    debates: [
      {
        issue: 'Le temps est-il objectif ou subjectif ?',
        positions: [
          {
            philosopher: 'Newton',
            position: 'Le temps est un conteneur absolu, objectif, qui existe indépendamment des choses et des esprits.'
          },
          {
            philosopher: 'Kant',
            position: 'Le temps est une forme a priori de la sensibilité, subjective. C\'est la condition de toute expérience, pas une chose en soi.'
          },
          {
            philosopher: 'Bergson',
            position: 'Il y a deux temps : le temps spatialisé (objectif, de la physique) et la durée (subjective, vécue). La durée est la réalité concrète.'
          },
          {
            philosopher: 'Einstein',
            position: 'Le temps est relatif, pas absolu. Il dépend du référentiel de l\'observateur. Confirme que le temps n\'est pas une chose absolue.'
          }
        ]
      },
      {
        issue: 'Quelle est la structure du temps vécu ?',
        positions: [
          {
            philosopher: 'Augustin',
            position: 'Les trois temps sont dans l\'âme : présent des choses passées (mémoire), présent des choses présentes (attention), présent des choses futures (attente).'
          },
          {
            philosopher: 'Husserl',
            position: 'Chaque présent est constitué par rétention (conscience du passé immédiat) et protension (attente de l\'avenir immédiat). Flux de conscience.'
          },
          {
            philosopher: 'Heidegger',
            position: 'Le temps originaire est ek-statique : j\'ai été (passé), je viens vers (avenir), je suis présent (présent). Le temps est structure de l\'existence.'
          },
          {
            philosopher: 'Bergson',
            position: 'La durée est continuité pure où les moments se pénètrent. C\'est une multiplicité qualitative, pas quantitative.'
          }
        ]
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Temps cosmologique (Aristote)',
      description: 'Pour Aristote, le temps est « nombre du mouvement selon l\'avant et l\'après ». Il n\'existe pas indépendamment du mouvement : là où il y a changement, il y a temps. Le temps est continu comme le mouvement qu\'il mesure. Cette conception physique du temps prédomine jusqu\'à Newton qui le conçoit comme conteneur absolu.',
      philosophicalContext: 'Cette conception lie le temps au changement. Pour Aristote, pas de mouvement = pas de temps. Cette relation temps/mouvement structure toute la physique classique.'
    },
    {
      title: 'Temps comme forme a priori (Kant)',
      description: 'Dans la Critique de la raison pure, Kant soutient que le temps n\'est pas une propriété des choses en soi mais une forme a priori de notre sensibilité. Le temps est la condition subjective de toute expérience interne et externe : nous percevons tout dans le temps, mais ce n\'est pas une chose qui existe en dehors de nous. Le temps est « la forme de l\'intuition interne ».'
    },
    {
      title: 'Durée vs temps spatialisé (Bergson)',
      description: 'Bergson distingue le temps spatialisé (temps de la physique, divisé en instants points, mesurable) et la durée (temps vécu, continu, indivisible). La durée est la texture même de la conscience : mes moments se pénètrent, se fondent en une continuité indivisible. La physique spatialise le temps pour le mesurer, mais perd ainsi sa véritable nature qualitative.'
    },
    {
      title: 'Temps originaire (Heidegger)',
      description: 'Dans Être et Temps, Heidegger distingue le temps vulgaire (temps de la chronologie, succession linéaire de maintenants) du temps originaire (temps de l\'existence). L\'être-là est temporel de manière fondamentale : il est « jeté » (passé), « projeté » (avenir), « tombé » dans le présent. Le temps originaire est extatique : nous sommes hors de nous vers l\'avenir, enracinés dans le passé, absorbés par le présent.'
    },
    {
      title: 'Temps de la conscience (Husserl)',
      description: 'Husserl analyse la conscience du temps dans les Leçons sur la conscience intime du temps. Chaque présent est constitué par une rétention (conscience du passé immédiat) et une protension (attente de l\'avenir immédiat). La continuité de la conscience est ce flux où les impressions s\'enchaînent sans solution de continuité, formant la synthèse du temps.'
    },
    {
      title: 'Temps et éternité',
      description: 'L\'opposition temps/éternité est centrale dans la philosophie religieuse. Pour Boèce, l\'éternité est « possession totale et parfaite d\'une vie interminable » : elle n\'est pas temps infini mais simultanéité totale. Pour Plotin, l\'éternité est la vie de l\'intelligible, sans changement. Pour Hegel, l\'éternité est le temps devenu lui-même, la reconciliation de l\'être et du devenir.'
    },
    {
      title: 'Temps et devenir',
      description: 'Le temps est inséparable du devenir : là où il y a temps, il y a changement. Pour Héraclite, « tout s\'écoule » : rien ne reste identique, tout devient. Pour Parménide, le devenir est illusion car l\'être est immobile. Platon tente de concilier : le monde sensible est devenir (temps), le monde des Idées est éternité (hors temps). Le temps est « image mobile de l\'éternité » (Timée).'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Analyse du temps originaire comme structure de l\'existence et horizon de compréhension de l\'être' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Le temps comme forme a priori de la sensibilité' },
    { name: 'Henri Bergson', period: '1859-1941', contribution: 'Distinction entre durée (temps vécu) et temps spatialisé de la physique' },
    { name: 'Saint Augustin', period: '354-430', contribution: 'Première analyse phénoménologique du temps dans les Confessions' },
    { name: 'Edmund Husserl', period: '1859-1938', contribution: 'Analyse de la conscience du temps et de la structure rétention/protension' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Définition du temps comme nombre du mouvement' },
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Le temps comme « image mobile de l\'éternité »' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le paradoxe d\'Augustin : « Qu\'est-ce que le temps ? Si personne ne me le demande, je le sais. Si je veux l\'expliquer à quelqu\'un qui me pose la question, je ne le sais plus. » Le passé n\'est plus, l\'avenir n\'est pas encore, le présent n\'est qu\'un point sans dimension. Comment mesurer le temps si aucun des trois temps n\'est réellement ?',
    'L\'heure qui dure : Une heure de plaisir passe vite, une heure d\'ennui dure éternellement. Bergson souligne que le temps vécu est qualitatif, pas quantitatif : notre conscience du temps dépend de ce qui le remplit. La physique mesure uniformément ce qui est vécu intensément ou extensément.',
    'La mélodie : Pour comprendre une mélodie, il faut entendre les notes précédentes en mémoire et anticiper les suivantes. Husserl analyse cette structure de rétention (souvenir immédiat) et protention (attente immédiate) qui constitue chaque présent comme continuité vivante.',
    'Le projet de vie : Heidegger montre que nous sommes projetés vers l\'avenir. L\'être-là se comprend à partir de ses possibilités, du « pouvoir-être » qui l\'attend. Le passé n\'est pas derrière moi mais m\'accompagne comme ce que je suis (être-jeté). L\'avenir n\'est pas devant moi mais me tire vers lui.',
    'L\'éternité divine : Pour Boèce, Dieu voit tout dans un présent éternel : passé, présent, avenir sont simultanés pour lui. Il n\'attend pas l\'avenir, ne se souvient pas du passé, mais contemple tout dans l\'éternité. L\'éternité n\'est pas temps infini mais vie totale et simultanée.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Analyse du temps originaire comme structure de l\'existence',
      quotes: [
        'Le temps est l\'horizon de toute compréhension de l\'être.',
        'L\'être-là est jeté dans un temps qu\'il doit assumer.',
        'Le temps originaire est extatique.',
        'Le futur est le phénomène primaire du temps.',
        'L\'avoir-été est le passé en tant qu\'il est encore là.',
        'Le présent est le moment de l\'action.',
        'Le temps vulgaire est la chute du temps originaire.'
      ]
    },
    {
      title: 'Critique de la raison pure',
      author: 'Immanuel Kant',
      year: 1781,
      type: 'BOOK' as const,
      reference: 'Esthétique transcendantale sur le temps comme forme a priori',
      quotes: [
        'Le temps est la forme de l\'intuition interne.',
        'Le temps n\'est pas quelque chose qui existe en soi.',
        'Le temps est la condition subjective de toute expérience.',
        'Le temps est une représentation a priori nécessaire.',
        'Le temps est infini dans le sens d\'une quantité donnée.',
        'Le temps a une dimension : le sens inverse du temps est impossible.'
      ]
    },
    {
      title: 'Essai sur les données immédiates de la conscience',
      author: 'Henri Bergson',
      year: 1889,
      type: 'BOOK' as const,
      reference: 'Distinction entre durée vécue et temps spatialisé',
      quotes: [
        'La durée est la continuation de ce qui ne change pas de nature.',
        'Le temps spatialisé est le temps de la physique.',
        'La conscience est un devenir qui se sent soi-même.',
        'Le moi qui dure est différent du moi qui spatialise.',
        'Le temps est invention ou il n\'est rien du tout.',
        'L\'élan vital est durée créatrice.'
      ]
    },
    {
      title: 'Confessions',
      author: 'Saint Augustin',
      year: 397,
      type: 'BOOK' as const,
      reference: 'Livre XI - Première analyse philosophique du temps',
      quotes: [
        'Qu\'est-ce que le temps ? Si personne ne me le demande, je le sais.',
        'Il y a trois temps : le présent des choses passées, le présent des choses présentes, le présent des choses futures.',
        'Le passé n\'est plus, l\'avenir n\'est pas encore.',
        'Mon âme brûle de résoudre cette énigme.',
        'Le temps est une distension de l\'âme.',
        'Le présent n\'a pas d\'espace, mais c\'est dans le présent que se fait le temps.'
      ]
    },
    {
      title: 'Leçons pour une phénoménologie de la conscience intime du temps',
      author: 'Edmund Husserl',
      year: 1905,
      type: 'BOOK' as const,
      reference: 'Analyse de la structure temporelle de la conscience',
      quotes: [
        'La conscience du temps est la conscience de la continuité.',
        'Chaque présent est constitué par rétention et protension.',
        'Le flux de la conscience est conscience du flux.',
        'L\'impression originaire est source de toute conscience du temps.',
        'Le temps est la forme de toute constitution.',
        'La rétention est la conscience du passé immédiat.'
      ]
    },
    {
      title: 'Physique',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Définition du temps comme nombre du mouvement',
      quotes: [
        'Le temps est nombre du mouvement selon l\'avant et l\'après.',
        'Le temps n\'est pas le mouvement mais ce dans quoi le mouvement se compte.',
        'Le temps est partout le même.',
        'Le temps est continu.',
        'Le présent est la limite du passé et de l\'avenir.',
        'Il n\'y a pas de temps sans changement.'
      ]
    },
    {
      title: 'Timée',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Cosmologie platonicienne du temps comme image de l\'éternité',
      quotes: [
        'Le temps est l\'image mobile de l\'éternité.',
        'Le temps a été engendré avec l\'univers.',
        'Le passé et l\'avenir sont des formes du temps.',
        'L\'éternité reste immobile dans l\'unité.',
        'Le ciel a été créé selon le modèle de l\'éternité.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Kant définit-il le temps ?',
      back: 'Pour Kant, le temps n\'est pas une chose en soi ni une propriété des objets, mais une « forme a priori de la sensibilité ». C\'est la condition subjective de toute expérience : nous percevons nécessairement tout dans le temps, mais le temps n\'existe pas indépendamment de notre esprit. Le temps est « la forme de l\'intuition interne ».',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle distinction Bergson fait-il entre durée et temps spatialisé ?',
      back: 'Bergson distingue la durée (temps vécu, qualitatif, indivisible, où les moments se pénètrent) du temps spatialisé (temps de la physique, divisé en instants points, quantitatif et mesurable). La durée est la texture même de la conscience : quand je vis, je ne découpe pas ma vie en instants, je la vis comme continuité indistincte. La science spatialise le temps pour le mesurer mais perd ainsi sa nature véritable.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Heidegger distingue-t-il temps originaire et temps vulgaire ?',
      back: 'Le temps vulgaire est le temps de la chronologie : succession linéaire de maintenants (t1, t2, t3...), mesurable, objectivable. Le temps originaire est le temps de l\'existence : extatique, je suis hors de moi vers l\'avenir (projection), enraciné dans mon passé (être-jeté), absorbé par le présent (chute). Le temps originaire est la source du temps vulgaire, non l\'inverse.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quel paradoxe Augustin soulève-t-il sur le temps ?',
      back: 'Augustin formule le paradoxe : le passé n\'est plus, l\'avenir n\'est pas encore, le présent n\'est qu\'un point sans dimension. Comment le temps peut-il exister si aucun des trois temps n\'existe vraiment ? Sa solution : les trois temps sont dans l\'âme - présent des choses passées (mémoire), présent des choses présentes (attention), présent des choses futures (attente). Le temps est « distension de l\'âme ».',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Husserl analyse-t-il la conscience du temps ?',
      back: 'Husserl montre que chaque présent vécu est constitué par une double structure : la rétention (conscience immédiate de ce qui vient de passer) et la protension (attente immédiate de ce qui va arriver). Pour entendre une mélodie comme mélodie, je dois retenir la note précédente et anticiper la suivante. Cette structure de continuité est ce que Husserl appelle « flux de la conscience ».',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Platon définit le temps ?',
      back: '« Le temps est l\'image mobile de l\'éternité » (Timée, IVe siècle av. J.-C.)',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation d\'Augustin exprime le paradoxe du temps ?',
      back: '« Qu\'est-ce que le temps ? Si personne ne me le demande, je le sais. Si je veux l\'expliquer à quelqu\'un qui me pose la question, je ne le sais plus. » (Confessions, 397)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Bergson, la {{durée}} est le temps vécu, par opposition au temps {{spatialisé}} de la physique.',
      back: 'durée | spatialisé',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le temps est-il une propriété des choses ou une structure de la conscience ?',
      back: 'Cette question divise philosophie et physique. Pour Newton, le temps est un conteneur absolu qui existe indépendamment des choses. Pour Kant, le temps est une forme a priori de notre sensibilité : il n\'est pas dans les choses mais dans notre manière de percevoir. Pour Bergson, il y a deux temps : le temps spatialisé (abstraction scientifique) et la durée (réalité vécue de la conscience). Pour Heidegger, le temps est une structure de l\'existence : nous ne sommes pas dans le temps, nous sommes temporels. La question reste ouverte mais engage toute notre compréhension de la réalité : si le temps est subjectif, comment la physique peut-elle l\'objectiver ? S\'il est objectif, comment comprendre la variabilité de son vécu ?',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['temps', 'durée', 'kant', 'bergson', 'heidegger', 'augustin', 'husserl', 'éternité', 'devenir', 'conscience', 'phénoménologie']
};
