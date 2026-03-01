/*
  Regard - Concept Data
  Le mode d'apparition d'autrui comme sujet qui me transforme en objet
*/
export const concept = {
  // ===== IDENTITÉ =====
  id: 'regard',
  name: 'Regard',
  slug: 'regard',
  category: 'existentialisme',

  // ===== MÉTADONNÉES =====
  difficulty: 3,
  importance: 4,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: `Le regard est le mode d'apparition d'autrui comme sujet qui me regarde, me juge, me transforme en objet. Chez Sartre, le regard est la manière dont autrui m'apparaît : non pas comme corps, mais comme sujet, comme conscience. Le regard d'autrui me révèle que je suis vu, donc que je deviens objet pour un autre sujet. Je perds ma transcendance, je suis figé, fixé, connu par l'autre. Le regard est aussi ce par quoi je m'apprends à moi-même : je découvre que je suis honteux, coupable, beau, à travers le regard d'autrui. Le regard fonde l'intersubjectivité comme conflit : chaque conscience cherche à s'affirmer comme sujet en transformant l'autre en objet, mais cet autre est aussi sujet qui me regarde. Le regard peut être bienveillant ou hostile, objectivant ou reconnaissant, mais il est toujours relation de pouvoir.`,
  shortDefinition: `Le mode d'apparition d'autrui comme sujet qui me transforme en objet`,

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'regardus',
    french: 'regard',
    root: 'regarder : voir, considérer',
    notes: `Le regard n'est pas seulement vision mais relation intersubjective`
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: `Argument du regard comme transformation en objet`,
        explanation: `Quand je suis regardé par autrui, je deviens objet pour un sujet. Je perds ma transcendance (ma capacité de me projeter) et deviens une chose vue, connue, fixée. Le regard d'autrui m'aliène de moi-même.`,
        premises: [
          `Je suis sujet, transcendance, liberté`,
          `Quand autrui me regarde, je deviens objet pour un sujet`,
          `Comme objet, je suis figé, déterminé, connu`,
          `Cette objectivation est aliénation : je suis dépossédé de moi`
        ],
        conclusion: `Le regard d'autrui est aliénation : il me transforme en chose pour un autre`
      },
      {
        argument: `Argument du regard comme révélation de soi`,
        explanation: `C'est à travers le regard d'autrui que je découvre qui je suis. Je me découvre honteux quand je suis surpris à faire quelque chose de honteux. Je me découvre beau, laid, aimable, à travers le regard qui se pose sur moi.`,
        premises: [
          `Je ne suis pas le mieux placé pour me connaître objectivement`,
          `Le regard d'autrui me renvoie une image de moi`,
          `Cette image me révèle des aspects que j'ignorais`,
          `Je me constitue à travers le regard de l'autre`
        ],
        conclusion: `Le regard est constitution de soi : je deviens qui je suis à travers le regard d'autrui`
      },
      {
        argument: `Argument du regard comme conflit`,
        explanation: `La relation à autrui est fondamentalement conflictuelle car chaque conscience cherche à être sujet (regarder) et à éviter d'être objet (être regardé). Je veux transformer autrui en objet, mais autrui est aussi sujet qui veut me transformer en objet.`,
        premises: [
          `Je suis sujet qui veut rester sujet`,
          `Autrui est sujet qui veut rester sujet`,
          `Le regard transforme en objet`,
          `Donc chaque conscience veut regarder sans être regardé`
        ],
        conclusion: `L'intersubjectivité est conflit : lutte pour être sujet et non objet`
      }
    ],
    objections: [
      {
        objection: `Objection du consentement`,
        content: `Le regard n'est pas toujours aliénant. Le regard aimant, respectueux, reconnaissant peut au contraire me confirmer comme sujet. Le regard peut être relation de reconnaissance, pas seulement d'aliénation.`,
        response: `Sartre admet que le regard peut être bienveillant, mais il reste structurellement asymétrique : celui qui regarde est sujet, celui qui est regardé est objet. M'un regard aimant me fige comme objet aimé, donc comme objet.`
      },
      {
        objection: `Objection de la réciprocité`,
        content: `Le regard peut être réciproque : deux sujets se regardent mutuellement, se reconnaissent comme sujets égaux. Le regard n'est pas nécessairement unilatéral.`,
        response: `La réciprocité du regard reste une alternance de sujets et objets. Je te regarde (tu es objet), tu me regardes (je suis objet). Nous ne sommes jamais simultanément sujets l'un pour l'autre.`
      },
      {
        objection: `Objection éthique (Levinas)`,
        content: `Le regard n'est pas d'abord conflit mais appel éthique. Le visage d'autrui me commande "tu ne tueras pas". Levinas propose une éthique comme première philosophie.`,
        response: `Sartre maintient que l'éthique présuppose l'ontologie. L'analyse du regard comme conflit est descriptive, pas normative. On peut fonder une éthique sur cette description.`
      }
    ],
    distinctions: [
      {
        distinction: `Regard vs Vision`,
        explanation: `La vision est perception d'objets. Le regard est relation intersubjective : je suis vu par un sujet qui me voit comme sujet (ou comme objet).`
      },
      {
        distinction: `Regard objectivant vs Regard reconnaissant`,
        explanation: `Le regard objectivant me fige comme chose. Le regard reconnaissant me confirme comme sujet. Mais même le regard reconnaissant me pose comme objet (objet de reconnaissance).`
      },
      {
        distinction: `Voir vs Être vu`,
        explanation: `Voir est être sujet. Être vu est être objet. Le regard est cette transformation : je suis sujet qui devient objet pour un autre sujet.`
      },
      {
        distinction: `Regard sartrien vs Visage lévinasien`,
        explanation: `Pour Sartre, le regard est conflit, transformation en objet. Pour Levinas, le visage est appel éthique, commandement "tu ne tueras pas".`
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      concept: 'autrui',
      relationship: `Le regard est le mode d'apparition d'autrui comme sujet.`,
      bidirectional: true
    },
    {
      concept: 'pour-soi',
      relationship: `Le regard transforme le pour-soi en objet.`,
      bidirectional: true
    },
    {
      concept: 'honte',
      relationship: `La honte est la conscience d'être regardé de manière jugementale.`,
      bidirectional: true
    },
    {
      concept: 'objet',
      relationship: `Le regard transforme en objet.`,
      bidirectional: true
    },
    {
      concept: 'sujet',
      relationship: `Le regard est exercé par un sujet.`,
      bidirectional: true
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    { name: 'Existentialisme sartrien', description: `Le regard comme mode d'apparition d'autrui.`, role: 'CONCEPT_CENTRAL', keyFigures: ['Sartre'] },
    { name: 'Phénoménologie', description: `L'intersubjectivité comme relation de regards.`, role: 'EXPRESSES', keyFigures: ['Sartre', 'Merleau-Ponty'] }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `Sartre analyse le regard dans L'Être et le Néant (1943). L'exemple du keyhole montre comment autrui m'apparaît comme regard : quand j'épie par un keyhole et qu'on me surprend, je découvre que je suis vu.

Le regard d'autrui me transforme en objet : je deviens ce que l'autre voit de moi. Je perds ma transcendance, ma liberté, je suis figé comme "homme qui épie". Cette objectivation est aliénation.

Le regard est aussi ce par quoi je m'apprends : je me découvre honteux à travers le regard qui me surprend. La honte est conscience d'être vu, donc conscience d'être objet pour un sujet.

La relation à autrui est conflit : chaque conscience veut être sujet (regarder) et éviter d'être objet (être regardé). L'amour est masochisme (je veux être absorbé par la liberté de l'autre) et sadisme (je veux transformer l'autre en objet).`
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: `Regard objectivant (Sartre)`,
      description: `Le regard d'autrui me transforme en objet : je suis figé, connu, déterminé. Je perds ma transcendance, ma liberté.`,
      philosophicalContext: `Cette analyse fonde l'intersubjectivité comme conflit chez Sartre.`
    },
    {
      title: `Visage éthique (Levinas)`,
      description: `Le visage d'autrui n'est pas regard qui objectifie mais appel éthique : "tu ne tueras pas". Le visage me commande, me respon-sabilise.`,
      philosophicalContext: `Levinas propose une éthique comme première philosophie, alternative à l'ontologie sartrienne.`
    },
    {
      title: `Regard réciproque (Merleau-Ponty)`,
      description: `Le regard peut être réciprocité : deux sujets se reconnaissent mutuellement sans s'objectiver totalement.`,
      philosophicalContext: `Merleau-Ponty tente de dépasser le conflit sartrien vers une intersubjectivité plus positive.`
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: `Analyse du regard dans L'Être et le Néant` },
    { name: 'Emmanuel Levinas', period: '1906-1995', contribution: `Le visage comme appel éthique` },
    { name: 'Maurice Merleau-Ponty', period: '1908-1961', contribution: `Le regard comme réciprocité` }
  ],

  // ===== EXEMPLES =====
  examples: [
    `L'homme au keyhole (Sartre) : j'épie par un keyhole, absorbé par ce que je vois. Soudain, un bruit de pas : je suis surpris, je deviens "homme qui épie", objet pour un sujet qui me voit. Je découvre autrui comme regard.`,
    `La honte : j'ai un geste obscène, quelqu'un entre. Je rougis, j'ai honte. Pourquoi ? Parce que je suis vu, jugé. La honte est conscience d'être objet pour un sujet.`,
    `Le regard amoureux : je veux être regardé par l'autre, être pour l'autre. Mais ce désir est paradoxal : je veux être objet (pour être aimé) mais en même temps je reste sujet (qui veut être aimé). L'amour est oscillation entre masochisme et sadisme.`
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: `L'Être et le Néant`,
      author: `Jean-Paul Sartre`,
      year: 1943,
      type: 'BOOK' as const,
      reference: `Analyse du regard et de l'être-pour-autrui`,
      quotes: [
        `Je suis vu, donc je suis.`,
        `Le regard me transforme en objet.`,
        `La honte est conscience d'être vu.`,
        `Autrui est le regard qui me fige.`,
        `Je suis sujet qui devient objet pour un sujet.`,
        `Le regard est ma mort en tant que sujet.`
      ]
    },
    {
      title: `Totalité et Infini`,
      author: `Emmanuel Levinas`,
      year: 1961,
      type: 'BOOK' as const,
      reference: `Le visage comme appel éthique`,
      quotes: [
        `Le visage est présence d'autrui.`,
        `Le visage me commande "tu ne tueras point".`,
        `Le visage est épiphanie de l'infini.`,
        `L'éthique est philosophie première.`,
        `Le visage me respon-sabilise.`
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: `Qu'est-ce que le regard chez Sartre ?`,
      back: `Pour Sartre, le regard est le mode d'apparition d'autrui comme sujet qui me regarde et me transforme en objet. Quand je suis regardé, je deviens objet pour un sujet : je suis figé, connu, déterminé. Le regard est aliénation car je suis dépossédé de ma transcendance, de ma liberté. C'est par le regard que je découvre autrui comme sujet, pas comme chose.`,
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: `Comment le regard est-il lié à la honte ?`,
      back: `Pour Sartre, la honte est conscience d'être vu, jugé. Quand je suis surpris en train de faire quelque chose de honteux, je rougis, j'ai honte. Cette honte n'est pas seulement conscience d'avoir mal fait, mais conscience d'être vu : je deviens objet honteux pour un sujet qui me regarde. La honte révèle autrui comme regard qui m'apprend à moi-même.`,
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: `Quelle différence entre Sartre et Levinas sur le regard/visage ?`,
      back: `Pour Sartre, le regard est conflit : il me transforme en objet, m'aliène. Pour Levinas, le visage est appel éthique : il me commande "tu ne tueras pas", me respon-sabilise. Sartre analyse ontologiquement (le regard comme structure), Levinas propose éthiquement (le visage comme commandement). Sartre part du sujet pour aller à autrui (conflit), Levinas part d'autrui comme appel (éthique).`,
      difficulty: 4
    },
    {
      type: 'QUOTE' as const,
      front: `Quelle citation de Sartre résume le regard ?`,
      back: `"Je suis vu, donc je suis" (L'Être et le Néant, 1943)`,
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: `Pour Sartre, le regard me transforme en {{objet}} pour un {{sujet}}.`,
      back: `objet | sujet`,
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: `Le regard est-il nécessairement aliénant ?`,
      back: `Sartre : oui, le regard transforme en objet, m'aliène. Levinas : non, le visage est appel éthique, pas objectivation. Merleau-Ponty : le regard peut être réciprocité, reconnaissance. La question est cruciale pour l'intersubjectivité. Si le regard est seulement aliénant, la relation à autrui est conflit, lutte pour être sujet. Si le regard peut être reconnaissance, la relation peut être harmonieuse, dialogue. L'expérience commune montre les deux : le regard peut juger, condamner, objectiver, mais aussi aimer, reconnaître, respecter. Peut-être que Sartre décrit une structure (le regard comme transformation possible en objet) sans dire que toute relation est nécessairement conflictuelle. Ou peut-être que Levinas propose une alternative éthique à l'analyse ontologique de Sartre.`,
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['regard', 'autrui', 'sartre', 'levinas', 'intersubjectivité', 'honte', 'objet', 'sujet', 'conflit', 'éthique']
};
