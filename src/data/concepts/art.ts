/**
 * Art - Concept Data
 * Production d\'oeuvres belles, expression créatrice, expérience esthétique
 */

export const concept = {
  id: 'art',
  name: 'Art',
  slug: 'art',
  category: 'esthetique',
  difficulty: 3,
  importance: 4,
  status: 'COMPLETE' as const,

  definition: 'L\'art est la production d\'oeuvres belles ou expressives, activité créatrice utilisant divers moyens (peinture, sculpture, musique, littérature, etc.). La philosophie distingue plusieurs approches : l\'art comme mimèsis (imitation de la réalité) chez Platon et Aristote ; l\'art comme expression des émotions ; l\'art comme forme significative ; l\'art comme jeu (Kant, Schiller) ; l\'art comme vérité qui se met en oeuvre (Heidegger). Pour Kant, le beau est jugement de goût désintéressé. Pour Hegel, l\'art est manifestation sensible de l\'Idée. Pour Nietzsche, l\'art est justification de l\'existence. La question centrale : qu\'est-ce que l\'art ? À quoi sert-il ?',
  shortDefinition: 'Production d\'oeuvres belles ou expressives, expérience esthétique',

  etymology: {
    latin: 'ars : technique, savoir-faire',
    greek: 'techne (τέχνη) : art, craft, technique',
    root: 'ar- (ajuster, assembler) : habileté manuelle',
    notes: 'Ars désigne d\'abord technique, puis beaux-arts. Techne grec = production poïétique'
  },

  reasoning: {
    // Perspectives par école philosophique
    perspectives: [
      {
        school: 'Mimésis',
        philosopher: 'Platon',
        thesis: 'L\'art est imitation (mimèsis) de la réalité',
        argument: 'L\'art représente, imite la nature. Mais cette imitation est copie de copie : les choses sensibles sont imitation des Idées, l\'art est imitation des choses sensibles. Donc l\'art est "à trois degrés de la vérité". L\'art est dangereux car il trompe, flatte les passions. Aristote répondra que la mimèsis est créative, pas copie servile, et a fonction cathartique.',
        conclusion: 'L\'art comme imitation, représentation de la réalité'
      },
      {
        school: 'Expression',
        philosopher: 'Benedetto Croce',
        thesis: 'L\'art est expression des émotions et de la subjectivité',
        argument: 'L\'art n\'est pas représentation mais expression. L\'artiste exprime ses émotions, sa vision du monde dans l\'œuvre. L\'œuvre d\'art n\'est pas copie de la réalité mais manifestation de l\'intériorité de l\'artiste. L\'intuition lyrique est à la source de toute création artistique. Le beau est forme réussie de l\'expression.',
        conclusion: 'L\'art comme expression créatrice de l\'intériorité subjective'
      },
      {
        school: 'Formalisme',
        philosopher: 'Clive Bell',
        thesis: 'L\'art est forme significative, relations formelles',
        argument: 'Ce qui définit l\'art n\'est pas la représentation ni l\'expression mais les relations formelles, lignes, couleurs, formes. La "forme significative" est ce qui éveille l\'émotion esthétique. Le contenu, la représentation sont accessoires. L\'art est organisation de formes qui suscite une expérience esthétique spécifique.',
        conclusion: 'L\'art comme organisation formelle autonome'
      }
    ],
    principalArguments: [
      {
        argument: 'Argument de la mimèsis (Aristote)',
        explanation: 'L\'art est imitation de la nature (mimèsis). Mais cette imitation est créative : elle représente non ce qui est mais ce qui pourrait être. La tragédie par les émotions (catharsis).',
        premises: ['L\'art représente la réalité', 'Cette représentation est sélective, créative', 'L\'artiste choisit ce qu\'il représente et comment'],
        conclusion: 'Donc l\'art est imitation créative qui révèle des vérités sur la réalité'
      },
      {
        argument: 'Argument du désintéressement (Kant)',
        explanation: 'Le beau est ce qui plaît universellement sans concept. Le jugement de goût est désintéressé : je ne juge pas l\'utile ou le moral, seulement le plaisir esthétique. L\'art est finalité sans fin.',
        premises: ['Le beau plaît sans intérêt', 'Ce plaisir est universel (chacun devrait être d\'accord)', 'L\'art n\'a pas but utilitaire'],
        conclusion: 'Donc l\'art est expérience de gratuité, jeu libre de l\'imagination'
      },
      {
        argument: 'Argument de l\'expression (Tolstoï)',
        explanation: 'L\'art est communication d\'émotions. L\'artiste a vécu une émotion, il l\'exprime dans l\'oeuvre, le spectateur la ressent. L\'art est langage des émotions.',
        premises: ['L\'art exprime des émotions', 'Ces émotions sont communiquées au spectateur', 'La valeur de l\'art est dans cette communication'],
        conclusion: 'Donc l\'art est véhicule de communication émotionnelle'
      }
    ],
    counterArguments: [
      {
        objection: 'Critique platonicienne',
        content: 'L\'art est copie de copie, illusion dangereuse. Les artistes mentent sur la réalité. Il faut bannir les poètes de la cité idéale.',
        response: 'Aristote répond que l\'art est imitation créative, pas copie servile. La tragédie a fonction pédagogique (catharsis).'
      },
      {
        objection: 'Critique contemporaine',
        content: 'L\'art est mort, remplacé par la culture de masse. Andy Warhol : tout est art, rien n\'est art. La frontière art/non-art s\'efface.',
        response: 'L\'art se transforme, pas meurt. L\'art contemporain questionne : qu\'est-ce que l\'art ?'
      }
    ],
    distinctions: [
      {
        distinction: 'Beau vs Artistique',
        explanation: 'Le beau est propriété esthétique (plaisant). L\'artistique est création intentionnelle. Une chose peut être belle sans être art (un coucher de soleil), et de l\'art sans être beau (l\'art contemporain).'
      },
      {
        distinction: 'Art vs Craft',
        explanation: 'L\'art est création originale, expressive. Le craft est savoir-faire technique, reproduction de modèles. La frontière est floue (arts décoratifs).'
      },
      {
        distinction: 'Beau vs Sublime',
        explanation: 'Le beau est forme harmonieuse, plaisante. Le sublime est ce qui dépasse, écrase, transporte (l\'océan, la montagne). Le sublime est mélange de plaisir et douleur.'
      }
    ]
  },

  relatedConcepts: [
    { conceptId: 'beaute', relation: 'BUILDS_ON', explanation: 'La beauté est valeur centrale en art, mais pas la seule' },
    { conceptId: 'verite', relation: 'RELATED', explanation: 'L\'art comme révélation de vérité (mimèsis)' },
    { conceptId: 'technique', relation: 'ENABLES', explanation: 'La technique est moyen de l\'art (techne)' },
    { conceptId: 'etre',
      relation: 'REVEALS',
      explanation: 'Pour Heidegger, l\'œuvre d\'art est "vérité qui se met en œuvre". L\'art dévoile l\'être d\'un peuple, instaure un monde.',
      bidirectional: true,
      category: 'metaphysique' },
    { conceptId: 'connaissance',
      relation: 'ALTERNATIVE',
      explanation: 'L\'art est mode de connaissance non conceptuel. L\'expérience esthétique révèle des vérités inaccessibles à la raison discursive.',
      bidirectional: true,
      category: 'epistemologie' },
    { conceptId: 'expression',
      relation: 'EXPRESSES',
      explanation: 'Pour l\'expressionnisme, l\'art est expression des émotions et de la subjectivité. L\'œuvre manifeste l\'intériorité de l\'artiste.',
      bidirectional: true,
      category: 'psychologie' },
    { conceptId: 'sublime',
      relation: 'TRANSCENDS',
      explanation: 'L\'art peut atteindre le sublime : ce qui dépasse, écrase, transporte. Le sublime dépasse la beauté formelle.',
      bidirectional: true,
      category: 'esthetique' },
    { conceptId: 'authenticite',
      relation: 'REQUIRES',
      explanation: 'L\'art authentique exprime la vérité de l\'artiste, pas seulement des conventions. L\'authenticité créatrice vs le conformisme.',
      bidirectional: true,
      category: 'existentialisme' }
  ],

  relatedMovements: [
    { movement: 'Mimétisme', description: 'L\'art comme imitation', keyFigures: ['Platon', 'Aristote'] },
    { movement: 'Expressionnisme', description: 'L\'art comme expression', keyFigures: ['Tolstoï', 'Collingwood'] },
    { movement: 'Formalisme', description: 'L\'art comme forme significative', keyFigures: ['Bell', 'Clive Bell'] },
    { movement: 'Institutionnalisme', description: 'L\'art défini par le monde de l\'art', keyFigures: ['Danto', 'Dickie'] }
  ],

  philosophicalAnalysis: {
    history: `Antiquité grecque : l\'art comme techne (savoir-faire) et mimèsis (imitation). Platon méfiant : l\'art est illusion. Aristote défend la catharsis.

Renaissance : l\'art comme libéralisation, créativité de l\'artiste-génie (Léonard de Vinci, Michel-Ange).

XVIIIe siècle : naissance de l\'esthétique comme discipline (Baumgarten). Kant : le beau comme jugement désintéressé.

XIXe siècle : Hegel : l\'art comme manifestation sensible de l\'Idée, forme suprême de l\'esprit. Nietzsche : l\'art comme justification de l\'existence, Apollon vs Dionysos.

XXe siècle : Heidegger : l\'art comme " vérité qui se met en oeuvre " (le temple grec). Adorno : l\'art comme critique de la société.

Art contemporain : remise en question des frontières de l\'art (Warhol, Duchamp).`,

    problems: [
      { problem: 'Problème de la définition de l\'art', description: 'Qu\'est-ce qui distingue l\'art du non-art ? Est-ce une question de définition ou de contexte ?' },
      { problem: 'Problème de la valeur de l\'art', description: 'À quoi sert l\'art ? Est-il seulement beau ou a-t-il fonction cognitive, morale, politique ?' }
    ],

    debates: [
      {
        issue: 'Qu\'est-ce que l\'art ?',
        positions: [
          { philosopher: 'Platon', position: 'L\'art est imitation (mimèsis), copie de la nature' },
          { philosopher: 'Kant', position: 'L\'art est production de beau, jeu de l\'imagination' },
          { philosopher: 'Tolstoï', position: 'L\'art est communication d\'émotions' },
          { philosopher: 'Dickie', position: 'L\'art est ce que le monde de l\'art accepte comme art (théorie institutionnelle)' }
        ]
      }
    ]
  },

  variations: [
    {
      title: 'Art comme mimèsis (Aristote)',
      description: 'Pour Aristote, l\'art est imitation (mimèsis) de la nature. Mais cette imitation est créative : elle représente non ce qui est mais ce qui pourrait être. La tragédie imite des actions humaines pour susciter terreur et pitié, purifiant ces émotions (catharsis).'
    },
    {
      title: 'Art comme jeu (Kant, Schiller)',
      description: 'Pour Kant, l\'art est " finalité sans fin " : il semble avoir une fin (structure, intention) mais n\'a pas but extérieur. L\'art est jeu libre de l\'imagination et de l\'entendement. Pour Schiller, l\'art est jeu qui libère l\'homme : par l\'art, nous concilions nécessité et liberté.'
    },
    {
      title: 'Art comme vérité qui se met en oeuvre (Heidegger)',
      description: 'Pour Heidegger, l\'art n\'est pas représentation mais événement où la vérité se manifeste. Le temple grec n\'est pas copie de la réalité : en l\'érigeant, un peuple se comprend, son monde se dévoile. L\'art est " vérité qui se met en oeuvre " (aletheia).'
    },
    {
      title: 'Art comme justification de l\'existence (Nietzsche)',
      description: 'Pour Nietzsche, l\'art est la seule justification de l\'existence. La vie est souffrance, mais l\'art transfigure cette souffrance en beauté. Apollon (ordre, forme) et Dionysos (désordre, extase) sont deux forces artistiques qui permettent de dire oui à la vie malgré sa tragédie.'
    },
    {
      title: 'Art contemporain et ready-made',
      description: 'Duchamp expose un urinoir comme sculpture (Fontaine, 1917). Question : qu\'est-ce que l\'art ? N\'importe quoi peut être art si l\'artiste le décide et le monde de l\'art l\'accepte. Warhol : les boîtes de soupe Campbell sont art. Frontière art/non-art s\'efface.'
    }
  ],

  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: 'Critique de l\'art comme illusion, mimèsis' },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: 'Défense de la mimèsis et catharsis tragique' },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: 'Analyse du beau et du sublime' },
    { name: 'Georg Wilhelm Friedrich Hegel', period: '1770-1831', contribution: 'L\'art comme manifestation sensible de l\'Idée' },
    { name: 'Friedrich Nietzsche', period: '1844-1900', contribution: 'L\'art comme justification de l\'existence' },
    { name: 'Martin Heidegger', period: '1889-1976', contribution: 'L\'art comme vérité qui se met en oeuvre' },
    { name: 'Arthur Danto', period: '1925-2013', contribution: 'Théorie institutionnelle de l\'art' }
  ],

  examples: [
    'La cathédrale gothique : Oeuvre collective anonyme. Pour Hegel, art médiéval : expression de l\'esprit religieux. Pour Heidegger, oeuvre d\'art qui dévoile un monde.',
    'Guernica (Picasso, 1937) : Peinture de la guerre civile espagnole. Art comme engagement politique, témoignage historique.',
    'Les ready-mades de Duchamp : Urinoir, porte-bouteille exposés comme art. Question : qu\'est-ce qui fait de ceci de l\'art ? L\'intention ? Le contexte ? Le monde de l\'art ?',
    'La musique de Beethoven : Pour Nietzsche, elle manifeste la volonté de puissance. Pour Adorno, elle critique la société. L\'art abstrait (musique) serait le plus pur.'
  ],

  sources: [
    {
      title: 'La République',
      author: 'Platon',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Critique de l\'art comme illusion',
      quotes: ['L\'art est copie de copie.', 'Les poètes mentent.', 'Il faut bannir les poètes.']
    },
    {
      title: 'Poétique',
      author: 'Aristote',
      year: 'IVe siècle av. J.-C.',
      type: 'BOOK' as const,
      reference: 'Défense de la mimèsis et catharsis',
      quotes: ['L\'art est imitation.', 'La tragédie purifie les émotions.', 'L\'art est plaisir nécessaire.']
    },
    {
      title: 'Critique de la faculté de juger',
      author: 'Immanuel Kant',
      year: 1790,
      type: 'BOOK' as const,
      reference: 'Analyse du beau',
      quotes: ['Le beau plaît universellement sans concept.', 'Le beau est finalité sans fin.', 'L\'art est jeu de l\'imagination.']
    },
    {
      title: 'L\'origine de l\'oeuvre d\'art',
      author: 'Martin Heidegger',
      year: 1935,
      type: 'ESSAY' as const,
      reference: 'L\'art comme vérité',
      quotes: ['L\'art est vérité qui se met en oeuvre.', 'L\'oeuvre édifie un monde.', 'L\'art est événement de vérité.']
    }
  ],

  flashcards: [
    {
      type: 'BASIC' as const,
      front: 'Qu\'est-ce que la mimèsis chez Aristote ?',
      back: 'Pour Aristote, l\'art est mimèsis, imitation de la nature. Mais cette imitation est créative : elle représente non ce qui est mais ce qui pourrait être. La tragédie, par exemple, imite des actions humaines pour susciter terreur et pitié, purifiant ces émotions (catharsis). L\'art n\'est pas copie servile mais interprétation créative qui révèle des vérités sur la réalité humaine.',
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: 'Comment Kant définit-il le beau ?',
      back: 'Pour Kant, le beau est ce qui plaît universellement sans concept. Le jugement de goût est désintéressé : je ne juge pas l\'utile ou le moral, seulement le plaisir esthétique. Ce plaisir est subjectif mais prétend à l\'universalité (chacun devrait être d\'accord). L\'art est "finalité sans fin" : il semble avoir une fin mais n\'a pas but extérieur.',
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: 'Qu\'est-ce que le "ready-made" ?',
      back: 'Le ready-made est objet manufacturé exposé comme oeuvre d\'art. Duchamp expose un urinoir (Fontaine, 1917) qu\'il signe. Question posée : qu\'est-ce qui fait de ceci de l\'art ? Ce n\'est pas la beauté ou le talent artisanal, mais le choix de l\'artiste, le contexte (galerie, monde de l\'art). Cette stratégie remet en question la définition traditionnelle de l\'art comme création manuelle, beauté, expression.',
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: 'Quelle citation de Kant résume le beau ?',
      back: 'Le beau plaît universellement sans concept (Critique de la faculté de juger, 1790)',
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: 'Pour Platon, l\'art est {{imitation}}. Pour Nietzsche, l\'art est {{justification de l\'existence}}.',
      back: 'imitation | justification de l\'existence',
      difficulty: 1
    }
  ],

  tags: ['art', 'beauté', 'esthétique', 'mimèsis', 'création', 'expression', 'sublime', 'kant', 'hegel', 'nietzsche', 'heidegger', 'ready-made']
};
