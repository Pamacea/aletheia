/**
 * Néant - Concept Data
 * Absence, vide, non-être, concept paradoxal et limite de la pensée
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'neant',
  name: 'Néant',
  slug: 'neant',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 5,
  importance: 4,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le néant est l\'absence, le vide, le non-être. Mais parler du néant est paradoxal : dire "le néant est", c\'est lui attribuer l\'être. Pour Parménide, le néant est impensable. Pour Sartre, le néant est au coeur de la conscience : la conscience est néantisatrice, elle introduit du vide dans l\'être. Pour Heidegger, le néant est le "voile" de l\'être : on ne peut penser l\'être sans le néant.',
  shortDefinition: 'Absence, vide ou non-être, concept paradoxal de la philosophie',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'nihil : ne (pas) + hilum (fil, brin)',
    greek: 'mê on (μὴ ὄν) : non-être',
    root: 'ne- : négation',
    notes: 'Nihil signifie littéralement " pas même un brin " : rien du tout'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: 'Argument de la conscience intentionnelle (Sartre)',
        explanation: 'La conscience est toujours conscience de quelque chose. Elle introduit une distance, un vide, entre elle et le monde. Cette négation, ce néant, est la condition de la liberté. Je ne suis pas identique à ce que je suis.',
        premises: ['La conscience est toujours conscience de quelque chose', 'Cette intentionnalité introduit une distance', 'Cette distance est néantisation du monde', 'Je peux nier ce qui est, imaginer ce qui n\'est pas'],
        conclusion: 'Donc le néant est au coeur de la conscience et de la liberté'
      },
      {
        argument: 'Argument de l\'angoisse (Heidegger)',
        explanation: 'Dans l\'angoisse, tout ce qui nous entoure s\'effondre, il ne reste rien. Cette expérience du néant révèle l\'être-là comme être-pour-la-mort. Le néant n\'est pas rien, il est l\'envers de l\'être.',
        premises: ['L\'angoisse nous arrache à tout', 'Dans l\'angoisse, "ça ne va pas"', 'Tout s\'effondre, il ne reste rien', 'Le néant est le voile de l\'être'],
        conclusion: 'Donc le néant n\'est pas absence pure mais appartient à l\'être'
      },
      {
        argument: 'Argument de l\'impossibilité du néant absolu (Parménide)',
        explanation: 'On ne peut penser le néant car penser est toujours penser quelque chose. Dire "le néant est" est contradictoire : on attribue l\'être au non-être. Cette thèse fonde la métaphysique occidentale : l\'être est, le non-être n\'est pas.',
        premises: ['Penser est toujours penser quelque chose', 'Le néant est défini comme non-être', 'On ne peut penser à rien', 'Parler du néant le traite comme quelque chose'],
        conclusion: 'Donc le néant est impensable, inexprimable, impossible'
      }
    ],
    objections: [
      {
        objection: 'Objection logicienne',
        content: 'Les paradoxes logiques montrent que le néant peut être pensé. Exemple : "Cette phrase est fausse" (paradoxe du menteur). Si elle est fausse, elle est vraie. Si elle est vraie, elle est fausse.',
        response: 'Les paradoxes sont des artefacts du langage, pas preuves de l\'existence du néant. Ils montrent les limites de la logique classique.'
      },
      {
        objection: 'Objection scientifique',
        content: 'La physique moderne parle de vide quantique qui n\'est pas rien : fluctuation quantique, énergie du vide. Le vide physique n\'est pas néant métaphysique.',
        response: 'Exact. Le vide physique est encore quelque chose (énergie, potentiels). Le néant métaphysique reste autre chose.'
      },
      {
        objection: 'Objection existentialiste',
        content: 'Le néant n\'est pas concept théorique mais expérience concrète. Nous vivons le néant dans l\'angoisse, devant la mort, dans l\'absurde.',
        response: 'Cette expérience du néant est précisément ce que Sartre et Heidegger analysent. Le néant est expérience pas théorie.'
      }
    ],
    distinctions: [
      {
        distinction: 'Néant vs Vide',
        explanation: 'Le vide est absence de choses dans un espace. Le néant est absence plus radicale : absence d\'espace, de temps, d\'être. Le vide physique peut être étudié par la science, le néant métaphysique excède la science.'
      },
      {
        distinction: 'Néant vs Absence',
        explanation: 'L\'absence est manque de quelque chose dans un contexte (absence de Pierre dans la pièce). Le néant est absence totale, sans contexte.'
      },
      {
        distinction: 'Néant vs Mort',
        explanation: 'La mort est événement biologique, fin de la vie. Le néant est condition ontologique : la possibilité de ne pas être accompagne toute l\'existence.'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      conceptId: 'etre',
      relation: 'OPPOSE',
      explanation: 'L\'être et le néant sont inséparables. Pour Heidegger, le néant est l\'envers de l\'être. Pour Sartre, l\'homme est être-pour-le-néant.'
    },
    {
      conceptId: 'mort',
      relation: 'REVEALS',
      explanation: 'La mort est expérience du néant. L\'être-pour-la-mort est confrontation au néant comme possibilité de ne plus être.'
    },
    {
      conceptId: 'angoisse',
      relation: 'EXPERIENCES',
      explanation: 'Dans l\'angoisse, nous faisons l\'expérience du néant. Tout s\'effondre, il ne reste rien.'
    },
    {
      conceptId: 'liberte',
      relation: 'ENABLES',
      explanation: 'Pour Sartre, la liberté est néantisatrice. Je ne suis pas identique à moi-même, je suis ce que je ne suis pas.'
    },
    {
      conceptId: 'sens',
      relation: 'ANNIHILATES',
      explanation: 'Le néant annihile le sens. Nietzsche : "Dieu est mort" signifie la perte des valeurs transcendantes, le néant comme horizon du nihilisme. L\'absurdité de Camus : l\'homme entre néant et raison, sans sens mais cherchant à en créer.'
    },
    {
      conceptId: 'existence',
      relation: 'CONDITIONS',
      explanation: 'Le néant conditionne l\'existence. L\'existence humaine est marquée par la conscience de la mort (néant comme possibilité de ne plus être). L\'existence est "être-pour-le-néant" (Sartre), et émerge de ce néant.'
    },
    {
      conceptId: 'rien',
      relation: 'DIFFERENTIATES',
      explanation: 'Le néant n\'est pas le rien. Le rien est absence de choses dans un espace (un vide). Le néant est absence radicale : absence d\'être, d\'espace, de temps. Le rien est observable, le néant est inconcevable.'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Existentialisme',
      description: 'Sartre, Heidegger : le néant au coeur de la conscience et de l\'existence. L\'homme est être-pour-le-néant.'
    },
    {
      movement: 'Phénoménologie',
      description: 'Analyse de la conscience intentionnelle comme néantisatrice. La conscience introduit du néant dans l\'être.'
    },
    {
      movement: 'Nihilisme',
      description: 'Nietzsche : le néant comme perte de sens, de valeur. " Dieu est mort " = le néant comme horizon.'
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `Parménide : le néant est impensable. On ne peut penser ou dire ce qui n'est pas. " L'être est, le non-être n'est pas ". Cette position fonde la métaphysique occidentale.

Platon tente de penser le non-être comme différence. Le sophiste peut dire le faux, donc penser le non-être. Mais comment penser quelque chose qui n'est pas ?

Aristote distingue privation (stérèsis) et néant. La privation est absence de quelque chose qui devrait être là (l'aveugle manque de vue). Le néant est absence radicale.

Descartes découvre le néant dans le doute. En doutant de tout, je fais l'expérience du néant. Le cogito surgit de ce néant : " je pense, donc je suis ".

Sartre, dans L'Être et le Néant (1943), systématise l'analyse du néant. La conscience est néantisatrice : elle introduit du vide dans l'être plein du monde. L'homme est être-pour-le-néant, projet vers un avenir qui n'est pas encore.

Heidegger, dans Qu'est-ce que la métaphysique ? (1929), analyse l'expérience du néant dans l'angoisse. Le néant n'est pas rien, il est le voile de l'être. On ne peut penser l'être sans le néant.`,

    problems: [
      {
        problem: 'Problème de la pensée du néant',
        description: 'Comment penser le néant sans le transformer en quelque chose ? Dire " le néant est " est contradictoire.'
      },
      {
        problem: 'Problème de l\'origine du néant',
        description: 'Le néant existe-t-il ? Ou est-ce seulement un concept vide ? Y a-t-il du néant dans le monde ou seulement dans notre pensée ?'
      },
      {
        problem: 'Problème du néant et de la liberté',
        description: 'Comment le néant fonde-t-il la liberté ? Suis-je libre parce que je ne suis pas identique à moi-même ?'
      }
    ],

    debates: [
      {
        issue: 'Le néant existe-t-il ?',
        positions: [
          {
            philosopher: 'Parménide',
            position: 'Non, le néant est impensable. On ne peut penser ou dire ce qui n\'est pas. " L\'être est, le non-être n\'est pas ".'
          },
          {
            philosopher: 'Sartre',
            position: 'Oui, le néant est au coeur de la conscience. La conscience est néantisatrice : elle introduit du vide dans l\'être.'
          },
          {
            philosopher: 'Heidegger',
            position: 'Le néant n\'est pas chose mais appartient à l\'être. On ne peut penser l\'être sans le néant. Le néant est le voile de l\'être.'
          },
          {
            philosopher: 'Wittgenstein',
            position: 'Le néant est limite du langage. " Ce dont on ne peut parler, il faut le taire ". Le néant est l\'indicible.'
          }
        ]
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Néant comme impensable (Parménide)',
      description: 'Pour Parménide, penser le néant est impossible car penser est toujours penser quelque chose. Dire " le néant est " est contradictoire : on attribue l\'être au non-être. Cette thèse fonde la métaphysique occidentale : l\'être est, le non-être n\'est pas. Elle exclut le néant de la pensée rationnelle.'
    },
    {
      title: 'Néant comme néantisation (Sartre)',
      description: 'Pour Sartre, la conscience est néantisatrice : elle introduit un vide entre elle et le monde. Je ne suis pas identique à ce que je suis, je suis ce que je ne suis pas. Cette néantisation est la condition de la liberté. Je peux nier ce qui est, imaginer ce qui n\'est pas, me projeter vers ce que je deviens. Le néant n\'est pas devant moi, il est en moi.'
    },
    {
      title: 'Néant comme voile de l\'être (Heidegger)',
      description: 'Pour Heidegger, le néant n\'est pas rien mais appartient à l\'être. Dans l\'angoisse, nous faisons l\'expérience du néant : tout s\'effondre, il ne reste rien. Cette expérience révèle l\'être comme fondement sans fond. Le néant est le " voile " de l\'être : il dissimule l\'être en le révélant. On ne peut penser l\'être sans le néant.'
    },
    {
      title: 'Néant comme perte de sens (Nietzsche)',
      description: 'Pour Nietzsche, "Dieu est mort" signifie la perte des valeurs transcendantes. Plus de sens donné, plus de valeur absolue. Le néant est l\'horizon du nihilisme : tout est vain, rien n\'a de sens. Mais ce néant peut être créateur : en détruisant les valeurs anciennes, il ouvre la possibilité de créer de nouvelles valeurs.'
    },
    {
      title: 'Néant comme vide (physique)',
      description: 'La physique moderne distingue vide classique (absence de matière) et vide quantique (fluctuations quantiques, énergie du vide). Le vide n\'est pas néant métaphysique : c\'est encore quelque chose (champs, énergie). Le néant absolu reste hors de portée de la physique.'
    },
    {
      title: 'Néant et mort',
      description: 'La mort est confrontation au néant : la possibilité de ne plus être. Heidegger analyse l\'être-pour-la-mort : le Dasein est un être qui sait qu\'il va mourir. Cette conscience de la mort donne sens à l\'existence. Epicure : "la mort n\'est rien pour nous" : quand nous sommes, la mort n\'est pas ; quand la mort est, nous ne sommes plus.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'L\'Être et le Néant : analyse de la néantisation comme condition de la liberté' },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Qu\'est-ce que la métaphysique ? : le néant comme voile de l\'être' },
    { name: 'Parménide', period: 'VIe siècle av. J.-C.', contribution: 'Le néant comme impensable : l\'être est, le non-être n\'est pas' },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'Le nihilisme comme expérience du néant, mort de Dieu et perte de valeurs' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le garçon de café (Sartre) : Un garçon de café joue son rôle de garçon de café. Il est comme un objet, un automate. Mais il joue à l\'être : il y a un néant entre lui et son rôle. Il n\'est pas identique à ce qu\'il fait. Ce néant est sa liberté.',
    'L\'angoisse devant le vide : Dans l\'angoisse, tout perd sa signification. Les objets familiers deviennent étrangers. "Ça ne va plus". Cette expérience révèle le néant au coeur de l\'être.',
    'Le pari de Pascal : Si je parie que Dieu existe et qu\'Il existe, je gagne tout. Si je parie qu\'Il n\'existe pas et qu\'Il existe, je perds tout. Le néant (mort, absence de Dieu) donne urgence au choix existentiel.',
    'Le mythe de la caverne (Platon) : Les prisonniers prennent les ombres pour la réalité. Le philosophe découvre que les ombres ne sont rien, absence de réalité. Le monde sensible est "non-être" par rapport au monde des Idées.',
    'L\'expérience du deuil : Quelqu\'un que j\'aimais est mort. Il y a un " trou ", un néant, là où il était. Ce néant n\'est pas absence d\'objet (comme une tasse cassée) mais absence de quelqu\'un. Le néant du deuil est expérience de la perte.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Essai d\'ontologie phénoménologique sur la néantisation',
      quotes: [
        'Le néant est au coeur de l\'homme.',
        'La conscience est néantisatrice.',
        'Je suis ce que je ne suis pas.',
        'La liberté est néantisation de l\'être.',
        'L\'homme est être-pour-le-néant.'
      ]
    },
    {
      title: 'Qu\'est-ce que la métaphysique ?',
      author: 'Martin Heidegger',
      year: 1929,
      type: 'ESSAY' as const,
      reference: 'Conférence sur l\'expérience du néant dans l\'angoisse',
      quotes: [
        'Le néant n\'est pas rien.',
        'Le néant est le voile de l\'être.',
        'L\'angoisse est l\'expérience du néant.',
        'On ne peut penser l\'être sans le néant.',
        'Le néant nihilise.'
      ]
    },
    {
      title: 'Poème',
      author: 'Parménide',
      year: 'VIe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Fondation de la métaphysique occidentale',
      quotes: [
        'L\'être est, le non-être n\'est pas.',
        'On ne peut penser ou dire ce qui n\'est pas.',
        'Le néant est impensable.',
        'La même chose peut être pensée et être.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Sartre définit-il le néant ?',
      back: 'Pour Sartre, le néant est au coeur de la conscience. La conscience est néantisatrice : elle introduit un vide entre elle et le monde. Je ne suis pas identique à ce que je suis, je suis ce que je ne suis pas. Cette néantisation est la condition de la liberté. Le néant n\'est pas devant moi mais en moi, dans ma structure de conscience.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'elle est la thèse de Parménide sur le néant ?',
      back: 'Pour Parménide, le néant est impensable. On ne peut penser ou dire ce qui n\'est pas car penser est toujours penser quelque chose. Dire "le néant est" est contradictoire : on attribue l\'être au non-être. "L\'être est, le non-être n\'est pas". Cette thèse fonde la métaphysique occidentale.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Heidegger relie-t-il néant et être ?',
      back: 'Pour Heidegger, le néant n\'est pas rien mais appartient à l\'être. Dans l\'angoisse, nous faisons l\'expérience du néant : tout s\'effondre, il ne reste rien. Cette expérience révèle l\'être comme fondement sans fond. Le néant est le "voile" de l\'être : il dissimule l\'être en le révélant. On ne peut penser l\'être sans le néant.',
      difficulty: 5
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Parménide résume sa thèse sur le néant ?',
      back: 'L\'être est, le non-être n\'est pas (Poème, VIe siècle av. J.-C.)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Sartre, la conscience est {{néantisatrice}}. Pour Parménide, le néant est {{impensable}}.',
      back: 'néantisatrice | impensable',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le néant existe-t-il ?',
      back: 'La question du néant divise les philosophes. Pour Parménide, non : le néant est impensable car penser est toujours penser quelque chose. Dire "le néant est" est contradictoire. Pour Sartre, oui : le néant est au coeur de la conscience, néantisation qui rend la liberté possible. Pour Heidegger, le néant appartient à l\'être : on ne peut penser l\'être sans le néant. La question reste ouverte : comment penser l\'impensable ?',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['néant', 'être', 'sartre', 'heidegger', 'parmenide', 'mort', 'angoisse', 'liberté', 'conscience', 'nihilisme', 'vide', 'sens', 'existence', 'rien']
};
