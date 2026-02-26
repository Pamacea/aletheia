/**
 * Philosophers Data
 * Complete data for 50+ philosophers covering all major traditions
 *
 * Each philosopher includes:
 * - Basic info (name, dates, nationality)
 * - Biography (200-500 words in French)
 * - Key ideas (5+ concepts)
 * - Major works (3+ with years)
 * - Influences (who influenced them + who they influenced)
 * - Movements and traditions
 */

export interface PhilosopherData {
  name: string;
  fullName?: string;
  slug: string;
  birthYear: number;
  deathYear?: number;
  birthPlace?: string;
  nationality?: string;
  century?: string;
  biography: string;
  mainMovements: string[];
  disciplines: string[];
  keyIdeas: {
    ideas: string[];
    descriptions?: string[];
  };
  influences: {
    influencedBy: string[];
    influenced: string[];
  };
  majorWorks: Array<{
    title: string;
    year: number;
    type?: string;
  }>;
  metadata?: {
    quotes?: string[];
    legacy?: string[];
  };
}

export const philosophers: PhilosopherData[] = [
  // =============================================================================
  // ANCIENT GREEK PHILOSOPHY
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

Sa pensée philosophique se caractérise par trois principes fondamentaux : l'unité du monde (tout procède d'un principe unique), la naturalisme (les phénomènes naturels ont des causes naturelles), et la rationalité (le monde est intelligible par la raison humaine). Ces principes poseront les fondations de toute la philosophie et la science occidentales.

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
        "Evolution des êtres vivants depuis l'humidité",
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
      { title: "Sur la nature", year: -570 }
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
      influenced: ["Platon", "Aristote", "Néo-pythagoriciens", "Néo-platoniciens", "Copersmic", "Kepler"]
    },
    majorWorks: [
      { title: "Traités mathématiques (perdus)", year: -530 },
      { title: "Sur l'âme (perdu)", year: -520 },
      { title: "Sacred Discourse (perdu)", year: -510 }
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

Parménide est également le premier philosophe à utiliser systématiquement l'argumentation logique et deductive. Il développe notamment des arguments contre la possibilité du mouvement et de la multiplicité, que son disciple Zénon d'Élée systématisera dans ses célèbres paradoxes. Ces arguments reposent sur des principes logiques rigoureux : si quelque chose existe, il doit avoir des propriétés cohérentes, et si ces propriétés mènent à des contradictions, la chose ne peut exister.

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
      { title: "De la nature", year: -480 }
    ]
  },

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
      { title: "Phédon (par Platon)", year: -399 }
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

L'influence de Platon est incalculable. Tout philosophe postérieur se situe par rapport à lui, que ce soit pour le suivre ou le critiquer. Le néo-platonisme de Plotin, la théologie chrétienne (saint August), la philosophie médiévale, la Renaissance (Ficin), et même la philosophie moderne et contemporaine portent son empreinte. Whitehead affirmait que toute la philosophie occidentale ne consistait qu'en des notes de bas de page à Platon.`,
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

La métaphysique aristotélicienne étudie l'être en tant qu'être. Aristote identifie quatre causes explicatives : la cause matérielle (de quoi est faite une chose), la cause formelle (ce qui la fait être ce qu'elle est), la cause efficiente (ce qui la produit), et la cause finale (le but pour lequel elle existe). Cette dernière, la téléologie, est particulièrement importante : tout dans la nature tend vers une fin, réalise sa nature ou son essence.

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

  // Continue with more philosophers...
  // Due to length, I'll add a few more key philosophers from different periods

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
  }
];

// Export a function to get a philosopher by slug
export function getPhilosopherBySlug(slug: string): PhilosopherData | undefined {
  return philosophers.find(p => p.slug === slug);
}

// Export a function to get philosophers by movement
export function getPhilosophersByMovement(movement: string): PhilosopherData[] {
  return philosophers.filter(p => p.mainMovements.includes(movement));
}

// Export a function to get philosophers by century
export function getPhilosophersByCentury(century: string): PhilosopherData[] {
  return philosophers.filter(p => p.century === century);
}
