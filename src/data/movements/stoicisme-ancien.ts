/**
 * Stoïcisme Ancien - Philosophical Movement Data
 * Philosophie gréco-romaine de la vertu, de la raison et de l'acceptation du destin
 */

export interface MovementData {
  id: string;
  name: string;
  slug: string;
  category?: string;
  description: string;
  shortDefinition: string;
  period: string;
  origins: {
    context: string;
    predecessors: string[];
    reactionAgainst: string[];
  };
  keyPrinciples: string[];
  keyPhilosophers: string[];
  keyConcepts: string[];
  variations: Array<{
    name: string;
    description: string;
    philosophers: string[];
  }>;
  criticisms: string[];
  influence: {
    on: string[];
    in: string[];
  };
  metadata: {
    representativeWorks: string[];
    relatedMovements: string[];
  };
}

export interface PhilosopherLink {
  philosopherSlug: string;
  role: string;
  contribution: string;
}

export const stoicismeAncien: MovementData = {
  id: 'stoicisme-ancien',
  name: "Stoïcisme Ancien",
  slug: 'stoicisme-ancien',
  category: 'philosophie-antique',

  description: `École philosophique fondée à Athènes par Zénon de Citium vers 300 av. J.-C., caractérisée par l'identification de la vertu au bonheur, la vie conforme à la nature, l'acceptation du destin (amor fati) et l'apathéia (absence de passion). Le stoïcisme est à la fois une philosophie, une thérapie de l'âme et une pratique de vie.

Le stoïcisme naît dans un monde en crise : les conquêtes d'Alexandre ont bouleversé la cité grecque traditionnelle, créé un cosmopolitisme inédit et mélangé les cultures. L'individu ne trouve plus son identité dans la cité-état mais dans sa propre raison universelle. Le stoïcisme propose une sagesse applicable partout, à tout moment, par tout être humain.

L'histoire du stoïcisme se divise en trois phases :

**Stoïcisme ancien (IIIe-IIe siècle av. J.-C.)** : Zénon de Citium, Cléanthe, Chrysippe. Période de systématisation, développement de la logique, de la physique et de l'éthique. Chrysippe est le grand logicien du stoïcisme, auteur de plus de 700 ouvrages (tous perdus sauf fragments).

**Stoïcisme moyen (Ier siècle av. J.-C.-Ier siècle ap. J.-C.)** : Panétius, Posidonius. Romanisation du stoïcisme, adaptation à la culture latine, influence sur Cicéron.

**Stoïcisme impérial (Ier-IIe siècle ap. J.-C.)** : Sénèque, Épictète, Marc Aurèle. Période de floraison littéraire, emphasis sur l'éthique et la pratique. C'est la période la plus connue.

Au cœur du stoïcisme se trouve la physique : tout est corps, y compris Dieu et l'âme. Dieu est le feu créateur (pneuma), raison immanente au cosmos. Le cosmos est un vivant doué de raison, un organisme synchronisé. Tout arrive par nécessité divine : le destin est la série des causes. Il n'y a pas de hasard, tout est enchaîné.

L'éthique stoïcienne en découle : vivre en accord avec la nature, c'est vivre en accord avec la raison universelle qui anime le cosmos. La vertu est unique : la rectitude de la volonté. Tout le reste (santé, richesse, réputation) est indifférent (adiaphoron). Les indifférents peuvent être préférés (santé) ou rejetés (maladie), mais ne contribuent pas au bonheur.

Les passions sont des jugements erronés : la colère est un jugement "j'ai été lésé", la peur un jugement "quelque chose de terrible va m'arriver". En corrigeant le jugement, on supprime la passion. Le sage stoïcien atteint l'apathéia : absence de passion pathologique, pas absence de sentiment. Il éprouve eupatheiai (sentiments naturels) : joie, prudence, volonté.

Le devoir (kathèkon) est l'action appropriée à chaque situation. Pour le profane, c'est agir selon les règles ; pour le sage, c'est agir avec parfaite connaissance de la nature. Le stoïcien pratique des exercices spirituels : méditation sur la mort, anticipation des maux, examen de conscience, vision d'en haut (prendre du recul), distinction entre ce qui dépend de nous et ce qui ne dépend pas de nous.

Le stoïcisme a connu un immense succès dans l'Antiquité, rivalisant avec le platonisme et l'épicurisme. Il a influencé le christianisme (via la notion de loi naturelle), la philosophie moderne (Spinoza, Kant), et connaît un regain d'intérêt aujourd'hui via les thérapies cognitivo-comportementales (TCC) inspirées des principes stoïciens.`,

  shortDefinition: "Vivre selon la nature raisonnable du cosmos - la vertu comme unique bien, l'acceptation du destin et la maîtrise des passions",

  period: "Antiquité (300 av. J.-C. - 200 ap. J.-C.)",

  origins: {
    context: "Athènes après la mort d'Alexandre (323 av. J.-C.). Période hellénistique : effondrement de la cité-état grecque, cosmopolitisme, mélange des cultures. Individu en quête de repères dans un monde changé. Zénon de Citium (chypriote d'origine phénicienne) fonde l'école sous les Portiques peints (Stoa Poikilè) d'où le nom.",
    predecessors: [
      "Socrate - Indifférence aux biens extérieurs, vertu comme connaissance, maîtrise de soi",
      "Cyniques - Diogène, Cratès - vie conforme à la nature, autarcie, refus des conventions",
      "Héraclite - flux perpétuel, logos comme raison universelle, feu comme principe",
      "Platon - âme du monde, raison comme ordre cosmique",
      "Aristote - vertu comme habitude, vie contemplative supérieure"
    ],
    reactionAgainst: [
      "Épicurisme - Refus du plaisir comme fin, critiqué comme vulgaire et passif",
      "Scepticisme - Refus du doute universel, affirmation de la certitude",
      "Académisme - Critique de la dialectique platonicienne comme stérile",
      "Cynisme radical - Refus du rejet total de la société, vie sociale conforme à la nature",
      "Aristotélisme - Simplification de l'éthique, pas de juste milieu mais excellence absolue"
    ]
  },

  keyPrinciples: [
    "Vivre selon la nature - la nature est raison universelle ordonnant le cosmos",
    "La vertu est le seul bien - santé, richesse, réputation sont des indifférents",
    "Le bonheur réside dans la vertu - pas besoin de biens extérieurs pour être heureux",
    "Tout arrive par nécessité - le destin est la série des causes, pas de hasard",
    "Amor fati - acceptation joyeuse du destin, vouloir ce qui arrive",
    "Les passions sont des jugements erronés - colère, peur, désir sont des erreurs cognitives",
    "Apathéia - absence de passions pathologiques (pas absence de sentiment)",
    "Ce qui dépend de nous - jugement, volonté ; ce qui ne dépend pas - tout le reste",
    "Le devoir (kathèkon) - action appropriée selon la nature et la raison",
    "Cosmopolitisme - tous les hommes sont citoyens du monde, frères par la raison"
  ],

  keyPhilosophers: [
    'zenon-de-citium',
    'chrysippe',
    'senèque',
    'epictete',
    'marc-aurele'
  ],

  keyConcepts: [
    'logoi',
    'physis',
    'vertu',
    'destin',
    'providence',
    'aporheia',
    'kathikon',
    'adiaphoron',
    'eupatheiai',
    'cosmopolitisme',
    'premeditatio-malorum',
    'dichotomie-du-contr',
    'amour-du-destin'
  ],

  variations: [
    {
      name: "Stoïcisme ancien",
      description: "Zénon, Cléanthe, Chrysippe - Période de systématisation, logique propositionnelle, physique corporelliste. Chrysippe développe la théorie des propositions, le déterminisme causal.",
      philosophers: ['zenon-de-citium', 'chrysippe']
    },
    {
      name: "Stoïcisme moyen",
      description: "Panétius, Posidonius - Romanisation du stoïcisme, adoucissement de la rigueur, ouverture vers la culture romaine. Influence sur Cicéron.",
      philosophers: []
    },
    {
      name: "Stoïcisme impérial",
      description: "Sénèque, Épictète, Marc Aurèle - Stoïcisme romain de l'empire. Emphasis sur l'éthique, la pratique de vie, la thérapie de l'âme. Textes littéraires majeurs.",
      philosophers: ['senèque', 'epictete', 'marc-aurele']
    }
  ],

  criticisms: [
    "Déterminisme excessif - si tout est écrit, à quoi bon agir ?",
    "Excès de rationalisme - les sentiments ont une valeur que le stoïcisme nie",
    "Sobriété affective - risque de froideur émotionnelle",
    "Conformisme social - acceptation de l'ordre établi, critique limitée de l'injustice",
    "Sage inaccessible - l'idéal du parfait stoïcien semble impossible",
    "Rigueur morale - exige une discipline constante, difficile pour la plupart",
    "Passivité politique - l'acceptation du destin peut justifier l'inaction",
    "Individualisme - chaque homme est citoyen du monde, mais comment changer le monde ?",
    "Psychologisme simpliste - réduire les passions à des jugements est réducteur"
  ],

  influence: {
    on: [
      "Christianisme - notion de loi naturelle, Providence, logos comme Verbe divin",
      "Philosophie moderne - Spinoza (amor fati), Kant (devoir, loi morale)",
      "Droit naturel - les stoïciques sont les premiers à théoriser le droit naturel",
      "Cosmopolitisme moderne - citoyenneté mondiale, droits humains",
      "Psychothérapie - TCC inspirées des principes stoïciens",
      "Sagesses antiques - référence pour l'éthique de la vertu",
      "Littérature - Montaigne, Rousseau, Goethe",
      "Politique - concept de citoyen du monde, universalisme"
    ],
    in: [
      "Grèce hellénistique - Athènes, Rhodes, Alexandrie",
      "Rome antique - influence massive sur l'élite romaine",
      "Empire romain - philosophie officielle de Marc Aurèle",
      "Monde chrétien - via saint Ambroise, saint Augustin",
      "Philosophie moderne - redécouverte à la Renaissance",
      "Psychothérapie contemporaine - stoïcisme moderne, TCC",
      "Développement personnel - méditation stoïcienne, mindfulness"
    ]
  },

  metadata: {
    representativeWorks: [
      "Manuel - Épictète (125 ap. J.-C.)",
      "Entretiens - Épictète (recueil par Arrien, 108 ap. J.-C.)",
      "Pensées pour moi-même - Marc Aurèle (170-180 ap. J.-C.)",
      "Lettres à Lucilius - Sénèque (62-65 ap. J.-C.)",
      "De la constance du sage - Sénèque (55 ap. J.-C.)",
      "De la brièveté de la vie - Sénèque (55 ap. J.-C.)",
      "Des biens et des maux - Cicéron (45 av. J.-C.)",
      "Hymne à Zeus - Cléanthe (IIIe siècle av. J.-C.)"
    ],
    relatedMovements: [
      "Cynisme",
      "Épicurisme",
      "Néoplatonisme",
      "Christianisme",
      "Existentialisme",
      "Thérapie cognitive"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const stoicismeAncienPhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'zenon-de-citium',
    role: "Fondateur du stoïcisme",
    contribution: `Marchand phénicien de Chypre, naufragé à Athènes vers 300 av. J.-C., lit les écrits de Socrate (Xénophon, Platon) et se convertit à la philosophie. Élève du cynique Cratès, puis du platonicien Polémon. Fonde sa propre école sous les Portiques peints (Stoa Poikilè) d'où le nom "stoïcisme". Œuvre perdue : République (cité idéale cosmopolite), De la nature humaine, Des passions, Des lois. Réunit les trois parties de la philosophie : logique, physique, éthique (image de l'œuf, du jardin, du fruit). La physique comme fondement : Dieu est feu créateur, logos immanent au cosmos, âme du monde. Le destin comme nécessité divine. Éthique : la vertu est le seul bien, vivre selon la nature (raison universelle). Les indifférents (santé, richesse) ne sont ni biens ni maux. Les passions sont des jugements erronés. Le devoir (kathèkon) comme action appropriée. Sage idéal : parfait, heureux, roi, sans passions. Apartheid entre le profane et le sage. Zénon meurt vers 262 av. J.-C., son école continue avec Cléanthe puis Chrysippe.
`
  },
  {
    philosopherSlug: 'chrysippe',
    role: "Second fondateur et grand systémateur",
    contribution: `Né à Soli (Cilicie) vers 280 av. J.-C., troisième scholarque de l'école stoïcienne après Cléanthe. Auteur prolifique (plus de 700 ouvrages, tous perdus sauf fragments), systématise le stoïcisme. Logique : invente la logique propositionnelle (complément de la logique des termes d'Aristote). Distinction entre signifié, signifiant, objet. Critique le critère de vérité de l'Académie. Physique : tout est corps, même Dieu et l'âme. Le pneuma (souffle) comme tension (tonos) structurant la matière. Dieu comme feu créateur périodiquement absorbant et recréant le cosmos (éclectrose). Le destin comme enchaînement causal rigoureux. Éthique : extension de la notion d'indifférents, définition précise du devoir, passions comme jugements. Paradoxes stoïciens : seul le sage est riche, libre, beau, roi ; tous les fous sont fous, esclaves, laids. Chrysippe meurt en 206 av. J.-C. L'école continue avec Diogène de Babylone, Antipater de Tarse, Panétius, Posidonius.
`
  },
  {
    philosopherSlug: 'senèque',
    role: "Stoïcien romain et conseiller de Néron",
    contribution: `Né à Cordoue (Espagne) vers 4 av. J.-C., élevé à Rome. Précepteur de Néron, ministre, puis condamné à suicide en 65 ap. J.-C. pour conjuration. Œuvre littéraire abondante : Lettres à Lucilius (correspondance philosophique), De la constance du sage, De la brièveté de la vie, De la tranquillité de l'âme, Des bienfaits, De la colère, De la clémence, De la vie heureuse, Des lois. Tragédies : Médée, Œdipe, Hercule furieux. Stoïcisme adapté à la culture romaine : emphasis sur la thérapie de l'âme, la pratique de vie, les exercices spirituels. Préméditation des maux (premeditatio malorum) : imaginer le pire pour s'y préparer. Examen de conscience soir et matin. Vision d'en haut (prenons du recul). Distinction entre ce qui dépend de nous et ce qui ne dépend pas. Les passions sont maladives, il les faut traiter comme une maladie. Le suicide comme ultime liberté : "si la vie est insupportable, la porte est ouverte". Influences multiples : stoïcisme, épicurisme, académisme. Sénèque est un stoïcien flexible et pratique, pas un doctrinaire rigide. Influence sur Montaigne, Rousseau, Corneille ("désirer l'impossible est la pire des folies").
`
  },
  {
    philosopherSlug: 'epictete',
    role: "Stoïcien de l'enseignement oral",
    contribution: `Né esclave à Hiérapolis (Phrygie) vers 50 ap. J.-C., affranchi après la mort de Néron. Élève du stoïcien Musonius Rufus. Enseigne à Rome jusqu'à l'expulsion des philosophes par Domitien (89), se réfugie à Nicopolis (Épire) où il fonde une école. N'écrit rien, ses cours sont notés par son élève Arrien : Entretiens (4 livres) et Manuel (court résumé). Philosophie pratique : "Il n'y a que deux choses : ce qui dépend de nous (jugement, volonté, désir) et ce qui ne dépend pas (corps, biens, réputation)". Principe central : "Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements sur les choses". Exercices : distinguer ce qui dépend de nous, renoncer au désir de ce qui ne dépend pas, utiliser les représentations correctement, méditer sur la mort, accepter le destin. L'homme comme acteur dans le drame divin : si le metteur en scène veut que je joue le mendiant, je jouerai le mendiant bien. Dieu comme providence, le cosmos comme ordre rationnel parfait. Mort vers 135 ap. J.-C. Influence immense sur Marc Aurèle, le christianisme, la philosophie moderne.
`
  },
  {
    philosopherSlug: 'marc-aurele',
    role: "Empereur stoïcien et philosophe roi",
    contribution: `Empereur romain (121-180 ap. J.-C.), règne de 161 à 180. Stoïcien convaincu, élève de plusieurs maîtres. Écrit Pensées pour moi-même (ou Écrits pour lui-même) en grec durant les campagnes militaires contre les Germains et les Parthes. Journal intime philosophique, pas destiné à la publication. 12 livres de méditations sur la mort, la brièveté de la vie, le devoir, l'acceptation du destin. Thèmes : "L'univers est changement ; la vie, opinion" ; "Supporte et abstiens-toi" (endure les événements, juge correctement) ; "Tu es une petite âme portant un cadavre" (le corps) ; "Ce qui ne nuit pas à la cité ne nuit pas à l'homme" ; "Tout arrive selon la nature universelle" ; "Agis comme un stoïcien, même si le monde ne comprend pas". Marc Aurèle n'est pas un original philosophique mais un disciple fidèle appliquant stoïcicisme à la vie impériale : devoir de gouverner, acceptation des revers, mépris de la gloire, préparation à la mort. Mort en 180 ap. J.-C., peut-être de la peste. Exemple du philosophe roi idéal.
`
  }
];
