/**
 * Medieval and Renaissance Philosophers Data
 * Complete data for 13 philosophers from Medieval and Renaissance periods
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

export const medievalRenaissancePhilosophers: PhilosopherData[] = [
  // =============================================================================
  // MEDIEVAL PHILOSOPHY (5th-15th centuries)
  // =============================================================================

  {
    name: "Augustin d'Hippone",
    slug: "augustin-d-hippone",
    fullName: "Augustin d'Hippone (Saint Augustin)",
    birthYear: 354,
    deathYear: 430,
    birthPlace: "Thagaste (actuelle Souk Ahras, Algérie)",
    nationality: "Romain (Afrique romaine)",
    century: "IVe-Ve siècle",
    biography: `Augustin d'Hippone (354-430), l'un des Pères de l'Église latine et docteur de l'Église, est sans conteste le philosophe le plus influent de l'Antiquité tardive et du Moyen Âge. Né à Thagaste en Numidie (actuelle Algérie) d'un père païen et d'une mère chrétienne, sainte Monique, Augustin a parcouru un itinéraire intellectuel et spirituel remarquable qui allait marquer profondément toute la philosophie occidentale.

Sa jeunesse fut celle d'un intellectuel passionné, séduit par le manichéisme qui proposait une explication dualiste du mal, puis par le scepticisme académique. Professeur de rhétorique à Carthage, puis à Rome et à Milan, il ne trouva la paix intérieure qu'à travers sa conversion au christianisme en 386, racontée dans ses "Confessions", première œuvre autobiographique de l'histoire de la philosophie.

La pensée augustinienne représente la synthèse la plus ambitieuse entre la philosophie grecque (particulièrement Platon et le néo-platonisme de Plotin) et la révélation chrétienne. Augustin reprend à Platon la distinction entre monde sensible et monde intelligible, mais l'interprète à la lumière de la doctrine chrétienne : le monde intelligible est celui de Dieu, les idées divines sont les modèles selon lesquels Dieu a créé le monde.

Sa théorie de la connaissance repose sur l'illumination divine : notre esprit ne peut connaître les vérités éternelles que parce que Dieu l'éclaire. Cette thèse résout le problème sceptique : nous pouvons être certains de nos connaissances parce que Dieu en est garant. "Si fallor, sum" (si je me trompe, je suis) formule ainsi la première certitude indubitable, qui inspirera Descartes.

En anthropologie, Augustin développe une conception originale de l'homme comme être créé à l'image de Dieu, mais déchu par le péché originel. Sa volonté, blessée par le péché, a besoin de la grâce divine pour être guérie. Cette tension entre liberté humaine et grâce divine sera au cœur de toutes les débats théologiques médiévaux et de la Réforme.

Sa philosophie de l'histoire, exposée dans "La Cité de Dieu", est la première grande philosophie de l'histoire. Elle oppose la cité terrestre (société des hommes qui aiment le monde) à la cité céleste (société des hommes qui aiment Dieu), montrant comment l'histoire humaine est le théâtre de leur conflit et de leur accomplissement eschatologique.

L'influence d'Augustin est immense et durable. Il a façonné toute la théologie chrétienne occidentale, inspiré les grands mystiques médiévaux, et influencé des philosophes aussi divers que saint Anselme, saint Thomas, Luther, Calvin, Kierkegaard, et même des penseurs modernes comme Heidegger et Wittgenstein.`,
    mainMovements: ["Patristique", "Néo-platonisme chrétien", "Philosophie médiévale"],
    disciplines: ["Métaphysique", "Théologie", "Anthropologie", "Philosophie de l'histoire", "Épistémologie", "Éthique"],
    keyIdeas: {
      ideas: [
        "Théorie de l'illumination divine",
        "Cité de Dieu vs cité des hommes",
        "Doctrine de la grâce et du libre arbitre",
        "Péché originel et nature blessée de la volonté",
        "Mémoire, intelligence, amour (trinité psychologique)",
        "Si fallor, sum (certitude de l'existence)",
        "Le temps comme distension de l'âme",
        "Intériorité comme lieu de rencontre avec Dieu"
      ],
      descriptions: [
        "La connaissance des vérités éternelles requiert l'illumination divine",
        "Deux cités s'opposent dans l'histoire : celle de Dieu et celle des hommes",
        "La liberté humaine coopère avec la grâce divine pour le salut",
        "Le péché originel a blessé la volonté humaine sans la détruire",
        "L'âme humaine reflète la Trinité divine par ses trois facultés",
        "L'erreur elle-même témoigne de l'existence du sujet pensant",
        "Le temps n'est pas une chose mais une distension de l'âme",
        "Dieu réside au plus intime de l'homme (intimior mea meo)"
      ]
    },
    influences: {
      influencedBy: ["Platon", "Plotin", "Néo-platonisme", "Saint Paul", "Manichéisme", "Scepticisme académique"],
      influenced: ["Saint Anselme", "Saint Thomas d'Aquin", "Scolastique", "Martin Luther", "Jean Calvin", "Blaise Pascal", "Søren Kierkegaard", "Philosophie de l'existence"]
    },
    majorWorks: [
      { title: "Les Confessions", year: 397, type: "Autobiographie spirituelle" },
      { title: "La Cité de Dieu", year: 426, type: "Philosophie de l'histoire" },
      { title: "De la Trinité", year: 416, type: "Théologie" },
      { title: "Les Révisions", year: 427, type: "Autocritique" },
      { title: "De la liberté de l'arbitre", year: 395, type: "Philosophie morale" }
    ]
  },

  {
    name: "Boèce",
    slug: "boece",
    fullName: "Anicius Manlius Severinus Boethius",
    birthYear: 480,
    deathYear: 524,
    birthPlace: "Rome, Italie",
    nationality: "Romain",
    century: "Ve-VIe siècle",
    biography: `Boèce (480-524), philosophe, théologien et homme d'État romain, est une figure charnière entre l'Antiquité et le Moyen Âge. Né dans une famille aristocratique romaine, il reçut une éducation exceptionnelle et fut appelé "le dernier des Romains et le premier des scolastiques". Sa vie, brutalement interrompue par son exécution ordonnée par le roi ostrogoth Théodoric, n'en a pas moins produit une œuvre d'une influence considérable.

Le projet monumental de Boèce était de traduire en latin toutes les œuvres d'Aristote et de Platon, et de montrer leur accord fondamental. Bien qu'il n'ait pu réaliser qu'une partie de ce programme, ses traductions et commentaires d'Aristote (notamment sur la logique) ont assuré la transmission de la pensée aristotélicienne au Moyen Âge. Sans Boèce, une grande partie de la logique aristotélicienne aurait été perdue pour l'Occident latin.

Son œuvre la plus célèbre, "La Consolation de la philosophie", écrite en prison alors qu'il attendait son exécution, est un dialogue entre le prisonnier désespéré et la Philosophie personnifiée. Ce texte mêle prose et vers, et offre une méditation profonde sur le bonheur, la fortune, la providence, le destin, et la liberté humaine. La thèse centrale est que le vrai bonheur ne se trouve pas dans les biens extérieurs (richesse, pouvoir, gloire) qui sont fragiles et incertains, mais dans le bien suprême qui est Dieu lui-même.

Boèce y aborde le problème classique du mal : comment un Dieu tout-puissant et bon peut-il permettre le mal ? Sa solution, qui influencera toute la théologie médiévale, distingue la providence divine (la raison divine qui voit tout dans son éternité) du destin (l'ordre des causes secondes qui gouverne le monde). Ce qui apparaît comme mal du point de vue humain s'inscrit dans un plan divin que nous ne saisissons pas.

En logique, Boèce a apporté des contributions fondamentales. Il a développé la théorie des "topics" (lieux communs) de la rhétorique aristotélicienne, distingué différents types de propositions conditionnelles, et formulé le problème des "futurs contingents" : si une proposition sur le futur est vraie maintenant, comment le futur peut-il être contingent ? Sa solution, distinguant la nécessité conditionnelle de la nécessité absolue, ouvrit la voie aux débats sur la prescience divine et la liberté humaine.

En théologie, ses "Opuscules sacrés" abordent des questions christologiques et trinitaires qui auront une grande influence. Il définit la personne comme "nature individuelle rationnelle de substance divine", définition qui deviendra classique en théologie trinitaire.

L'influence de Boèce est immense et multiforme. Pendant tout le Moyen Âge, il fut l'une des principales autorités en logique avec Aristote. Sa "Consolation" fut l'un des textes les plus lus et commentés, traduisant notamment en vieil anglais par Alfred le Grand et en français par Christine de Pizan. Dante le place dans le Paradis de sa "Divine Comédie". Sa distinction providence/destin nourrira toute la réflexion médiévale sur la liberté divine et humaine.`,
    mainMovements: ["Néo-platonisme", "Philosophie médiévale", "Scolastique naissante"],
    disciplines: ["Logique", "Métaphysique", "Théologie", "Philosophie de la providence"],
    keyIdeas: {
      ideas: [
        "Providence vs destin",
        "La personne comme nature rationnelle individuelle",
        "Futurs contingents et nécessité conditionnelle",
        "Le bonheur comme possession du bien suprême (Dieu)",
        "Traduction et transmission d'Aristote en Occident",
        "Unité de Platon et Aristote",
        "La fortune comme roue changeante",
        "Liberté humaine et prescience divine"
      ],
      descriptions: [
        "La providence divine est le plan éternel de Dieu, le destin son exécution temporelle",
        "Définition classique de la personne en théologie trinitaire",
        "Distinction entre nécessité absolue et nécessité conditionnelle",
        "Le vrai bonheur ne peut être trouvé que dans le bien suprême",
        "Traduction des œuvres logiques d'Aristote en latin",
        "Accord fondamental entre Platon et Aristote malgré leurs différences",
        "Les biens terrestres sont changeants comme la roue de la fortune",
        "Dieu connaît nos choix futurs sans les déterminer"
      ]
    },
    influences: {
      influencedBy: ["Aristote", "Platon", "Néo-platonisme", "Proclus", "Christianisme"],
      influenced: ["Scolastique médiévale", "Saint Thomas d'Aquin", "Jean Scot Érigène", "Dante Alighieri", "Alfred le Grand", "Christine de Pizan"]
    },
    majorWorks: [
      { title: "La Consolation de la philosophie", year: 524, type: "Dialogue philosophique" },
      { title: "Commentaires sur l'Organon d'Aristote", year: 510, type: "Commentaire" },
      { title: "Opuscules sacrés (traités théologiques)", year: 520, type: "Théologie" },
      { title: "De l'interprétation (traduction et commentaire)", year: 515, type: "Logique" }
    ]
  },

  {
    name: "Anselme de Cantorbéry",
    slug: "anselme-de-cantobery",
    fullName: "Saint Anselme de Cantorbéry",
    birthYear: 1033,
    deathYear: 1109,
    birthPlace: "Aoste (actuelle Italie)",
    nationality: "Italien (Royaume des Francs)",
    century: "XIe-XIIe siècle",
    biography: `Anselme de Cantorbéry (1033-1109), moine bénédictin, philosophe et théologien, est l'une des figures les plus importantes de la philosophie médiévale. Né à Aoste dans une famille noble, il quitte l'Italie pour la France, devient moine au Bec en Normandie, puis abbé du monastère avant d'être nommé archevêque de Cantorbéry en Angleterre. Docteur de l'Église, il est considéré comme le père de la scolastique médiévale.

La caractéristique principale de la pensée anselmienne est sa confiance absolue dans la raison humaine combinée à une profonde foi chrétienne. Sa devise "Fides quaerens intellectum" (la foi cherchant l'intelligence) résume parfaitement son projet : comprendre rationnellement ce que l'on croit, non pour prouver la foi mais pour en approfondir la compréhension.

L'argument ontologique pour l'existence de Dieu, exposé dans le "Proslogion", est sa contribution la plus célèbre à la philosophie. Anselme part de l'idée de Dieu comme "aliquid quo nihil majus cogitari possit" (celui dont rien de plus grand ne peut être pensé). Il soutient que cette idée existe nécessairement dans l'entendement, mais que si elle n'existait que dans l'entendement, nous pourrions penser à quelque chose de plus grand (cette même idée existant aussi dans la réalité). Donc l'idée de Dieu doit nécessairement inclure son existence réelle. Dieu est "celui qui ne peut pas ne pas être" (id quo majus cogitari non potest).

Cet argument, purement a priori et indépendant de l'expérience sensible, a suscité d'innombrables débats. Gaunilon, un contemporain d'Anselme, objecta que l'argument pourrait prouver l'existence de n'importe quelle chose parfaite (comme une île parfaite). Anselme répondit que seul l'être nécessaire (Dieu) peut être pensé ainsi, non les êtres contingents. Plus tard, Thomas d'Aquin critiqua l'argument, tandis que Descartes, Leibniz et Hegel le défendraient avec des variantes. Kant en proposa la critique la plus célèbre, arguant que l'existence n'est pas une propriété réelle.

Dans le "Cur Deus Homo" (Pourquoi Dieu s'est-il fait homme), Anselme propose une théorie originale de la rédemption. Le péché humain a offensé l'honneur infini de Dieu ; seule une satisfaction infinie peut réparer cette offense. Mais seul Dieu peut offrir une satisfaction infinie, et seul un homme doit la offrir (puisque c'est l'homme qui a péché). D'où la nécessité de l'Incarnation : Jésus-Christ, vrai Dieu et vrai homme, offre la satisfaction parfaite. Cette théorie dite "de satisfaction" influencera profondément la théologie occidentale jusqu'à la Réforme.

Anselme a également contribué à la théologie trinitaire avec son "De processione Spiritus Sancti", défendant la procession du Saint-Esprit "ex Patre Filioque" (du Père et du Fils), thèse qui deviendrait un point de conflit entre l'Église latine et l'Église orthodoxe.

En exégèse biblique, Anselme pratiqua une lecture allégorique et spirituelle de l'Écriture, cherchant les sens cachés sous la lettre. Ses prières et méditations témoignent d'une spiritualité profonde et personnelle.

L'influence d'Anselme est immense. Père de la scolastique, il établit la méthode de la quaestio (question disputée) et l'usage systématique de la raison théologique. Son argument ontologique reste l'un des débats philosophiques les plus célèbres. Sa théorie de la satisfaction structura la doctrine du salut occidentale jusqu'à nos jours.`,
    mainMovements: ["Scolastique", "Théologie chrétienne", "Realisme"],
    disciplines: ["Métaphysique", "Théologie", "Philosophie de la religion", "Logique"],
    keyIdeas: {
      ideas: [
        "Argument ontologique pour l'existence de Dieu",
        "Fides quaerens intellectum (foi cherchant l'intelligence)",
        "Théorie de la satisfaction pour la rédemption",
        "Dieu comme 'celui dont rien de plus grand ne peut être pensé'",
        "Nécessité de l'Incarnation",
        "Raison et foi comme complémentaires",
        "Procession du Saint-Esprit ex Patre Filioque"
      ],
      descriptions: [
        "Preuve a priori de l'existence de Dieu à partir de son concept",
        "La foi cherche à comprendre rationnellement ce qu'elle croit",
        "Le Christ offre satisfaction pour le péché humain",
        "Définition de Dieu comme étant parfait",
        "Le salut nécessite quelqu'un qui soit à la fois Dieu et homme",
        "La raison sert la foi sans la remplacer",
        "Le Saint-Esprit procède du Père et du Fils"
      ]
    },
    influences: {
      influencedBy: ["Saint Augustin", "Boèce", "Pseudo-Denys l'Aréopagite", "Bible", "Monachisme bénédictin"],
      influenced: ["Scolastique médiévale", "Saint Thomas d'Aquin", "Duns Scot", "Descartes", "Leibniz", "Hegel", "Kant (critique)", "Théologie de la rédemption"]
    },
    majorWorks: [
      { title: "Monologion", year: 1076, type: "Méditation métaphysique" },
      { title: "Proslogion", year: 1078, type: "Méditation et argument ontologique" },
      { title: "Cur Deus Homo (Pourquoi Dieu s'est-il fait homme)", year: 1094, type: "Théologie de la rédemption" },
      { title: "De la vérité", year: 1080, type: "Philosophie de la connaissance" },
      { title: "De la liberté de l'arbitre", year: 1085, type: "Philosophie morale" },
      { title: "De la procession du Saint-Esprit", year: 1102, type: "Théologie trinitaire" }
    ]
  },

  {
    name: "Avicenne",
    slug: "avicenne",
    fullName: "Ibn Sina (Avicenne)",
    birthYear: 980,
    deathYear: 1037,
    birthPlace: "Boukhara (actuelle Ouzbékistan)",
    nationality: "Persan (Empire samanide)",
    century: "Xe-XIe siècle",
    biography: `Avicenne (Ibn Sina, 980-1037) est l'un des plus grands philosophes et médecins de l'histoire de l'humanité. Né près de Boukhara dans l'actuel Ouzbékistan, ce prodige qui aurait mémorisé le Coran à dix ans et étudié la médecine à seize, allait devenir une figure centrale de la philosophie islamique et exercer une influence immense sur la pensée médiévale, tant en Orient qu'en Occident.

Son œuvre encyclopédique comprend plus de 250 ouvrages couvrant la philosophie, la médecine, la psychologie, la géologie, les mathématiques, la physique, et l'astronomie. Son "Canon de la médecine" restera le texte de référence médicale dans les universités européennes jusqu'au XVIIe siècle, traduit en latin au XIIe siècle et enseigné à Montpellier, Padoue et Louvain.

En philosophie, Avicenne est connu pour sa synthèse originale entre aristotélisme et néo-platonisme. Dans sa somme philosophique "Le Livre de la guérison" (ash-Shifa), il systématise la pensée aristotélicienne tout en l'enrichissant d'apports néo-platoniciens, particulièrement sur la question de l'émanation. Pour Avicenne, Dieu (l'Être nécessaire) émane de lui-même, par surabondance, une série d'intelligences angéliques. La première intelligence émane la seconde, et ainsi de suite jusqu'à la dixième intelligence qui gouverne le monde sublunaire. Cette théorie de l'émanation propose une alternative au créationnisme biblique tout en maintenant la transcendance divine.

Sa théorie de la connaissance distingue l'intuition intellectuelle (hads) du raisonnement discursif. L'intuition est une saisie immédiate des moyens termes, particulièrement développée chez les prophètes. Cette théorie permet d'expliquer la connaissance prophétique comme forme suprême d'intellection humaine.

L'expérience de l'homme volant est sa contribution la plus célèbre à la philosophie de l'esprit. Imaginez un homme créé instantanément dans le vide, sans expérience sensorielle aucune, suspendu dans les airs sans contact avec rien. Cet homme serait conscient de son existence (il sait qu'il est), mais ignorerait tout de son corps, du monde extérieur, des qualités sensibles. Avicenne en conclut que l'âme est une substance indivisible, distincte du corps, et que la conscience de soi est immédiate, indépendante de l'expérience sensorielle.

Avicenne développe également une théorie originale de la double vérité : il distingue la vérité de la foi religieuse (accessible à tous par la révélation) de la vérité philosophique (accessible aux seuls philosophes par la raison). Pour certains sujets (la création, l'immortalité de l'âme), les deux vérités peuvent paraître contradictoires mais doivent être réconciliées par l'interprétation allégorique.

En métaphysique, Avicenne formule la distinction entre essence et existence qui deviendra classique. L'essence est ce qui fait qu'une chose est ce qu'elle est ; l'existence est le fait d'être. Pour Dieu seul, essence et existence sont identiques (il est l'Être nécessaire). Pour les créatures, essence et existence sont distinctes (l'existence leur est adjointe par une cause).

L'influence d'Avicenne est immense. Dans le monde islamique, il domina la pensée jusqu'à Averroès (XIIe siècle). En Occident latin, ses œuvres traduites au XIIe siècle influencèrent profondément la scolastique, particulièrement Duns Scot et sa théorie de l'existence. Thomas d'Aquin le critiqua mais l'étudia soigneusement. Son Canon de médecine resta une référence jusqu'à la Renaissance.`,
    mainMovements: ["Philosophie islamique", "Avicisme", "Aristotélisme arabe", "Néo-platonisme"],
    disciplines: ["Métaphysique", "Médecine", "Psychologie", "Épistémologie", "Théologie", "Logique"],
    keyIdeas: {
      ideas: [
        "Être nécessaire vs êtres contingents",
        "Distinction essence/existence",
        "Expérience de l'homme volant",
        "Théorie de l'émanation",
        "Intuition intellectuelle (hads)",
        "Double vérité (foi et raison)",
        "L'âme comme substance indivisible",
        "Prophétie comme intuition suprême"
      ],
      descriptions: [
        "Dieu est l'unique être dont l'existence est nécessaire",
        "L'essence et l'existence sont distinctes dans les créatures",
        "Expérience de pensée montrant la conscience indépendante du corps",
        "Le monde émane de Dieu par surabondance",
        "Connaissance immédiate des moyens termes",
        "Distinction entre vérité religieuse et vérité philosophique",
        "L'âme est une substance simple et immortelle",
        "Les prophètes possèdent une intuition intellectuelle supérieure"
      ]
    },
    influences: {
      influencedBy: ["Aristote", "Al-Farabi", "Néo-platonisme", "Coran", "Médecine grecque (Hippocrate, Galien)"],
      influenced: ["Averroès", "Philosophie islamique postérieure", "Scolastique latine", "Duns Scot", "Thomas d'Aquin", "Médecine médiévale et Renaissance"]
    },
    majorWorks: [
      { title: "Le Livre de la guérison (ash-Shifa)", year: 1020, type: "Somme philosophique" },
      { title: "Le Canon de la médecine", year: 1025, type: "Traité médical" },
      { title: "Le Livre de la délivrance (an-Najat)", year: 1027, type: "Somme philosophique abrégée" },
      { title: "Le Livre de la science orientale", year: 1030, type: "Philosophie ésotérique" },
      { title: "Livre des directives et des remarques", year: 1034, type: "Philosophie pratique" }
    ]
  },

  {
    name: "Averroès",
    slug: "averroes",
    fullName: "Ibn Rushd (Averroès)",
    birthYear: 1126,
    deathYear: 1198,
    birthPlace: "Cordoue (califat Almohade, actuelle Espagne)",
    nationality: "Andalou (Espagne musulmane)",
    century: "XIIe siècle",
    biography: `Averroès (Ibn Rushd, 1126-1198) est sans conteste le plus grand commentateur d'Aristote et l'une des figures les plus influentes de la philosophie médiévale. Né à Cordoue dans une famille de juristes et de juges, il étudia le droit, la médecine, la théologie et la philosophie, devenant une autorité dans toutes ces disciplines. Son surnom "Le Commentateur" (par opposition à Aristote "Le Philosophe") témoigne de l'importance de son œuvre exégétique.

Le projet d'Averroès était de commenter intégralement Aristote, dont les œuvres avaient été traduites en arabe. Il rédigea trois types de commentaires : courts (paraphrases), moyens (explication détaillée), et longs (analyse exhaustive). Ces commentaires, traduits en latin au XIIIe siècle, permirent à l'Occident chrétien de redécouvrir Aristote qu'on ne connaissait que partiellement.

Sa théorie de l'unité de l'intellect (monopsychisme) est sa thèse la plus célèbre et la plus controversée. Averroès soutient qu'il n'existe qu'un seul intellect agent (l'intellect séparé dont parle Aristote) pour toute l'humanité. Les intellects individuels ne sont que des dispositions à participer à cet intellect unique. Cette thèse, si elle élimine l'immortalité individuelle de l'âme, fut condamnée par l'Église mais défendue par les averroïstes latins (Siger de Brabant, Boèce de Dacie).

En épistémologie, Averroès distingue deux niveaux de vérité : la vérité philosophique (démonstrative, accessible aux seuls philosophes) et la vérité religieuse (allégorique, adaptée au commun). L'Écriture sainte utilise un langage imagé et persuasif pour guider les masses vers la vertu et le salut, même si son contenu n'est pas littéralement vrai. Les philosophes peuvent, doivent même, interpréter allégoriquement les textes sacrés lorsqu'ils entrent en contradiction avec la vérité philosophique démontrée.

En politique, Averroès commente la "République" de Platon dans son "Traité décisif". Il distingue trois classes de citoyens : les philosophes (déterminent les vérités), les dialecticiens (les transmettent), et les rhéteurs (les persuadent). Cette classification correspond à la distinction philosophie/théologie/prédication. La cité idéale est celle où les philosophes gouvernent ou du moins inspirent les lois.

Averroès défend également l'éternité du monde, thèse aristotélicienne qui semble contredire la création biblique. Il propose une distinction entre la création comme acte libre de Dieu (vérité religieuse) et l'éternité du monde comme nécessité cosmique (vérité philosophique). Les deux peuvent être vraies sous différents aspects.

Son "Traité décisif" (Fasl al-Maqal) affirme la légitimité et la nécessité de l'étude philosophique pour les musulmans. La loi religieuse elle-même recommande l'étude de la sagesse (philosophie) pour connaître Dieu. Les philosophes musulmans ne peuvent donc pas négliger l'étude d'Aristote, le sommet de la sagesse humaine.

L'influence d'Averroès est immense. Dans le monde juif, ses œuvres traduites en hébreu paruent des penseurs comme Gersonide. Dans l'Occident latin, l'averroïsme latin (XIIIe siècle) fut un courant important à la faculté des arts de Paris. Thomas d'Aquin écrivit son "De l'unité de l'intellect contre les averroïstes" contre lui. Mais à la Renaissance, Padoue devint un centre d'averroïsme (Pomponazzi) et ses idées continuèrent d'influencer la pensée moderne jusqu'à Spinoza.`,
    mainMovements: ["Aristotélisme arabe", "Averroïsme", "Philosophie islamique"],
    disciplines: ["Métaphysique", "Épistémologie", "Politique", "Théologie", "Philosophie de l'esprit"],
    keyIdeas: {
      ideas: [
        "Unité de l'intellect (monopsychisme)",
        "Double vérité : philosophique et religieuse",
        "Éternité du monde",
        "Légitimité de la philosophie pour les croyants",
        "Distinction vérité démonstrative/vérité dialectique",
        "Commentaires systématiques d'Aristote",
        "Classement des citoyens : philosophes, dialecticiens, rhéteurs",
        "Interprétation allégorique de l'Écriture"
      ],
      descriptions: [
        "Un seul intellect agent pour toute l'humanité",
        "Distinction entre vérité philosophique et vérité religieuse",
        "Le monde est éternel mais créé par Dieu",
        "La loi religieuse recommande l'étude philosophique",
        "La vérité scientifique est supérieure à la vérité religieuse",
        "Commentaires courts, moyens et longs d'Aristote",
        "Les philosophes devraient diriger la cité",
        "Les textes sacrés doivent être interprétés allégoriquement"
      ]
    },
    influences: {
      influencedBy: ["Aristote", "Avicenne", "Al-Farabi", "Platon", "Philosophie islamique"],
      influenced: ["Averroïsme latin", "Siger de Brabant", "Boèce de Dacie", "Thomas d'Aquin (contre lui)", "Marsile de Padoue", "Pietro Pomponazzi", "Baruch Spinoza"]
    },
    majorWorks: [
      { title: "Commentaires sur Aristote", year: 1169, type: "Commentaires" },
      { title: "Traité décisif (Fasl al-Maqal)", year: 1178, type: "Philosophie de la religion" },
      { title: "L'Incohérence de l'incohérence (Tahafut al-Tahafut)", year: 1180, type: "Critique théologique" },
      { title: "Commentaire moyen sur la République", year: 1185, type: "Philosophie politique" },
      { title: "Traité de l'intellect", year: 1190, type: "Philosophie de l'esprit" }
    ]
  },

  {
    name: "Maïmonide",
    slug: "mamonide",
    fullName: "Moïse Maïmonide (Rambam)",
    birthYear: 1138,
    deathYear: 1204,
    birthPlace: "Cordoue (califat Almohade, actuelle Espagne)",
    nationality: "Juif (diaspora séfarade)",
    century: "XIIe-XIIIe siècle",
    biography: `Moïse Maïmonide (1138-1204), connu sous l'acronyme Rambam (Rabbeinou Moshe ben Maimon), est l'une des figures les plus monumentales du judaïsme et de la philosophie médiévale. Né à Cordoue dans une famille de rabbins, il fut contraint de fuir les persécutions almohades et s'établit successivement au Maroc, en Palestine, et enfin en Égypte au Caire où il devint médecin de la cour de Saladin et grand rabbin de la communauté juive égyptienne.

Son œuvre philosophique principale, le "Guide des égarés" (Moreh Nevukhim), écrit en judéo-arabe et traduit en hébreu puis en latin, représente la synthèse la plus ambitieuse entre la philosophie aristotélicienne et la foi juive. Dans ce texte d'une densité et d'une subtilité extraordinaires, Maïmonide s'adresse au lecteur cultivé qui, ayant assimilé la philosophie aristotélicienne, éprouve des difficultés à concilier raison et révélation.

La méthode exégétique de Maïmonide distingue deux sens de l'Écriture : le sens externe (destiné au commun, littéral et parfois anthropomorphique) et le sens interne (destiné aux philosophes, allégorique et conforme à la vérité philosophique). Les passages bibliques qui attribuent à Dieu un corps, des passions, ou des mouvements doivent être interprétés allégoriquement, car Dieu est incorporel, immuable et transcendant. Cette exégèse allégorique permit à Maïmonide de réconcilier création éternelle et éternité du monde : les récits de création ne sont pas littéraux mais pédagogiques.

En métaphysique, Maïmonide développe une théologie négative (apophatique) radicale. Nous ne pouvons dire ce que Dieu est, seulement ce qu'il n'est pas. Dieu n'est ni corps ni force dans un corps, ni multiple, ni sujet au changement. Les attributs positifs appliqués à Dieu dans l'Écriture (miséricorde, sagesse, puissance) désignent soit les œuvres de Dieu (attributs d'action), soit son absence de faiblesse (attributs négatifs déguisés). L'essence divine reste absolument inconnaissable.

Sa théorie de la providence distingue la providence générale (qui gouverne le cosmos selon les lois naturelles) et la providence particulière (qui s'étend aux individus selon leur développement intellectuel). Plus un homme s'élève vers l'intellect, plus il est protégé par la providence. Les prophètes, au sommet de l'échelle intellectuelle, bénéficient d'une providence parfaite.

En éthique, Maïmonide codifie la loi juive dans son "Mishné Torah", compilation systématique de toute la tradition orale. Il distingue les commandements rationnels (préceptes moraux universels, comme l'interdiction du meurtre) des commandements révélés (observances spécifiquement juives, comme les lois alimentaires). Les premiers auraient pu être découverts par la raison humaine, mais Dieu les a révélés pour l'humanité entière ; les seconds sont propres à Israël et servent à former le peuple élu.

Maïmonide propose également une classification des préceptes en 613 commandements, analyse les raisons des lois bibliques (y compris les sacrifices, dont il donne une interprétation pédagogique), et défend la liberté humaine contre le déterminisme astral. Son "Traité sur la résurrection" affirme la résurrection des morts comme croyance juive, mais la conçoit comme étape intermédiaire avant la vie intellectuelle éternelle.

L'influence de Maïmonide est immense et durable. Dans le judaïsme, le Mishné Torah devint un code de référence. Son œuvre philosophique suscita des débats violents (les "controverses maïmonidiennes") mais finit par s'imposer. La philosophie scolastique chrétienne (Thomas d'Aquin) s'inspira de sa méthode. Spinoza, qui le critiqua, est pourtant tributaire de son exégèse biblique rationnelle.`,
    mainMovements: ["Philosophie juive", "Aristotélisme", "Théologie négative"],
    disciplines: ["Métaphysique", "Théologie", "Éthique", "Exégèse biblique", "Philosophie de la loi", "Médecine"],
    keyIdeas: {
      ideas: [
        "Théologie négative (apophatisme)",
        "Double sens de l'Écriture : externe et interne",
        "Distinction providence générale/providence particulière",
        "Commandements rationnels vs commandements révélés",
        "Dieu comme intellect pur inconnaissable",
        "Prophétie comme perfection intellectuelle",
        "Les sacrifices comme pédagogie anté-idolâtrique",
        "Résurrection comme étape vers la vie intellectuelle"
      ],
      descriptions: [
        "Nous ne pouvons connaître que ce que Dieu n'est pas",
        "L'Écriture a un sens littéral et un sens allégorique",
        "La providence s'étend aux individus selon leur intellect",
        "Distinction entre préceptes moraux universels et observances juives",
        "Dieu est pur intellect, sans attributs positifs compréhensibles",
        "Les prophètes ont atteint le degré le plus haut d'intellection",
        "Les sacrifices remplacent les pratiques idolâtriques",
        "La résurrection précède la vie intellectuelle éternelle"
      ]
    },
    influences: {
      influencedBy: ["Aristote", "Avicenne", "Al-Farabi", "Talmud", "Bible", "Philosophie islamique"],
      influenced: ["Philosophie juive", "Thomas d'Aquin", "Scholastique chrétienne", "Gersonide", "Hasdaï Crescas", "Baruch Spinoza", "Moses Mendelssohn"]
    },
    majorWorks: [
      { title: "Guide des égarés (Moreh Nevukhim)", year: 1190, type: "Philosophie théologique" },
      { title: "Mishné Torah", year: 1180, type: "Code de loi juive" },
      { title: "Traité sur la résurrection", year: 1191, type: "Théologie" },
      { title: "Livre de la connaissance", year: 1168, type: "Éthique et métaphysique" },
      { title: "Huit chapitres (introduction au Traité des Pères)", year: 1160, type: "Éthique" }
    ]
  },

  {
    name: "Thomas d'Aquin",
    slug: "thomas-d-aquin",
    fullName: "Saint Thomas d'Aquin",
    birthYear: 1225,
    deathYear: 1274,
    birthPlace: "Roccasecca (Royaume de Sicile, actuelle Italie)",
    nationality: "Italien (Royaume de Sicile)",
    century: "XIIIe siècle",
    biography: `Thomas d'Aquin (1225-1274) est sans conteste le plus grand philosophe et théologien du Moyen Âge, et l'une des figures les plus influentes de toute l'histoire de la pensée occidentale. Né au château de Roccasecca dans une famille noble liée à l'empereur Frédéric II, il rejoignit l'ordre des dominicains contre l'avis de sa famille, étudia à Cologne sous Albert le Grand, et enseigna à Paris et à Naples. Canonisé en 1323 et proclamé docteur de l'Église en 1567, il fut nommé "Docteur angélique" et "Docteur commun" de l'Église catholique.

L'œuvre thomasienne représente la synthèse la plus aboutie entre la philosophie aristotélicienne et la théologie chrétienne. Thomas accomplit ce que les théologiens précédents avaient tenté sans y parvenir : montrer que la philosophie d'Aristote, bien que païenne, était fondamentalement compatible avec la révélation chrétienne. Cette synthèse, appelée "thomisme", allait dominer la pensée catholique jusqu'à nos jours.

Sa distinction entre raison et foi, philosophie et théologie, est fondamentale. La philosophie, fondée sur la raison naturelle, peut atteindre des vérités importantes : l'existence de Dieu, l'immortalité de l'âme, les principes moraux naturels. Mais certaines vérités (la Trinité, l'Incarnation, la résurrection) dépassent les capacités de la raison et ne sont connues que par la foi. Cependant, il ne peut y avoir de contradiction véritable entre raison et foi, car toutes deux viennent de Dieu. S'il y a conflit apparent, c'est que notre raisonnement est faux ou notre interprétation de l'Écriture incorrecte.

Les " cinq voies" (quinque viae) pour démontrer l'existence de Dieu, exposées dans la "Somme théologique", sont ses arguments les plus célèbres. Partant de l'expérience sensible (le mouvement, la causalité efficiente, la contingence des êtres, les degrés de perfection, l'ordre du monde), Thomas remonte à l'existence d'un premier moteur immobile, d'une cause première incausée, d'un être nécessaire, d'un être parfait, d'une intelligence ordonnatrice. Ces démonstrations a posteriori (partant de l'expérience) diffèrent de l'argument ontologique d'Anselme que Thomas rejette.

En métaphysique, Thomas reprend et transforme la doctrine aristotélicienne de l'acte et de la puissance. Dieu est acte pur, sans aucune potentialité, donc parfait et immuable. Les créatures sont des composés d'acte et de puissance, capables de changement. Cette distinction permet de penser la création divine : Dieu donne l'acte d'exister à des êtres qui ne sont que possibles sans lui.

L'hylémorphisme (matière et forme) aristotélicien est appliqué à tous les corps, y compris les anges (forme sans matière) et l'âme humaine (forme substantielle du corps). Contrairement à Platon, l'âme n'est pas un fantôme dans la machine mais la forme du corps, qui lui donne vie et organisation. Cependant, Thomas affirme contre Aristote que l'âme humaine est immortelle car subsistante : elle peut exister sans le corps quoique naturellement unie à lui.

En éthique, Thomas développe une théorie de la loi naturelle inspirée du droit romain et de la Bible. La loi éternelle (le plan divin) se communique aux créatures rationnelles comme loi naturelle, connaissable par la raison. Les préceptes fondamentaux de la loi naturelle (faire le bien, éviter le mal) sont universels et immuables. La loi humaine doit se conformer à la loi naturelle pour être valide.

La théorie thomiste de la guerre juste, la distinction entre péché mortel et véniel, l'analyse des vertus (théologales : foi, espérance, charité ; cardinales : prudence, justice, force, tempérance), la doctrine des sacraments, tous ces éléments ont façonné la théologie morale catholique.

L'influence de Thomas d'Aquin est immense. Après sa mort, son œuvre fut d'abord contestée (condamnée de 1277 à Paris), puis réhabilitée et progressivement imposée comme doctrine officielle de l'Église. Le concile de Trente (XVIe siècle) s'appuya sur ses écrits. Léon XIII l'a déclaré patron des études catholiques en 1879. Aujourd'hui encore, le thomisme reste la philosophie officielle de l'Église catholique et continue d'influencer les débats philosophiques contemporains.`,
    mainMovements: ["Scolastique", "Thomisme", "Aristotélisme chrétien", "Dominicain"],
    disciplines: ["Métaphysique", "Théologie", "Éthique", "Politique", "Philosophie de la connaissance", "Philosophie de la religion"],
    keyIdeas: {
      ideas: [
        "Cinq voies pour démontrer l'existence de Dieu",
        "Distinction raison/foi, philosophie/théologie",
        "Acte et puissance, essence et existence",
        "Hylémorphisme appliqué à tous les corps",
        "Loi naturelle et loi éternelle",
        "L'âme comme forme substantielle du corps",
        "Immortalité de l'âme",
        "Création ex nihilo"
      ],
      descriptions: [
        "Démonstrations a posteriori de l'existence de Dieu",
        "La philosophie précède la foi et lui prépare",
        "Dieu est acte pur, les créatures mélangent acte et puissance",
        "Tout corps est composé de matière et de forme",
        "La loi éternelle divine se communique comme loi naturelle",
        "L'âme n'est pas séparable par nature mais subsistante",
        "L'âme intellectuelle est immortelle car subsistante",
        "Dieu créé le monde de rien par libre volonté"
      ]
    },
    influences: {
      influencedBy: ["Aristote", "La Bible", "Saint Augustin", "Pseudo-Denys", "Boèce", "Avicenne", "Averroès (contre lui)", "Maïmonide"],
      influenced: ["Thomisme", "Scolastique tardive", "Concile de Trente", "École de Salamanque", "Jacques Maritain", "Étienne Gilson", "Philosophie catholique moderne"]
    },
    majorWorks: [
      { title: "Somme théologique", year: 1265, type: "Somme théologique" },
      { title: "Somme contre les Gentils", year: 1259, type: "Apologétique" },
      { title: "Commentaires sur Aristote", year: 1270, type: "Commentaires" },
      { title: "De l'unité de l'intellect contre les averroïstes", year: 1270, type: "Controverse" },
      { title: "Traité des êtres créés", year: 1274, type: "Métaphysique" }
    ]
  },

  {
    name: "Duns Scot",
    slug: "duns-scot",
    fullName: "Bienheureux Jean Duns Scot",
    birthYear: 1266,
    deathYear: 1308,
    birthPlace: "Duns (Écosse)",
    nationality: "Écossais",
    century: "XIIIe-XIVe siècle",
    biography: `Jean Duns Scot (1266-1308), surnommé "le Docteur subtil", est l'un des plus grands philosophes et théologiens franciscains du Moyen Âge. Né à Duns en Écosse, il étudia à Oxford, enseigna à Cambridge et à Paris, et mourut à Cologne dans la quarantaine. Sa pensée, d'une finesse extraordinaire (d'où son surnom), représente une alternative majeure au thomisme et exerça une influence considérable sur la philosophie tardive médiévale et moderne.

La caractéristique la plus originale de la pensée scotiste est la distinction formelle entre essence et existence. Pour Thomas d'Aquin, essence et existence ne sont réellement distinctes que chez les créatures ; chez Duns Scot, elles sont distinctes même chez les créatures, mais cette distinction est "formelle" et non "réelle" : elles sont deux aspects formellement différents de la même réalité, inséparable dans l'être concret mais distinguables par l'esprit. Cette thèse permet à Scot de penser l'existence comme une réalité positive et non comme simple actualisation de l'essence.

Sa doctrine de l'univocité de l'être est encore plus révolutionnaire. Pour Thomas, le mot "être" s'applique à Dieu et aux créatures de manière analogue (non univoque). Scot soutient que "être" a le même sens (univoque) lorsqu'il s'applique à Dieu et aux créatures, car sinon nous ne pourrions rien connaître de Dieu. L'infinité divine est alors pensée comme mode d'être suprême, pas comme catégorie ontologique différente. Cette thèse allait avoir une influence majeure sur la philosophie moderne, particulièrement Spinoza.

En théologie, Scot développe la doctrine de l'haeccéité (haecceitas), la "ceciété" ou principe d'individuation. Ce qui fait qu'un individu est cet individu précis n'est ni la matière (comme chez Thomas) ni la forme, mais une "cette-mésité" positive, une détermination formelle qui singularise. Cette haeccéité est une réalité positive, pas une simple négation de l'universalité.

La christologie scotiste est marquée par la thèse de la prééminence du Christ : même sans le péché, l'Incarnation aurait eu lieu car le Christ est la créature la plus parfaite, le terme de toute création. Cette thèse optimiste contraste avec la conception augustinienne et thomiste de l'Incarnation comme remède au péché.

En mariologie, Scot défend l'Immaculée Conception : Marie a été préservée du péché originel dès sa conception. Cette thèse, contestée par les thomaciens (qui soutenaient que Marie avait été sanctifiée dans le sein de sa mère mais non conçue sans péché), finit par triompher dans l'Église catholique (dogme proclamé en 1854).

En épistémologie, Scot distingue deux ordres de connaissance : la connaissance intuitive (présence actuelle de l'objet) et la connaissance abstractive (présence représentative). Il soutient que nous pouvons avoir une connaissance intuitive de non-existants (connaissance intuitive "degraded") ce qui lui permet de défendre la possibilité de la connaissance angélique et divine des futurs contingents.

En éthique, Scot accorde une place centrale à la volonté. La liberté n'est pas simplement libre arbitre de choix (liberum arbitrium) mais liberté d'indifférence vis-à-vis de toute détermination, même intellectuelle. La volonté peut vouloir contre la raison, et c'est en quoi consiste la liberté la plus haute. Ce voluntarisme contraste avec l'intellectualisme thomacien pour qui la volonté suit nécessairement le jugement de la raison.

L'influence de Scot est immense et durera plusieurs siècles. Les scotistes formèrent une école importante qui rivalisa avec les thomaciens jusqu'à la Renaissance. Sa thèse de l'univocité de l'être influença profondément la métaphysique moderne, particulièrement Spinoza. La phénoménologie contemporaine (Heidegger) s'est également réclamée de certaines intuitions scotistes sur l'être.`,
    mainMovements: ["Scolastique", "Scotisme", "Franciscanisme"],
    disciplines: ["Métaphysique", "Théologie", "Épistémologie", "Éthique", "Logique"],
    keyIdeas: {
      ideas: [
        "Distinction formelle essence/existence",
        "Univocité de l'être",
        "Haeccéité (principe d'individuation)",
        "Volontarisme (primauté de la volonté)",
        "Prééminence du Christ",
        "Immaculée Conception",
        "Connaissance intuitive et abstractive",
        "Infini comme mode d'être suprême"
      ],
      descriptions: [
        "Essence et existence sont formellement distinctes",
        "Le terme 'être' a le même sens pour Dieu et les créatures",
        "Ce qui fait qu'un individu est cet individu précis",
        "La volonté est libre même vis-à-vis de la raison",
        "L'Incarnation aurait eu lieu même sans le péché",
        "Marie conçue sans péché originel",
        "Distinction entre présence actuelle et représentative de l'objet",
        "Dieu est l'être infini, pas une catégorie différente"
      ]
    },
    influences: {
      influencedBy: ["Aristote", "Augustin", "Pseudo-Denys", "Bonaventure", "Franciscanisme", "Avicenne", "Henry de Gand"],
      influenced: ["Scotisme", "Guillaume d'Occam", "Franciscanisme tardif", "Spinoza", "Philosophie moderne", "Phénoménologie (Heidegger)"]
    },
    majorWorks: [
      { title: "Ordinatio (Commentaire sur les Sentences)", year: 1303, type: "Théologie" },
      { title: "Reportationes", year: 1307, type: "Théologie" },
      { title: "Questions sur la Métaphysique", year: 1300, type: "Métaphysique" },
      { title: "Traité du premier principe", year: 1305, type: "Métaphysique" },
      { title: "Questions sur l'interprétation", year: 1295, type: "Logique" },
      { title: "Théologie mariale", year: 1306, type: "Mariologie" }
    ]
  },

  {
    name: "Guillaume d'Occam",
    slug: "guillaume-d-occam",
    fullName: "Guillaume d'Occam",
    birthYear: 1287,
    deathYear: 1347,
    birthPlace: "Occam (Surrey, Angleterre)",
    nationality: "Anglais",
    century: "XIIIe-XIVe siècle",
    biography: `Guillaume d'Occam (env. 1287-1347), franciscain anglais et figure majeure de la philosophie tardive médiévale, est connu comme le fondateur de l'nominalisme et le protagoniste d'un conflit majeur avec la papauté. Né à Occam dans le Surrey, il étudia à Oxford, enseigna à Paris, et fut accusé d'hérésie pour ses thèses théologiques. Il s'enfuit à Munich sous la protection de l'empereur Louis de Bavière et participa au grand conflit entre pouvoirs spirituel et temporel.

Le nominalisme occamien, aussi appelé "terminisme", représente une rupture radicale avec la métaphysique traditionnelle. Contrairement aux réalistes (Thomas, Scot) qui soutenaient l'existence réelle des universaux, Occam affirme que seuls existent les individus particuliers. Les universaux (humanité, animalité) ne sont que des signes mentaux (termes) qui signifient des ressemblances entre particuliers. Il n'y a pas d'essence commune, pas de nature humaine une : il n'y a que des individus qui se ressemblent.

Cette thèse a des conséquences épistémologiques révolutionnaires. Pour connaître, nous n'avons pas besoin d'abstraire une essence commune des individus : nous formons des concepts (intentions de l'esprit) qui signifient directement des individus particuliers, groupes ou séries. La connaissance intuitive (présence actuelle de l'objet) est la seule connaissance certaine ; la connaissance abstractive (représentation sans présence) est toujours probable et sujette à erreur.

Le célèbre "rasoir d'Occam" (Pluralitas non est ponenda sine necessitate - la pluralité ne doit pas être posée sans nécessité) résume son économie ontologique. Il ne faut pas multiplier les entités au-delà de ce qui est nécessaire pour expliquer les phénomènes. Ce principe deviendra un canon de la pensée scientifique moderne.

En logique, Occam développe une théorie originale des termes (suppositio). Les termes peuvent signifier des particuliers (supposition personnelle), des universaux (supposition simple), ou des termes eux-mêmes (supposition matérielle). Cette analyse logique lui permet d'éliminer les entités métaphysiques problématiques (relations, universaux) en les réduisant à des significations de termes.

En politique, Occam soutient la théorie de la pauvreté absolue du Christ et des apôtres. Christ n'a eu aucun bien, ni individuel ni en commun ; les franciscains qui veulent vivre selon l'Évangile ne doivent rien posséder. Cette thèse l'opposa au pape Jean XXII qui affirmait que la propriété commune était compatible avec la pauvreté évangélique. Occam développa dans ce conflit une théorie originale de la séparation des pouvoirs spirituel et temporel, préfigurant les théories modernes de la laïcité.

En théologie, Occam minimise le rôle de la raison naturelle. Contrairement à Thomas qui croyait possible de démontrer rationnellement l'existence de Dieu, l'immortalité de l'âme, ou la liberté humaine, Occam soutient que ces vérités ne sont connues que par la foi. La raison ne peut prouver ni Dieu ni la création, ni même la causalité efficiente (pour lui, nous ne voyons que succession, pas causalité). La raison naturelle peut seulement réfuter les contradictions et montrer la crédibilité de la foi.

Cette épargne du rôle de la raison a des conséquences importantes pour la science. Si la raison ne peut connaître l'essence des choses, elle peut du moins décrire comment elles se comportent (phénoménalisme). La science devient description empirique des régularités, non explication par des essences. Cette approche annonce l'empirisme moderne.

L'influence d'Occam est immense. Le nominalisme occamien domina les universités du XVe siècle et prépara la rupture scolastique. Les réformateurs (Luther, Calvin) apprécièrent sa critique de la raison naturelle en théologie. Les empiristes modernes (Berkeley, Hume) développèrent son antimétaphysique. Le pragmatisme contemporain et la philosophie analytique se réclament de son économie ontologique.`,
    mainMovements: ["Nominalisme", "Terminisme", "Franciscanisme"],
    disciplines: ["Logique", "Épistémologie", "Métaphysique", "Politique", "Théologie"],
    keyIdeas: {
      ideas: [
        "Nominalisme : seuls les individus existent",
        "Rasoir d'Occam (économie ontologique)",
        "Critique des universaux et des essences",
        "Séparation pouvoirs spirituel/temporel",
        "Pauvreté absolue du Christ",
        "Connaissance intuitive vs abstractive",
        "Théorie de la supposition des termes",
        "Impuissance de la raison naturelle en théologie"
      ],
      descriptions: [
        "Les universaux ne sont que des termes signifiant des ressemblances",
        "Ne pas multiplier les entités sans nécessité",
        "Refus des essences communes et des natures universelles",
        "Le pouvoir temporel est indépendant du spirituel",
        "Le Christ et les apôtres n'ont rien possédé",
        "La seule connaissance certaine est la présence actuelle de l'objet",
        "Analyse logique des significations des termes",
        "La raison ne peut prouver les vérités de la foi"
      ]
    },
    influences: {
      influencedBy: ["Duns Scot", "Franciscanisme", "Scepticisme antique", "Aristote (contre l'interprétation traditionnelle)"],
      influenced: ["Nominalisme tardif", "Réforme protestante", "Empirisme moderne", "Francis Bacon", "John Locke", "George Berkeley", "David Hume", "Philosophie analytique"]
    },
    majorWorks: [
      { title: "Somme logique", year: 1323, type: "Logique" },
      { title: "Quodlibeta", year: 1324, type: "Théologie" },
      { title: "Commentaire sur les Sentences", year: 1320, type: "Théologie" },
      { title: "Bref dialogue sur la puissance tyrannique du pape", year: 1334, type: "Politique" },
      { title: "Traité sur la pauvreté évangélique", year: 1332, type: "Théologie politique" }
    ]
  },

  // =============================================================================
  // RENAISSANCE PHILOSOPHY (14th-17th centuries)
  // =============================================================================

  {
    name: "Érasme",
    slug: "erasme",
    fullName: "Desiderius Erasmus (Érasme de Rotterdam)",
    birthYear: 1466,
    deathYear: 1536,
    birthPlace: "Rotterdam (Pays-Bas des Habsbourg)",
    nationality: "Néerlandais",
    century: "XVe-XVIe siècle",
    biography: `Desiderius Erasmus (1466-1536), connu sous le nom d'Érasme de Rotterdam, est l'une des figures les plus importantes de la Renaissance européenne. Humaniste chrétien, théologien critique, philologue, et pédagogue, il incarne le renouveau intellectuel de la Renaissance qui cherchait à réconcilier l'héritage classique et la foi chrétienne. Surnommé "le prince des humanistes", son influence s'étendit à travers toute l'Europe.

Érasme reçut une éducation traditionnelle chez les frères de la Vie commune, devint prêtre, mais choisit la vie de savant indépendant. Il voyagea à travers l'Europe (Paris, Louvain, Cambridge, Bâle), cultivant un réseau de correspondances qui fit de lui le citoyen du monde par excellence. Son œuvre monumentale d'édition critique du Nouveau Testament grec (1516), accompagné d'une traduction latine et de notes, révéla les altérations du texte latin traditionnel (la Vulgate) et eut un impact immense sur la théologie.

L'humanisme érasmien se caractérise par l'ad fontes (retour aux sources) : retrouver le christianisme primitif et pur par l'étude directe des textes bibliques en grec et hébreu, des Pères de l'Église, et des auteurs classiques. Cette méthode philologique rigoureuse montra que nombre de doctrines et pratiques médiévales n'avaient pas de fondement scripturaire.

"L'Éloge de la folie" (1511), son œuvre la plus célèbre, est une satire mordante de tous les aspects de la société de son temps : théologiens pédants, moines hypocrites, prêtres ignorants, princes vaniteux, philosophes arrogants. La Folie elle-même prend la parole pour louer son universelle présence, montrant que ce que les humains appellent sagesse n'est souvent que folie déguisée. Ce texte illustre la critique érasmienne d'un christianisme dégénéré en superstition et ritualisme.

Le "Manuel du soldat chrétien" (1501) expose sa spiritualité : la véritable piété n'est pas dans les observances extérieures mais dans l'imitation du Christ, la prière intérieure, et la charité. Le "Discours de la libre disposition du cœur" (1524) développe une conception de la liberté chrétienne proche de Luther : le chrétien est libre de la loi par la foi, mais cette liberté est intérieure et ne se traduit pas en rébellion politique.

La controverse avec Luther sur le libre arbitre (1524-1525) marque la rupture entre humanisme et Réforme. Érasme défendit la liberté humaine dans le "Diatribe sur le libre arbitre", arguant que l'Écriture attribue clairement des responsabilités à l'homme et que la morale n'a pas de sens sans liberté. Luther répondit par le "Du serf arbitre" affirmant la servitude complète de la volonté humaine. Érasme refusa les positions extrêmes : ni Pelage (liberté totale), ni Luther (servitude totale), mais une position médiane où la grâce coopère avec une liberté blessée mais réelle.

En pédagogie, Érasme rénova l'éducation par son programme "d'humanités" : étude des langues anciennes (grec, latin, hébreu), des grands auteurs (Cicéron, Plutarque, les Pères), de l'éloquence, de l'histoire. Son "De la civilité puérile" (1530) posa les bases de l'éducation moderne en insistant sur les manières, la propreté, le respect d'autrui. Il voyait dans l'éducation le remède aux maux de la société : des citoyens instruits, vertueux, et tolérants.

Le "Novum Instrumentum", son édition du Nouveau Testament, révéla des centaines d'erreurs dans la Vulgate latine. Par exemple, le fameux "faites ceci en mémoire de moi" était dans la Vulgate "faites ceci en sacrifice de moi", erreur qui avait justifié le sacrifice de la messe. Ces corrections eurent un impact théologique considérable et nourrirent la critique protestante de l'Église romaine.

Érasme refusa toujours de rejoindre la Réforme, restant fidèle à l'Église tout en la critiquant de l'intérieur. Il espérait une réforme pacifique de l'institution, non une rupture. Cette position médiane lui valut des critiques des deux côtés : les catholiques le trouvaient trop critique, les protestants trop timide.

L'influence d'Érasme est immense. Il forma plusieurs générations d'humanistes européens (Thomas More, Juan Luis Vivès, Guillaume Budé). Ses éditions des Pères grecs (Jean Chrysostome, Basile, Grégoire de Nazianze, Origène) permirent la renaissance de la théologie patristique. Son idéal de concorde et de tolérance religieuse inspira les philosophes des Lumières. Son programme éducatif resta la référence jusqu'au XVIIIe siècle.`,
    mainMovements: ["Humanisme", "Humanisme chrétien", "Réforme (modérée)"],
    disciplines: ["Philologie", "Théologie", "Pédagogie", "Éthique", "Philosophie politique"],
    keyIdeas: {
      ideas: [
        "Ad fontes : retour aux sources bibliques et patristiques",
        "Critique philologique de la Vulgate",
        "Liberté chrétienne et libre arbitre",
        "Éducation humaniste (langues anciennes, auteurs classiques)",
        "Satire des abus ecclésiastiques",
        "Concorde et tolérance religieuse",
        "Spiritualité intérieure vs formalisme extérieur",
        "Moderation et rejet des extrêmes"
      ],
      descriptions: [
        "Retour aux textes originaux pour retrouver le christianisme primitif",
        "Le texte latin traditionnel contenait de nombreuses erreurs",
        "Défense de la liberté humaine contre Luther",
        "Éducation fondée sur les langues et les humanités",
        "Critique humoristique des abus ecclésiastiques",
        "Recherche de l'unité chrétienne et rejet de la violence",
        "La vraie piété est intérieure, pas dans les rituels",
        "Position médiane entre catholiques et protestants"
      ]
    },
    influences: {
      influencedBy: ["Laurent Valla", "Jean Colet", "Thomas More", "Antiquité classique", "Pères de l'Église", "Devotio moderna"],
      influenced: ["Humanisme européen", "Thomas More", "Juan Luis Vivès", "Réforme (critique)", "Contre-Réforme", "Philosophie des Lumières"]
    },
    majorWorks: [
      { title: "Novum Instrumentum (Nouveau Testament)", year: 1516, type: "Édition critique" },
      { title: "Éloge de la folie", year: 1511, type: "Satire" },
      { title: "Manuel du soldat chrétien", year: 1501, type: "Spiritualité" },
      { title: "Diatribe sur le libre arbitre", year: 1524, type: "Théologie" },
      { title: "De la civilité puérile", year: 1530, type: "Pédagogie" },
      { title: "Colloques", year: 1518, type: "Dialogues satiriques" }
    ]
  },

  {
    name: "Nicolas Machiavel",
    slug: "machiavel",
    fullName: "Niccolò Machiavelli",
    birthYear: 1469,
    deathYear: 1527,
    birthPlace: "Florence (République de Florence)",
    nationality: "Italien",
    century: "XVe-XVIe siècle",
    biography: `Niccolò Machiavel (1469-1527), diplomate, philosophe politique et écrivain florentin, est l'un des penseurs les plus importants et controversés de l'histoire de la pensée politique. Secrétaire de la chancellerie de la République de Florence de 1498 à 1512, il participa activement à la vie politique de la cité avant d'être disgracié, torturé et exilé lors du retour des Médicis. C'est dans cet exil forcé qu'il rédigea ses œuvres majeures.

"Le Prince" (1513, publié en 1532) est son œuvre la plus célèbre et la plus influente. Contrairement aux traités de politique traditionnels qui décrivaient la cité idéale (comme Platon) ou combinaient politique et morale (comme les penseurs chrétiens), Machiavel analyse la politique telle qu'elle est, avec réalisme et sans illusion. Son projet est de comprendre comment un prince peut acquérir et maintenir le pouvoir dans un monde marqué par la fortune (hasard) et la virtù (vertu politique, capacité d'action).

La pensée machiavélienne repose sur une analyse réaliste de la nature humaine : les humains sont ingrats, volages, simulateurs, lâches, avides de gain. Le prince ne peut donc fonder son pouvoir sur l'affection ou la loyauté naturelle de ses sujets, mais sur la crainte (qui ne se trahit jamais) plutôt que sur l'amour (qui est fragile). Cependant, il doit éviter d'être haï, car la haine suscite les conspirations.

Machiavel distingue deux types de principautés : les républiques et les monarchies. Son idéal politique, exprimé dans les "Discours sur la première décade de Tite-Live" (1517), est en fait la république romaine, où la liberté civique, la vertu des citoyens, et les institutions mixtes (consuls, sénat, tribuns) assurent stabilité et grandeur. "Le Prince" s'adresse à un prince nouveau dans un contexte exceptionnel (l'Italie divisée et envahie), où des mesures extraordinaires sont nécessaires.

La célèbre distinction entre politique et morale a suscité d'innombrables débats. Pour Machiavel, un prince doit savoir user du bien quand il le peut, du mal quand il y est contraint. S'il pouvait toujours tenir sa parole, ce serait beau ; mais la réalité des relations internationales et de la compétition pour le puissance exige parfois la rupture des promesses, la ruse, même la cruauté. Cependant, Machiavel n'encourage pas la cruauté gratuite : le prince doit pratiquer les cruautés bien (toutes ensemble, par nécessité) et se concilier ensuite le peuple par des bienfaits.

La vertu (virtù) machiavélienne n'est pas la vertu morale chrétienne (humilité, charité) mais la qualité du chef politique : décision, fermeté, capacité d'improvisation face aux circonstances changeantes, volonté de saisir l'occasion (occasione). Le prince idéal est à la fois lion (force) et renard (ruse), sachant utiliser la force quand nécessaire, mais préférant la ruse moins coûteuse.

Machiavel analyse également le rôle de la fortune. Contrairement aux anciens (Platon, Aristote) qui voyaient dans la stabilité l'idéal politique, Machiavel voit dans le changement la condition même de la vie politique. Les institutions sont comme les êtres vivants : elles naissent, grandissent, déclinent, meurent. Un prince doit anticiper ce cycle et renouveler les institutions avant leur décadence.

Machiavel est également un historien majeur. Son "Histoire de Florence" (1525) applique sa méthode réaliste à l'analyse du passé, cherchant les causes politiques (économiques, sociales, institutionnelles) des événements plutôt que les causes providentielles. Il rénova ainsi l'historiographie en en faisant une science politique appliquée au passé.

L'influence de Machiavel est immense et paradoxale. Au XVIe siècle, son nom devint synonyme de cynisme politique ("machiavélique"). Les catholiques (Innocent Gentillet, 1576) en firent le démon de la politique moderne. Les philosophes des Lumières (Spinoza, Rousseau) le réhabilitèrent comme analyste lucide de la politique. Les penseurs révolutionnaires le virent comme précurseur de la laïcisation du politique. Aujourd'hui, il est reconnu comme fondateur de la science politique moderne.`,
    mainMovements: ["Renaissance", "Réalisme politique", "Républicanisme"],
    disciplines: ["Philosophie politique", "Histoire", "Diplomatie", "Littérature"],
    keyIdeas: {
      ideas: [
        "Distinction politique et morale",
        "Vertu politique (virtù) vs vertu morale",
        "Fortune et occasione dans l'histoire",
        "République comme idéal politique",
        "Réalisme anthropologique",
        "Crainte vs amour du prince",
        "Lion et renard : force et ruse",
        "Institutions comme êtres vivants"
      ],
      descriptions: [
        "Le prince doit savoir user du bien et du mal selon les circonstances",
        "La qualité politique n'est pas la moralité mais la capacité d'action",
        "La fortune est le hasard qui peut être maîtrisé par la vertu",
        "La république romaine est le modèle de la liberté civique",
        "Les humains sont égoïstes et ingrats",
        "Il vaut mieux être craint qu'aimé, mais pas haï",
        "Le prince optimal combine force (lion) et ruse (renard)",
        "Les institutions naissent, grandissent, déclinent et meurent"
      ]
    },
    influences: {
      influencedBy: ["Antiquité romaine (Tite-Live, Cicéron)", "Histoire florentine", "Experience diplomatique", "Renaissance civique"],
      influenced: ["Science politique moderne", "Jean Bodin", "Thomas Hobbes", "Baruch Spinoza", "Philosophie des Lumières", "Napoléon", "Politique moderne"]
    },
    majorWorks: [
      { title: "Le Prince", year: 1513, type: "Traité politique" },
      { title: "Discours sur la première décade de Tite-Live", year: 1517, type: "Philosophie politique" },
      { title: "Histoire de Florence", year: 1525, type: "Histoire" },
      { title: "L'Art de la guerre", year: 1521, type: "Traité militaire" },
      { title: "Mandragore", year: 1525, type: "Comédie" }
    ]
  },

  {
    name: "Michel de Montaigne",
    slug: "montaigne",
    fullName: "Michel Eyquem de Montaigne",
    birthYear: 1533,
    deathYear: 1592,
    birthPlace: "Périgueux (France)",
    nationality: "Français",
    century: "XVIe siècle",
    biography: `Michel de Montaigne (1533-1592), seigneur de Montaigne, est l'une des figures les plus originales et influentes de la Renaissance européenne. Magistrat, maire de Bordeaux, mais surtout créateur d'un genre littéraire et philosophique nouveau, les "Essais", Montaigne nous a laissé une œuvre d'une honnêteté intellectuelle et d'une curiosité universelle qui continue d'inspirer les lecteurs quatre siècles plus tard.

Les "Essais", publiés en 1580 (deux livres) puis 1588 (trois livres), représentent une entreprise inédite : se peindre soi-même avec la plus grande fidélité, "car c'est moi que je peins". Contrairement à la tradition autobiographique qui glorifiait les actions de l'auteur, Montaigne entreprend d'explorer son esprit dans tous ses recoins, avec ses contradictions, ses faiblesses, ses doutes, sans masque ni complaisance. Ce projet d'introspection systématique inaugure la tradition moderne de l'autobiographie et de la conscience de soi.

La philosophie montaignienne se caractérise par un scepticisme modéré. Héritier du scepticisme antique (Pyrrhon), Montaigne utilise le doute comme méthode pour atteindre la tranquillité de l'âme. Son célèbre "Que sais-je ?" (que fait figurer son médailon) exprime cette sagesse du jugement suspendu. Face aux conflits religieux qui déchirent la France (guerres de Religion), Montaigne refuse les certitudes dogmatiques qui mènent à la violence. Son scepticisme est épistémologique (nous ne pouvons connaître l'essence des choses) mais surtout moral : le doute nous rend tolérant, modéré, humain.

Cependant, ce scepticisme n'est pas nihilisme. Montaigne propose un humanisme modeste qui trouve dans la vie quotidienne, l'amitié, la conversation, la lecture, les plaisirs simples, un contentement suffisant. Son célèbre chapitre "De l'amitié" célèbre l'amitié rare qu'il lia avec Étienne de La Boétie, modelée sur l'amitié antique (Cicéron, Aristote) mais intensifiée jusqu'à la fusion des âmes.

Le chapitre "Des cannibales" exprime sa critique du colonialisme et de l'ethnocentrisme européen. Les "sauvages" du Nouveau Monde, loin d'être barbares, vivent selon des vertus naturelles que la civilisation corrompue a oubliées. Ce relativisme culturel, rare au XVIe siècle, témoigne de l'ouverture d'esprit de Montaigne.

En éducation, Montaigne critique le pédantisme de son époque. Dans "De l'institution des enfants", il propose une pédagogie humaniste : former un jugement plutôt que bourrer la mémoire, pratiquer les langues vivantes (pas seulement le latin), voyager pour découvrir d'autres mœurs, développer le corps autant que l'esprit, éduquer par l'exemple et l'expérience, non par la contrainte et la récitation. Ce programme préfigure l'éducation moderne.

En politique, Montaigne est modératiste. Dans un contexte de guerre civile, il refuse les extrêmes catholiques et protestants, cherchant la voie de la modération, de la tolérance, de la "juste milieu". Sa conception de la tolérance n'est pas libérale (au sens moderne) mais pragmatique : chaque individu devrait être libre de servir Dieu selon sa conscience, tant que l'ordre public n'est pas troublé.

Montaigne aborde presque tous les sujets : la mort (qu'il apprend à ne pas craindre en la vivant constamment), la douleur (qu'il supporte avec stoïcisme), la conscience (qu'il analyse comme témoin intérieur mais aussi comme juge partial), les rapports entre hommes et femmes (avec une franchise inhabituelle pour l'époque), la lecture (qui est pour lui conversation avec les grands esprits), la vieillesse (qu'il accepte avec sérénité).

Son style, fait de digressions, d'ajouts successifs, de citations latines et grecques, reflète l'esprit qui chemine, se contredit, se corrige. Montaigne ne cesse de dire "je ne sais", "il me semble", modifiant constamment ses pensères au contact de sa propre expérience et de ses lectures.

L'influence de Montaigne est immense et durable. Les moralistes français (La Rochefoucauld, Pascal) lui doivent leur méthode d'analyse introspective. Les philosophes des Lumières (Voltaire, Diderot) ont vu en lui un précurseur de l'esprit critique. Les écrivains (Rousseau, Proust) ont reconnu son génie autobiographique. La phénoménologie contemporaine (Merleau-Ponty) a salué en lui un précurseur de l'analyse de l'expérience vécue. Aujourd'hui encore, les "Essais" restent un modèle de pensée honnête et nuancée.`,
    mainMovements: ["Renaissance", "Scepticisme", "Humanisme"],
    disciplines: ["Morale", "Épistémologie", "Politique", "Pédagogie", "Littérature"],
    keyIdeas: {
      ideas: [
        "Introspection et auto-analyse",
        "Scepticisme modéré ('Que sais-je ?')",
        "Humanisme de la vie quotidienne",
        "Critique du colonialisme et relativisme culturel",
        "Pédagogie du jugement vs érudition livresque",
        "Amitié comme fusion des âmes",
        "Modération politique et tolérance",
        "Acceptation de la mort et de la condition humaine"
      ],
      descriptions: [
        "Se peindre soi-même avec honnêteté radicale",
        "Le doute comme méthode et comme sagesse",
        "Trouver le bonheur dans les plaisirs simples",
        "Critique de l'ethnocentrisme européen",
        "Former l'esprit critique plutôt que la mémoire",
        "L'amitié parfaite est rare et précieuse",
        "Refus des extrêmes dans les conflits religieux",
        "Vivre en accord avec la nature humaine limitée"
      ]
    },
    influences: {
      influencedBy: ["Scepticisme antique (Pyrrhon, Sextus Empiricus)", "Sénèque", "Cicéron", "Aristote", "Plutarque", "Stoïcisme", "Épicurisme"],
      influenced: ["Moralistes français", "Pascal", "Rousseau", "Voltaire", "Lumières", "Autobiographie moderne", "Phénoménologie"]
    },
    majorWorks: [
      { title: "Essais (livres I et II)", year: 1580, type: "Essais philosophiques" },
      { title: "Essais (livre III)", year: 1588, type: "Essais philosophiques" },
      { title: "Journal de voyage", year: 1772, type: "Récit de voyage (posthume)" },
      { title: "Lettres", year: 1570, type: "Correspondance" }
    ]
  },

  {
    name: "Giordano Bruno",
    slug: "giordano-bruno",
    fullName: "Giordano Bruno",
    birthYear: 1548,
    deathYear: 1600,
    birthPlace: "Nola (Royaume de Naples)",
    nationality: "Italien",
    century: "XVIe siècle",
    biography: `Giordano Bruno (1548-1600), philosophe, théologien et poète italien, est l'une des figures les plus fascinantes et tragiques de la Renaissance. Dominicain puis excommunié, vagabond intellectuel à travers l'Europe (Naples, Genève, Paris, Londres, Wittenberg, Prague, Francfort), Bruno développa une philosophie originale qui anticipait plusieurs thèses majeures de la pensée moderne. Condamné pour hérésie par l'Inquisition romaine, il fut brûlé vif à Rome en 1600, devenant un martyr de la liberté de pensée.

Sa thèse cosmologique la plus célèbre est l'infinité de l'univers. Contrairement au modèle aristotélicien-ptoléméen d'un cosmos fini avec une sphère de fixes, Bruno soutient que l'univers est infini et sans centre. Il n'y a ni haut ni bas dans l'univers, tous les points étant équivalents. Cette infinité de l'espace s'accompagne d'une infinité des mondes : les étoiles sont des soleils autour desquels tournent des planètes habitées. Ces thèses, inspirées de Lucrèce et Nicolas de Cues, anticipent la cosmologie moderne mais allaient bien au-delà de ce que Copernic avait osé.

De cette cosmologie découle une théologie radicale. Si l'univers est infini et Dieu est infini, Dieu et l'univers coïncident : Deus sive Natura (Dieu ou la Nature), thèse que Spinoza développera un siècle plus tard. Dieu n'est pas un créateur extérieur au monde, mais la substance infinie qui s'exprime dans une infinité de mondes. Cette thèse panthéiste était inacceptable pour l'orthodoxie chrétienne.

En anthropologie, Bruno développe une théorie de l'âme du monde. L'univers est animé par une âme universelle qui le pénètre et l'organise. Chaque être a une âme, et les âmes individuelles participent de l'âme du monde comme les rayons participent de leur source. Cette conception permet de penser l'unité du vivant et la continuité entre tous les êtres.

Sa théorie de la connaissance est originale. Dans "Le Banquet des cendres" (1584), Bruno distingue les sens, l'intellect, et la raison. Les sens perçoivent les apparences changeantes, l'intellect abstrait les universaux figés, mais la raison saisit les rapports et les analogies. La connaissance suprême est la "connaissance des oppositions" ou coincidentia oppositorum : saisir comment les contraires (fini/infini, un/multiple, corps/esprit) coïncident dans l'unité divine. Cette méthode, inspirée de Nicolas de Cues, préfigure la dialectique hégélienne.

Bruno est également un mnémoniste célèbre. Il développe des techniques de mémoire (artes memoriae) basées sur les images et les lieux magiques, considérant que la mémoire est la faculté la plus divine de l'homme, celle qui nous unit à l'infini. Son "De l'ombre des idées" (1582) propose un système complexe de roues mnémotechniques censé permettre de mémoriser tout le savoir.

En magie, Bruno distingue la magie naturelle (science des sympathies et antipathies naturelles) de la magie démoniaque. La magie naturelle, utilisée par médecins et alchimistes, peut et doit être étudiée car elle révèle les lois secrètes de la nature. Cette magie est la "sagesse ancienne" (prisca theologia) transmise par Hermès Trismégiste, Orphée, Pythagore, et redécouverte à la Renaissance.

La pensée religieuse de Bruno est syncrétiste. Il cherche l'accord fondamental entre toutes les religions, voyant dans les diverses cultes des expressions diverses d'une même vérité primitive. Ce syncrétisme, qui intégrait également des éléments égyptiens, juifs, et chrétiens hétérodoxes, était inacceptable pour l'orthodoxie tridentine.

Son procès (1593-1600) est exemplaire de la confrontation entre la pensée moderne et l'autorité religieuse. Bruno refusa d'abjurer ses thèses principales (infinité de l'univers, pluralité des mondes, âme du monde, syncrétisme religieux) et fut condamné au bûcher. Son dernier mot, "perhaps you pronounce my sentence with more fear than I receive it", témoigne de son courage.

L'influence de Bruno est considérable quoique souvent indirecte. Sa cosmologie influença Kepler et Galilée (qui le critiquèrent cependant). Spinoza reprit sa thèse Deus sive Natura. Le romantisme allemand (Schelling, Hegel) le redécouvrit comme précurseur de la nature philosophique. Aujourd'hui, il est reconnu comme pionnier de la pensée moderne et martyr de la liberté de conscience.`,
    mainMovements: ["Renaissance", "Néo-platonisme", "Hermetisme", "Naturalisme"],
    disciplines: ["Cosmologie", "Métaphysique", "Théologie", "Mnémotechnique", "Magie", "Philosophie de la connaissance"],
    keyIdeas: {
      ideas: [
        "Infinité de l'univers et pluralité des mondes",
        "Deus sive Natura (panthéisme)",
        "Âme du monde et âmes individuelles",
        "Coincidentia oppositorum (coïncidence des opposés)",
        "Magie naturelle et sagesse ancienne",
        "Syncrétisme religieux",
        "Art de la mémoire",
        "Rejet de la création ex nihilo"
      ],
      descriptions: [
        "L'univers est infini, sans centre ni bord",
        "Dieu et la nature coïncident en une substance unique",
        "L'univers est animé par une âme universelle",
        "Les opposés coïncident dans l'unité divine",
        "Étude des sympathies naturelles et lois secrètes",
        "Accord fondamental entre toutes les religions",
        "Techniques mnémotechniques pour la connaissance",
        "Le monde éternel coexiste avec Dieu"
      ]
    },
    influences: {
      influencedBy: ["Copernic", "Nicolas de Cues", "Lucrèce", "Hermès Trismégiste", "Néo-platonisme", "Telesio", "Campanella"],
      influenced: ["Spinoza", "Kepler", "Galilée", "Leibniz", "Romantisme allemand", "Hegel", "Philosophie de la nature", "Liberté de pensée moderne"]
    },
    majorWorks: [
      { title: "De l'infinité, de l'univers et des mondes", year: 1584, type: "Cosmologie" },
      { title: "Le Banquet des cendres", year: 1584, type: "Dialogue philosophique" },
      { title: "De la cause, du principe et de l'un", year: 1584, type: "Métaphysique" },
      { title: "De l'ombre des idées", year: 1582, type: "Mnémotechnique" },
      { title: "Les 120 philosophes", year: 1585, type: "Dialogue" },
      { title: "De la magie", year: 1591, type: "Magie naturelle" }
    ]
  }
];

// Export functions for querying philosophers
export function getMedievalRenaissancePhilosopherBySlug(slug: string): PhilosopherData | undefined {
  return medievalRenaissancePhilosophers.find(p => p.slug === slug);
}

export function getMedievalRenaissancePhilosophersByMovement(movement: string): PhilosopherData[] {
  return medievalRenaissancePhilosophers.filter(p =>
    p.mainMovements.some(m => m.toLowerCase().includes(movement.toLowerCase()))
  );
}

export function getMedievalRenaissancePhilosophersByCentury(century: string): PhilosopherData[] {
  return medievalRenaissancePhilosophers.filter(p => p.century === century);
}

// Export all philosophers
export default medievalRenaissancePhilosophers;
