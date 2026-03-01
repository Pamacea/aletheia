/**
 * Existence - Concept Data
 * Fait d'être, réalité concrète, thème central de l'existentialisme
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'existence',
  name: 'Existence',
  slug: 'existence',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'L\'existence est le fait d\'être, le mode de réalité des êtres concrets. La philosophie distingue existence et essence : l\'essence est la nature, les propriétés définissant ce qu\'est une chose ; l\'existence est le fait d\'être réalisé. Pour les existentialistes (Sartre), l\'existence précède l\'essence : nous existons d\'abord, puis nous définissons qui nous sommes. Pour Pascal, l\'homme est "un roseau pensant" : existence fragile mais conscience. Pour Heidegger, l\'existence (Ek-sistere) signifie "être-dehors" : se tenir hors de soi, vers ses possibilités.',
  shortDefinition: 'Fait d\'être ou réalité concrète, par opposition à l\'essence ou à la possibilité',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'existentia : ex-sistere (sortir de, se tenir debout)',
    greek: 'hyparxis (ὕπαρξις) : réalité, subsistance',
    root: 'sistere (se tenir) + ex- (hors de)',
    notes: 'Existere signifie littéralement "se tenir debout hors de", "se manifester"'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du cogito (Descartes)',
        explanation: 'Je peux douter de tout, sauf du fait que je doute. Douter est penser, penser prouve que je suis. "Je pense, donc je suis" (cogito) est vérité première indubitable.',
        premises: ['Je peux douter de tout', 'Mais je ne peux douter que je doute', 'Douter est une forme de pensée', 'Penser prouve l\'existence du penseur'],
        conclusion: 'Donc j\'existe de manière certaine, indubitable'
      },
      {
        argument: 'Argument de l\'existence précède l\'essence (Sartre)',
        explanation: 'L\'homme existe d\'abord, se rencontre, surgit dans le monde, et seulement ensuite se définit. L\'homme n\'est rien d\'abord, il sera ensuite ce qu\'il fera de lui-même. Il n\'y a pas de nature humaine donnée.',
        premises: ['Si Dieu existe, l\'homme est créé avec une essence (nature)', 'Mais l\'existence de Dieu est incertaine', 'L\'athéisme est conséquent : il n\'y a pas de nature humaine', 'Donc l\'homme existe d\'abord, puis se définit'],
        conclusion: 'Donc l\'existence précède l\'essence : l\'homme est projet de lui-même'
      },
      {
        argument: 'Argument de l\'angoisse (Kierkegaard)',
        explanation: 'L\'angoisse révèle ma liberté absolue. Je peux choisir n\'importe quoi, y compris le mal. Cette liberté infinie est vertige : je suis responsable de tout. L\'existence est cette expérience de la liberté et de la responsabilité.',
        premises: ['L\'angoisse est vertige devant la liberté', 'Je peux choisir n\'importe quel possible', 'Rien ne me détermine à priori', 'Je suis responsable de mes choix'],
        conclusion: 'Donc l\'existence est liberté absolue et responsabilité totale'
      }
    ],
    objections: [
      {
        objection: 'Objection essentialiste',
        content: 'Il existe une nature humaine universelle (biologie, psychologie). L\'essence précède l\'existence : nous sommes nés avec certaines caractéristiques.',
        response: 'Sartre répond que même les caractéristiques naturelles ne nous déterminent pas. Ce qui compte est comment nous nous situons par rapport à elles. L\'homme est toujours ce qu\'il fait de ce qu\'on a fait de lui.'
      },
      {
        objection: 'Objection déterministe',
        content: 'Nos choix sont déterminés par l\'hérédité, l\'éducation, le social. La liberté est illusion. L\'existence n\'est pas liberté mais soumission aux causes.',
        response: 'Le déterminisme n\'explique pas pourquoi nous avons le sentiment de liberté. L\'existence authentique est précisément la reconnaissance de cette liberté même dans les contraintes.'
      },
      {
        objection: 'Objection scientiste',
        content: 'L\'existence n\'est qu\'un processus biologique. La question "pourquoi existe-t-il?" n\'a pas de sens scientifique. L\'existence est fait, pas finalité.',
        response: 'La science explique comment nous existons, pas pourquoi nous existons ni ce que signifie exister. L\'existence comme sens est question philosophique, pas scientifique.'
      }
    ],
    distinctions: [
      {
        distinction: 'Existence vs Essence',
        explanation: 'L\'essence est la nature, les propriétés définissant ce qu\'est une chose. L\'existence est le fait d\'être réalisé. Pour Sartre, chez l\'homme, l\'existence précède l\'essence.'
      },
      {
        distinction: 'Existence vs Réalité',
        explanation: 'La réalité est tout ce qui est, y compris les abstraits (nombres, concepts). L\'existence est le mode d\'être des êtres concrets, individuels, spatio-temporels.'
      },
      {
        distinction: 'Existence authentique vs inauthentique (Heidegger)',
        explanation: 'L\'existence authentique est assumer sa finitude, sa liberté, sa mortalité. L\'existence inauthentique est fuir dans le " on " (conformisme, distraction).'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      conceptId: 'etre',
      relation: 'BUILDS_ON',
      explanation: 'L\'existence est le mode d\'être des êtres concrets. Heidegger : l\'existence est structure de l\'être-là (Dasein).'
    },
    {
      conceptId: 'essence',
      relation: 'OPPOSE',
      explanation: 'Essence vs existence : classique (essence précède l\'existence) vs existentialiste (existence précède l\'essence).'
    },
    {
      conceptId: 'liberte',
      relation: 'REQUIRES',
      explanation: 'Pour les existentialistes, l\'existence est liberté. Je suis projet vers moi-même.'
    },
    {
      conceptId: 'mort',
      relation: 'GIVES_MEANING',
      explanation: 'La mort donne son sens à l\'existence. L\'être-pour-la-mort est condition de l\'authenticité.'
    },
    {
      conceptId: 'temps',
      relation: 'STRUCTURES',
      explanation: 'L\'existence est temporelle : je suis jeté (passé), projeté (avenir), tombé (présent).'
    },
    {
      conceptId: 'sens',
      relation: 'SEEKS',
      explanation: 'L\'existence est la quête perpétuelle de sens. Pour Camus, l\'existence est absurde : désir de sens face à un monde silencieux.',
      bidirectional: true,
      category: 'existentialisme'
    },
    {
      conceptId: 'connaissance',
      relation: 'PRECEDES',
      explanation: 'Pour Kierkegaard, l\'existence précède la connaissance systématique. On ne peut penser l\'existence, il faut la vivre.',
      bidirectional: true,
      category: 'epistemologie'
    },
    {
      conceptId: 'angoisse',
      relation: 'REVEALS',
      explanation: 'L\'angoisse révèle la vérité de l\'existence : ma liberté absolue, ma responsabilité totale. Kierkegaard : l\'angoisse est le vertige de la liberté.',
      bidirectional: true,
      category: 'psychologie'
    },
    {
      conceptId: 'authenticite',
      relation: 'REALIZES',
      explanation: 'L\'existence authentique est assumer sa condition, refuser la mauvaise foi. L\'existence est le lieu de l\'authenticité ou de l\'inauthenticité.',
      bidirectional: true,
      category: 'existentialisme'
    },
    {
      conceptId: 'dieu',
      relation: 'RELATES',
      explanation: 'Pour Kierkegaard, l\'existence authentique est rapport à Dieu. Pour les existentialistes athées, l\'existence sans Dieu crée l\'angoisse de la liberté absolue.',
      bidirectional: true,
      category: 'spiritualite'
    },
    {
      conceptId: 'bonheur',
      relation: 'QUESTIONS',
      explanation: 'L\'existence a-t-elle pour but le bonheur ? Pour Sartre, l\'existence est projet de soi, pas recherche du bonheur. Le bonheur est peut-êtreaccessoire.',
      bidirectional: true,
      category: 'ethique'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Existentialisme',
      description: 'Sartre, Heidegger, Kierkegaard : l\'existence précède l\'essence, l\'homme est projet de lui-même, liberté absolue.'
    },
    {
      movement: 'Phénoménologie',
      description: 'Analyse de l\'existence comme expérience vécue, retour aux choses elles-mêmes.'
    },
    {
      movement: 'Christianisme existential',
      description: 'Pascal, Kierkegaard : l\'existence comme foi, pari, engagement personnel.'
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `La question de l\'existence commence avec Parménide : ' l\'être est, le non-être n\'est pas ". L\'existence est identifiée à l\'être.

Platon distingue deux mondes : le monde des Idées (éternel, parfait) et le monde sensible (imparfait, changeant). L\'existence sensible est dégradation de l\'essence idéale.

Descartes fonde la philosophie moderne sur l\'existence du sujet : le cogito (" je pense, donc je suis ") est vérité première indubitable.

Kierkegaard, père de l\'existentialisme', insiste sur l\'existence comme subjectivité, passion, engagement. L\'existence ne se conceptualise pas, elle se vit.

Heidegger analyse l\'existence comme " être-au-monde " : le Dasein est toujours déjà engagé dans un monde, projeté vers ses possibilités. L\'existence est Ek-sistere : se tenir hors de soi.

Sartre radicalise : "l\'existence précède l\'essence", l\'homme n\'est rien d\'abord, il sera ensuite ce qu\'il fera de lui-même. Il est condamné à être libre.

Aujourd\'hui, l\'existence reste question centrale : comment exister authentiquement dans un monde désenchanté ? Quel sens donner à son existence ?`,

    problems: [
      {
        problem: 'Problème de l\'existence de Dieu',
        description: 'Dieu existe-t-il ? Les preuves de son existence sont-elles convaincantes ? L\'existence peut-elle être prouvée ?'
      },
      {
        problem: 'Problème du sens de l\'existence',
        description: 'L\'existence a-t-elle un sens ? Ou sommes-nous condamnés à créer notre propre sens ?'
      },
      {
        problem: 'Problème de l\'authenticité',
        description: 'Qu\'est-ce qu\'exister authentiquement ? Comment ne pas se perdre dans le conformisme, la distraction ?'
      }
    ],

    debates: [
      {
        issue: 'Essence ou existence d\'abord ?',
        positions: [
          {
            philosopher: 'Platon',
            position: 'L\'essence précède l\'existence : les Idées sont modèles, les choses existantes sont copies.'
          },
          {
            philosopher: 'Sartre',
              position: 'L\'existence précède l\'essence : l\'homme existe d\'abord, puis se définit. Pas de nature humaine.'
          },
          {
            philosopher: 'Heidegger',
            position: 'L\'existence est structure de l\'être-là : être-jeté, projet, chute. Essence et existence ne se séparent pas.'
          }
        ]
      },
      {
        issue: 'Qu\'est-ce que vivre authentiquement ?',
        positions: [
          {
            philosopher: 'Kierkegaard',
            position: 'L\'authenticité est engagement passionné, choix individuel, foi. Se choisir soi-même.'
          },
          {
            philosopher: 'Heidegger',
            position: 'L\'authenticité est assumer sa mortalité, être-pour-la-mort, choisir son destin.'
          },
          {
            philosopher: 'Sartre',
            position: 'L\'authenticité est reconnaître sa liberté absolue et sa responsabilité. Pas d\'excuses.'
          }
        ]
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Existence précède l\'essence (Sartre)',
      description: 'Sartre formule ce principe dans L\'existentialisme est un humanisme. L\'homme existe d\'abord, se rencontre, surgit dans le monde, et seulement ensuite se définit. Il n\'y a pas de nature humaine donnée par Dieu : l\'homme est ce qu\'il fait de lui-même. L\'existence est liberté absolue, projet vers un avenir non déterminé.'
    },
    {
      title: 'Être-au-monde (Heidegger)',
      description: 'Pour Heidegger, l\'existence n\'est pas être dans le monde (comme un objet dans un conteneur) mais être-au-monde : le Dasein est toujours déjà engagé, impliqué dans le monde. L\'existence est structure d\'être : être-jeté (passé), projet (avenir), chute (présent). Ek-sistere signifie se tenir hors de soi, vers ses possibilités.'
    },
    {
      title: 'Existence comme subjectivité (Kierkegaard)',
      description: 'Kierkegaard oppose existence et système. La vérité n\'est pas objective mais subjective : ce qui compte est comment je existe, pas ce que je sais. L\'existence est intériorité, passion, engagement. On ne peut penser l\'existence, il faut la vivre dans l\'angoisse, la décision, le risque.'
    },
    {
      title: 'Existence comme roseau pensant (Pascal)',
      description: 'Pascal décrit l\'homme comme " un roseau pensant " : faible comme un roseau, mais conscient de sa faiblesse. L\'existence humaine est conscience d\'elle-même et de sa finitude. Cette conscience est à la fois grandeur (nous pouvons penser) et misère (nous sommes mortels, fragiles).'
    },
    {
      title: 'Cogito comme existence certaine (Descartes)',
      description: 'Descartes découvre une vérité indubitable : le cogito. En doutant de tout, je découvre que je ne peux douter que je doute. " Je pense, donc je suis ". Cette existence du sujet pensant est fondement de toute connaissance. L\'existence devient certitude subjective, point de départ de la philosophie moderne.'
    },
    {
      title: 'Existence authentique vs inauthentique',
      description: 'Heidegger distingue existence authentique (eigentlich) et inauthentique (uneigentlich). L\'existence authentique est assumer sa mortalité, se choisir soi-même, être-responsable. L\'existence inauthentique est fuir dans le " on " (conformisme), se distraire, éviter l\'angoisse de la liberté.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'L\'existence précède l\'essence, l\'homme comme projet de lui-même' },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Analyse de l\'existence comme être-au-monde et être-pour-la-mort' },
    { name: 'Søren Kierkegaard', period: '1813-1855', contribution: 'L\'existence comme subjectivité, passion, engagement personnel' },
    { name: 'René Descartes', period: '1596-1650', contribution: 'Le cogito comme fondement de l\'existence certaine du sujet' },
    { name: 'Blaise Pascal', period: '1623-1662', contribution: 'L\'homme comme roseau pensant, grandeur et misère de la condition humaine' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le choix du métier : Je choisis d\'être médecin, artiste, ouvrier. Ce choix n\'est pas prédéterminé par une nature humaine. Je me fais par mes choix. Sartre : "l\'homme n\'est rien d\'abord, il sera ensuite ce qu\'il fera de lui-même".',
    'Le mariage forcé vs choisi : Un mariage arrangé où je n\'ai pas choisi est inauthentique. Un mariage où je m\'engage librement est authentique. L\'authenticité est assumer ses choix, pas subir ce qui arrive.',
    'Le soldat qui déserte : Sartre prend l\'exemple d\'un soldat qui peut choisir de déserte ou rester. Son choix l\'engage totalement. Il est responsable de ce choix. Cette responsabilité est vertige mais aussi dignité.',
    'L\'angoisse du vide : Face à l\'absence de sens, je peux me perdre dans la distraction (TV, drogue, travail) ou assumer le vide et créer mon propre sens. L\'authenticité est affronter cette angoisse, pas la fuir.',
    'Le pari de Pascal : Face à l\'incertitude sur l\'existence de Dieu, je dois parier. Parier que Dieu existe est rationnel : gain infini si gain, perte finie si perte. L\'existence est engagement, pas certitude.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'L\'existentialisme est un humanisme',
      author: 'Jean-Paul Sartre',
      year: 1946,
      type: 'BOOK' as const,
      reference: 'Présentation de la thèse "l\'existence précède l\'essence"',
      quotes: [
        'L\'existence précède l\'essence.',
        'L\'homme n\'est rien d\'abord, il sera ensuite ce qu\'il fera de lui-même.',
        'L\'homme est condamné à être libre.',
        'L\'homme est responsable de tout.',
        'Il n\'y a pas de nature humaine.',
        'L\'homme est un projet qui se vit subjectivement.'
      ]
    },
    {
      title: 'Être et Temps',
      author: 'Martin Heidegger',
      year: 1927,
      type: 'BOOK' as const,
      reference: 'Analyse de l\'existence comme être-au-monde',
      quotes: [
        'L\'essence du Dasein est dans son existence.',
        'Le Dasein est être-au-monde.',
        'L\'existence est Ek-sistere.',
        'Le Dasein est jeté dans le monde.',
        'Le Dasein est être-pour-la-mort.',
        'Le " on " est mode d\'existence inauthentique.'
      ]
    },
    {
      title: 'Traité du désespoir',
      author: 'Søren Kierkegaard',
      year: 1849,
      type: 'BOOK' as const,
      reference: 'L\'existence comme subjectivité et engagement',
      quotes: [
        'La subjectivité est la vérité.',
        'L\'existence est le but de la philosophie.',
        'On ne peut penser l\'existence.',
        'La foi est paradoxale et passionnée.',
        'Le christianisme est existence, pas doctrine.'
      ]
    },
    {
      title: 'Méditations métaphysiques',
      author: 'René Descartes',
      year: 1641,
      type: 'BOOK' as const,
      reference: 'Le cogito comme fondement de l\'existence',
      quotes: [
        'Je pense, donc je suis.',
        'Cette vérité est première et certaine.',
        'Je suis une chose qui pense.',
        'L\'existence du sujet est indubitable.'
      ]
    },
    {
      title: 'Pensées',
      author: 'Blaise Pascal',
      year: 1670,
      type: 'BOOK' as const,
      reference: 'L\'homme comme roseau pensant',
      quotes: [
        'L\'homme est un roseau pensant.',
        'L\'homme passe infiniment l\'homme.',
        'Le silence éternel de ces espaces infinis m\'effraie.',
        'L\'homme est ni ange ni bête.',
        'Grandeur et misère de l\'homme.',
        'Il faut parier.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Que signifie "l\'existence précède l\'essence"?',
      back: 'Pour Sartre, l\'homme existe d\'abord, se rencontre, surgit dans le monde, et seulement ensuite se définit. Il n\'y a pas de nature humaine donnée (ni par Dieu ni par la biologie). L\'homme sera ensuite ce qu\'il fera de lui-même par ses choix. L\'existence est liberté absolue, projet vers un avenir ouvert. Cette thèse s\'oppose à la conception classique où l\'essence (nature) précède l\'existence (réalisation).',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Heidegger définit-il l\'existence ?',
      back: 'Pour Heidegger, l\'existence (Ek-sistere) signifie "se tenir hors de soi" : le Dasein est toujours projeté vers ses possibilités. L\'existence est être-au-monde : pas être dans le monde comme objet dans conteneur, mais être toujours déjà engagé, impliqué. L\'existence a trois structures : être-jeté (passé), projet (avenir), chute (présent). L\'authenticité est assumer cette structure, l\'inauthenticité est fuir dans le "on".',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Kierkegaard conçoit-il l\'existence ?',
      back: 'Pour Kierkegaard, l\'existence est subjectivité, passion, engagement personnel. Elle ne se conceptualise pas : on ne peut penser l\'existence, il faut la vivre dans l\'angoisse, la décision, le risque. Il oppose existence et système : la vérité n\'est pas objective mais subjective (ce qui compte est comment je suis, pas ce que je sais). La foi est le sommet de l\'existence : engagement paradoxal sans garanties rationnelles.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Sartre résume l\'existentialisme ?',
      back: 'L\'existence précède l\'essence (L\'existentialisme est un humanisme, 1946)',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Pascal définit l\'homme ?',
      back: 'L\'homme est un roseau pensant (Pensées, 1670)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Sartre, l\'existence {{précède}} l\'essence. Pour Pascal, l\'homme est un {{roseau pensant}}.',
      back: 'précède | roseau pensant',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'L\'existence a-t-elle un sens ?',
      back: 'La question du sens de l\'existence est centrale pour l\'existentialisme. Pour Sartre, l\'existence n\'a pas de sens donné : nous sommes condamnés à créer notre propre sens par nos choix libres. Pour Camus, l\'existence est absurde : il y a un désir humain de sens mais un monde silencieux, indifférent. La réponse est soit le suicide (échec), soit le saut religieux (mauvaise foi), soit la révolte (assumer l\'absurde). Pour Pascal, le sens de l\'existence est dans la relation à Dieu, mais ce sens est pari, pas certitude. Pour Heidegger, le sens n\'est pas donné mais à accomplir par l\'authenticité. La question reste ouverte : l\'absence de sens donné est tragique ou libératrice ?',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['existence', 'essence', 'sartre', 'heidegger', 'kierkegaard', 'descartes', 'pascal', 'liberté', 'mort', 'authenticité', 'absurde', 'sens']
};
