/**
 * Culture - Concept Data
 * Ensemble des savoirs, croyances, arts et coutumes d\'un groupe humain
 */

export const concept = {
  id: 'culture',
  name: 'Culture',
  slug: 'culture',
  category: 'sociologie',
  difficulty: 3,
  importance: 4,
  status: 'COMPLETE' as const,

  definition: 'La culture est l\'ensemble des savoirs, croyances, arts, coutumes et capacités acquises par un groupe humain. La philosophie distingue plusieurs sens : culture comme agriculture (définition originelle : cultiver la terre) ; culture comme formation de l\'esprit (éducation, arts, lettres) ; culture comme mode de vie (anthropologie : tout ce qui est acquis, appris, pas inné). Pour Rousseau, la culture est corruption de la nature bonté originelle. Pour Kant, la culture est développement des dispositions humaines, progrès vers l\'autonomie. Pour Hegel, la culture (Bildung) est formation de l\'esprit par la confrontation à l\'altérité. Pour l\'anthropologie contemporaine, la culture est lens à travers lequel chaque groupe voit le monde : relativisme culturel.',
  shortDefinition: 'Ensemble des savoirs, croyances, arts et coutumes acquis par un groupe humain',

  etymology: {
    latin: 'cultura : de colere (cultiver, habiter)',
    greek: 'paideia (παιδεία) : éducation, formation',
    root: 'kwel- (tourner, habiter) : cultiver, prendre soin',
    notes: 'Culture désigne d\'abord agriculture, puis métaphoriquement formation de l\'esprit'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du progrès (Kant)',
        explanation: 'La culture est développement progressif des dispositions humaines. Par éducation, art, science, l\'homme se perfectionne. La culture est fin naturelle de l\'humanité.',
        premises: ['L\'homme a dispositions non développées', 'La culture développe ces dispositions', 'Ce développement est progrès moral et intellectuel'],
        conclusion: 'Donc la culture est fin nécessaire de l\'humanité'
      },
      {
        argument: 'Argument de la liberté spirituelle (Hegel)',
        explanation: 'La culture est moment nécessaire de la liberté : l\'esprit se connaît en se confrontant à l\'altérité, en travaillant le donné naturel. La culture est médiation.',
        premises: ['L\'esprit n\'est pas immédiatement lui-même', 'Il doit se former par le travail, l\'art, la pensée', 'Cette formation est culture (Bildung)'],
        conclusion: 'Donc la culture est étape vers la liberté spirituelle'
      },
      {
        argument: 'Argument relativiste (anthropologie)',
        explanation: 'Chaque culture est worldview, façon de voir le monde. Il n\'y a pas de culture supérieure, seulement différentes. Chaque culture a sa logique interne.',
        premises: ['Les cultures varient énormément', 'Chaque culture est cohérente', 'Aucun point de vue extérieur neutre'],
        conclusion: 'Donc les cultures sont incommensurables, égales en valeur'
      }
    ],
    counterArguments: [
      {
        objection: 'Critique naturaliste',
        content: 'La culture est corruption de la nature. L\'homme à l\'état de nature était bon, la société et la culture l\'ont corrompu.',
        response: 'La nature n\'est pas idéal : l\'homme sauvage n\'est pas bon. La culture humanise, pas corrompt.'
      },
      {
        objection: 'Critique universaliste',
        content: 'Le relativisme culturel mène au "n\'importe quoi" : tout se vaut.',
        response: 'L\'universalité peut être impérialisme. Le respect des différences culturelles est valeur universelle elle-même.'
      }
    ],
    distinctions: [
      {
        distinction: 'Culture vs Nature',
        explanation: 'La nature est donné (biologique). La culture est acquis (social, symbolique). Mais l\'homme est être naturel qui produit de la culture.'
      },
      {
        distinction: 'Culture haute vs Culture populaire',
        explanation: 'Culture haute : arts lettrés, savants (opéra, philosophie). Culture populaire : pratiques du peuple (chansons, traditions). Cette distinction hiérarchique est contestée.'
      },
      {
        distinction: 'Culture vs Civilisation',
        explanation: 'Pour certains, culture identité spirituelle d\'un peuple, civilisation technique, matérielle. Pour d\'autres, culture et civilisation sont synonymes.'
      }
    ]
  },

  relatedConcepts: [
    { conceptId: 'nature', relation: 'OPPOSE', explanation: 'La culture s\'oppose à la nature comme acquis à donné' },
    { conceptId: 'art', relation: 'PART_OF', explanation: 'L\'art est partie de la culture' },
    { conceptId: 'technique', relation: 'RELATED', explanation: 'La technique est aspect de la culture' },
    { conceptId: 'societe', relation: 'CREATES', explanation: 'La société produit la culture à travers ses institutions, normes et pratiques collectives' },
    { conceptId: 'histoire', relation: 'TRANSMITS', explanation: 'La culture se transmet à travers l\'histoire par héritage, traditions et accumulation des savoirs' },
    { conceptId: 'autrui', relation: 'SHAPES', explanation: 'La culture détermine notre relation à autrui en définissant les normes sociales, la reconnaissance et l\'altérité' },
    { conceptId: 'authenticite', relation: 'INFLUENCES', explanation: 'La culture influence l\'authenticité : elle fournit le cadre à partir duquel l\'individu se construit et s\'affirme' }
  ],

  relatedMovements: [
    { movement: 'Humanisme', description: 'La culture comme formation humaine', keyFigures: ['Érasme', 'Montaigne'] },
    { movement: 'Idéalisme allemand', description: 'Bildung, formation de l\'esprit', keyFigures: ['Hegel', 'Schiller', 'Humboldt'] },
    { movement: 'Culturalisme', description: 'Relativisme culturel', keyFigures: ['Boas', 'Geertz'] }
  ],

  philosophicalAnalysis: {
    history: `Humanisme de la Renaissance : la culture comme formation de l\'homme par les lettres antiques.

Lumières : la culture comme progrès des lumières, émancipation par la raison.

Kant : la culture est développement des dispositions humaines, tendant vers autonomie morale.

Hegel : Bildung (culture/formation) est moment nécessaire de l\'esprit : l\'esprit se forme en travaillant le donné naturel.

XIXe-XXe siècle : l\'anthropologie découvre diversité des cultures. Question : hiérarchie ou égalité ? Évolutionnisme (hiérarchie) vs relativisme (égalité).

Aujourd'hui : mondialisation culturelle, métissage, mais aussi résistances identitaires.`,

    problems: [
      { problem: 'Problème du relativisme culturel', description: 'Toutes les cultures se valent-elles ? Comment juger des pratiques culturelles ?' },
      { problem: 'Problème de la mondialisation', description: 'La mondialisation uniformise-t-elle les cultures ou crée-t-elle métissage ?' }
    ],

    debates: [
      {
        issue: 'La culture est-elle supérieure à la nature ?',
        positions: [
          { philosopher: 'Rousseau', position: 'Non : la culture corrompt la nature' },
          { philosopher: 'Kant', position: 'Oui : la culture perfectionne la nature' },
          { philosopher: 'Hegel', position: 'La culture dépasse la nature en la spiritualisant' }
        ]
      }
    ]
  },

  variations: [
    {
      title: 'Culture comme agriculture (sens étymologique)',
      description: 'Colere signifie cultiver la terre. La culture est d\'abord agriculture : transformer la nature pour produire. Métaphoriquement, cultiver l\'esprit : éducation, formation.'
    },
    {
      title: 'Bildung (Hegel)',
      description: 'Bildung (formation, culture) est processus par lequel l\'esprit se connaît en se confrontant à l\'altérité. Je me forme en rencontrant l\'autre, en travaillant le donné naturel. La culture est médiation entre nature et esprit.'
    },
    {
      title: 'Culture comme worldview (anthropologie)',
      description: 'Pour l\'anthropologie moderne (Geertz), la culture est " filet de significations " : système de symboles à travers lequel un groupe voit le monde. Chaque culture a sa logique, ses valeurs. Pas de culture supérieure, seulement différentes.'
    },
    {
      title: 'Culture haute vs culture populaire',
      description: 'Traditionnellement, distinction entre culture haute (opéra, philosophie, arts lettrés, élites) et culture populaire (chansons, traditions, pratiques du peuple). Cette distinction hiérarchique est contestée : est-elle légitime ou élitiste ?'
    }
  ],

  keyFigures: [
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'La culture comme développement des dispositions humaines' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'Bildung comme formation de l\'esprit' },
    { name: 'Jean-Jacques Rousseau', period: '1712-1778', contribution: 'Critique de la culture comme corruption de la nature' },
    { name: 'Clifford Geertz', period: '1926-2006', contribution: 'L\'interprétation des cultures comme systèmes de significations' }
  ],

  examples: [
    'La culture grecque antique : philosophie, art, politique, citoyenneté. Modèle de culture pour l\'Occident. Mais : exclut les femmes, esclaves, métèques.',
    'La culture de masse contemporaine : TV, internet, consommation. Uniformisation ou diversité ? Mondialisation culturelle : McDonald\'s partout, mais aussi mélanges, créations hybrides.',
    'Le choc des cultures (Huntington) : Le monde divisé en " aires culturelles " (occidentale, chinoise, islamique) qui s\'affrontent. Thèse controversée, essentialiste.'
  ],

  sources: [
    {
      title: 'Observations sur le sentiment du beau et du sublime',
      author: 'Immanuel Kant',
      year: 1764,
      type: 'BOOK' as const,
      reference: 'La culture comme formation',
      quotes: ['La culture développe les dispositions humaines.', 'La culture est fin naturelle de l\'humanité.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que la Bildung chez Hegel ?',
      back: 'Bildung (formation, culture) est processus par lequel l\'esprit se forme et se connaît. L\'esprit n\'est pas immédiatement lui-même : il doit se confronter à l\'altérité, travailler le donné naturel, s\'éduquer. La culture est ce travail de formation : par l\'art, la religion, la philosophie, l\'esprit se déploie et se réalise. C\'est médiation entre nature et esprit, entre donné et acquis.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle différence entre nature et culture ?',
      back: 'La nature est donné (biologique, inné). La culture est acquis (social, appris, transmis). L\'homme est être naturel qui produit de la culture. Pour certains, la culture prolonge la nature (le langage est naturel). Pour d\'autres, la culture s\'oppose à la nature (elle l\'artificialise). La question centrale : y a-t-il des comportements humains naturels ou tout est culturel ? Pour l\'anthropologie moderne, presque tout est culturel : même les "émotions" varient selon les cultures.',
      difficulty: 3
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Rousseau, la culture {{corrompt}} la nature. Pour Kant, elle la {{perfectionne}}.',
      back: 'corrompt | perfectionne',
      difficulty: 1
    }
  ],

  tags: ['culture', 'nature', 'éducation', 'art', 'Bildung', 'relativisme', 'anthropologie', 'civilisation', 'identité']
};
