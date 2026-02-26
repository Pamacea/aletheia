/**
 * Existentialisme - Category Data
 */

export const category = {
  id: 'existentialisme',
  name: 'Existentialisme',
  slug: 'existentialisme',
  description: 'Courant philosophique qui place l\'existence humaine et la liberté individuelle au centre de la réflexion',
  color: '#2c5f8f',
  icon: 'user'
};

export const concepts = [
  {
    id: 'absurde',
    name: 'Absurde',
    slug: 'absurde',
    category: 'existentialisme',
    difficulty: 3,
    importance: 5,
    definition: 'L\'absurde désigne le divorce fondamental entre l\'aspiration humaine à un sens, à une rationalité claire et à une justice, et le silence du monde qui n\'offre aucune réponse. Ce n\'est ni un objet ni un concept, mais une condition de l\'existence humaine qui surgit de la confrontation entre l\'appel humain et le déraisonnable silence du monde. Face à l\'absurde, l\'homme est condamné à vivre sans espoir mais sans résignation, dans une tension constante entre sa quête de sens et l\'indifférence de l\'univers.',
    shortDefinition: 'Le divorce entre la quête de sens humaine et le silence du monde',
    etymology: {
      latin: 'absurdus',
      meaning: 'dissonant, ridicule, déraisonnable',
      root: 'ab-surdus : ce qui est sourd, sans harmonie',
      notes: 'Étymologiquement, ce qui est « hors de toute proportion » ou « sans mélodie »'
    },
    variations: [
      {
        title: 'Camus - Le divorce',
        description: 'L\'absurde comme « divorce entre l\'esprit qui cherche et l\'univers qui se tait ». Ce n\'est ni dans l\'homme ni dans le monde, mais dans leur présence simultanée. Il naît de la comparaison entre une exigence humaine de clarté et l\'obscurité du monde.'
      },
      {
        title: 'Kierkegaard - Le paradoxe',
        description: 'L\'absurde comme paradoxe de la foi chrétienne. Le chrétien affirme l\'absurde quand il croit au Dieu incarné, à la vérité objective de l\'événement historique. La foi est justement la passion de l\'absurde.'
      },
      {
        title: 'Sartre - La contingence',
        description: 'L\'absurde comme contingence de l\'existence. Le monde est « de trop », sans raison d\'être. L\'existence précède l\'essence, et cette facticité sans fondement révèle l\'absence de sens prédéterminé.'
      },
      {
        title: 'Kafka - L\'impasse',
        description: 'L\'absurde comme situation sans issue où l\'individu se heurte à une logique incompréhensible. Les personnages kafkaïens naviguent dans des mondes où les règles sont obscures et la justice inaccessible.'
      }
    ],
    keyFigures: [
      { name: 'Albert Camus', period: '1913-1960', contribution: 'Théorie systématique de l\'absurde, analyse de la révolte, du suicide et de la liberté' },
      { name: 'Søren Kierkegaard', period: '1813-1855', contribution: 'L\'absurde comme paradoxe de la foi, tension entre foi et raison' },
      { name: 'Jean-Paul Sartre', period: '1905-1980', contribution: 'L\'existence précède l\'essence, la contingence et la nausée' },
      { name: 'Franz Kafka', period: '1883-1924', contribution: 'Mise en scène littéraire de l\'absurde bureaucratique et existentiel' },
      { name: 'Fyodor Dostoevsky', period: '1821-1881', contribution: 'La révolte contre Dieu et l\'absurde de la souffrance innocente' }
    ],
    examples: [
      {
        situation: 'Sisyphe',
        explanation: 'Le héros mythique condamné par les dieux à rouler éternellement son rocher jusqu\'au sommet d\'une montagne d\'où il retombe. Son châtiment inutile est l\'image même de l\'absurde, mais Camus conclut « Il faut imaginer Sisyphe heureux ».'
      },
      {
        situation: 'Meursault dans L\'Étranger',
        explanation: 'Le personnage qui découvre « la tendre indifférence du monde » lors de son exécution. Son refus de « mentir » et de jouer le jeu des convenances sociales le confronte à l\'absurde.'
      },
      {
        situation: 'Le personnage de Kafka',
        explanation: 'Joseph K. dans Le Procès, qui est arrêté et jugé sans jamais connaître ses accusateurs ni la nature de sa faute. L\'absurde bureaucratique reflète l\'incompréhension du monde.'
      },
      {
        situation: 'Les machines de l\'absurde',
        explanation: 'Dans Caligula de Camus, l\'empereur tente de pousser la logique de l\'absurde à l\'extrême en traitant les humains comme des objets, révélant la violence d\'un monde sans transcendance.'
      }
    ],
    relatedConcepts: [
      { name: 'Révolte', relation: 'Implique', description: 'La révolte est la réponse camusienne à l\'absurde : refus du suicide et de l\'espoir' },
      { name: 'Liberté', relation: 'Suppose', description: 'La reconnaissance de l\'absurde libère des illusions et donne une liberté absolue' },
      { name: 'Sens', relation: 'S\'oppose à', description: 'L\'absurde révèle l\'absence de sens inhérente à l\'existence' },
      { name: 'Mort', relation: 'Est lié à', description: 'La conscience de la mort révèle l\'absurde de la condition humaine' },
      { name: 'Nihilisme', relation: 'S\'oppose à', description: 'Contrairement au nihilisme, l\'absurde refuse le désespoir et affirme la vie' },
      { name: 'Suicide', relation: 'Interroge', description: 'Le suicide est la « véritable problème philosophique » face à l\'absurde' }
    ],
    sources: [
      {
        title: 'Le Mythe de Sisyphe',
        author: 'Albert Camus',
        year: 1942,
        type: 'BOOK',
        reference: 'Essai philosophique sur l\'absurde, la révolte, la liberté et la passion',
        quotes: [
          'Il n\'y a qu\'un problème philosophique vraiment sérieux : le suicide.',
          'Le combat suprême est celui de l\'homme contre l\'absurde.',
          'Il faut imaginer Sisyphe heureux.',
          'L\'absurde naît de cette confrontation entre l\'appel humain et le silence déraisonnable du monde.',
          'Je tire de cette absurdité trois conséquences : ma révolte, ma liberté, ma passion.',
          'La vie sera vécue mieux, sans avoir besoin de sens.',
          'Ce qui est absurde, c\'est que tous les hommes vivent comme si personne ne savait.',
          'La pensée absurde se refuse et se refuse encore. C\'est encore là où elle est.'
        ]
      },
      {
        title: 'L\'Étranger',
        author: 'Albert Camus',
        year: 1942,
        type: 'BOOK',
        reference: 'Roman illustrant l\'expérience vécue de l\'absurde',
        quotes: [
          'Je m\'ouvrais pour la première fois à la tendre indifférence du monde.',
          'Cette nuit-là, j\'ai compris qu\'il y avait encore un moyen de me refuser une autre vie.',
          'Tout l\'abus du monde, à la fin, n\'avait pas beaucoup de prix.',
          'Je n\'ai que regret d\'une chose : d\'avoir pu un jour sourire.',
          'Il semblait que la vie m\'avait quitté pour toujours.',
          'Entre le ciel bleu et la noirceur de la terre, je reconnaissais une fois de plus le doux paysage de cette terre que j\'avais tant aimée.'
        ]
      },
      {
        title: 'Caligula',
        author: 'Albert Camus',
        year: 1944,
        type: 'PLAY',
        reference: 'Pièce de théâtre sur la logique de l\'absurde poussée à l\'extrême',
        quotes: [
          'Les hommes meurent et ils ne sont pas heureux.',
          'J\'ai compris que la mort n\'est rien.',
          'On ne comprend rien, et on ne peut rien comprendre.',
          'Il y a une logique de l\'absurde, mais elle est sans pitié.',
          'Je veux vivre, et je veux que tout soit clair.',
          'Les hommes sont médiocres parce qu\'ils mentent.',
          'La vérité, c\'est ce qui est, et non ce qu\'on voudrait qui soit.'
        ]
      },
      {
        title: 'Crainte et Tremblement',
        author: 'Søren Kierkegaard',
        year: 1843,
        type: 'BOOK',
        reference: 'Analyse du sacrifice d\'Abraham comme paradoxe de la foi',
        quotes: [
          'La foi est justement la passion de l\'absurde.',
          'Le paradoxe de la foi est que l\'individu est supérieur à l\'universel.',
          'Abraham est donc à cet égard le modèle de la foi.',
          'Il n\'y a pas de médiateur entre Dieu et l\'individu.',
          'L\'angoisse est le vertige de la liberté.'
        ]
      },
      {
        title: 'La Nausée',
        author: 'Jean-Paul Sartre',
        year: 1938,
        type: 'BOOK',
        reference: 'Roman existentiel sur la contingence et l\'absurde de l\'existence',
        quotes: [
          'L\'existence précède l\'essence.',
          'Le nécessaire, c\'est ce qui est, c\'est la matière.',
          'Tout est gratuit, ce jardin, cette ville.',
          'Je venais de comprendre la vraie nature de la nausée.',
          'L\'existence n\'est pas quelque chose qui arrive ensuite à la matière.',
          'Les choses sont entièrement ce qu\'elles paraissent.'
        ]
      },
      {
        title: 'Le Procès',
        author: 'Franz Kafka',
        year: 1925,
        type: 'BOOK',
        reference: 'Roman sur l\'absurdité de la justice et l\'impasse existentielle',
        quotes: [
          'Quelqu\'un doit avoir calomnié Joseph K.',
          'Sans l\'avoir jamais vue, je sais que cette cour est viciée.',
          'La logique est sans doute invariable, mais il est difficile de s\'y reconnaître.',
          'Le procès ne se poursuit jamais, il n\'y a que des jugements.',
          'La vue de cette misère humaine et de cette révolte impuissante.'
        ]
      },
      {
        title: 'Les Frères Karamazov',
        author: 'Fyodor Dostoevsky',
        year: 1880,
        type: 'BOOK',
        reference: 'Roman sur la révolte contre Dieu et l\'absurde de la souffrance',
        quotes: [
          'Si Dieu n\'existe pas, tout est permis.',
          'L\'harmonie du monde est inaccessible au cœur humain.',
          'Je refuse de recevoir ce monde de Dieu.',
          'Le mystère de l\'homme n\'est pas dans son existence, mais dans sa destinée.',
          'La souffrance d\'un enfant innocent rend le monde inacceptable.'
        ]
      },
      {
        title: 'Lettre sur l\'humanisme',
        author: 'Martin Heidegger',
        year: 1947,
        type: 'BOOK',
        reference: 'Essai critique de l\'existentialisme et analyse de l\'être',
        quotes: [
          'L\'existentialisme se place dans une tradition métaphysique.',
          'Le sujet n\'est pas l\'homme mais l\'être-là.',
          'L\'essence de l\'homme réside dans son existence.',
          'Le langage est la maison de l\'être.'
        ]
      }
    ],
    flashcards: [
      {
        type: 'BASIC',
        front: 'Qu\'est-ce que l\'absurde selon Camus ?',
        back: 'L\'absurde est le divorce entre l\'attente humaine de sens, de clarté et de justice, et le silence du monde qui n\'offre aucune réponse. Ce n\'est ni dans l\'homme ni dans le monde, mais dans leur confrontation.',
        difficulty: 1
      },
      {
        type: 'BASIC',
        front: 'Quelles sont les trois conséquences de l\'absurde selon Camus ?',
        back: 'La révolte (refus du suicide et de l\'espoir), la liberté (vivre sans illusions), la passion (intensité maximale de l\'expérience).',
        difficulty: 2
      },
      {
        type: 'BASIC',
        front: 'Quel est le « problème philosophique vraiment sérieux » selon Camus ?',
        back: 'Le suicide, car il juge si la vie vaut la peine d\'être vécue face à l\'absurde.',
        difficulty: 1
      },
      {
        type: 'CLOZE',
        front: 'Selon Camus, « Il faut imaginer {{Sisyphe}} »',
        back: 'heureux',
        difficulty: 1
      },
      {
        type: 'CLOZE',
        front: '« Je m\'ouvrais pour la première fois à la tendre {{indifférence}} du monde. »',
        back: 'indifférence',
        difficulty: 2
      },
      {
        type: 'CLOZE',
        front: 'Selon Kierkegaard, « La {{foi}} est justement la passion de l\'absurde. »',
        back: 'foi',
        difficulty: 3
      },
      {
        type: 'CONNECTION',
        front: 'Comment la révolte répond-elle à l\'absurde ?',
        back: 'La révolte maintient la confrontation avec l\'absurde sans nier ni succomber. Elle refuse le suicide (fuite) et l\'espoir (négation), affirmant ainsi la dignité humaine face au silence du monde.',
        difficulty: 3
      },
      {
        type: 'CONNECTION',
        front: 'Quelle différence entre l\'absurde de Camus et le nihilisme ?',
        back: 'Le nihilisme nie la valeur de l\'existence et peut mener au désespoir. L\'absurde de Camus reconnaît l\'absence de sens inhérente mais refuse le suicide et l\'espoir pour une vie passionnée et révoltée. L\'absurde est une condition à accepter, pas une vérité à détruire.',
        difficulty: 4
      },
      {
        type: 'CONNECTION',
        front: 'Comment Sartre et Camus conçoivent-ils différemment l\'absurde ?',
        back: 'Camus: l\'absurde comme confrontation entre l\'homme et le monde. Sartre: l\'absurde comme contingence de l\'existence, la facticité sans raison d\'être. Pour Camus, l\'absurde est une limite; pour Sartre, c\'est une condition de la liberté.',
        difficulty: 4
      },
      {
        type: 'CONNECTION',
        front: 'Quel rôle joue la mort dans la conscience de l\'absurde ?',
        back: 'La mort révèle l\'absence de sens de l\'existence en annihilant tous les projets. Elle est la limite absolue qui rend toute entreprise humaine finalement inutile, mais c\'est cette conscience qui donne à la vie son urgence et sa valeur.',
        difficulty: 3
      },
      {
        type: 'QUOTE',
        front: 'De quelle œuvre cette citation est-elle extraite : « Il n\'y a qu\'un problème philosophique vraiment sérieux : le suicide » ?',
        back: 'Le Mythe de Sisyphe, Albert Camus (1942)',
        difficulty: 2
      },
      {
        type: 'QUOTE',
        front: 'De quelle œuvre cette citation est-elle extraite : « Il faut imaginer Sisyphe heureux » ?',
        back: 'Le Mythe de Sisyphe, Albert Camus (1942)',
        difficulty: 1
      },
      {
        type: 'QUOTE',
        front: 'De quelle œuvre cette citation est-elle extraite : « Je m\'ouvrais pour la première fois à la tendre indifférence du monde » ?',
        back: 'L\'Étranger, Albert Camus (1942)',
        difficulty: 2
      },
      {
        type: 'QUOTE',
        front: 'De quelle œuvre cette citation est-elle extraite : « La foi est justement la passion de l\'absurde » ?',
        back: 'Crainte et Tremblement, Søren Kierkegaard (1843)',
        difficulty: 3
      },
      {
        type: 'QUOTE',
        front: 'De quelle œuvre cette citation est-elle extraite : « Si Dieu n\'existe pas, tout est permis » ?',
        back: 'Les Frères Karamazov, Fyodor Dostoevsky (1880) - prononcé par Ivan',
        difficulty: 2
      },
      {
        type: 'ESSAY',
        front: 'Expliquez la différence entre l\'absurde de Camus et le nihilisme',
        back: "Le nihilisme conclut que l'absence de sens de l'existence rend la vie sans valeur, ce qui peut mener au désespoir ou à la destruction (passif ou actif). L'absurde de Camus part du même constat - le monde est dépourvu de sens inhérent - mais en tire des conséquences opposées : non le suicide ou le renoncement, mais une révolte constante qui affirme la vie malgré tout. Pour Camus, l'absurde n'est pas une conclusion mais une condition permanente de l'existence, une tension à maintenir plutôt qu'un problème à résoudre.",
        difficulty: 5
      },
      {
        type: 'ESSAY',
        front: 'En quoi Sisyphe est-il le héros de l\'absurde ?',
        back: "Sisyphe incarne la condition absurde : condamné à un travail inutile et sans fin, il est l'image de l'homme confronté à l'absence de sens. Mais Camus le transforme en héros tragique : « Le lutteur lui-même bout à bout ses pensées [...] La lutte elle-même vers les sommets suffit à remplir un cœur d'homme. Il faut imaginer Sisyphe heureux. » Le bonheur de Sisyphe vient de sa pleine conscience de l'absurde et de sa révolte, qui affirment sa dignité humaine face à son destin.",
        difficulty: 5
      },
      {
        type: 'ESSAY',
        front: 'Comparez l\'absurde chez Kierkegaard et chez Camus',
        back: "Chez Kierkegaard, l'absurde est religieux : c'est le paradoxe de la foi chrétienne, l'affirmation de l'incarnation divine qui défie la raison. L'absurde est l'objet de la foi, ce qu'on croit contre toute raison. Chez Camus, l'absurde est philosophique et existentiel : c'est la condition de l'homme face à un monde muet. Pour Kierkegaard, l'absurde conduit à la foi en Dieu; pour Camus, il conduit à la révolte contre l'espoir religieux. Mais tous deux reconnaissent que la raison ne peut tout résoudre.",
        difficulty: 5
      }
    ],
    tags: ['absurde', 'camus', 'existentialisme', 'sens', 'révolte', 'sisyphe', 'kierkegaard', 'sartre', 'kafka', 'liberté', 'mort', 'suicide'],
    status: 'COMPLETE'
  }
];
