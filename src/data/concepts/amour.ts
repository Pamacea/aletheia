/*
  Amour - Concept Data
  Éros, philia, agapè : amour désir, amitié, amour universel
*/
export const concept = {
  // ===== IDENTITÉ =====
  id: 'amour',
  name: 'Amour',
  slug: 'amour',
  category: 'ethique',

  // ===== MÉTADONNÉES =====
  difficulty: 3,
  importance: 5,
  status: 'COMPLETE' as const,

  // ===== DÉFINITIONS =====
  definition: `L'amour est un sentiment intense d'affection, de dévouement et d'attachement envers quelqu'un ou quelque chose. La philosophie distingue plusieurs formes : l'éros (amour désir, attirance, manque) ; la philia (amitié, affection réciproque) ; l'agapè (amour universel, désintéressé, charité) ; l'amour-propre (estime de soi) ; l'amour de soi (narcissisme). Pour Platon, l'éros est aspiration vers le beau, le bien, le vrai. Pour Aristote, la philia est l'amitié vertueuse, base de la cité. Pour Christianisme, l'agapè est amour du prochain, imitation de l'amour divin. Pour Rousseau, l'amour-propre est comparaison aux autres (source de l'inégalité) vs l'amour de soi (conservation naturelle). Pour Sartre, l'amour est volonté de possession de la liberté d'autrui, projet impossible.`,
  shortDefinition: `Sentiment d'affection et d'attachement, prenant des formes multiples (éros, philia, agapè)`,

  // ===== ÉTYMOLOGIE =====
  etymology: {
    latin: 'amor, amare',
    greek: 'éros (ἔρως), philia (φιλία), agapè (ἀγάπη)',
    sanskrit: 'kama',
    root: 'am- (aimer, aimer) : racine indo-européenne',
    notes: `Éros désigne l'amour désir, philia l'amitié, agapè l'amour universel. Le latin amour vient de la même racine que amitié.`
  },

  // ===== RAISONNEMENT PHILOSOPHIQUE =====
  reasoning: {
    principalArguments: [
      {
        argument: `Argument de l'amour comme chemin vers le Bien (Platon, Le Banquet)`,
        explanation: `L'amour naît du manque : on aime ce qu'on n'a pas. L'éros est désir de posséder le beau éternellement. Ce désir nous élève progressivement des beaux corps vers les belles âmes, puis les belles sciences, enfin le Beau en soi. L'amour est initiation philosophique.`,
        premises: [
          `L'amour est désir de ce qu'on n'a pas`,
          `Ce qu'on n'a pas, on le désire le posséder éternellement`,
          `Le beau est ce que nous désirons posséder éternellement`,
          `L'amour nous fait progresser vers le Beau en soi`
        ],
        conclusion: `L'amour (éros) est voie d'accès au Bien et au Vrai`
      },
      {
        argument: `Argument de l'amitié comme base de la cité (Aristote)`,
        explanation: `L'homme est animal politique. La philia (amitié) est le lien social fondamental. Sans amitié, la cité ne peut exister. L'amitié vertueuse (aimer l'autre pour lui-même) est la plus haute forme d'amour, supérieure à l'utilité ou au plaisir.`,
        premises: [
          `L'homme vit naturellement en société`,
          `La société repose sur des liens d'amour`,
          `L'amitié est le lien le plus fort`,
          `Sans amitié, pas de communauté possible`
        ],
        conclusion: `L'amour (philia) est fondement de la vie sociale et politique`
      },
      {
        argument: `Argument de l'amour comme devoir moral (Kant)`,
        explanation: `L'amour du prochain n'est pas sentiment mais devoir moral. "Aime ton prochain comme toi-même" est commandement pratique, pas invitation émotionnelle. Aimer, c'est traiter l'humanité en autrui comme fin, jamais comme moyen seulement.`,
        premises: [
          `La loi morale commande d'aimer son prochain`,
          `Ce commandement ne peut dépendre des sentiments variables`,
          `Aimer est traiter l'autre comme fin en soi`,
          `Ce devoir est universel, inconditionné`
        ],
        conclusion: `L'amour est obligation morale, pas sentiment`
      },
      {
        argument: `Argument de l'amour comme projection impossible (Sartre)`,
        explanation: `Dans l'amour, je veux être le tout pour l'autre, posséder sa liberté. Mais la liberté de l'autre ne peut être possédée. L'amour est échec : je veux être aimé librement (contradiction). L'amour est jeu de masques, tentative vaine de fusion.`,
        premises: [
          `Dans l'amour, je veux être tout pour l'autre`,
          `Je veux posséder la liberté de l'autre`,
          `Mais la liberté ne peut être possédée`,
          `L'amour est projet impossible de fusion`
        ],
        conclusion: `L'amour est échec constitutif, recherche contradictoire`
      }
    ],
    objections: [
      {
        objection: `Critique cynique`,
        content: `L'amour n'est qu'intérêt déguisé, égoïsme à deux. On aime pour ce que l'autre nous apporte (plaisir, sécurité, statut).`,
        response: `Cela confond amour authentique et amour inauthentique. L'amour vrai cherche le bien de l'autre pour lui-même, pas pour soi.`
      },
      {
        objection: `Critique déterministe (biologie)`,
        content: `L'amour n'est que chimie : hormones, neurotransmetteurs, instincts de reproduction. Pas de mystère, pas de liberté.`,
        response: `La biologie explique le mécanisme de l'amour mais pas son sens ni sa valeur. La conscience de l'amour le transforme en expérience humaine, pas seulement biologique.`
      },
      {
        objection: `Critique individualiste`,
        content: `L'amour est perte de soi, fusion dangereuse. Il faut préserver son autonomie, ne pas s'abîmer dans l'autre.`,
        response: `L'amour authentique n'est pas fusion mais reconnaissance de l'altérité. On aime l'autre comme autre, pas comme extension de soi.`
      }
    ],
    distinctions: [
      {
        distinction: `Éros vs Philia vs Agapè`,
        explanation: `Éros est amour-désir, manque, aspiration vers le beau/le bien. Philia est amitié, affection réciproque, partage. Agapè est amour universel, désintéressé, gratuit (amour chrétien).`
      },
      {
        distinction: `Amour-propre vs Amour de soi`,
        explanation: `Pour Rousseau, l'amour-propre est sentiment social de comparaison (source de vanité, rivalité). L'amour de soi est instinct naturel de conservation (bénin).`
      },
      {
        distinction: `Aimer vs Être aimé`,
        explanation: `L'amour est actif (aimer) vs passif (être aimé). On peut aimer sans être aimé, être aimé sans aimer. L'amour authentique est dans l'acte d'aimer' pas dans le désir d'être aimé.`
      },
      {
        distinction: `Amour comme sentiment vs Amour comme devoir`,
        explanation: `L'amour peut être ressenti (émotion) ou commandé (devoir moral). Pour Kant, l'amour du prochain est obligation, pas sentiment.`
      }
    ]
  },

  // ===== CONCEPTS RELATIFS =====
  relatedConcepts: [
    {
      concept: 'désir',
      relationship: `L'amour est une forme de désir, orienté vers l'autre. Éros est désir du beau, du bien.`,
      bidirectional: true
    },
    {
      concept: 'amitié',
      relationship: `L'amitié (philia) est une forme d'amour : affection réciproque, partage, vertu.`,
      bidirectional: true
    },
    {
      concept: 'beauté',
      relationship: `L'éros est aspiration vers le beau. L'amour du beau conduit vers le Bien.`,
      bidirectional: true
    },
    {
      concept: 'autre',
      relationship: `L'amour est relation à l'autre comme sujet. Reconnaissance de son altérité.`,
      bidirectional: true
    },
    {
      concept: 'bonheur',
      relationship: `L'amour est source de bonheur mais aussi de souffrance. Le bonheur commun est le but de l'amitié.`,
      bidirectional: true
    },
    {
      concept: 'liberté',
      relationship: `Dans l'amour' tension entre désir de possession de la liberté d'autrui et respect de cette liberté.`,
      bidirectional: true
    },
    {
      concept: 'sexualité',
      relationship: `L'amour sexuel (éros) inclut le désir charnel. L'amour platonique est purement spirituel.`,
      bidirectional: true
    },
    {
      concept: 'charité',
      relationship: `L'agapè est amour universel, charité chrétienne : aimer tous les hommes comme soi-même.`,
      bidirectional: false
    },
    {
      concept: 'devoir',
      relationship: `Kant : l'amour du prochain est devoir moral, pas sentiment. Aimer' c'est traiter l'autre comme fin.`,
      bidirectional: true
    },
    {
      concept: 'passion',
      relationship: `L'amour-passion est enthusiasm, absorption dans l'autre. Risque de perte de soi mais intensité de l'expérience.`,
      bidirectional: true
    }
  ],

  // ===== MOUVEMENTS PHILOSOPHIQUES =====
  relatedMovements: [
    {
      movement: 'Platonisme',
      description: `L'amour comme ascension vers le Beau, le Bien, le Vrai.`,
      keyFigures: ['Platon']
    },
    {
      movement: 'Aristotélisme',
      description: `L'amitié (philia) comme lien social, base de la cité.`,
      keyFigures: ['Aristote']
    },
    {
      movement: 'Christianisme',
      description: `L'agapè comme amour universel, commandement d'amour du prochain.`,
      keyFigures: ['Saint Augustin', 'Saint Thomas d\'Aquin', 'Kierkegaard']
    },
    {
      movement: 'Romantisme',
      description: `L'amour comme fusion, passion, absolu.`,
      keyFigures: ['Rousseau', 'Goethe', 'Schlegel']
    },
    {
      movement: 'Existentialisme',
      description: `L'amour comme projet, engagement, reconnaissance.`,
      keyFigures: ['Sartre', 'Beauvoir', 'Marcel']
    },
    {
      movement: 'Féminisme',
      description: `Critique de l'amour comme aliénation des femmes. Éthique du care.`,
      keyFigures: ['Beauvoir', 'Gilligan', 'Nussbaum']
    }
  ],

  // ===== ANALYSE PHILOSOPHIQUE =====
  philosophicalAnalysis: {
    history: `La question de l'amour apparaît dès l'Antiquité grecque avec Platon (Le Banquet) qui analyse l'éros comme ascension vers le Beau, et Aristote (Éthique à Nicomaque) qui théorise la philia (amitié) comme lien social fondamental.

L'Antiquité romaine (Lucrèce, Ovide) développe une vision plus critique ou pragmatique de l'amour.

Le Moyen Âge chrétien (Saint Augustin) transforme l'amour avec l'agapè : amour universel, désintéressé, commandement d'amour du prochain. L'amour courtois (fin'amor) idéalise l'amour lointain.

À l'époque moderne, Rousseau distingue l'amour de soi (naturel, bon) de l'amour-propre (social, source de vices). Kant fait de l'amour un devoir moral, pas un sentiment.

Le XIXe siècle romantique exalte l'amour comme fusion, passion, absolu. Schopenhauer le critique comme illusion de la volonté de vivre. Kierkegaard y voit un devoir chrétien.

Le XXe siècle existentialiste analyse l'amour comme projet (Sartre) ou reconnaissance mutuelle (Beauvoir). Fromm y voit un art qui s'apprend.

Le XXIe siècle questionne les normes amoureuses avec le féminisme, la théorie queer, le polyamour.`,
    debates: [
      {
        issue: `L'amour est-il sentiment ou devoir ?`,
        positions: [
          `Sentiment : l'amour est émotion ressentie, pas contrôlable. On ne peut pas commander d'aimer.`,
          `Devoir (Kant) : l'amour du prochain est obligation morale. Traiter l'humanité en autrui comme fin.`,
          `Les deux : l'amour authentique est à la fois sentiment (affection) et choix (engagement).`
        ]
      },
      {
        issue: `L'amour est-il fusion ou reconnaissance ?`,
        positions: [
          `Fusion (romantisme) : l'amour est unité, disparition de la distance entre deux êtres.`,
          `Reconnaissance (Hegel, Sartre) : l'amour est reconnaissance de l'autre comme sujet libre, pas absorption.`,
          `Tension : l'amour oscille entre désir de fusion et respect de l'altérité.`
        ]
      },
      {
        issue: `L'amour-propre est-il bon ou mauvais ?`,
        positions: [
          `Mauvais (Rousseau) : l'amour-propre est comparaison, vanité, source de l'inégalité.`,
          `Bon (Spinoza) : l'amour-propre est connaissance de soi, utilité.`,
          `Nuancé : l'amour de soi (estime) est sain, l'amour-propre (vanité) est malsain.`
        ]
      }
    ],
    contemporaryIssues: [
      {
        issue: `Amour et numérique`,
        description: `Applications de rencontre, amour virtuel, relations en ligne. Comment l'amour change-t-il avec le digital ?`
      },
      {
        issue: `Polyamour et monogamie`,
        description: `Critique de la monogamie comme norme sociale. Polyamour comme alternative éthique. Consentement, jalousie, temps.`
      },
      {
        issue: `Amour et genre`,
        description: `Déconstruction des rôles de genre dans l'amour hétérosexuel. Féminisme critique du "mythe de l'amour romantique".`
      }
    ]
  },

  // ===== VARIATIONS =====
  variations: [
    {
      title: `Éros - Amour désir (Platon)`,
      description: `Dans Le Banquet, Platon analyse l'éros comme amour-désir. L'amour naît du manque : on aime ce qu'on n'a pas. L'éros est désir de posséder le beau éternellement. Ce désir nous élève progressivement : des beaux corps vers les belles âmes, puis les belles sciences, enfin le Beau en soi. L'amour est initiation philosophique, échelle qui mène du sensible à l'intelligible. Le véritable amour est amour des Idées, en particulier du Beau et du Bien.`,
      philosophicalContext: `Cette conception spiritualise l'amour : le désir charnel n'est que première marche vers l'amour spirituel du Vrai.`
    },
    {
      title: `Philia - Amitié (Aristote)`,
      description: `Aristote analyse la philia (amitié) dans l'Éthique à Nicomaque. Il distingue trois types : amitié d'utilité (aimer pour ce qu'on apporte), amitié de plaisir (aimer pour le plaisir qu'on donne), amitié vertueuse (aimer l'autre pour lui-même). La troisième est la plus haute, la plus stable. L'amitié vertueuse est entre gens vertueux, semblables en vertu, qui s'aiment pour eux-mêmes. L'amitié est le lien social fondamental : sans amis, personne ne choisirait de vivre.`,
      philosophicalContext: `Cette conception fait de l'amitié la base de la cité et la plus haute forme d'amour humain.`
    },
    {
      title: `Agapè - Amour universel (Christianisme)`,
      description: `L'agapè est l'amour chrétien : amour universel, désintéressé, gratuit. "Aime ton prochain comme toi-même", "Aimez vos ennemis". Cet amour ne dépend pas de la valeur de l'aimé' ni de ce qu'il nous apporte. Il est imitation de l'amour divin qui aime gratuitement. Pour Saint Augustin, l'ordre de l'amour est : aimer Dieu, puis aimer le prochain en Dieu, puis s'aimer soi-même en Dieu. L'agapè se distingue de l'éros (désir) et de la philia (réciprocité).`,
      philosophicalContext: `Cette conception transforme l'amour en commandement moral et don de soi, pas seulement sentiment.`
    },
    {
      title: `Amour-propre vs Amour de soi (Rousseau)`,
      description: `Rousseau distingue deux principes : l'amour de soi (instinct naturel de conservation, bon) et l'amour-propre (sentiment social de comparaison, source de tous les vices). L'amour de soi est bénin : il nous fait chercher notre bien. L'amour-propre est malsain : il nous fait chercher à être supérieur aux autres, créant vanité, rivalité, domination. L'amour-propre est social : il n'existe que dans la relation aux autres. C'est lui qui corrompt l'homme naturel.`,
      philosophicalContext: `Cette distinction permet de critiquer la société sans condamner la nature humaine.`
    },
    {
      title: `L'amour comme échec (Sartre)`,
      description: `Dans L'Être et le Néant, Sartre analyse l'amour comme projet impossible. Dans l'amour' je veux être le tout pour l'autre' posséder sa liberté, être sa raison de vivre. Mais la liberté de l'autre ne peut être possédée : si elle m'aime librement, elle peut cesser de m'aimer. Si elle est contrainte de m'aimer' elle ne m'aime plus librement. L'amour est échec constitutif : on cherche à posséder l'impossibilité. Pourtant, on continue car l'amour est structure fondamentale du pour-soi.`,
      philosophicalContext: `Cette analyse existentialiste révèle la tension irréductible entre désir de fusion et liberté de l'autre.`
    },
    {
      title: `L'amour comme reconnaissance (Hegel, Beauvoir)`,
      description: `Pour Hegel, la conscience cherche la reconnaissance d'une autre conscience. L'amour est reconnaissance mutuelle : deux sujets se reconnaissent comme libres et égaux. Pour Beauvoir, l'amour authentique est reconnaissance réciproque de deux libertés, sans domination. L'amour inauthentique est quand l'un devient sujet, l'autre objet (chosification). L'amour éthique est deux libertés qui s'affirment ensemble.`,
      philosophicalContext: `Cette conception valorise l'amour comme relation de sujets libres, pas comme fusion.`
    },
    {
      title: `L'amour art d'aimer (Fromm)`,
      description: `Erich Fromm, dans L'Art d'aimer' soutient que l'amour n'est pas sentiment mais compétence, art qui s'apprend. Il distingue quatre éléments : soin (être activement préoccupé par la croissance de l'autre), responsabilité (répondre aux besoins de l'autre), respect (voir l'autre comme il est, pas comme on veut qu'il soit), connaissance (comprendre l'autre). L'amour n'est pas seulement donné mais construit. Il exige discipline, concentration, patience.`,
      philosophicalContext: `Cette approche pragmatique replace l'amour dans le domaine de la volonté et de l'apprentissage.`
    }
  ],

  // ===== FIGURES CLÉS =====
  keyFigures: [
    { name: 'Platon', period: '428-348 av. J.-C.', contribution: `Analyse de l'éros comme ascension vers le Beau dans Le Banquet` },
    { name: 'Aristote', period: '384-322 av. J.-C.', contribution: `Théorie de la philia (amitié) comme lien social dans l'Éthique à Nicomaque` },
    { name: 'Jean-Jacques Rousseau', period: '1712-1778', contribution: `Distinction amour de soi vs amour-propre` },
    { name: 'Immanuel Kant', period: '1724-1804', contribution: `L'amour comme devoir moral, commandement pratique` },
    { name: 'Søren Kierkegaard', period: '1813-1855', contribution: `L'amour comme devoir chrétien, œuvres de l'amour` },
    { name: 'Arthur Schopenhauer', period: '1788-1860', contribution: `Critique de l'amour comme illusion de la volonté de vivre` },
    { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: `Analyse de l'amour comme projet impossible de posséder la liberté` },
    { name: 'Simone de Beauvoir', period: '1908-1986', contribution: `L'amour comme reconnaissance mutuelle de deux libertés` },
    { name: 'Erich Fromm', period: '1900-1980', contribution: `L'amour comme art qui s'apprend` },
    { name: 'Saint Augustin', period: '354-430', contribution: `L'agapè chrétien comme amour universel et ordre de l'amour` }
  ],

  // ===== EXEMPLES =====
  examples: [
    `L'échelle de l'amour (Platon, Le Banquet) : Diotime initie Socrate aux mystères de l'amour. On commence par aimer un beau corps, puis tous les beaux corps, puis les belles âmes, puis les belles lois et sciences, enfin le Beau en soi. L'éros est échelle qui mène du sensible à l'intelligible' du charnel au spirituel. Aimer un beau corps n'est que première marche vers l'amour de la vérité.`,
    `L'amitié vertueuse (Aristote) : Deux amis vertueux s'aiment pour eux-mêmes, pas pour l'utilité ou le plaisir. Leur amitié est durable car la vertu est stable. Ils se réjouissent du bien de l'autre comme du sien. "Un ami est un autre soi-même". Cette amitié est rare car les gens vertueux sont rares. Elle est la plus haute forme de relation humaine.`,
    `L'amour comme reconnaissance (Hegel) : Deux consciences s'affrontent dans une lutte pour la reconnaissance. Chacun veut être reconnu par l'autre comme sujet libre. L'amour est reconnaissance mutuelle pacifique : je te reconnais comme libre, tu me reconnais comme libre. Nous nous voyons dans le regard de l'autre. Cette reconnaissance est fondement de l'identité.`,
    `L'amour comme jeu (Sartre) : Dans l'amour' je veux être le tout pour l'autre' posséder sa liberté. Mais c'est impossible : si elle m'aime librement, elle peut cesser ; si elle est contrainte, elle ne m'aime plus librement. L'amour est jeu : chaque masque, chaque geste tente de capturer la liberté insaisissable. Pourtant, on continue car l'amour est notre structure fondamentale.`,
    `L'amour du prochain (Christianisme) : Le Bon Samaritain aide un inconnu blessé, sans espoir de retour. Il aime son prochain comme lui-même, sans distinction. Jésus commande : "Aimez vos ennemis". Cet amour n'est pas sentiment mais action : aimer, c'est agir pour le bien de l'autre' même si on ne le ressent pas. L'agapè est amour gratuit, universel, inconditionné.`
  ],

  // ===== SOURCES =====
  sources: [
    {
      title: `Le Banquet`,
      author: `Platon`,
      year: `IVe siècle av. J.-C.`,
      type: 'BOOK' as const,
      reference: `Analyse de l'éros comme ascension vers le Beau`,
      quotes: [
        `L'amour est désir de posséder le beau éternellement.`,
        `L'amour naît du manque.`,
        `On commence par aimer un beau corps, puis le Beau en soi.`,
        `L'amour est initiation aux mystères.`,
        `L'amour est échelle qui mène au Beau.`,
        `L'amour est fils de Pauvreté et de Ressource.`
      ]
    },
    {
      title: `Éthique à Nicomaque`,
      author: `Aristote`,
      year: `IVe siècle av. J.-C.`,
      type: 'BOOK' as const,
      reference: `Théorie de la philia (amitié)`,
      quotes: [
        `Sans amis, personne ne choisirait de vivre.`,
        `L'amitié est une seule âme en deux corps.`,
        `L'ami est un autre soi-même.`,
        `L'amitié vertueuse est la plus durable.`,
        `La vie commune est nécessaire à l'amitié.`,
        `On aime l'ami pour lui-même.`
      ]
    },
    {
      title: `Discours sur l'origine de l'inégalité`,
      author: `Jean-Jacques Rousseau`,
      year: 1755,
      type: 'BOOK' as const,
      reference: `Distinction amour de soi vs amour-propre`,
      quotes: [
        `L'amour de soi est naturel, l'amour-propre est social.`,
        `L'amour-propre est source de tous les vices.`,
        `L'amour-propre nous fait chercher à être supérieur aux autres.`,
        `L'amour de soi est instinct de conservation.`,
        `L'homme naturel est bon, l'homme social est corrompu.`
      ]
    },
    {
      title: `Critique de la raison pratique`,
      author: `Immanuel Kant`,
      year: 1788,
      type: 'BOOK' as const,
      reference: `L'amour comme devoir moral`,
      quotes: [
        `Aime ton prochain comme toi-même.`,
        `L'amour est commandement, non sentiment.`,
        `Aimer' c'est traiter l'humanité comme fin.`,
        `L'amour du prochain est obligation.`,
        `La volonté aime, pas le sentiment.`,
        `L'amour pratique est possible.`
      ]
    },
    {
      title: `L'Être et le Néant`,
      author: `Jean-Paul Sartre`,
      year: 1943,
      type: 'BOOK' as const,
      reference: `Analyse de l'amour comme projet impossible`,
      quotes: [
        `L'amour est projet de posséder la liberté d'autrui.`,
        `Je veux être le tout pour l'autre.`,
        `La liberté ne peut être possédée.`,
        `L'amour est échec constitutif.`,
        `L'amour est jeu de masques.`,
        `L'amour est structure du pour-soi.`
      ]
    },
    {
      title: `Le Deuxième Sexe`,
      author: `Simone de Beauvoir`,
      year: 1949,
      type: 'BOOK' as const,
      reference: `Critique de l'amour comme aliénation féminine`,
      quotes: [
        `On ne naît pas femme, on le devient.`,
        `L'amour est alienation pour la femme.`,
        `La femme est sacrifiée à l'homme.`,
        `L'amour authentique est reconnaissance mutuelle.`,
        `La femme est réduite à l'objet désiré.`,
        `La femme est définie par l'homme.`
      ]
    },
    {
      title: `L'Art d'aimer`,
      author: `Erich Fromm`,
      year: 1956,
      type: 'BOOK' as const,
      reference: `L'amour comme art qui s'apprend`,
      quotes: [
        `L'amour est un art, pas un sentiment.`,
        `L'amour exige discipline et concentration.`,
        `Aimer' c'est soins, responsabilité, respect, connaissance.`,
        `L'amour n'est pas seulement donné mais construit.`,
        `L'amour est activité, pas passivité.`,
        `L'amour est la réponse au problème de l'existence humaine.`
      ]
    }
  ],

  // ===== FLASHCARDS =====
  flashcards: [
    {
      type: 'BASIC' as const,
      front: `Quelle distinction Platon fait-il entre amour des beaux corps et amour du Beau en soi ?`,
      back: `Dans Le Banquet, Platon analyse l'éros comme progression. On commence par aimer un beau corps particulier, puis tous les beaux corps, puis les belles âmes, puis les belles sciences et lois, enfin le Beau en soi (l'Idée du Beau). L'amour est initiation : le désir charnel n'est que première marche vers l'amour spirituel de la vérité et du bien. C'est l'échelle de l'amour.`,
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: `Comment Aristote distingue-t-il les trois types d'amitié ?`,
      back: `Aristote distingue : 1) Amitié d'utilité (aimer l'autre pour ce qu'il apporte) ; 2) Amitié de plaisir (aimer pour le plaisir qu'il donne) ; 3) Amitié vertueuse (aimer l'autre pour lui-même). Les deux premières sont contingentes (si l'utilité/plaisir disparaît, l'amitié finit). La troisième est stable car la vertu est stable. L'amitié vertueuse entre gens vertueux est la plus haute forme d'amour. "Sans amis, personne ne choisirait de vivre".`,
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: `Quelle est la différence entre amour-propre et amour de soi chez Rousseau ?`,
      back: `Rousseau distingue deux principes : l'amour de soi (instinct naturel de conservation, bon) et l'amour-propre (sentiment social de comparaison, source des vices). L'amour de soi nous fait chercher notre bien sans nuire aux autres. L'amour-propre nous fait chercher à être supérieur aux autres, créant vanité, rivalité, domination. L'amour-propre n'existe que dans la société : c'est la comparaison aux autres qui corrompt l'homme naturel.`,
      difficulty: 3
    },
    {
      type: 'CONNECTION' as const,
      front: `Pourquoi Sartre analyse-t-il l'amour comme échec ?`,
      back: `Pour Sartre, dans l'amour' je veux être le tout pour l'autre' posséder sa liberté, être sa raison de vivre. Mais la liberté ne peut être possédée : si l'autre m'aime librement, elle peut cesser de m'aimer. Si elle est contrainte de m'aimer' elle ne m'aime plus librement. L'amour est projet impossible de posséder l'impossibilité. C'est un échec constitutif, un jeu de masques où chaque geste tente de capturer une liberté insaisissable. Pourtant on continue car l'amour est structure fondamentale du pour-soi.`,
      difficulty: 4
    },
    {
      type: 'CONNECTION' as const,
      front: `Qu'est-ce que l'agapè chrétien ?`,
      back: `L'agapè est l'amour chrétien : amour universel, désintéressé, gratuit. "Aime ton prochain comme toi-même", "Aimez vos ennemis". Cet amour ne dépend pas de la qualité de l'aimé ni de ce qu'il apporte. C'est imitation de l'amour divin qui aime gratuitement. Contrairement à l'éros (désir) et à la philia (réciprocité), l'agapè est inconditionné. Pour Saint Augustin, l'ordre est : aimer Dieu, puis le prochain en Dieu, puis soi-même en Dieu.`,
      difficulty: 3
    },
    {
      type: 'QUOTE' as const,
      front: `Quelle citation d'Aristote résume l'amitié ?`,
      back: `"Sans amis, personne ne choisirait de vivre" (Éthique à Nicomaque, IVe siècle av. J.-C.)`,
      difficulty: 1
    },
    {
      type: 'QUOTE' as const,
      front: `Quelle citation de Platon définit l'amour ?`,
      back: `"L'amour est désir de posséder le beau éternellement" (Le Banquet, IVe siècle av. J.-C.)`,
      difficulty: 1
    },
    {
      type: 'CLOZE' as const,
      front: `Pour Rousseau, l'{{amour-propre}} est source de vices, l'{{amour de soi}} est naturel et bon.`,
      back: `amour-propre | amour de soi`,
      difficulty: 1
    },
    {
      type: 'ESSAY' as const,
      front: `L'amour est-il sentiment ou devoir ?`,
      back: `Cette question divise les conceptions de l'amour. Pour le sens commun, l'amour est sentiment : on tombe amoureux, on ressent de l'affection' on ne peut pas commander l'amour. Pour Kant, l'amour est devoir moral : "Aime ton prochain comme toi-même" n'est pas invitation sentimentale mais commandement pratique. Aimer, c'est traiter l'humanité en autrui comme fin, jamais comme moyen seulement. Cet amour pratique est action, pas sentiment. Pour Aristote, l'amitié vertueuse est à la fois sentiment (affection réciproque) et choix (aimer l'autre pour lui-même). Pour les chrétiens, l'agapè est à la fois commandement ("Aimez vos ennemis") et grâce (don de Dieu). Peut-être que l'amour authentique est les deux : sentiment éprouvé ET engagement choisi. On peut aimer sans ressentir d'émotion intense (amour de devoir), on peut ressentir de l'amour sans s'engager (amour sentimental). L'amour complet réunit sentiment et volonté : affection + engagement. C'est ce qui rend l'amour à la fois donné (je ne choisis pas de qui je tombe amoureux) et construit (je choisis de m'engager).`,
      difficulty: 5
    }
  ],

  // ===== TAGS =====
  tags: ['amour', 'éros', 'philia', 'agapè', 'amitié', 'désir', 'beauté', 'autre', 'bonheur', 'liberté', 'sexualité', 'charité', 'amour-propre', 'reconnaissance']
};
