/**
 * Early Modern Philosophers Data (17th-18th Century)
 * Période moderne de la philosophie occidentale
 *
 * Ce fichier contient les données des philosophes majeurs de la période moderne (XVIIe-XVIIIe siècles),
 * marquée par la révolution scientifique, les Lumières et la naissance de la philosophie moderne.
 *
 * Chaque philosophe inclut :
 * - Informations de base (nom, dates, nationalité)
 * - Biographie complète (200-500 mots en français)
 * - Idées clés (5+ concepts avec descriptions)
 * - Œuvres majeures (3+ avec années)
 * - Influences (ceux qui l'ont influencé + ceux qu'il a influencés)
 * - Mouvements et traditions philosophiques
 */

import { PhilosopherData } from '../philosophers';

export const earlyModernPhilosophers: PhilosopherData[] = [
  // =============================================================================
  // RATIONALISME CONTINENTAL
  // =============================================================================

  {
    name: "Francis Bacon",
    slug: "francis-bacon",
    fullName: "Francis Bacon",
    birthYear: 1561,
    deathYear: 1626,
    birthPlace: "Londres, Angleterre",
    nationality: "Anglais",
    century: "XVIe-XVIIe siècle",
    biography: `Francis Bacon (1561-1626) est considéré comme le père de la méthode scientifique moderne et l'un des plus grands philosophes de la période moderne. Né à Londres dans une famille noble, il fut Lord Chancelier d'Angleterre sous le règne de Jacques Ier. Son œuvre philosophique majeure, le Novum Organum (1620), constitue une rupture radicale avec la logique aristotélicienne dominante depuis le Moyen Âge.

Bacon a développé une critique systématique de la scolastique et des idola (idoles) qui obscurcissent l'esprit humain. Ces préjugés cognitifs sont de quatre types : les idola tribus (illusions de la nature humaine), les idola specus (illusions individuelles), les idola fori (illusions du langage) et les idola theatri (illusions des systèmes philosophiques). Pour surmonter ces obstacles, Bacon propose l'induction méthodique, qui part des observations particulières pour remonter aux axiomes généraux, contrairement à la déduction syllogistique.

Sa conception de la science comme "puissance" (scientia potentia) marque un tournant décisif : la connaissance n'est plus une contemplation désintéressée mais un outil pour maîtriser la nature et améliorer la condition humaine. Bacon préfigure ainsi la technologie moderne et l'idée que "savoir, c'est pouvoir".

Bacon a également élaboré une philosophie de l'éducation et une théorie de l'État dans ses œuvres politiques. Il défend une monarchie tempérée par les lois et conçoit la science comme une entreprise collective nécessitant une organisation institutionnelle – une idée qui préfigure l'Académie des sciences et les centres de recherche modernes.

Son influence immense s'étend à la Royal Society (fondée en 1660), à la révolution scientifique du XVIIe siècle et à l'empirisme britannique. Bien que ses propres travaux scientifiques soient restés limités, sa méthodologie a posé les fondations de la science expérimentale moderne et de la philosophie des sciences.`,
    mainMovements: ["Empirisme", "Révolution scientifique", "Renaissance philosophique"],
    disciplines: ["Épistémologie", "Philosophie des sciences", "Philosophie politique", "Logique"],
    keyIdeas: {
      ideas: [
        "La méthode inductive et le Novum Organum",
        "La théorie des idoles (préjugés cognitifs)",
        "Savoir c'est pouvoir (scientia potentia)",
        "La critique de la scolastique et d'Aristote",
        "L'organisation institutionnelle de la science",
        "La science comme maîtrise de la nature"
      ],
      descriptions: [
        "Méthode qui remonte des faits particuliers aux principes généraux",
        "Les quatre types d'illusions qui obscurcissent l'esprit humain",
        "La connaissance est un instrument de puissance sur la nature",
        "Refus de la logique déductive aristotélicienne au profit de l'observation",
        "Nécessité d'organiser la science en institutions collectives",
        "Le but de la science est de transformer le monde, pas seulement de le connaître"
      ]
    },
    influences: {
      influencedBy: ["Aristote", "Platon", "Scolastique", "Nicolas Machiavel", "Alchimie"],
      influenced: ["Thomas Hobbes", "John Locke", "Isaac Newton", "Royal Society", "Empirisme britannique", "Philosophie des sciences moderne"]
    },
    majorWorks: [
      { title: "Essais", year: 1597, type: "Essai philosophique" },
      { title: "Du progrès et de la promotion des savoirs", year: 1605, type: "Traité" },
      { title: "Novum Organum", year: 1620, type: "Traité de méthodologie" },
      { title: "La Nouvelle Atlantide", year: 1626, type: "Utopie scientifique" }
    ]
  },

  {
    name: "René Descartes",
    slug: "rene-descartes",
    fullName: "René Descartes",
    birthYear: 1596,
    deathYear: 1650,
    birthPlace: "La Haye en Touraine, France",
    nationality: "Français",
    century: "XVIIe siècle",
    biography: `René Descartes (1596-1650), surnommé le "père de la philosophie moderne", a opéré une rupture radicale avec la tradition scolastique et inauguré le rationalisme continental. Né en Touraine et formé au collège jésuite de La Flèche, il a choisi la vie d'un "voyageur" plutôt qu'une carrière universitaire conventionnelle, vivant successivement aux Pays-Bas, en Allemagne et en France.

Son œuvre philosophique commence avec le "rêve" de 1619, où il conçoit un projet de science universelle fondée sur la raison mathématique. En 1637, il publie le Discours de la méthode, qui expose les quatre règles de sa méthode (évidence, analyse, synthèse, énumération) et formule le célèbre "cogito ergo sum" comme premier principe certain. Ce doute méthodique radical, qui remet en question toutes ses opinions, aboutit à la découverte de la conscience comme fondement indubitable.

Descartes développe une métaphysique dualiste distinguant deux substances : la substance pensante (res cogitans, l'âme) et la substance étendue (res extensa, la matière). Ce dualisme permet de fonder la science mécaniste de la matière tout en préservant la liberté de l'âme et l'existence de Dieu. Les preuves de l'existence de Dieu (preuve ontologique et preuve par l'idée de parfait) jouent un rôle crucial dans son système comme garant de la vérité de nos idées claires et distinctes.

En physique, Descartes propose une vision mécaniste de l'univers où tous les phénomènes s'expliquent par la matière et le mouvement, sans qualités occultes. Ses lois du choc et sa théorie des tourbillons cosmiques dominent la physique continentale jusqu'à Newton. En mathématiques, il crée la géométrie analytique, reliant algèbre et géométrie.

La controverse avec l'Église sur la liberté de penser et l'âme des bêtes l'a contraint à l'exil aux Pays-Bas. Malgré la condamnation posthume de ses œuvres, son influence est immense : il a fondé le rationalisme, inspiré Spinoza et Leibniz, et posé les bases de la philosophie moderne de la conscience.`,
    mainMovements: ["Rationalisme", "Mécanisme", "Cartésianisme", "Philosophie moderne"],
    disciplines: ["Métaphysique", "Épistémologie", "Physique", "Mathématiques", "Philosophie de l'esprit"],
    keyIdeas: {
      ideas: [
        "Le cogito ergo sum comme premier principe",
        "Le doute méthodique et l'évidence",
        "Le dualisme substance pensante/substance étendue",
        "Les preuves de l'existence de Dieu",
        "La méthode mathématique en philosophie",
        "Le mécanisme cartésien en physique"
      ],
      descriptions: [
        "Je pense donc je suis - fondement de la certitude philosophique",
        "Douter radicalement de tout pour trouver une vérité certaine",
        "Distinction entre l'âme pensante et le corps matériel",
        "L'idée de parfait en nous prouve l'existence de Dieu",
        "Appliquer la rigueur mathématique au raisonnement philosophique",
        "L'univers comme une grande machine régie par des lois physiques"
      ]
    },
    influences: {
      influencedBy: ["Platon", "Augustin d'Hippone", "Scolastique", "Mathématiques", "Montaigne"],
      influenced: ["Spinoza", "Leibniz", "Malebranche", "Kant", "Rationalisme continental", "Philosophie de la conscience"]
    },
    majorWorks: [
      { title: "Discours de la méthode", year: 1637, type: "Traité philosophique" },
      { title: "Méditations métaphysiques", year: 1641, type: "Méditation philosophique" },
      { title: "Principes de la philosophie", year: 1644, type: "Traité systématique" },
      { title: "Les Passions de l'âme", year: 1649, type: "Traité de psychologie" },
      { title: "Géométrie", year: 1637, type: "Traité mathématique" }
    ]
  },

  {
    name: "Baruch Spinoza",
    slug: "baruch-spinoza",
    fullName: "Baruch Spinoza (Bento de Espinosa)",
    birthYear: 1632,
    deathYear: 1677,
    birthPlace: "Amsterdam, Pays-Bas",
    nationality: "Néerlandais (d'origine portugaise)",
    century: "XVIIe siècle",
    biography: `Baruch Spinoza (1632-1677) est l'un des philosophes les plus radicaux et originaux de l'histoire de la pensée occidentale. Né à Amsterdam dans une famille juive portugaise ayant fui l'Inquisition, il reçoit une éducation rabbinique traditionnelle mais est exclu définitivement de la communauté juive en 1656 pour hérésie (herem). Cette excommunication le contraint à changer son prénom pour le latin "Benedictus" et à vivre une vie modeste et solitaire, gagnant sa vie en polissant des lentilles optiques.

Son chef-d'œuvre, l'Éthique, publié à titre posthume en 1677, développe un système philosophique d'une rigueur géométrique exceptionnelle ("more geometrico"). Spinoza y construit une métaphysique moniste : il n'existe qu'une seule substance infinie, "Deus sive Natura" (Dieu ou la Nature), comprenant une infinité d'attributs dont nous n'en connaissons que deux : la pensée et l'étendue. Tout ce qui existe est un "mode" de cette substance unique, nécessairement déterminé par les lois éternelles de la nature.

Cette ontologie mène à une éthique originale : la liberté n'est pas le libre arbitre (illusion pour Spinoza) mais la compréhension de la nécessité. Le "conatus", l'effort de chaque être pour persévérer dans son être, devient le fondement de la psychologie. Les affects sont classés en actions (quand nous sommes cause adéquate) et passions (quand nous sommes cause inadéquate). La "béatitude" suprême est l'"amour intellectuel de Dieu", connaissance intellectuelle de notre place dans le système nécessaire de la nature.

Spinoza développe également une philosophie politique originale dans le Traité théologico-politique (1670), où il défend la liberté de pensée, la séparation de la philosophie et de la théologie, et la démocratie comme régime le plus naturel. Son interprétation historique et critique de la Bible préfigure l'exégèse moderne.

Son rationalisme radical, son athéisme (au sens d'identité de Dieu et la nature) et sa défense de la démocratie ont fait de lui un penseur maudit, accusé de panthéisme et d'athéisme. Pourtant, son influence philosophique est immense : il inspire le romantisme, Hegel ("soit Spinoza, soit pas de philosophie"), Nietzsche, et la philosophie de la vie moderne.`,
    mainMovements: ["Rationalisme", "Monisme", "Panthéisme", "Philosophie politique"],
    disciplines: ["Métaphysique", "Éthique", "Philosophie politique", "Exégèse biblique", "Psychologie"],
    keyIdeas: {
      ideas: [
        "Deus sive Natura (Dieu ou la Nature)",
        "Le monisme substance unique",
        "L'éthique more geometrico",
        "Le déterminisme et la nécessité",
        "Le conatus et la théorie des affects",
        "La liberté comme compréhension de la nécessité"
      ],
      descriptions: [
        "Identification de Dieu et de la Nature comme substance unique",
        "Il n'existe qu'une seule substance infinie avec une infinité d'attributs",
        "Exposition géométrique de l'éthique avec définitions, axiomes et propositions",
        "Tout est nécessairement déterminé par les lois éternelles de la nature",
        "Effort de chaque être pour persévérer dans son être",
        "La vraie liberté est la connaissance de la nécessité, pas le libre arbitre"
      ]
    },
    influences: {
      influencedBy: ["Descartes", "Stoïcisme", "Maïmonide", "Hobbes", "Giordano Bruno"],
      influenced: ["Hegel", "Nietzsche", "Goethe", "Romantisme", "Leibniz", "Philosophie de la vie"]
    },
    majorWorks: [
      { title: "Traité de la réforme de l'entendement", year: 1661, type: "Traité de méthodologie" },
      { title: "Principes de la philosophie de Descartes", year: 1663, type: "Commentaire" },
      { title: "Traité théologico-politique", year: 1670, type: "Traité politique" },
      { title: "Éthique", year: 1677, type: "Traité de métaphysique et d'éthique" },
      { title: "Traité politique", year: 1677, type: "Traité politique inachevé" }
    ]
  },

  {
    name: "Gottfried Wilhelm Leibniz",
    slug: "gottfried-wilhelm-leibniz",
    fullName: "Gottfried Wilhelm Leibniz",
    birthYear: 1646,
    deathYear: 1716,
    birthPlace: "Leipzig, Allemagne",
    nationality: "Allemand",
    century: "XVIIe-XVIIIe siècle",
    biography: `Gottfried Wilhelm Leibniz (1646-1716) est l'un des plus grands génies universels de l'histoire, à la fois philosophe, mathématicien, physicien, juriste, historien et diplomate. Né à Leipzig, il montre une précocité intellectuelle extraordinaire et se forme dans plusieurs universités allemandes. Il passe la plus grande partie de sa vie au service de la cour de Hanovre, tout en entretenant une vaste correspondance avec les intellectuels européens.

Son système philosophique, exposé principalement dans la Monadologie (1714), repose sur la théorie des monades : des substances simples, immatérielles et indivisibles, dont l'univers est composé. Chaque monade est un "miroir vivant de l'univers", reflétant tout le cosmos selon son point de vue particulier. Ces monades n'ont pas de "fenêtres" (pas d'action réciproque causale) mais sont harmonisées par un "principe de préétablie" établi par Dieu. Cette métaphysique résout le problème de la communication entre substances (le problème cartésien de l'interaction âme-corps) tout en préservant l'ordre divin.

Leibniz développe une théorie de la connaissance originale : il n'y a pas d'idées innées dans l'âme mais des potentiels qui s'actualisent par l'expérience ("nihil est in intellectu quod non prius fuerit in sensu"). Cependant, il défend contre Locke l'existence de "vérités de raison" nécessaires, indépendantes de l'expérience, comme les principes de logique et de mathématiques. Cette distinction entre vérités de raison et vérités de fait fondée sur le "principe de raison suffisante" devient centrale en épistémologie.

En mathématiques, Leibniz invente le calcul infinitésimal simultanément à Newton (avec une notation supérieure), développe le système binaire (fondement de l'informatique), et crée une machine à calculer mécanique. En physique, il défend la conservation de la "vis viva" (énergie cinétique) contre Descartes et développe une dynamique supérieure à celle de Newton.

Leibniz est aussi un précurseur de la logique moderne et de l'informatique avec son projet de "characteristica universalis", un langage formel universel permettant de calculer les vérités philosophiques et scientifiques. Son rêve de résoudre les controverses par le calcul ("Calculemus !") préfigure l'intelligence artificielle.

Son œuvre politique et juridique comprend des projets d'unification de l'Europe, la codification du droit, et la défense de la tolérance religieuse. Il tente de réunir les Églises chrétiennes et correspond avec les missionnaires jésuites en Chine.`,
    mainMovements: ["Rationalisme", "Monadologie", "Théodicée", "Philosophie moderne"],
    disciplines: ["Métaphysique", "Logique", "Mathématiques", "Physique", "Philosophie politique", "Droit"],
    keyIdeas: {
      ideas: [
        "La théorie des monades",
        "L'harmonie préétablie",
        "Le principe de raison suffisante",
        "L'identité des indiscernables",
        "Vérités de raison et vérités de fait",
        "Le meilleur des mondes possibles"
      ],
      descriptions: [
        "L'univers est composé de substances simples immatérielles et sans fenêtres",
        "Dieu a harmonisé les monades pour qu'elles semblent agir les unes sur les autres",
        "Tout doit avoir une raison suffisante pour être ou arriver",
        "Il ne peut exister deux êtres parfaitement identiques",
        "Distinction entre vérités nécessaires (raison) et contingentes (fait)",
        "Dieu a choisi de créer le meilleur des mondes possibles"
      ]
    },
    influences: {
      influencedBy: ["Descartes", "Spinoza", "Aristote", "Scolastique", "Kabbale"],
      influenced: ["Kant", "Hegel", "Russell", "Logique moderne", "Philosophie analytique"]
    },
    majorWorks: [
      { title: "Discours de métaphysique", year: 1686, type: "Traité" },
      { title: "Nouveaux essais sur l'entendement humain", year: 1704, type: "Réponse à Locke" },
      { title: "Essais de théodicée", year: 1710, type: "Traité" },
      { title: "Monadologie", year: 1714, type: "Traité synthétique" }
    ]
  },

  // =============================================================================
  // EMPIRISME BRITANNIQUE
  // =============================================================================

  {
    name: "Thomas Hobbes",
    slug: "thomas-hobbes",
    fullName: "Thomas Hobbes",
    birthYear: 1588,
    deathYear: 1679,
    birthPlace: "Westport, Angleterre",
    nationality: "Anglais",
    century: "XVIIe siècle",
    biography: `Thomas Hobbes (1588-1679) est le fondateur de la philosophie politique moderne et l'un des plus grands penseurs de l'État. Né prématurément lors de l'invasion espagnole de l'Angleterre ("la peur et moi sommes nés jumeaux", dira-t-il), il étudie à Oxford et devient précepteur de la famille aristocratique des Cavendish, ce qui lui permet de voyager sur le continent et de rencontrer les plus grands esprits de son temps, notamment Descartes et Galilée.

La guerre civile anglaise (1642-1651) marque profondément Hobbes et influence sa philosophie politique. Le spectacle de l'anarchie et de la violence le convainc de la nécessité absolue d'un pouvoir souverain fort pour maintenir l'ordre. Dans le Léviathan (1651), il développe une théorie originale de l'État fondée sur un contrat social : les individus, dans l'état de nature (guerre de tous contre tous), renoncent à leur liberté naturelle et la transfèrent à un souverain (le Léviathan) en échange de sécurité et de paix.

L'état de nature hobbesien est radicalement différent de celui de Locke ou Rousseau : c'est un état de guerre permanent où la vie est "solitaire, pauvre, nasty, brutish, and short". L'égalité naturelle entre les hommes (égaux à tuer) crée une méfiance mutuelle et une compétition pour les ressources. Seul le transfert de pouvoir à un souverain absolu (mais pas despotique) permet d'en sortir.

Hobbes développe une philosophie matérialiste complète : tout ce qui existe est corps en mouvement. Les pensées elles-mêmes sont des "mouvements Internes" du cerveau. Ce matérialisme, combiné à son mécanisme scientifique (inspiré de Galilée), fait de lui un précurseur de la philosophie des Lumières et de la psychologie moderne.

En politique, Hobbes défend l'absolutisme mais sur une base nouvelle : le souverain tire son autorité du consentement des gouvernés, pas du droit divin. Cependant, une fois le contrat conclu, le souverain ne peut être déposé : son pouvoir est absolu et indivisible. Cette théorie innovante influence à la fois le absolutisme moderne et le libéralisme (par sa méthode contractualiste).`,
    mainMovements: ["Empirisme", "Matérialisme", "Contractualisme", "Philosophie politique"],
    disciplines: ["Philosophie politique", "Métaphysique", "Philosophie du droit", "Psychologie"],
    keyIdeas: {
      ideas: [
        "L'état de nature comme guerre de tous contre tous",
        "Le contrat social et le transfert de souveraineté",
        "Le Léviathan comme souverain absolu",
        "Le matérialisme mécaniste",
        "L'égalité naturelle des hommes",
        "La sécurité comme fondement de l'État"
      ],
      descriptions: [
        "L'état de nature est un état de guerre permanent",
        "Les individus acceptent de renoncer à leur liberté au profit d'un souverain",
        "Le souverain (personne ou assemblée) détient un pouvoir absolu",
        "Tout est matière en mouvement, y compris les pensées",
        "Tous les hommes sont naturellement égaux à se nuire mutuellement",
        "L'État existe pour protéger les individus de la violence mutuelle"
      ]
    },
    influences: {
      influencedBy: ["Thucydide", "Aristote", "Euclide", "Galilée", "Guerre civile anglaise"],
      influenced: ["Locke", "Rousseau", "Kant", "Contractualisme moderne", "Philosophie politique libérale"]
    },
    majorWorks: [
      { title: "Les Éléments de loi, naturelle et politique", year: 1640, type: "Traité" },
      { title: "Du citoyen", year: 1642, type: "Traité de philosophie politique" },
      { title: "Léviathan", year: 1651, type: "Magnum opus de philosophie politique" },
      { title: "De la liberté, de la nécessité et du hasard", year: 1654, type: "Traité théologique" }
    ]
  },

  {
    name: "John Locke",
    slug: "john-locke",
    fullName: "John Locke",
    birthYear: 1632,
    deathYear: 1704,
    birthPlace: "Wrington, Angleterre",
    nationality: "Anglais",
    century: "XVIIe-XVIIIe siècle",
    biography: `John Locke (1632-1704) est le père de l'empirisme moderne et l'un des penseurs les plus influents de l'histoire. Né dans le Somerset, il étudie à Oxford et enseigne pendant quelques années avant de devenir secrétaire médical et politique de Lord Ashley, le futur comte de Shaftesbury. Cette expérience politique le confronte directement aux grandes questions constitutionnelles de son temps.

Son œuvre majeure, l'Essai sur l'entendement humain (1689), fonde l'empirisme britannique sur deux principes fondamentaux. Premièrement, la critique des idées innées : à la naissance, l'esprit est une "tabula rasa" (tablette vierge) dépourvue de principes innés. Deuxièmement, toutes nos idées dérivent de l'expérience, soit de la sensation (expérience externe) soit de la réflexion (expérience interne de nos propres opérations mentales). Locke distingue les idées simples (qui viennent directement de l'expérience) des idées complexes (que l'esprit combine, compare ou abstrait).

En philosophie politique, le Traité du gouvernement civil (1689) pose les fondations du libéralisme moderne. Locke développe une théorie de l'état de nature où les hommes sont libres et égaux, gouvernés par la loi naturelle (la raison). Contrairement à Hobbes, l'état de nature n'est pas un état de guerre mais peut devenir conflictuel sans juge impartial. Les hommes créent donc un gouvernement par contrat social pour protéger leurs droits naturels : vie, liberté et propriété.

La théorie lockéenne de la propriété est particulièrement originale : la propriété naît du mélange du travail individuel avec les ressources communes de la nature. Le droit de propriété précède donc l'État, dont la fonction principale est de le protéger. Si le gouvernement viole la confiance du peuple, celui-ci a le droit de résistance et de révolution - une théorie qui influencera profondément les révolutions américaine et française.

Locke défend également la tolérance religieuse (sauf pour les catholiques et les athées, dans le contexte de son temps) dans ses Lettres sur la tolérance. Son influence immense s'étend à Montesquieu, Rousseau, les Pères fondateurs américains, et la philosophie politique contemporaine.`,
    mainMovements: ["Empirisme", "Libéralisme", "Contractualisme", "Philosophie des Lumières"],
    disciplines: ["Épistémologie", "Philosophie politique", "Philosophie du droit", "Théologie"],
    keyIdeas: {
      ideas: [
        "La tabula rasa et la critique des idées innées",
        "L'empirisme : toutes les idées viennent de l'expérience",
        "Les droits naturels : vie, liberté, propriété",
        "Le contrat social et le droit de résistance",
        "La théorie de la propriété comme fruit du travail",
        "La tolérance religieuse"
      ],
      descriptions: [
        "L'esprit est une tablette vierge à la naissance",
        "Toute notre connaissance dérive de la sensation et de la réflexion",
        "Droits inaliénables que le gouvernement doit protéger",
        "Le peuple a le droit de renverser un gouvernement tyrannique",
        "La propriété légitime naît du mélange du travail avec la nature",
        "Séparation de l'Église et de l'État, liberté de conscience"
      ]
    },
    influences: {
      influencedBy: ["Descartes", "Hobbes", "Francis Bacon", "Robert Boyle", "Guerre civile anglaise"],
      influenced: ["Berkeley", "Hume", "Voltaire", "Montesquieu", "Rousseau", "Pères fondateurs américains"]
    },
    majorWorks: [
      { title: "Essai sur l'entendement humain", year: 1689, type: "Traité d'épistémologie" },
      { title: "Traité du gouvernement civil", year: 1689, type: "Traité de philosophie politique" },
      { title: "Lettres sur la tolérance", year: 1689, type: "Essai politique" },
      { title: "Quelques pensées sur l'éducation", year: 1693, type: "Traité pédagogique" }
    ]
  },

  {
    name: "George Berkeley",
    slug: "george-berkeley",
    fullName: "George Berkeley",
    birthYear: 1685,
    deathYear: 1753,
    birthPlace: "Kilkenny, Irlande",
    nationality: "Irlandais",
    century: "XVIIe-XVIIIe siècle",
    biography: `George Berkeley (1685-1753), évêque anglican de Cloyne, est l'un des philosophes les plus originaux et paradoxaux de la tradition empiriste. Né en Irlande, il étudie à Trinity College (Dublin) où il montre une précocité remarquable, publiant ses principales œuvres avant 30 ans. Sa philosophie, souvent réduite à la formule "esse est percipi" (être c'est être perçu), représente un idéalisme immatérialiste radical qui remet en question les fondements mêmes du matérialisme.

Dans les Principes de la connaissance humaine (1710) et les Trois dialogues entre Hylas et Philonous (1713), Berkeley critique l'abstraction généralisée et la distinction entre qualités premières (objectives) et qualités secondes (subjectives) établie par Locke. Pour Berkeley, toutes les qualités sont subjectives : nous ne percevons jamais la "matière" elle-même mais seulement des idées (sensations) dans notre esprit. La croyance en une substance matérielle existant indépendamment de la perception est donc inutile et inintelligible.

Cependant, Berkeley n'est pas un sceptique : le monde extérieur existe bel et bien, mais comme idées dans l'esprit. Ces idées ne dépendent pas de notre esprit fini mais sont "imprimées" en nous par Dieu. L'ordre régulier de la nature, les lois physiques, témoignent de l'activité de l'esprit divin qui soutient continuellement l'existence du monde. L'immatérialisme berkeleyen est donc à la fois une épistémologie (tout est perception) et une théologie (la perception dépend de Dieu).

Berkeley défend également une philosophie du langage originale dans l'Alciphron (1732) et une théorie de la vision dans sa Nouvelle théorie de la vision (1709). Il critique les abstractions mathématiques vides et s'oppose à Newton sur l'existence de l'espace absolu.

Berkeley a passé plusieurs années en Amérique (Rhode Island) où il projetait de fonder une université. Son influence philosophique est immense : il inspire Kant (qui cite son "idéalisme" comme réveil de son "dogmatisme"), la phénoménologie, et le pragmatisme américain. Sa critique du matérialisme reste d'actualité dans les débats sur la conscience et la réalité.`,
    mainMovements: ["Empirisme", "Idéalisme immatérialiste", "Philosophie de la perception"],
    disciplines: ["Métaphysique", "Épistémologie", "Philosophie de la perception", "Théologie", "Philosophie des mathématiques"],
    keyIdeas: {
      ideas: [
        "Esse est percipi (être c'est être perçu)",
        "La critique de la matière",
        "L'idéalisme immatérialiste",
        "Le langage comme instrument de communication",
        "La critique des abstractions vides",
        "L'existence de Dieu comme garantie du monde"
      ],
      descriptions: [
        "L'existence des choses consiste à être perçues",
        "La substance matérielle n'existe pas, seulement les esprits et les idées",
        "Tout ce qui existe est esprit ou idée dans un esprit",
        "Les mots servent à communiquer, pas à représenter des abstractions",
        "Les concepts abstraits généraux n'ont pas de sens",
        "Dieu perçoit continuellement le monde, garantissant son existence"
      ]
    },
    influences: {
      influencedBy: ["Locke", "Malebranche", "Platon", "Nouvelle science"],
      influenced: ["Hume", "Kant", "Hegel", "Pragmatisme américain", "Phénoménologie"]
    },
    majorWorks: [
      { title: "Essai sur une nouvelle théorie de la vision", year: 1709, type: "Traité de philosophie de la perception" },
      { title: "Principes de la connaissance humaine", year: 1710, type: "Traité de métaphysique" },
      { title: "Trois dialogues entre Hylas et Philonous", year: 1713, type: "Dialogue philosophique" },
      { title: "Alciphron", year: 1732, type: "Dialogue philosophique" },
      { title: "Siris", year: 1744, type: "Traité de philosophie naturelle et théologique" }
    ]
  },

  {
    name: "David Hume",
    slug: "david-hume",
    fullName: "David Hume",
    birthYear: 1711,
    deathYear: 1776,
    birthPlace: "Édimbourg, Écosse",
    nationality: "Écossais (britannique)",
    century: "XVIIIe siècle",
    biography: `David Hume (1711-1776) est le plus grand philosophe de l'empirisme britannique et l'un des penseurs les plus importants de la philosophie moderne. Né en Écosse dans une famille de la petite noblesse, il montre très tôt un talent intellectuel remarquable. À 23 ans, il conçoit le projet d'une science exhaustive de la nature humaine qui ferait pour l'homme ce que Newton avait fait pour la nature. Le résultat, le Traité de la nature humaine (1739-1740), est un échec commercial mais fonde sa réputation philosophique.

La philosophie de Hume repose sur une application radicale du principe empiriste : toutes nos idées dérivent d'impressions (expériences vives), et aucune connaissance ne peut dépasser les limites de l'expérience. Cette méthode mène Hume à des conclusions sceptiques dévastatrices. Il critique la notion de causalité : nous ne percevons jamais de "connexion nécessaire" entre les événements, seulement leur conjonction constante. La croyance en la causalité est donc une habitude mentale, pas une connaissance rationnelle.

Hume applique cette critique à toutes les branches de la connaissance. En métaphysique, il suggère que le "moi" est un "faisceau de perceptions" sans substance permanente. En religion, il démonte les arguments classiques pour l'existence de Dieu (cosmologique, téléologique) dans les Dialogues sur la religion naturelle (1779). En morale, il défend une théorie émotionniste : la raison est et ne doit être que "l'esclave des passions", et les jugements moraux dérivent de sentiments de sympathie.

Hume n'est cependant pas un sceptique pyrrhonien complet. Dans l'Enquête sur l'entendement humain (1748), il distingue les "relations d'idées" (vérités logiques et mathématiques, nécessaires et certaines) des "matters of fact" (vérités factuelles, contingentes et fondées sur l'expérience). Cette distinction, reprise par Kant, fonde l'empirisme moderne.

Ses écrits économiques, politiques et historiques sont également importants. Hume défend le commerce international, la liberté politique, et critique le contractualisme politique. Son Histoire d'Angleterre (1754-1762) est un modèle d'historiographie critique.

L'influence de Hume est immense : il réveille Kant de son "dogmatisme" pour aboutir au criticisme, inspire le positivisme logique, et reste central dans les débats contemporains sur la causalité, l'induction et la raison.`,
    mainMovements: ["Empirisme", "Scepticisme", "Utilitarisme", "Philosophie des Lumières"],
    disciplines: ["Épistémologie", "Métaphysique", "Philosophie morale", "Philosophie politique", "Économie", "Histoire"],
    keyIdeas: {
      ideas: [
        "La critique de la causalité comme habitude mentale",
        "La distinction entre relations d'idées et matters of fact",
        "Le moi comme faisceau de perceptions",
        "La raison comme esclave des passions",
        "La critique des arguments pour l'existence de Dieu",
        "Le problème de l'induction"
      ],
      descriptions: [
        "Nous n'observons jamais de connexion nécessaire, seulement la conjonction constante",
        "Distinction entre vérités nécessaires (logique) et contingentes (fait)",
        "Le moi n'est pas une substance mais un ensemble de perceptions successives",
        "Les passions motivent l'action, la raison ne fait que calculer les moyens",
        "Les preuves cosmologiques et téléologiques de Dieu sont invalides",
        "L'induction ne peut être justifiée ni par la logique ni par l'expérience"
      ]
    },
    influences: {
      influencedBy: ["Locke", "Berkeley", "Newton", "Scepticisme ancien", "Montaigne"],
      influenced: ["Kant", "Philosophie analytique", "Positivisme logique", "Utilitarisme", "Comte"]
    },
    majorWorks: [
      { title: "Traité de la nature humaine", year: 1739, type: "Magnum opus philosophique" },
      { title: "Enquête sur l'entendement humain", year: 1748, type: "Résumé du Traité" },
      { title: "Enquête sur les principes de la morale", year: 1751, type: "Traité de philosophie morale" },
      { title: "Dialogues sur la religion naturelle", year: 1779, type: "Critique de la religion" },
      { title: "Histoire d'Angleterre", year: 1754, type: "Œuvre historique" }
    ]
  },

  // =============================================================================
  // PHILOSOPHIE FRANÇAISE DES LUMIÈRES
  // =============================================================================

  {
    name: "Montesquieu",
    slug: "montesquieu",
    fullName: "Charles-Louis de Secondat, baron de La Brède et de Montesquieu",
    birthYear: 1689,
    deathYear: 1755,
    birthPlace: "La Brède, France",
    nationality: "Français",
    century: "XVIIIe siècle",
    biography: `Montesquieu (1689-1755) est l'un des plus grands philosophes politiques des Lumières et un fondateur de la science politique moderne. Né dans une famille noble de Guyenne, il reçoit une éducation juridique et devient président à mortier au Parlement de Bordeaux. Cependant, son esprit curieux et critique le détourne vite d'une carrière de magistrat conventionnelle vers la réflexion philosophique et scientifique.

Son œuvre maîtresse, De l'esprit des lois (1748), représente la première tentative systématique d'analyser les lois politiques comme phénomènes naturels soumis à des causes. Montesquieu développe une théorie des climats : les institutions politiques doivent être adaptées au climat, à la géographie, à l'économie et aux mœurs d'un peuple. Cette approche comparative et fonctionnelle préfigure la sociologie moderne.

La contribution la plus célèbre de Montesquieu est la théorie de la séparation des pouvoirs (exécutif, législatif, judiciaire). Contrairement à la monarchie absolue française où tous les pouvoirs sont concentrés dans les mains du roi, Montesquieu défend leur répartition entre différentes institutions pour éviter la tyrannie. Chaque pouvoir doit "arrêter" les autres par sa résistance ("il faut que, par la disposition des choses, le pouvoir arrête le pouvoir"). Cette théorie influencera profondément les constitutions américaine et française.

Montesquieu distingue trois types de gouvernements : républicain (démocratique ou aristocratique, fondé sur la vertu), monarchique (fondé sur l'honneur), et despotique (fondé sur la peur). Chaque type a son "principe" moteur, et les lois doivent être conformes à ce principe pour être stables. La démocratie requiert la vertu civique ; la monarchie, l'honneur ; le despotisme, la peur.

Dans les Lettres persanes (1721), Montesquieu utilise le procédé de l'exotisme (des Persans voyageant en Europe) pour critiquer ironiquement la société française : l'absolutisme royal, l'intolérance religieuse, le parasitisme de la noblesse, et la condition féminine. Ce procédé de critique oblique influencera Voltaire et Rousseau.

L'influence de Montesquieu est immense : il inspire la Révolution américaine, la Révolution française, les constitutions modernes, et la science politique contemporaine. Sa méthode comparative et son sens de l'histoire en font un précurseur de la sociologie (Comte, Durkheim) et de l'anthropologie politique.`,
    mainMovements: ["Philosophie des Lumières", "Libéralisme", "Constitutionnalisme"],
    disciplines: ["Philosophie politique", "Droit", "Histoire", "Sociologie", "Anthropologie politique"],
    keyIdeas: {
      ideas: [
        "La séparation des pouvoirs (exécutif, législatif, judiciaire)",
        "La théorie des climats et des influences géographiques",
        "La typologie des gouvernements (république, monarchie, despotisme)",
        "Le principe de chaque régime (vertu, honneur, peur)",
        "La critique de l'absolutisme et de l'esclavage",
        "La méthode comparative en science politique"
      ],
      descriptions: [
        "Les pouvoirs doivent être séparés pour éviter la tyrannie",
        "Les lois et institutions dépendent du climat et de la géographie",
        "Les régimes politiques se classent en trois types fondamentaux",
        "Chaque régime repose sur un principe psychologique distinct",
        "L'absolutisme et l'esclavage sont contraires à la nature humaine",
        "Les institutions doivent être étudiées comparativement et empiriquement"
      ]
    },
    influences: {
      influencedBy: ["Locke", "Aristote", "Polybe", "Bodin", "Expérience du Parlement de Bordeaux"],
      influenced: ["Voltaire", "Rousseau", "Constitution américaine", "Révolution française", "Science politique moderne"]
    },
    majorWorks: [
      { title: "Lettres persanes", year: 1721, type: "Roman épistolaire satirique" },
      { title: "Considérations sur les causes de la grandeur des Romains et de leur décadence", year: 1734, type: "Essai historique" },
      { title: "De l'esprit des lois", year: 1748, type: "Traité de philosophie politique" },
      { title: "Défense de l'Esprit des lois", year: 1750, type: "Plaidoyer" }
    ]
  },

  {
    name: "Voltaire",
    slug: "voltaire",
    fullName: "François-Marie Arouet, dit Voltaire",
    birthYear: 1694,
    deathYear: 1778,
    birthPlace: "Paris, France",
    nationality: "Français",
    century: "XVIIIe siècle",
    biography: `Voltaire (1694-1778), de son vrai nom François-Marie Arouet, est le plus célèbre des philosophes des Lumières françaises et l'un des écrivains les plus influents de l'histoire. Né à Paris dans une famille bourgeoise, il reçoit une éducation chez les jésuites mais développe très tôt un esprit critique et sarcastique qui le mène souvent en conflit avec les autorités. Ses emprisonnements à la Bastille et ses exils (Londres 1726-1729, Prusse 1750-1753, Suisse 1755-1778) marquent sa vie d'intellectuel cosmopolite.

Séjour en Angleterre (1726-1729) est décisif : il y découvre la liberté politique, la tolérance religieuse, et la philosophie de Locke et Newton. Les Lettres philosophiques (1734), qui comparent favorablement l'Angleterre à la France, sont condamnées comme subversives. Voltaire devient alors le défenseur infatigable de la liberté d'expression, de la tolérance religieuse, et de la justice contre l'arbitraire.

Le combat de Voltaire contre l'intolérance religieuse culmine avec l'affaire Calas (1762). Jean Calas, protestant, est torturé et exécuté sur la base d'une accusation douteuse de meurtre de son fils pour l'empêcher de se convertir au catholicisme. Voltaire mène une campagne médiatique mondiale qui aboutit à la réhabilitation posthume de Calas en 1765. Son Traité sur la tolérance (1763) devient le texte fondateur de la laïcité moderne.

Philosophiquement, Voltaire défend un déisme rationnel : Dieu existe comme créateur de l'univers mais n'intervient pas dans le monde. Ce Dieu-horloger a créé les lois de la nature et laissé l'univers fonctionner selon elles. Cette position, exposée dans les Éléments de la philosophie de Newton (1738) et le Dictionnaire philosophique (1764), s'oppose à la fois à l'athéisme matérialiste et au christianisme dogmatique.

Le conte philosophique Candide (1759) est une critique dévastatrice de l'optimisme leibnizien ("tout est pour le meilleur dans le meilleur des mondes possibles") à travers l'histoire d'un jeune homme confronté aux catastrophes de l'existence. L'ironie voltairienne y atteint son sommet : "Il faut cultiver notre jardin" devient la leçon d'une sagesse pragmatique et modeste.

Voltaire est aussi un historien important (Essai sur les mœurs, 1756), un dramaturge prolifique (plus de 50 pièces), et un épistolier géant (plus de 20 000 lettres). Son style incisif, son ironie féroce, et son combat pour la justice en font un modèle d'intellectuel engagé. Son influence sur la Révolution française et la démocratie moderne est immense.`,
    mainMovements: ["Philosophie des Lumières", "Déisme", "Philosophie critique"],
    disciplines: ["Philosophie politique", "Philosophie de la religion", "Littérature", "Histoire", "Science"],
    keyIdeas: {
      ideas: [
        "La tolérance religieuse et la liberté d'expression",
        "Le déisme et le Dieu-horloger",
        "La critique de l'optimisme leibnizien",
        "La justice contre l'arbitraire judiciaire",
        "L'anglomanie politique (liberté, parlementarisme)",
        "L'ironie comme arme philosophique"
      ],
      descriptions: [
        "Toutes les religions doivent être tolérées dans l'État",
        "Dieu existe comme créateur mais n'intervient pas dans le monde",
        "Le monde n'est pas le meilleur possible, il est plein de mal",
        "Les procès iniques (Calas, Sirven) démontrent l'intolérance",
        "Les institutions anglaises sont un modèle de liberté",
        "L'ironie et le rire sont des armes contre le dogmatisme"
      ]
    },
    influences: {
      influencedBy: ["Locke", "Newton", "Bayle", "Angleterre", "Lettres persanes de Montesquieu"],
      influenced: ["Diderot", "Révolution française", "Laïcité moderne", "Liberté d'expression", "Littérature philosophique"]
    },
    majorWorks: [
      { title: "Lettres philosophiques", year: 1734, type: "Essai philosophique" },
      { title: "Éléments de la philosophie de Newton", year: 1738, type: "Vulgarisation scientifique" },
      { title: "Candide ou l'Optimisme", year: 1759, type: "Conte philosophique" },
      { title: "Traité sur la tolérance", year: 1763, type: "Plaidoyer philosophique" },
      { title: "Dictionnaire philosophique", year: 1764, type: "Dictionnaire critique" },
      { title: "Essai sur les mœurs", year: 1756, type: "Histoire mondiale" }
    ]
  },

  {
    name: "Jean-Jacques Rousseau",
    slug: "jean-jacques-rousseau",
    fullName: "Jean-Jacques Rousseau",
    birthYear: 1712,
    deathYear: 1778,
    birthPlace: "Genève, Suisse",
    nationality: "Genevois (suisse)",
    century: "XVIIIe siècle",
    biography: `Jean-Jacques Rousseau (1712-1778) est l'un des philosophes les plus influents et controversés des Lumières, souvent considéré comme le père du romantisme et de la démocratie moderne. Né à Genève (alors république indépendante) dans une famille artisanale, il passe une enfance et une jeunesse errantes, marquées par l'abandon maternel précoce et la fuite paternelle. Cette expérience de la marginalité nourrira sa sensibilité et sa critique de la société.

Rousseau se fait d'abord connaître comme musicien et philosophe dans le cercle des philosophes parisiens. En 1750, son Discours sur les sciences et les arts remporte le concours de l'Académie de Dijon. Sa thèse paradoxale : le progrès scientifique et artistique a corrompu l'humanité plutôt que de la moraliser. Ce premier "discours" inaugure sa critique de la civilisation comme processus d'aliénation.

Le Discours sur l'origine de l'inégalité (1755) développe cette critique. Rousseau distingue l'"homme de la nature" (bon, sauvage, solitaire) de l'"homme de l'homme" (corrompu par la société, envieux, comparateur). L'inégalité naturelle (force, intelligence) est amplifiée par l'inégalité sociale (richesse, pouvoir) qui repose sur l'institution de la propriété : "le premier qui, ayant enclos un terrain, s'avisa de dire 'Ceci est à moi', et trouva des gens assez simples pour le croire, fut le vrai fondateur de la société civile".

Le Contrat social (1762) propose une solution politique à cette corruption : les citoyens doivent passer un contrat social créant une "volonté générale" souveraine. Chaque individu s'engage à obéir à cette volonté générale, expression de l'intérêt commun, en devenant à la fois sujet et souverain. La souveraineté appartient au peuple, inaliénable et indivisible. Ce texte fonde la démocratie moderne et inspirera la Révolution française.

Rousseau développe également une philosophie de l'éducation originale dans l'Émile (1762). L'éducation doit respecter le développement naturel de l'enfant, sans contrainte ni dogmatisme religieux, pour former un homme libre et autonome morale. La profession de foi du vicaire savoyard y expose sa religion naturelle : Dieu existe, la conscience est la voix divine en nous, et les religions positives sont souvent sources de fanatisme.

Les Confessions (1782, posthumes) inaugurent l'autobiographie moderne par leur franchise psychologique et leur analyse introspective. Rousseau y exprime sa sensibilité exacerbée, sa passion pour la nature, et son sentiment d'être incompris et persécuté par ses anciens amis philosophes.

Rousseau finit sa vie dans l'amertume et la paranoïa, mais son influence philosophique et politique est immense : il inspire la Révolution française, le romantisme, la pédagogie moderne, la psychologie, et la théorie politique démocratique.`,
    mainMovements: ["Philosophie des Lumières", "Contractualisme", "Romantisme", "Démocratie"],
    disciplines: ["Philosophie politique", "Philosophie morale", "Pédagogie", "Littérature", "Psychologie", "Musique"],
    keyIdeas: {
      ideas: [
        "L'état de nature et la bonté naturelle de l'homme",
        "La corruption par la société et la civilisation",
        "Le contrat social et la volonté générale",
        "La souveraineté populaire inaliénable",
        "L'éducation naturelle dans l'Émile",
        "La religion naturelle et la conscience morale"
      ],
      descriptions: [
        "L'homme naturel est bon, la société le corrompt",
        "La civilisation crée l'envie, la comparaison, l'aliénation",
        "La volonté générale du peuple est source de légitimité politique",
        "Le peuple est souverain et ne peut aliéner sa souveraineté",
        "L'éducation doit respecter le développement naturel de l'enfant",
        "Dieu existe et parle à notre conscience, indépendamment des Églises"
      ]
    },
    influences: {
      influencedBy: ["Platon", "Locke", "Montesquieu", "Calvin (Genève)", "Expérience de la marginalité"],
      influenced: ["Révolution française", "Romantisme", "Démocratie moderne", "Pédagogie nouvelle", "Kant"]
    },
    majorWorks: [
      { title: "Discours sur les sciences et les arts", year: 1750, type: "Essai philosophique" },
      { title: "Discours sur l'origine de l'inégalité", year: 1755, type: "Essai philosophique" },
      { title: "Du contrat social", year: 1762, type: "Traité de philosophie politique" },
      { title: "Émile ou De l'éducation", year: 1762, type: "Traité pédagogique" },
      { title: "Les Confessions", year: 1782, type: "Autobiographie" },
      { title: "Les Rêveries du promeneur solitaire", year: 1782, type: "Méditation introspective" }
    ]
  },

  {
    name: "Denis Diderot",
    slug: "denis-diderot",
    fullName: "Denis Diderot",
    birthYear: 1713,
    deathYear: 1784,
    birthPlace: "Langres, France",
    nationality: "Français",
    century: "XVIIIe siècle",
    biography: `Denis Diderot (1713-1784) est le maître d'œuvre de l'Encyclopédie et l'un des esprits les plus originaux et éclectiques des Lumières françaises. Né à Langres dans une famille d'artisans, il étudie la théologie, la droit, et la philosophie à Paris avant de choisir la carrière d'écrivain et de penseur indépendant. Sa vie est marquée par la pauvreté, la censure, mais aussi par des amitiés intellectuelles fécondes (Rousseau, d'Alembert, d'Holbach).

L'œuvre magistrale de Diderot est l'Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers (1751-1772), qu'il dirige avec d'Alembert. Ce monument en 28 volumes (17 tomes de texte, 11 de planches) a pour but de rassembler toutes les connaissances de l'époque et de les diffuser au plus grand nombre. Mais l'Encyclopédie est aussi une entreprise philosophique et politique : elle promeut la tolérance, le progrès technique, la liberté de pensée, et critique l'obscurantisme religieux et le despotisme politique. Les articles de Diderot (Autorité politique, Intolérance, Liberté) sont de véritables manifestes philosophiques.

Philosophe matérialiste et athée, Diderot défend une vision moniste de l'univers : tout est matière en mouvement, y compris la pensée qui est une propriété émergente de la matière organisée. Dans la Lettre sur les aveugles (1749), il développe une théorie matérialiste de la connaissance : nos sens façonnent notre esprit, et l'aveugle a une conception différente du monde. Cette empirisme radical lui vaut trois mois de prison à Vincennes.

Diderot est aussi un philosophe de l'art et du beau. Dans ses Salons (critiques des expositions royales de peinture), il inaugure la critique d'art moderne en développant une esthétique du naturel et de l'expressivité. Il préfère la peinture grasse, colorée, dynamique (Greuze) à la peinture académique froide. Ses réflexions sur le génie artistique influencent le romantisme.

Les œuvres philosophiques de Diderot mêlent souvent dialogue philosophique et fiction narrative. Le Neveu de Rameau (écrit vers 1760, publié en 1805) est un dialogue fascinant entre un philosophe (MOI) et un bouffon cynique (LUI) qui critique la société avec une ironie destructrice. Jacques le fataliste (1773-1780) explore le déterminisme philosophique à travers les pérégrinations de deux valets et de leur maître, dans un style narratif novateur.

Diderot a également écrit sur la politique, la morale, la science, et a voyagé en Russie (1773-1774) pour rencontrer Catherine II. La mort de sa femme en 1774 et la solitude de ses dernières années n'ont pas affaibli son esprit critique. Son œuvre immense et protéforme préfigure le romantisme, le matérialisme scientifique, et la pensée moderne.`,
    mainMovements: ["Philosophie des Lumières", "Matérialisme", "Encyclopédisme"],
    disciplines: ["Philosophie", "Littérature", "Esthétique", "Science", "Politique", "Critique d'art"],
    keyIdeas: {
      ideas: [
        "L'Encyclopédie comme diffusion des savoirs",
        "Le matérialisme athée",
        "La critique de la religion et de l'autorité",
        "Le déterminisme philosophique",
        "L'esthétique du naturel et du génie",
        "Le dialogue philosophique comme forme littéraire"
      ],
      descriptions: [
        "Rassembler et diffuser toutes les connaissances humaines",
        "Tout est matière, y compris la pensée",
        "L'obscurantisme religieux entrave le progrès humain",
        "Le libre arbitre est une illusion, tout est déterminé",
        "Le beau réside dans l'expressivité naturelle, pas dans l'académisme",
        "La fiction philosophique permet d'explorer des idées complexes"
      ]
    },
    influences: {
      influencedBy: ["Locke", "Spinoza", "La Mettrie", "Duflo", "Libertins"],
      influenced: ["Materialisme du XIXe siècle", "Marx", "Nietzsche", "Sartre", "Critique d'art moderne"]
    },
    majorWorks: [
      { title: "Pensées philosophiques", year: 1746, type: "Essai philosophique" },
      { title: "Lettre sur les aveugles", year: 1749, type: "Essai empiriste" },
      { title: "Encyclopédie", year: 1751, type: "Dictionnaire raisonné" },
      { title: "Le Neveu de Rameau", year: 1760, type: "Dialogue philosophique" },
      { title: "Jacques le fataliste", year: 1773, type: "Roman philosophique" },
      { title: "Salons", year: 1759, type: "Critique d'art" }
    ]
  },

  // =============================================================================
  // PHILOSOPHIE CRITIQUE ALLEMANDE
  // =============================================================================

  {
    name: "Emmanuel Kant",
    slug: "emmanuel-kant",
    fullName: "Immanuel Kant",
    birthYear: 1724,
    deathYear: 1804,
    birthPlace: "Königsberg, Prusse (actuelle Kaliningrad, Russie)",
    nationality: "Allemand (prusien)",
    century: "XVIIIe siècle",
    biography: `Immanuel Kant (1724-1804) est généralement considéré comme le plus grand philosophe moderne et l'auteur d'une révolution copernicienne en philosophie. Né à Königsberg en Prusse orientale, il y passe toute sa vie dans une routine si régulière que les habitants de la ville pouvaient régler leur montre sur ses promenades quotidiennes. Cette existence apparemment monotone cache cependant l'une des œuvres philosophiques les plus systématiques et influentes de l'histoire.

La philosophie kantienne se divise en deux périodes. La période pré-critique (1746-1770) est dominée par des intérêts scientifiques (cosmogonie, géographie physique, anthropologie). Le sommeil dogmatique de Kant est interrompu par la lecture de Hume en 1770, qui l'éveille à l'importance du problème de la causalité et de la métaphysique critique. Cette prise de conscience inaugure la période critique.

Les trois Critiques (1781, 1788, 1790) constituent l'œuvre majeure de Kant. La Critique de la raison pure (1781, 2e éd. 1787) pose la question centrale : "Que puis-je savoir ?" Kant y distingue deux types de jugements : analytiques (dont la vérité dépend seulement des significations, comme "tous les célibataires sont non mariés") et synthétiques (qui ajoutent une information, comme "tous les célibataires sont seuls"). Le génie de Kant est de montrer qu'il existe des jugements synthétiques a priori (indépendants de l'expérience mais informatifs) qui fondent les mathématiques, la physique et la métaphysique.

Pour expliquer cette possibilité, Kant propose sa "révolution copernicienne" : les objets doivent se conformer à notre connaissance, pas l'inverse. Notre esprit impose des formes a priori (espace, temps, catégories) à l'expérience. Nous ne connaissons jamais les choses en soi (noumènes) mais seulement les phénomènes (les choses telles qu'elles nous apparaissent). Cette distinction limite la connaissance scientifique mais laisse de la place pour la liberté morale.

La Critique de la raison pratique (1788) pose la question : "Que dois-je faire ?" Kant y fonde la morale sur l'impératif catégorique : "Agis uniquement d'après la maxime qui fait que tu puisses vouloir en même temps qu'elle devienne une loi universelle." La morale ne dépend ni des désirs ni des conséquences mais de la rationalité pure : agir par devoir, respecter la dignité humaine comme fin en soi, viser le règne des fins. Cette éthique déontologique influence profondément la philosophie morale moderne.

La Critique de la faculté de juger (1790) pose la question : "Que m'est-il permis d'espérer ?" Kant y développe une esthétique du beau et du sublime, et une téléologie de la nature qui relie mécanisme et finalité.

Kant a également écrit sur la politique (Pour la paix perpétuelle, 1795), l'histoire, la religion, et l'anthropologie. Son projet de philosophie systématique (métaphysique de la nature, métaphysique des mœurs) reste inachevé mais son influence sur la philosophie allemande (Fichte, Schelling, Hegel) et continentale est immense.`,
    mainMovements: ["Idéalisme transcendantal", "Philosophie critique", "Lumières tardives"],
    disciplines: ["Métaphysique", "Épistémologie", "Philosophie morale", "Esthétique", "Philosophie politique", "Anthropologie"],
    keyIdeas: {
      ideas: [
        "La révolution copernicienne en philosophie",
        "La distinction phénomènes/noumènes",
        "Les jugements synthétiques a priori",
        "L'impératif catégorique",
        "La morale du devoir",
        "Le sublime et le beau esthétique"
      ],
      descriptions: [
        "Notre connaissance impose des formes à priori à l'expérience",
        "Nous connaissons les apparences (phénomènes) pas les choses en soi (noumènes)",
        "Jugements informatifs et nécessaires qui fondent la science",
        "Agis selon une maxime universalisable comme loi morale",
        "La morale repose sur la raison pure, pas les désirs ou les conséquences",
        "Le sublime dépasse l'entendement, le charme par l'harmonie"
      ]
    },
    influences: {
      influencedBy: ["Hume", "Rousseau", "Leibniz", "Newton", "Lumières"],
      influenced: ["Fichte", "Schelling", "Hegel", "Philosophie allemande", "Idéalisme", "Philosophie analytique", "Phénoménologie"]
    },
    majorWorks: [
      { title: "Critique de la raison pure", year: 1781, type: "Traité d'épistémologie" },
      { title: "Prolégomènes à toute métaphysique future", year: 1783, type: "Introduction simplifiée" },
      { title: "Fondements de la métaphysique des mœurs", year: 1785, type: "Traité de philosophie morale" },
      { title: "Critique de la raison pratique", year: 1788, type: "Traité de philosophie morale" },
      { title: "Critique de la faculté de juger", year: 1790, type: "Traité d'esthétique et de téléologie" },
      { title: "Pour la paix perpétuelle", year: 1795, type: "Projet de paix internationale" }
    ]
  }
];

// Export du nombre de philosophes créés
export const PHILOSOPHER_COUNT = earlyModernPhilosophers.length;
