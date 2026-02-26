/**
 * Ancient Greek Philosophers Data
 * Complete data for Ancient Greek philosophers covering Pre-Socratics, Classical, and Hellenistic periods
 *
 * Each philosopher includes:
 * - Basic info (name, dates, nationality)
 * - Biography (200-500 words in French)
 * - Key ideas (5+ concepts)
 * - Major works (3+ with years)
 * - Influences (who influenced them + who they influenced)
 * - Movements and traditions
 */

import { PhilosopherData } from '../philosophers';

export const ancientGreekPhilosophers: PhilosopherData[] = [
  // =============================================================================
  // PRE-SOCRATICS
  // =============================================================================

  {
    name: "Thalès de Milet",
    slug: "thales-de-milet",
    fullName: "Thalès de Milet",
    birthYear: -624,
    deathYear: -546,
    birthPlace: "Milet, Ionie (actuelle Turquie)",
    nationality: "Grec",
    century: "VIe siècle av. J.-C.",
    biography: `Thalès de Milet est considéré comme le premier philosophe de la tradition occidentale et l'un des Sept Sages de la Grèce antique. Né vers 624 av. J.-C. à Milet, en Ionie, il a marqué un tournant décisif dans l'histoire de la pensée en proposant les premières explications naturalistes des phénomènes naturels, rompant ainsi avec les explications mythologiques traditionnelles.

Son approche révolutionnaire consistait à chercher le principe premier (l'archè) de toutes choses dans un élément naturel : l'eau. Selon Thalès, l'eau serait la substance fondamentale dont tout est issu et à laquelle tout retourne. Cette thèse, bien que naïve à nos yeux, représente une avancée philosophique majeure car elle inaugure la recherche d'explications rationnelles plutôt que surnaturelles.

Thalès était également un mathématicien et un astronome talentueux. On lui attribue plusieurs découvertes géométriques fondamentales, notamment le célèbre "théorème de Thalès" sur les triangles proportionnels. Il aurait également prédit une éclipse solaire en 585 av. J.-C., exploit qui témoigne de ses connaissances astronomiques avancées pour l'époque.

Sa pensée philosophique se caractérise par trois principes fondamentaux : l'unité du monde (tout procède d'un principe unique), le naturalisme (les phénomènes naturels ont des causes naturelles), et la rationalité (le monde est intelligible par la raison humaine). Ces principes poseront les fondations de toute la philosophie et la science occidentales.

Thalès incarnait la figure du sage pratique, capable d'appliquer sa connaissance théorique à des situations concrètes. La célèbre anecdote selon laquelle il aurait spéculé sur les pressoirs d'olive pour prouver la valeur utilitaire de la philosophie illustre cette dimension pragmatique de sa pensée.`,
    mainMovements: ["Présocratique", "École de Milet"],
    disciplines: ["Métaphysique", "Cosmologie", "Mathématiques", "Astronomie"],
    keyIdeas: {
      ideas: [
        "L'eau comme principe premier (archè)",
        "Naturalisme et explication rationnelle du monde",
        "Unité fondamentale de la réalité",
        "Théorème de Thalès en géométrie",
        "Intelligibilité du monde par la raison",
        "Matérialisme moniste"
      ],
      descriptions: [
        "L'eau est la substance fondamentale dont tout est issu",
        "Les phénomènes naturels ont des causes naturelles, pas mythologiques",
        "Toute la réalité procède d'un principe unique",
        "Théorème géométrique sur les triangles proportionnels",
        "Le monde peut être compris par la raison humaine",
        "La réalité est fondamentalement matérielle"
      ]
    },
    influences: {
      influencedBy: ["Mythologie grecque", "Sagesse égyptienne", "Mathématiques babyloniennes"],
      influenced: ["Anaximandre", "Anaximène", "Pythagore", "Héraclite", "Toute la philosophie grecque"]
    },
    majorWorks: [
      { title: "Sur la nature (perdu)", year: -600 },
      { title: "Les Navigations (perdu)", year: -590 },
      { title: "Traité d'astronomie (perdu)", year: -580 }
    ]
  },

  {
    name: "Anaximandre",
    slug: "anaximandre",
    fullName: "Anaximandre de Milet",
    birthYear: -610,
    deathYear: -546,
    birthPlace: "Milet, Ionie (actuelle Turquie)",
    nationality: "Grec",
    century: "VIe siècle av. J.-C.",
    biography: `Anaximandre de Milet, successeur et contemporain de Thalès, est un philosophe présocratique qui a considérablement avancé la spéculation cosmologique et métaphysique. Né vers 610 av. J.-C., il est le premier philosophe dont nous connaissons un ouvrage, malheureusement perdu, intitulé "Sur la nature".

Sa contribution majeure réside dans sa conception de l'archè (principe premier). Contrairement à Thalès qui identifiait ce principe à un élément concret (l'eau), Anaximandre propose une notion plus abstraite et philosophique : l'apeiron, l'indéfini ou l'infini. Ce principe est indéterminé, illimité, éternel et englobe tous les contraires. De l'apeiron naissent les contraires (chaud/froid, sec/humide) qui séparent et forment les mondes multiples. Cette conception marque une étape cruciale vers l'abstraction philosophique.

Anaximandre a également développé la première cosmologie scientifique véritable. Il concevait la Terre comme un cylindre flottant libre dans l'espace, maintenu en équilibre par sa position centrale équidistante de toutes choses. Cette théorie révolutionnaire éliminait le besoin d'un support quelconque pour la Terre. Il a également produit la première carte géographique connue du monde, établi un gnomon pour déterminer les solstices et les équinoxes, et proposé une théorie de l'évolution selon laquelle les êtres vivants seraient nés de l'humidité sous l'action du soleil.

Sa pensée philosophique introduit plusieurs concepts fondamentaux : l'idée de justice cosmique (les choses rendent justice les unes envers les autres selon l'ordre du temps), la nécessité (ananke) comme principe explicatif, et l'éternité du mouvement. Ces concepts influenceront profondément la philosophie grecque ultérieure, particulièrement Platon et les stoïciens.

Anaximandre représente une étape charnière entre le matérialisme de Thalès et l'idéalisme de Platon. Son apeiron préfigure à la fois la matière primordiale des matérialistes et les Formes platoniciennes, témoignant de la richesse et de la fécondité de sa pensée.`,
    mainMovements: ["Présocratique", "École de Milet"],
    disciplines: ["Métaphysique", "Cosmologie", "Astronomie", "Géographie", "Biologie"],
    keyIdeas: {
      ideas: [
        "L'apeiron (l'indéfini/infini) comme principe premier",
        "Justice cosmique et ordre temporel",
        "Terre comme corps cylindrique flottant dans l'espace",
        "Évolution des êtres vivants depuis l'humidité",
        "Nécessité (ananke) comme principe explicatif",
        "Éternité du mouvement"
      ],
      descriptions: [
        "Le principe premier est l'indéfini, pas un élément concret",
        "Les choses se rendent justice selon l'ordre du temps",
        "La Terre flotte librement sans support",
        "Les êtres vivants évoluent depuis des formes primitives",
        "La nécessité gouverne les transformations cosmiques",
        "Le mouvement est éternel, sans commencement ni fin"
      ]
    },
    influences: {
      influencedBy: ["Thalès de Milet"],
      influenced: ["Anaximène", "Pythagore", "Héraclite", "Platon", "Aristote"]
    },
    majorWorks: [
      { title: "Sur la nature", year: -570 },
      { title: "Carte du monde (perdue)", year: -560 },
      { title: "Traité sur la sphère céleste (perdu)", year: -550 }
    ]
  },

  {
    name: "Anaximène",
    slug: "anaximene",
    fullName: "Anaximène de Milet",
    birthYear: -585,
    deathYear: -528,
    birthPlace: "Milet, Ionie (actuelle Turquie)",
    nationality: "Grec",
    century: "VIe siècle av. J.-C.",
    biography: `Anaximène de Milet, dernier représentant de l'école de Milet, est né vers 585 av. J.-C. et mort vers 528 av. J.-C. Disciple d'Anaximandre, il a cherché à concilier l'abstraction de son maître avec le concret de la pensée de Thalès, proposant une philosophie qui exercera une influence considérable, particulièrement sur la pensée médicale hippocratique.

Sa contribution philosophique principale réside dans sa conception de l'archè (principe premier). Contrairement à Thalès qui identifiait ce principe à l'eau, et à Anaximandre qui proposait l'abstrait apeiron, Anaximène identifie le principe premier à l'air. L'air est une substance concrète, observable, mais capable de se transformer en tous les éléments par les processus de condensation et de raréfaction. Lorsque l'air se raréfie, il devient feu ; lorsqu'il se condense, il devient vent, nuage, eau, terre et finalement pierre.

Cette théorie présente plusieurs avantages. D'abord, elle expliquait le changement de manière mécanique, sans recourir à des principes métaphysiques obscurs. Ensuite, elle faisait de l'air le principe de vie : l'air est le souffle (pneuma) qui anime les êtres vivants, et l'âme elle-même est un type d'air. Enfin, elle unifiait cosmologie et biologie sous un même principe explicatif.

Anaximène a également développé une cosmologie originale. Il concevait la Terre comme une large pierre plate flottant sur l'air, comme une feuille sur l'eau. Les corps célestes sont des disques de feu fixés sur une sphère cristalline qui les entraîne dans leur mouvement. Il expliquait les phénomènes météorologiques (pluie, grêle, neige) par différentes densités de l'air.

Sa pensée a particulièrement influencé la médecine hippocratique, qui fera de l'air (pneuma) le principe vital. Les stoïciens développeront cette conception en faisant du pneuma le principe ordonnateur de l'univers. Diogène d'Apollonie reprendra sa philosophie en l'élargissant.

Anaximène représente l'apogée de l'école de Milet et la première tentative d'explication mécanique du changement, préfigurant les théories physiques ultérieures sur les états de la matière.`,
    mainMovements: ["Présocratique", "École de Milet"],
    disciplines: ["Métaphysique", "Cosmologie", "Physique", "Biologie"],
    keyIdeas: {
      ideas: [
        "L'air comme principe premier (archè)",
        "Condensation et raréfaction comme mécanismes de changement",
        "L'âme comme souffle vital (pneuma)",
        "Terre plate flottant sur l'air",
        "Explication mécanique des phénomènes naturels",
        "Unité du cosmos et du vivant"
      ],
      descriptions: [
        "L'air est la substance fondamentale de toute réalité",
        "Les changements d'état expliquent la diversité des éléments",
        "L'âme est un type d'air qui nous anime",
        "La Terre flotte comme une feuille sur l'air",
        "Les phénomènes naturels ont des causes physiques",
        "Un même principe explique cosmologie et biologie"
      ]
    },
    influences: {
      influencedBy: ["Thalès de Milet", "Anaximandre"],
      influenced: ["Diogène d'Apollonie", "Médecine hippocratique", "Stoïcisme", "Héraclite"]
    },
    majorWorks: [
      { title: "Sur la nature (perdu)", year: -546 },
      { title: "Traité cosmologique (perdu)", year: -540 },
      { title: "Traité météorologique (perdu)", year: -535 }
    ]
  },

  {
    name: "Pythagore",
    slug: "pythagore",
    fullName: "Pythagore de Samos",
    birthYear: -570,
    deathYear: -495,
    birthPlace: "Samos, Ionie (actuelle Grèce)",
    nationality: "Grec",
    century: "VIe siècle av. J.-C.",
    biography: `Pythagore, l'une des figures les plus énigmatiques et influentes de l'Antiquité, est né vers 570 av. J.-C. sur l'île de Samos. Fondateur de l'école pythagoricienne, il a exercé une influence profonde et durable sur la philosophie, les mathématiques, la musique et la mystique occidentales. Contrairement à ses prédécesseurs milésiens, Pythagore a établi son enseignement dans le sud de l'Italie, à Crotone, où il a fondé une communauté religieuse et philosophique dont l'influence s'est étendue sur plusieurs siècles.

Sa contribution philosophique la plus célèbre est la thèse "tout est nombre". Pour Pythagore, les nombres sont non seulement des instruments de mesure mais les principes constitutifs de la réalité elle-même. Cette conception découle de ses découvertes mathématiques, notamment le célèbre théorème de Pythagore sur les triangles rectangles, mais surtout de ses investigations sur l'harmonie musicale. Il a découvert que les intervalles musicaux correspondent à des rapports numériques simples, suggérant que l'harmonie cosmique elle-même est fondée sur les nombres.

Cette vision des choses a conduit à la doctrine de l'harmonie des sphères : les corps célestes, en se mouvant, produisent une musique que l'oreille humaine ne peut percevoir mais qui structure l'ordre cosmique. Les pythagoriciens ont également développé des concepts mathématiques fondamentaux comme les nombres pairs et impairs, les nombres parfaits, et les proportions.

Sur le plan métaphysique, Pythagore a formulé la doctrine de la métempsychose ou transmigration des âmes. L'âme est immortelle et successive dans différents corps, humains ou animaux. Cette croyance était accompagnée de règles de vie strictes : végétarisme, interdiction de manger des fèves, purification rituelle, et régime de vie communautaire.

L'école pythagoricienne a également développé une cosmologie géocentrique avec une "anti-Terre" invisible, découvert que la Terre est sphérique, et classifié les sciences dans le quadrivium : arithmétique, géométrie, musique, astronomie.

L'influence de Pythagore est immense. Platon lui-même était considéré comme un héritier du pythagorisme, et de nombreux concepts platoniciens (l'immortalité de l'âme, la théorie des Idées) portent la marque pythagoricienne. Les néo-pythagoriciens et néo-platoniciens de l'Antiquité tardive ont continué à développer sa pensée, qui a également influencé la Renaissance et la science moderne.`,
    mainMovements: ["Présocratique", "École pythagoricienne"],
    disciplines: ["Métaphysique", "Mathématiques", "Musique", "Astronomie", "Éthique", "Mystique"],
    keyIdeas: {
      ideas: [
        "Tout est nombre : les nombres comme principes de la réalité",
        "Théorème de Pythagore",
        "Harmonie des sphères : musique cosmique",
        "Métempsychose (transmigration des âmes)",
        "Communauté de vie philosophique",
        "Quadrivium : arithmétique, géométrie, musique, astronomie"
      ],
      descriptions: [
        "La réalité est structurée par des rapports numériques",
        "Relation fondamentale dans les triangles rectangles",
        "Les planètes produisent une musique inaudible",
        "L'âme est immortelle et renaît dans différents corps",
        "Vie communautaire avec règles strictes",
        "Les quatre sciences mathématiques fondamentales"
      ]
    },
    influences: {
      influencedBy: ["Thalès de Milet", "Anaximandre", "Orphisme", "Égypte ancienne"],
      influenced: ["Platon", "Aristote", "Néo-pythagoriciens", "Néo-platoniciens", "Copernic", "Kepler"]
    },
    majorWorks: [
      { title: "Traités mathématiques (perdus)", year: -530 },
      { title: "Sur l'âme (perdu)", year: -520 },
      { title: "Sacred Discourse (perdu)", year: -510 },
      { title: "Les Vers d'or (attribué)", year: -500 }
    ]
  },

  {
    name: "Héraclite",
    slug: "heraclite",
    fullName: "Héraclite d'Éphèse",
    birthYear: -535,
    deathYear: -475,
    birthPlace: "Éphèse, Ionie (actuelle Turquie)",
    nationality: "Grec",
    century: "VIe-Ve siècle av. J.-C.",
    biography: `Héraclite d'Éphèse, surnommé "l'Obscur" en raison de la densité paradoxale de son œuvre, est l'un des philosophes les plus fascinants et influents de la Grèce antique. Né vers 535 av. J.-C. dans une famille noble d'Éphèse, il a laissé une œuvre fragmentaire mais d'une profondeur extraordinaire qui continuera d'inspirer la pensée occidentale jusqu'à nos jours.

Sa philosophie repose sur un principe unique et universel : le feu comme archè (principe premier) et symbole du devenir perpétuel. Contrairement à ses prédécesseurs qui cherchaient une substance stable, Héraclite affirme que la réalité fondamentale est le changement constant. "On ne se baigne jamais deux fois dans le même fleuve" illustre cette vérité que tout s'écoule, rien ne demeure identique.

Cependant, ce changement n'est pas chaos. Il est gouverné par le logos, principe d'ordre et de raison qui structure l'univers. Le logos est à la fois la loi cosmique qui régit le changement et la raison humaine capable de le comprendre. Cette conception unifie cosmos et pensée : comprendre l'univers, c'est comprendre sa propre rationalité.

La pensée héraclitéenne est fondamentalement dialectique. Elle repose sur l'unité des contraires : opposés nécessaires à l'existence (jour/nuit, vie/mort, chaud/froid), guerre comme père de toutes choses, tension créatrice entre pôles contraires. "La voie qui monte et la voie qui descend sont une et même." Ces contraires s'unissent dans la tension d'une harmonie cachée, semblable à celle de l'arc et de la lyre.

Héraclite développe également une philosophie de la connaissance. La plupart des hommes vivent dans un état de somnolence, comme dans un rêve, sans comprendre le logos qui les anime. Le véritable savoir exige un éveil, une prise de conscience individuelle de l'unité du logos. Cette conception influencera profondément toute la tradition mystique et philosophique occidentale, du stoïcisme à Hegel.

Son style, composé d'aphorismes percutants et souvent paradoxaux, vise à provoquer la réflexion plutôt qu'à transmettre un savoir dogmatique. Héraclite se moque de la sagesse livresque et valorise l'expérience directe et la compréhension personnelle du logos.

L'influence d'Héraclite est immense. Platon, bien que critique, lui reconnaît une place centrale dans l'histoire de la philosophie. Les stoïciens adopteront sa cosmologie du feu et du logos. Hegel le considérera comme le fondateur de la dialectique, et Nietzsche saluera en lui le premier philosophe de la vie et du devenir.`,
    mainMovements: ["Présocratique"],
    disciplines: ["Métaphysique", "Cosmologie", "Épistémologie", "Éthique"],
    keyIdeas: {
      ideas: [
        "Le feu comme archè et symbole du devenir",
        "Devenir perpétuel : tout s'écoule",
        "Logos comme principe d'ordre et de raison",
        "Unité des contraires",
        "Guerre comme père de toutes choses",
        "Connaissance comme éveil au logos"
      ],
      descriptions: [
        "Le feu symbolise le changement constant de la réalité",
        "Rien ne demeure identique, tout est mouvement",
        "Principe universel d'ordre et d'intelligibilité",
        "Les opposés sont nécessaires et complémentaires",
        "Le conflit est le moteur de toute existence",
        "Le savoir est une prise de conscience individuelle"
      ]
    },
    influences: {
      influencedBy: ["Anaximandre", "Tradition ionienne", "Orphisme"],
      influenced: ["Platon", "Aristote", "Stoïcisme", "Hegel", "Nietzsche", "Héraclitéens"]
    },
    majorWorks: [
      { title: "De la nature (fragments)", year: -500 }
    ]
  },

  {
    name: "Parménide",
    slug: "parmenide",
    fullName: "Parménide d'Élée",
    birthYear: -515,
    deathYear: -450,
    birthPlace: "Élée, Grande Grèce (actuelle Italie)",
    nationality: "Grec",
    century: "VIe-Ve siècle av. J.-C.",
    biography: `Parménide d'Élée, fondateur de l'école éléatique, est l'un des philosophes les plus révolutionnaires et influents de l'Antiquité grecque. Né vers 515 av. J.-C. dans la colonie grecque d'Élée, dans le sud de l'Italie, il a bouleversé la pensée occidentale en posant les fondations de l'ontologie (étude de l'être en tant qu'être).

Son œuvre, connue sous le titre "De la nature", est composée en vers et prend la forme d'une révélation mystique. Le poème décrit le voyage du jeune Parménide vers une déesse qui lui révèle la vérité sur l'être. Cette forme littéraire originale témoigne de la dimension religieuse et initiatique de la philosophie parménidienne.

La thèse centrale de Parménide est radicale : l'être est, le non-être n'est pas. De ce principe apparemment tautologique découle une série de conclusions révolutionnaires : l'être est un, éternel, immobile, indivisible, continu et parfait. Le changement, le mouvement, la multiplicité, la naissance et la mort sont illusoires, car ils impliqueraient le passage de l'être au non-être, ce qui est impossible.

Cette position conduit Parménide à nier la réalité du monde sensible tel que nous le percevons. Les sens nous trompent en nous montrant un monde en devenir et multiple. Seule la raison, à travers la pensée logique, peut accéder à la vérité de l'être un et immobile. Cette opposition radicale entre raison et sens influencera profondément toute la philosophie occidentale, particulièrement Platon.

Parménide est également le premier philosophe à utiliser systématiquement l'argumentation logique et déductive. Il développe notamment des arguments contre la possibilité du mouvement et de la multiplicité, que son disciple Zénon d'Élée systématisera dans ses célèbres paradoxes. Ces arguments reposent sur des principes logiques rigoureux : si quelque chose existe, il doit avoir des propriétés cohérentes, et si ces propriétés mènent à des contradictions, la chose ne peut exister.

La pensée parménidienne représente un tournant décisif dans l'histoire de la philosophie. Elle pose pour la première fois la question de l'être comme question philosophique fondamentale, établit la primauté de la raison sur les sens, et introduit l'argumentation logique comme méthode philosophique. Ces innovations détermineront le cours de la philosophie grecque et occidentale.

L'influence de Parménide est immense. Platon lui consacrera un dialogue entier, reconnaissant son importance philosophique. Aristote développera sa métaphysique en réponse aux défis parménidiens. Les stoïciens, les néo-platoniciens, et même la philosophie médiévale et moderne continueront à se confronter à l'héritage parménidien.`,
    mainMovements: ["Éléatisme"],
    disciplines: ["Métaphysique", "Ontologie", "Logique", "Épistémologie"],
    keyIdeas: {
      ideas: [
        "L'être est, le non-être n'est pas",
        "Immutabilité et éternité de l'être",
        "Unité et continuité de l'être",
        "Primauté de la raison sur les sens",
        "Illusion du devenir et du mouvement",
        "Fondation de l'ontologie"
      ],
      descriptions: [
        "Principe fondamental de toute pensée ultérieure",
        "L'être ne change pas, il est éternel et immobile",
        "L'être est un, indivisible et continu",
        "Seule la pensée logique accède à la vérité",
        "Le changement sensible est illusoire",
        "Étude de l'être en tant qu'être"
      ]
    },
    influences: {
      influencedBy: ["Pythagore", "Xénophane"],
      influenced: ["Zénon d'Élée", "Mélissos", "Platon", "Aristote", "Néo-platonisme"]
    },
    majorWorks: [
      { title: "De la nature (poème)", year: -480 }
    ]
  },

  {
    name: "Zénon d'Élée",
    slug: "zenon-d-elee",
    fullName: "Zénon d'Élée",
    birthYear: -490,
    deathYear: -430,
    birthPlace: "Élée, Grande Grèce (actuelle Italie)",
    nationality: "Grec",
    century: "Ve siècle av. J.-C.",
    biography: `Zénon d'Élée, disciple et compagnon de Parménide, est né vers 490 av. J.-C. et mort vers 430 av. J.-C. Principalement connu pour ses célèbres paradoxes du mouvement, il est une figure cruciale de l'école éléatique et un pionnier de la méthode philosophique par l'absurde.

La contribution majeure de Zénon à la philosophie réside dans ses paradoxes, conçus pour défendre la thèse parménidienne de l'unité et de l'immobilité de l'être. Les plus célèbres sont les paradoxes du mouvement : Achille et la tortue, la dichotomie, la flèche, et le stade. Ces paradoxes visent à démontrer que notre expérience courante du mouvement et de la multiplicité est contradictoire et donc illusoire.

Dans le paradoxe d'Achille et la tortue, le rapide Achille ne peut jamais rattraper une tortue qui part devant lui, car il doit d'abord atteindre le point où se trouvait la tortue, pendant lequel la tortue a avancé, et ainsi de suite à l'infini. Dans la dichotomie, pour parcourir une distance, il faut d'abord en parcourir la moitié, puis la moitié de cette moitié, et ainsi de suite à l'infini, rendant le mouvement impossible. Dans le paradoxe de la flèche, une flèche en vol est immobile à chaque instant, donc ne peut pas se mouvoir.

Ces paradoxes reposent sur des analyses logiques rigoureuses des concepts d'espace, de temps et de mouvement. Ils anticipent des questions mathématiques et philosophiques qui ne seront pleinement résolues qu'avec le calcul infinitésimal au XVIIe siècle et la théorie des ensembles au XIXe siècle.

Zénon a également développé des paradoxes contre la multiplicité, montrant que si les choses sont nombreuses, elles doivent être à la fois infiniment grandes et infiniment petites, ce qui est contradictoire.

Sa méthode philosophique, la reductio ad absurdum (réduction à l'absurde), est devenue un outil essentiel de la logique et des mathématiques. En partant des prémisses de ses adversaires et en montrant qu'elles mènent à des contradictions, Zénon Force à rejeter ces prémisses et à accepter la position éléatique.

L'influence de Zénon est considérable. Platon, dans le dialogue du Parménide, le décrit comme un maître de la dialectique. Aristote analyse ses paradoxes dans la Physique et propose des solutions. Les mathématiciens modernes, de Cantor à Russell, se sont confrontés aux questions soulevées par Zénon. Ses paradoxes restent des sujets de débat en philosophie des mathématiques et en physique quantique.

Zénon représente l'apogée de l'analyse logique éléatique et un défi permanent à notre compréhension de la réalité.`,
    mainMovements: ["Éléatisme"],
    disciplines: ["Métaphysique", "Logique", "Philosophie des mathématiques"],
    keyIdeas: {
      ideas: [
        "Paradoxe d'Achille et la tortue",
        "Paradoxe de la dichotomie",
        "Paradoxe de la flèche",
        "Paradoxe du stade",
        "Méthode par réduction à l'absurde",
        "Défense de l'unicité de l'être"
      ],
      descriptions: [
        "Un rapide ne peut jamais rattraper un plus lent",
        "Pour parcourir une distance, il faut la parcourir infiniment",
        "Une flèche en vol est immobile à chaque instant",
        "Le mouvement est impossible car l'espace est divisible",
        "Démonstration logique par contradictions",
        "La multiplicité et le mouvement sont illusoire"
      ]
    },
    influences: {
      influencedBy: ["Parménide"],
      influenced: ["Platon", "Aristote", "Méthode dialectique", "Philosophie des mathématiques", "Calcul infinitésimal"]
    },
    majorWorks: [
      { title: "Paradoxes (transmis par Aristote et Simplicius)", year: -460 }
    ]
  },

  {
    name: "Empédocle",
    slug: "empedocle",
    fullName: "Empédocle d'Agrigente",
    birthYear: -490,
    deathYear: -430,
    birthPlace: "Agrigente, Sicile (actuelle Italie)",
    nationality: "Grec",
    century: "Ve siècle av. J.-C.",
    biography: `Empédocle d'Agrigente, né vers 490 av. J.-C. et mort vers 430 av. J.-C., est l'une des figures les plus originales et fascinantes du présocratisme. Philosophe, poète, médecin, prophète et miracle-worker selon la légende, il a tenté une synthèse audacieuse entre les écoles de Milet et l'éléatisme, proposant une philosophie qui influencera profondément la pensée occidentale.

Sa contribution philosophique majeure est la théorie des quatre racines (les éléments) : feu, air, eau et terre. Ces quatre éléments sont éternels, immuables et ne se transforment pas les uns dans les autres (contrairement à la thèse de l'unité du principe premier). La diversité des choses que nous observons résulte de différentes combinaisons de ces quatre éléments, combinés et séparés par deux forces opposées : l'Amour (Philotes), qui unit, et la Haine (Neikos), qui sépare.

Cette théorie résout plusieurs problèmes philosophiques. Elle respecte le principe parménidien de l'immutabilité de l'être (les éléments ne changent pas), tout en expliquant le changement et la multiplicité du monde sensible. Elle propose une mécanique du changement : les combinaisons d'éléments sous l'action des forces d'attraction et de répulsion. Elle offre aussi une base pour une médecine scientifique : la santé est l'équilibre des éléments, la maladie leur déséquilibre.

Empédocle a développé une cosmologie cyclique. L'univers alterne entre quatre phases : phase d'amour (où tous les éléments sont unis dans un sphère parfaite), phase croissante de haine (où les éléments se séparent progressivement), phase de haine maximale (où les éléments sont totalement séparés), et phase croissante d'amour (où ils se réunissent progressivement). Nous serions actuellement dans une phase de haine croissante.

En biologie, Empédocle propose une théorie de l'évolution qui anticipe Darwin. Les êtres vivants seraient nés spontanément de la terre sous l'action de la chaleur. Au début, il y eut des créatures disparates (têtes sans corps, membres isolés), puis seulement les combinaisons viables survécurent. Il explique la physiologie par la théorie des pores : la perception résulte de l'ajustement entre les pores des organes sensoriels et les émanations des objets.

Empédocle était également un médecin renommé. Il aurait purifié la ville de Sélinonte en détournant les cours d'eau et, selon la légende, aurait ressuscité une femme. Son influence sur la médecine hippocratique est considérable.

Sa philosophie religieuse, inspirée de l'orphisme et du pythagorisme, enseigne la métempsychose et la nécessité de la pureté rituelle. Selon la légende, il se serait jeté dans le cratère de l'Etna pour prouver son immortalité divine, laissant sa sandale sur le bord.

L'influence d'Empédocle est immense. Platon et Aristote adopteront sa théorie des quatre éléments, qui dominera la science occidentale jusqu'au XVIIIe siècle. Sa théorie de l'évolution anticipera Darwin. Sa poésie philosophique inspirera Lucrece et la tradition didactique.`,
    mainMovements: ["Présocratique"],
    disciplines: ["Métaphysique", "Cosmologie", "Médecine", "Biologie", "Poésie"],
    keyIdeas: {
      ideas: [
        "Quatre éléments : feu, air, eau, terre",
        "Amour et Haine comme forces cosmiques",
        "Cosmologie cyclique",
        "Théorie de l'évolution par sélection naturelle",
        "Théorie des pores en perception",
        "Métempsychose et pureté"
      ],
      descriptions: [
        "La réalité est composée de quatre éléments éternels",
        "Deux forces opposées régissent les combinaisons d'éléments",
        "L'univers alterne entre unité et séparation",
        "Les espèces viables survivent, les autres disparaissent",
        "La perception résulte de l'ajustement des pores",
        "L'âme transmigre et nécessite la pureté"
      ]
    },
    influences: {
      influencedBy: ["Pythagore", "Parménide", "École de Milet", "Orphisme"],
      influenced: ["Platon", "Aristote", "Médecine hippocratique", "Stoïcisme", "Lucrece", "Darwin"]
    },
    majorWorks: [
      { title: "De la nature (poème en vers)", year: -450 },
      { title: "Purifications (poème religieux)", year: -445 }
    ]
  },

  {
    name: "Anaxagore",
    slug: "anaxagore",
    fullName: "Anaxagore de Clazomènes",
    birthYear: -500,
    deathYear: -428,
    birthPlace: "Clazomènes, Ionie (actuelle Turquie)",
    nationality: "Grec",
    century: "Ve siècle av. J.-C.",
    biography: `Anaxagore de Clazomènes, né vers 500 av. J.-C. et mort vers 428 av. J.-C., est un philosophe présocratique qui a apporté la philosophie ionienne à Athènes, où il a exercé une influence considérable, particulièrement sur Périclès et Euripide. Premier philosophe à résider à Athènes, il a développé une philosophie originale qui préfigure l'atomisme et influence Platon.

Sa contribution philosophique majeure est la théorie des semences (spermata) ou homeoméries. Toute matière est composée de particules fondamentales qui contiennent en elles-mêmes les qualités des choses : il y a des semences de chair, de bois, d'or, etc. Ces semences sont infiniment divisibles : chaque particule, aussi petite soit-elle, contient toutes les qualités de la substance. Cette théorie résout le problème parménidien du changement : rien ne naît ni ne meurt, mais les semences se combinent et se séparent.

Anaxagore introduit également une notion fondamentale : l'Intellect (Nous). Contrairement aux semences qui sont matérielles et infinies, le Nous est immatériel, unique, séparé, et possède connaissance et pouvoir parfait. Le Nous a mis en mouvement le chaos initial des semences, organisant le cosmos selon un plan intelligent. Cette conception est la première distinction nette entre matière et esprit dans la philosophie grecque.

En astronomie, Anaxagore a fait des découvertes révolutionnaires. Il a expliqué que le Soleil est une pierre incandescente plus grande que le Péloponnèse, que la Lune reflète la lumière du Soleil, et que les éclipses lunaires résultent de l'ombre de la Terre. Il a également proposé que les étoiles sont des corps célestes comme le Soleil. Ces théories scientifiques lui valurent un procès pour impiété, car il niait la divinité des corps célestes.

Sa cosmologie est mécaniste mais finaliste. Le mouvement initial donné par le Nous engendre un processus cosmique où les choses se séparent selon leur nature : le lourd vers le bas, le léger vers le haut, le chaud vers le froid, etc. Ce processus est téléologique, tendant vers l'ordre actuel du monde.

Anaxagore a également proposé une théorie de la perception. La perception résulte de la contraste : nous voyons le noir par le blanc, le chaud par le froid. Cette théorie relativiste de la connaissance influencera Protagoras et les sophistes.

Condamné pour impiété, Anaxagore fut sauvé par Périclès et s'exila à Lampsaque, où il continua d'enseigner jusqu'à sa mort.

L'influence d'Anaxagore est considérable. Sa théorie des semences influence l'atomisme. Sa notion d'Intellect influencera Platon (le Démiurge du Timée), Aristote, et la théologie philosophique. Son astronomie scientifique préfigure les découvertes modernes. Son arrivée à Athènes marque le début de la philosophie athénienne.`,
    mainMovements: ["Présocratique"],
    disciplines: ["Métaphysique", "Cosmologie", "Astronomie", "Biologie", "Épistémologie"],
    keyIdeas: {
      ideas: [
        "Semences (homeoméries) comme principes matériels",
        "L'Intellect (Nous) comme principe organisateur",
        "Divisibilité infinie de la matière",
        "Nature mécaniste du Soleil et de la Lune",
        "Explication scientifique des éclipses",
        "Théorie du contraste en perception"
      ],
      descriptions: [
        "La matière contient des semences de toutes qualités",
        "Un esprit immatériel organise le cosmos",
        "Les particules sont infiniment divisibles",
        "Le Soleil est une pierre, la Lune reflète sa lumière",
        "Les éclipses ont des causes naturelles",
        "La perception nécessite le contraste des opposés"
      ]
    },
    influences: {
      influencedBy: ["Anaximène", "Parménide", "Empédocle"],
      influenced: ["Socrate", "Platon", "Atomistes", "Aristote", "Stoïcisme"]
    },
    majorWorks: [
      { title: "De la nature", year: -460 }
    ]
  },

  {
    name: "Démocrite",
    slug: "democrite",
    fullName: "Démocrite d'Abdère",
    birthYear: -460,
    deathYear: -370,
    birthPlace: "Abdère, Thrace (actuelle Grèce)",
    nationality: "Grec",
    century: "Ve-IVe siècle av. J.-C.",
    biography: `Démocrite d'Abdère, né vers 460 av. J.-C. et mort vers 370 av. J.-C., est avec son maître Leucippe le fondateur de l'atomisme, l'une des théories philosophiques et scientifiques les plus influentes de l'histoire. Surnommé "le riant" en raison de son rire face aux vanités humaines, il a écrit plus de 70 ouvrages couvrant pratiquement tous les domaines du savoir.

La théorie atomiste de Démocrite est l'une des spéculations les plus audacieuses de l'Antiquité. Tout ce qui existe est composé d'atomes (indivisibles) et de vide. Les atomes sont éternels, insécables, invisibles, et diffèrent par leur forme, leur taille et leur position. Ils se meuvent dans le vide infini, s'entrechoquant et s'agglutinant pour former les corps composés. Toute la diversité du monde résulte de différentes combinaisons d'atomes.

Cette théorie résout élégamment plusieurs problèmes philosophiques. Elle respecte le principe parménidien de l'immutabilité (les atomes ne changent pas), tout en expliquant le changement : réarrangement d'atomes. Elle explique la naissance et la mort comme assemblage et désassemblage d'atomes. Elle propose une physique mécaniste complète : tous les phénomènes, y compris la pensée et la sensation, résultent de mouvements atomiques.

En épistémologie, Démocrite défend un empirisme radical. Toute connaissance provient des sens, mais les sens ne nous donnent qu'une opinion obscure (dokos) sur la réalité. La raison peut accéder à la vérité (aletheia) des atomes et du vide, mais cette vérité est conventionnelle : les qualités sensibles (douleur, couleur, saveur) n'existent pas dans les objets eux-mêmes mais résultent de l'interaction entre nos atomes sensoriels et les atomes des objets.

Sa cosmologie est matérialiste. Le monde est infini, contenant une infinité de mondes qui naissent et périssent. Les dieux existent mais sont des êtres composés d'atomes particulièrement fins, vivant dans l'intermonde et pouvant influencer les humains.

En éthique, Démocrite prône l'euthymie (bonne humeur) ou ataraxie (absence de trouble). Le bonheur ne réside ni dans les plaisirs sensuels ni dans les richesses, mais dans la modération, l'équilibre de l'âme, et la contemplation rationnelle. "Le but de la vie est la bonne humeur, et cela consiste à ne pas s'inquiéter inutilement."

Démocrite a également écrit sur la politique, la musique, la linguistique, l'agriculture, la médecine, et pratiquement tous les sujets de son époque. Son encyclopédisme témoigne de la confiance de la raison humaine à comprendre le monde.

L'influence de Démocrite est immense et durable. Épicure développera son atomisme en système philosophique complet. Lucrèce le diffusera dans le monde romain. Au XVIIe siècle, Gassendi et Boyle renoueront avec l'atomisme, qui deviendra la base de la chimie moderne avec Dalton. La physique moderne a confirmé l'existence d'atomes, bien que leur nature diffère considérablement de la conception démocritéenne.`,
    mainMovements: ["Atomisme"],
    disciplines: ["Métaphysique", "Physique", "Épistémologie", "Éthique", "Politique"],
    keyIdeas: {
      ideas: [
        "Atomisme : tout est composé d'atomes et de vide",
        "Infinite divisibilité exclue : les atomes sont insécables",
        "Mécanisme matérialiste : tous phénomènes par mouvement atomique",
        "Empirisme épistémologique",
        "Conventionnalisme des qualités sensibles",
        "Euthymie : bonne humeur comme but de la vie"
      ],
      descriptions: [
        "La réalité est composée d'atomes se mouvant dans le vide",
        "Les atomes sont éternels, insécables, invisibles",
        "Tous les phénomènes résultent de combinaisons atomiques",
        "La connaissance provient des sens",
        "Couleurs, saveurs n'existent pas dans les objets",
        "Le bonheur est l'équilibre rationnel de l'âme"
      ]
    },
    influences: {
      influencedBy: ["Leucippe", "Parménide", "Empédocle", "Anaxagore", "Pythagore"],
      influenced: ["Épicure", "Lucrèce", "Atomisme moderne", "Gassendi", "Boyle", "Dalton"]
    },
    majorWorks: [
      { title: "Petite ordonnance (perdu)", year: -430 },
      { title: "Cosmologie (perdue)", year: -420 },
      { title: "Sur la forme (perdu)", year: -410 },
      { title: "Traité sur l'esprit (perdu)", year: -400 },
      { title: "Traités de morale (perdus)", year: -390 }
    ]
  },

  // =============================================================================
  // CLASSICAL PERIOD
  // =============================================================================

  {
    name: "Socrate",
    slug: "socrate",
    fullName: "Socrate",
    birthYear: -470,
    deathYear: -399,
    birthPlace: "Athènes, Grèce",
    nationality: "Grec",
    century: "Ve siècle av. J.-C.",
    biography: `Socrate (470-399 av. J.-C.) est sans doute le philosophe le plus célèbre de l'Antiquité et l'une des figures les plus influentes de l'histoire de la pensée occidentale. Né à Athènes, fils d'un sculpteur et d'une sage-femme, il n'a rien écrit lui-même, mais sa pensée nous est connue à travers les dialogues de son disciple Platon et les écrits de Xénophon. Condamné à mort pour "corruption de la jeunesse" et "impiété", il accepta sa sentence avec un courage stoïque qui deviendrait légendaire.

La méthode socratique, la maïeutique (art de l'accouchement), est sa contribution la plus célèbre à la philosophie. Comme sa mère était sage-femme, Socrate prétendait aider les autres à "accoucher" de leurs propres idées. Par une série de questions habiles et ironiques (l'ironie socratique), il amenait ses interlocuteurs à reconnaître leur ignorance (le "je sais que je ne sais rien") et à découvrir par eux-mêmes les vérités qu'ils croyaient connaître. Cette méthode dialectique visait non pas à transmettre un savoir, mais à développer la capacité de penser par soi-même.

La philosophie socratique se centre sur trois thèmes principaux : l'éthique, la connaissance de soi, et la vertu. Socrate affirmait que "la connaissance est la vertu" - le vice n'est jamais qu'ignorance, et personne ne fait le mal volontairement. Cette identification de savoir et de moralité fonde son projet philosophique : aider chaque individu à se connaître soi-même ("connais-toi toi-même", maxime de Delphes qu'il adopta) pour vivre une vie bonne et juste.

Socrate développait également une théologie originale. Il croyait en un dieu personnel (son daimonion, signe divin intérieur) qui lui donnait des avertissements moraux. Cette piété personnelle contrastait avec la religion traditionnelle athénienne et contribua à son procès.

Son influence sur la philosophie est immense et directe : Platon fut son élève et fondateur de l'Académie, Aristote fut l'élève de Platon, et toute la philosophie grecque postérieure se définira par rapport à l'héritage socratique. Les stoïciens, les cyniques, les sceptiques revendiqueront tous Socrate comme fondateur spirituel. Plus tard, les philosophes de la Renaissance et des Lumières, puis l'existentialisme moderne (Kierkegaard en particulier) se réclameront de l'attitude socratique.

La figure de Socrate est devenue le symbole même du philosophe : celui qui remet en question les certitudes établies, qui vit selon ses principes même au prix de sa vie, et qui montre par son exemple que la vie sans examen ne vaut pas d'être vécue.`,
    mainMovements: ["Philosophie classique athénienne"],
    disciplines: ["Éthique", "Épistémologie", "Politique", "Théologie", "Philosophie de l'éducation"],
    keyIdeas: {
      ideas: [
        "Maïeutique : art de l'accouchement des esprits",
        "Connais-toi toi-même",
        "Je sais que je ne sais rien",
        "La connaissance est la vertu",
        "Nul ne fait le mal volontairement",
        "La vie sans examen ne vaut pas d'être vécue"
      ],
      descriptions: [
        "Méthode dialectique pour aider à découvrir ses propres idées",
        "Impératif de connaissance de soi comme fondement moral",
        "Reconnaissance de l'ignorance comme commencement du savoir",
        "Identification de savoir et de moralité",
        "Le mal est toujours ignorance",
        "Examen critique de sa vie comme condition de sa valeur"
      ]
    },
    influences: {
      influencedBy: ["Parménide", "Héraclite", "Anaxagore", "Pythagorisme", "Orphisme"],
      influenced: ["Platon", "Xénophon", "Antisthène", "Aristippe", "Euclide de Mégare", "Toute la philosophie grecque"]
    },
    majorWorks: [
      { title: "Apologie de Socrate (par Platon)", year: -399 },
      { title: "Criton (par Platon)", year: -399 },
      { title: "Phédon (par Platon)", year: -399 },
      { title: "Mémorables (par Xénophon)", year: -390 }
    ]
  },

  {
    name: "Platon",
    slug: "platon",
    fullName: "Platon",
    birthYear: -428,
    deathYear: -348,
    birthPlace: "Athènes ou Égine, Grèce",
    nationality: "Grec",
    century: "Ve-IVe siècle av. J.-C.",
    biography: `Platon (env. 428-348 av. J.-C.) est sans conteste l'un des philosophes les plus importants et influents de l'histoire de l'humanité. Disciple de Socrate, qu'il vénère comme le plus sage des hommes, et maître d'Aristote, Platon se situe au cœur du triomphe de la philosophie grecque. Fondateur de l'Académie, première institution d'enseignement supérieur de l'Occident, il a développé un système philosophique d'une ampleur et d'une cohérence exceptionnelles.

La théorie des Idées (ou Formes) constitue le cœur de la pensée platonicienne. Platon distingue deux niveaux de réalité : le monde sensible, qui est le monde des apparences changeantes et imparfaites, et le monde intelligible, qui est le monde des Idées éternelles, immuables et parfaites. Les choses particulières que nous percevons ne sont que des copies, des images imparfaites des Idées qui leur correspondent. Ainsi, telle chose belle participe de l'Idée de Beauté, tel acte juste de l'Idée de Justice.

Cette théorie résout plusieurs problèmes philosophiques simultanément. Elle explique comment nous pouvons avoir des connaissances certaines : notre âme, avant son incarnation dans un corps, a contemplé les Idées ; apprendre, c'est se ressouvenir (anamnesis) de cette contemplation. Elle fonde également une éthique objective : le Bien existe comme Idée, indépendamment de nos opinions subjectives. Enfin, elle justifie la supériorité de la philosophie sur les autres activités : seul le philosophe, qui contemple les Idées, accède à la véritable réalité.

L'allégorie de la caverne illustre magnifiquement cette conception. Des humains enchaînés dans une caverne ne voient que des ombres projetées sur un mur, qu'ils prennent pour la réalité. Le philosophe est celui qui se libère, découvre le monde extérieur, le monde du soleil (symbole du Bien), et doit ensuite redescendre aider les autres à s'affranchir.

En politique, Platon développe dans "La République" une théorie de la justice appliquée à la cité. Une cité juste est une cité où chacun fait ce pour quoi il est naturellement apte : les gouvernants (philosophes-rois) détiennent le savoir, les guerriers (gardiens) défendent la cité, et les producteurs assurent les besoins matériels. Cette cité idéale se fonde sur une éducation rigoureuse, la communauté des biens pour les classes dirigeantes, et un programme eugéniste pour améliorer la race.

Platon a également abordé presque tous les domaines philosophiques : l'amour ("Le Banquet"), l'art ("Ion", "Hippias majeur"), le langage ("Cratyle"), la cosmologie ("Le Timée"), la constitution ("Les Lois"). Sa méthode philosophique, le dialogue dramatique où Socrate interroge ses interlocuteurs, reste un modèle de pensée critique.

L'influence de Platon est incalculable. Tout philosophe postérieur se situe par rapport à lui, que ce soit pour le suivre ou le critiquer. Le néo-platonisme de Plotin, la théologie chrétienne (saint Augustin), la philosophie médiévale, la Renaissance (Ficin), et même la philosophie moderne et contemporaine portent son empreinte. Whitehead affirmait que toute la philosophie occidentale ne consistait qu'en des notes de bas de page à Platon.`,
    mainMovements: ["Idéalisme", "Académisme"],
    disciplines: ["Métaphysique", "Épistémologie", "Éthique", "Politique", "Esthétique", "Cosmologie"],
    keyIdeas: {
      ideas: [
        "Théorie des Idées (ou Formes)",
        "Allégorie de la caverne",
        "Anamnesis : la connaissance comme réminiscence",
        "Philosophes-rois",
        "Tripartition de l'âme : raison, courage, désir",
        "Le Bien comme principe suprême"
      ],
      descriptions: [
        "Existence d'un monde intelligible de réalités parfaites",
        "Illustration de la distinction sensible/intelligible",
        "Apprendre c'est se ressouvenir des Idées contemplées",
        "Seuls les philosophes doivent gouverner",
        "L'âme a trois parties correspondant à trois classes sociales",
        "Le Bien est au-delà de l'être, source de toute réalité"
      ]
    },
    influences: {
      influencedBy: ["Socrate", "Pythagore", "Parménide", "Héraclite", "Orphisme"],
      influenced: ["Aristote", "Néo-platonisme", "Saint Augustin", "Philosophie médiévale", "Renaissance", "Toute la philosophie occidentale"]
    },
    majorWorks: [
      { title: "Apologie de Socrate", year: -399 },
      { title: "La République", year: -375 },
      { title: "Le Banquet", year: -380 },
      { title: "Phédon", year: -380 },
      { title: "Le Timée", year: -360 },
      { title: "Les Lois", year: -347 }
    ]
  },

  {
    name: "Aristote",
    slug: "aristote",
    fullName: "Aristote",
    birthYear: -384,
    deathYear: -322,
    birthPlace: "Stagire, Chalcidique (actuelle Grèce)",
    nationality: "Grec (macédonien)",
    century: "IVe siècle av. J.-C.",
    biography: `Aristote (384-322 av. J.-C.) est l'un des plus grands philosophes et savants de tous les temps. Né à Stagire, en Macédoine, il fut l'élève de Platon pendant vingt ans à l'Académie d'Athènes, avant de devenir le précepteur d'Alexandre le Grand. Fondateur du Lycée (l'école péripatéticienne), il a produit une œuvre encyclopédique couvrant pratiquement tous les domaines du savoir : philosophie, biologie, physique, logique, politique, éthique, esthétique, psychologie, et plus encore.

La critique aristotélicienne des Idées platoniciennes est le point de départ de sa propre philosophie. Pour Aristote, les Idées séparées des choses particulières sont inutiles et inexplicables. Il propose plutôt la théorie de l'hylémorphisme : toute substance est composée de matière (hylè) et de forme (morphè). La forme est ce qui fait qu'une chose est ce qu'elle est, son essence ; la matière est le substrat indéterminé qui reçoit la forme. Cette théorie permet d'expliquer le changement sans recourir à un monde séparé : le changement est le passage de la puissance à l'acte, l'actualisation d'une potentialité.

La métaphysique aristotélicienne étudie l'être en tant qu'être. Aristote identifie quatre causes explicatives : la cause matérielle (de quoi est faite une chose), la cause formelle (ce qui la fait être ce qu'elle est), la cause efficiente (ce qui la produit), et la cause finale (le but pour laquelle elle existe). Cette dernière, la téléologie, est particulièrement importante : tout dans la nature tend vers une fin, réalise sa nature ou son essence.

En logique, Aristote a fondé la discipline en tant que telle. Il développe la théorie du syllogisme (raisonnement déductif), invente le vocabulaire logique encore utilisé aujourd'hui (terme, prémisse, conclusion), et distingue différentes catégories de pensée. Ses "Organon" (instruments) resteront la référence en logique jusqu'au XIXe siècle.

Son éthique, exposée dans "L'Éthique à Nicomaque", se fonde sur la finalité naturelle de l'homme. Toute chose tend vers sa fin (telos), et la fin de l'homme est le bonheur (eudaimonia), compris comme vie conforme à la raison. La vertu est une disposition acquise par l'habitude, consistant dans le juste milieu entre excès et défaut. La vie heureuse est la vie contemplative, activité la plus élevée de la raison.

En politique, Aristote analyse et compare les constitutions des cités grecques. Il distingue les bonnes constitutions (monarchie, aristocratie, république) de leurs versions corrompues (tyrannie, oligarchie, démocratie). La meilleure constitution est celle de la classe moyenne, qui évite les excès des riches et des pauvres.

En biologie, Aristote réalise des observations minutieuses et des dissections. Il classe plus de 500 espèces animales, développe des théories sur la reproduction et l'embryologie, et propose une échelle des êtres du moins au plus parfait. Bien que certaines de ses théories soient fausses (notamment en génération spontanée), sa méthodologie empirique reste exemplaire.

L'influence d'Aristote est immense et durable. Dans l'Antiquité, son œuvre fut organisée et commentée par Théophraste et les péripatéticiens. Au Moyen Âge, après une période d'éclipse, elle fut redécouverte et intégrée à la théologie chrétienne (saint Thomas d'Aquin), juive (Maïmonide) et musulmane (Averroès). Jusqu'au XVIIe siècle, il reste "le Philosophe" par excellence, autorité en presque tous les domaines. La science moderne (Galilée, Newton) se construira en partie contre lui, mais sa logique et sa métaphysique continueront d'influencer la philosophie jusqu'à nos jours.`,
    mainMovements: ["Péripatétisme"],
    disciplines: ["Métaphysique", "Logique", "Éthique", "Politique", "Biologie", "Physique", "Psychologie", "Esthétique", "Rhétorique"],
    keyIdeas: {
      ideas: [
        "Hylémorphisme : matière et forme",
        "Quatre causes : matérielle, formelle, efficiente, finale",
        "Acte et puissance",
        "Le juste milieu éthique",
        "L'homme comme animal rationnel",
        "Téléologie : toute chose tend vers sa fin"
      ],
      descriptions: [
        "Toute substance est composée de matière et de forme",
        "Quatre types de causes expliquent toute réalité",
        "Le changement comme actualisation d'une potentialité",
        "La vertu est le milieu entre excès et défaut",
        "L'essence de l'homme est la raison",
        "La nature est finalisée, orientée vers des buts"
      ]
    },
    influences: {
      influencedBy: ["Platon", "Socrate", "Présocratiques", "Médecine hippocratique"],
      influenced: ["Théophraste", "École péripatéticienne", "Néo-aristotélisme", "Scolastique", "Saint Thomas d'Aquin", "Maïmonide", "Averroès", "Toute la philosophie médiévale"]
    },
    majorWorks: [
      { title: "L'Organon (traités de logique)", year: -350 },
      { title: "La Métaphysique", year: -340 },
      { title: "L'Éthique à Nicomaque", year: -340 },
      { title: "La Politique", year: -330 },
      { title: "De l'âme", year: -330 },
      { title: "Poétique", year: -335 },
      { title: "Physique", year: -345 }
    ]
  },

  // =============================================================================
  // HELLENISTIC PERIOD
  // =============================================================================

  {
    name: "Épicure",
    slug: "epicure",
    fullName: "Épicure",
    birthYear: -341,
    deathYear: -270,
    birthPlace: "Samos, Grèce",
    nationality: "Grec",
    century: "IVe-IIIe siècle av. J.-C.",
    biography: `Épicure (341-270 av. J.-C.) est un philosophe grec dont l'influence s'est étendue sur plus de sept siècles. Fondateur de l'école épicurienne, il proposa une philosophie du bonheur basée sur la recherche du plaisir entendu comme absence de trouble (ataraxie) et de douleur (aponie). Contrairement au sens courant du terme, l'épicurisme ne préconise pas les plaisirs sensuels excessifs mais une vie modérée, rationnelle, et centrée sur l'amitié.

La physique épicurienne, inspirée de Démocrite, affirme que tout est composé d'atomes et de vide. L'âme elle-même est matérielle, composée d'atomes particulièrement fins, et se dissout à la mort. Cette thèse a pour conséquence morale importante : il n'y a rien à craindre de la mort, puisque lorsque nous existons la mort n'est pas là, et quand la mort est là nous n'existons plus. "La mort n'est rien pour nous" devient ainsi une maxime libératrice.

En connaissance (épistémologie), Épicure défend un empirisme radical : toutes nos connaissances viennent des sens. La pensée ne fait que combiner des images venues des sensations. La canonique (critère de la vérité) repose sur trois critères : les sensations, les préconceptions (notions innées) et les sentiments (plaisir/douleur comme jugement de valeur).

L'éthique épicurienne est hédoniste mais raffinée. Le plaisir est le bien suprême, mais tous les plaisirs ne se valent pas. Il faut distinguer les plaisirs naturels et nécessaires (manger, boire, s'abriter), les plaisirs naturels mais non nécessaires (mets raffinés), et les plaisirs ni naturels ni nécessaires (gloire, richesse). Le sage recherche seulement les premiers, qui sont faciles à obtenir. Les désirs illimités (richesse, pouvoir) sont source d'angoisse et doivent être éliminés.

La vie épicurienne idéale se vit à l'écart de la politique, dans le "Jardin" (nom du lieu où Épicure enseignait), entouré d'amis fidèles. L'amitié est en effet une valeur centrale : "De toutes les choses que la sagesse procure pour le bonheur de la vie entière, la plus grande est la possession de l'amitié."

Épicure a également proposé une théologie originale : les dieux existent, vivent dans un état de bonheur parfait, mais ne s'occupent pas des humains. Les phénomènes naturels ont des causes naturelles, pas divines. Il faut se libérer de la crainte des dieux et de la mort pour atteindre la tranquillité de l'âme.

L'influence d'Épicure fut immense. Lucrèce, au Ier siècle av. J.-C., diffusa sa philosophie dans son poème "De la nature des choses". Au XVIIe siècle, Gassendi et Pierre Charron renouèrent avec l'épicurisme chrétien. Les Lumières (Diderot, d'Holbach) redécouvrirent le matérialisme épicurien, et Nietzsche voyait en Épicure un précurseur de sa philosophie de la vie.`,
    mainMovements: ["Épicurisme", "Atomisme"],
    disciplines: ["Éthique", "Physique", "Épistémologie", "Théologie"],
    keyIdeas: {
      ideas: [
        "Ataraxie et aponie : absence de trouble et de douleur",
        "Atomisme : tout est composé d'atomes et de vide",
        "La mort n'est rien pour nous",
        "Plaisirs naturels et nécessaires vs désirs vains",
        "L'amitié comme bien suprême",
        "Dieux heureux et indifférents aux humains"
      ],
      descriptions: [
        "Le bonheur est l'absence de trouble mental et physique",
        "La réalité est composée d'atomes se mouvant dans le vide",
        "Ne pas craindre la mort qui est dissolution de l'âme",
        "Seuls les désirs naturels nécessaires doivent être satisfaits",
        "L'amitié est la plus grande acquisition pour le bonheur",
        "Les dieux existent mais n'interviennent pas dans le monde humain"
      ]
    },
    influences: {
      influencedBy: ["Démocrite", "Aristippe de Cyrène", "Pyrrhon"],
      influenced: ["Lucrèce", "Philodème", "Sextus Empiricus", "Gassendi", "Les Lumières", "Nietzsche"]
    },
    majorWorks: [
      { title: "Lettre à Hérodote", year: -300 },
      { title: "Lettre à Pythoclès", year: -300 },
      { title: "Lettre à Ménécée", year: -300 },
      { title: "Maximes capitales", year: -300 }
    ]
  },

  {
    name: "Zénon de Citium",
    slug: "zenon-de-citium",
    fullName: "Zénon de Citium",
    birthYear: -334,
    deathYear: -262,
    birthPlace: "Citium, Chypre",
    nationality: "Grec",
    century: "IVe-IIIe siècle av. J.-C.",
    biography: `Zénon de Citium (env. 334-262 av. J.-C.) est le fondateur du stoïcisme, l'une des écoles philosophiques les plus influentes de l'Antiquité. Né à Chypre, il vint à Athènes où, après avoir étudié auprès de différents philosophes (notamment les cyniques et les mégariques), il fonda sa propre école sous les Portiques peints (Stoa Poikilè), donnant ainsi son nom au stoïcisme.

La philosophie de Zénon, organisée en trois parties (logique, physique, éthique), forme un système cohérent où chaque partie soutient les autres. La logique étudie la connaissance et le raisonnement, la physique la nature du monde, et l'éthique la conduite de vie. Cette structure encyclopédique influencera la division traditionnelle de la philosophie.

En logique, Zénon développa une théorie de la connaissance empiriste. Les sens nous donnent des informations fiables sur le monde. La mémoire combine ces informations, et l'expérience produit des concepts généraux. La raison peut alors développer des connaissances plus abstraites. Zénon a également contribué à la logique des propositions, inventant des concepts qui seront repris par la logique moderne.

Sa physique, inspirée d'Héraclite, conçoit l'univers comme un être vivant divin, pénétré par un principe ordonnateur : le logos ou pneuma (souffle/feu). Ce logos est à la fois raison divine, loi naturelle, et principe vital. Tout dans l'univers est gouverné par le logos selon un plan rationnel providentiel. Le cosmos éternel subit des cycles de conflagration (feu cosmique) et renaissance.

L'éthique stoïcienne est centrée sur la vertu comme seul bien. Seul ce qui dépend de nous (nos jugements, nos désirs, nos actions) est un bien véritable ; tout le reste (santé, richesse, réputation) sont des "indifférents" qu'il ne faut ni rechercher ni fuir pour eux-mêmes. La vertu réside dans la vie conforme à la nature, c'est-à-dire à la raison qui anime le cosmos.

Zénon développe le concept de "ce qui dépend de nous" (eph' hēmin), qui deviendra central dans la pensée stoïcienne. Seules nos attitudes intérieures sont sous notre contrôle ; tout le reste relève du destin. La sagesse consiste à distinguer ce qui dépend de nous de ce qui ne dépend pas de nous, et à accepter avec sérénité ce qui ne dépend pas de nous.

En politique, Zénon proposa dans sa "République" une utopie cosmopolite : tous les humains, et même tous les êtres rationnels, sont citoyens d'une même cité universelle. Cette idée de cosmopolitisme, révolutionnaire pour l'époque, influencera profondément la pensée politique ultérieure.

L'influence de Zénon est immense. Le stoïcisme deviendra la philosophie dominante du monde romain, à travers des figures comme Sénèque, Épictète et Marc Aurèle. Sa conception du logos influencera le christianisme (l'Évangile de Jean). Son éthique de la maîtrise de soi et de l'acceptation du destin inspirera la philosophie moderne, de Spinoza à l'existentialisme.`,
    mainMovements: ["Stoïcisme"],
    disciplines: ["Logique", "Physique", "Éthique", "Politique"],
    keyIdeas: {
      ideas: [
        "Logos comme principe ordonnateur du cosmos",
        "Vertu comme seul bien véritable",
        "Ce qui dépend de nous vs ce qui ne dépend pas de nous",
        "Cosmopolitisme : citoyenneté universelle",
        "Conformité à la nature comme idéal éthique",
        "Cycles de conflagration cosmique"
      ],
      descriptions: [
        "Un souffle/feu rationnel pénètre et ordonne l'univers",
        "Seule la vertu est un bien, tout le reste est indifférent",
        "Seuls nos jugements et volontés sont sous notre contrôle",
        "Tous les êtres rationnels sont citoyens du monde",
        "Vivre selon la raison qui anime la nature",
        "L'univers renaît périodiquement du feu cosmique"
      ]
    },
    influences: {
      influencedBy: ["Héraclite", "Cynisme", "Diogène", "Mégariques"],
      influenced: ["Stoïcisme romain", "Sénèque", "Épictète", "Marc Aurèle", "Christianisme", "Spinoza", "Existentialisme"]
    },
    majorWorks: [
      { title: "République (perdue)", year: -300 },
      { title: "Traité de la nature humaine (perdu)", year: -290 },
      { title: "Traités logiques (perdus)", year: -280 },
      { title: "Contre les philosophes (perdu)", year: -270 }
    ]
  },

  {
    name: "Pyrrhon",
    slug: "pyrrhon",
    fullName: "Pyrrhon d'Élis",
    birthYear: -360,
    deathYear: -270,
    birthPlace: "Élis, Péloponnèse (actuelle Grèce)",
    nationality: "Grec",
    century: "IVe-IIIe siècle av. J.-C.",
    biography: `Pyrrhon d'Élis (env. 360-270 av. J.-C.) est le fondateur du scepticisme philosophique, l'école qui prône la suspension du jugement (epochè) comme voie vers la tranquillité de l'âme (ataraxie). Sa vie et sa pensée nous sont connues principalement à travers son disciple Timon et les témoignages de Sextus Empiricus.

Philosophe original et radicalement critique, Pyrrhon a développé une position philosophique d'une cohérence exemplaire. Son scepticisme n'est pas un doute méthodique mais une attitude existentielle : face à l'impossibilité de connaître la vérité ultime des choses, le sage suspend tout jugement dogmatique et atteint ainsi la paix intérieure.

La philosophie de Pyrrhon repose sur trois principes fondamentaux. Premièrement, pour toute chose, il y a des arguments contradictoires aussi convaincants les uns que les autres. Deuxièmement, il est impossible de trancher entre ces arguments. Troisièmement, face à cette impossibilité, la seule attitude sage est la suspension du jugement (epochè).

Cette suspension du jugement ne signifie pas l'inaction. Pyrrhon distinguait entre les apparences (phénomènes) et la réalité des choses (hypothèses dogmatiques). Nous pouvons vivre selon les apparences, suivant nos sensations, nos inclinations, et les coutumes de notre société, sans affirmer pour autant que les choses sont réellement telles qu'elles nous apparaissent. Pyrrhon vivait ainsi de manière parfaitement ordinaire, sans négliger aucun devoir pratique.

Le but de cette philosophie est l'ataraxie, l'absence de trouble. Pyrrhon avait observé que les dogmatiques (ceux qui prétendent connaître la vérité) sont tourmentés par leurs certitudes et la crainte de se tromper. En suspendant tout jugement sur la réalité ultime des choses, le sceptique se libère de ces tourments. "Comme pour les peintres, nous ne pouvons rien dire de ce qui est dans la nature des objets, mais nous nous contentons des apparences."

Pyrrhon accompagna Alexandre le Grand dans ses expéditions, où il observa les différentes coutumes des peuples rencontrés. Cette expérience de relativisme culturel renforça sa conviction que toute prétention à une vérité universelle est illusoire.

Sa pensée diffère du scepticisme académique (Arcésilas, Carnéade) qui utilisait le doute comme argument dialectique dans l'Académie platonicienne. Le scepticisme de Pyrrhon est plus radical et plus existential : il ne s'agit pas d'un instrument de critique mais d'une manière de vivre.

L'influence de Pyrrhon se poursuit à travers son disciple Timon, puis à travers Enésidème (Ier siècle av. J.-C.) et Sextus Empiricus (IIe-IIIe siècle apr. J.-C.). Au XVIIe siècle, la redécouverte du scepticisme par Michel de Montaigne et David Hume révolutionnera la philosophie moderne. Montaigne particulièrement verra en Pyrrhon un modèle de sagesse pratique.

Pyrrhon reste, par sa radicalité et sa cohérence, l'un des philosophes les plus fascinants de l'Antiquité, montrant que la sagesse peut résider non dans la possession de vérités certaines mais dans l'acceptation lucide de l'incertitude fondamentale de la condition humaine.`,
    mainMovements: ["Scepticisme"],
    disciplines: ["Épistémologie", "Éthique", "Métaphysique"],
    keyIdeas: {
      ideas: [
        "Suspension du jugement (epochè)",
        "Isosthénie : égalité de force des arguments opposés",
        "Ataraxie comme but de la philosophie",
        "Distinction entre apparences et réalité",
        "Impossibilité de connaître la nature ultime des choses",
        "Vie pratique sans dogmes"
      ],
      descriptions: [
        "S'abstenir de toute affirmation dogmatique",
        "Tout argument peut être opposé par un argument contraire",
        "La tranquillité de l'âme résulte de l'absence de certitudes",
        "Vivre selon les apparences sans juger de la réalité",
        "La vérité ultime est inaccessible à l'homme",
        "On peut vivre normalement sans croyances métaphysiques"
      ]
    },
    influences: {
      influencedBy: ["Démocrite", "Médecine empirique", "Socrate"],
      influenced: ["Timon de Phlionte", "Enésidème", "Sextus Empiricus", "Montaigne", "Hume", "Scepticisme moderne"]
    },
    majorWorks: [
      { title: "Œuvre (perdue, connue par Timon)", year: -320 }
    ]
  },

  {
    name: "Diogène de Sinope",
    slug: "diogene-de-sinope",
    fullName: "Diogène de Sinope",
    birthYear: -412,
    deathYear: -323,
    birthPlace: "Sinope, Pont (actuelle Turquie)",
    nationality: "Grec",
    century: "IVe siècle av. J.-C.",
    biography: `Diogène de Sinope (env. 412-323 av. J.-C.), surnommé "le Cynique", est l'une des figures les plus provocantes et originales de l'Antiquité grecque. Fondateur du cynisme philosophique avec Antisthène, il a vécu selon des principes d'une radicalité qui a fasciné ses contemporains et continue d'inspirer la pensée critique.

Exilé de Sinope pour avoir falsifié la monnaie (selon la rumeur), Diogène vint à Athènes où il devint disciple d'Antisthène, lui-même élève de Socrate. Il poussa les principes socratiques à leur extrême logique : si la vertu est le seul bien, et si cette vertu consiste à se connaître soi-même et à vivre selon sa nature, alors il faut rejeter toutes les conventions sociales qui nous éloignent de notre naturel.

Diogène vécut comme un chien (kynikos en grec) : dans la rue, dormant dans un tonneau (ou une grande jarre), mendiant sa nourriture, possédant seulement un manteau, un bâton et une besace. Ce mode de vie n'était pas une misère subie mais un choix délibéré, une "performance philosophique" visant à montrer que le bonheur réside dans la simplicité et l'autosuffisance (autarkeia), non dans les richesses et les honneurs.

Ses provocations étaient légendaires. Il se promenait en plein jour avec une lanterne, disant "je cherche un homme" - signifiant qu'il ne trouvait que des masques sociaux, pas d'êtres humains authentiques. Lorsqu'Alexandre le Grand lui demanda ce qu'il pouvait faire pour lui, Diogène répondit : "Ôte-toi de mon soleil." Alexandre aurait alors dit : "Si je n'étais pas Alexandre, je voudrais être Diogène."

Sa philosophie se fonde sur plusieurs principes. D'abord, le naturalisme : la vie conforme à la nature est la vie bonne. La nature veut que nous satisfassions nos besoins élémentaires (faim, soif, sommeil) sans complication. Ensuite, l'autosuffisance : le sage ne dépend de rien ni de personne. Enfin, la parrhèsia (franchise) : dire vrai sans crainte des conventions ni du pouvoir.

Diogène développait une critique radicale de la civilisation. Les institutions humaines (famille, État, religion, propriété, monnaie) sont des conventions arbitraires qui nous aliènent. Les distinctions sociales (roi/esclave, Grec/Barbare, libre/non libre) sont illégitimes : seul compte l'excellence personnelle. Diogène affirmait ainsi son universalisme cosmopolite avant la lettre : "Je suis citoyen du monde" (kosmopolitès).

Sa morale est pragmatique : il prônait la liberté sexuelle, le naturalisme corporel (il se masturbait en public), et rejetait le mariage et la famille conventionnels. Pourtant, il n'était pas hédoniste : le plaisir n'est pas le bien, le bien est la vie selon la nature.

L'influence de Diogène est considérable, quoique paradoxale. Les stoïciens (notamment Zénon) et les sceptiques admirèrent son autosuffisance et son rejet des conventions. Les Pères de l'Église célébrèrent son ascèse et sa critique des idoles. Les philosophes modernes, de Rousseau à Nietzsche en passant par Foucault, ont vu en lui une figure de la résistance critique à la normalisation sociale.

Diogène reste le symbole de la liberté philosophique absolue : celle qui ose vivre selon ses principes quoi qu'en pensent les autres, et qui démontre par son exemple que le bonheur réside dans la simplicité et l'authenticité plutôt que dans la richesse et la reconnaissance sociale.`,
    mainMovements: ["Cynisme"],
    disciplines: ["Éthique", "Politique", "Critique sociale"],
    keyIdeas: {
      ideas: [
        "Vie selon la nature",
        "Autosuffisance (autarkeia)",
        "Rejet des conventions sociales",
        "Cosmopolitisme",
        "Parrhèsia (franchise du discours)",
        "Simplicité volontaire"
      ],
      descriptions: [
        "Le bien consiste à vivre selon sa nature humaine",
        "Le sage ne dépend de rien ni de personne",
        "Les institutions humaines sont des conventions arbitraires",
        "Je suis citoyen du monde, pas d'une cité particulière",
        "Dire vrai sans crainte ni compromis",
        "Le bonheur réside dans la satisfaction des besoins naturels"
      ]
    },
    influences: {
      influencedBy: ["Socrate", "Antisthène", "Héraclite"],
      influenced: ["Stoïcisme", "Cratès de Thèbes", "Zénon de Citium", "Rousseau", "Nietzsche", "Anarchisme moderne"]
    },
    majorWorks: [
      { title: "Traités (perdus, connus par Diogène Laërce)", year: -350 },
      { title: "La République (perdue)", year: -340 },
      { title: "Lettres (apocryphes)", year: -320 }
    ]
  }
];

