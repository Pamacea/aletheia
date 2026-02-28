/**
 * Mauvaise foi - Concept Data
 * Auto-illusion par laquelle l'homme nie sa liberté absolue
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'mauvaise-foi',
  name: 'Mauvaise foi',
  slug: 'mauvaise-foi',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'La mauvaise foi est l\'auto-illusion par laquelle l\'être humain nie sa liberté absolue et sa responsabilité pour se conforter dans un déterminisme illusoire. Contrairement au mensonge qui trompe autrui, la mauvaise foi se ment à soi-même : elle est un « mensonge à soi » où le menteur et le trompé sont la même personne. Pour Sartre, la mauvaise foi cherche à fuir l\'angoisse de notre liberté en se réduisant à un objet, un rôle, une essence. Elle consiste à s\'identifier à ses déterminations (je suis « comme ça », je ne peux pas faire autrement) tout en sachant intimement que nous sommes libres. La mauvaise foi est une structure du « pour-soi » : c\'est la tentative contradictoire de se faire « en-soi », c\'est-à-dire d\'être une chose fixe et déterminée, sans liberté ni responsabilité. Cette tentative est vouée à l\'échec car la conscience ne peut jamais se réduire totalement à chose, mais elle structure néanmoins l\'existence inauthentique.',
  shortDefinition: 'Auto-illusion par laquelle l\'homme nie sa liberté absolue et sa responsabilité',

  // ===== DÉFINITION PHILOSOPHIQUE =====
  philosophicalDefinition: {
    analysis: 'La mauvaise foi repose sur une structure paradoxale : je sais et je ne sais pas que je suis libre. Cette ambiguïté est possible car la conscience n\'est pas un savoir théorique mais existence engagée. La mauvaise foi n\'est pas une ignorance (je ne sais pas) mais un mode d\'être : je vis comme si je n\'étais pas libre tout en sachant que je le suis. Sartre analyse cette structure comme « dénégation » (Verleugnung) : je nie ce qui est, mais cette négation présuppose ce qu\'elle nie. La mauvaise foi est donc « croyance » qui nie ce qu\'elle croit, « savoir » qui s\'ignore soi-même.',
    distinctions: [
      'Mauvaise foi vs Mensonge : Le mensonge trompe autrui (je sais, je dis le contraire). La mauvaise foi se trompe soi-même (je sais et je ne sais pas).',
      'Mauvaise foi vs Inconscient freudien : L\'inconscient est un refoulement inconscient. La mauvaise foi est un refus conscient de savoir ce qu\'on sait.',
      'Mauvaise foi vs « On » heideggérien : Le « On » est la structure inauthentique du quotidien. La mauvaise foi est le choix individuel de s\'y abriter.'
    ],
    implications: 'La mauvaise foi implique que l\'inauthenticité n\'est pas une fatalité mais un choix. Nous choisissons de nous mentir pour fuir l\'angoisse de notre liberté. Ce choix est « responsabilité » : nous sommes responsables de notre mauvaise foi elle-même.'
  },

  // ===== RAISONNEMENTS PHILOSOPHIQUES =====
  reasoning: [
    {
      title: 'L\'argument de la double conscience',
      argument: 'La mauvaise foi est possible car la conscience est structurellement divisée : elle est conscience de soi (je sais que je suis libre) et négation de soi (je me nie comme libre). Cette division n\'est pas accidentelle mais essentielle à la conscience.',
      premises: [
        'La conscience est toujours « conscience de » (intentionnalité)',
        'La conscience est conscience de soi (auto-réflexivité)',
        'La conscience peut se nier elle-même (négation)',
        'La mauvaise foi utilise cette négation pour se nier comme liberté'
      ],
      conclusion: 'La mauvaise foi est possible car la conscience peut savoir et ne pas savoir simultanément.',
      objections: [
        { philosopher: 'Merleau-Ponty', objection: 'Cette analyse de la conscience comme pure néantisation est abstraite. La mauvaise foi s\'enracine dans l\'ambiguïté du corps et du monde, pas dans une pure conscience de soi.' },
        { philosopher: 'Les psychanalystes', objection: 'La « mauvaise foi » qui présuppose la conscience de soi ignore l\'inconscient. Le « je ne peux pas » peut être sincère, le refoulement existe.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'L\'inconscient freudien est une hypothèse inutile qui nie la liberté. La mauvaise foi n\'est pas refoulement mais choix de ne pas savoir ce qu\'on sait. Merleau-Ponty a raison de souligner l\'ancrage corporel, mais la mauvaise foi reste un mode d\'être du pour-soi.' }
      ]
    },
    {
      title: 'L\'argument de la facticité',
      argument: 'La mauvaise foi consiste à privilégier la facticité (ce que je suis) sur la transcendance (ce que je ne suis pas encore). Elle réduit le pour-soi à l\'en-soi.',
      premises: [
        'L\'homme est à la fois facticité (corps, passé, situation) et transcendance (liberté, projet)',
        'La mauvaise foi privilégie la facticité pour fuir la transcendance',
        'Elle s\'identifie à ses déterminations (« je suis comme ça »)',
        'Cette identification est impossible car la conscience ne peut se réduire à chose'
      ],
      conclusion: 'La mauvaise foi est tentative ratée de se faire chose, tentative qui révèle la liberté qu\'elle cherche à fuir.',
      objections: [
        { philosopher: 'Heidegger', objection: 'L\'opposition facticité/transcendance est une abstraction dualiste. L\'être-là est « être-jeté » (Geworfenheit) indissociablement projet et facticité.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'L\'opposition est réelle mais indissociable : la mauvaise foi est précisément le refus d\'assumer cette indissociabilité. Elle privilégie un aspect (facticité) pour fuir l\'autre (transcendance).' }
      ]
    },
    {
      title: 'L\'argument de la responsabilité',
      argument: 'La mauvaise foi ne supprime pas la responsabilité, elle l\'aggrave. Nous sommes responsables non seulement de nos actes mais de notre auto-illusion elle-même.',
      premises: [
        'La mauvaise foi est un choix (choisir de se mentir)',
        'Tout choix engage la responsabilité',
        'Nous sommes responsables de nos choix',
        'Donc nous sommes responsables de notre mauvaise foi'
      ],
      conclusion: '« Je suis responsable de tout, sauf de ma responsabilité elle-même » (Sartre) : la mauvaise foi ne dispense pas de répondre.',
      objections: [
        { philosopher: 'Les moralistes', objection: 'Si nous sommes responsables de notre mauvaise foi, alors la mauvaise foi est impossible (je ne peux pas choisir ce que je sais). C\'est un cercle vicieux.' }
      ],
      responses: [
        { philosopher: 'Sartre', response: 'Le cercle n\'est pas vicieux mais structurel. La mauvaise foi est précisément ce choix de ne pas assumer sa responsabilité. Elle est possible car nous sommes libres, et elle est impossible car elle nie cette liberté. Cette contradiction est le « faiticité du pour-soi ».' }
      ]
    }
  ],

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'mala fides',
    root: 'malus (mauvais) + fides (foi, confiance)',
    notes: 'En droit romain, la mauvaise foi est la tromperie, la dissimulation. En philosophie sartrienne, c\'est l\'auto-tromperie sur sa propre condition'
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Sartre - Le mensonge à soi',
      description: 'Dans L\'Être et le Néant (1943), Sartre analyse la mauvaise foi comme « mensonge à soi ». Contrairement au mensonge classique (je sais la vérité, je dis le contraire à autrui), la mauvaise foi me trompe moi-même : je sais et je ne sais pas que je suis libre. Cette contradiction est possible car la conscience est toujours « conscience de » : elle peut se nier tout en étant consciente de cette négation. La mauvaise foi cherche à fuir l\'angoisse de la liberté.',
    },
    {
      title: 'L\'exemple du garçon de café',
      description: 'Sartre prend l\'exemple d\'un garçon de café qui joue à être garçon de café avec une application rigoureuse : il accomplit son rôle avec trop de zèle, comme s\'il était ce rôle. Il se réduit à sa fonction (« je suis garçon de café ») pour fuir sa liberté d\'être autre chose. La mauvaise foi est cette identification à un rôle, cette dénégation de la liberté de changer.',
    },
    {
      title: 'L\'exemple de la femme sur un rendez-vous',
      description: 'Une femme a un rendez-vous galant. Elle sait que l\'homme désire elle, comme personne libre. Mais elle se détermine à ne voir en lui qu\'un « respectueux admirateur », comme si son désir était une propriété fixe de sa personne (« il est comme ça »). Elle transforme la liberté en chose pour éviter d\'avoir à choisir (accepter ou refuser). C\'est la mauvaise foi : nier la liberté d\'autrui pour fuir sa propre liberté de décision.',
    },
    {
      title: 'La dénégation',
      description: 'La mauvaise foi opère par dénégation : je nie ce qui est. Le homosexuel qui déclare « je suis comme ça, je ne peux pas faire autrement » est de mauvaise foi car il nie sa liberté de changer tout en la supposant (sinon il n\'aurait pas besoin de se justifier). La mauvaise foi est cette attitude ambigüe : je m\'affirme chose (déterminé) tout en me revendiquant sujet (libre).',
    },
    {
      title: 'Mauvaise foi et morale',
      description: 'La mauvaise foi n\'est pas nécessairement morale : elle peut être bienveillante (se mentir pour se rassurer) ou perverse (se mentir pour ne pas assumer ses crimes). Mais elle est toujours inauthentique : elle refuse la vérité de notre condition. L\'homme de bonne foi est celui qui reconnaît qu\'il est « condamné à être libre », sans fuite ni excuse.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    {
      name: 'Jean-Paul Sartre',
      period: '1905-1980',
      contribution: 'Analyse systématique de la mauvaise foi comme structure du pour-soi dans L\'Être et le Néant (1943). Sartre développe le concept comme « mensonge à soi » et analyse ses mécanismes (dénégation, identification à l\'en-soi).',
      works: ['L\'Être et le Néant', 'Huis clos', 'L\'Existentialisme est un humanisme'],
      quotes: [
        '« La mauvaise foi est un mensonge à soi. »',
        '« L\'homme est condamné à être libre. »',
        '« Je suis ce que je suis et je ne suis pas ce que je suis. »',
        '« La mauvaise foi cherche à fuir l\'angoisse de la liberté. »'
      ]
    },
    {
      name: 'Simone de Beauvoir',
      period: '1908-1986',
      contribution: 'Développement du concept de mauvaise foi dans Pour une morale de l\'ambiguïté (1947). Beauvoir souligne que l\'authenticité est refus des excuses et des justifications.',
      works: ['Pour une morale de l\'ambiguïté', 'Le Deuxième Sexe'],
      quotes: [
        '« L\'homme est libre, mais il est situé. »',
        '« L\'authenticité est refus des excuses et des justifications. »',
        '« On ne peut pas fonder la morale sur la mauvaise foi. »'
      ]
    },
    {
      name: 'Maurice Merleau-Ponty',
      period: '1908-1961',
      contribution: 'Critique de la notion de mauvaise foi dans Phénoménologie de la perception (1945). Merleau-Ponty analyse l\'ambiguïté de la perception et conteste l\'analyse sartrienne de la conscience.',
      works: ['Phénoménologie de la perception', 'Le Visible et l\'Invisible'],
      quotes: [
        '« La conscience est originellement perception du monde. »',
        '« Le corps est notre ancrage dans le monde. »'
      ]
    },
    {
      name: 'Albert Camus',
      period: '1913-1960',
      contribution: 'Critique de l\'auto-illusion dans Caligula (1944) et Le Mythe de Sisyphe (1942). Camus analyse la mauvaise foi comme refus de l\'absurde.',
      works: ['Caligula', 'Le Mythe de Sisyphe', 'L\'Homme révolté'],
      quotes: [
        '« La révolte naît de la comparaison entre l\'homme et son destin. »',
        '« Le sens de la vie est la question la plus urgente. »'
      ]
    },
    {
      name: 'Martin Heidegger',
      period: '1889-1976',
      contribution: 'Le « On » (das Man) comme structure de l\'inauthenticité dans Être et Temps (1927). Heidegger analyse la vie quotidienne comme fuite devant l\'angoisse.',
      works: ['Être et Temps', 'Qu\'est-ce que la métaphysique?'],
      quotes: [
        '« Le « On » est l\'être-le-plus-proche de l\'être-là. »',
        '« Le « On » divise toute décision authentique. »',
        '« L\'angoisse nous arrache à l\'inauthenticité du quotidien. »'
      ]
    }
  ],

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      name: 'Authenticité',
      type: 'OPPOSES',
      description: 'L\'authenticité est le refus de la mauvaise foi. L\'homme authentique reconnaît sa liberté et sa responsabilité sans fuite ni excuse.',
      bidirectional: true
    },
    {
      name: 'Angoisse',
      type: 'TRIGGERS',
      description: 'La mauvaise foi cherche à fuir l\'angoisse de notre liberté absolue. L\'angoisse est la vérité que la mauvaise foi nie.',
      bidirectional: true
    },
    {
      name: 'Liberté',
      type: 'DENIES',
      description: 'La mauvaise foi nie notre liberté absolue en se réduisant à un rôle, une chose, une essence.',
      bidirectional: false
    },
    {
      name: 'Responsabilité',
      type: 'DENIES',
      description: 'La mauvaise foi nie notre responsabilité en invoquant un déterminisme illusoire (« je ne peux pas », « c\'est comme ça »).',
      bidirectional: false
    },
    {
      name: 'En-soi / Pour-soi',
      type: 'RELATES_TO',
      description: 'La mauvaise foi est la tentative du pour-soi (conscience libre) de se faire en-soi (chose déterminée). Cette tentative est vouée à l\'échec.',
      bidirectional: true
    },
    {
      name: 'Déterminisme',
      type: 'INVOKES_ILLUSORY',
      description: 'La mauvaise foi invoque un déterminisme illusoire pour fuir la liberté. Elle transforme « je ne veux pas » en « je ne peux pas ».',
      bidirectional: false
    }
  ],

  // ===== COURANTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      name: 'Existentialisme sartrien',
      description: 'La mauvaise foi est un concept central de l\'existentialisme de Sartre. Elle illustre la condition humaine comme « condamnation à être libre ».',
      role: 'CONCEPT_CENTRAL',
      keyPhilosophers: ['Jean-Paul Sartre', 'Simone de Beauvoir']
    },
    {
      name: 'Phénoménologie',
      description: 'La mauvaise foi est analysée à partir de la méthode phénoménologique : description des structures de la conscience.',
      role: 'RELATED',
      keyPhilosophers: ['Jean-Paul Sartre', 'Maurice Merleau-Ponty', 'Edmund Husserl']
    },
    {
      name: 'Ontologie fondamentale',
      description: 'Le « On » heideggérien comme structure de l\'inauthenticité est analogue à la mauvaise foi sartrienne.',
      role: 'RELATED',
      keyPhilosophers: ['Martin Heidegger', 'Jean-Paul Sartre']
    },
    {
      name: 'Psychanalyse',
      description: 'La mauvaise foi se distingue du refoulement freudien. Sartre critique l\'inconscient comme hypnèse qui nie la liberté.',
      role: 'CONTRASTS_WITH',
      keyPhilosophers: ['Sigmund Freud', 'Jean-Paul Sartre']
    },
    {
      name: 'Absurdisme',
      description: 'La mauvaise foi comme refus de l\'absurde. Camus analyse l\'auto-illusion comme négation de la condition humaine.',
      role: 'RELATED',
      keyPhilosophers: ['Albert Camus', 'Emil Cioran']
    }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le garçon de café : Sartre décrit un serveur qui joue son rôle avec une application excessive. Il se réduit à être « garçon de café » comme si c\'était sa nature, pour fuir la liberté d\'être autre chose. La mauvaise foi est cette identification à un rôle.',
    'La femme sur un rendez-vous : Elle sait que l\'homme la désire comme liberté, mais elle décide de ne voir en lui qu\'un « respectueux admirateur » comme si son désir était une qualité figée. Elle nie la liberté d\'autrui pour fuir sa propre liberté de choix.',
    'Le « je ne peux pas » : Celui qui dit « je ne peux pas » quand il pourrait mais ne veut pas. La mauvaise foi transforme « je ne veux pas » (liberté) en « je ne peux pas » (détermination) pour fuir la responsabilité.',
    'L\'antisémite selon Sartre : L\'antisémite est de mauvaise foi car il veut être « une chose parmi les choses », il refuse la liberté en lui et chez les autres. Il choisit la passion (haine) comme détermination pour ne pas avoir à choisir et juger.',
    'Le « c\'est plus fort que moi » : L\'alcoolique qui déclare « je ne peux pas arrêter, c\'est plus fort que moi » est de mauvaise foi car il nie sa liberté d\'arrêter. Il préfère s\'identifier à sa dépendance comme essence que de reconnaître sa liberté de changer.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Traité d\'ontologie phénoménologique avec analyse célèbre de la mauvaise foi',
      quotes: [
        'La mauvaise foi est un mensonge à soi.',
        'L\'homme est condamné à être libre.',
        'La mauvaise foi cherche à fuir l\'angoisse de la liberté.',
        'Je suis ce que je suis et je ne suis pas ce que je suis.',
        'Le pour-soi cherche à se faire en-soi.',
        'La mauvaise foi est la tentative contradictoire de se faire chose.',
        'Nous sommes des êtres qui ne sommes pas ce que nous sommes et qui sommes ce que nous ne sommes pas.',
        'La mauvaise foi nie la transcendance du pour-soi.'
      ]
    },
    {
      title: 'Huis clos',
      author: 'Jean-Paul Sartre',
      year: 1944,
      type: 'PLAY' as const,
      reference: 'Pièce de théâtre illustrant la mauvaise foi et le regard d\'autrui',
      quotes: [
        'L\'enfer, c\'est les autres.',
        'Vous n\'avez que ce que vous méritez.',
        'On est ce que l\'on fait de soi.',
        'Les autres sont l\'enfer parce qu\'ils me réduisent à objet sous leur regard.',
        'Je suis emprisonné dans ma liberté.'
      ]
    },
    {
      title: 'Pour une morale de l\'ambiguïté',
      author: 'Simone de Beauvoir',
      year: 1947,
      type: 'BOOK' as const,
      reference: 'Essai sur l\'authenticité morale et la refus de la mauvaise foi',
      quotes: [
        'L\'homme est libre, mais il est situé.',
        'La liberté est la source de toute valeur.',
        'L\'authenticité est refus des excuses et des justifications.',
        'On ne peut pas fonder la morale sur la mauvaise foi.',
        'L\'oppression est le refus de la liberté d\'autrui.',
        'L\'existence est ambiguë : nous sommes à la fois sujet et objet.'
      ]
    },
    {
      title: 'L\'Existentialisme est un humanisme',
      author: 'Jean-Paul Sartre',
      year: 1946,
      type: 'BOOK' as const,
      reference: 'Conférence présentant l\'existentialisme et critiquant les critiques de mauvaise foi',
      quotes: [
        'L\'existence précède l\'essence.',
        'L\'homme est libre, l\'homme est liberté.',
        'Nous sommes seuls, sans excuse.',
        'L\'homme n\'est rien d\'autre que ce qu\'il fait de lui-même.',
        'Le lâche est responsable de sa lâcheté.',
        'Le héros est responsable de son héroïsme.',
        'Il n\'y a pas de nature humaine, car il n\'y a pas de Dieu.'
      ]
    },
    {
      title: 'Réflexions sur la question juive',
      author: 'Jean-Paul Sartre',
      year: 1946,
      type: 'BOOK' as const,
      reference: 'Essai sur l\'antisémitisme comme mauvaise foi et refus de la liberté',
      quotes: [
        'L\'antisémite veut être une chose parmi les choses.',
        'Il choisit la haine pour éviter le jugement.',
        'L\'antisémite est un homme qui a peur.',
        'Il refuse la liberté en lui et chez les autres.',
        'C\'est un être de mauvaise foi.',
        'L\'antisémitisme est une passion qui cherche à se justifier.'
      ]
    },
    {
      title: 'Les Mots',
      author: 'Jean-Paul Sartre',
      year: 1964,
      type: 'BOOK' as const,
      reference: 'Autobiographie analysant la mauvaise foi de l\'enfant qui se prend pour un héros de livre',
      quotes: [
        'Je me prenais pour un héros de livre.',
        'J\'ai menti ma jeunesse.',
        'Les mots étaient mes compagnons.',
        'Je croyais jouer alors que je vivais.',
        'L\'enfant est un être de mauvaise foi.',
        'J\'ai fait de mon enfature une littérature.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que la mauvaise foi selon Sartre ?',
      back: 'La mauvaise foi est l\'auto-illusion par laquelle l\'être humain nie sa liberté absolue et sa responsabilité. C\'est un « mensonge à soi » où l\'on se réduit à un rôle, une chose, une essence, pour fuir l\'angoisse de notre liberté.',
      difficulty: 2
    },
    {
      type: 'BASIC' as const,
      front: 'Quelle différence entre le mensonge et la mauvaise foi ?',
      back: 'Le mensonge trompe autrui : je sais la vérité, je dis le contraire à quelqu\'un d\'autre. La mauvaise foi se trompe soi-même : je sais et je ne sais pas que je suis libre, je me mens à moi-même. Dans le mensonge, le menteur et le trompé sont distincts ; dans la mauvaise foi, ils sont la même personne.',
      difficulty: 3
    },
    {
      type: 'BASIC' as const,
      front: 'Quel est l\'exemple du garçon de café chez Sartre ?',
      back: 'Le garçon de café qui joue son rôle avec une application excessive, comme s\'il était ce rôle. Il se réduit à être « garçon de café » comme si c\'était sa nature, pour fuir sa liberté d\'être autre chose. C\'est un exemple de mauvaise foi : identification à un rôle.',
      difficulty: 2
    },
    {
      type: 'BASIC' as const,
      front: 'Quel est l\'exemple de la femme sur un rendez-vous chez Sartre ?',
      back: 'Une femme qui sait que l\'homme la désire comme liberté, mais décide de ne voir en lui qu\'un « respectueux admirateur » comme si son désir était une qualité figée. Elle nie la liberté d\'autrui pour fuir sa propre liberté de décision (accepter ou refuser).',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment la mauvaise foi se relie-t-elle à l\'angoisse ?',
      back: 'La mauvaise foi cherche à fuir l\'angoisse de notre liberté absolue. Reconnaître que nous sommes totalement libres et responsables est angoissant. Pour échapper à cette angoisse, la mauvaise foi se ment : elle nie la liberté (« je ne peux pas », « c\'est comme ça », « c\'est plus fort que moi ») et se réduit à une chose déterminée.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment la mauvaise foi se relie-t-elle à l\'authenticité ?',
      back: 'L\'authenticité est le refus de la mauvaise foi. L\'homme authentique reconnaît qu\'il est « condamné à être libre », qu\'il n\'a pas d\'essence prédéterminée et qu\'il est totalement responsable. L\'inauthentique (mauvaise foi) nie cette liberté pour se rassurer, s\'identifie à un rôle, invoque un déterminisme illusoire.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la dénégation dans la mauvaise foi ?',
      back: 'La dénégation est le mécanisme de la mauvaise foi : je nie ce qui est. L\'homosexuel qui dit « je suis comme ça, je ne peux pas changer » nie sa liberté (il sait qu\'il pourrait changer tout en disant le contraire). La mauvaise foi est cette ambiguïté : je m\'affirme chose (déterminé) tout en me revendiquant sujet (libre).',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Sartre résume la condition humaine ?',
      back: '« L\'homme est condamné à être libre » (L\'Être et le Néant, 1943) - Nous sommes libres sans l\'avoir choisi, et cette liberté est une condamnation car elle nous rend responsables de tout.',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Sartre, la mauvaise foi est un {{mensonge}} à {{soi}}.',
      back: 'mensonge | soi',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'La mauvaise foi cherche à fuir l\'{{angoisse}} de la {{liberté}}.',
      back: 'angoisse | liberté',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'Pourquoi la mauvaise foi est-elle possible malgré la conscience de soi ?',
      back: 'La mauvaise foi semble paradoxale : comment se tromper soi-même quand on est conscience de soi ? Sartre répond que la conscience n\'est pas un savoir théorique mais existence engagée. La mauvaise foi est possible car la conscience est ambiguë : elle est à la fois conscience de soi (je sais que je suis libre) et négation de soi (je me nie comme libre). Le garçon de café sait qu\'il joue à être garçon de café, mais il est ce jeu. La mauvaise foi n\'est pas une ignorance mais un mode d\'être : c\'est se choisir comme chose tout en sachant qu\'on ne l\'est pas. Cette contradiction est le « faiticité du pour-soi » : nous sommes à la fois conscience (liberté) et chose (corps, situation). La mauvaise foi consiste à privilégier un aspect (la chose) pour fuir l\'autre (la liberté), mais cette fuite est toujours fragile car la conscience ne peut jamais se réduire totalement à chose.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['mauvaise foi', 'sartre', 'authenticité', 'liberté', 'angoisse', 'mensonge', 'responsabilité', 'pour-soi', 'en-soi', 'existence', 'inauthenticité']
};
