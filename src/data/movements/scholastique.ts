/**
 * Scolastique - Philosophical Movement Data
 * Philosophie médiévale chrétienne (XIe-XVIIe siècle)
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

export const scholastique: MovementData = {
  id: 'scholastique',
  name: "Scolastique",
  slug: 'scholastique',
  category: 'philosophie-medievale',

  description: `Mouvement philosophique et théologique dominant dans les universités médiévales européennes (XIe-XVIIe siècle), caractérisé par la méthode de la question disputée, l'usage systématique de la logique, et l'ambition de concilier la raison philosophique (surtout aristotélicienne) avec la foi révélée chrétienne.

La scolastique naît au XIe siècle avec Anselme de Canterbury ('la foi cherchant l'intelligence') et le renouveau des études à Chartres. Elle se développe avec la redécouverte d'Aristote (via les Arabes et les Byzantins) et la fondation des universités (Paris, Oxford, Bologne, Cambridge). La question disputée devient la forme académique par excellence : une thèse est proposée, des objections sont formulées, des arguments pour et contre sont développés, et une solution est proposée.

Le XIIIe siècle représente l'apogée de la scolastique avec trois figures majeures. Bonaventure, franciscain, développe une synthèse augustinienne et aristotélicienne centrée sur la lumière et la hiérarchie de l'être. Thomas d'Aquin, dominicain, construit le système le plus complet dans la 'Somme théologique', distinguant philosophie et théologie, nature et grâce, raison et foi. Duns Scot, franciscain, insiste sur la volonté divine et l'univocité de l'être.

Le XIVe siècle voit des évolutions importantes. Guillaume d'Ockham critique la surenchère métaphysique ('rasoir d'Ockham' : ne pas multiplier les entités sans nécessité) et défend un volontarisme et un nominalisme radicaux. Ces positions annoncent la fin de la scolastique et le début de la philosophie moderne.

La scolastique influence toute la culture médiévale : droit canon, théologie sacramentelle, éthique, politique, économie. Elle forme aussi la base de l'éducation universitaire (trivium : grammaire, rhétorique, dialectique ; quadrivium : arithmétique, gématique, musique, astronomie). Après une période de déclin (Renaissance, Lumières), la scolastique est réhabilitée au XIXe siècle (Léon XIII, 'Aeterni Patris', 1879) et reste influente dans la pensée catholique contemporaine.`,

  shortDefinition: "Synthèse médiévale de la philosophie aristotélicienne et de la théologie chrétienne par la méthode dialectique",

  period: "XIe-XVIIe siècle (1050-1650)",

  origins: {
    context: "Essor des écoles cathédrales et des universités médiévales. Redécouverte d'Aristote via traductions arabo-latines (Avicenne, Averroès) et gréco-latines (Byzance). Croisades, contacts intellectuels avec le monde arabe. Besoin de justifier rationnellement la foi chrétienne.",
    predecessors: [
      "Augustin d'Hippone - Foi et raison, illumination divine",
      "Boèce - Traduction et commentaire d'Aristote",
      "Pseudo-Denys - Théologie négative et hiérarchie",
      "Jean Scot Erigène - Néo-platonisme chrétien",
      "Avicenne, Averroès - Aristote arabe",
      "Maïmonide - Judaïsme et aristotélisme"
    ],
    reactionAgainst: [
      "Fidesme radical - La foi sans raison",
      "Théologie dialectique - Abélard (tension foi-raison)",
      "Averroïsme latin - Double vérité (philosophie vs théologie)",
      "Mysticisme pur - Refus de la spéculation rationnelle"
    ]
  },

  keyPrinciples: [
    "Fides et ratio - foi et raison harmonieuses",
    "Distinction philosophie/théologie - raisons naturelles vs révélées",
    "Méthode scolastique - question disputée, quodlibet",
    "Commentaire des autorités - Bible, Aristote, Pères de l'Église",
    "Logique comme instrument - Organon aristotélicien",
    "Analogie de l'être - langage analogique pour Dieu",
    "Acte et puissance - métaphysique du changement",
    "Quatre causes - matérielle, formelle, efficiente, finale",
    "Loi naturelle - morale universelle",
    "Universaux - problème du statut des concepts généraux"
  ],

  keyPhilosophers: [
    'anselme-de-canterbury',
    'pierre-abélard',
    'bonaventure',
    'thomas-d-aquin',
    'duns-scot',
    'guillaume-dockham',
    'jean-duns-scot',
    'albert-le-grand'
  ],

  keyConcepts: [
    'foi-et-raison',
    'analogie',
    'acte-et-puissance',
    'quatre-causes',
    'loi-naturelle',
    'universaux',
    'esse',
    'transsubstantiation',
    'grace',
    'nature'
  ],

  variations: [
    {
      name: "Scolastique augustinienne",
      description: "Anselme, Bonaventure - Priorité à la lumière augustinienne, illumination. Métaphysique de la lumière, hiérarchie de l'être. Accent sur la volonté et l'amour. Critique de l'aristotélisme pur.",
      philosophers: ['anselme-de-canterbury', 'bonaventure']
    },
    {
      name: "Scolastique thomiste",
      description: "Thomas d'Aquin - Aristotélisme chrétien. Distinction philosophie/théologie, acte et puissance, être (esse) comme acte pur. 'Somme théologique', Somme contre les Gentils. Analogie de l'être, cinq voies vers Dieu.",
      philosophers: ['thomas-d-aquin', 'albert-le-grand']
    },
    {
      name: "Scolastique scotiste",
      description: "Duns Scot - Insistance sur la volonté divine et la liberté. Univocité de l'être (l'être est dit de la même façon de Dieu et des créatures). Ha烧 Christologie (nécessité de l'incarnation). Formalisme distinctionnel.",
      philosophers: ['duns-scot']
    },
    {
      name: "Nominalisme ockhamien",
      description: "Guillaume d'Ockham - Critique des universaux (n'existent que dans l'esprit). Rasoir d'Ockham (parcimonie ontologique). Volontarisme (la volonté prime sur l'intellect). Séparation stricte foi/raison. Annonce la modernité.",
      philosophers: ['guillaume-dockham']
    },
    {
      name: "Via moderna",
      description: "Nominalistes tardifs (XIVe-XVe s.) - Grégoire de Rimini, Gabriel Biel. Logique terministe, critiques de la métaphysique. Pragmatisme théologique. Influence sur Luther et la Réforme."
    }
  ],

  criticisms: [
    "Spéculative - détachée de la pratique",
    "Dogmatique - soumise à l'autorité ecclésiastique",
    "Verbale - disputes de mots, scolastique décadente",
    "Aristotélisme servile - soumission à Aristote",
    "Abstraite - ignore la vie concrète",
    "Conservatrice - au service de l'orthodoxie",
    "Médiévale - dépassée par la modernité"
  ],

  influence: {
    on: [
      "Philosophie moderne - Descartes (formation scolastique), Suarez",
      "Droit canon et droit naturel - Grotius, Pufendorf",
      "Économie - théorie du juste prix, usure",
      "Politique - souveraineté, droit des gens",
      "Science - méthode disputée, logique",
      "Éducation - universités, trivium/quadrivium",
      "Théologie catholique - toujours actuelle (Néothomisme)"
    ],
    in: [
      "France - Université de Paris (Sorbonne)",
      "Angleterre - Oxford, Cambridge",
      "Allemagne - Cologne, Fribourg",
      "Italie - Bologne, Padoue, Rome",
      "Espagne - Salamanque (École de Salamanque)",
      "Portugal - Coïmbre",
      "Amérique latine - missions, universités coloniales"
    ]
  },

  metadata: {
    representativeWorks: [
      "Proslogion - Anselme de Canterbury (1078)",
      "Sic et Non - Pierre Abélard (1120)",
      "Sentences - Pierre Lombard (1150)",
      "Somme théologique - Thomas d'Aquin (1265-1274)",
      "Commentaire sur les Sentences - Duns Scot (1300)",
      "Somme logique - Guillaume d'Ockham (1320)"
    ],
    relatedMovements: [
      "Néo-platonisme",
      "Aristotélisme",
      "Christianisme",
      "Nominalisme",
      "Néothomisme"
    ]
  }
};

/**
 * Detailed philosopher-movement links with roles and contributions
 */
