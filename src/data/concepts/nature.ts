/**
 * Nature - Concept Data
 * Ensemble des réalités physiques, monde naturel par opposition à l'artifice humain
 */

export const concept = {
  id: 'nature',
  name: 'Nature',
  slug: 'nature',
  category: 'metaphysique',
  difficulty: 3,
  importance: 4,
  status: 'COMPLETE' as const,

  definition: 'La nature est l\'ensemble des réalités physiques, le monde naturel par opposition à l\'artifice humain. La philosophie distingue plusieurs sens : nature comme cosmos (ordre universel) ; nature comme physis (principe de mouvement et de repos) ; nature comme essence (ce qui définit un être) ; nature comme environnement (monde vivant). Pour les Grecs, la nature est ordonnée, rationnelle, intelligible. Pour Descartes, la nature est mécanisme, matière en mouvement. Pour Rousseau, la nature est origine de bonté, l\'homme y est bon mais corrompu par la société. Pour Heidegger, la nature est « physis », émergence, déploiement de l\'être. Aujourd\'hui, la crise écologique pose la question de notre rapport à la nature.',
  shortDefinition: 'Ensemble des réalités physiques, monde naturel par opposition à l\'artifice',

  etymology: {
    latin: 'natura : de nasci (naître)',
    greek: 'physis (φύσις) : croissance, émergence',
    root: 'bheu- (croître, devenir) : ce qui croît, ce qui devient',
    notes: 'Physis désigne le mouvement spontané, l\'émergence, le déploiement naturel'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du dessein (téléologie)',
        explanation: 'La nature montre des fins : l\'oeil voit, l\'arbre porte fruit. Il y a ordre, finalité. Donc il y a dessein intelligent (Dieu).',
        premises: ['La nature montre adaptation', 'L\'adaptation suggère finalité', 'La finalité requiert une intelligence'],
        conclusion: 'Donc la nature est oeuvre d\'un dessein intelligent'
      },
      {
        argument: 'Argument mécaniste (Descartes)',
        explanation: 'La nature peut s\'expliquer entièrement par matière et mouvement. Pas de fins, seulement causes efficientes. La nature est comme horloge.',
        premises: ['La nature obéit à lois mathématiques', 'Ces lois sont mécaniques', 'Pas besoin de finalité pour expliquer'],
        conclusion: 'Donc la nature est mécanisme, pas organisme'
      },
      {
        argument: 'Argument écologique contemporain',
        explanation: 'La nature a valeur intrinsèque, pas seulement instrumentale. Nous devons la protéger, pas seulement l\'exploiter. Crise écologique = nécessité de repenser le rapport nature/culture.',
        premises: ['La nature est condition de notre vie', 'Nous la détruisons dangereusement', 'Elle a valeur en elle-même'],
        conclusion: 'Donc nous devons revoir notre rapport à la nature'
      }
    ],
    counterArguments: [
      {
        objection: 'Objection darwinienne',
        content: 'L\'apparent dessein dans la nature s\'explique par sélection naturelle, pas intelligence. L\'adaptation est résultat, pas dessein.',
        response: 'La sélection naturelle n\'exclut pas dessein métaphysique. Les deux niveaux sont compatibles.'
      },
      {
        objection: 'Objection constructiviste',
        content: 'La nature est construction humaine. Ce que nous appelons « nature » est produit par notre culture, nos sciences.',
        response: 'La nature précède la culture. Nous la découvrons autant que nous la construisons.'
      }
    ],
    distinctions: [
      {
        distinction: 'Nature vs Culture',
        explanation: 'La nature est donné (biologique, physique). La culture est acquis (social, symbolique). Mais la frontière est floue : l\'homme est être naturel qui produit de la culture.'
      },
      {
        distinction: 'Nature vs Artifice',
        explanation: 'La nature est ce qui est sans intervention humaine. L\'artifice est produit par l\'homme. Mais l\'homme est partie de la nature : l\'artifice est naturel ?'
      },
      {
        distinction: 'Nature comme essence vs Nature comme cosmos',
        explanation: 'La nature peut être essence (ce qui définit un être : la nature humaine) ou cosmos (ensemble des choses : la nature des physiciens).'
      }
    ]
  },

  relatedConcepts: [
    { conceptId: 'culture', relation: 'OPPOSE', explanation: 'La nature s\'oppose à la culture comme donné à acquis' },
    { conceptId: 'technique', relation: 'CRITICAL', explanation: 'La technique transforme la nature, pose la question de la maîtrise' },
    { conceptId: 'homme', relation: 'PART_OF', explanation: 'L\'homme est être naturel, produit de la nature, mais aussi s\'en distingue par la culture' },
    { conceptId: 'etre', relation: 'RELATED', explanation: 'La nature est un mode d\'être, le déploiement de l\'être (physis). Pour Heidegger, la nature est physis, émergence et présence de l\'être.' },
    { conceptId: 'realite', relation: 'RELATED', explanation: 'La nature constitue la réalité fondamentale, le monde physique qui existe indépendamment de l\'esprit humain. Elle est le donné ultime sur lequel se construit toute connaissance.' },
    { conceptId: 'connaissance', relation: 'RELATED', explanation: 'La nature est l\'objet premier de la connaissance scientifique. La science moderne cherche à déchiffrer les lois de la nature pour comprendre et prévoir les phénomènes.' },
    { conceptId: 'creation', relation: 'RELATED', explanation: 'La nature est œuvre de création, soit divine (pour les théistes), soit produit de l\'évolution (pour les matérialistes). Elle pose la question de son origine et de sa finalité.' },
    { conceptId: 'existence', relation: 'RELATED', explanation: 'La nature est la condition de possibilité de toute existence vivante. Elle est le milieu dans lequel les êtres émergent, se développent et retournent.' }
  ],

  relatedMovements: [
    { movement: 'Naturalisme', description: 'Tout est nature, pas de surnaturel', keyFigures: ['Aristote', 'Spinoza'] },
    { movement: 'Mécanisme', description: 'La nature est machine', keyFigures: ['Descartes', 'Newton'] },
    { movement: 'Romantisme', description: 'La nature comme beauté, sacré', keyFigures: ['Rousseau', 'Goethe'] },
    { movement: 'Écologie profonde', description: 'La nature a valeur intrinsèque', keyFigures: ['Arne Naess'] }
  ],

  philosophicalAnalysis: {
    history: `Les Grecs voient la nature (physis) comme ordre rationnel, cosmos. Aristote : finalité inhérente.

Moyen Âge chrétien : la nature est création de Dieu, "livre second" révélant Dieu.

Descartes (XVIIe) : la nature devient mécanisme, matière en mouvement. "Donnez-moi la matière et je vous ferai un monde". La science moderne naît de cette vision mécaniste.

Rousseau (XVIIIe) : la nature comme origine de bonté. L'homme y est bon, la société le corrompt. Retour à la nature comme idéal romantique.

Heidegger (XXe) : retour à physis comme déploiement de l'être. La technique moderne menace la nature en la transformant en réserve.

Aujourd'hui, la crise écologique interroge notre rapport à la nature : exploitation vs protection, anthropocentrisme vs écocentrisme.`,

    problems: [
      { problem: 'Problème de la nature humaine', description: 'Y a-t-il une nature humaine universelle ou l\'homme est-il produit de la culture ?' },
      { problem: 'Problème du rapport nature/culture', description: 'Comment l\'homme se situe-t-il par rapport à la nature ? Faut-il revenir à la nature ou la dépasser ?' },
      { problem: 'Problème écologique', description: 'Comment protéger la nature sans renoncer au progrès ? Quelle éthique environnementale ?' }
    ],

    debates: [
      {
        issue: 'Qu\'est-ce que la nature ?',
        positions: [
          { philosopher: 'Aristote', position: 'La nature est principe de mouvement et de repos, finalité inhérente' },
          { philosopher: 'Descartes', position: 'La nature est mécanisme, matière en mouvement sans fins' },
          { philosopher: 'Rousseau', position: 'La nature est origine de bonté, idéal de simplicité' },
          { philosopher: 'Heidegger', position: 'La nature est physis, déploiement de l\'être' }
        ]
      }
    ]
  },

  variations: [
    {
      title: 'Nature comme physis (Grecs)',
      description: 'Pour les Grecs, physis est croissance, émergence, déploiement spontané. La nature n\'est pas statique mais mouvement, devenir. Aristote y voit finalité : chaque être a sa fin, son telos. La nature est cosmos (ordre), pas chaos.'
    },
    {
      title: 'Nature comme mécanisme (Descartes)',
      description: 'Descartes réduit la nature à matière étendue en mouvement. Pas de fins, seulement causes efficientes. Les animaux sont machines. Le corps humain est machine. Seule l\'âme pense. Cette vision mécaniste fonde la science moderne.'
    },
    {
      title: 'Nature comme état de nature (Rousseau)',
      description: 'Rousseau imagine l\'état de nature : hommes originels vivant seuls, bons, innocents. La société corrompt cette bonté naturelle. L\'homme est naturellement bon, c\'est la société qui le rend méchant. Le « retour à la nature » est idéal moral.'
    },
    {
      title: 'Nature comme ressource (technique moderne)',
      description: 'La technique moderne voit la nature comme réserve à exploiter : charbon, pétrole, bois. Heidegger critique cette vision : la nature devient « fonds » (Bestand), détruite dans son être. La question écologique naît de cette destruction.'
    },
    {
      title: 'Nature humaine',
      description: 'Y a-t-il une nature humaine ? Pour Aristote, oui : l\'homme est « animal rationnel » ou « animal politique ». Pour Sartre, non : l\'existence précède l\'essence, il n\'y a pas de nature humaine donnée. Pour la biologie, l\'homme a caractéristiques naturelles (bipédie, langage, culture).'
    }
  ],

  keyFigures: [
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Analyse de la nature comme physis et finalité' },
    { name: 'René Descartes', period: '1596-1650', contribution: 'La nature comme mécanisme' },
    { name: 'Jean-Jacques Rousseau', period: '1712-1778', contribution: 'La nature comme origine de bonté et idéal moral' },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Critique de la technique moderne et retour à physis' },
    { name: 'Charles Darwin', period: '1809-1882', contribution: 'Théorie de l\'évolution comme explication naturelle du vivant' }
  ],

  examples: [
    'L\'état de nature de Rousseau : Imaginons des hommes originels vivant seuls dans les forêts, bons, innocents, sans propriété ni guerre. C\'est mythe philosophique, pas anthropologie, mais idéal critique de la société.',
    'La machine animale (Descartes) : Descartes voit les animaux comme automates. Ils n\'ont pas d\'âme, ne pensent pas, ne sentent pas vraiment. Seul l\'homme a âme pensante. Cette thèse permet la vivisection mais est critiquée aujourd\'hui.',
    'Le réchauffement climatique : La crise écologique montre que notre rapport à la nature est destructeur. Nous avons traité la nature comme ressource illimitée, elle nous rappelle nos limites. Question : quelle éthique environnementale ?'
  ],

  sources: [
    {
      title: 'Physique',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Analyse de la nature comme physis',
      quotes: ['La nature est principe de mouvement et de repos.', 'La nature ne fait rien en vain.', 'Toute nature a une fin.']
    },
    {
      title: 'Discours de la méthode',
      author: 'René Descartes',
      year: 1637,
      type: 'BOOK' as const,
      reference: 'La nature comme mécanisme',
      quotes: ['La nature est matière en mouvement.', 'Les animaux sont machines.', 'Donnez-moi la matière et je vous ferai un monde.']
    },
    {
      title: 'Discours sur l\'origine de l\'inégalité',
      author: 'Jean-Jacques Rousseau',
      year: 1755,
      type: 'BOOK' as const,
      reference: 'L\'état de nature',
      quotes: ['L\'homme est né bon, c\'est la société qui le corrompt.', 'Retour à la nature.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Comment Rousseau conçoit-il l\'état de nature ?',
      back: 'Pour Rousseau, l\'état de nature est situation hypothétique où les humains vivent seuls, sans société, bons et innocents. Ils sont libres, égaux, sans propriété ni guerre. La société introduit inégalités, guerres, vices. L\'homme est naturellement bon, c\'est la société qui le corrompt. Ce n\'est pas anthropologie historique mais idéal critique : en décrivant l\'état de nature, Rousseau critique les vices de la société civile.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle distinction entre nature et culture ?',
      back: 'La nature est donné (biologique, physique), la culture est acquis (social, symbolique). Mais la frontière est floue : l\'homme est être naturel qui produit de la culture. Pour certains, la culture prolonge la nature (langage naturel). Pour d\'autres, la culture s\'oppose à la nature (artificialisation). La question centrale : y a-t-il une nature humaine universelle ou l\'homme est-il entièrement produit par la culture ?',
      difficulty: 3
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Descartes, la nature est {{mécanisme}}. Pour Rousseau, l\'homme y est {{bon}}.',
      back: 'mécanisme | bon',
      difficulty: 2
    }
  ],

  tags: ['nature', 'culture', 'physis', 'cosmos', 'état de nature', 'technique', 'écologie', 'rousseau', 'descartes', 'aristote', 'environnement', 'etre', 'realite', 'connaissance', 'creation', 'existence']
};
