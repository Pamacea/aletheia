/**
 * Langage - Concept Data
 * Système de signes et de communication, structure de la pensée et du monde
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'langage',
  name: 'Langage',
  slug: 'langage',
  category: 'philosophie_du_langage',

  // ===== MÉTADONNÉES =====
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'Le langage est un système de signes permettant la communication, la représentation et la pensée. La philosophie distingue plusieurs approches : le langage comme instrument de communication (pragmatique) ; comme structure de la pensée (linguistique cognitive) ; comme condition de possibilité du monde (herméneutique) ; comme système arbitraire de signes (Saussure). Pour Wittgenstein, le sens d\'un mot est son usage dans le langage. Pour Heidegger, « le langage est la maison de l\'être ». Pour Lacan, « l\'inconscient est structuré comme un langage ». La question du langage traverse la philosophie : le langage reflète-il le monde ? le structure-t-il ? est-il la condition même de la pensée ? La philosophie du langage au XXe siècle (le « tournant linguistique ») a vu le langage devenir objet philosophique central.',
  shortDefinition: 'Système de signes et de communication, structure fondamentale de la pensée',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'lingua (langue) / sermo (discours)',
    greek: 'logos (λόγος) / glossa (γλῶσσα)',
    root: 'langue comme organe, langage comme système',
    notes: 'Le logos grec désigne à la fois parole, raison, et principe organisateur'
  },

  // ===== REASONING (ARGUMENTS PHILOSOPHIQUES) =====
  reasoning: {
    thesis: 'Le langage est la condition de possibilité de la pensée, de la communication et de la compréhension du monde',
    arguments: [
      {
        title: 'Argument de la pensée sans langage',
        content: 'Peut-on penser sans langage ? Condillac : pas de pensée claire sans mots. Les concepts sont formés par le langage. Les penseurs pré-langagiers (enfants) n\'ont pas de pensée réflexive. Le langage est « vêtu de pensée » (Hegel).'
      },
      {
        title: 'Argument de la socialité',
        content: 'Le langage nous constitue comme êtres sociaux. C\'est par le langage que nous communiquons, coopérons, construisons des institutions. Mead : le « moi » émerge par le langage et les interactions sociales. Le langage est le ciment de la société.'
      },
      {
        title: 'Argument du tournant linguistique',
        content: 'Le XXe siècle a découvert que tous les problèmes philosophiques sont des problèmes de langage. Wittgenstein : « Les limites de mon langage sont les limites de mon monde ». Clarifier le langage, c\'est dissoudre les pseudo-problèmes philosophiques.'
      },
      {
        title: 'Argument de l\'ouverture au monde',
        content: 'Par le langage, nous nous ouvrons à un monde de sens. Heidegger : « Le langage est la maison de l\'être ». Ce n\'est pas un outil mais l\'horizon de toute compréhension. Sans langage, nous serions enfermés dans l\'immédiateté animale.'
      }
    ],
    counterArguments: [
      {
        title: 'Critique de la pensée non-verbale',
        content: 'Il existe des formes de pensée sans langage : pensée visuelle (artistes, architectes), musicale (musiciens), mathématique (symboles non-linguistiques). Les sourds de naissance pensent sans langue. La pensée précède et excède le langage.'
      },
      {
        title: 'Critique du relativisme linguistique',
        content: 'L\'hypothèse Sapir-Whorf (la langue détermine la pensée) est exagérée. Des locuteurs de langues différentes peuvent comprendre les mêmes concepts (traduction possible). Il y a des universaux linguistiques et cognitifs.'
      },
      {
        title: 'Critique du privilège du langage',
        content: 'Pourquoi privilégier le langage ? L\'image, le son, le geste sont aussi des signifiants. L\'expérience directe, non symbolique, est possible. Le langage n\'est qu\'un mode d\'accès au monde parmi d\'autres (Merleau-Ponty).'
      },
      {
        title: 'Critique de la surinterprétation',
        content: 'Le langage n\'est pas mystère à déchiffrer mais outil pratique. La philosophie du langage surestime son importance. « Les mots ne pensent pas pour nous » (Austin). Il faut retourner aux choses elles-mêmes.'
      }
    ]
  },

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: [
      {
        period: 'Antiquité grecque',
        description: 'Platon : critique des sophistes, le langage peut dire le vrai ou le faux. Cratyle : le mot naturel (il y a un lien juste entre mot et chose) ou conventionnel ? Aristote : le langage est symbole des états d\'âme, lié à la vérité.'
      },
      {
        period: 'Moyen Âge',
        description: 'Sémiotique : Augustin, les signes. La question des universaux : les mots désignent-ils des choses ou des concepts ? Réalisme (les universaux existent) vs nominalisme (les mots ne sont que noms).'
      },
      {
        period: 'Moderne (XVIIe-XVIIIe)',
        description: 'Locke : les mots sont signes d\'idées. Condillac : le langage transforme la pensée, les enfants développent l\'intelligence par le langage. Rousseau : l\'origine du langage est passion, non raison. Leibniz : characteristica universalis, langage parfait de la pensée.'
      },
      {
        period: 'XIXe siècle',
        description: 'Philologie comparative (Bopp, Grimm) : étude historique des langues, parentés entre langues. Saussure : fondation de la linguistique moderne, distinction signifiant/signifié, synchronie/diachronie.'
      },
      {
        period: 'XXe siècle - Tournant linguistique',
        description: 'Frege : sens et référence. Russell : description définie. Wittgenstein I : théorie picturale du langage. Wittgenstein II : jeux de langage. Heidegger : langage comme maison de l\'être. Austin : actes de langage. Davidson, Kripke : sémantique formelle. Derrida : déconstruction, différance.'
      },
      {
        period: 'XXIe siècle',
        description: 'Langage et cognition (sciences cognitives). Langage et IA (traitement automatique, modèles de langage). Langage et réseaux sociaux. Langage et identité (gender studies). La question du langage reste centrale.'
      }
    ],
    debates: [
      {
        title: 'Langage et réalité',
        positions: [
          'Correspondance (Aristote, Russell) : Le langage représente le monde. Les mots réfèrent aux choses, les phrases aux faits. La vérité est correspondance entre langage et réalité.',
          'Cohérence (Neurath, Quine) : Le langage ne correspond pas directement au monde mais forme un système cohérent. La vérité est cohérence intra-linguistique.',
          'Pragmatique (James, Dewey) : Le sens d\'un énoncé est ses conséquences pratiques. Le langage est outil d\'action, non de représentation.'
        ]
      },
      {
        title: 'Convention ou nature ?',
        positions: [
          'Conventionnalisme (Saussure) : Le lien entre mot et chose est arbitraire. C\'est une convention sociale. Il n\'y a pas de motivation naturelle.',
          'Naturalisme (Cratyle,藕Humboldt) : Il y a un lien naturel entre le son et le sens. Les langues reflètent la structure de l\'esprit ou du monde.',
          'Mixte : Certaines parties du langage sont naturelles (mimétisme : onomatopées), d\'autres conventionnelles. Mais l\'arbitraire domine.'
        ]
      },
      {
        title: 'Langage et pensée',
        positions: [
          'Déterminisme linguistique (Whorf) : La langue détermine la pensée. Des locuteurs de langues différentes pensent différemment.',
          'Universalisme (Chomsky, Pinker) : La pensée précède le langage. Il y a une « grammaire universelle » innée commune à toutes les langues.',
          'Interactionnisme (Vygotsky) : Le langage et la pensée interagissent. Le langage transforme la pensée (langage intérieur), mais la pensée existe aussi sans langage.'
        ]
      },
      {
        title: 'Sens et référence',
        positions: [
          'Frege : Le sens (Sinn) est le mode de donation, la référence (Bedeutung) est l\'objet. « L\'étoile du matin » et « l\'étoile du soir » ont même référence (Vénus) mais sens différent.',
          'Russell : Les descriptions définies (« l\'actuel roi de France ») n\'ont pas de référence si l\'objet n\'existe pas.',
          'Kripke : Les noms propres sont désignateurs rigides : ils réfèrent au même objet dans tous les mondes possibles.'
        ]
      }
    ],
    contemporaryIssues: [
      {
        issue: 'Langage et IA',
        description: 'Les modèles de langage (GPT, etc.) peuvent-ils comprendre ? Simulent-ils le langage ou le « comprennent »-ils ? Le langage est-il computation ou quelque chose de plus ?'
      },
      {
        issue: 'Langage et identité',
        description: 'Comment le langage construit l\'identité genrée (pronoms, genre grammatical). Le langage inclusif (féminisation, écriture inclusive) est-il justifié ?'
      },
      {
        issue: 'Langage et réseaux sociaux',
        description: 'Comment les plateformes transforment la communication (emoji, abréviations, hashtags). Le langage se fragmente-t-il ? Nouvelles formes d\'écriture, nouvelle grammaire ?'
      },
      {
        issue: 'Langage et vérité (post-vérité)',
        description: 'Fake news, alternative facts, deepfakes. Le langage est instrument de manipulation. Comment définir la vérité à l\'ère de la désinformation ?'
      }
    ]
  },

  // ===== CONCEPTS LIÉS =====
  relatedConcepts: [
    {
      concept: 'signe',
      relationship: 'Le signe est l\'unité du langage : union de signifiant (forme) et signifié (concept). Saussure : le signe linguistique est arbitraire.'
    },
    {
      concept: 'sens',
      relationship: 'Le sens est ce que signifie un mot ou une phrase. Distinction fregeéenne entre sens (mode de donation) et référence (objet désigné).'
    },
    {
      concept: 'vérité',
      relationship: 'Le langage est véhicule de la vérité. La théorie de la vérité comme correspondance (langage ↔ monde) ou cohérence (cohérence intra-linguistique).'
    },
    {
      concept: 'communication',
      relationship: 'Le langage est système de communication. Jakobson : 6 fonctions du langage (émotive, conative, poétique, phatique, métalinguistique, référentielle).'
    },
    {
      concept: 'pensée',
      relationship: 'Le langage structure-t-il la pensée ? Déterminisme linguistique (Whorf) vs universalisme (Chomsky). Le débat langage/pensée est ancien.'
    },
    {
      concept: 'discours',
      relationship: 'Le discours est langage en situation. Foucault : le discours est pratique de pouvoir/savoir. Analyse du discours : comment le langage construit la réalité sociale.'
    },
    {
      concept: 'écriture',
      relationship: 'Derrida : l\'écriture n\'est pas dégradation de la parole mais condition de possibilité du langage (grammatologie). « Il n\'y a pas de hors-texte ».'
    },
    {
      concept: 'traduction',
      relationship: 'La traduction est-elle possible ? Steiner : après Babel. La traduction comme interprétation, comme trahison. Un mot dans une langue n\'a pas d\'équivalent exact dans une autre.'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Structuralisme',
      description: 'Langage comme système de signes, arbitraire du signe, synchronie.',
      keyFigures: ['Saussure', 'Jakobson', 'Lévi-Strauss', 'Barthes']
    },
    {
      movement: 'Analytique',
      description: 'Analyse logique du langage, sens et référence, philosophie du langage ordinaire.',
      keyFigures: ['Frege', 'Russell', 'Wittgenstein', 'Austin', 'Searle', 'Quine', 'Kripke']
    },
    {
      movement: 'Phénoménologie/Existentialisme',
      description: 'Langage comme mode d\'être au monde, intersubjectivité.',
      keyFigures: ['Husserl', 'Heidegger', 'Merleau-Ponty', 'Sartre']
    },
    {
      movement: 'Herméneutique',
      description: 'Langage comme médiation de toute compréhension, fusion des horizons.',
      keyFigures: ['Gadamer', 'Ricoeur']
    },
    {
      movement: 'Post-structuralisme',
      description: 'Déconstruction, différance, texte comme tissu de citations.',
      keyFigures: ['Derrida', 'Deleuze', 'Lyotard']
    },
    {
      movement: 'Pragmatisme',
      description: 'Le sens est usage, conséquences pratiques, formes de vie.',
      keyFigures: ['Peirce', 'James', 'Dewey', 'Wittgenstein II', 'Rorty']
    },
    {
      movement: 'Grammaire générative',
      description: 'Langage comme faculté innée, grammaire universelle.',
      keyFigures: ['Chomsky', 'Pinker']
    },
    {
      movement: 'Sémiotique',
      description: 'Étude générale des signes (linguistiques, visuels, etc.).',
      keyFigures: ['Peirce', 'Eco', 'Greimas']
    }
  ],

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Signifiant et signifié (Saussure)',
      description: 'Ferdinand de Saussure, fondateur de la linguistique moderne, distingue le signifiant (image sonore, le son du mot) et le signifié (le concept, l\'idée). Le signe linguistique est l\'union des deux. Cette union est arbitraire : rien dans le son « chat » n\'explique pourquoi il signifie l\'animal felin. C\'est une convention sociale. Le signe renvoie à un autre signe, pas directement à la chose : il n\'y a pas de motivation naturelle entre mot et chose.'
    },
    {
      title: 'Langage comme jeu (Wittgenstein)',
      description: 'Dans ses Recherches philosophiques, Wittgenstein rejette l\'idée que chaque mot a une essence ou un sens unique. Le sens d\'un mot est son usage dans le langage. Il n\'y a pas « le langage » mais des « jeux de langage », des pratiques langagières avec leurs règles. La signification n\'est pas définition mais usage. Les problèmes philosophiques viennent de confondre différents jeux de langage.'
    },
    {
      title: 'Langage et monde (Wittgenstein I)',
      description: 'Dans le Tractatus logico-philosophicus, Wittgenstein défend la « théorie picturale » : le langage représente le monde comme une image représente ce qu\'elle figure. La proposition partage sa structure logique avec l\'état de choses qu\'elle représente. « Ce qui se laisse dire, se laisse clairement dire ; ce dont on ne peut parler, il faut le taire ». Les limites du langage sont les limites du monde.'
    },
    {
      title: 'Langage comme maison de l\'être (Heidegger)',
      description: 'Pour Heidegger, « le langage est la maison de l\'être ». Ce n\'est pas un simple instrument de communication mais le milieu où l\'être se déploie et se comprend. C\'est en parlant que nous accédons au monde. Le langage n\'est pas d\'abord humain : c\'est le langage qui parle, l\'homme est celui qui écoute et répond. La poésie est le langage originaire qui nomme les choses pour la première fois.'
    },
    {
      title: 'Énonciation et énoncé (Benveniste)',
      description: 'Benveniste distingue l\'énoncé (ce qui est dit, le contenu) et l\'énonciation (l\'acte de produire l\'énoncé). Dans « Je suis fatigué », l\'énoncé est le fait d\'être fatigué ; l\'énonciation est le fait que « je » parle maintenant. Les pronoms personnels (« je », « tu ») sont des « indices de la personne » qui renvoient à la situation d\'énonciation. Cette distinction permet d\'analyser la subjectivité dans le langage.'
    },
    {
      title: 'Inconscient structuré comme langage (Lacan)',
      description: 'Lacan reprend Saussure mais inverse la priorité : le signifiant prime sur le signifié. « L\'inconscient est structuré comme un langage » : les rêves, les symptômes, les actes manqués sont à décrypter comme un texte. Le sujet est divisé par le langage : quand je parle, « je » dis plus que je ne sais. La métaphore et la métonymie (figures de rhétorique) structurent l\'inconscient comme elles structurent le langage.'
    },
    {
      title: 'Actes de langage (Austin, Searle)',
      description: 'John Austin découvre que « dire c\'est faire » : quand je prononce « Je le jure », je ne décris pas un fait, j\'accomplis l\'acte de jurer. Ce sont les « actes de langage » ou « performatifs ». John Searle développe cette théorie : le langage n\'est pas seulement décrire (assertifs) mais aussi promettre (promissifs), commander (directifs), remercier (expressifs), déclarer (déclarations). Le langage est une forme d\'action.'
    },
    {
      title: 'Langage et pensée',
      description: 'Le débat sur la relation entre langage et pensée est ancien. Pour Condillac, la pensée naît du langage : sans langage, pas de pensée claire. Pour Chomsky, le langage est inné, structure biologique de l\'esprit humain. La « grammaire universelle » est commune à toutes les langues. Pour Whorf, la langue structure la pensée : les locuteurs de langues différentes pensent différemment (« hypothèse Sapir-Whorf »). Pour d\'autres, langage et pensée sont indépendants : on peut penser sans langage (pensée visuelle, musicale).'
    },
    {
      title: 'Différance (Derrida)',
      description: 'Derrida introduit la notion de « différance » : le sens est永远 différé, jamais présent. Les mots renvoient à d\'autres mots, dans une chaîne永远. Il n\'y a pas de signifié transcendantal, pas de « présence » pure du sens. L\'écriture n\'est pas dégradation de la parole mais condition de possibilité du langage. « Il n\'y a pas de hors-texte » : tout est texte, tout est interprétation.'
    },
    {
      title: 'Grammaire universelle (Chomsky)',
      description: 'Noam Chomsky soutient que le langage est faculté biologique innée. Tous les humains partagent une « grammaire universelle », structure commune à toutes les langues. Les enfants apprennent le langage si vite parce qu\'ils ont déjà cette structure innée. Le langage est « organe mental » spécifique à l\'espèce humaine, distinct d\'autres facultés cognitives.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Ludwig Wittgenstein', period: '1889-1951', contribution: 'Théorie des jeux de langage et critique de l\'essence des mots' },
    { name: 'Ferdinand de Saussure', period: '1857-1913', contribution: 'Fondation de la linguistique moderne : signe, signifiant/signifié' },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Langage comme maison de l\'être' },
    { name: 'Jacques Lacan', period: '1901-1981', contribution: 'Inconscient structuré comme langage' },
    { name: 'Noam Chomsky', period: '1928-', contribution: 'Grammaire universelle et langage comme faculté innée' },
    { name: 'Emile Benveniste', period: '1902-1976', contribution: 'Distinction énoncé/énonciation et analyse de la subjectivité' },
    { name: 'John Austin', period: '1911-1960', contribution: 'Théorie des actes de langage' },
    { name: 'Gottlob Frege', period: '1848-1925', contribution: 'Distinction sens/référence' },
    { name: 'Jacques Derrida', period: '1930-2004', contribution: 'Déconstruction, différance, grammatologie' },
    { name: 'Jürgen Habermas', period: '1929-', contribution: 'Agir communicationnel et éthique de la discussion' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'L\'arbitraire du signe : Le mot « chien » n\'a aucune ressemblance avec l\'animal. En anglais, c\'est « dog », en allemand « Hund », en espagnol « perro ». Aucun de ces sons n\'est « naturellement » lié à l\'animal canin. C\'est une convention arbitraire de chaque communauté linguistique. Saussure voit là la preuve que le lien entre signifiant et signifié est arbitraire.',
    'Le jeu de langage de la douleur : Wittgenstein analyse « j\'ai mal ». Le sens de cette phrase n\'est pas dans une définition du mot « mal » mais dans son usage : je le dis quand je souffre, pour exprimer ma douleur, pour demander de l\'aide, pour me plaindre. Le mot « mal » peut avoir des sens différents selon le contexte : mal physique, moral, etc. C\'est le contexte (jeu de langage) qui donne le sens.',
    'L\'acte performatif : Quand le maire dit « Je vous déclare mari et femme », il ne décrit pas un mariage, il accomplit l\'acte de marier. Ce sont les « performatifs » d\'Austin : dire, c\'est faire. De même pour « Je promets », « Je baptise ce bateau », « Je parie ». Le langage n\'est pas seulement décrire le monde mais le transformer.',
    'Le sujet divisé par le langage : Quand je dis « je », le mot désigne celui qui parle. Mais qui suis-je quand je parle ? Lacan montre que le « je » qui parle est différent du « je » dont je parle. Le langage me divise : je suis à la fois sujet de l\'énonciation (celui qui parle) et sujet de l\'énoncé (ce dont je parle). Cette division est la condition même de la parole.',
    'La poésie comme langage originaire : Pour Heidegger, le poète est celui qui nomme les choses pour la première fois. Hölderlin nomme « la terre », « le ciel », « les divins », « les mortels ». Ces noms ne désignent pas des objets préexistants mais instituent les choses comme ce qu\'elles sont. La poésie révèle ce que la prose quotidienne cache : le langage comme ouverture au monde.',
    'La traduction impossible : Le mot français « esprit » traduit-il l\'allemand « Geist » ? Hegel\'s Geist est à la fois esprit (mental) et âme collective. Rien en français ne capture toute cette richesse. La traduction est toujours interprétation, toujours perte. Mais sans traduction, pas de communication entre cultures. Le dilemme de la traduction illustre la specificity de chaque langue.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'Recherches philosophiques',
      author: 'Ludwig Wittgenstein',
      year: 1953,
      type: 'BOOK' as const,
      reference: 'Théorie des jeux de langage et critique de l\'essence des mots',
      quotes: [
        'Le sens d\'un mot est son usage dans le langage.',
        'Il n\'y a pas de langage privé.',
        'Les formes de vie sont le donné.',
        'La philosophie est une lutte contre la fascination de notre esprit par les moyens du langage.',
        'Tout ce qui peut être pensé peut être dit clairement.',
        'Ce qui ne peut être dit, il faut le taire.'
      ]
    },
    {
      title: 'Cours de linguistique générale',
      author: 'Ferdinand de Saussure',
      year: 1916,
      type: 'BOOK' as const,
      reference: 'Fondation de la linguistique moderne',
      quotes: [
        'Le signe linguistique unit un concept et une image acoustique.',
        'Le signifiant et le signifié sont comme les deux faces d\'une feuille de papier.',
        'Le lien entre signifiant et signifié est arbitraire.',
        'La langue est un système de signes où tout se tient.',
        'Dans la langue, il n\'y a que des différences.',
        'La langue est distincte de la parole.'
      ]
    },
    {
      title: 'Acheminement vers la parole',
      author: 'Martin Heidegger',
      year: 1959,
      type: 'BOOK' as const,
      reference: 'Essais sur le langage comme maison de l\'être',
      quotes: [
        'Le langage est la maison de l\'être.',
        'C\'est le langage qui parle.',
        'L\'homme parle en tant qu\'il répond au langage.',
        'La poésie est le dire le plus pur.',
        'Le langage nomme les choses pour la première fois.',
        'Parler, ce n\'est pas exprimer mais révéler.'
      ]
    },
    {
      title: 'Écrits',
      author: 'Jacques Lacan',
      year: 1966,
      type: 'BOOK' as const,
      reference: 'Inconscient structuré comme langage',
      quotes: [
        'L\'inconscient est structuré comme un langage.',
        'Le signifiant prime sur le signifié.',
        'Les chaînes signifiantes déterminent le sujet.',
        'L\'inconscient est le discours de l\'Autre.',
        'Il n\'y a pas de rapport sexuel.',
        'Une parole est toujours reconnaissance de l\'autre.'
      ]
    },
    {
      title: 'Quand dire, c\'est faire',
      author: 'John Austin',
      year: 1962,
      type: 'BOOK' as const,
      reference: 'Théorie des actes de langage',
      quotes: [
        'Dire c\'est faire.',
        'Les énoncés performatifs ne décrivent pas, ils accomplissent.',
        'Je promets est un acte, pas une description.',
        'Il y a des conditions de félicité pour les performatifs.',
        'Le langage est une forme d\'action.',
        'Énoncer, c\'est accomplir une action.'
      ]
    },
    {
      title: 'Problèmes de linguistique générale',
      author: 'Emile Benveniste',
      year: 1966,
      type: 'BOOK' as const,
      reference: 'Distinction énoncé/énonciation et analyse de la subjectivité',
      quotes: [
        'La subjectivité se fonde dans l\'exercice de la langue.',
        '« Je » désigne celui qui parle.',
        'L\'énonciation est la mise en fonctionnement de la langue.',
        'La langue est le seul système qui se réfère à lui-même.',
        'Il n\'y a pas de langue sans subjectivité.',
        'Le « je » est un indicateur de la personne.'
      ]
    },
    {
      title: 'De la grammatologie',
      author: 'Jacques Derrida',
      year: 1967,
      type: 'BOOK' as const,
      reference: 'Déconstruction, différance, critique du logocentrisme',
      quotes: [
        'Il n\'y a pas de hors-texte.',
        'La différance est le mouvement du langage.',
        'L\'écriture n\'est pas dégradation de la parole.',
        'Le signifié est永远 différé.',
        'Le centre n\'est pas le centre.',
        'Tout est texte, tout est trace.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle distinction Saussure fait-il entre signifiant et signifié ?',
      back: 'Saussure distingue le signifiant (l\'image sonore, le son du mot) et le signifié (le concept, l\'idée représentée). Le signe linguistique est l\'union des deux. Cette union est arbitraire : rien dans le son « chien » n\'explique pourquoi il signifie l\'animal. C\'est une convention sociale. Le signe renvoie à d\'autres signes, pas directement à la chose.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Wittgenstein définit-il le sens d\'un mot ?',
      back: 'Dans les Recherches philosophiques, Wittgenstein soutient que « le sens d\'un mot est son usage dans le langage ». Il n\'y a pas d\'essence ou de définition unique qui capte le sens d\'un mot. Le sens change selon les contextes d\'usage, les « jeux de langage » (pratiques avec leurs règles). Les problèmes philosophiques viennent de confondre différents jeux de langage ou de chercher des essences là où il n\'y a que usages variés.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Que signifie « le langage est la maison de l\'être » chez Heidegger ?',
      back: 'Pour Heidegger, le langage n\'est pas un simple instrument de communication mais « la maison de l\'être » : le milieu où l\'être se déploie et se comprend. C\'est en parlant que nous accédons au monde. Ce n\'est pas l\'homme qui parle le langage mais le langage qui parle, l\'homme étant celui qui écoute et répond. La poésie est langage originaire qui nomme les choses pour la première fois. Le langage n\'est pas un outil mais l\'horizon de toute compréhension de l\'être.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce qu\'un acte de langage performatif chez Austin ?',
      back: 'Austin découvre que « dire c\'est faire » : quand je prononce « Je promets », je ne décris pas une promesse, j\'accomplis l\'acte de promettre. Ce sont les « performatifs », par opposition aux « constatifs » qui décrivent le monde. Les performatifs (jurer, baptiser, parier, remercier) ne sont ni vrais ni faux mais réussis ou ratés selon des « conditions de félicité ». Le langage n\'est pas seulement représenter le monde mais l\'agir sur lui.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Lacan relie-t-il inconscient et langage ?',
      back: 'Lacan soutient que « l\'inconscient est structuré comme un langage ». Reprenant Saussure mais inversant la priorité, Lacan affirme que le signifiant prime sur le signifié. Les rêves, symptômes, lapsus sont à décrypter comme un texte avec ses mécanismes (métaphore, métonymie). Le sujet est divisé par le langage : quand je parle, « je » dis plus que je ne sais. L\'inconscient « parle » dans les formations de l\'inconscient.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que la « différance » chez Derrida ?',
      back: 'Derrida introduit la « différance » : le sens est永远 différé, jamais présent. Les mots renvoient à d\'autres mots, dans une chaîne sans fin. Il n\'y a pas de signifié transcendantal, pas de « présence » pure du sens. L\'écriture n\'est pas dégradation de la parole mais condition de possibilité du langage. « Il n\'y a pas de hors-texte » : tout est texte, tout est interprétation,永远 ouvert.',
      difficulty: 5
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Wittgenstein résume sa théorie du sens ?',
      back: '« Le sens d\'un mot est son usage dans le langage » (Recherches philosophiques, 1953)',
      difficulty: 2
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Heidegger caractérise le langage ?',
      back: '« Le langage est la maison de l\'être » (Lettre sur l\'humanisme, 1947)',
      difficulty: 2
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Saussure, le lien entre {{signifiant}} et {{signifié}} est {{arbitraire}}.',
      back: 'signifiant | signifié | arbitraire',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'La pensée est-elle possible sans langage ?',
      back: 'La relation entre pensée et langage est débattue depuis l\'Antiquité. Pour Condillac, la pensée naît du langage : sans mots, pas de pensée claire. Pour Chomsky, le langage est faculté innée, structure biologique indépendante de la pensée consciente. Pour Whorf, la langue structure la pensée : des langues différentes produisent des visions du monde différentes. Pour d\'autres, pensée et langage sont indépendants : on peut penser visuellement, musicalement, sans mots. Les personnes sourdes de naissance privées de langage développent des formes de pensée complexes. L\'aphasie (perte du langage) montre que la pensée peut persister sans langage. Mais le langage structure certainement la pensée réflexive, abstraite, philosophique. La question reste ouverte mais engage toute notre compréhension de l\'humain : sommes-nous des animaux parlants ou des animaux pensants ? La réponse est peut-être : les deux indissociablement.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['langage', 'wittgenstein', 'saussure', 'heidegger', 'lacan', 'austin', 'derrida', 'chomsky', 'signe', 'signifiant', 'signifié', 'jeu de langage', 'performatif', 'communication', 'vérité']
};
