/*
  Dieu - Concept Data
  Être suprême, créateur, transcendance, principe premier
*/
export const concept = {
  // ===== IDENTITÉ =====
  id: 'dieu',
  name: 'Dieu',
  slug: 'dieu',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 5,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Dieu est l\'être suprême, créateur de l\'univers, principe premier et fin dernière de tout ce qui existe. La philosophie distingue plusieurs conceptions : le théisme (Dieu personnel, créateur, provident) ; le déisme (Dieu créateur mais non intervenant) ; le panthéisme (Dieu identique au monde) ; l\'athéisme (négation de l\'existence de Dieu) ; l\'agnosticisme (impossibilité de connaître Dieu). Les preuves classiques de l\'existence de Dieu incluent : la preuve cosmologique (première cause) ; la preuve téléologique (finalité, ordre du monde) ; la preuve ontologique (être parfait nécessaire) ; la preuve morale (loi morale). Pour Pascal, Dieu est "le Dieu d\'Abraham, Dieu d\'Isaac, Dieu de Jacob, non des philosophes et des savants". Pour Kant, les preuves de l\'existence de Dieu sont invalides mais Dieu est postulat de la raison pratique. Pour Nietzsche, "Dieu est mort".',
  shortDefinition: 'Être suprême, créateur et transcendance, principe premier de tout ce qui existe',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'deus',
    greek: 'theos (θεός)',
    sanskrit: 'deva',
    root: 'dyeu- (briller, ciel lumineux) : racine indo-européenne',
    notes: 'Le terme désigne originellement la divinité solaire, céleste. Dieu est associé à la lumière, au ciel, à la puissance suprême.'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    // Perspectives par école philosophique
    perspectives: [
      {
        school: 'Preuve ontologique',
        philosopher: 'Saint Anselme',
        thesis: 'L\'existence de Dieu est démontrable a priori par la raison',
        argument: 'Nous avons l\'idée d\'un être parfait (plus grand que tout). Si cet être n\'existait que dans l\'entendement, il ne serait pas parfait car l\'existence réelle est plus grande que l\'existence seulement pensée. Donc il doit exister réellement, sinon il ne serait pas le plus grand possible. Dieu existe nécessairement comme être parfait.',
        conclusion: 'Dieu existe nécessairement comme être parfait (ens perfectissimum)'
      },
      {
        school: 'Preuve cosmologique',
        philosopher: 'Thomas d\'Aquin',
        thesis: 'Dieu existe comme première cause incausée du mouvement',
        argument: 'Tout ce qui existe a une cause. On ne peut pas remonter à l\'infini dans la chaîne des causes. Il faut donc nécessairement une première cause incausée : Dieu. C\'est la première voie parmi les cinq voies : le mouvement suppose un premier moteur immobile. La cause efficiente suppose une première cause. L\'être contingent suppose un être nécessaire.',
        conclusion: 'Dieu existe comme cause première incausée et moteur immobile'
      },
      {
        school: 'Preuve morale',
        philosopher: 'Søren Kierkegaard',
        thesis: 'Dieu est sujet de foi, pas d\'évidence rationnelle',
        argument: 'Les preuves de Dieu échouent car Dieu n\'est pas objet de connaissance mais sujet de foi. La foi est saut dans l\'absurde, par-delà la raison. Le "pari" de Pascal montre que croire est rationnel mais la foi véritable est engagement passionné, subjectif, risqué. Abraham est le modèle : il obéit à Dieu par-delà l\'éthique.',
        conclusion: 'Dieu comme objet de foi existentielle, pas de preuve rationnelle'
      }
    ],
    principalArguments: [
      {
        argument: 'Preuve cosmologique (Thomas d\'Aquin, cinq voies)',
        explanation: 'Tout ce qui existe a une cause. On ne peut pas remonter à l\'infini dans la chaîne des causes. Il faut donc nécessairement une première cause incausée : Dieu.',
        premises: ['Tout ce qui existe a une cause', 'On ne peut pas avoir une chaîne infinie de causes', 'Donc il doit y avoir une première cause', 'Cette première cause est Dieu'],
        conclusion: 'Dieu existe comme première cause incausée de tout ce qui existe'
      },
      {
        argument: 'Preuve téléologique (dessein intelligent, Paley)',
        explanation: 'L\'univers montre un ordre, une complexité, une finalité évidente (comme une montre qui suppose un horloger). Cet ordre ne peut pas être le fruit du hasard. Il faut donc un dessein intelligent : Dieu.',
        premises: ['L\'univers manifeste un ordre complexe et fonctionnel', 'Cet ordre ne peut pas résulter du hasard seul', 'Tout ordre complexe suppose une intelligence ordonnatrice', 'Cette intelligence ordonnatrice est Dieu'],
        conclusion: 'Dieu existe comme créateur intelligent de l\'univers'
      },
      {
        argument: 'Preuve ontologique (Saint Anselme, Descartes)',
        explanation: 'Nous avons l\'idée d\'un être parfait (plus grand que tout). Si cet être n\'existait que dans l\'entendement, il ne serait pas parfait car l\'existence réelle est plus grande que l\'existence seulement pensée. Donc il doit exister réellement.',
        premises: ['Nous avons l\'idée d\'un être parfait (plus grand que tout)', 'L\'existence réelle est plus grande que l\'existence seulement pensée', 'Si cet être n\'existait que dans l\'entendement, il ne serait pas parfait', 'Mais par définition, il est parfait', 'Donc il doit exister réellement'],
        conclusion: 'Dieu existe nécessairement comme être parfait'
      },
      {
        argument: 'Preuve morale (Kant)',
        explanation: 'La loi morale exige la perfection morale (sainteté) et l\'accord du bonheur avec la moralité. Or cette perfection est impossible dans ce monde. Donc il faut postuler l\'existence de Dieu et l\'immortalité de l\'âme pour réaliser l\'accord final entre vertu et bonheur.',
        premises: ['La loi morale exige la perfection morale', 'Cette perfection est impossible dans ce monde fini', 'La raison pratique postule la possibilité de ce qu\'elle ordonne', 'Donc il faut un être suprême qui réalise cet accord', 'Cet être est Dieu'],
        conclusion: 'Dieu existe comme postulat nécessaire de la raison pratique'
      }
    ],
    objections: [
      {
        objection: 'Critique kantienne de la preuve ontologique',
        content: 'L\'existence n\'est pas un prédicat réel. Dire "Dieu existe" n\'ajoute aucune propriété à l\'idée de Dieu.',
        response: 'Les défenseurs (Descartes, Leibniz) soutiennent que l\'existence nécessaire est une propriété unique : Dieu ne peut pas ne pas exister, contrairement aux êtres contingents.'
      },
      {
        objection: 'Critique humienne de la causalité',
        content: 'Nous ne pouvons pas connaître les causes ultimes. L\'idée de première cause est une projection de notre esprit, pas une nécessité logique.',
        response: 'La causalité est une catégorie de l\'entendement. Si tout ce qui existe a une cause, on ne peut pas s\'arrêter sans arbitraire : il faut une cause incausée.'
      },
      {
        objection: 'Critique darwinienne de la téléologie',
        content: 'L\'ordre et la complexité de l\'univers s\'expliquent par l\'évolution, la sélection naturelle, les lois physiques. Pas besoin de dessein intelligent.',
        response: 'L\'évolution explique la complexité biologique mais pas l\'existence des lois de la nature elles-mêmes. Pourquoi y a-t-il quelque chose plutôt que rien ?'
      },
      {
        objection: 'Critique du problème du mal',
        content: 'Si Dieu est tout-puissant et tout-bon, pourquoi le mal existe-t-il ? Soit Dieu n\'est pas tout-puissant, soit il n\'est pas tout-bon, soit il n\'existe pas.',
        response: 'Théodicées : le mal est privation du bien (Augustin), permission du libre arbitre (nécessaire pour l\'amour), moyen d\'une plus grand bien (mystère de la foi).'
      }
    ],
    distinctions: [
      {
        distinction: 'Théisme vs Déisme vs Panthéisme',
        explanation: 'Le théisme affirme un Dieu personnel, créateur, intervenant. Le déisme affirme un Dieu créateur mais non intervenant. Le panthéisme identifie Dieu avec le monde (Spinoza : Deus sive Natura).'
      },
      {
        distinction: 'Dieu des philosophes vs Dieu d\'Abraham',
        explanation: 'Le Dieu des philosophes est être parfait, cause première, architecte. Le Dieu d\'Abraham est personnel, aimant, salvateur, se révèle dans l\'histoire. Pascal critique le premier pour privilégier le second.'
      },
      {
        distinction: 'Athéisme vs Agnosticisme',
        explanation: 'L\'athéisme affirme que Dieu n\'existe pas. L\'agnosticisme soutient que nous ne pouvons pas savoir si Dieu existe (question hors de portée de la raison).'
      },
      {
        distinction: 'Immanence vs Transcendance',
        explanation: 'Dieu transcendant est au-delà du monde. Dieu immanent est présent dans le monde. Le christianisme affirme les deux : transcendant et immanent.'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      concept: 'création',
      relationship: 'Dieu est créateur de l\'univers. La création est acte libre de Dieu, production du monde à partir de rien (creatio ex nihilo).',
      bidirectional: true
    },
    {
      concept: 'infini',
      relationship: 'Dieu est infini : sans limites, sans borne. L\'infini divin est qualitatif (perfection), pas seulement quantitatif.',
      bidirectional: false
    },
    {
      concept: 'éternité',
      relationship: 'Dieu est éternel : hors temps, simultanéité totale. Pour Boèce, Dieu voit tout dans un présent éternel.',
      bidirectional: false
    },
    {
      concept: 'bien',
      relationship: 'Dieu est le bien suprême, la bonté par essence. Tout bien participe de Dieu.',
      bidirectional: false
    },
    {
      concept: 'mal',
      relationship: 'Le problème du mal : si Dieu est tout-puissant et tout-bon, pourquoi le mal ? Théodicées cherchent à répondre.',
      bidirectional: true
    },
    {
      concept: 'foi',
      relationship: 'La foi est adhésion à Dieu, confiance en sa parole. La foi rationnelle (Pascal) vs foi charismatique (Kierkegaard).',
      bidirectional: true
    },
    {
      concept: 'cause',
      relationship: 'Dieu est première cause incausée, cause de tout ce qui existe, sans être causé lui-même.',
      bidirectional: false
    },
    {
      concept: 'transcendance',
      relationship: 'Dieu est transcendant : au-delà du monde, distinct de sa création. Mais aussi immanent : présent dans le monde.',
      bidirectional: true
    },
    {
      concept: 'religion',
      relationship: 'La religion est organisation de la foi en Dieu. Rituel, communauté, pratique de la relation divine.',
      bidirectional: true
    },
    {
      concept: 'athéisme',
      relationship: 'L\'athéisme nie l\'existence de Dieu. Critique des preuves, explication naturelle du monde.',
      bidirectional: true
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Théisme classique',
      description: 'Dieu comme être personnel, créateur, provident. Preuves de l\'existence.',
      keyFigures: ['Thomas d\'Aquin', 'Saint Anselme', 'Descartes', 'Leibniz']
    },
    {
      movement: 'Déisme',
      description: 'Dieu créateur mais non intervenant. Horloger qui laisse la montre fonctionner.',
      keyFigures: ['Voltaire', 'Rousseau', 'Jefferson']
    },
    {
      movement: 'Panthéisme',
      description: 'Dieu identique au monde. Deus sive Natura.',
      keyFigures: ['Spinoza', 'Hegel']
    },
    {
      movement: 'Athéisme',
      description: 'Négation de l\'existence de Dieu. Critique des preuves, explication naturelle du monde.',
      keyFigures: ['Feuerbach', 'Marx', 'Nietzsche', 'Russell', 'Sartre']
    },
    {
      movement: 'Agnosticisme',
      description: 'Impossibilité de connaître Dieu. Question ouverte, indécidable.',
      keyFigures: ['Hume', 'Kant', 'Huxley']
    },
    {
      movement: 'Existentialisme chrétien',
      description: 'Dieu comme sujet de foi, pas objet de preuve. Saut dans l\'absurde.',
      keyFigures: ['Kierkegaard', 'Pascal', 'Marcel']
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: [
      {
        period: 'Antiquité grecque',
        description: 'Platon : Dieu comme démiurge (artisan du monde). Aristote : moteur immobile, acte pur. Stoïciens : logos divin, raison immanente.'
      },
      {
        period: 'Patristique médiévale',
        description: 'Saint Augustin : Dieu comme être parfait, trinité, créateur ex nihilo. Pseudo-Denys : théologie négative (Dire ce que Dieu n\'est pas).'
      },
      {
        period: 'Scolastique médiévale',
        description: 'Saint Anselme : preuve ontologique. Thomas d\'Aquin : cinq voies, somme théologique. Duns Scot : volonté divine. Ockham : omnipotence.'
      },
      {
        period: 'Moderne (XVIIe-XVIIIe)',
        description: 'Descartes : preuve ontologique, Dieu garant de la vérité. Spinoza : panthéisme (Deus sive Natura). Leibniz : meilleur des mondes possibles, preuve ontologique. Hume : critique des preuves.'
      },
      {
        period: 'XIXe siècle',
        description: 'Kant : critique des preuves mais postulat de la raison pratique. Hegel : panthéisme dialectique. Kierkegaard : saut de la foi. Nietzsche : "Dieu est mort". Marx : religion comme opium du peuple.'
      },
      {
        period: 'XXe siècle',
        description: 'Whitehead : théisme du processus. Barth : théologie dialectique (révélation seule). Tillich : Dieu comme "fondement de l\'être". Arendt : absence de Dieu après Auschwitz. Vatican II : ouverture au monde moderne.'
      },
      {
        period: 'XXIe siècle',
        description: 'Débat science/foi. Théorie de l\'évolution vs créationnisme. Dieu et big bang. Athéisme militant (Dawkins). Renouveau de l\'expérience spirituelle.'
      }
    ],
    debates: [
      {
        title: 'Les preuves de l\'existence de Dieu sont-elles valides ?',
        positions: [
          'Oui (Saint Anselme, Thomas d\'Aquin, Descartes, Leibniz) : Preuves cosmologique, téléologique, ontologique, morale sont valables.',
          'Non (Kant) : Preuve ontologique invalide (existence pas prédicat). Preuves cosmologique/téléologique dépendent de l\'expérience, donc pas certaines.',
          'Indécidable (Hume) : Nous ne pouvons pas connaître les causes ultimes. La question dépasse la raison humaine.',
          'Non nécessaire (Kierkegaard) : Dieu n\'est pas objet de preuve mais sujet de foi. Preuve tue la foi.'
        ]
      },
      {
        title: 'Comment résoudre le problème du mal ?',
        positions: [
          'Le mal comme privation (Augustin) : Le mal n\'est pas une chose mais absence du bien. Dieu n\'a pas créé le mal.',
          'Le mal comme conséquence du libre arbitre : Dieu a créé des êtres libres. Le mal est abus de cette liberté. Nécessaire pour l\'amour.',
          'Le mal comme mystère (Job) : Les voies de Dieu sont impénétrables. Humilité face à l\'incompréhensible.',
          'Le mal comme impossible (théologie du process) : Dieu n\'est pas tout-puissant au sens classique. Il persuade mais ne force pas.',
          'Pas de Dieu : Le mal est preuve que Dieu n\'existe pas ou n\'est ni tout-puissant ni tout-bon.'
        ]
      },
      {
        title: 'Dieu est-il transcendant ou immanent ?',
        positions: [
          'Transcendant (christianisme classique) : Dieu est au-delà du monde, distinct de sa création.',
          'Immanent (panthéisme, Spinoza) : Dieu est identique au monde. Deus sive Natura.',
          'Les deux (christianisme moderne) : Dieu est à la fois transcendant (au-delà) et immanent (présent dans le monde, dans les cœurs).'
        ]
      }
    ],
    contemporaryIssues: [
      {
        issue: 'Science et foi : compatibles ?',
        description: 'Big bang et création. Évolution et darwinisme vs créationnisme. Dieu des trous (expliquer ce que la science n\'explique pas encore). Concilisme (pas conflit mais dialogue) vs indépendance (magistères séparés).'
      },
      {
        issue: 'Dieu après Auschwitz',
        description: 'Comment croire en un Dieu d\'amour après la Shoah ? Théologie de la mort de Dieu (Altizer) ou protestation (Job). Silence de Dieu comme abdication ou comme respect de la liberté humaine ?'
      },
      {
        issue: 'Religions et violence',
        description: 'Les guerres de religion sont-elles inhérentes au religieux ? Dieu de paix vs Dieu de violence. Fanatisme et fondamentalisme. Tolérance religieuse.'
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Preuve ontologique (Saint Anselme, Descartes)',
      description: 'Saint Anselme propose dans le Proslogion : nous avons l\'idée d\'un être "tel que rien de plus grand ne puisse être pensé". Si cet être n\'existait que dans l\'entendement, il ne serait pas le plus grand possible (puisque l\'existence réelle est plus grande que l\'existence pensée). Donc il doit exister réellement.',
      philosophicalContext: 'Cette preuve a priori tente de démontrer Dieu par la seule raison, sans faire appel à l\'expérience. Elle reste controversée.'
    },
    {
      title: 'Cinq voies (Thomas d\'Aquin)',
      description: 'Thomas d\'Aquin propose cinq preuves a posteriori (basées sur l\'expérience) : 1) Le mouvement (tout ce qui bouge est mû par un autre, jusqu\'à un premier moteur immobile) ; 2) La cause efficiente (on ne peut remonter à l\'infini, il faut une première cause) ; 3) L\'être contingent (les êtres contingents supposent un être nécessaire) ; 4) Les degrés de perfection (il y a des degrés de bien, de beauté, donc il y a un parfait) ; 5) L\'ordre du monde (finalité suppose une intelligence ordonnatrice).',
      philosophicalContext: 'Ces preuves cosmologiques et téléologiques partent de l\'expérience pour remonter à Dieu comme cause première.'
    },
    {
      title: 'Panthéisme (Spinoza)',
      description: 'Spinoza identifie Dieu et la nature : Deus sive Natura. Dieu n\'est pas un être personnel créateur mais la substance unique infinie dont tout dérive. Tout est en Dieu, Dieu est en tout. Il n\'y a pas de création, pas de providence, pas de libre arbitre humain. Tout est nécessaire par la nature divine. Cette vision panthéiste scandalise les contemporains (Spinoza est excommunié) mais influence la philosophie moderne.',
      philosophicalContext: 'Le panthéisme refuse la transcendance : Dieu n\'est pas "ailleurs" mais ici, partout. L\'univers lui-même est divin.'
    },
    {
      title: 'Pari de Pascal',
      description: 'Pascal propose le pari comme décision pragmatique face à l\'incertitude sur Dieu. Si Dieu existe et que je crois, je gagne tout (béatitude éternelle). S\'il n\'existe pas, je ne perds rien (vie vertueuse). Si je ne crois pas et qu\'il existe, je perds tout. Si je ne crois pas et qu\'il n\'existe pas, je ne gagne rien. Donc il est rationnel de croire. Le pari ne prouve pas Dieu mais montre que la croyance est raisonnable.',
      philosophicalContext: 'C\'est une approche pragmatique de la foi, qui reconnaît l\'incertitude mais choisit de croire en raison de l\'enjeu infini.'
    },
    {
      title: 'Saut de la foi (Kierkegaard)',
      description: 'Kierkegaard s\'oppose aux preuves de Dieu. Pour lui, Dieu n\'est pas objet de connaissance mais sujet de foi. La foi est un saut dans l\'absurde, par-delà la raison. Le chrétien croit en l\'incarnation (Dieu fait homme) qui est absurde pour la raison. La preuve objective tue la foi car elle supprime le risque. La véritable foi est subjective, passionnée, risquée.',
      philosophicalContext: 'Cet existentialisme chrétien valorise la foi comme engagement existentiel, pas comme adhésion rationnelle à des vérités.'
    },
    {
      title: 'Mort de Dieu (Nietzsche)',
      description: 'Nietzsche annonce dans Ainsi parlait Zarathoustra : "Dieu est mort". Les hommes l\'ont tué. Cela signifie que la croyance en Dieu n\'est plus crédible dans la modernité. Les valeurs chrétiennes s\'effondrent. Il faut créer de nouvelles valeurs, devenir "surhumain".',
      philosophicalContext: 'Cette critique radicale du christianisme annonce l\'athéisme moderne et la nécessité de créer du sens sans Dieu.'
    },
    {
      title: 'Théisme du processus (Whitehead)',
      description: 'Whitehead propose une conception de Dieu qui n\'est pas tout-puissant au sens classique. Dieu est lui-même en devenir, influencé par le monde. Il ne peut pas empêcher le mal par la force car il respecte la liberté des créatures. Il persuade, inspire, mais ne force pas. Cette conception tente de résoudre le problème du mal en niant l\'omnipotence classique de Dieu.',
      philosophicalContext: 'Cette théologie moderne essaie de concilier la réalité du mal avec l\'existence de Dieu en redéfinissant la nature de Dieu.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Saint Thomas d\'Aquin', period: '1225-1274', contribution: 'Cinq voies preuves de l\'existence de Dieu, somme théologique' },
    { name: 'Saint Anselme de Cantorbéry', period: '1033-1109', contribution: 'Preuve ontologique de l\'existence de Dieu' },
    { name: 'Blaise Pascal', period: '1623-1662', contribution: 'Pari de Pascal et critique du Dieu des philosophes' },
    { name: 'Baruch Spinoza', period: '1632-1677', contribution: 'Panthéisme : Deus sive Natura, Dieu identique à la nature' },
    { name: 'Søren Kierkegaard', period: '1813-1855', contribution: 'Saut de la foi, Dieu comme sujet de foi non objet de preuve' },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'Critique radicale du christianisme, annonce de la mort de Dieu' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Critique des preuves mais Dieu comme postulat de la raison pratique' },
    { name: 'René Descartes', period: '1596-1650', contribution: 'Preuve ontologique, Dieu garant de la vérité' },
    { name: 'David Hume', period: '1711-1776', contribution: 'Critique empiriste des preuves de l\'existence de Dieu' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le pari de Pascal : "Vous avez deux choses à perdre : le vrai et le bien, et deux choses à engager : votre raison et votre volonté, votre connaissance et votre béatitude; et votre nature a deux choses à fuir : l\'erreur et la misère. Votre raison n\'est pas plus blessée, en choisissant l\'un que l\'autre, puisqu\'il faut nécessairement choisir. Voilà un point vidé. Mais votre béatitude ? Pesons le gain et la perte, en prenant croix que Dieu est. Estimons ces deux cas : si vous gagnez, vous gagnez tout; si vous perdez, vous ne perdez rien. Gagez donc qu\'il est, sans hésiter."',
    'L\'horloger et la montre (Paley) : Si je trouve une montre sur un talus, je vois qu\'elle est complexe, avec des rouages dentés, un ressort, un cadran. Je conclus qu\'elle a été fabriquée par un horloger intelligent. Si l\'univers est encore plus complexe, avec des étoiles, des êtres vivants, des lois précises, ne dois-je pas conclure qu\'il a été créé par un intelligence suprême ? Cette analogie est la base de la preuve téléologique.',
    'Le mythe de la caverne (Platon) : Dans La République, Platon décrit des prisonniers enchaînés dans une caverne, voyant seulement des ombres projetées sur le mur. L\'un se libère, sort de la caverne, découvre le soleil (le Bien, analogue à Dieu). Le soleil illumine tout, donne vie et visibilité. Cette allégorie illustre l\'ascension de l\'âme vers Dieu, lumière intelligible qui rend toute connaissance possible.',
    'Le livre de Job (Bible) : Job, un homme juste, perd tout : ses biens, ses enfants, sa santé. Ses amis lui disent qu\'il a dû pécher pour être ainsi puni. Job proteste son innocence. Dieu répond depuis la tempête : "Où étais-tu quand je fondais la terre ?". La réponse de Dieu montre que l\'homme ne peut comprendre ses voies. Le mal reste mystère.',
    'Le silence de Dieu (Auschwitz) : Comment un Dieu d\'amour a-t-il pu laisser la Shoah se produire ? Certains juifs rompent avec Dieu après Auschwitz (théologie de la mort de Dieu). D\'autres maintiennent la foi en protestant (comme Job). Elie Wiesel raconte un enfant pendu dont un prisonnier demande : "Où est Dieu ?" Il répond : "Il est là, pendu au gibet". Dieu souffre avec son peuple.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Somme théologique',
      author: 'Thomas d\'Aquin',
      year: 1265,
      type: 'BOOK' as const,
      reference: 'Cinq voies preuves de l\'existence de Dieu',
      quotes: [
        'Il y a un premier moteur immobile.',
        'Il y a une première cause efficiente.',
        'Il y a un être nécessaire.',
        'Il y a un être parfait par essence.',
        'Il y a une intelligence ordonnatrice.',
        'Dieu est acte pur.'
      ]
    },
    {
      title: 'Proslogion',
      author: 'Saint Anselme',
      year: 1078,
      type: 'BOOK' as const,
      reference: 'Preuve ontologique de l\'existence de Dieu',
      quotes: [
        'Nous croyons que tu es quelque chose de tel que rien de plus grand ne puisse être pensé.',
        'L\'insensé dit en son coeur : Il n\'y a pas de Dieu.',
        'Si cet être n\'est que dans l\'entendement, il n\'est pas assez grand.',
        'L\'existence dans la réalité est plus grande que dans l\'entendement.',
        'Donc il existe vraiment, un être tel que rien de plus grand ne puisse être pensé.',
        'Seigneur, je n\'essaie pas de pénétrer ta profondeur.'
      ]
    },
    {
      title: 'Pensées',
      author: 'Blaise Pascal',
      year: 1670,
      type: 'BOOK' as const,
      reference: 'Pari de Pascal et critique du Dieu des philosophes',
      quotes: [
        'Le Dieu d\'Abraham, Dieu d\'Isaac, Dieu de Jacob, non des philosophes et des savants.',
        'Gagez donc qu\'il est, sans hésiter.',
        'Si vous gagnez, vous gagnez tout; si vous perdez, vous ne perdez rien.',
        'Le cœur a ses raisons que la raison ne connaît point.',
        'Il y a assez de lumière pour ceux qui ne désirent que voir.',
        'La foi est un don de Dieu.'
      ]
    },
    {
      title: 'Éthique',
      author: 'Baruch Spinoza',
      year: 1677,
      type: 'BOOK' as const,
      reference: 'Panthéisme : Deus sive Natura',
      quotes: [
        'Deus sive Natura.',
        'Dieu est la substance consistante en une infinité d\'attributs.',
        'Tout ce qui est, est en Dieu.',
        'Rien n\'est contingent, tout est nécessaire.',
        'Dieu ne veut rien, n\'agit pas par finalité.',
        'L\'amour intellectuel de Dieu est la plus grande béatitude.'
      ]
    },
    {
      title: 'Crainte et tremblement',
      author: 'Søren Kierkegaard',
      year: 1843,
      type: 'BOOK' as const,
      reference: 'Saut de la foi et Abraham',
      quotes: [
        'La foi est un saut dans l\'absurde.',
        'Abraham est le chevalier de la foi.',
        'Le sacrifice d\'Isaac est scandale pour la raison.',
        'La foi est passion.',
        'L\'objet de la foi est l\'absurde.',
        'La suspension de l\'éthique par la foi.'
      ]
    },
    {
      title: 'Ainsi parlait Zarathoustra',
      author: 'Friedrich Nietzsche',
      year: 1883,
      type: 'BOOK' as const,
      reference: 'Annonce de la mort de Dieu',
      quotes: [
        'Dieu est mort.',
        'Nous l\'avons tué.',
        'Comment nous consolerons-nous, meurtriers des meurtriers ?',
        'Dieu est mort, et c\'est nous qui l\'avons tué.',
        'Les églises seront les tombeaux de Dieu.',
        'Il est temps de devenir surhumain.'
      ]
    },
    {
      title: 'Critique de la raison pure',
      author: 'Immanuel Kant',
      year: 1781,
      type: 'BOOK' as const,
      reference: 'Critique des preuves mais postulat de la raison pratique',
      quotes: [
        'L\'existence n\'est pas un prédicat réel.',
        'Je dois limiter la connaissance pour faire place à la foi.',
        'Dieu est postulat de la raison pratique.',
        'Les preuves de l\'existence de Dieu sont invalides.',
        'L\'idée de Dieu est régulatrice, pas constitutive.',
        'La loi morale m\'oblige à postuler Dieu.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que la preuve ontologique de l\'existence de Dieu ?',
      back: 'La preuve ontologique, formulée par Saint Anselme et reprise par Descartes, est a priori (ne dépend pas de l\'expérience). Elle soutient que nous avons l\'idée d\'un être parfait (plus grand que tout). Si cet être n\'existait que dans l\'entendement, il ne serait pas vraiment parfait car l\'existence réelle est plus grande que l\'existence pensée. Donc il doit exister réellement. Kant critique : l\'existence n\'est pas un prédicat (une propriété qui ferait qu\'un être est plus grand).',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le pari de Pascal ?',
      back: 'Pascal propose un pari pragmatique face à l\'incertitude sur Dieu. Si je crois et que Dieu existe, je gagne tout (béatitude éternelle). Si je crois et qu\'il n\'existe pas, je ne perds rien (vie vertueuse). Si je ne crois pas et qu\'il existe, je perds tout. Si je ne crois pas et qu\'il n\'existe pas, je ne gagne rien. Donc il est rationnel de croire. Ce n\'est pas une preuve mais une justification pragmatique de la foi.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le panthéisme de Spinoza ?',
      back: 'Spinoza identifie Dieu et la nature : "Deus sive Natura" (Dieu ou la Nature). Dieu n\'est pas un être personnel créateur mais la substance unique infinie dont tout dérive. Tout est en Dieu, Dieu est en tout. Il n\'y a pas de création ex nihilo, pas de providence, pas de libre arbitre humain au sens classique. Tout est nécessaire par la nature divine. Cette vision panthéiste scandalise les contemporains (Spinoza est excommunié) mais influence profondément la philosophie moderne.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Kierkegaard caractérise-t-il la foi ?',
      back: 'Pour Kierkegaard, la foi n\'est pas adhésion rationnelle à des preuves mais saut dans l\'absurde. Dieu n\'est pas objet de connaissance mais sujet de foi. La preuve objective tue la foi car elle supprime le risque. La véritable foi est subjective, passionnée, risquée. Abraham est le modèle : il accepte de sacrifier son fils par obéissance à Dieu, même si c\'est absurde moralement. La foi suspend l\'éthique.',
      difficulty: 5
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la "mort de Dieu" chez Nietzsche ?',
      back: 'Nietzsche annonce "Dieu est mort" dans Ainsi parlait Zarathoustra. Les hommes l\'ont tué. Cela signifie que la croyance en Dieu n\'est plus crédible dans la modernité scientifique et philosophique. Les valeurs chrétiennes (humilité, charité, pauvreté) s\'effondrent avec leur fondement. Le nihilisme menace : plus rien n\'a de sens. Il faut créer de nouvelles valeurs, devenir le "surhumain" (Übermensch). Cette critique radicale du christianisme annonce l\'athéisme moderne et la nécessité de créer du sens sans transcendance.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Spinoza résume le panthéisme ?',
      back: '"Deus sive Natura" (Éthique, 1677)',
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Nietzsche annonce la mort de Dieu ?',
      back: '"Dieu est mort" (Ainsi parlait Zarathoustra, 1883)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Pascal, il faut parier que {{Dieu existe}} car si on gagne, on gagne {{tout}}.',
      back: 'Dieu existe | tout',
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: 'Le problème du mal est-il incompatible avec l\'existence de Dieu ?',
      back: 'Le problème du mal est l\'objection classique à l\'existence de Dieu : si Dieu est tout-puissant et tout-bon, pourquoi le mal existe-t-il ? Soit Dieu ne peut pas l\'empêcher (pas tout-puissant), soit ne veut pas (pas tout-bon), soit n\'existe pas. Les théodicées tentent de répondre. Augustin : le mal est privation du bien, pas une chose que Dieu a créée. Le libre arbitre : Dieu a créé des êtres libres, le mal est abus de cette liberté (nécessaire pour l\'amour). Le mal comme moyen d\'un plus grand bien : mystère de la providence. Job : protestation mais soumission au mystère. Théologie du processus : Dieu n\'est pas tout-puissant au sens classique, il persuade mais ne force pas. Athées : le mal est preuve que Dieu n\'existe pas ou est impuissant. La question reste ouverte mais elle pose la question du sens de la souffrance et de la justice dans un monde créé par un Dieu bon.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['dieu', 'théisme', 'déisme', 'panthéisme', 'athéisme', 'agnosticisme', 'création', 'preuve ontologique', 'preuve cosmologique', 'mal', 'foi', 'religion', 'transcendance', 'infini']
};