export const scholastiquePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'anselme-de-canterbury',
    role: "Père de la scolastique",
    contribution: `Moine bénédictin, archevêque de Canterbury (1033-1109). Formule le programme de la scolastique : 'fides quaerens intellectum' (la foi cherchant l'intelligence). Argument ontologique pour l'existence de Dieu ('Proslogion') : Dieu est 'cela dont rien de plus grand ne peut être pensé'. Analyse de la liberté, du mal, de la prédestination. Méthode rationnelle au service de la foi. Influence immense sur toute la théologie scolastique.`
  },
  {
    philosopherSlug: 'thomas-d-aquin',
    role: "Le plus grand scolastique",
    contribution: `Dominicain (1225-1274), étudie à Paris et Cologne avec Albert le Grand. Auteur de la 'Somme théologique', somme systématique de théologie jamais surpassée. Distinction philosophie (raison naturelle) / théologie (révélation). Aristotélisme christianisé : acte et puissance, être comme acte pur, cinq voies vers Dieu. Analogie de l'être (l'être est dit de façon analogue de Dieu et des créatures). Théorie du droit naturel, de la loi morale. Canonisé en 1323, déclaré 'Docteur angélique'. Influence sur tout le thomisme et le néothomisme contemporain.`
  },
  {
    philosopherSlug: 'duns-scot',
    role: "Docteur subtil, scotisme",
    contribution: `Franciscain (1266-1308), surnommé 'Docteur subtil'. Critique Thomas d'Aquin sur plusieurs points : insistance sur la volonté divine (volontarisme), univocité de l'être (l'être est dit de la même façon de Dieu et des créatures), ha烧 Christologie (l'incarnation aurait eu lieu même sans le péché). Distinction formaliste : distinction formelle non seulement entre concepts mais aussi dans les choses. Influence sur le scotisme et la théologie franciscaine.`
  },
  {
    philosopherSlug: 'guillaume-dockham',
    role: "Nominaliste et précurseur de la modernité",
    contribution: `Franciscain anglais (1285-1349), 'Docteur invincible et vénérable'. Critique radical de la métaphysique : les universaux n'existent que dans l'esprit (nominalisme). 'Rasoir d'Ockham' : ne pas multiplier les entités sans nécessité. Volontarisme : la volonté divine est absolument libre, n'est pas liée par une nécessité rationnelle. Séparation foi/raison : les vérités philosophiques ne peuvent prouver les vérités révélées. Ces positions annoncent la philosophie moderne (empirisme, scepticisme) et la Réforme protestante.`
  }
];
