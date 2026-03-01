/*
  Mort - Concept Data
  Finitude de l'existence, limite temporelle, horizon de la vie
*/
export const concept = {
  // ===== IDENTITÉ =====
  id: 'mort',
  name: 'Mort',
  slug: 'mort',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: `La mort est la fin de la vie, la cessation des fonctions vitales, la séparation définitive de l'âme et du corps (dualisme) ou la dissolution de la personne (matérialisme). La philosophie distingue plusieurs approches : la mort biologique (arrêt irréversible des fonctions vitales) ; la mort métaphysique (fin de l'existence personnelle) ; la mort comme finitude (Heidegger : être-pour-la-mort) ; la mort comme passage (immortalité de l'âme, résurrection). Pour Épicure, la mort n'est rien pour nous : " tant que nous sommes, la mort n'est pas là ; quand la mort est là, nous ne sommes plus ". Pour Heidegger, l'être-pour-la-mort est la structure fondamentale de l'existence : c'est en anticipant ma mort que je deviens authentique. Pour Platon, la mort est séparation de l'âme et du corps, libération de l'âme emprisonnée. La mort donne son sens à la vie : c'est la finitude qui rend précieux chaque instant.`,
  shortDefinition: 'Fin de la vie et finitude de l\'existence, horizon de la vie humaine',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'mors, mortis',
    greek: 'thanatos (θάνατος)',
    sanskrit: 'mara',
    root: 'mer- (mourir, disparaître) : racine indo-européenne',
    notes: 'Thanatos est personnifié comme une divinité ; le terme est lié à la cessation, à la fin, à la rupture'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    // Perspectives par école philosophique
    perspectives: [
      {
        school: 'Métaphysique',
        philosopher: 'Platon',
        thesis: 'La mort est séparation de l\'âme immortelle et du corps mortel',
        argument: 'L\'âme est principe de vie, or ce qui est principe de vie ne peut pas participer à la mort. L\'âme est simple, indivisible, comme les Formes intelligibles. Le corps est composé, divisible, mortel. La mort est libération de l\'âme emprisonnée dans le corps. La philosophie est "préparation à la mort", exercice de détachement du corps.',
        conclusion: 'La mort comme passage, libération de l\'âme vers le monde des Idées'
      },
      {
        school: 'Existentialisme',
        philosopher: 'Martin Heidegger',
        thesis: 'La mort est structure fondamentale de l\'existence (être-pour-la-mort)',
        argument: 'L\'être-là est fondamentalement être-pour-la-mort. Ma mort est la possibilité la plus propre (je dois mourir ma mort), la plus indépassable (personne ne peut mourir à ma place), la plus certaine (je mourrai) mais indéterminée (n\'importe quand). Anticiper cette possibilité m\'arrache à l\'inauthenticité du "on" et me révèle mon authenticité.',
        conclusion: 'La mort comme horizon de finitude qui donne sens à l\'existence'
      },
      {
        school: 'Matérialisme',
        philosopher: 'Épicure',
        thesis: 'La mort est néant, fin définitive, absence de sensation',
        argument: '"La mort n\'est rien pour nous car tant que nous sommes, la mort n\'est pas là ; quand la mort est là, nous ne sommes plus". La mort est absence de sensation, or ce qui n\'est pas senti n\'est rien pour nous. La peur de la mort est irrationnelle. La mort est comme le temps avant la naissance : nous n\'y étions pas et cela ne nous dérangeait pas.',
        conclusion: 'La mort comme néant, sans sujet pour l\'expérimenter'
      }
    ],
    principalArguments: [
      {
        argument: 'Argument de la mort comme néant (Épicure)',
        explanation: `La mort n'est rien pour nous car quand nous sommes, la mort n'est pas là, et quand la mort est là, nous ne sommes plus. Il n'y a pas de sujet pour expérimenter la mort. La peur de la mort est irrationnelle.`,
        premises: ['La mort est absence de sensation', 'Ce qui n\'est pas senti n\'est rien pour nous', 'Quand nous vivons, la mort n\'est pas présente', 'Quand la mort est présente, nous ne sommes plus', 'Donc nous n\'expérimentons jamais la mort'],
        conclusion: 'La mort n\'est rien pour nous, il est irrationnel de la craindre'
      },
      {
        argument: 'Argument de l\'être-pour-la-mort (Heidegger)',
        explanation: `L'être-là est fondamentalement être-pour-la-mort : sa mort est la possibilité la plus propre, la plus indépassable, la plus certaine. Anticiper cette possibilité nous arrache à l'inauthenticité du "on" et nous révèle notre authenticité.`,
        premises: ['Chacun doit mourir sa propre mort (elle est intransmissible)', 'La mort est la possibilité la plus indépassable', 'La mort est certaine mais indéterminée (n\'importe quand)', 'Anticiper ma mort me révèle comme être fini', 'Cette anticipation m\'arrache à l\'inauthenticité'],
        conclusion: 'L\'être-pour-la-mort est la structure fondamentale de l\'existence authentique'
      },
      {
        argument: 'Argument de l\'immortalité de l\'âme (Platon)',
        explanation: `L'âme est simple, immortelle, intelligible. Le corps est composé, mortel, sensible. La mort est libération de l'âme emprisonnée dans le corps. Le philosophe s'exerce à mourir toute sa vie (Phédon).`,
        premises: ['L\'âme est principe de vie', 'Ce qui est principe de vie ne peut pas participer à la mort', 'L\'âme est simple, indivisible', 'Le corps est composé, divisible', 'Donc l\'âme est immortelle, le corps mortel'],
        conclusion: 'La mort est séparation de l\'âme (immortelle) et du corps (mortel)'
      },
      {
        argument: 'Argument de la mort comme horizon de sens',
        explanation: `Si la vie était infinie, elle n'aurait pas de sens car chaque moment ne serait pas unique. La finitude donne de la valeur à chaque instant. La mort est ce qui rend la vie précieuse.`,
        premises: ['Ce qui est illimité n\'a pas de valeur', 'La vie finie est composée de moments uniques', 'La mort est la limite qui donne sa forme à la vie', 'Sans mort, la vie serait indifférente, sans urgence'],
        conclusion: 'La mort donne son sens à la vie comme horizon de finitude'
      }
    ],
    objections: [
      {
        objection: 'Objection matérialiste',
        content: `La mort est fin définitive. Pas d'âme immortelle, pas d'après-vie. La conscience cesse avec le cerveau. La mort est retour au néant d'avant la naissance.`,
        response: 'Cela ne prouve pas que la peur de la mort est irrationnelle. Si la mort est néant, c\'est précisément ce qui est effrayant : disparition totale de tout ce que nous aimons.'
      },
      {
        objection: 'Objection du paradoxe de la préexistence',
        content: `Pourquoi ne pas craindre le néant d'avant la naissance si l'on craint celui d'après la mort ? Ils sont identiques.`,
        response: 'La différence est qu\'après la mort, nous avons des attachements, des projets, des êtres aimés qui continueront. Avant la naissance, nous n\'existions pas, donc rien à perdre.'
      },
      {
        objection: 'Objection optimiste',
        content: 'La peur de la mort peut être surmontée par la foi (immortalité), l\'hédonisme (jouir du présent), ou le devoir (laisser quelque chose après soi).',
        response: 'Ces réponses sont des formes de déni ou d\'acceptation, pas des réfutations de l\'argument. La question de l\'authenticité face à la mort reste.'
      }
    ],
    distinctions: [
      {
        distinction: 'Mort biologique vs Mort métaphysique',
        explanation: 'La mort biologique est arrêt irréversible des fonctions vitales. La mort métaphysique est fin de l\'existence personnelle, disparition de la conscience. Elles peuvent coïncider mais pas toujours (état végétatif, coma).'
      },
      {
        distinction: 'Mort comme fin vs Mort comme passage',
        explanation: 'Pour les matérialistes, la mort est fin définitive. Pour les religieux, la mort est passage vers une autre forme d\'existence (immortalité, résurrection, réincarnation).'
      },
      {
        distinction: 'Mort propre vs Mort d\'autrui',
        explanation: 'Ma mort est anticipation (je sais que je vais mourir). La mort d\'autrui est expérience de deuil, perte, absence. Elles sont vécues très différemment.'
      },
      {
        distinction: 'Mort authentique vs Mort inauthentique',
        explanation: 'Pour Heidegger, la mort authentique est anticipation de ma propre mort comme possibilité. La mort inauthentique est fuite dans le "on" : on meurt tous, pas moi maintenant.'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      concept: 'vie',
      relationship: 'La mort est fin de la vie, mais la vie est aussi être-pour-la-mort. La mort donne son sens à la vie comme finitude.',
      bidirectional: true
    },
    {
      concept: 'éternité',
      relationship: 'L\'éternité s\'oppose à la mort comme vie sans fin à vie finie. Mais l\'éternité peut aussi être vie hors temps (simultanéité).',
      bidirectional: false
    },
    {
      concept: 'fini',
      relationship: 'La mort est l\'expression de la finitude humaine. L\'homme est un être fini, limité, mortel.',
      bidirectional: true
    },
    {
      concept: 'angoisse',
      relationship: 'L\'angoisse est conscience de la mort comme possibilité. Kierkegaard : angoisse devant le néant. Heidegger : angoisse de l\'être-pour-la-mort.',
      bidirectional: true
    },
    {
      concept: 'immortalité',
      relationship: 'L\'immortalité est négation de la mort comme fin : soit survie de l\'âme, soit résurrection, soit mémoire posthume.',
      bidirectional: false
    },
    {
      concept: 'corps',
      relationship: 'La mort est dissolution du corps (matérialisme) ou séparation âme/corps (dualisme). Le cadavre est reste du corps.',
      bidirectional: true
    },
    {
      concept: 'sens',
      relationship: 'La mort donne son sens à la vie. Sans mort, la vie serait indéfinie et chaque moment non unique. La finitude crée la valeur.',
      bidirectional: true
    },
    {
      concept: 'authenticité',
      relationship: 'Pour Heidegger, l\'authenticité vient de l\'anticipation de sa propre mort. L\'inauthentique fuit la mort dans le "on',
      bidirectional: true
    },
    {
      concept: 'naissance',
      relationship: 'La mort est l\'horizon de la vie comme la naissance en est le seuil. Naissance et mort délimitent l\'existence finie.',
      bidirectional: true
    },
    {
      concept: 'absurde',
      relationship: 'La mort rend la vie absurde car elle annule tous les projets. Pour Camus, la mort est l\'absurde ultime.',
      bidirectional: true
    },
    {
      concept: 'destin',
      relationship: 'La mort est le destin ultime de tout homme. Chacun a sa mort à mourir, comme sa destinée.',
      bidirectional: true
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Épicurisme',
      description: 'La mort n\'est rien pour nous. Il est irrationnel de la craindre.',
      keyFigures: ['Épicure', 'Lucrèce']
    },
    {
      movement: 'Stoïcisme',
      description: 'La mort est naturelle, pas un mal. Il faut l\'accepter avec courage.',
      keyFigures: ['Sénèque', 'Marc Aurèle', 'Épictète']
    },
    {
      movement: 'Platonisme',
      description: 'L\'âme est immortelle. La mort est libération de l\'âme du corps.',
      keyFigures: ['Platon']
    },
    {
      movement: 'Existentialisme',
      description: 'La mort est structure fondamentale de l\'existence. Être-pour-la-mort (Heidegger).',
      keyFigures: ['Heidegger', 'Sartre', 'Camus']
    },
    {
      movement: 'Christianisme',
      description: 'La mort est passage, résurrection, vie éternelle. La mort vaincue par le Christ.',
      keyFigures: ['Saint Augustin', 'Thomas d\'Aquin', 'Kierkegaard']
    },
    {
      movement: 'Bouddhisme',
      description: 'La mort est illusion, passage dans le cycle des réincarnations (samsara). Le nirvana est libération.',
      keyFigures: ['Bouddha', 'Nagarjuna']
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: [
      {
        period: 'Antiquité grecque',
        description: `Platon : immortalité de l'âme, la mort comme libération. Aristote : mort comme fin de la forme substantielle. Épicure : la mort n'est rien pour nous. Stoïciens : acceptation courageuse de la mort.`
      },
      {
        period: 'Antiquité romaine',
        description: 'Sénèque : la mort est fin, pas transition. Marc Aurèle : accepter la mort comme naturelle. Lucrèce : matérialisme, mort comme néant.'
      },
      {
        period: 'Moyen Âge chrétien',
        description: 'Saint Augustin : mort comme conséquence du péché, mais aussi passage à la vie éternelle. Thomas d\'Aquin : immortalité de l\'âme, résurrection des corps. La mort vaincue par le Christ.'
      },
      {
        period: 'Moderne (XVIIe-XVIIIe)',
        description: 'Descartes : immortalité de l\'âme prouvée par la pensée. Spinoza : mort comme absorption dans la substance infinie. Pascal : la mort comme horizon qui donne du sens à la vie.'
      },
      {
        period: 'XIXe siècle',
        description: 'Schopenhauer : la mort comme illusion, volonté de vivre. Nietzsche : mort acceptée, amour du destin. Kierkegaard : angoisse de la mort et saut de la foi.'
      },
      {
        period: 'XXe siècle',
        description: 'Heidegger : être-pour-la-mort comme structure de l\'existence. Sartre : mort comme limite de la liberté. Camus : mort comme absurde. Levinas : mort comme passivité totale. Freud : pulsion de mort (Thanatos).'
      },
      {
        period: 'XXIe siècle',
        description: 'Question de la mort clinique (coma, état végétatif). Débat sur l\'euthanasie. Mort biologique vs mort cérébrale. IA et mort numérique (survivance en ligne).'
      }
    ],
    debates: [
      {
        title: 'La mort est-elle fin ou passage ?',
        positions: [
          'Matérialisme : la mort est fin définitive. Pas d\'âme, pas d\'après-vie. La conscience cesse avec le cerveau.',
          'Dualisme : l\'âme survit à la mort du corps. Immortalité ou résurrection.',
          'Bouddhisme : la mort est illusion, passage dans le cycle des réincarnations (samsara).'
        ]
      },
      {
        title: 'Faut-il craindre la mort ?',
        positions: [
          'Épicure : non, la mort n\'est rien pour nous. Quand elle est là, nous ne sommes plus.',
          'Platon : oui, le corps craint la mort, mais l\'âme du philosophe l\'attend comme libération.',
          'Heidegger : l\'angoisse devant la mort est structurelle, mais nous la fuyons dans l\'inauthenticité.',
          'Stoïcisme : ne pas craindre, mais accepter courageusement ce qui est naturel.'
        ]
      },
      {
        title: 'La mort donne-t-elle son sens à la vie ?',
        positions: [
          'Oui : la finitude rend chaque moment précieux. Sans mort, la vie serait indéfinie et sans valeur.',
          'Non : le sens de la vie vient de ce qu\'on en fait, pas de sa finitude. Une vie infinie pourrait avoir du sens.',
          'La mort est condition du sens mais pas le sens lui-même. Le sens se construit dans le temps fini.'
        ]
      }
    ],
    contemporaryIssues: [
      {
        issue: 'Euthanasie et suicide assisté',
        description: 'A-t-on le droit de choisir sa mort ? L\'acharnement thérapeutique est-il une "bonne mort" ? Débat autonomie vs sacré de la vie.'
      },
      {
        issue: 'Mort clinique et état végétatif',
        description: 'Quand est-ce qu\'une personne est vraiment morte ? Mort cardiaque, mort cérébrale, perte de conscience ? Enjeux éthiques pour le prélèvement d\'organes.'
      },
      {
        issue: 'Deuil et mémoire numérique',
        description: 'Les réseaux sociaux créent une "survivance numérique". Les profils persistent après la mort. Comment faire son deuil dans un monde numérique ?'
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'La mort n\'est rien pour nous (Épicure)',
      description: `Épicure soutient que la peur de la mort est irrationnelle car " tant que nous sommes, la mort n'est pas là ; quand la mort est là, nous ne sommes plus ". La mort est absence de sensation, et ce qui n'est pas senti n'est rien pour nous. La mort est comme le temps avant notre naissance : nous n'y étions pas et cela ne nous dérangeait pas. Pour Lucrèce, craindre la mort est aussi absurde que craindre le passé.`,
      philosophicalContext: 'Cette conception matérialiste vise à libérer l\'homme de l\'angoisse de la mort. Si la mort est néant, elle n\'est pas un mal. Le seul mal est la peur de la mort.'
    },
    {
      title: 'Être-pour-la-mort (Heidegger)',
      description: `Dans Être et Temps, Heidegger montre que l'être-là est fondamentalement "être-pour-la-mort". Ma mort est la possibilité la plus propre (je dois mourir ma mort), la plus indépassable (personne ne peut mourir à ma place), la plus certaine (je mourrai) mais aussi la plus indéterminée (n'importe quand). Cette anticipation de ma mort m'arrache à l'inauthenticité du "on" (où l'on meurt tous, pas moi) et me révèle mon authenticité. L'être-pour-la-mort est la structure fondamentale de l'existence.`,
      philosophicalContext: 'Cette analyse transforme la mort de fin redoutée en structure qui donne son sens à l\'existence. C\'est en anticipant ma mort que je deviens qui je suis.'
    },
    {
      title: 'Immortalité de l\'âme (Platon)',
      description: `Dans le Phédon, Platon argumente pour l'immortalité de l'âme. L'âme est principe de vie, or ce qui est principe de vie ne peut pas participer à la mort (le contraire de la vie). L'âme est simple, indivisible, comme les Formes intelligibles. Le corps est composé, divisible, mortel. La mort est séparation de l'âme et du corps : l'âme libérée retourne vers le monde des Idées. La philosophie est une "préparation à la mort", un exercice de détachement du corps.`,
      philosophicalContext: 'Cette conception dualiste fonde l\'espérance religieuse en une survie après la mort. La mort n\'est pas fin mais libération, passage vers une meilleure vie.'
    },
    {
      title: 'Mort et résurrection (Christianisme)',
      description: `Le christianisme transforme la conception de la mort. Pour Saint Paul, la mort est conséquence du péché ("le salaire du péché, c'est la mort"). Mais le Christ a vaincu la mort par sa résurrection. La mort chrétienne est passage (pâque) vers la vie éternelle, pas fin. La résurrection des corps à la fin des temps achèvera cette victoire sur la mort. La mort physique reste, mais la mort spirituelle (séparation d'avec Dieu) est vaincue.`,
      philosophicalContext: 'Cette conception espérante change le rapport à la mort : elle n\'est plus anéantissement mais promesse, non pas fin mais commencement.'
    },
    {
      title: 'Pulsion de mort (Freud)',
      description: `Freud postule l'existence d'une pulsion de mort (Thanatos) qui s'oppose à la pulsion de vie (Éros). La pulsion de mort pousse à retourner à l'état inorganique, au repos absolu, à la non-tension. Elle se manifeste dans la répétition compulsive, l'auto-destruction, l'agressivité. La mort n'est pas seulement une fin extérieure mais une pulsion interne vers le néant.`,
      philosophicalContext: 'Cette psychanalyse révèle que la mort n\'est pas seulement événement extérieur mais force interne au psychisme. Nous portons en nous une tendance à notre propre destruction.'
    },
    {
      title: 'Mort et absurdité (Camus)',
      description: `Camus analyse dans Le Mythe de Sisyphe l'absurde né de la confrontation entre le désir humain de sens et le silence du monde. La mort est l'absurde ultime : elle rend toute vaine, annule tous les projets, rend la condition humaine "sans espoir". Pourtant, Sisyphe heureux accepte son sort sans espoir de salut. La révolte face à la mort est l'honneur de l'homme.`,
      philosophicalContext: 'Cette conception existentialiste refuse l\'espoir religieux comme "suicide philosophique". L\'authenticité est d\'accepter la mort comme fin sans espoir d\'au-delà.'
    },
    {
      title: 'Mort biologique vs mort de la personne',
      description: 'La distinction entre mort biologique (arrêt des fonctions vitales) et mort de la personne (disparition de la conscience, de l\'identité) est cruciale pour l\'éthique médicale. Un patient en état végétatif peut être biologiquement vivant mais sa personne est-elle encore là ? Les critères de la mort clinique (mort cardiaque vs mort cérébrale) ont des implications concrètes pour l\'acharnement thérapeutique et le prélèvement d\'organes.',
      philosophicalContext: 'Cette question contemporaine révèle que "mourir" n\'est pas un événement simple mais un processus, avec des enjeux éthiques majeurs.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Analyse de l\'être-pour-la-mort comme structure fondamentale de l\'existence' },
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Théorie de l\'immortalité de l\'âme et de la mort comme libération' },
    { name: 'Épicure', period: '341-270 av. J.-C.', contribution: 'Thèse que la mort n\'est rien pour nous, pas de raison de la craindre' },
    { name: 'Sigmund Freud', period: '1856-1939', contribution: 'Théorie de la pulsion de mort comme force interne vers le néant' },
    { name: 'Albert Camus', period: '1913-1960', contribution: 'Analyse de la mort comme absurdité et condition de l\'absurde' },
    { name: 'Sénèque', period: '4 av. J.-C.-65 ap. J.-C.', contribution: 'Stoïcisme romain sur l\'acceptation courageuse de la mort' },
    { name: 'Arthur Schopenhauer', period: '1788-1860', contribution: 'La mort comme illusion, retour de la volonté de vivre' },
    { name: 'Blaise Pascal', period: '1623-1662', contribution: 'La mort comme horizon qui donne son sens à la vie humaine' },
    { name: 'Emmanuel Levinas', period: '1906-1995', contribution: 'La mort comme passivité totale et responsabilité pour l\'autre' }
  ],

  // ===== EXEMPLES =====
  examples: [
    `Le mythe d'Er le Pamphylien (Platon, La République) : Un guerrier mort revient à la vie et raconte l'au-delà. Les âmes choisissent leur prochaine incarnation. Ce mythe illustre la thèse de l'immortalité de l'âme et la responsabilité de nos choix. La vie présente détermine la vie future.`,
    `Socrate face à la mort (Platon, Phédon) : Condamné à mort, Socrate passe ses derniers moments à discuter de l'immortalité de l'âme avec ses amis. Il boit la ciguë sans crainte, considérant la mort comme libération de l'âme emprisonnée. Le philosophe s'exerce à mourir toute sa vie.`,
    `L'heure de la mort (Heidegger) : Imaginez que vous appreniez que vous allez mourir dans une heure. Comment vivriez-vous cette dernière heure ? Cette expérience de pensée révèle ce qui compte vraiment. Pour Heidegger, l'anticipation de la mort est ce qui nous arrache à l'inauthenticité et nous révèle à nous-mêmes.`,
    `Le patient en état végétatif : Un patient est en coma depuis des années, respirant artificiellement. Ses fonctions cérébrales supérieures ont cessé, mais son corps est vivant. Est-il mort ou vivant ? Cette question médicale révèle la distinction entre mort biologique et mort de la personne, avec des enjeux éthiques majeurs pour l'acharnement thérapeutique.`,
    'Le deuil numérique : Après la mort d\'un proche, son profil Facebook reste actif. Des amis lui écrivent des messages, laissent des commentaires. Le défunt "survit" numériquement. Comment faire son deuil dans un monde numérique ? La mort n\'est plus absence totale mais présence persistante en ligne.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Analyse de l\'être-pour-la-mort comme structure fondamentale de l\'existence',
      quotes: [
        'Si je dois mourir, je dois mourir ma mort.',
        'La mort est la possibilité la plus propre, la plus indépassable.',
        'L\'être-pour-la-mort est l\'être de l\'être-là.',
        'Le "on" meurt, pas moi.',
        'L\'angoisse révèle la mort.',
        'La mort est l\'horizon de toute projection.'
      ]
    },
    {
      title: 'Phédon',
      author: 'Platon',
      year: -300,
      type: 'BOOK' as const,
      reference: 'Argument pour l\'immortalité de l\'âme et récit de la mort de Socrate',
      quotes: [
        'La mort est séparation de l\'âme et du corps.',
        'L\'âme est semblable au divin, immortel, intelligible.',
        'Le philosophe s\'exerce à mourir toute sa vie.',
        'Ce qui est principe de vie ne peut pas participer à la mort.',
        'L\'âme est immortelle et indestructible.',
        'La mort est libération de l\'âme.'
      ]
    },
    {
      title: 'Lettre à Ménécée',
      author: 'Épicure',
      year: -200,
      type: 'ESSAY' as const,
      reference: 'Argument que la mort n\'est rien pour nous',
      quotes: [
        'La mort n\'est rien pour nous.',
        'Tant que nous sommes, la mort n\'est pas là ; quand la mort est là, nous ne sommes plus.',
        'Le plus terrible des maux, la mort, n\'est rien pour nous.',
        'La privation de sensation est néant.',
        'Craindre la mort, c\'est croire que l\'on ressentira quelque chose.',
        'La vie futée n\'est pas recherche de longue vie mais de vie bonne.'
      ]
    },
    {
      title: 'De la brièveté de la vie',
      author: 'Sénèque',
      year: 49,
      type: 'BOOK' as const,
      reference: 'Stoïcisme sur l\'acceptation de la mort et la vie courte',
      quotes: [
        'La vie est longue assez si l\'on sait l\'employer.',
        'Il n\'est pas trop tard d\'être sage.',
        'La mort n\'est ni bien ni mal, mais transition naturelle.',
        'Apprends à mourir et tu apprendras à vivre.',
        'La vie est courte si on la gaspille.',
        'La mort est la fin, non le but.'
      ]
    },
    {
      title: 'Le Mythe de Sisyphe',
      author: 'Albert Camus',
      year: 1942,
      type: 'ESSAY' as const,
      reference: 'Mort comme absurdité et condition de l\'absurde',
      quotes: [
        'Il n\'y a qu\'un problème philosophique vraiment sérieux : c\'est le suicide.',
        'La mort est là pour rendre la vie absurde.',
        'La mort enlève tout sens à la vie.',
        'Sisyphe heureux accepte son sort sans espoir.',
        'La révolte est l\'honneur de l\'homme face à la mort.',
        'L\'absurde naît de cette confrontation entre l\'homme et le silence du monde.'
      ]
    },
    {
      title: 'Deuil et mélancolie',
      author: 'Sigmund Freud',
      year: 1917,
      type: 'ESSAY' as const,
      reference: 'Théorie de la pulsion de mort',
      quotes: [
        'La pulsion de mort pousse au retour à l\'inorganique.',
        'Le but de toute vie est la mort.',
        'L\'organisme veut retourner à l\'état de repos.',
        'Thanatos s\'oppose à Éros.',
        'La répétition est manifestation de la pulsion de mort.',
        'La mort est venue au monde par la vie.'
      ]
    },
    {
      title: 'Pensées',
      author: 'Blaise Pascal',
      year: 1670,
      type: 'BOOK' as const,
      reference: 'La mort comme horizon qui donne du sens à la vie',
      quotes: [
        'Le dernier acte est sanglant, quelque belle que soit la comédie.',
        'La mort est le terme de la vie.',
        'L\'homme est infiniment grand et infiniment petit.',
        'La mort illumine la vie.',
        'La fin des choses et leur principe sont inséparables.',
        'La mort est ce qui donne son sens à la vie finie.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que l\'être-pour-la-mort chez Heidegger ?',
      back: `L'être-pour-la-mort est la structure fondamentale de l'être-là. Ma mort est la possibilité la plus propre (je dois mourir ma mort, elle est intransmissible), la plus indépassable (personne ne peut mourir à ma place), la plus certaine (je mourrai) mais aussi la plus indéterminée (je ne sais quand). Anticiper cette possibilité m'arrache à l'inauthenticité du "on" (où l'on meurt tous, pas moi) et me révèle mon authenticité.`,
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Épicure argumente-t-il que la mort n\'est rien pour nous ?',
      back: `Épicure soutient que "tant que nous sommes, la mort n'est pas là ; quand la mort est là, nous ne sommes plus". La mort est absence de sensation, or ce qui n'est pas senti n'est rien pour nous. Nous n'expérimentons jamais notre mort, soit parce qu'elle n'est pas encore là, soit parce que quand elle arrive, nous ne sommes plus. Donc il est irrationnel de la craindre. Elle est comme le temps avant notre naissance : nous n'y étions pas et cela ne nous dérangeait pas.`,
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Platon prouve-t-il l\'immortalité de l\'âme ?',
      back: `Dans le Phédon, Platon propose plusieurs arguments. Le principal : l'âme est principe de vie, or ce qui est principe de vie ne peut pas participer à la mort (le contraire de la vie). L'âme est simple, indivisible, comme les Formes intelligibles. Le corps est composé, divisible, mortel. La mort est séparation de l'âme et du corps. L'âme libérée retourne vers le monde des Idées. La philosophie est "préparation à la mort" : exercice de détachement du corps pour préparer l'âme à sa libération.`,
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle distinction faut-il faire entre mort biologique et mort de la personne ?',
      back: 'La mort biologique est l\'arrêt irréversible des fonctions vitales (cœur, poumons). La mort de la personne est la disparition de la conscience, de l\'identité personnelle. Un patient en état végétatif peut être biologiquement vivant (son cœur bat) mais sa personne (sa conscience) a disparu. Cette distinction est cruciale pour l\'éthique médicale : quand faut-il arrêter le traitement ? Peut-on prélever des organes ? La mort cérébrale (mort du tronc cérébral) est souvent le critère retenu pour la mort de la personne.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Camus analyse-t-il la mort comme absurdité ?',
      back: `Dans Le Mythe de Sisyphe, Camus montre que l'absurde naît de la confrontation entre le désir humain de sens et le silence du monde. La mort est l'absurde ultime car elle rend tout vain, annule tous les projets, rend la condition humaine "sans espoir". Pourtant, Sisyphe heureux accepte son sort sans espoir de salut. Camus refuse l'espoir religieux comme "suicide philosophique". La révolte face à la mort est l'honneur de l'homme : vivre sans espoir, mais avec dignité.`,
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation d\'Épicure résume sa conception de la mort ?',
      back: '"Tant que nous sommes, la mort n\'est pas là ; quand la mort est là, nous ne sommes plus',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Heidegger définit l\'être-pour-la-mort ?',
      back: '"Si je dois mourir, je dois mourir ma mort',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Heidegger, l\'être-là est fondamentalement {{être-pour-la-mort}}. Pour Épicure, la mort n\'est {{rien pour nous}}.',
      back: 'être-pour-la-mort | rien pour nous',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'La mort donne-t-elle son sens à la vie ?',
      back: `Cette question divise les philosophes. Pour Heidegger, l'être-pour-la-mort est la structure fondamentale de l'existence : c'est en anticipant ma mort que je deviens authentique, que je comprends la valeur de chaque instant. La finitude donne de l'urgence, de la préciosité à la vie. Sans mort, la vie serait indéfinie et chaque moment ne serait pas unique. Pour Camus, la mort est plutôt ce qui enlève tout sens à la vie, ce qui rend tout vain : l'absurde ultime. Pourtant, c'est précisément cette absurdité qui pousse à la révolte et à vivre avec intensité. Pour Platon, la vie est préparation à la mort : le sens de la vie est dans l'au-delà. La mort comme fin ou comme passage change tout le rapport à la vie. Peut-être que la mort ne donne pas son sens à la vie, mais qu'elle est l'horizon qui permet de construire un sens. En tout cas, la conscience de la mort transforme notre rapport au temps : chaque moment compte car il n'y en a pas un nombre infini.`,
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['mort', 'fin', 'fini', 'épucure', 'heidegger', 'platon', 'immortalité', 'âme', 'corps', 'deuil', 'angoisse', 'authenticité', 'éternité', 'sens']
};
