/**
 * Être - Concept Data
 * Concept central de la métaphysique, désignant ce qui est ou existe
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'etre',
  name: 'Être',
  slug: 'etre',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 5,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'L\'Être est le concept le plus fondamental de la métaphysique, désignant ce qui est ou existe. Aristote définit la métaphysique comme « science de l\'être en tant qu\'être ». La question de l\'être se pose à plusieurs niveaux : qu\'est-ce que l\'être ? (question de l\'essence) ; pourquoi y a-t-il quelque chose plutôt que rien ? (question de l\'existence) ; quelles sont les modalités de l\'être ? (nécessaire, contingent, possible). Heidegger revitalise cette question dans Être et Temps : le « sens de l\'être » a été oublié par la métaphysique occidentale qui a confondu l\'être avec l\'étant. Pour Parménide, « l\'être est, le non-être n\'est pas » : l\'être est un, éternel, immobile. Pour Platon, les Idées sont les vraies êtres, par opposition au monde sensible qui participe de l\'être sans l\'être pleinement. Pour Sartre, l\'être se divise en en-soi (être massif des choses) et pour-soi (être conscient de soi).',
  shortDefinition: 'Ce qui est ou existe, objet de la métaphysique comme science de l\'être en tant qu\'être',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'esse (être) / ens (étant)',
    greek: 'einai (εἶναι) / to on (τὸ ὄν) / ousia (οὐσία)',
    root: 'bheu (indo-européen) : croître, devenir',
    notes: 'L\'être en grec s\'exprime par le verbe einai et le participe to on (l\'étant). Ousia désigne l\'essence ou substance'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    // Perspectives par école philosophique
    perspectives: [
      {
        school: 'Essentialisme',
        philosopher: 'Platon',
        thesis: 'L\'être est les Idées éternelles, parfaites, immuables',
        argument: 'Le monde sensible est devenir, changement, imperfection. Les vrais êtres sont les Idées (ou Formes) : éternelles, immuables, parfaites, intelligibles. Les choses sensibles participent de l\'être sans l\'être pleinement. L\'Être suprême est l\'Idée du Bien, principe de tout ce qui est. La connaissance est anamnèse, ressouvenir des Idées.',
        conclusion: 'L\'être comme monde intelligible des Idées, opposé au monde sensible'
      },
      {
        school: 'Existentialisme',
        philosopher: 'Jean-Paul Sartre',
        thesis: 'L\'existence précède l\'essence : l\'homme est liberté absolue',
        argument: 'Il n\'y a pas de nature humaine donnée. L\'homme existe d\'abord, se rencontre, surgit dans le monde, et seulement ensuite se définit. L\'homme est condamné à être libre : il doit s\'inventer, choisir qui il est. L\'être se divise en en-soi (être massif des choses) et pour-soi (être conscient de soi). Le pour-soi est néantisation de l\'en-soi.',
        conclusion: 'L\'être comme liberté absolue et projet existentiel de soi'
      },
      {
        school: 'Nihilisme',
        philosopher: 'Friedrich Nietzsche',
        thesis: 'Il n\'y a pas d\'être en soi, seulement devenir et volonté de puissance',
        argument: '"Dieu est mort" : pas de monde vrai, pas d\'être en soi, seulement interprétations. L\'être est une illusion grammaticale. Il n\'y a pas de faits, seulement des interprétations. Le devenir est primordial : tout est flux, changement, volonté de puissance. Le vrai monde (des platoniciens) est une fable dont nous avons cessé de croire.',
        conclusion: 'L\'être comme illusion, le devenir comme seule réalité'
      }
    ],
    principalArguments: [
      {
        argument: 'Argument de Parménide sur l\'impossibilité du non-être',
        explanation: '« L\'être est, le non-être n\'est pas ». Penser le non-être est impossible car penser, c\'est toujours penser quelque chose. Donc le non-être ne peut être ni pensé ni dit. Le changement (devenir) implique passer de l\'être au non-être, donc est impossible.',
        premises: ['Penser, c\'est toujours penser quelque chose', 'Le non-être n\'est rien', 'On ne peut pas penser rien', 'Le changement implique passer de l\'être au non-être'],
        conclusion: 'Donc le changement est impossible et l\'être est immobile, éternel, un'
      },
      {
        argument: 'Argument de la différence ontologique (Heidegger)',
        explanation: 'La métaphysique a confondu l\'être avec l\'étant. Mais l\'être n\'est pas un étant. L\'être est « ce qui détermine l\'étant en tant qu\'étant ». Cette différence a été oubliée mais est essentielle.',
        premises: ['L\'étant est ce qui est', 'L\'être est ce qui fait que l\'étant est', 'L\'être n\'est pas un étant parmi d\'autres', 'Confondre être et étant, c\'est manquer le sens de l\'être'],
        conclusion: 'Donc il faut reconquérir la différence ontologique'
      },
      {
        argument: 'Argument de l\'acte d\'être (Thomas d\'Aquin)',
        explanation: 'L\'essence (ce qu\'une chose est) se distingue de l\'existence (le fait qu\'elle soit). Dans toutes les choses sauf Dieu, essence et existence sont distinctes. L\'acte d\'être (esse) est ce qui actualise l\'essence.',
        premises: ['On peut comprendre l\'essence d\'une chose sans savoir si elle existe', 'Donc essence et existence sont distinctes', 'L\'existence est l\'actualisation de l\'essence', 'En Dieu seul, essence = existence'],
        conclusion: 'Donc l\'être comme acte d\'être est le plus profond de toute chose'
      }
    ],
    objections: [
      {
        objection: 'Objection du devenir (Héraclite)',
        content: '« Tout s\'écoule ». Rien n\'est stable, tout devient. L\'être immobile de Parménide est une abstraction. La réalité est changement.',
        response: 'Platon répond : le devenir est réel mais n\'est pas l\'être véritable. Les choses sensibles participent de l\'être sans l\'être pleinement. Aristote : acte et puissance permettent de penser le changement.'
      },
      {
        objection: 'Objection linguistique (Wittgenstein)',
        content: '« L\'être » n\'est pas un concept mais une forme grammaticale. Confondre « est » de prédication (« Socrate est mortel ») et « est » d\'existence (« Dieu est ») crée de fausses questions.',
        response: 'Heidegger : cette objection ne reconnaît pas que la grammaire reflète la compréhension pré-théorique de l\'être. La question de l\'être n\'est pas linguistique mais ontologique.'
      },
      {
        objection: 'Objection nominaliste',
        content: 'Il n\'y a pas d\'« être » en général, seulement des êtres particuliers. L\'être est abstraction, pas réalité.',
        response: 'Même abstraction, il doit y avoir quelque chose qui rend possible cette abstraction. L\'être comme problème n\'est pas un étant mais la condition des étants.'
      }
    ],
    distinctions: [
      {
        distinction: 'Être vs Étant',
        explanation: 'L\'étant est ce qui est (une chose, une personne, un événement). L\'être est ce qui fait que l\'étant est. Confondre les deux, c\'est manquer la question du sens de l\'être (Heidegger).'
      },
      {
        distinction: 'Essence vs Existence',
        explanation: 'L\'essence est ce qu\'une chose est (sa définition). L\'existence est le fait qu\'elle soit. Pour Thomas d\'Aquin, tout ce qui est créé a une essence distincte de son existence. En Dieu seul, essence = existence.'
      },
      {
        distinction: 'Être en acte vs Être en puissance',
        explanation: 'Aristote distingue ce qui est réalisé (en acte) de ce qui peut être (en puissance). L\'arbre est en acte comme arbre, mais a en puissance des branches qui ne sont pas encore. Cela permet de penser le changement sans nier l\'être.'
      },
      {
        distinction: 'Être vs Néant',
        explanation: 'Le néant n\'est pas une sorte d\'être moindre. Il est l\'absence d\'être. Pour Sartre, le néant est au cœur de la conscience : le pour-soi est néantisation de l\'en-soi.'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      conceptId: 'neant',
      relation: 'OPPOSE',
      explanation: 'Le néant est l\'absence d\'être. Pour Parménide, le néant n\'est pas et ne peut être pensé. Pour Sartre, le néant est au cœur de la conscience.'
    },
    {
      conceptId: 'devenir',
      relation: 'OPPOSE',
      explanation: 'Le devenir est le changement, le passage. Pour Parménide, le devenir est illusion. Pour Platon, le devenir est participation à l\'être. Pour Hegel, devenir est synthèse d\'être et néant.'
    },
    {
      conceptId: 'essence',
      relation: 'PART_OF',
      explanation: 'L\'essence est ce qu\'une chose est. L\'existence est le fait qu\'elle soit. La métaphysique étudie le rapport essence/existence.'
    },
    {
      conceptId: 'temps',
      relation: 'INFLUENCES',
      explanation: 'Le temps est lié au devenir. Pour Heidegger, le temps est l\'horizon de toute compréhension de l\'être.'
    },
    {
      conceptId: 'conscience',
      relation: 'INFLUENCED_BY',
      explanation: 'La conscience est l\'étant qui comprend l\'être (Heidegger). L\'homme est « être-là » (Dasein).'
    },
    {
      conceptId: 'substance',
      relation: 'BUILDS_ON',
      explanation: 'La substance est l\'être par excellence, ce qui est par soi et non par autre (Aristote, Descartes, Spinoza).'
    },
    {
      conceptId: 'authenticite',
      relation: 'THEMATIZES',
      explanation: 'L\'authenticité est le mode d\'existence où l\'être humain s\'approprie son être. Pour Heidegger, l\'authenticité est le « retour à soi » de l\'être-là qui assume son être-jeté et sa mortalité.',
      bidirectional: true,
      category: 'existentialisme'
    },
    {
      conceptId: 'connaissance',
      relation: 'REVEALS',
      explanation: 'La connaissance est toujours connaissance de l\'être. Pour Heidegger, la vérité est dévoilement de l\'être. La question de l\'être précède toute connaissance.',
      bidirectional: true,
      category: 'epistemologie'
    },
    {
      conceptId: 'verite',
      relation: 'FOUNDATIONAL',
      explanation: 'La vérité est dévoilement de l\'être (alètheia). Pour Heidegger, l\'être se manifeste dans la vérité comme événement de révélation.',
      bidirectional: true,
      category: 'epistemologie'
    },
    {
      conceptId: 'bien',
      relation: 'TRANSCENDS',
      explanation: 'Pour Platon, l\'Être suprême est l\'Idée du Bien, qui dépasse l\'être en dignity et en puissance. L\'être participe du Bien qui est sa source.',
      bidirectional: true,
      category: 'ethique'
    },
    {
      conceptId: 'responsabilite',
      relation: 'IMPLIES',
      explanation: 'L\'être humain se caractérise par sa responsabilité : être signifie être responsable. L\'être-pour-soi est conscience de sa responsabilité ontologique.',
      bidirectional: true,
      category: 'ethique'
    },
    {
      conceptId: 'dieu',
      relation: 'PARADIGMATIC',
      explanation: 'Dieu est l\'Être par excellence, acte pur d\'être (Thomas d\'Aquin). L\'être fini (créature) se définit par rapport à l\'Être infini (créateur).',
      bidirectional: true,
      category: 'spiritualite'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Éléatisme',
      role: 'FOUNDATIONAL',
      description: 'École de Parménide et Zénon. L\'être est un, éternel, immobile. Le devenir est illusion. Fondateur de l\'ontologie occidentale.'
    },
    {
      movement: 'Platonisme',
      role: 'CENTRAL',
      description: 'Les Idées sont les vrais êtres. Le monde sensible participe de l\'être sans l\'être pleinement. Dualisme être/apparence.'
    },
    {
      movement: 'Aristotélisme',
      role: 'CENTRAL',
      description: 'Métaphysique comme science de l\'être en tant qu\'être. Distinction acte/puissance, substance/accident. L\'être se dit en plusieurs sens.'
    },
    {
      movement: 'Scholastique',
      role: 'RELATED',
      description: 'Thomas d\'Aquin : distinction essence/existence. L\'être comme acte d\'être (esse). Dieu comme acte pur.'
    },
    {
      movement: 'Ontologie fondamentale',
      role: 'CENTRAL',
      description: 'Heidegger : question du sens de l\'être oublié par la métaphysique. Différence ontologique être/étant. Dasein comme étant qui comprend l\'être.'
    },
    {
      movement: 'Existentialisme',
      role: 'RELATED',
      description: 'Sartre : distinction en-soi/pour-soi. L\'homme est « être-pour-soi », conscience de ne pas coïncider avec soi.'
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `La question de l'être naît en Grèce ancienne avec Parménide (VIe s. av. J.-C.) qui, le premier, pose la question « qu'est-ce que l'être ? » et répond par l'unité, l'éternité, l'immobilité de l'être. Cette thèse radicale inaugure la métaphysique occidentale : penser l'être comme opposé au devenir, au temps, à la mort.

Platon répond au défi parménidien par la théorie des Idées : les choses sensibles naissent et meurent, mais les Idées sont éternelles. Le monde sensible « participe » de l'être sans l'être pleinement. C'est le premier dualisme être/apparence.

Aristote systématise : la métaphysique est « science de l'être en tant qu'être ». L'être se dit en plusieurs sens (catégories), mais tous se rapportent à un sens premier : la substance. Aristote introduit la distinction acte/puissance pour penser le changement.

Le Moyen Âge chrétien (Thomas d'Aquin) reçoit Aristote et ajoute la distinction essence/existence. Seul Dieu a son essence = son existence. Toute créature a une essence distincte de son existence. L'être comme acte d'être (esse) est le plus profond.

La modernité (Descartes) substitue la question du sujet à celle de l'être. L'être devient substance pensante vs substance étendue. Kant déplace la question : l'être n'est pas une prédicat réel.

Heidegger renverse la tradition : la métaphysique a oublié la « différence ontologique » entre être et étant. La tâche est de retrouver la question du sens de l'être. L'histoire de la métaphysique est histoire de l'oubli de l'être.`,

    problems: [
      {
        problem: 'Problème de l\'un et du multiple',
        description: 'Comment concilier l\'unité de l\'être (Parménide) avec la multiplicité des choses ? L\'être est-il un ou multiple ? Comment penser la diversité à partir de l\'unité ?'
      },
      {
        problem: 'Problème de l\'être et du devenir',
        description: 'Si l\'être est éternel et immobile (Parménide), comment expliquer le changement, le devenir, le temps ? Platon oppose être (Idées) et devenir (sensible), mais comment les articuler ?'
      },
      {
        problem: 'Problème de l\'essence et de l\'existence',
        description: 'Quelle est la différence entre ce qu\'une chose est (essence) et le fait qu\'elle soit (existence) ? L\'existence est-elle un prédicat comme les autres ? Pourquoi y a-t-il quelque chose plutôt que rien ?'
      },
      {
        problem: 'Problème de la différence ontologique',
        description: 'Comment distinguer l\'être de l\'étant sans faire de l\'être un étant suprême ? La métaphysique a-t-elle oublié cette différence ? Comment reconquérir le sens de l\'être ?'
      }
    ],

    debates: [
      {
        issue: 'L\'unité ou la multiplicité de l\'être',
        positions: [
          {
            philosopher: 'Parménide',
            position: 'L\'être est un, continu, indivisible. La multiplicité et le changement sont illusions.'
          },
          {
            philosopher: 'Platon',
            position: 'L\'être est multiple : chaque Idée est un être. Le monde sensible participe de multiples Idées.'
          },
          {
            philosopher: 'Aristote',
            position: 'L\'être se dit en plusieurs sens (catégories), mais tous se rapportent à un sens premier : la substance. Unité dans la multiplicité.'
          }
        ]
      },
      {
        issue: 'L\'être et le néant',
        positions: [
          {
            philosopher: 'Parménide',
            position: 'Le néant n\'est pas et ne peut être pensé. Penser le néant, c\'est penser rien, donc ne pas penser.'
          },
          {
            philosopher: 'Hegel',
            position: 'L\'être pur et le néant pur sont identiques (indétermination). Leur dialectique produit le devenir.'
          },
          {
            philosopher: 'Sartre',
            position: 'Le néant est au cœur de la conscience. Le pour-soi est néantisation de l\'en-soi. Le néant est activité, non passivité.'
          }
        ]
      },
      {
        issue: 'Le sens de l\'être',
        positions: [
          {
            philosopher: 'Aristote',
            position: 'L\'être est substance, ce qui est par soi. L\'être en tant qu\'être est objet de la métaphysique.'
          },
          {
            philosopher: 'Heidegger',
            position: 'La métaphysique a oublié la différence ontologique. L\'être n\'est pas l\'étant. Le sens de l\'être doit être reconquis.'
          },
          {
            philosopher: 'Sartre',
            position: 'L\'être se divise en en-soi (choses) et pour-soi (conscience). Cette division est insurmontable.'
          }
        ]
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Parménide - L\'être est un',
      description: 'Dans son Poème (VIe siècle av. J.-C.), Parménide affirme que « l\'être est, le non-être n\'est pas ». De là découle que l\'être est un, éternel, immobile, continu, indivisible. Le devenir, le changement, la multiplicité sont des illusions. Cette position inaugure la métaphysique occidentale : penser l\'être comme opposé au devenir, au temps, à la mort.',
      philosophicalContext: 'Cette thèse radicale est une réaction à Héraclite (« tout s\'écoule »). Elle pose la question fondamentale de l\'ontologie : comment penser l\'unité face à la multiplicité ?'
    },
    {
      title: 'Platon - Les Idées comme vrais êtres',
      description: 'Pour Platon, le monde sensible (ce que nous voyons) participe de l\'être sans l\'être pleinement : les choses sensibles naissent, changent, meurent - elles sont à mi-chemin entre l\'être et le non-être. Les Idées (ou Formes) sont les vrais êtres : éternelles, immuables, parfaites. Exemple : la beauté elle-même (Idée) est vraiment belle, alors que les belles choses sensibles ne sont que belles « par participation ».',
      philosophicalContext: 'Le dualisme platonicien (monde intelligible/monde sensible) fonde toute la métaphysique occidentale. L\'être se dit en deux sens : être véritable (Idées) et être par participation (sensible).'
    },
    {
      title: 'Aristote - L\'être en tant qu\'être',
      description: 'Aristote fonde la métaphysique comme « science de l\'être en tant qu\'être », s\'occupant de l\'être et de ses attributs les plus généraux. Il distingue plusieurs sens de l\'être : l\'être selon les catégories (substance, qualité, quantité, etc.), l\'être comme substance, l\'être comme acte et puissance, l\'être comme acte et puissance. L\'être se dit en plusieurs sens mais tous se rapportent à l\'être par soi : la substance.',
      philosophicalContext: 'Aristote dépasse le dualisme platonicien en unifiant l\'être : l\'être se dit en plusieurs sens mais tous se rapportent à un sens premier (substance). L\'acte/puissance permet de penser le changement.'
    },
    {
      title: 'Aristote - L\'être en tant qu\'être',
      description: 'Aristote fonde la métaphysique comme « science de l\'être en tant qu\'être », s\'occupant de l\'être et de ses attributs les plus généraux. Il distingue plusieurs sens de l\'être : l\'être selon les catégories (substance, qualité, quantité, etc.), l\'être comme substance, l\'être comme acte et puissance, l\'être comme acte et puissance. L\'être se dit en plusieurs sens mais tous se rapportent à l\'être par soi : la substance.'
    },
    {
      title: 'Heidegger - La différence ontologique',
      description: 'Dans Être et Temps, Heidegger soutient que la métaphysique a oublié la « différence ontologique » entre l\'être et l\'étant. Elle a confondu l\'être avec l\'étant suprême (Dieu), ou avec l\'étant en général. Heidegger demande : « Quel est le sens de l\'être ? » Cette question a été oubliée mais elle est la question fondamentale. L\'être-là (Dasein) est l\'étant qui comprend l\'être.'
    },
    {
      title: 'Sartre - En-soi et pour-soi',
      description: 'Dans L\'Être et le Néant, Sartre distingue deux modes d\'être : l\'en-soi (être des choses, massif, opaque, « ce qui est ce qu\'il est ») et le pour-soi (être de la conscience, « ce qui n\'est pas ce qu\'elle est et est ce qu\'elle n\'est pas »). Le pour-soi est néantisation de l\'en-soi : la conscience est toujours au-delà d\'elle-même, projetée vers l\'avenir. Cette dualité est structurelle et insurmontable.'
    },
    {
      title: 'L\'être et le néant',
      description: 'La relation entre être et néant est centrale. Pour Parménide, le néant n\'est pas (il ne peut être pensé). Pour Hegel, le néant est aussi pur que l\'être, et leur dialectique produit le devenir. Pour Sartre, le néant est au cœur de la conscience : le pour-soi est néantisation, trou d\'être. Pour Heidegger, le néant se révèle dans l\'angoisse et est la condition de l\'être.'
    },
    {
      title: 'L\'être et le devenir',
      description: 'L\'opposition être/devenir structure toute la philosophie. Pour les Éléates (Parménide), seul l\'être est, le devenir est illusion. Pour Héraclite, « tout s\'écoule », rien n\'est, tout devient. Platon tente de concilier : les Idées sont (être), le monde sensible devient (devenir). Aristote distingue l\'être en acte (réalisé) et l\'être en puissance (possible), permettant de penser le changement.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Rénovation de la question de l\'être et analyse de la différence ontologique entre être et étant' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Fondation de la métaphysique comme science de l\'être en tant qu\'être' },
    { name: 'Parménide', period: 'VIe-Ve siècle av. J.-C.', contribution: 'Première philosophie de l\'être comme unité, éternité, immutabilité' },
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Théorie des Idées comme vrais êtres par opposition au monde sensible' },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'Ontologie phénoménologique : en-soi, pour-soi, et néantisation' },
    { name: 'Thomas d\'Aquin', period: '1225-1274', contribution: 'Synthèse chrétienne : l\'être comme acte d\'être (esse) et distinction essence/existence' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'Dialectique de l\'être, du néant et du devenir' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'La question de Leibniz : « Pourquoi y a-t-il quelque chose plutôt que rien? » - Cette interrogation radicale pose la question de l\'existence même de l\'être. Leibniz y répond par le principe de raison suffisante : il doit y avoir une raison sufficiente à l\'existence, qui est Dieu.',
    'Le penseur et la chaise : La chaise est (en-soi), elle est ce qu\'elle est : bois, forme, fonction. Le penseur qui contemple la chaise est pour-soi : il est conscience de la chaise, mais aussi conscience de lui-même, projeté vers des possibles. La différence est entre « être » et « être conscient d\'être ».',
    'Le cercle parfait : Le cercle tracé dans le sable est imparfait, il s\'efface. Le cercle comme Idée (platonicienne) est parfaitement ce qu\'il est, éternel, immuable. Le premier participe de l\'être, le second est véritablement être.',
    'L\'arbre qui pousse : L\'arbre est en acte (il est réellement arbre), mais il a en puissance des branches qui ne sont pas encore, des feuilles qui ne sont pas encore. Aristote permet ainsi de penser le changement sans nier l\'être : ce qui change passe d\'une puissance à un acte.',
    'L\'homme qui s\'interroge sur l\'être : Heidegger souligne que l\'homme (Dasein, être-là) est l\'unique étant qui se pose la question de l\'être. Un caillou « est » mais ne se demande pas ce que « être » veut dire. L\'homme comprend l\'être, y compris le sien propre.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Œuvre majeure réinterrogeant la question de l\'être et la différence ontologique',
      quotes: [
        'La question de l\'être est aujourd\'hui tombée dans l\'oubli.',
        'L\'être-là est l\'étant qui comprend l\'être.',
        'La différence ontologique est la différence entre l\'être et l\'étant.',
        'Le sens de l\'être doit être élucidé.',
        'L\'être-là est jeté dans le monde.',
        'L\'être-là est être-pour-la-mort.',
        'L\'oubli de l\'être est le destin de l\'Occident.'
      ]
    },
    {
      title: 'Métaphysique',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Fondation de la métaphysique comme science de l\'être en tant qu\'être',
      quotes: [
        'Il y a une science qui étudie l\'être en tant qu\'être.',
        'L\'être se dit en plusieurs sens, mais tous se rapportent à un principe unique.',
        'La substance est l\'être par excellence.',
        'L\'être est acte et puissance.',
        'L\'être par soi est la substance.',
        'L\'être accidentel est l\'être qui appartient à un sujet.'
      ]
    },
    {
      title: 'Poème',
      author: 'Parménide',
      year: 'VIe siècle av. J.-C.',
      type: 'POEM' as const,
      reference: 'Première philosophie de l\'être comme unité, éternité, immutabilité',
      quotes: [
        'L\'être est, le non-être n\'est pas.',
        'L\'être est inengendré et impérissable.',
        'L\'être est un, continu, immobile.',
        'Le même est penser et être.',
        'Le devenir est illusion.',
        'Il faut dire et penser que l\'être est.'
      ]
    },
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Traité d\'ontologie phénoménologique distinguant en-soi et pour-soi',
      quotes: [
        'L\'en-soi est ce qu\'il est.',
        'Le pour-soi est ce qu\'il n\'est pas et n\'est pas ce qu\'il est.',
        'La conscience est néantisation de l\'être.',
        'L\'homme est une passion inutile.',
        'Le néant est au cœur de l\'homme.',
        'L\'être et le néant sont deux régions hétérogènes de l\'être.',
        'Le pour-soi poursuit l\'impossible projet de se faire en-soi.'
      ]
    },
    {
      title: 'République',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Théorie des Idées comme vrais êtres, notamment l\'allégorie de la caverne',
      quotes: [
        'L\'objet de la science est l\'être.',
        'Les choses sensibles participent des Idées.',
        'Le monde sensible est à mi-chemin entre l\'être et le non-être.',
        'L\'Idée du Bien est au-delà de l\'être.',
        'La connaissance est anamnèse, ressouvenir des Idées.',
        'Le philosophe est celui qui contemple les vrais êtres.'
      ]
    },
    {
      title: 'Science de la logique',
      author: 'Georg Wilhelm Friedrich Hegel',
      year: 181,
      type: 'BOOK' as const,
      reference: 'Dialectique de l\'être, du néant et du devenir',
      quotes: [
        'L\'être pur est l\'indéterminé immédiat.',
        'Le néant pur est également indéterminé.',
        'Le devenir est l\'unité de l\'être et du néant.',
        'La vérité de l\'être est le devenir.',
        'L\'être et le néant s\'abolissent l\'un l\'autre dans la vérité.',
        'Le devenir est la première dialectique.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que la « différence ontologique » chez Heidegger ?',
      back: 'La différence ontologique est la différence entre l\'être (l\'être tel qu\'il se comprend) et l\'étant (ce qui est). La métaphysique occidentale a oublié cette différence, confondant l\'être avec l\'étant (Dieu comme étant suprême, ou l\'étant en général). La tâche de la pensée est de retrouver cette différence.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Aristote définit-il la métaphysique ?',
      back: 'Aristote définit la métaphysique comme « science de l\'être en tant qu\'être » : elle étudie l\'être et ses attributs les plus généraux, indépendamment des êtres particuliers. Elle s\'oppose aux sciences particulières qui étudient un domaine de l\'être (la physique étudie les êtres en mouvement, les mathématiques les quantités, etc.). La métaphysique étudie l\'être lui-même.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle est la thèse centrale de Parménide ?',
      back: 'Parménide affirme que « l\'être est, le non-être n\'est pas ». De là découle que l\'être est un, éternel, immobile, continu, indivisible. Le changement, le devenir, la naissance et la mort sont impossibles car ils impliquent que quelque chose devienne à partir de rien (non-être). Cette thèse inaugure l\'opposition fondamentale entre être et devenir.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre distingue-t-il l\'en-soi et le pour-soi ?',
      back: 'L\'en-soi est l\'être des choses : massif, opaque, identique à soi (« ce qui est ce qu\'il est »). Le pour-soi est l\'être de la conscience : toujours au-delà de soi, projeté vers l\'avenir, « ce qui n\'est pas ce qu\'elle est et est ce qu\'elle n\'est pas ». Le pour-soi est néantisation de l\'en-soi : il est trou d\'être, conscience de ne pas coïncider avec soi.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Platon distingue-t-il les Idées du monde sensible ?',
      back: 'Pour Platon, les Idées (ou Formes) sont les vrais êtres : éternelles, immuables, parfaites, intelligibles. Le monde sensible (ce que nous voyons) participe des Idées sans les être pleinement : les belles choses sont belles parce qu\'elles participent de l\'Idée de beauté, mais elles ne sont pas la beauté elle-même. Seules les Idées sont vraiment.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Parménide résume sa philosophie ?',
      back: '« L\'être est, le non-être n\'est pas » - Poème, VIe siècle av. J.-C.',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle question radicale Leibniz formule-t-il sur l\'être ?',
      back: '« Pourquoi y a-t-il quelque chose plutôt que rien? » - Cette question interroge la raison même de l\'existence de l\'être.',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Heidegger, la différence {{ontologique}} est la différence entre l\'{{être}} et l\'{{étant}}.',
      back: 'ontologique | être | étant',
      difficulty: 3
    },
    {
      type: 'ESSAY' as const,
      front: 'En quoi la question de l\'être est-elle la question fondamentale de la métaphysique ?',
      back: 'La question de l\'être est fondamentale car elle précède toute autre question : avant de se demander ce que sont les choses, il faut comprendre ce que « être » veut dire. Aristote fonde la métaphysique comme « science de l\'être en tant qu\'être ». Heidegger soutient que l\'oubli de cette question a déterminé tout l\'histoire de la métaphysique occidentale, qui a confondu l\'être avec l\'étant (Dieu, la substance, la matière). Retrouver la question de l\'être, c\'est redonner sens à la pensée elle-même. Cette question n\'est pas théorique seulement : elle engage notre compréhension de nous-mêmes comme êtres dont l\'être est en question.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['être', 'métaphysique', 'heidegger', 'aristote', 'parmenide', 'platon', 'sartre', 'ontologie', 'étant', 'néant', 'devenir', 'substance']
};