// Export functions for data access
export function getAncientGreekPhilosopherBySlug(slug: string): PhilosopherData | undefined {
  return ancientGreekPhilosophers.find(p => p.slug === slug);
}

export function getAncientGreekPhilosophersByMovement(movement: string): PhilosopherData[] {
  return ancientGreekPhilosophers.filter(p => p.mainMovements.includes(movement));
}

export function getAncientGreekPhilosophersByCentury(century: string): PhilosopherData[] {
  return ancientGreekPhilosophers.filter(p => p.century === century);
}

export function getPreSocratics(): PhilosopherData[] {
  return ancientGreekPhilosophers.filter(p =>
    p.mainMovements.includes("Présocratique") ||
    p.mainMovements.includes("École de Milet") ||
    p.mainMovements.includes("École pythagoricienne") ||
    p.mainMovements.includes("Éléatisme") ||
    p.mainMovements.includes("Atomisme")
  );
}

export function getClassicalPhilosophers(): PhilosopherData[] {
  return ancientGreekPhilosophers.filter(p =>
    p.mainMovements.includes("Philosophie classique athénienne") ||
    p.mainMovements.includes("Idéalisme") ||
    p.mainMovements.includes("Académisme") ||
    p.mainMovements.includes("Péripatétisme")
  );
}

export function getHellenisticPhilosophers(): PhilosopherData[] {
  return ancientGreekPhilosophers.filter(p =>
    p.mainMovements.includes("Épicurisme") ||
    p.mainMovements.includes("Stoïcisme") ||
    p.mainMovements.includes("Scepticisme") ||
    p.mainMovements.includes("Cynisme")
  );
}
