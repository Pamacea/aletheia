/*
  Pour-soi - Concept Data
  La conscience comme néantisation, liberté et absence dessence fixe
*/
export const concept = {
  // ===== IDENTITÉ =====
  id: 'pour-soi',
  name: 'Pour-soi',
  slug: 'pour-soi',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 4,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: "Le pour-soi est la conscience humaine conçue comme néantisation, liberté absolue, absence d'essence fixe. Chez Sartre, le pour-soi s'oppose à l'en-soi (l'être des choses, massif, plein, ce qu'il est). Le pour-soi est ce qu'il n'est pas, n'est pas ce qu'il est : il est projet, liberté, absence. L'en-soi est opaque, inerte, déterminé. Le pour-soi est transparance, néant, liberté. Le pour-soi est être-pour-soi : conscience de soi, mais conscience de soi comme néant, comme manque. L'en-soi est coincidence avec soi, le pour-soi est décalage, distance. Le pour-soi est condamné à être libre : il n'a pas de nature, il doit se choisir, se faire, dans un temps qui le constitue comme projet. Le pour-soi est aussi être-pour-autrui : il existe dans un monde peuplé d'autres consciences qui le regardent, le jugent, le transforment en objet.",
  shortDefinition: "La conscience comme néantisation et liberté, par opposition à l'en-soi",

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'pro se',
    french: 'pour soi',
    root: 'être pour soi, conscience de soi',
    notes: "Le pour-soi s'oppose à l'en-soi (être en soi, chose) et à l'être-pour-autrui"
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: "Argument de la néantisation",
        explanation: "Le pour-soi est néantisation de l'en-soi. La conscience est toujours conscience de quelque chose, mais cette conscience est elle-même néant : elle est ce qui n'est pas son objet. Je ne suis pas la table que je perçois, je ne suis pas mon passé, je ne suis pas mon corps : je suis néant qui se pose.",
        premises: [
          "La conscience est toujours conscience de quelque chose (intentionnalité)",
          "Ce dont j'ai conscience n'est pas ma conscience",
          "Donc ma conscience se pose comme néant par rapport à ce qu'elle vise",
          "Ce néant n'est pas chose mais liberté, pouvoir ne pas être"
        ],
        conclusion: "Le pour-soi est néantisation : il est ce qu'il n'est pas, n'est pas ce qu'il est"
      },
      {
        argument: "Argument de la liberté absolue",
        explanation: "Le pour-soi n'a pas d'essence fixe. Il est d'abord existence (jeté dans le monde) puis se définit par ses choix. Il est condamné à être libre : il ne peut pas ne pas choisir, car ne pas choisir c'est encore choisir.",
        premises: [
          "Il n'y a pas de nature humaine (pas de Dieu pour la concevoir)",
          "L'existence précède l'essence",
          "Le pour-soi est projet, pas chose",
          "Tout choix est affirmation d'une valeur pour tous"
        ],
        conclusion: "Le pour-soi est liberté absolue : il est ce qu'il fait de lui-même"
      },
      {
        argument: "Argument de l'être-pour-autrui",
        explanation: "Le pour-soi est aussi être-pour-autrui : il existe dans un monde où d'autres consciences le regardent. Le regard d'autrui me transforme en objet, me fige, me nie comme sujet. Mais je peux aussi regarder autrui et le transformer en objet.",
        premises: [
          "Je ne suis pas seul au monde",
          "Autrui est conscience comme moi, sujet comme moi",
          "Le regard d'autrui m'apparaît comme transformation en objet",
          "Je peux aussi transformer autrui en objet par mon regard"
        ],
        conclusion: "Le pour-soi est être-pour-autrui : relation conflictuelle où chaque conscience cherche à s'affirmer comme sujet"
      }
    ],
    objections: [
      {
        objection: "Objection de la mauvaise foi",
        content: "Si le pour-soi est liberté absolue, comment expliquer la mauvaise foi ? Comment se mentir à soi-même ? La mauvaise foi présuppose une séparation entre moi et moi qui semble contradictoire.",
        response: "Sartre répond que la mauvaise foi est possible parce que le pour-soi est structurellement divisé : il est à la fois fait (facticité) et liberté (transcendance). Je peux me prendre pour chose, me nier comme liberté."
      },
      {
        objection: "Objection du déterminisme",
        content: "La liberté absolue du pour-soi est une illusion. Nos choix sont déterminés par l'inconscient, la société, la biologie. Comment Sartre peut-il affirmer que nous sommes condamnés à être libres ?",
        response: "Sartre nie le déterminisme psychologique : même si j'ai des pulsions, je suis libre de les assumer ou de me les attribuer (mauvaise foi). La liberté n'est pas indétermination mais capacité de se choisir."
      },
      {
        objection: "Objection du solipsisme",
        content: "Si le pour-soi est pure subjectivité, comment peut-il rencontrer d'autres pour-soi ? Comment sortir de soi pour accéder à autrui ? Le pour-soi risque le solipsisme.",
        response: "Sartre répond qu'autrui m'apparaît comme sujet, pas comme objet. Le regard d'autrui me révèle à moi comme objet : je découvre que je suis vu, donc qu'il y a un autre sujet qui me voit."
      }
    ],
    distinctions: [
      {
        distinction: "Pour-soi vs En-soi",
        explanation: "L'en-soi est l'être des choses : massif, opaque, déterminé, coincidant avec soi. Le pour-soi est la conscience : néant, liberté, projet, absence. L'en-soi est ce qu'il est. Le pour-soi est ce qu'il n'est pas, n'est pas ce qu'il est."
      },
      {
        distinction: "Pour-soi vs Être-pour-autrui",
        explanation: "Le pour-soi est la conscience comme sujet. L'être-pour-autrui est la conscience comme objet pour un autre sujet. Le regard d'autrui me transforme en pour-autrui."
      },
      {
        distinction: "Facticité vs Transcendance",
        explanation: "La facticité est ce qui m'est donné (corps, passé, situation). La transcendance est ma capacité de me projeter au-delà de ce donné. Le pour-soi est synthèse de facticité et de transcendance."
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    { concept: 'en-soi',
      relationship: "L'en-soi est l'être des choses, le pour-soi est la conscience.", bidirectional: true },
    { concept: 'liberté',
      relationship: 'Le pour-soi est liberté absolue, condamné à être libre.', bidirectional: true },
    { concept: 'autrui',
      relationship: 'Le pour-soi est être-pour-autrui, relation conflictuelle.', bidirectional: true },
    { concept: 'regard',
      relationship: "Le regard d'autrui transforme le pour-soi en objet.", bidirectional: true },
    { concept: 'mauvaise foi',
      relationship: 'La mauvaise foi est le pour-soi qui se nie comme liberté.', bidirectional: true }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    { name: 'Existentialisme sartrien', description: 'Le pour-soi comme structure fondamentale de la conscience humaine.', role: 'CONCEPT_CENTRAL', keyFigures: ['Sartre'] }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `Sartre développe le concept de pour-soi dans L'Être et le Néant (1943). Il distingue trois régions ontologiques : l'en-soi (l'être des choses), le pour-soi (la conscience), et l'être-pour-autrui (la relation aux autres).

Le pour-soi est néantisation : il n'est pas une chose mais un néant qui se pose, un manque d'être. Ce manque est manque d'en-soi : le pour-soi cherche à devenir en-soi-pour-soi (Dieu), projet impossible.

Le pour-soi est liberté : il n'a pas d'essence, il est projet, choix, action. Il est "condamné à être libre" : il ne peut pas ne pas choisir.

Le pour-soi est être-pour-autrui : il existe dans un monde peuplé d'autres consciences qui le regardent, le jugent, le transforment en objet. Cette relation est fondamentalement conflictuelle.`
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Pour-soi comme néantisation (Sartre)',
      description: "Le pour-soi est néant qui se pose : il est conscience de quelque chose, et conscience de soi comme néant par rapport à ce qu'il vise.",
      philosophicalContext: 'Cette analyse de la conscience comme néantisation influence toute la phénoménologie existentialiste.'
    },
    {
      title: 'Pour-soi comme liberté absolue',
      description: "Le pour-soi n'a pas d'essence, il est ce qu'il fait de lui-même. Il est condamné à choisir.",
      philosophicalContext: 'Cette conception de la liberté absolue fonde l\'existentialisme sartrien.'
    },
    {
      title: 'Pour-soi comme être-pour-autrui',
      description: "Le pour-soi existe pour autrui : le regard d'autrui le transforme en objet.",
      philosophicalContext: 'Cette analyse de la relation à autrui influence la philosophie du XXe siècle.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: "Analyse du pour-soi dans L'Être et le Néant" },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: "Analyse de l'être-là comme être-jeté et projet" }
  ],

  // ===== EXEMPLES =====
  examples: [
    "Le garçon de café (Sartre) : un garçon de café qui joue son rôle trop parfaitement est en mauvaise foi. Il se prend pour chose, pour garçon de café essence, alors qu'il est pour-soi, liberté.",
    "Le regard sur le keyhole (Sartre) : quand j'épione par un keyhole et qu'on me surprend, je découvre que je suis vu. Je deviens objet pour un sujet. C'est l'apparition d'autrui comme regard qui me transforme.",
    "Le rendez-vous amoureux (Sartre) : quand j'attends quelqu'un qui est en retard, je suis conscience de l'absence. Cette attente révèle ma structure de manque : je suis manque d'être."
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: "L'Être et le Néant",
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: "Analyse du pour-soi, de l'en-soi, et de l'être-pour-autrui",
      quotes: [
        "L'existence précède l'essence.",
        "Nous sommes condamnés à être libres.",
        "Le pour-soi est ce qu'il n'est pas, n'est pas ce qu'il est.",
        "L'en-soi est ce qu'il est.",
        "Le regard d'autrui me transforme en objet.",
        'La mauvaise foi est le pour-soi qui se nie.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: "Quelle est la différence entre l'en-soi et le pour-soi chez Sartre ?",
      back: "L'en-soi est l'être des choses : massif, opaque, déterminé, coincidant avec soi (ce qu'il est). Le pour-soi est la conscience : néant, liberté, projet, absence (ce qu'il n'est pas, n'est pas ce qu'il est). L'en-soi est plein, le pour-soi est néant qui se pose.",
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Pourquoi Sartre dit-il que nous sommes "condamnés à être libres',
      back: "Pour Sartre, le pour-soi n'a pas d'essence prédéterminée (pas de nature humaine). Il est d'abord jeté dans le monde, puis doit se définir par ses choix. Il ne peut pas ne pas choisir, car ne pas choisir c'est encore choisir. Cette liberté est \"condamnation\" parce qu'elle n'est pas choisie : nous sommes libres sans l'avoir choisi, et nous sommes responsables de tout ce que nous faisons. Nous sommes \"condamnés à être libres\" : libres et responsables.",
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Sartre définit le pour-soi ?',
      back: "\"Le pour-soi est ce qu'il n'est pas, n'est pas ce qu'il est\" (L'Être et le Néant, 1943)",
      difficulty: 3
    },
    {
      type: 'ESSAY' as const,
      front: 'Le pour-soi est-il néant ou liberté ?',
      back: "Pour Sartre, le pour-soi est les deux : néant et liberté. Il est néant parce qu'il est conscience de quelque chose, et cette conscience se pose comme néant par rapport à son objet. Je ne suis pas la table que je perçois. Il est liberté parce qu'il n'a pas d'essence fixe : il est projet, choix, action. Ce néant n'est pas vide ou absence : c'est un pouvoir ne pas être, une capacité de se nier, de se dépasser. La liberté du pour-soi n'est pas indétermination (faire n'importe quoi) mais capacité de se choisir, de se faire en situation. Le pour-soi est néantisation : il est manque d'être, et ce manque est ce qui le pousse à agir, à se projeter, à se faire. Sans néant, pas de liberté. Sans liberté, le néant serait passif. Le pour-soi est néant actif, liberté concrète.",
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['pour-soi', 'en-soi', 'sartre', 'liberté', 'conscience', 'autrui', 'regard', 'mauvaise foi', 'néant', 'existence']
};
