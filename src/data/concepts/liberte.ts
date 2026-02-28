/**
 * Liberté - Concept Data
 * Capacité de se déterminer soi-même, thème central de la philosophie moderne
 */

export const concept = {
  // ===== IDENTITÉ =====
  id: 'liberte',
  name: 'Liberté',
  slug: 'liberte',
  category: 'metaphysique',

  // ===== MÉTADONNÉES =====
  difficulty: 5,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: 'La liberté est la capacité de se déterminer soi-même, d\'agir selon sa propre volonté plutôt que sous la contrainte. La philosophie a développé plusieurs conceptions : la liberté négative (absence de contraintes extérieures) défendue par les libéraux ; la liberté positive (capacité d\'être son propre maître) développée par Berlin ; la liberté métaphysique ou libre arbitre (capacité de choisir entre des possibles) débattue depuis l\'Antiquité. Pour les existentialistes (Sartre), la liberté est absolue : « l\'homme est condamné à être libre ». Pour Spinoza, la liberté est la connaissance de la nécessité. Pour Kant, la liberté est la fondation de la moralité : l\'autonomie de la volonté. La question de la liberté se pose à la fois métaphysiquement (libre arbitre vs déterminisme) et politiquement (liberté individuelle vs contrainte sociale).',
  shortDefinition: 'Capacité de se déterminer soi-même et d\'agir selon sa propre volonté',

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'libertas',
    greek: 'eleutheria (ἐλευθερία)',
    root: 'liber : libre, opposé à servus (esclave)',
    notes: 'À Rome, la liberté désigne le statut de l\'homme libre vs l\'esclave. En grec, eleutheria désigne l\'indépendance politique'
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: 'Argument de la responsabilité morale',
        explanation: 'La liberté est condition nécessaire de la responsabilité morale. Si nos actions sont déterminées, nous ne pouvons être tenus responsables. Kant : obligation morale ⇒ liberté de la volonté. Saint Augustin : sans libre arbitre, pas de morale ni de péché.',
        premises: ['Nous sommes tenus pour responsables de nos actions', 'La responsabilité requiert la capacité d\'agir autrement', 'La capacité d\'agir autrement est la liberté'],
        conclusion: 'Donc la liberté existe comme condition de la moralité'
      },
      {
        argument: 'Argument de l\'indétermination phénoménologique',
        explanation: 'Notre expérience consciente nous présente toujours des alternatives. Même lorsque nous choisissons, nous avons le sentiment que nous aurions pu choisir autrement. Cette évidence phénoménologique soutient le libre arbitre.',
        premises: ['Nous vivons nos choix comme ouverts', 'Ce sentiment d\'ouverture est une donnée irréductible de l\'expérience', 'L\'expérience immédiate a valeur de connaissance'],
        conclusion: 'Donc nous sommes libres de choisir entre des alternatives'
      },
      {
        argument: 'Argument du déterminisme causal',
        explanation: 'Tout événement a une cause. Les états mentaux sont des événements physiques. Les événements physiques sont déterminés par des lois causales. Donc nos choix sont déterminés par des causes antérieures.',
        premises: ['Principe de raison suffisante : rien n\'arrive sans cause', 'L\'esprit est identique au cerveau (physicalisme)', 'Le cerveau obéit à des lois causales', 'Les lois causales sont déterministes'],
        conclusion: 'Donc le libre arbitre est une illusion'
      }
    ],
    objections: [
      {
        objection: 'Objection du déterminisme scientifique',
        content: 'La physique moderne (mécanique quantique) montre que l\'univers n\'est pas strictement déterministe. L\'indétermination quantique pourrait ouvrir un espace pour la liberté.',
        response: 'Le hasard quantique n\'est pas la liberté. Une action aléatoire n\'est pas plus libre qu\'une action déterminée. La liberté requiert l\'agentivité, pas l\'indétermination.'
      },
      {
        objection: 'Objection du déterminisme psychologique',
        content: 'Freud montre que nos « choix » conscients sont déterminés par des désirs inconscients. Nous nous racontons des histoires pour justifier ce que nous faisions déjà.',
        response: 'La détermination psychologique n\'est pas absolue. La psychanalyse vise justement à nous libérer en rendant conscient l\'inconscient. Plus nous comprenons nos motivations, plus nous sommes libres.'
      },
      {
        objection: 'Objection de la contrainte sociale',
        content: 'La liberté individuelle est illusoire car nous sommes déterminés par des forces sociales (classe, genre, culture). « L\'homme est produit de l\'histoire » (Marx).',
        response: 'La liberté n\'est pas l\'absence de toute détermination, mais la capacité de se approprier ces déterminations. Nous sommes « situés » mais pouvons transformer notre situation.'
      }
    ],
    distinctions: [
      {
        distinction: 'Liberté vs Arbitraire',
        explanation: 'Kant distingue la liberté (autonomie, obéir à la loi qu\'on se donne) de l\'arbitraire (faire ce qu\'on veut, suivre ses penchants). L\'homme libre n\'est pas celui qui suit tous ses désirs mais celui qui suit la loi morale.'
      },
      {
        distinction: 'Liberté d\'action vs Liberté de volonté',
        explanation: 'La liberté d\'action est la capacité de faire ce qu\'on veut (absence de contraintes extérieures). La liberté de volonté est la capacité de vouloir ce qu\'on veut (absence de détermination intérieure). On peut être libre d\'action sans être libre de volonté (esclave qui obéit volontairement).'
      },
      {
        distinction: 'Liberté vs Licence',
        explanation: 'La liberté est la capacité de se déterminer soi-même. La licence est l\'absence de règles, le caprice. La liberté politique ne veut pas dire « faire n\'importe quoi » mais participer à la loi qui me gouverne.'
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      conceptId: 'determinisme',
      relation: 'OPPOSE',
      explanation: 'Le déterminisme affirme que tout événement a une cause et que nos choix sont déterminés par des causes antérieures. La liberté (libre arbitre) affirme la capacité de choisir autrement.'
    },
    {
      conceptId: 'responsabilite',
      relation: 'REQUIRES',
      explanation: 'La responsabilité morale requiert la liberté. Sans liberté de choisir, on ne peut être tenu responsable de ses actions.'
    },
    {
      conceptId: 'contrainte',
      relation: 'OPPOSE',
      explanation: 'La contrainte est ce qui limite la liberté. La liberté négative est absence de contraintes extérieures.'
    },
    {
      conceptId: 'autonomie',
      relation: 'BUILDS_ON',
      explanation: 'L\'autonomie (se donner sa propre loi) est une forme supérieure de liberté chez Kant.'
    },
    {
      conceptId: 'necessite',
      relation: 'OPPOSE',
      explanation: 'La nécessité s\'oppose à la contingence. Pour Spinoza, la liberté est comprendre la nécessité, pas la nier.'
    },
    {
      conceptId: 'volonte',
      relation: 'INFLUENCES',
      explanation: 'La volonté est la faculté de choisir. La liberté de la volonté est le libre arbitre.'
    },
    {
      conceptId: 'droit',
      relation: 'INFLUENCED_BY',
      explanation: 'Les droits politiques protègent la liberté individuelle (libertés fondamentales).'
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Libéralisme',
      role: 'CENTRAL',
      description: 'Le libéralisme fait de la liberté individuelle la valeur politique suprême. Protection contre l\'ingérence de l\'État (libertarianisme) ou État social pour réaliser la liberté positive (libéralisme social).'
    },
    {
      movement: 'Existentialisme',
      role: 'CENTRAL',
      description: 'L\'existentialisme fait de la liberté absolue la condition de l\'existence humaine. « L\'existence précède l\'essence » : nous sommes libres de nous inventer.'
    },
    {
      movement: 'Stoïcisme',
      role: 'RELATED',
      description: 'Les stoïciens distinguent ce qui dépend de nous (jugements, volontés) et ce qui n\'en dépend pas (corps, réputation). La liberté est intérieure : être maître de ses jugements.'
    },
    {
      movement: 'Kantisme',
      role: 'CENTRAL',
      description: 'Kant fonde la moralité sur la liberté comme autonomie. Être libre, c\'est obéir à la loi morale qu\'on se prescrit à soi-même.'
    },
    {
      movement: 'Marxisme',
      role: 'CRITICAL',
      description: 'Le marxisme critique la liberté formelle (liberté politique dans une société inégalitaire) et vise la liberté réelle (émancipation économique).'
    },
    {
      movement: 'Compatibilisme',
      role: 'CENTRAL',
      description: 'Position philosophique (Hume, Frankfurt) selon laquelle liberté et déterminisme sont compatibles. La liberté est agir selon ses motifs sans contrainte extérieure.'
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `La question de la liberté apparaît dès l'Antiquité grecque avec le débat sur le destin. Les stoïciens tentent de concilier fatalisme et responsabilité : tout est écrit, mais nous pouvons accepter ou résister.

Au Moyen Âge, le problème se pose en termes théologiques : si Dieu est tout-puissant et sait tout, comment l'homme peut-il être libre ? Saint Augustin puis Thomas d'Aquin tentent de concilier grâce divine et libre arbitre.

La modernité cartésienne fait de la liberté le fondement de la subjectivité. Pour Descartes, la liberté est infinie comme la volonté. Mais c'est Kant qui donne à la liberté son statut philosophique définitif : la liberté est la condition de la moralité.

Le XIXe siècle voit deux évolutions contradictoires : Marx montre que la liberté économique est une condition de la liberté politique, tandis que Nietzsche critique la volonté de liberté comme expression du ressentiment.

Le XXe siècle approfondit : Sartre radicalise la liberté absolue (« condamné à être libre »), Berlin distingue liberté négative et positive, et les sciences (neurosciences, physique quantique) renouvellent le débat déterminisme/liberté.`,

    problems: [
      {
        problem: 'Problème du libre arbitre vs déterminisme',
        description: 'Comment concilier le sentiment de liberté avec le fait que tout événement semble avoir une cause ? Si nos choix sont déterminés, comment pouvons-nous être responsables ?'
      },
      {
        problem: 'Problème de la liberté positive',
        description: 'La liberté positive (être son propre maître) peut-elle justifier la contrainte « pour le bien » des gens ? Comment éviter que l'émancipation ne devienne tyrannie ?'
      },
      {
        problem: 'Problème de la contrainte sociale',
        description: 'Si nous sommes produits par notre histoire, notre classe, notre culture, sommes-nous vraiment libres ? La liberté n'est-elle pas illusion de ceux qui ignorent ce qui les détermine ?'
      }
    ],

    debates: [
      {
        issue: 'La compatibilité de la liberté et du déterminisme',
        positions: [
          {
            philosopher: 'Descartes',
            position: 'Incompatibilisme libertarien : liberté et déterminisme sont incompatibles, et nous sommes libres. La volonté est indéterminée.'
          },
          {
            philosopher: 'Spinoza',
            position: 'Incompatibilisme dur : liberté et déterminisme sont incompatibles, et tout est déterminé. Le libre arbitre est illusion.'
          },
          {
            philosopher: 'Hume',
            position: 'Compatibilisme : liberté et déterminisme sont compatibles. La liberté est agir selon ses motivations sans contrainte extérieure.'
          },
          {
            philosopher: 'Kant',
            position: 'Dualisme : liberté dans l'ordre nouménal (chose en soi), déterminisme dans l'ordre phénoménal (apparence).'
          }
        ]
      },
      {
        issue: 'Le fondement de la liberté politique',
        positions: [
          {
            philosopher: 'John Stuart Mill',
            position: 'La liberté individuelle est absolue tant qu'elle ne nuit pas à autrui. La limite de la liberté est le tort à autrui.'
          },
          {
            philosopher: 'Rousseau',
            position: 'La liberté est obéir à la loi qu'on se prescrit. Le contrat social transforme la liberté naturelle en liberté civile.'
          },
          {
            philosopher: 'Marx',
            position: 'La liberté formelle (droits politiques) est illusoire sans liberté réelle (émancipation des contraintes économiques).'
          },
          {
            philosopher: 'Berlin',
            position: 'Mise en garde contre la liberté positive qui peut justifier la tyrannie au nom de l'émancipation.'
          }
        ]
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: 'Liberté négative (Berlin)',
      description: 'Isaiah Berlin, dans Deux concepts de la liberté (1958), distingue la liberté négative (liberty from) : absence d\'obstacles, de contraintes extérieures. Je suis libre si personne ne m\'empêche de faire ce que je veux. C\'est la liberté classique du libéralisme : protection contre l\'ingérence d\'autrui ou de l\'État. Exemple : liberté d\'expression comme absence de censure.',
      philosophicalContext: 'Cette conception s\'inscrit dans la tradition libérale de Locke, Mill et Constant. Elle protège l\'individu contre l\'arbitraire de l\'État et la tyrannie de la majorité.'
    },
    {
      title: 'Liberté positive (Berlin)',
      description: 'La liberté positive (liberty to) est la capacité d\'être son propre maître, de réaliser son potentiel. Ce n\'est pas seulement être laissé tranquille, mais avoir les moyens de se gouverner soi-même. Berlin souligne les dangers historiques de cette conception : elle peut justifier la contrainte « pour le bien » des gens. Exemple : liberté comme émancipation, autonomie.',
      philosophicalContext: 'Cette conception remonte à Rousseau (« être forcé d\'être libre »), Hegel (liberté comme reconnaissance), et Marx (émancipation réelle par la révolution). Berlin met en garde contre les dérives totalitaires.'
    },
    {
      title: 'Liberté d\'indifférence (Descartes)',
      description: 'Pour Descartes, la liberté au plus haut degré est la liberté d\'indifférence : choix entre des contraires lorsque aucune raison ne détermine davantage. C\'est la volonté parfaitement indifférente au bien et au mal. Descartes voit là la preuve de notre liberté absolue : nous pouvons choisir même sans raison déterminante.',
      philosophicalContext: 'Cette thèse s\'oppose à la conception scolastique de la liberté comme choix du meilleur. Pour Descartes, l\'indifférence est le signe de la liberté infinie de la volonté.'
    },
    {
      title: 'Liberté de spontanéité (Descartes)',
      description: 'Pour Descartes, la liberté de spontanéité (ou évidence) est le choix clair et distinct : quand nous connaissons clairement le bien, nous le choisissons spontanément. Cette liberté est plus parfaite que l\'indifférence car elle est déterminée par la connaissance de la vérité. C\'est la liberté éclairée par la raison.',
      philosophicalContext: 'Cette forme de liberté annonce la conception kantienne de l\'autonomie : être libre, c\'est être déterminé par la raison morale qu\'on se donne à soi-même.'
    },
    {
      title: 'Liberté comme autonomie (Kant)',
      description: 'Pour Kant, la liberté n\'est pas l\'arbitraire (faire ce qu\'on veut) mais l\'autonomie : se donner à soi sa propre loi (autos-nomos). L\'homme libre est celui qui obéit à la loi morale qu\'il se prescrit à lui-même, pas à ses inclinations sensibles. La liberté est la fondation de la dignité humaine et de la moralité.',
      philosophicalContext: 'L\'autonomie kantienne rompt avec la conception moderne de la liberté comme indépendance. Elle ouvre la voie à l\'éthique moderne : liberté = responsabilité.'
    },
    {
      title: 'Liberté absolue (Sartre)',
      description: 'Pour Sartre, la liberté est totale et absolue. Nous sommes « condamnés à être libres » : il n\'y a pas de nature humaine, pas de déterminisme qui puisse excuser nos choix. Même ne pas choisir est un choix. La liberté est angoissante car elle nous rend responsables de tout ce que nous faisons. L\'existence précède l\'essence.',
      philosophicalContext: 'L\'existentialisme sartrien radicalise la liberté. Elle n\'est pas un attribut de l\'homme mais sa condition d\'existence. Cette liberté absolue est source d\'angoisse mais aussi de dignité.'
    },
    {
      title: 'Liberté comme connaissance de la nécessité (Spinoza)',
      description: 'Pour Spinoza, la liberté n\'est pas le libre arbitre (illusion selon laquelle nous pourrions choisir autrement) mais la compréhension de ce qui nous détermine. L\'homme libre est celui qui comprend les causes de ses actions et peut ainsi agir selon la raison plutôt que sous le coup des passions. La liberté est libération par la connaissance.',
      philosophicalContext: 'Le spinozisme propose une conception originale de la liberté : compatibilisme avant la lettre. La liberté n\'est pas nier la nécessité mais la comprendre. Cette conception influence Hegel et Marx.'
    },
    {
      title: 'Liberté de spontanéité naturelle (Rousseau)',
      description: 'Pour Rousseau, l\'homme à l\'état de nature est parfaitement libre : il suit ses inclinations naturelles sans contrainte sociale. La liberté civile, par le contrat social, transforme cette liberté naturelle (droit de tout prendre) en liberté civile (droit de tout posséder). La liberté civile est « obéir à la loi qu\'on s\'est prescrite ».',
      philosophicalContext: 'Rousseau tente de concilier liberté individuelle et contrainte sociale : le contrat social préserve la liberté en transformant l\'obéissance en autonomie.'
    },
    {
      title: 'Liberté comme reconnaissance (Hegel)',
      description: 'Pour Hegel, la liberté n\'est pas l\'indépendance solitaire mais la reconnaissance mutuelle. Je suis libre quand je suis reconnu par un autre libre. L\'histoire est le processus de réalisation de la liberté : de la liberté formelle (droits subjectifs) à la liberté concrète (État rationnel).',
      philosophicalContext: 'Hegel rompt avec la conception libérale de la liberté comme non-ingérence. La liberté est relationnelle : elle se réalise dans des institutions rationnelles.'
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'La liberté absolue comme condition de l\'existence humaine : « condamné à être libre »' },
    { name: 'Emmanuel Kant', period: '1724-1804', contribution: 'La liberté comme autonomie de la volonté et fondement de la moralité' },
    { name: 'Baruch Spinoza', period: '1632-1677', contribution: 'Critique du libre arbitre et conception de la liberté comme connaissance de la nécessité' },
    { name: 'Rene Descartes', period: '1596-1650', contribution: 'Distinction entre liberté d\'indifférence et liberté de spontanéité' },
    { name: 'Isaiah Berlin', period: '1909-1997', contribution: 'Distinction célèbre entre liberté négative et liberté positive' },
    { name: 'John Stuart Mill', period: '1806-1873', contribution: 'Défense de la liberté individuelle dans De la liberté (1859)' },
    { name: 'Saint Augustin', period: '354-430', contribution: 'Première synthèse chrétienne entre grâce divine et libre arbitre' }
  ],

  // ===== EXEMPLES =====
  examples: [
    'Le prisonnier et l\'esclave : Un prisonnier en cellule manque de liberté négative (contrainte physique). Un esclave qui intériorise sa servitude manque de liberté positive. L\'homme libre est celui qui n\'a ni chaînes extérieures ni intérieures.',
    'L\'alcoolique : Spinoza prend l\'exemple de l\'alcoolique qui dit « je pourrais arrêter si je voulais ». Pour Spinoza, c\'est une illusion : il ne veut pas arrêter car il est déterminé par ses désirs. Il ne deviendra libre qu\'en comprenant ce qui le détermine.',
    'Le citoyen dans la démocratie : Le citoyen a la liberté négative (l\'État ne l\'empêche pas de s\'exprimer) et la liberté positive (il participe à la loi qui le gouverne). La démocratie vise à réaliser les deux formes de liberté.',
    'L\'artiste créateur : L\'artiste exerce sa liberté positive en créant une œuvre originale. Il n\'est pas seulement « libre de » créer (absence de censure) mais « libre de » se réaliser par la création. C\'est la liberté comme auto-accomplissement.',
    'Le choix professionnel face aux parents : L\'étudiant qui choisit sa carrière malgré la pression parentale exerce sa liberté d\'indifférence (choix entre des possibles). Celui qui suit le chemin tracé par autrui, même de bon gré, est dans une moindre liberté.'
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: 'L\'Être et le Néant',
      author: 'Jean-Paul Sartre',
      year: 1943,
      type: 'BOOK' as const,
      reference: 'Traité d\'ontologie phénoménologique sur la conscience et la liberté absolue',
      quotes: [
        'L\'homme est condamné à être libre.',
        'L\'existence précède l\'essence.',
        'Nous sommes une liberté qui choisit.',
        'Je suis ma liberté.',
        'L\'homme est responsable de tout, sauf de sa responsabilité.',
        'La liberté est l\'être même de l\'homme.',
        'Il n\'y a pas de nature humaine.'
      ]
    },
    {
      title: 'Critique de la raison pratique',
      author: 'Emmanuel Kant',
      year: 1788,
      type: 'BOOK' as const,
      reference: 'Fondation de la philosophie morale sur la liberté comme autonomie',
      quotes: [
        'La liberté est la faculté de se déterminer par soi-même.',
        'L\'autonomie de la volonté est le seul principe de la moralité.',
        'Tu dois, donc tu peux.',
        'La liberté est la condition de la loi morale.',
        'L\'homme libre est législateur universel.',
        'La volonté libre et la volonté soumise à la loi morale sont une seule et même chose.'
      ]
    },
    {
      title: 'Éthique',
      author: 'Baruch Spinoza',
      year: 1677,
      type: 'BOOK' as const,
      reference: 'Traité sur Dieu, l\'homme et la liberté comme connaissance de la nécessité',
      quotes: [
        'L\'homme libre pense à rien moins qu\'à la mort.',
        'La liberté est la connaissance de la nécessité.',
        'Le libre arbitre est une illusion.',
        'Nous sentons que nous agissons librement, mais nous ignorons les causes qui nous déterminent.',
        'Se libérer, c\'est comprendre ce qui nous détermine.',
        'L\'ignorance est la cause de la servitude.'
      ]
    },
    {
      title: 'Méditations métaphysiques',
      author: 'René Descartes',
      year: 1641,
      type: 'BOOK' as const,
      reference: 'Traité sur la liberté de la volonté et le libre arbitre',
      quotes: [
        'La liberté consiste en notre faculté de choisir ou de refuser.',
        'La volonté va plus loin que l\'entendement.',
        'Je suis libre de suspendre mon jugement.',
        'Dans la liberté d\'indifférence, je suis indifférent au bien et au mal.',
        'La liberté est le plus grand de tous les biens.'
      ]
    },
    {
      title: 'Deux concepts de la liberté',
      author: 'Isaiah Berlin',
      year: 1958,
      type: 'ESSAY' as const,
      reference: 'Conférence distinguant liberté négative et liberté positive',
      quotes: [
        'La liberté négative est la réponse à la question : « Quelle est la sphère dans laquelle je peux être laissé seul? »',
        'La liberté positive est la réponse à la question : « Qui est mon maître? »',
        'La liberté pour les loups est la mort pour les agneaux.',
        'La liberté positive peut justifier la tyrannie au nom de l\'émancipation.',
        'Plus de liberté pour les uns signifie souvent moins de liberté pour les autres.'
      ]
    },
    {
      title: 'De la liberté',
      author: 'John Stuart Mill',
      year: 1859,
      type: 'BOOK' as const,
      reference: 'Défense classique du libéralisme et de la liberté individuelle',
      quotes: [
        'La seule liberté qui mérite ce nom est celle de poursuivre notre propre bien.',
        'Le seul but pour lequel la puissance peut être exercée sur un membre de la communauté est de prévenir le tort à autrui.',
        'La liberté d\'expression est essentielle à la recherche de la vérité.',
        'Le marché des idées permet la résorption des erreurs.',
        'La diversité des modes de vie est un élément essentiel du bien-être.'
      ]
    },
    {
      title: 'Le Libre Arbitre',
      author: 'Saint Augustin',
      year: 395,
      type: 'BOOK' as const,
      reference: 'Traité sur la liberté humaine et la grâce divine',
      quotes: [
        'La liberté est le don le plus grand après la grâce.',
        'Le libre arbitre est la cause du péché, mais sans lui il n\'y a pas de morale.',
        'Dieu a donné l\'homme le libre arbitre pour qu\'il puisse mériter.',
        'La vraie liberté est de ne pouvoir pécher.'
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Quelle distinction Berlin fait-il entre liberté négative et liberté positive ?',
      back: 'La liberté négative (liberty from) est l\'absence de contraintes extérieures (« on me laisse faire »). La liberté positive (liberty to) est la capacité d\'être son propre maître et de réaliser son potentiel (« je peux »). Berlin met en garde les dangers historiques de la liberté positive qui peut justifier la contrainte « pour le bien » des gens.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Sartre définit-il la liberté ?',
      back: 'Pour Sartre, la liberté est absolue : « l\'homme est condamné à être libre ». Il n\'y a pas de nature humaine, pas de déterminisme, pas d\'excuses. Nous devons inventer qui nous sommes par nos choix. Même refuser de choisir est un choix. Cette liberté totale est angoissante car elle nous rend responsables de tout.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Kant relie-t-il liberté et moralité ?',
      back: 'Pour Kant, la liberté est la condition de la moralité. L\'homme libre n\'est pas celui qui fait ce qu\'il veut (arbitraire) mais celui qui se donne à soi sa propre loi (autonomie). La loi morale n\'est pas une contrainte extérieure mais l\'expression de notre liberté rationnelle. Être libre, c\'est obéir à la loi morale qu\'on se prescrit à soi-même.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Spinoza critique-t-il le libre arbitre ?',
      back: 'Pour Spinoza, le libre arbitre est une illusion : nous croyons choisir librement alors que nous sommes déterminés par des causes que nous ignorons. La liberté n\'est pas le pouvoir de choisir autrement, mais la connaissance de ce qui nous détermine. L\'homme libre comprend les causes de ses actions et peut ainsi agir selon la raison plutôt que subir les passions.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle distinction Descartes fait-il entre liberté d\'indifférence et liberté de spontanéité ?',
      back: 'La liberté d\'indifférence est le choix entre des contraires quand aucune raison ne détermine davantage (indifférence au bien et au mal). La liberté de spontanéité (ou évidence) est le choix clair et distinct : connaissant clairement le bien, nous le choisissons spontanément. Pour Descartes, la spontanéité est plus parfaite car elle est éclairée par la raison.',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Sartre résume la conception existentialiste de la liberté ?',
      back: '« L\'homme est condamné à être libre » (L\'Être et le Néant, 1943) - Nous n\'avons pas choisi d\'être libres, mais notre liberté est notre condition absolue.',
      difficulty: 2
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Spinoza résume sa conception de la liberté ?',
      back: '« La liberté est la connaissance de la nécessité » (Éthique, 1677) - La liberté n\'est pas choisir n\'importe comment, mais comprendre ce qui nous détermine.',
      difficulty: 2
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Berlin, la liberté {{négative}} est l\'absence de contraintes, la liberté {{positive}} est la capacité d\'être son propre maître.',
      back: 'négative | positive',
      difficulty: 2
    },
    {
      type: 'ESSAY' as const,
      front: 'La liberté est-elle compatible avec le déterminisme ?',
      back: 'Le problème de la liberté oppose déterminisme (tout a une cause) et libre arbitre (capacité de choisir autrement). Plusieurs solutions : 1) Incompatibilisme dur (liberté et déterminisme sont incompatibles, et le déterminisme est vrai - Spinoza) ; 2) Incompatibilisme libertarien (liberté et déterminisme sont incompatibles, et nous sommes libres - Descartes) ; 3) Compatibilisme (liberté et déterminisme sont compatibles : la liberté est d\'agir selon ses motifs sans contrainte extérieure - Hume, Kant). La question reste ouverte mais chaque position a des conséquences morales et politiques majeures.',
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['liberté', 'sartre', 'kant', 'spinoza', 'descartes', 'berlin', 'libre arbitre', 'autonomie', 'déterminisme', 'responsabilité', 'moralité']
};
