import { Philosopher } from '../types';

export const twentiethCenturyPhilosophers: Philosopher[] = [
  {
    id: '1',
    name: 'Edmund Husserl',
    slug: 'edmund-husserl',
    birthYear: 1859,
    deathYear: 1938,
    nationality: 'German',
    century: '20th',
    birthPlace: 'Prossnitz, Moravia (now Prostějov, Czech Republic)',
    portrait: '/images/philosophers/husserl.jpg',
    biography: 'Fondateur de la phénoménologie, Husserl a révolutionné la philosophie du XXe siècle en proposant un retour "aux choses elles-mêmes". Son projet visait à établir la philosophie comme science rigoureuse à travers la description des structures de la conscience. Formé en mathématiques et en philosophie, il a développé la méthode phénoménologique qui examine les intentionalités de la conscience - le fait que toute conscience est conscience de quelque chose. Son œuvre a profondément influencé Heidegger, Sartre, Merleau-Ponty et toute la philosophie continentale. Malgré la montée du nazisme, il a continué à travailler en Allemagne jusqu\'à sa mort.',
    keyIdeas: [
      'Intentionnalité: toute conscience est conscience de quelque chose',
      'Épochè: mise entre parenthèses du monde naturel',
      'Réduction phénoménologique: retour aux choses elles-mêmes',
      'Noèse-noème: structure des actes de conscience',
      'Lebenswelt: monde de la vie pré-réflexif',
      'Temps et conscience interne',
      'Intersubjectivité et constitution de l\'altérité'
    ],
    majorWorks: [
      {
        title: 'Logische Untersuchungen (Recherches logiques)',
        year: 1900,
        description: 'Introduction à la phénoménologie et critique du psychologisme'
      },
      {
        title: 'Ideen I (Idées directrices pour une phénoménologie)',
        year: 1913,
        description: 'Exposition systématique de la méthode phénoménologique'
      },
      {
        title: 'Cartesianische Meditationen (Méditations cartésiennes)',
        year: 1931,
        description: 'Développement de l\'ego transcendantal et l\'intersubjectivité'
      },
      {
        title: 'Die Krisis (La crise des sciences européennes)',
        year: 1936,
        description: 'Critique de la science moderne et concept de Lebenswelt'
      }
    ],
    influencedBy: ['Franz Brentano', 'Bernard Bolzano', 'Immanuel Kant', 'René Descartes'],
    influenced: ['Martin Heidegger', 'Jean-Paul Sartre', 'Maurice Merleau-Ponty', 'Emmanuel Levinas', 'Edith Stein', 'Roman Ingarden'],
    mainMovements: ['Phénoménologie', 'Philosophie continentale'],
    disciplines: ['Philosophie de l\'esprit', 'Épistémologie', 'Ontologie', 'Logique']
  },
  {
    id: '2',
    name: 'Martin Heidegger',
    slug: 'martin-heidegger',
    birthYear: 1889,
    deathYear: 1976,
    nationality: 'German',
    century: '20th',
    birthPlace: 'Messkirch, Bade-Wurtemberg, Germany',
    portrait: '/images/philosophers/heidegger.jpg',
    biography: 'Auteur de "Sein und Zeit" (Être et Temps), Heidegger est l\'un des philosophes les plus influents et controversés du XXe siècle. Il a radicalisé la phénoménologie husserlienne pour poser la question du sens de l\'Être. Son concept de Dasein (être-là) désigne l\'être humain comme étant jeté dans le monde et préoccupé par son existence. Son analyse de l\'être-pour-la-mort, de l\'angoisse et de l\'authenticité a marqué l\'existentialisme. Son implication dans le nazisme en 1933 reste un sujet de débat. Après la guerre, son travail s\'est orienté vers la critique de la technique moderne et l\'oubli de l\'Être dans la métaphysique occidentale.',
    keyIdeas: [
      'Dasein: l\'être humain comme être-là',
      'Être-pour-la-mort et authenticité',
      'Jeté (Geworfenheit) et situation factice',
      'Souci (Sorge) comme structure fondamentale',
      'Analyse existentiale du quotidien',
      'Critique de la technique moderne',
      'Différence ontologique: être et étants',
      'Herméneutique de l\'existence'
    ],
    majorWorks: [
      {
        title: 'Sein und Zeit (Être et Temps)',
        year: 1927,
        description: 'Œuvre majeure sur l\'analytique du Dasein et la question de l\'Être'
      },
      {
        title: 'Was ist Metaphysik? (Qu\'est-ce que la métaphysique?)',
        year: 1929,
        description: 'Leçon inaugurale sur le néant et l\'angoisse'
      },
      {
        title: 'Der Satz vom Grund (Le principe de raison)',
        year: 1957,
        description: 'Méditation sur le principe de raison suffisante'
      },
      {
        title: 'Die Frage nach der Technik (La question de la technique)',
        year: 1954,
        description: 'Critique de la technologie moderne comme mode de révélation'
      }
    ],
    influencedBy: ['Edmund Husserl', 'Friedrich Nietzsche', 'Søren Kierkegaard', 'Pre-Socratics', 'Immanuel Kant'],
    influenced: ['Jean-Paul Sartre', 'Maurice Merleau-Ponty', 'Emmanuel Levinas', 'Hannah Arendt', 'Michel Foucault', 'Jacques Derrida', 'Gilles Deleuze'],
    mainMovements: ['Phénoménologie', 'Existentialisme', 'Herméneutique philosophique'],
    disciplines: ['Ontologie', 'Métaphysique', 'Philosophie de la technique', 'Éthique']
  },
  {
    id: '3',
    name: 'Jean-Paul Sartre',
    slug: 'jean-paul-sartre',
    birthYear: 1905,
    deathYear: 1980,
    nationality: 'French',
    century: '20th',
    birthPlace: 'Paris, France',
    portrait: '/images/philosophers/sartre.jpg',
    biography: 'Figure emblématique de l\'existentialisme, Sartre a popularisé la thèse que "l\'existence précède l\'essence". L\'homme est condamné à être libre et doit assumer la responsabilité totale de ses choix. Son œuvre philosophique (L\'Être et le Néant) développe une ontologie phénoménologique de la liberté, de la mauvaise foi et de l\'engagement. Romancier, dramaturge et critique littéraire, il a utilisé la littérature pour véhiculer ses idées philosophiques. Engagé politiquement, il a incarné l\'intellectuel committed, soutenant le marxisme tout en le critiquant. Prix Nobel de littérature refusé en 1964.',
    keyIdeas: [
      'L\'existence précède l\'essence',
      'Liberté absolue et responsabilité',
      'Mauvaise foi et auto-illusion',
      'Être-en-soi et être-pour-soi',
      'L\'être-pour-autrui et le regard',
      'L\'engagement politique',
      'Absence de Dieu et humanisme',
      'Le pour-autrui dans la relation amoureuse'
    ],
    majorWorks: [
      {
        title: 'L\'Être et le Néant',
        year: 1943,
        description: 'Essai d\'ontologie phénoménologique sur la liberté et la conscience'
      },
      {
        title: 'L\'Existentialisme est un humanisme',
        year: 1946,
        description: 'Conférence de vulgarisation de l\'existentialisme'
      },
      {
        title: 'La Nausée',
        year: 1938,
        description: 'Roman existentaliste sur l\'absurdité de l\'existence'
      },
      {
        title: 'Les Mots',
        year: 1964,
        description: 'Autobiographie critique sur son enfance et la littérature'
      }
    ],
    influencedBy: ['Martin Heidegger', 'Edmund Husserl', 'G.W.F. Hegel', 'René Descartes', 'Maurice Merleau-Ponty'],
    influenced: ['Simone de Beauvoir', 'Albert Camus', 'Frantz Fanon', 'Maurice Merleau-Ponty', 'Existentialistes'],
    mainMovements: ['Existentialisme', 'Phénoménologie', 'Marxisme existentialiste'],
    disciplines: ['Ontologie', 'Éthique', 'Philosophie politique', 'Littérature']
  },
  {
    id: '4',
    name: 'Simone de Beauvoir',
    slug: 'simone-de-beauvoir',
    birthYear: 1908,
    deathYear: 1986,
    nationality: 'French',
    century: '20th',
    birthPlace: 'Paris, France',
    portrait: '/images/philosophers/beauvoir.jpg',
    biography: 'Pionnière du féminisme moderne et figure majeure de l\'existentialisme, Simone de Beauvoir a transformé la compréhension de la condition féminine. Son œuvre "Le Deuxième Sexe" analyse la construction sociale de la femme comme "Autre" et pose la célèbre formule "On ne naît pas femme, on le devient". Compagne de Sartre, elle a développé sa propre pensée philosophique sur la liberté, l\'ambiguïté de la condition humaine et l\'éthique. Romancière, mémorialiste et essayiste, elle a exploré les thèmes du vieillissement, de la mort et de la responsabilité. Son œuvre reste fondamentale pour la théorie féministe et la philosophie morale.',
    keyIdeas: [
      'On ne naît pas femme, on le devient',
      'La femme comme Autre dans la conscience masculine',
      'L\'oppression économique et sociale des femmes',
      'Mythe féminin et réalité matérielle',
      'Liberté et ambiguïté de la condition humaine',
      'L\'éthique de l\'altérité',
      'Indépendance économique des femmes',
      'Le vieillissement et la mort'
    ],
    majorWorks: [
      {
        title: 'Le Deuxième Sexe',
        year: 1949,
        description: 'Fondement du féminisme moderne, analyse de la condition féminine'
      },
      {
        title: 'Pour une morale de l\'ambiguïté',
        year: 1947,
        description: 'Essai sur l\'éthique existentialiste et la liberté'
      },
      {
        title: 'L\'Invitée',
        year: 1943,
        description: 'Roman sur la liberté, le désir et les relations humaines'
      },
      {
        title: 'Une mort très douce',
        year: 1964,
        description: 'Récit sur la mort de sa mère et le vieillissement'
      }
    ],
    influencedBy: ['Jean-Paul Sartre', 'Martin Heidegger', 'Edmund Husserl', 'G.W.F. Hegel'],
    influenced: ['Judith Butler', 'Betty Friedan', 'Luce Irigaray', 'Féministes contemporaines'],
    mainMovements: ['Existentialisme', 'Féminisme', 'Philosophie morale'],
    disciplines: ['Éthique', 'Philosophie politique', 'Théorie féministe', 'Littérature']
  },
  {
    id: '5',
    name: 'Maurice Merleau-Ponty',
    slug: 'maurice-merleau-ponty',
    birthYear: 1908,
    deathYear: 1961,
    nationality: 'French',
    century: '20th',
    birthPlace: 'Rochefort-sur-Mer, France',
    portrait: '/images/philosophers/merleau-ponty.jpg',
    biography: 'Phénoménologue français, Merleau-Ponty a développé une philosophie de la perception qui révolutionne la compréhension du corps et de l\'expérience. Contrairement au dualisme cartésien, il soutient que la conscience est incarnée - nous sommes des "êtres-au-monde". Son concept de "corps propre" désigne le corps comme sujet de perception et d\'action, pas simple objet. Il a exploré le langage, l\'art, la politique et la relation avec autrui. Collaborateur de Sartre aux Temps Modernes, il s\'en est ensuite distancé philosophiquement et politiquement. Son œuvre annonce la philosophie cognitive et l\'énactive cognition.',
    keyIdeas: [
      'Corps propre et chair du monde',
      'Perception comme accès primordial au monde',
      'Incarner la conscience',
      'Être-au-monde et situation',
      'Langage et expression',
      'Structure du comportement',
      'Intercorporéité et autrui',
      'Visible et invisible: ontologie du sensible'
    ],
    majorWorks: [
      {
        title: 'Phénoménologie de la perception',
        year: 1945,
        description: 'Œuvre majeure sur la perception incarnée et le corps propre'
      },
      {
        title: 'La structure du comportement',
        year: 1942,
        description: 'Étude sur la relation entre conscience et nature'
      },
      {
        title: 'L\'Œil et l\'Esprit',
        year: 1964,
        description: 'Réflexion sur la peinture, la vision et l\'ontologie'
      },
      {
        title: 'Le Visible et l\'Invisible',
        year: 1964,
        description: 'Œuvre posthume sur l\'ontologie du sensible et la chair'
      }
    ],
    influencedBy: ['Edmund Husserl', 'Martin Heidegger', 'Jean-Paul Sartre', 'Gestalt psychology'],
    influenced: ['Michel Foucault', 'Jacques Derrida', 'Emmanuel Levinas', 'Philosophie cognitive'],
    mainMovements: ['Phénoménologie', 'Existentialisme', 'Philosophie de la perception'],
    disciplines: ['Philosophie de l\'esprit', 'Épistémologie', 'Esthétique', 'Philosophie politique']
  },
  {
    id: '6',
    name: 'Albert Camus',
    slug: 'albert-camus',
    birthYear: 1913,
    deathYear: 1960,
    nationality: 'French',
    century: '20th',
    birthPlace: 'Mondovi, Algeria (now Dréan, Algeria)',
    portrait: '/images/philosophers/camus.jpg',
    biography: 'Né en Algérie, Camus est devenu l\'un des écrivains-philosophes les plus importants du XXe siècle. Son œuvre explore l\'absurde - le conflit entre la quête de sens humaine et le silence du monde. Contrairement à nihilisme, il propose la révolte comme réponse: vivre sans espoir mais sans résignation. "L\'homme révolté" analyse la rébellion contre l\'injustice et ses dérives totalitaires. Journaliste engagé, il a combattu le nazisme, critiqué le totalitarisme soviétique et défendu la justice en Algérie. Prix Nobel de littérature 1957. Mort accidentel à 46 ans, laissant une œuvre profondément humaine.',
    keyIdeas: [
      'L\'absurde: divorce entre désir de sens et silence du monde',
      'La révolte comme réponse à l\'absurde',
      'La conscience tragique de la mortalité',
      'La liberté et la passion',
      'L\'homme révolté et la solidarité',
      'Critique du totalitarisme et de l\'idéologie',
      'L\'exil et le royaume',
      'La mesure et la limite'
    ],
    majorWorks: [
      {
        title: 'Le Mythe de Sisyphe',
        year: 1942,
        description: 'Essai sur l\'absurde et le sens de l\'existence'
      },
      {
        title: 'L\'Homme révolté',
        year: 1951,
        description: 'Analyse philosophique de la révolte et critique du totalitarisme'
      },
      {
        title: 'L\'Étranger',
        year: 1942,
        description: 'Roman sur l\'absurdité de l\'existence et l\'indifférence'
      },
      {
        title: 'La Peste',
        year: 1947,
        description: 'Allégorie sur l\'occupation nazie et la condition humaine'
      }
    ],
    influencedBy: ['Friedrich Nietzsche', 'Søren Kierkegaard', 'Jean-Paul Sartre', 'André Gide'],
    influenced: ['Existentialisme', 'Littérature de l\'absurde', 'Philosophie du non-sens'],
    mainMovements: ['Absurdisme', 'Existentialisme', 'Humanisme'],
    disciplines: ['Métaphysique', 'Éthique', 'Philosophie politique', 'Littérature']
  },
  {
    id: '7',
    name: 'Emmanuel Levinas',
    slug: 'emmanuel-levinas',
    birthYear: 1906,
    deathYear: 1995,
    nationality: 'French',
    century: '20th',
    birthPlace: 'Kaunas, Lithuania (then Russian Empire)',
    portrait: '/images/philosophers/levinas.jpg',
    biography: 'Philosophe d\'origine lituanienne, Levinas a révolutionné l\'éthique en plaçant l\'Autre (autrui) au fondement de la philosophie. Sa pensée part d\'une critique de l\'ontologie occidentale, qu\'il juge totalitaire, pour proposer l\'éthique comme "philosophie première". La rencontre du visage d\'autrui nous révèle une infinie responsabilité et un devoir inconditionnel. Prisonnier de guerre puis rescapé de la Shoah, il a puisé dans sa tradition juive pour penser l\'altérité absolue. Son dialogue entre phénoménologie, judaïsme et éthique a profondément marqué la philosophie contemporaine.',
    keyIdeas: [
      'L\'Autre comme origine de l\'éthique',
      'Le visage comme expression éthique',
      'Responsabilité infinie pour autrui',
      'Éthique comme philosophie première',
      'La trace et l\'illéité',
      'Totalité et infini',
      'Diachronie du temps',
      'Substitution et hostipitalité'
    ],
    majorWorks: [
      {
        title: 'Totalité et Infini',
        year: 1961,
        description: 'Essai sur l\'extériorité et la relation à autrui'
      },
      {
        title: 'Autrement qu\'être ou au-delà de l\'essence',
        year: 1974,
        description: 'Approfondissement de l\'éthique et la notion de dire'
      },
      {
        title: 'De l\'existence à l\'existant',
        year: 1947,
        description: 'Premier ouvrage sur l\'existence et l\'il y a'
      },
      {
        title: 'Éthique et infini',
        year: 1982,
        description: 'Entretiens sur sa philosophie et sa pensée juive'
      }
    ],
    influencedBy: ['Edmund Husserl', 'Martin Heidegger', 'Franz Rosenzweig', 'Martin Buber'],
    influenced: ['Jacques Derrida', 'Jean-Luc Marion', 'Paul Ricoeur', 'Éthique du care'],
    mainMovements: ['Phénoménologie', 'Éthique', 'Philosophie juive'],
    disciplines: ['Éthique', 'Métaphysique', 'Philosophie de la religion', 'Philosophie politique']
  },
  {
    id: '8',
    name: 'Hannah Arendt',
    slug: 'hannah-arendt',
    birthYear: 1906,
    deathYear: 1975,
    nationality: 'German-American',
    century: '20th',
    birthPlace: 'Hanover, Germany',
    portrait: '/images/philosophers/arendt.jpg',
    biography: 'Philosophe politique et théoricienne, Arendt a fui le nazisme pour les États-Unis. Son œuvre analyse le totalitarisme, la condition humaine moderne et la nature du politique. Elle distingue la vita activa (action, travail, fabrication) de la vita contemplativa, et identifie le "banalité du mal" dans le procès Eichmann. Son concept de "natalité" désigne la capacité humaine à commencer quelque chose de nouveau. Critique de la société de masse et de l\'oubli du politique, elle défend la pluralité humaine et l\'action collective. Son travail reste essentiel pour comprendre le XXe siècle.',
    keyIdeas: [
      'La banalité du mal et la pensée',
      'Vita activa: action, travail, fabrication',
      'Le totalitarisme comme régime nouveau',
      'Natalité et nouveau commencement',
      'Pluralité humaine et espace d\'apparition',
      'La condition humaine moderne',
      'Le système concentrationnaire',
      'Le droit d\'avoir des droits'
    ],
    majorWorks: [
      {
        title: 'The Origins of Totalitarianism (Les origines du totalitarisme)',
        year: 1951,
        description: 'Analyse du nazisme et stalinisme comme régimes totalitaires'
      },
      {
        title: 'The Human Condition (Condition de l\'homme moderne)',
        year: 1958,
        description: 'Analyse de la vita activa et la condition humaine'
      },
      {
        title: 'Eichmann in Jerusalem (Eichmann à Jérusalem)',
        year: 1963,
        description: 'Récit du procès Eichmann et thèse de la banalité du mal'
      },
      {
        title: 'On Revolution (Essai sur la révolution)',
        year: 1963,
        description: 'Analyse comparée des révolutions française et américaine'
      }
    ],
    influencedBy: ['Martin Heidegger', 'Karl Jaspers', 'Walter Benjamin', 'Aristotle'],
    influenced: ['Jürgen Habermas', 'Michel Foucault', 'Giorgio Agamben', 'Théorie politique contemporaine'],
    mainMovements: ['Théorie politique', 'Philosophie de l\'histoire', 'Phénoménologie politique'],
    disciplines: ['Philosophie politique', 'Histoire', 'Sociologie', 'Théorie du totalitarisme']
  },
  {
    id: '9',
    name: 'Michel Foucault',
    slug: 'michel-foucault',
    birthYear: 1926,
    deathYear: 1984,
    nationality: 'French',
    century: '20th',
    birthPlace: 'Poitiers, France',
    portrait: '/images/philosophers/foucault.jpg',
    biography: 'Philosophe de la discontinuité et du pouvoir, Foucault a transformé notre compréhension de la folie, de la prison, de la sexualité et du savoir. Son archéologie analyse les formations discursives et les épistémès - structures historiques de la pensée. Sa généalogie étudie comment le pouvoir produit le savoir et les sujets. Il révèle que les institutions (asiles, prisons, hôpitaux) sont des mécanismes de discipline et de contrôle. Son concept de biopolitique décrit le pouvoir sur la vie et les populations. Son œuvre influence les études culturelles, la sociologie et la théorie critique.',
    keyIdeas: [
      'Pouvoir/savoir: pouvoir producteur de savoir',
      'Archéologie et généalogie des discours',
      'Épistémè: structures historiques de la pensée',
      'Surveillance, discipline et biopouvoir',
      'Histoire de la sexualité et subjectivation',
      'Les régimes de vérité',
      'Dispositifs et technologies du soi',
      'L\'homme comme invention récente'
    ],
    majorWorks: [
      {
        title: 'Les Mots et les Choses',
        year: 1966,
        description: 'Archéologie des sciences humaines et de l\'épistémè moderne'
      },
      {
        title: 'Surveiller et Punir',
        year: 1975,
        description: 'Généalogie de la prison et de la discipline moderne'
      },
      {
        title: 'Histoire de la folie à l\'âge classique',
        year: 1961,
        description: 'Archéologie de l\'exclusion de la folie'
      },
      {
        title: 'Histoire de la sexualité, vol. 1: La volonté de savoir',
        year: 1976,
        description: 'Analyse du biopouvoir et dispositif de sexualité'
      }
    ],
    influencedBy: ['Friedrich Nietzsche', 'Martin Heidegger', 'Georges Canguilhem', 'Jean Hyppolite'],
    influenced: ['Jacques Derrida', 'Gilles Deleuze', 'Pierre Bourdieu', 'Judith Butler', 'Études culturelles'],
    mainMovements: ['Post-structuralisme', 'Théorie critique', 'Philosophie politique'],
    disciplines: ['Histoire des idées', 'Philosophie politique', 'Sociologie', 'Épistémologie']
  },
  {
    id: '10',
    name: 'Jacques Derrida',
    slug: 'jacques-derrida',
    birthYear: 1930,
    deathYear: 2004,
    nationality: 'French',
    century: '20th',
    birthPlace: 'El Biar, Algeria',
    portrait: '/images/philosophers/derrida.jpg',
    biography: 'Fondateur de la déconstruction, Derrida a bouleversé la philosophie occidentale en montrant comment tout texte contient sa propre critique et sa contradiction. Son concept de "différance" - jeu de mots sur différence et retard - montre que le sens est toujours différé et jamais pleinement présent. Il critique la "logophobie" occidentale (peur de l\'écriture) et la métaphysique de la présence. Son travail sur la justice, l\'hospitalité, le don et le deuil influence droit, littérature et études culturelles. La déconstruction est devenue un outil d\'analyse dans de nombreuses disciplines.',
    keyIdeas: [
      'Déconstruction: lire contre le grain du texte',
      'Différance: différance et différence du sens',
      'Trace et supplémentarité',
      'Critique de la métaphysique de la présence',
      'Pharmakon: poison et remède',
      'Parergon: le hors-d\'œuvre',
      'Justice et droit',
      'Hospitalité inconditionnelle'
    ],
    majorWorks: [
      {
        title: 'De la grammatologie',
        year: 1967,
        description: 'Critique du logocentrisme et introduction à la déconstruction'
      },
      {
        title: 'De la différance',
        year: 1968,
        description: 'Article fondateur sur la différance et la trace'
      },
      {
        title: 'La voix et le phénomène',
        year: 1967,
        description: 'Critique de la présence dans la phénoménologie husserlienne'
      },
      {
        title: 'Spectres de Marx',
        year: 1993,
        description: 'Réflexion sur la justice, la démocratie et la messianité'
      }
    ],
    influencedBy: ['Edmund Husserl', 'Martin Heidegger', 'Friedrich Nietzsche', 'Emmanuel Levinas', 'Saussure'],
    influenced: ['Paul de Man', 'J. Hillis Miller', 'Gianni Vattimo', 'Judith Butler', 'Études littéraires'],
    mainMovements: ['Déconstruction', 'Post-structuralisme', 'Phénoménologie'],
    disciplines: ['Philosophie du langage', 'Métaphysique', 'Éthique', 'Littérature']
  },
  {
    id: '11',
    name: 'Gilles Deleuze',
    slug: 'gilles-deleuze',
    birthYear: 1925,
    deathYear: 1995,
    nationality: 'French',
    century: '20th',
    birthPlace: 'Paris, France',
    portrait: '/images/philosophers/deleuze.jpg',
    biography: 'Philosophe de la différence et du multiple, Deleuze a créé une philosophie affirmative qui valorise le devenir, l\'hétérogène et le nouveau. Avec Guattari, il développe le concept de "rhizome" - structure non hiérarchique qui se connecte horizontalement. Critique de la psychanalyse et du capitalisme, il propose le "schizophrène" comme modèle de subversion. Son œuvre sur Spinoza, Nietzsche, Leibniz et le cinéma explore la immanence, les multiplicités et la production de subjectivité. Sa pensée influence la philosophie politique, l\'esthétique et les études culturelles.',
    keyIdeas: [
      'Différence et répétition',
      'Devenir et multiplicité',
      'Rhizome: structure horizontale et non hiérarchique',
      'Plan d\'immanence',
      'Machine désirante et schizophrénie',
      'Minceur et déterritorialisation',
      'Devenir-minoritaire',
      'Image-mouvement et image-temps (cinéma)'
    ],
    majorWorks: [
      {
        title: 'Différence et répétition',
        year: 1968,
        description: 'Thèse sur la différence ontologique et la répétition'
      },
      {
        title: 'L\'Anti-Œdipe: Capitalisme et schizophrénie I (avec Guattari)',
        year: 1972,
        description: 'Critique de la psychanalyse et analyse du désir'
      },
      {
        title: 'Mille plateaux (avec Guattari)',
        year: 1980,
        description: 'Philosophie du rhizome et des devenirs'
      },
      {
        title: 'Cinéma 1 & 2',
        year: 1983,
        description: 'Philosophie de l\'image-mouvement et de l\'image-temps'
      }
    ],
    influencedBy: ['Friedrich Nietzsche', 'Baruch Spinoza', 'Henri Bergson', 'Martin Heidegger'],
    influenced: ['Antonio Negri', 'Michael Hardt', 'Manuel DeLanda', 'Esthétique contemporaine'],
    mainMovements: ['Post-structuralisme', 'Philosophie de la différence', 'Nominalisme'],
    disciplines: ['Ontologie', 'Philosophie politique', 'Esthétique', 'Psychanalyse']
  },
  {
    id: '12',
    name: 'Ludwig Wittgenstein',
    slug: 'ludwig-wittgenstein',
    birthYear: 1889,
    deathYear: 1951,
    nationality: 'Austrian-British',
    century: '20th',
    birthPlace: 'Vienna, Austria',
    portrait: '/images/philosophers/wittgenstein.jpg',
    biography: 'L\'un des philosophes les plus importants du XXe siècle, Wittgenstein a développé deux philosophies distinctes. Le premier Wittgenstein (Tractatus) soutient que le langage représente des faits et que ce qui ne peut être dit doit être tu. Le second Wittgenstein (Investigations philosophiques) rejette cette conception: le sens d\'un mot réside dans son usage dans des "jeux de langage". La philosophie est une thérapie qui résout les problèmes linguistiques. Son influence sur la philosophie analytique et le tournant linguistique est immense. Vie austère, il a donné sa fortune à ses sœurs.',
    keyIdeas: [
      'Jeux de langage: formes de vie et usage',
      'Signification comme usage',
      'Le silence sur ce qui ne peut être dit',
      'Ressemblances de famille',
      'Thérapie philosophique',
      'Privé et public langage',
      'Critique du langage privé',
      'Suivre une règle'
    ],
    majorWorks: [
      {
        title: 'Tractatus Logico-Philosophicus',
        year: 1921,
        description: 'Première période: structure logique du langage et du monde'
      },
      {
        title: 'Philosophical Investigations (Investigations philosophiques)',
        year: 1953,
        description: 'Seconde période: jeux de langage et critique du Tractatus'
      },
      {
        title: 'On Certainty (De la certitude)',
        year: 1969,
        description: 'Critique du scepticisme et analyse des "hinges"'
      },
      {
        title: 'Remarks on the Foundations of Mathematics',
        year: 1956,
        description: 'Réflexions sur les fondements des mathématiques'
      }
    ],
    influencedBy: ['Bertrand Russell', 'Gottlob Frege', 'Arthur Schopenhauer', 'Vienna Circle'],
    influenced: ['Logical Positivism', 'Ordinary Language Philosophy', 'Philosophie analytique'],
    mainMovements: ['Philosophie analytique', 'Logique', 'Philosophie du langage'],
    disciplines: ['Logique', 'Philosophie du langage', 'Épistémologie', 'Philosophie des mathématiques']
  },
  {
    id: '13',
    name: 'Bertrand Russell',
    slug: 'bertrand-russell',
    birthYear: 1872,
    deathYear: 1970,
    nationality: 'British',
    century: '20th',
    birthPlace: 'Trellech, Wales, United Kingdom',
    portrait: '/images/philosophers/russell.jpg',
    biography: 'Prix Nobel de littérature 1950, Russell fut l\'un des fondateurs de la philosophie analytique. Avec Whitehead, il a écrit les "Principia Mathematica", tentative monumentale de fonder les mathématiques sur la logique. Son "paradoxe de Russell" a révolutionné la théorie des ensembles. Pacifiste militant et socialiste critique, il s\'est opposé à la guerre du Vietnam et aux armes nucléaires. Populaire, il a écrit de nombreux livres accessibles. Son œuvre couvre l\'épistémologie (analyse du knowledge), l\'éthique, la politique et la religion. Son rationalisme clair et son engagement public restent influents.',
    keyIdeas: [
      'Logicisme: mathématiques fondées sur la logique',
      'Analyse logique du langage',
      'Paradoxe de Russell et théorie des types',
      'Description définie et analyse existentielle',
      'Empirisme logique',
      'Pacifisme et désarmement nucléaire',
      'Scepticisme sur la religion',
      'Connaissance par acquaintance et description'
    ],
    majorWorks: [
      {
        title: 'Principia Mathematica (avec Whitehead)',
        year: 1910,
        description: 'Fondation logique des mathématiques (3 vol.)'
      },
      {
        title: 'The Problems of Philosophy',
        year: 1912,
        description: 'Introduction accessible à l\'épistémologie'
      },
      {
        title: 'Our Knowledge of the External World',
        year: 1914,
        description: 'Analyse empirique et logique de la connaissance'
      },
      {
        title: 'A History of Western Philosophy',
        year: 1945,
        description: 'Histoire populaire de la philosophie occidentale'
      }
    ],
    influencedBy: ['Gottlob Frege', 'George Boole', 'David Hume', 'John Stuart Mill'],
    influenced: ['Ludwig Wittgenstein', 'Logical Positivists', 'Quine', 'Kripke'],
    mainMovements: ['Philosophie analytique', 'Logique', 'Empirisme'],
    disciplines: ['Logique', 'Épistémologie', 'Philosophie des mathématiques', 'Éthique']
  },
  {
    id: '14',
    name: 'Karl Popper',
    slug: 'karl-popper',
    birthYear: 1902,
    deathYear: 1994,
    nationality: 'Austrian-British',
    century: '20th',
    birthPlace: 'Vienna, Austria',
    portrait: '/images/philosophers/popper.jpg',
    biography: 'Philosophe des sciences et de la politique, Popper a proposé le falsificationnisme comme critère de démarcation entre science et non-science. Contrairement à la vérification, une théorie est scientifique si elle peut être réfutée. En politique, il a critiqué le historicisme et le totalitarisme (La société ouverte). Il a développé la théorie des trois mondes (monde physique, mental, théorique) et défend la démocratie libérale comme système permettant le changement sans violence. Son épistémologie critique (connaissance par essai-erreur) influence la méthodologie scientifique moderne.',
    keyIdeas: [
      'Falsifiabilité comme critère de scientificité',
      'Critique de l\'induction et vérification',
      'Essai-erreur et sélection naturelle des théories',
      'Société ouverte vs société fermée',
      'Critique de l\'historicisme et des prophéties historiques',
      'Trois mondes: physique, mental, théorique',
      'Libéralisme critique et démocratie',
      'Rationalité critique'
    ],
    majorWorks: [
      {
        title: 'The Logic of Scientific Discovery',
        year: 1934,
        description: 'Fondation du falsificationnisme et méthode scientifique'
      },
      {
        title: 'The Open Society and Its Enemies',
        year: 1945,
        description: 'Critique du totalitarisme et défense de la démocratie libérale'
      },
      {
        title: 'The Poverty of Historicism',
        year: 1957,
        description: 'Critique des prophéties historiques en sciences sociales'
      },
      {
        title: 'Conjectures and Refutations',
        year: 1963,
        description: 'Essais sur la croissance du savoir scientifique'
      }
    ],
    influencedBy: ['Vienna Circle', 'David Hume', 'Immanuel Kant', 'Socrates'],
    influenced: ['Imre Lakatos', 'Thomas Kuhn', 'Paul Feyerabend', 'Philosophie des sciences'],
    mainMovements: ['Empirisme critique', 'Rationalisme critique', 'Libéralisme'],
    disciplines: ['Philosophie des sciences', 'Épistémologie', 'Philosophie politique', 'Méthodologie']
  },
  {
    id: '15',
    name: 'Jürgen Habermas',
    slug: 'jurgen-habermas',
    birthYear: 1929,
    deathYear: null,
    nationality: 'German',
    century: '20th',
    birthPlace: 'Düsseldorf, Germany',
    portrait: '/images/philosophers/habermas.jpg',
    biography: 'Figure centrale de l\'École de Francfort et deuxième génération de la Théorie critique, Habermas a développé la théorie de l\'agir communicationnel. Il distingue l\'agir instrumentel (travail) de l\'agir communicationnel (interaction langagière orientée vers l\'entente). Son concept d\'espace public et de démocratie délibérative influence la théorie politique. Contre le postmodernisme, il défend la modernité comme projet inachevé et la rationalité communicative. Son œuvre immense couvre éthique de la discussion, droit, morale, religion et politique. Philosophie sociale majeure du XXe siècle.',
    keyIdeas: [
      'Agir communicationnel vs agir stratégique',
      'Espace public et opinion publique',
      'Démocratie délibérative',
      'Rationalité communicative',
      'Éthique de la discussion',
      'Modernité comme projet inachevé',
      'Droit et morale: procéduralisme',
      'Validité claims: vérité, justesse, sincérité'
    ],
    majorWorks: [
      {
        title: 'Theorie des kommunikativen Handelns (Théorie de l\'agir communicationnel)',
        year: 1981,
        description: 'Théorie de la rationalité communicative et société moderne'
      },
      {
        title: 'Strukturwandel der Öffentlichkeit (L\'espace public)',
        year: 1962,
        description: 'Analyse historique de l\'émergence de l\'espace public bourgeois'
      },
      {
        title: 'Moralbewusstsein und kommunikatives Handeln',
        year: 1983,
        description: 'Développement moral et éthique de la discussion'
      },
      {
        title: 'Between Facts and Norms',
        year: 1992,
        description: 'Théorie du droit et de la démocratie délibérative'
      }
    ],
    influencedBy: ['Max Horkheimer', 'Theodor Adorno', 'M. Weber', 'G.W.F. Hegel', 'American pragmatism'],
    influenced: ['John Rawls', 'Axel Honneth', 'Seyla Benhabib', 'Théorie démocratique'],
    mainMovements: ['Théorie critique', 'École de Francfort', 'Pragmatisme'],
    disciplines: ['Philosophie politique', 'Sociologie', 'Éthique', 'Philosophie du droit']
  }
];
