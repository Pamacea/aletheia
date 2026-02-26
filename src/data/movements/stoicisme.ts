/**
 * Stoïcisme - Philosophical Movement Data
 * École philosophie antique fondée sur la vertu, la raison et l'acceptation du destin
 */

import { MovementData, PhilosopherLink } from './existentialisme';

export const stoicisme: MovementData = {
  id: 'stoicisme',
  name: "Stoïcisme",
  slug: 'stoicisme',
  category: 'philosophie-antique',

  description: `École philosophique fondée à Athènes par Zénon de Citium vers 300 av. J.-C., le stoïcisme propose une philosophie de vie centrée sur la vertu, la raison et l'acceptation du destin. Le nom "stoïcisme" vient du Stoa Poikilé (Portique peint) d'Athènes où Zénon enseignait.

Le stoïcisme se divise en trois périodes : le stoïcisme ancien (Zénon, Cléanthe, Chrysippe), le stoïcisme moyen (Panétius, Posidonius), et le stoïcisme romain (Sénèque, Épictète, Marc Aurèle). Cette école a exercé une influence immense et durable sur la philosophie occidentale.

La philosophie stoïcienne repose sur trois piliers : la logique (théorie de la connaissance), la physique (cosmologie et métaphysique), et l'éthique (art de vivre). L'unité fondamentale de la philosophie est comparée à un jardin : la logique en est la clôture, la physique les arbres, l'éthique les fruits.

L'éthique stoïcienne est célèbre pour sa dichotomie du contrôle : distinguer ce qui dépend de nous (nos jugements, nos désirs, nos actions) de ce qui n'en dépend pas (les événements extérieurs, les actions des autres, la mort). La vertu réside dans l'accord avec la raison universelle (le Logos) qui ordonne le cosmos. Le sage stoïcien cultive l'ataraxie (absence de trouble) et l'apathéia (absence de passion pathologique).

Le stoïcisme enseigne l'amour du destin (amor fati) : accepter avec sérénité ce qui ne dépend pas de nous, car tout arrive selon la raison divine du cosmos. Cette acceptation n'est pas passivité mais accord avec l'ordre rationnel du monde. L'humain est citoyen du monde (cosmopolitisme) : sa véritable patrie est le cosmos entier, pas sa cité d'origine.

Le stoïcisme a connu un immense succès à Rome, où il a inspiré des empereurs (Marc Aurèle), des sénateurs (Sénèque), et des esclaves affranchis (Épictète). Aujourd'hui, le stoïcisme influence la thérapie cognitivo-comportementale (TCC) et connaît un renouveau comme philosophie pratique.`,

  shortDefinition: "Vivre selon la raison, accepter ce qui ne dépend pas de nous, cultiver la vertu comme seul bien",

  period: "IIIe siècle av. J.-C. - IIIe siècle ap. J.-C. (300 av. J.-C. - 200 ap. J.-C.)",

  origins: {
    context: "Athènes après les conquêtes d'Alexandre (époque hellénistique). Le monde grec s'élargit à l'Orient, les cités perdent leur autonomie politique. L'individu doit trouver sa sécurité intérieure plutôt que dans la cité. Montée du cosmopolitisme : le monde comme cité universelle.",
    predecessors: [
      "Héraclite - Logos comme raison universelle gouvernant le cosmos",
      "Antisthène et le cynisme - autarcie, vie selon la nature, mépris des conventions",
      "Socrate - maîtrise de soi, priorité de la vertu sur les biens extérieurs",
      "Platon - l'âme et ses parties, la raison comme guide",
      "Aristote - la vertu comme juste milieu, eudaimonisme"
    ],
    reactionAgainst: [
      "Épicurisme - rejet du plaisir comme souverain bien",
      "Scepticisme - refus du doute universel, affirmation de la possibilité de connaissance",
      "Académisme - critique du probabilisme et du doute sur la vérité",
      "Cynisme extrême - adoption de la morale cynique mais rejet de la mise en scène provocante"
    ]
  },

  keyPrinciples: [
    "Vivre selon la nature - accord avec le Logos rationnel du cosmos",
    "Dichotomie du contrôle - distinguer ce qui dépend de nous et ce qui n'en dépend pas",
    "Vertu comme seul bien - la sagesse, courage, tempérance, justice",
    "Indifférence aux biens extérieurs - santé, richesse, réputation sont indifférents",
    "Amour du destin (amor fati) - acceptation sereine de ce qui arrive",
    "Cosmopolitisme - citoyenneté universelle, tous humains sont frères",
    "Préférences raisonnables - préférer les indifférents conformes à la nature",
    "Ataraxie et apathéia - tranquillité de l'âme et absence de passions pathologiques"
  ],

  keyPhilosophers: [
    'zenon-de-citium',
    'cleanthe',
    'chrysippe',
    'panetius',
    'posidonius',
    'seneque',
    'epictete',
    'marc-aurele',
    'musonius-rufus',
    'hierocles'
  ],

  keyConcepts: [
    'logique',
    'physique',
    'ethique',
    'logoi',
    'dichotomie-du-contrôle',
    'ataraxie',
    'apatheia',
    'prohairesis',
    'amour-du-destin',
    'cosmopolitisme',
    'nature',
    'vertu',
    'indifferents',
    'prefferences-raisonnables',
    'representations',
    'assentiment'
  ],

  variations: [
    {
      name: "Stoïcisme ancien (grec)",
      description: "Période athénienne (IIIe-IIe s. av. J.-C.) avec Zénon, Cléanthe, Chrysippe. Emphase sur la physique (logos spermatikos, théologie), la logique (dialectique) et l'éthique rigoureuse. Chrysippe systématise la doctrine stoïcienne.",
      philosophers: ['zenon-de-citium', 'cleanthe', 'chrysippe']
    },
    {
      name: "Stoïcisme moyen",
      description: "Période de transition (IIe-Ier s. av. J.-C.) avec Panétius et Posidonius. Synthèse avec le platonisme et l'aristotélisme. Introduisent le stoïcisme à Rome. Posidonius influence Cicéron.",
      philosophers: ['panetius', 'posidonius']
    },
    {
      name: "Stoïcisme romain",
      description: "Apogée à Rome (Ier-IIe s. ap. J.-C.) avec Sénèque, Épictète, Marc Aurèle. Emphase sur l'éthique pratique et la vie quotidienne. Moins de métaphysique, plus d'exercices spirituels. Influence immense sur la culture romaine.",
      philosophers: ['seneque', 'epictete', 'marc-aurele']
    }
  ],

  criticisms: [
    "Rigorisme excessif - demande une perfection humainement impossible",
    "Négation de l'émotion - refus de la dimension affective de l'humain",
    "Acceptation sociale - peut justifier l'injustice et le statu quo",
    "Contradictions internes - comment concilier liberté et destin?",
    "Froideur émotionnelle - idéal de vie peu attrayant pour la plupart",
    "Optimisme cosmique injustifié - le monde n'est pas rationnel et bon",
    "Difficulté pratique - idéal de sage inaccessible, enseignement découragent"
  ],

  influence: {
    on: [
      "Christianisme - idea du logos, morale universelle, égalité des humains",
      "Droit romain - concept de loi naturelle (ius naturale)",
      "Renaissance - Néostoïcisme (Juste Lipse, Guillaume du Vair)",
      "Philosophie moderne - Spinoza, Kant (impératif catégorique)",
      "Existentialisme - notion d'engagement et de responsabilité",
      "Thérapie cognitivo-comportementale (TCC) - restructuration cognitive stoïcienne",
      "Développement personnel - stoïcisme moderne comme philosophie pratique"
    ],
    in: [
      "Grèce antique - Athènes hellénistique",
      "Rome - énorme influence sur l'élite romaine, empereurs, sénateurs",
      "Empire romain - philosophie officielle de certains empereurs (Marc Aurèle)",
      "Byzance - transmission tardive via Pères de l'Église",
      "Renaissance européenne - retour au stoïcisme via éditions imprimées",
      "Monde contemporain - renouveau du stoïcisme comme philosophie de vie"
    ]
  },

  metadata: {
    representativeWorks: [
      "Discours - Épictète (Ier siècle ap. J.-C., transcrit par Arrien)",
      "Manuel d'Épictète - Épictète (recueil de maximes)",
      "Pensées pour moi-même - Marc Aurèle (170-180 ap. J.-C.)",
      "Lettres à Lucilius - Sénèque (62-65 ap. J.-C.)",
      "De la brièveté de la vie - Sénèque (49 ap. J.-C.)",
      "De la constance du sage - Sénèque (55 ap. J.-C.)",
      "Du devoir - Cicéron (44 av. J.-C., expose le stoïcisme)",
      "Passages - Chrysippe (IIIe s. av. J.-C., fragments)"
    ],
    relatedMovements: [
      "Cynisme",
      "Épicurisme",
      "Néo-platonisme",
      "Christianisme primitif",
      "Rationalisme moderne"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const stoicismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'zenon-de-citium',
    role: "Fondateur du stoïcisme",
    contribution: `Marchand de Chypre venu à Athènes, Zénon fonde l'école stoïcienne vers 300 av. J.-C. au Portique peint (Stoa Poikilé). Son enseignement oral (aucun écrit conservé) développe une philosophie systématique en trois parties : logique (théorie de la connaissance), physique (métaphysique et cosmologie), éthique (art de vivre). Division célèbre des philosophies en comparaison à un jardin : la logique en est la clôture, la physique les arbres, l'éthique les fruits. Formule le principe central : "vivre conformément à la nature", c'est-à-dire selon la raison universelle (Logos) qui ordonne le cosmos. Introduit la distinction entre ce qui dépend de nous et ce qui n'en dépend pas, fondement de l'éthique stoïcienne. Ses idées sont développées par ses successeurs Cléanthe et Chrysippe.`
  },
  {
    philosopherSlug: 'cleanthe',
    role: "Deuxième scholarque",
    contribution: `Successeur de Zénon à la tête de l'école (263-232 av. J.-C.), ancien boxeur devenu philosophe. Poète mystique, il compose le "Hymne à Zeus" qui exprime la piété stoïcienne : Zeus comme Logos ordonnateur, destin comme raison divine. Défend la thèse de l'existence des dieux et la providence contre les attaques épicuriennes. Développe l'idée de "tension" (tonos) des principes actifs dans la nature. Apporte une dimension religieuse au stoïcisme : le cosmos comme être divin vivant et rationnel. Son ouvrage "De la nature" influence la physique stoïcienne. Mort à 99 ans en laissant l'école à Chrysippe.`
  },
  {
    philosopherSlug: 'chrysippe',
    role: "Troisième scholarque et systématiseur",
    contribution: `Le plus grand logicien de l'Antiquité selon Diogène Laërce, Chrysippe systematise le stoïcisme. Successeur de Cléanthe (232-206 av. J.-C.), il écrit plus de 700 ouvrages (perdus) couvrant tous les aspects de la philosophie. Développe la logique propositionnelle : distinction entre propositions simples et complexes, analyse des connecteurs logiques, théorie de l'implication. Physique : théorie du mélange total (krasis di' holôn) des corps, propagation du feu créateur (pyr technikon). Éthique : analyse détaillée des passions comme jugements erronés, théorie des indifférents préférés. Défend le déterminisme stoïcien (fatum) et la compatibilité avec la liberté. Sa dialectique est réputée invincible par ses contemporains.`
  },
  {
    philosopherSlug: 'seneque',
    role: "Stoïcien romain et homme d'État",
    contribution: `Sénèque (4 av. J.-C. - 65 ap. J.-C.), ministre de Néron, est le grand écrivain stoïcien de Rome. Ses "Lettres à Lucilius" exposent la sagesse stoïcienne appliquée à la vie quotidienne : gestion du temps, maîtrise des passions, préparation à la mort. "De la brièveté de la vie" critique le gaspillage du temps et l'absence de buts. "De la constance du sage" affirme la sagesse inséparable de la liberté. Adaptation du stoïcisme à la culture romaine : moins de métaphysique, plus d'éthique pratique. Style brillant, aphorismes célèbres ("la vie est courte si on sait bien l'user"). Sa mort spectaculaire (suicide forcé) exemplifie la constance stoïcienne face à la mort. Influence immense sur la littérature et la pensée européennes.`
  },
  {
    philosopherSlug: 'epictete',
    role: "Maître stoïcien de la vie quotidienne",
    contribution: `Esclave affranchi, Épictète (50-135 ap. J.-C.) fonde une école philosophique à Nicopolis. Son enseignement, transcrit par son élève Arrien dans les "Discours", est entièrement pratique. Division célèbre des choses : "ce qui dépend de nous" (jugements, désirs, actions) vs "ce qui n'en dépend pas" (corps, biens, réputation). La prohairesis (choix moral) comme essence de l'humain. Exercices spirituels : examen de conscience le soir, prévision des maux possible, retenue initiale face aux impressions. "Le Manuel" résume les principes stoïciens en 53 chapitres. Influencé par le cynisme, il prêche la frugalité, l'indépendance et la fraternité universelle. Sa vie exemplaire (simplicité, résilience) incarne son enseignement.`
  },
  {
    philosopherSlug: 'marc-aurele',
    role: "Empereur philosophe stoïcien",
    contribution: `Empereur romain (121-180 ap. J.-C.), Marc Aurèle écrit les "Pensées pour moi-même" (Meditations) comme journal philosophique personnel pendant les campagnes militaires. Ouvuvre unique : réflexions intimes sur la mort, le devoir, la nature humaine et la place de l'humain dans le cosmos. Thèmes :Tout est éphémère, changement perpétuel ; vivre selon la nature rationnelle ; accepter la mort avec sérénité ; chaque instant comme occasion de pratique philosophique ; bienveillance envers tous, même les ennemis ; conscience d'être partie du tout cosmique. Style abrupt, répétitif, sincère. Témoignage rare d'un homme d'État confrontant les exigences du pouvoir et les exigences de la sagesse stoïcienne. Modèle du philosophe-roi idéal. Influence immense sur la pensée politique et éthique.`
  }
];
