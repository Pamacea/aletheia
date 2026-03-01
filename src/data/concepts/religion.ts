/**
 * Religion - Concept Data
 * Système de croyances et pratiques reliant l\'humain au divin, au sacré
 */

export const concept = {
  id: 'religion',
  name: 'Religion',
  slug: 'religion',
  category: 'spiritualite',
  difficulty: 4,
  importance: 5,
  status: 'COMPLETE' as const,

  definition: 'La religion est un système de croyances et de pratiques reliant l\'humain au divin, au transcendant, ou au sacré. La philosophie distingue plusieurs approches : la religion comme révélation (christianisme, islam, judaïsme) ; la religion comme opinion fausse mais utile (Voltaire) ; la religion comme "opium du peuple" (Marx).',
  shortDefinition: 'Système de croyances et pratiques reliant l\'humain au divin ou au sacré',

  etymology: {
    latin: 'religio : de religare (lier) ou relegere (relire, recueillir)',
    greek: 'threskeia (θρησκεία) : piété, culte',
    root: 'leg- (lier, recueillir) : lien, obligation',
    notes: 'Religio signifie lien avec le divin, obligation religieuse'
  },

  reasoning: {
    principalArguments: [
      {
        argument: 'Argument du pari (Pascal)',
        explanation: 'Nous ne pouvons savoir si Dieu existe. Mais nous devons parier. Si je parie que Dieu existe et qu\'Il existe, je gagne tout (vie éternelle). Si je parie qu\'Il n\'existe pas et qu\'Il existe, je perds tout. Il est rationnel de parier que Dieu existe.',
        premises: ['L\'existence de Dieu est incertaine', 'Je dois choisir : croire ou ne pas croire', 'Si Dieu existe et que je crois, gain infini', 'Si Dieu existe et que je ne crois pas, perte infinie'],
        conclusion: 'Donc il est rationnel de parier que Dieu existe'
      },
      {
        argument: 'Argument du consensus moral',
        explanation: 'La morale universelle (ne pas tuer, pas voler) requiert un fondement transcendant. Sans Dieu, la morale est convention humaine changeante. Dieu garantit l\'objectivité du bien et du mal.',
        premises: ['Il y a des vérités morales universelles', 'Ces vérités requièrent un fondement objectif', 'Seul un être transcendant peut fonder l\'objectivité morale'],
        conclusion: 'Donc l\'existence de la morale objective prouve l\'existence de Dieu'
      },
      {
        argument: 'Argument du désir du bonheur infini (Augustin)',
        explanation: 'Nos désirs naturels ont des objets réels (faim => nourriture). Nous désirons tous le bonheur infini, éternel. Ce désir ne peut être vain. Donc il existe un bonheur infini : Dieu.',
        premises: ['Tout désir naturel a un objet réel correspondant', 'Nous désirons naturellement le bonheur parfait, infini', 'Ce désir ne peut être vain (tromperie de la nature)'],
        conclusion: 'Donc il existe un objet à ce désir : Dieu, bonheur infini'
      }
    ],
    counterArguments: [
      {
        objection: 'Critique athée',
        content: 'L\'existence du mal est incompatible avec un Dieu tout-puissant et tout bon. Si Dieu existe, pourquoi le mal ? Soit Dieu n\'est pas tout-puissant, soit pas tout bon, soit pas existant.',
        response: 'Le mal est condition de la liberté. Dieu permet le mal pour permettre la créature libre. Ou : le mal est mystère (Kierkegaard).'
      },
      {
        objection: 'Critique freudienne',
        content: 'La religion est illusion, projection du désir de père protecteur. L\'humanité a inventé Dieu pour se consoler de la mort et de l\'angoisse.',
        response: 'L\'explication psychologique de l\'origine de la croyance ne réfute pas sa vérité. Expliquer pourquoi je crois ne prouve pas que ce que je crois est faux.'
      },
      {
        objection: 'Critique marxiste',
        content: 'La religion est "opium du peuple" (Marx) : elle justifie les injustices sociales en promettant bonheur dans l\'au-delà.',
        response: 'La religion peut aussi être force de libération (théologie de la libération). Marx confond religion utilisée et religion véritable.'
      }
    ],
    distinctions: [
      {
        distinction: 'Religion vs Morale',
        explanation: 'La morale concerne le bien et le mal. La religion concerne la relation avec le divin. Elles se recoupent (morale religieuse) mais ne s\'identifient pas. On peut être moral sans être religieux.'
      },
      {
        distinction: 'Foi vs Religion',
        explanation: 'La foi est relation personnelle au divin. La religion est système institutionnel de croyances et pratiques. On peut avoir la foi sans religion (croyant non pratiquant) ou la religion sans foi (pratiquant par habitude).'
      },
      {
        distinction: 'Religion vs Magie',
        explanation: 'La religion est relation avec le divin par prière, sacrifice. La magie est technique pour contraindre les forces surnaturelles. Max Weber : la religion est rejet de la magie.'
      }
    ]
  },

  relatedConcepts: [
    { conceptId: 'dieu', relation: 'CENTRAL', explanation: 'La religion est relation avec Dieu ou le divin' },
    { conceptId: 'foi', relation: 'REQUIRES', explanation: 'La foi est adhésion à la religion' },
    { conceptId: 'morale', relation: 'INFLUENCES', explanation: 'La religion fonde souvent la morale' },
    { conceptId: 'transcendance', relation: 'RELATED', explanation: 'La religion se rapporte au transcendant' },
    { conceptId: 'verite', relation: 'EXPLORES', explanation: 'La religion explore la vérité religieuse révélée ou transcendante' },
    { conceptId: 'sens', relation: 'PROVIDES', explanation: 'La religion donne un sens à l\'existence, un cadre de signification' }
  ],

  relatedMovements: [
    { movement: 'Théisme', description: 'Croyance en Dieu personnel', keyFigures: ['Augustin', 'Thomas d\'Aquin'] },
    { movement: 'Déisme', description: 'Dieu comme horloger, pas d\'intervention', keyFigures: ['Voltaire', 'Rousseau'] },
    { movement: 'Athéisme', description: 'Rejet de l\'existence de Dieu', keyFigures: ['Feuerbach', 'Marx', 'Nietzsche', 'Sartre'] },
    { movement: 'Agnosticisme', description: 'Inconnaissabilité de Dieu', keyFigures: ['Hume', 'Kant'] }
  ],

  philosophicalAnalysis: {
    history: `Les religions sont phénomène universel. Toutes les cultures ont forme de religiosité.

Antiquité : polythéisme grec et romain, religions du livre (judaïsme, christianisme, islam).

Moyen Âge : christianisme dominant en Occident, philosophie servante de la théologie.

Lumières : critique de la religion comme superstition. Voltaire : "écrasez l\'infâme". Lessing : tolérance religieuse.

XIXe siècle : athéisme (Feuerbach : Dieu projection de l\'homme), matérialisme (Marx : religion opium), Nietzsche (mort de Dieu).

XXe siècle : crise de la religion en Occident (sécularisation), mais retour du religieux (fondamentalismes). Philosophie de la religion (Barth, Tillich).`,

    problems: [
      { problem: 'Problème de l\'existence de Dieu', description: 'Dieu existe-t-il ? Les preuves sont-elles convaincantes ?' },
      { problem: 'Problème du mal', description: 'Comment un Dieu bon et tout-puissant permet-il le mal ?' },
      { problem: 'Problème de la vérité religieuse', description: 'Toutes les religions se valent-elles ? Y a-t-il une vraie religion ?' },
      { problem: 'Problème de la sécularisation', description: 'Le déclin du religieux est-il irréversible ? Que reste-t-il de la religion après la mort de Dieu ?' }
    ],

    debates: [
      {
        issue: 'Dieu existe-t-il ?',
        positions: [
          { philosopher: 'Thomas d\'Aquin', position: 'Oui, cinq preuves de l\'existence de Dieu (mouvement, cause, contingence, degrés, finalité)' },
          { philosopher: 'Kant', position: 'L\'existence de Dieu est postulat de la raison pratique, pas objet de savoir théorique' },
          { philosopher: 'Nietzsche', position: 'Non, "Dieu est mort". L\'idée de Dieu est métaphysique inutile et nuisible' },
          { philosopher: 'Sartre', position: 'L\'existence de Dieu est improbable, mais si Dieu existait, il faudrait se rebeller (l\'homme est liberté absolue)' }
        ]
      }
    ]
  },

  variations: [
    {
      title: 'Religion comme révélation (christianisme, judaïsme, islam)',
      description: 'Les religions du livre se fondent sur révélation : Dieu s\'est révélé aux prophètes (Moïse, Jésus, Mahomet). Cette révélation est contenue dans les Écritures (Bible, Coran). La foi est adhésion à cette révélation. La religion est vérité révélée, pas opinion humaine.'
    },
    {
      title: 'Religion comme "opium du peuple" (Marx)',
      description: 'Pour Marx, la religion est "soupir de la créature opprimée", "opium du peuple". Elle justifie les injustices sociales en promettant bonheur dans l\'au-delà, détournant les opprimés de la lutte pour leur émancipation ici-bas. La critique de la religion est prémisse de toute critique.'
    },
    {
      title: 'Religion comme projection (Feuerbach, Freud)',
      description: 'Pour Feuerbach, Dieu est projection de l\'essence humaine : les qualités humaines (sagesse, bonté) sont projetées sur un être imaginaire. Pour Freud, Dieu est projection du désir de père protecteur, consolation face à l\'angoisse de la mort. La religion est illusion nécessaire pour l\'humanité immature.'
    },
    {
      title: 'Religion comme inquiétude (Heidegger)',
      description: 'Pour Heidegger, la religion n\'est pas système doctrinal mais expérience de l\'inquiétude, de la dépendance radicale. La foi est possibilité d\'existence authentique : se savoir jeté, contingent, fini. La religion est dimension de l\'être-là, pas croyance parmi d\'autres.'
    },
    {
      title: 'Religion comme saut (Kierkegaard)',
      description: 'Pour Kierkegaard, la foi religieuse est saut dans l\'absurde. Le chrétien croit que Dieu est devenu homme en Jésus, scandale pour la raison. La foi n\'est pas certitude intellectuelle mais engagement passionné, pari sans garantie. La religion est subjectivité, vérité pour moi.'
    },
    {
      title: '"Mort de Dieu" (Nietzsche)',
      description: 'Nietzsche annonce que "Dieu est mort" : la croyance en Dieu est devenue invraisemblable. Les conséquences sont immenses : plus de fondement transcendant pour la morale, plus de sens donné, plus de valeur absolue. L\'humanité doit créer ses propres valeurs (surhomme). Le nihilisme est danger mais aussi opportunité.'
    }
  ],

  keyFigures: [
    { name: 'Blaise Pascal', period: '1623-1662', contribution: 'Le pari sur l\'existence de Dieu' },
    { name: 'Søren Kierkegaard', period: '1813-1855', contribution: 'La foi comme saut dans l\'absurde' },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'Critique radicale de la religion et mort de Dieu' },
    { name: 'Ludwig Feuerbach', period: '1804-1872', contribution: 'La religion comme projection de l\'essence humaine' },
    { name: 'Karl Marx', period: '1818-1883', contribution: 'La religion comme opium du peuple' },
    { name: 'Sigmund Freud', period: '1856-1939', contribution: 'La religion comme illusion, consolation' },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'Analyse phénoménologique de la religion' }
  ],

  examples: [
    'Le pari de Pascal : "Dieu est ou il n\'est pas". Face à l\'incertitude sur l\'existence de Dieu, il faut parier. Si je parie que Dieu existe et qu\'Il existe, je gagne tout (vie éternelle). Si je parie qu\'Il n\'existe pas et qu\'Il existe, je perds tout. Le gain possible (infini) l\'emporte sur la perte possible (finie).',
    'Les trois preuves de Thomas d\'Aquin : 1) Le mouvement (premier moteur immobile), 2) La causalité (cause première), 3) La contingence (être nécessaire), 4) Les degrés de perfection (être parfait), 5) L\'ordre du monde (intelligence ordonnatrice).',
    '"Dieu est mort" (Nietzsche) : Le fou qui cherche Dieu avec une lanterne dans le marché (Le Gai Savoir). "Nous l\'avons tué, vous et moi". L\'annonce de la mort de Dieu signifie la fin des valeurs transcendantes et la nécessité de créer de nouvelles valeurs.',
    'La théologie de la libération : Mouvement en Amérique latine qui interprète le christianisme comme préférence pour les pauvres, engagement pour la justice sociale. La religion comme force de libération, pas d\'aliénation.'
  ],

  sources: [
    {
      title: 'Pensées',
      author: 'Blaise Pascal',
      year: 1670,
      type: 'BOOK' as const,
      reference: 'Le pari sur l\'existence de Dieu',
      quotes: [
        'Dieu est ou il n\'est pas.',
        'Il faut parier.',
        'Le pari est raisonnable.',
        'Vous gagnez tout, vous ne perdez rien.'
      ]
    },
    {
      title: 'L\'essence du christianisme',
      author: 'Ludwig Feuerbach',
      year: 1841,
      type: 'BOOK' as const,
      reference: 'Critique de la religion comme projection',
      quotes: ['Dieu est projection de l\'homme.', 'La théologie est anthropologie.', 'L\'homme a créé Dieu, pas l\'inverse.']
    },
    {
      title: 'Le Gai Savoir',
      author: 'Friedrich Nietzsche',
      year: 188,
      type: 'BOOK' as const,
      reference: 'Annonce de la mort de Dieu',
      quotes: [
        'Dieu est mort.',
        'Nous l\'avons tué.',
        'Comment nous consolerons, meurtriers de meurtriers ?',
        'Les églises sont les tombeaux de Dieu.'
      ]
    },
    {
      title: 'Contribution à la critique de la philosophie du droit',
      author: 'Karl Marx',
      year: 1844,
      type: 'ESSAY' as const,
      reference: 'La religion comme opium du peuple',
      quotes: [
        'La religion est l\'opium du peuple.',
        'La religion est soupir de la créature opprimée.',
        'La critique de la religion est prémisse de toute critique.',
        'Le bonheur religieux est illusion du vrai bonheur.'
      ]
    },
    {
      title: 'Crains et tremble',
      author: 'Søren Kierkegaard',
      year: 1843,
      type: 'BOOK' as const,
      reference: 'La foi comme saut',
      quotes: [
        'La foi est le contraire de la compréhension.',
        'Le chrétien croit l\'absurde.',
        'La subjectivité est la vérité.',
        'La foi est risque, pas certitude.'
      ]
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que le pari de Pascal ?',
      back: 'Pascal argumente que face à l\'incertitude sur l\'existence de Dieu, il est rationnel de parier que Dieu existe. Si je parie que Dieu existe et qu\'Il existe, je gagne tout (vie éternelle). Si je parie qu\'Il n\'existe pas et qu\'Il existe, je perds tout. Le gain possible (infini) l\'emporte sur la perte possible (finie). C\'est modèle de décision en situation d\'incertitude.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Que signifie "Dieu est mort"?',
      back: 'Nietzsche annonce que "Dieu est mort" : la croyance en Dieu est devenue invraisemblable. Les conséquences sont immenses : plus de fondement transcendant pour la morale, plus de sens donné, plus de valeur absolue. L\'humanité doit créer ses propres valeurs (surhomme). Le nihilisme est danger mais aussi opportunité de créer de nouvelles valeurs.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Quelle critique Marx fait-il de la religion ?',
      back: 'Pour Marx, la religion est "opium du peuple" et "soupir de la créature opprimée". Elle justifie les injustices sociales en promettant bonheur dans l\'au-delà, détournant les opprimés de la lutte pour leur émancipation ici-bas. La religion est aliénation : les humains projettent leurs qualités dans un être imaginaire au lieu de les réaliser eux-mêmes. "La critique de la religion est prémisse de toute critique".',
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Marx résume sa critique de la religion ?',
      back: 'La religion est l\'opium du peuple (Contribution à la critique de la philosophie du droit, 1844)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Pascal, il faut {{parier}} sur Dieu. Pour Marx, la religion est {{opium}}.',
      back: 'parier | opium',
      difficulty: 1
    }
  ],

  tags: ['religion', 'dieu', 'foi', 'athéisme', 'morale', 'révélation', 'transcendance', 'pascal', 'marx', 'nietzsche', 'sécularisation', 'sacrificium']
};
