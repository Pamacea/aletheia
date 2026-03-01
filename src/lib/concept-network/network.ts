/**
 * Concept Network - Philosophical Concept Connections
 *
 * Ce fichier définit le réseau de connexions entre les concepts philosophiques.
 * Chaque connexion est directional, typée et pondérée par sa force (1-5).
 */

export interface ConceptConnection {
  from: string; // slug du concept source
  to: string; // slug du concept cible
  type: 'RELATED' | 'OPPOSES' | 'BUILDS_ON' | 'INFLUENCES' | 'CRITIQUES' | 'EXTENDS' | 'CLARIFIES' | 'EXEMPLIFIES';
  strength: number; // 1-5
  description: string;
}

// ============================================
// RÉSEAU AUTOUR DE L'ABSURDE (Camus)
// ============================================
export const absurdeNetwork: ConceptConnection[] = [
  // Connexions directes de l'absurde
  {
    from: 'absurde',
    to: 'revolte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La révolte est la réponse authentique à l\'absurde selon Camus : refus du suicide et de l\'espoir, maintien de la confrontation'
  },
  {
    from: 'absurde',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'absurde révèle la liberté absolue de l\'homme : sans sens prédéterminé, tous les choix sont possibles'
  },
  {
    from: 'absurde',
    to: 'sens',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'absurde est précisément l\'absence ou l\'excès de sens : le silence du monde face à la quête humaine'
  },
  {
    from: 'absurde',
    to: 'mort',
    type: 'RELATED',
    strength: 4,
    description: 'La mort comme borne ultime donne à l\'existence son caractère absurde : vie finie en quête d\'infini'
  },
  {
    from: 'absurde',
    to: 'neant',
    type: 'RELATED',
    strength: 4,
    description: 'L\'absurde confronte au néant : le monde est indifférent, vide de sens intrinsèque'
  },
  {
    from: 'absurde',
    to: 'desespoir',
    type: 'OPPOSES',
    strength: 4,
    description: 'Contrairement au désespoir, l\'absurde invite à vivre passionnément sans espoir illusoire'
  },
  {
    from: 'absurde',
    to: 'authenticite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Reconnaître l\'absurde est la première étape vers l\'authenticité : vivre sans illusion'
  },
  {
    from: 'absurde',
    to: 'existence',
    type: 'RELATED',
    strength: 5,
    description: 'L\'absurde est une condition fondamentale de l\'existence humaine'
  },
  {
    from: 'absurde',
    to: 'essence',
    type: 'OPPOSES',
    strength: 3,
    description: 'L\'absurde s\'oppose à l\'essentialisme : pas de nature humaine prédéfinie'
  },

  // Connexions existentielles
  {
    from: 'liberte',
    to: 'responsabilite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La liberté absolue implique une responsabilité totale pour ses choix'
  },
  {
    from: 'revolte',
    to: 'engagement',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La révolte contre l\'absurde mène à l\'engagement dans le monde'
  },
  {
    from: 'revolte',
    to: 'solidarite',
    type: 'INFLUENCES',
    strength: 3,
    description: 'La révolte crée une communauté de destinés solidaires'
  },
  {
    from: 'authenticite',
    to: 'mauvaise-foi',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'authenticité comme dépassement de la mauvaise foi auto-illusionnée'
  },

  // Oppositions philosophiques
  {
    from: 'sens',
    to: 'nihilisme',
    type: 'OPPOSES',
    strength: 5,
    description: 'Le nihilisme nie toute possibilité de sens, la recherche de sens l\'affirme'
  },
  {
    from: 'absurde',
    to: 'nihilisme',
    type: 'BUILDS_ON',
    strength: 3,
    description: 'L\'absurde reconnaît le "dieu est mort" du nihilisme mais refuse ses conclusions destructrices'
  },
];

// ============================================
// RÉSEAU MÉTAPHYSIQUE (Être, Vérité, Réalité)
// ============================================
export const metaphysiqueNetwork: ConceptConnection[] = [
  // Connexions fondamentales être/vérité
  {
    from: 'verite',
    to: 'etre',
    type: 'RELATED',
    strength: 5,
    description: 'La vérité comme dévoilement de l\'être (aletheia)'
  },
  {
    from: 'etre',
    to: 'devenir',
    type: 'OPPOSES',
    strength: 5,
    description: 'Être vs devenir : stabilité vs changement, éternité vs temps'
  },
  {
    from: 'etre',
    to: 'neant',
    type: 'OPPOSES',
    strength: 5,
    description: 'Être vs néant : ce qui est vs ce qui n\'est pas'
  },
  {
    from: 'etre',
    to: 'existence',
    type: 'RELATED',
    strength: 4,
    description: 'L\'existence est l\'actualisation de l\'être'
  },
  {
    from: 'etre',
    to: 'essence',
    type: 'RELATED',
    strength: 5,
    description: 'L\'essence est ce que l\'être est, sa nature fondamentale'
  },
  {
    from: 'etre',
    to: 'substance',
    type: 'RELATED',
    strength: 4,
    description: 'La substance est l\'être par soi, ce qui existe indépendamment'
  },

  // Temps et être
  {
    from: 'etre',
    to: 'temps',
    type: 'RELATED',
    strength: 4,
    description: 'L\'être se temporalise, le temps est mode d\'être (Heidegger)'
  },
  {
    from: 'devenir',
    to: 'temps',
    type: 'RELATED',
    strength: 5,
    description: 'Le devenir est la réalisation du temps, changement dans la durée'
  },

  // Essence, existence, quiddité
  {
    from: 'essence',
    to: 'existence',
    type: 'OPPOSES',
    strength: 5,
    description: 'Essence vs Existence : problème de leur priorité (Sartre: l\'existence précède l\'essence)'
  },
  {
    from: 'essence',
    to: 'quiddite',
    type: 'RELATED',
    strength: 5,
    description: 'La quiddité est l\'essence exprimée : "ce que c\'est"'
  },
  {
    from: 'quiddite',
    to: 'nature',
    type: 'RELATED',
    strength: 4,
    description: 'La quiddité est la nature propre exprimée dans la définition'
  },
  {
    from: 'essence',
    to: 'nature',
    type: 'RELATED',
    strength: 5,
    description: 'L\'essence est la nature fondamentale d\'une chose'
  },

  // Substance et accidents
  {
    from: 'substance',
    to: 'accident',
    type: 'OPPOSES',
    strength: 4,
    description: 'La substance est le substrat permanent, les accidents sont les qualités changeantes'
  },

  // Réalité et apparence
  {
    from: 'realite',
    to: 'apparence',
    type: 'OPPOSES',
    strength: 4,
    description: 'La distinction métaphysique réalité/apparence'
  },
  {
    from: 'etre',
    to: 'realite',
    type: 'RELATED',
    strength: 5,
    description: 'L\'être est la réalité fondamentale, ce qui est véritablement'
  },

  // Cause et raison
  {
    from: 'cause',
    to: 'raison',
    type: 'RELATED',
    strength: 4,
    description: 'Le principe de raison suffisante : tout a une raison'
  },

  // Fini et infini
  {
    from: 'fini',
    to: 'infini',
    type: 'OPPOSES',
    strength: 5,
    description: 'La tension fini/infini comme structure métaphysique'
  },
  {
    from: 'mort',
    to: 'fini',
    type: 'RELATED',
    strength: 5,
    description: 'La mort révèle la finitude de l\'existence'
  },
  {
    from: 'etre',
    to: 'infini',
    type: 'RELATED',
    strength: 4,
    description: 'L\'être comme infini (Dieu) ou fini (créatures)'
  },

  // Logos
  {
    from: 'logos',
    to: 'etre',
    type: 'RELATED',
    strength: 4,
    description: 'Le Logos comme médiation entre l\'être et le devenir'
  },
  {
    from: 'logos',
    to: 'verite',
    type: 'RELATED',
    strength: 4,
    description: 'Le Logos comme vérité du discours et raison du monde'
  },
  {
    from: 'logos',
    to: 'raison',
    type: 'RELATED',
    strength: 5,
    description: 'Le Logos comme raison organisatrice du monde'
  },
];

// ============================================
// RÉSEAU ÉPISTÉMOLOGIQUE (Connaissance, Sagesse)
// ============================================
export const epistemologieNetwork: ConceptConnection[] = [
  {
    from: 'sagesse',
    to: 'verite',
    type: 'RELATED',
    strength: 5,
    description: 'La sagesse cherche la vérité sur les premiers principes'
  },
  {
    from: 'sagesse',
    to: 'bien',
    type: 'RELATED',
    strength: 4,
    description: 'La sagesse oriente vers le bien, vie droite'
  },
  {
    from: 'sagesse',
    to: 'connaissance',
    type: 'EXTENDS',
    strength: 4,
    description: 'La sagesse dépasse la connaissance particulière, vise les principes'
  },
  {
    from: 'sagesse',
    to: 'science',
    type: 'EXTENDS',
    strength: 4,
    description: 'La sagesse est science des premiers principes, dépasse les sciences particulières'
  },

  // Connaissance et vérité
  {
    from: 'connaissance',
    to: 'verite',
    type: 'RELATED',
    strength: 5,
    description: 'La connaissance est adéquation à la vérité'
  },
  {
    from: 'connaissance',
    to: 'etre',
    type: 'RELATED',
    strength: 4,
    description: 'Connaître, c\'est connaître l\'être'
  },
];

// ============================================
// RÉSEAU EXISTENTIALISTE (Sartre, Heidegger)
// ============================================
export const existentialismeNetwork: ConceptConnection[] = [
  {
    from: 'existence',
    to: 'essence',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'existentialisme : l\'existence précède l\'essence'
  },
  {
    from: 'existence',
    to: 'liberte',
    type: 'RELATED',
    strength: 5,
    description: 'L\'existence est liberté de se faire, projet de soi'
  },
  {
    from: 'existence',
    to: 'authenticite',
    type: 'RELATED',
    strength: 4,
    description: 'L\'existence authentique vs inauthentique (Heidegger)'
  },
  {
    from: 'existence',
    to: 'angoisse',
    type: 'RELATED',
    strength: 4,
    description: 'L\'angoisse révèle la condition existentielle'
  },
  {
    from: 'existence',
    to: 'neant',
    type: 'RELATED',
    strength: 5,
    description: 'L\'existence humaine se tient dans le néant (Sartre)'
  },

  // Angoisse et liberté
  {
    from: 'angoisse',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'angoisse révèle la liberté et ouvre à l\'authenticité'
  },
  {
    from: 'angoisse',
    to: 'authenticite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'angoisse comme voie vers l\'authenticité'
  },

  // Authenticité
  {
    from: 'authenticite',
    to: 'mauvaise-foi',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'authenticité comme dépassement de la mauvaise foi'
  },

  // Autrui
  {
    from: 'autrui',
    to: 'regard',
    type: 'RELATED',
    strength: 4,
    description: 'La relation à autrui comme confrontation et objectivation (Sartre)'
  },
  {
    from: 'autrui',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 4,
    description: 'La liberté d\'autrui limite ma liberté (enfer, c\'est les autres)'
  },

  // Pour-soi et en-soi
  {
    from: 'pour-soi',
    to: 'en-soi',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'opposition conscience-liberté (pour-soi) et chose-en-soi (en-soi)'
  },
  {
    from: 'pour-soi',
    to: 'neant',
    type: 'RELATED',
    strength: 4,
    description: 'Le pour-soi est néantisation, conscience vide'
  },
];

// ============================================
// RÉSEAU ÉTHIQUE (Bien, Bonheur, Vertu)
// ============================================
export const ethiqueNetwork: ConceptConnection[] = [
  {
    from: 'bien',
    to: 'verite',
    type: 'RELATED',
    strength: 4,
    description: 'Le Bien et le Vrai sont liés (transcendantaux)'
  },
  {
    from: 'bien',
    to: 'beaute',
    type: 'RELATED',
    strength: 4,
    description: 'Le Bien, le Beau et le Vrai sont liés (transcendantaux)'
  },
  {
    from: 'bien',
    to: 'bonheur',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le bonheur est la possession du bien suprême'
  },
  {
    from: 'bien',
    to: 'vertu',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La vertu est disposition au bien'
  },
  {
    from: 'bien',
    to: 'nature',
    type: 'RELATED',
    strength: 4,
    description: 'Le bien selon la nature (Aristote) vs transcendant (Platon)'
  },

  // Bonheur
  {
    from: 'bonheur',
    to: 'plaisir',
    type: 'EXTENDS',
    strength: 4,
    description: 'Le bonheur dépasse le plaisir : réalisation de soi'
  },
  {
    from: 'bonheur',
    to: 'sagesse',
    type: 'RELATED',
    strength: 4,
    description: 'Le bonheur comme vie selon la sagesse'
  },

  // Vertu
  {
    from: 'vertu',
    to: 'sagesse',
    type: 'RELATED',
    strength: 5,
    description: 'La vertu comme sagesse pratique (phronesis)'
  },
];

// ============================================
// RÉSEAU POLITIQUE (Liberté, Égalité, Justice)
// ============================================
export const politiqueNetwork: ConceptConnection[] = [
  {
    from: 'liberte',
    to: 'egalite',
    type: 'RELATED',
    strength: 4,
    description: 'Liberté et égalité comme idéaux démocratiques'
  },
  {
    from: 'liberte',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La liberté comme condition de la justice'
  },
  {
    from: 'egalite',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'égalité comme principe de justice sociale'
  },
  {
    from: 'justice',
    to: 'droit',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La justice comme fondement du droit'
  },
  {
    from: 'liberte',
    to: 'responsabilite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La liberté implique la responsabilité'
  },

  // Pouvoir
  {
    from: 'pouvoir',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le pouvoir peut limiter la liberté'
  },
  {
    from: 'pouvoir',
    to: 'justice',
    type: 'OPPOSES',
    strength: 3,
    description: 'Le pouvoir sans justice est tyrannie'
  },
  {
    from: 'pouvoir',
    to: 'solidarite',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le pouvoir peut créer ou détruire la solidarité'
  },

  // Solidarité
  {
    from: 'solidarite',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La solidarité comme réalisation de la justice sociale'
  },
];

// ============================================
// RÉSEAU ESTHÉTIQUE (Beauté, Art, Création)
// ============================================
export const esthetiqueNetwork: ConceptConnection[] = [
  {
    from: 'beaute',
    to: 'bien',
    type: 'RELATED',
    strength: 4,
    description: 'Le Beau et le Bien sont liés (transcendantaux)'
  },
  {
    from: 'beaute',
    to: 'verite',
    type: 'RELATED',
    strength: 4,
    description: 'La beauté comme révélation de la vérité'
  },
  {
    from: 'art',
    to: 'beaute',
    type: 'EXEMPLIFIES',
    strength: 5,
    description: 'L\'art exemplifie la beauté'
  },
  {
    from: 'art',
    to: 'verite',
    type: 'RELATED',
    strength: 4,
    description: 'L\'art comme révélation de vérité (Heidegger)'
  },
  {
    from: 'art',
    to: 'creation',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'art comme création, poïesis'
  },
  {
    from: 'creation',
    to: 'etre',
    type: 'RELATED',
    strength: 4,
    description: 'La création comme mise en être'
  },

  // Sublime
  {
    from: 'sublime',
    to: 'beaute',
    type: 'EXTENDS',
    strength: 4,
    description: 'Le sublime dépasse la beauté : excès, infini'
  },
  {
    from: 'sublime',
    to: 'angoisse',
    type: 'RELATED',
    strength: 3,
    description: 'Le sublime peut susciter l\'angoisse'
  },
];

// ============================================
// RÉSEAU DE LA CONSCIENCE ET DU SUJET
// ============================================
export const conscienceNetwork: ConceptConnection[] = [
  // Conscience et sujet
  {
    from: 'conscience',
    to: 'sujet',
    type: 'RELATED',
    strength: 5,
    description: 'La conscience est la propriété fondamentale du sujet pensant (cogito)'
  },
  {
    from: 'conscience',
    to: 'pour-soi',
    type: 'RELATED',
    strength: 5,
    description: 'Le pour-soi est conscience de soi, néantisation (Sartre)'
  },
  {
    from: 'conscience',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La conscience d\'autrui comme problème de l\'intersubjectivité'
  },
  {
    from: 'conscience',
    to: 'etre',
    type: 'RELATED',
    strength: 4,
    description: 'La conscience comme mode d\'être (Heidegger)'
  },
  {
    from: 'conscience',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La conscience comme condition de la vérité'
  },

  // Sujet et liberté
  {
    from: 'sujet',
    to: 'liberte',
    type: 'RELATED',
    strength: 5,
    description: 'Le sujet est être libre, autonome (Kant, Sartre)'
  },
  {
    from: 'sujet',
    to: 'raison',
    type: 'RELATED',
    strength: 5,
    description: 'Le sujet comme raison pensante (Descartes, Kant)'
  },
  {
    from: 'sujet',
    to: 'devenir',
    type: 'RELATED',
    strength: 3,
    description: 'Le sujet se fait dans le temps (devenir-soi)'
  },

  // Intersubjectivité
  {
    from: 'autrui',
    to: 'amour',
    type: 'RELATED',
    strength: 4,
    description: 'L\'amour comme relation à autrui'
  },
  {
    from: 'autrui',
    to: 'solidarite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La reconnaissance d\'autrui fonde la solidarité'
  },
];

// ============================================
// RÉSEAU DU DÉSIR ET DE LA VOLONTÉ
// ============================================
export const desirNetwork: ConceptConnection[] = [
  {
    from: 'desir',
    to: 'manque',
    type: 'RELATED',
    strength: 5,
    description: 'Le désir comme manque (Platon) : désir de ce qu\'on n\'a pas'
  },
  {
    from: 'desir',
    to: 'plaisir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le désir cherche le plaisir mais le dépasse'
  },
  {
    from: 'desir',
    to: 'bonheur',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le bonheur comme satisfaction des désirs'
  },
  {
    from: 'desir',
    to: 'connaissance',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le désir de connaître comme moteur philosophique'
  },
  {
    from: 'desir',
    to: 'amour',
    type: 'RELATED',
    strength: 5,
    description: 'L\'amour comme forme supérieure du désir'
  },
  {
    from: 'desir',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 3,
    description: 'La volonté de puissance comme désir (Nietzsche)'
  },

  // Plaisir et désir
  {
    from: 'plaisir',
    to: 'bonheur',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le plaisir est une composante du bonheur mais ne le constitue pas entirely'
  },
  {
    from: 'plaisir',
    to: 'desir',
    type: 'RELATED',
    strength: 4,
    description: 'Le plaisir comme satisfaction du désir'
  },
  {
    from: 'plaisir',
    to: 'beaute',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le beau procure un plaisir esthétique désintéressé'
  },

  // Amour et désir
  {
    from: 'amour',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'amour est reconnaissance de l\'autre comme sujet'
  },
  {
    from: 'amour',
    to: 'desir',
    type: 'EXTENDS',
    strength: 4,
    description: 'L\'amour dépasse le désir de possession'
  },
  {
    from: 'amour',
    to: 'bonheur',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'amour comme voie vers le bonheur'
  },
  {
    from: 'amour',
    to: 'engagement',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'amour engage envers l\'autre'
  },
];

// ============================================
// RÉSEAU DU LANGAGE ET DE LA VÉRITÉ
// ============================================
export const langageNetwork: ConceptConnection[] = [
  {
    from: 'langage',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le langage est le lieu de la vérité comme dévoilement'
  },
  {
    from: 'langage',
    to: 'etre',
    type: 'RELATED',
    strength: 4,
    description: 'Le langage dit l\'être, mais aussi le voile (Heidegger)'
  },
  {
    from: 'langage',
    to: 'connaissance',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La connaissance s\'exprime dans le langage'
  },
  {
    from: 'langage',
    to: 'logos',
    type: 'BUILDS_ON',
    strength: 5,
    description: 'Le langage réalise le Logos, la raison discourse'
  },
  {
    from: 'langage',
    to: 'sujet',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le sujet se constitue dans le langage'
  },
  {
    from: 'langage',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le langage est un pouvoir (Foucault)'
  },

  // Logos
  {
    from: 'logos',
    to: 'raison',
    type: 'RELATED',
    strength: 5,
    description: 'Le Logos comme raison divine et humaine'
  },
  {
    from: 'logos',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le Logos comme vérité qui se dit'
  },
  {
    from: 'logos',
    to: 'langage',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le Logos se manifeste dans le langage'
  },
];

// ============================================
// RÉSEAU THÉOLOGIQUE ET RELIGIEUX
// ============================================
export const theologieNetwork: ConceptConnection[] = [
  {
    from: 'dieu',
    to: 'etre',
    type: 'RELATED',
    strength: 5,
    description: 'Dieu comme Être par excellence (ens perfectissimum)'
  },
  {
    from: 'dieu',
    to: 'infini',
    type: 'RELATED',
    strength: 5,
    description: 'Dieu comme l\'Infini par essence'
  },
  {
    from: 'dieu',
    to: 'verite',
    type: 'RELATED',
    strength: 4,
    description: 'Dieu comme Vérité suprême'
  },
  {
    from: 'dieu',
    to: 'bien',
    type: 'RELATED',
    strength: 5,
    description: 'Dieu comme Bien suprême (Platon)'
  },
  {
    from: 'dieu',
    to: 'cause',
    type: 'RELATED',
    strength: 5,
    description: 'Dieu comme Cause première (Aristote, Thomas)'
  },
  {
    from: 'dieu',
    to: 'creation',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Dieu comme Créateur de tout ce qui est'
  },
  {
    from: 'dieu',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 4,
    description: 'L\'omnipotence divine vs liberté humaine'
  },
  {
    from: 'dieu',
    to: 'mort',
    type: 'OPPOSES',
    strength: 5,
    description: 'Dieu comme immortel vs mort humaine'
  },
  {
    from: 'dieu',
    to: 'nihilisme',
    type: 'OPPOSES',
    strength: 5,
    description: 'La foi en Dieu vs la mort de Dieu (Nietzsche)'
  },
  {
    from: 'dieu',
    to: 'sens',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Dieu comme source ultime de sens'
  },
  {
    from: 'dieu',
    to: 'amour',
    type: 'RELATED',
    strength: 5,
    description: 'Dieu comme Amour (Christianisme)'
  },
  {
    from: 'dieu',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Dieu comme Justice parfaite'
  },
  {
    from: 'dieu',
    to: 'absurde',
    type: 'OPPOSES',
    strength: 4,
    description: 'La foi en Dieu répond à l\'absurde par le sens'
  },
];

// ============================================
// RÉSEAU DE L'ENGAGEMENT ET DE LA RESPONSABILITÉ
// ============================================
export const engagementNetwork: ConceptConnection[] = [
  {
    from: 'engagement',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'engagement est l\'exercice concret de la liberté'
  },
  {
    from: 'engagement',
    to: 'responsabilite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'engagement crée des responsabilités'
  },
  {
    from: 'engagement',
    to: 'revolte',
    type: 'RELATED',
    strength: 4,
    description: 'La révolte mène à l\'engagement'
  },
  {
    from: 'engagement',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'engagement envers autrui'
  },
  {
    from: 'engagement',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'engagement pour la justice'
  },
  {
    from: 'engagement',
    to: 'solidarite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'engagement crée la solidarité'
  },
  {
    from: 'engagement',
    to: 'pouvoir',
    type: 'OPPOSES',
    strength: 3,
    description: 'L\'engagement peut contester le pouvoir établi'
  },
];

// ============================================
// RÉSEAU DES PASSIONS EXISTENTIELLES
// ============================================
export const passionsNetwork: ConceptConnection[] = [
  {
    from: 'desespoir',
    to: 'espoir',
    type: 'OPPOSES',
    strength: 5,
    description: 'Le désespoir comme perte de tout espoir'
  },
  {
    from: 'desespoir',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La mort comme source de désespoir'
  },
  {
    from: 'desespoir',
    to: 'absurde',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'absurde peut mener au désespoir'
  },
  {
    from: 'desespoir',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 3,
    description: 'Le désespoir comme abdication de la liberté'
  },
  {
    from: 'desespoir',
    to: 'authenticite',
    type: 'OPPOSES',
    strength: 3,
    description: 'Le désespoir comme refus de s\'engager'
  },

  // Espoir (implicite)
  {
    from: 'absurde',
    to: 'espoir',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'absurde exige de renoncer à l\'espoir'
  },
  {
    from: 'revolte',
    to: 'espoir',
    type: 'OPPOSES',
    strength: 4,
    description: 'La révolte refuse l\'espoir illusoire'
  },

  // Angoisse et peur
  {
    from: 'angoisse',
    to: 'peur',
    type: 'EXTENDS',
    strength: 4,
    description: 'L\'angoisse dépasse la peur : pas d\'objet précis'
  },
  {
    from: 'angoisse',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'angoisse face à la mort (Heidegger)'
  },
  {
    from: 'angoisse',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'angoisse révèle la liberté (Sartre, Kierkegaard)'
  },
  {
    from: 'angoisse',
    to: 'neant',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'angoisse du néant'
  },
];

// ============================================
// RÉSEAU DE LA RÉALITÉ ET DE L'APPARENCE
// ============================================
export const realiteNetwork: ConceptConnection[] = [
  {
    from: 'realite',
    to: 'etre',
    type: 'RELATED',
    strength: 5,
    description: 'La réalité est l\'être effectif, ce qui est'
  },
  {
    from: 'realite',
    to: 'apparence',
    type: 'OPPOSES',
    strength: 4,
    description: 'Réalité vs apparence : distinction métaphysique'
  },
  {
    from: 'realite',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La vérité comme adéquation à la réalité'
  },
  {
    from: 'realite',
    to: 'connaissance',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La connaissance vise la réalité'
  },
  {
    from: 'realite',
    to: 'illusion',
    type: 'OPPOSES',
    strength: 4,
    description: 'La réalité s\'oppose à l\'illusion'
  },

  // Apparence
  {
    from: 'apparence',
    to: 'etre',
    type: 'OPPOSES',
    strength: 4,
    description: 'L\'apparence vs l\'être (Platon)'
  },
  {
    from: 'apparence',
    to: 'beaute',
    type: 'INFLUENCES',
    strength: 3,
    description: 'La beauté se manifeste dans l\'apparence sensible'
  },
];

// ============================================
// RÉSEAU DES RELATIONS HUMAINES
// ============================================
export const relationsNetwork: ConceptConnection[] = [
  {
    from: 'regard',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le regard d\'autrui m\'objectise (Sartre)'
  },
  {
    from: 'regard',
    to: 'conscience',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le regard comme conscience de la conscience'
  },
  {
    from: 'regard',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le regard d\'autrui limite ma liberté'
  },
  {
    from: 'regard',
    to: 'honte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le regard d\'autrui me fait honte (Sartre)'
  },
  {
    from: 'regard',
    to: 'amour',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le regard dans l\'amour (désir de possession)'
  },

  // Solidarité
  {
    from: 'solidarite',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La solidarité est reconnaissance d\'autrui'
  },
  {
    from: 'solidarite',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La solidarité réalise la justice sociale'
  },
  {
    from: 'solidarite',
    to: 'pouvoir',
    type: 'OPPOSES',
    strength: 3,
    description: 'La solidarité contre l\'oppression du pouvoir'
  },
  {
    from: 'solidarite',
    to: 'revolte',
    type: 'RELATED',
    strength: 4,
    description: 'La révolte crée la solidarité'
  },
  {
    from: 'solidarite',
    to: 'engagement',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'engagement solidaire'
  },
];

// ============================================
// RÉSEAU DU DROIT ET DE LA JUSTICE
// ============================================
export const droitNetwork: ConceptConnection[] = [
  {
    from: 'droit',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La justice est le fondement du droit'
  },
  {
    from: 'droit',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le droit protège les libertés'
  },
  {
    from: 'droit',
    to: 'egalite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le droit garantit l\'égalité devant la loi'
  },
  {
    from: 'droit',
    to: 'pouvoir',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le droit limite le pouvoir arbitraire'
  },
  {
    from: 'droit',
    to: 'devoir',
    type: 'RELATED',
    strength: 5,
    description: 'Droits et devoirs sont corrélatifs'
  },
  {
    from: 'droit',
    to: 'responsabilite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le droit implique la responsabilité'
  },

  // Devoir (implicite)
  {
    from: 'devoir',
    to: 'bien',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le devoir oriente vers le bien (Kant)'
  },
  {
    from: 'devoir',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 3,
    description: 'Le devoir peut limiter la liberté'
  },
  {
    from: 'devoir',
    to: 'raison',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le devoir comme loi rationnelle (impératif catégorique)'
  },
];

// ============================================
// RÉSEAU ESTHÉTIQUE ÉTENDU
// ============================================
export const esthetiqueExtendedNetwork: ConceptConnection[] = [
  {
    from: 'art',
    to: 'beaute',
    type: 'EXEMPLIFIES',
    strength: 5,
    description: 'L\'art exemplifie la beauté'
  },
  {
    from: 'art',
    to: 'verite',
    type: 'RELATED',
    strength: 4,
    description: 'L\'art comme révélation de vérité (Heidegger)'
  },
  {
    from: 'art',
    to: 'creation',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'art comme création, poïesis'
  },
  {
    from: 'art',
    to: 'realite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'art représente ou transforme la réalité'
  },
  {
    from: 'art',
    to: 'langage',
    type: 'INFLUENCES',
    strength: 3,
    description: 'L\'art comme langage'
  },
  {
    from: 'art',
    to: 'sublime',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'art peut atteindre le sublime'
  },
  {
    from: 'art',
    to: 'plaisir',
    type: 'INFLUENCES',
    strength: 3,
    description: 'L\'art procure un plaisir esthétique'
  },

  // Sublime étendu
  {
    from: 'sublime',
    to: 'beaute',
    type: 'EXTENDS',
    strength: 4,
    description: 'Le sublime dépasse la beauté : excès, infini'
  },
  {
    from: 'sublime',
    to: 'infini',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le sublime touche à l\'infini'
  },
  {
    from: 'sublime',
    to: 'angoisse',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le sublime peut susciter l\'angoisse'
  },
  {
    from: 'sublime',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le sublime confronte à notre finitude'
  },
];

// ============================================
// RÉSEAU HISTORIQUE DES INFLUENCES
// ============================================
export const historiqueNetwork: ConceptConnection[] = [
  // Platon influence tout
  {
    from: 'platon',
    to: 'etre',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Platon fonde la métaphysique de l\'être'
  },
  {
    from: 'platon',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Platon : la vérité comme Idée'
  },
  {
    from: 'platon',
    to: 'bien',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Platon : le Bien comme Idée suprême'
  },
  {
    from: 'platon',
    to: 'beaute',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Platon : la beauté comme participation à l\'Idée'
  },
  {
    from: 'platon',
    to: 'amour',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Platon : l\'amour comme désir de Beau'
  },
  {
    from: 'platon',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Platon : la justice comme harmonie'
  },
  {
    from: 'platon',
    to: 'apparence',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Platon : distinction apparence/réalité'
  },
  {
    from: 'platon',
    to: 'connaissance',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Platon : la connaissance comme réminiscence'
  },

  // Aristote
  {
    from: 'aristote',
    to: 'etre',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Aristote : métaphysique de l\'être en tant qu\'être'
  },
  {
    from: 'aristote',
    to: 'substance',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Aristote : la substance comme sujet dernier'
  },
  {
    from: 'aristote',
    to: 'cause',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Aristote : les quatre causes'
  },
  {
    from: 'aristote',
    to: 'vertu',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Aristote : l\'éthique des vertus'
  },
  {
    from: 'aristote',
    to: 'bonheur',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Aristote : le bonheur comme fin suprême'
  },
  {
    from: 'aristote',
    to: 'plaisir',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Aristote : le plaisir comme accompagnement de l\'activité'
  },

  // Descartes
  {
    from: 'descartes',
    to: 'sujet',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Descartes : le cogito fonde le sujet'
  },
  {
    from: 'descartes',
    to: 'conscience',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Descartes : la conscience comme pensée'
  },
  {
    from: 'descartes',
    to: 'dieu',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Descartes : Dieu garantit la vérité'
  },
  {
    from: 'descartes',
    to: 'raison',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Descartes : la raison comme lumière naturelle'
  },

  // Kant
  {
    from: 'kant',
    to: 'sujet',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kant : le sujet transcendantal'
  },
  {
    from: 'kant',
    to: 'raison',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kant : critique de la raison'
  },
  {
    from: 'kant',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kant : la liberté comme autonomie'
  },
  {
    from: 'kant',
    to: 'devoir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kant : l\'impératif catégorique'
  },
  {
    from: 'kant',
    to: 'beaute',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Kant : le jugement esthétique'
  },
  {
    from: 'kant',
    to: 'sublime',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kant : l\'analytique du sublime'
  },
  {
    from: 'kant',
    to: 'connaissance',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kant : les limites de la connaissance'
  },
  {
    from: 'kant',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Kant : la vérité comme accord'
  },

  // Hegel
  {
    from: 'hegel',
    to: 'esprit',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Hegel : l\'Esprit absolu'
  },
  {
    from: 'hegel',
    to: 'devenir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Hegel : la réalité comme devenir'
  },
  {
    from: 'hegel',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Hegel : la liberté comme conscience de soi'
  },
  {
    from: 'hegel',
    to: 'histoire',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Hegel : l\'histoire comme réalisation de la liberté'
  },
  {
    from: 'hegel',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Hegel : la reconnaissance mutuelle'
  },
  {
    from: 'hegel',
    to: 'raison',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Hegel : « ce qui est rationnel est réel »'
  },

  // Nietzsche
  {
    from: 'nietzsche',
    to: 'volonte-puissance',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Nietzsche : la volonté de puissance'
  },
  {
    from: 'nietzsche',
    to: 'surhomme',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Nietzsche : le Surhomme comme créateur de valeurs'
  },
  {
    from: 'nietzsche',
    to: 'nihilisme',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Nietzsche : diagnostic du nihilisme'
  },
  {
    from: 'nietzsche',
    to: 'dieu',
    type: 'CRITIQUES',
    strength: 5,
    description: 'Nietzsche : « Dieu est mort »'
  },
  {
    from: 'nietzsche',
    to: 'verite',
    type: 'CRITIQUES',
    strength: 4,
    description: 'Nietzsche : critique de la vérité comme illusion'
  },
  {
    from: 'nietzsche',
    to: 'morale',
    type: 'CRITIQUES',
    strength: 5,
    description: 'Nietzsche : critique de la morale du ressentiment'
  },
  {
    from: 'nietzsche',
    to: 'art',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Nietzsche : l\'art comme justification de l\'existence'
  },
  {
    from: 'nietzsche',
    to: 'amelioration',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Nietzsche : devenir ce qu\'on est'
  },

  // Heidegger
  {
    from: 'heidegger',
    to: 'etre',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Heidegger : question du sens de l\'être'
  },
  {
    from: 'heidegger',
    to: 'dasein',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Heidegger : le Dasein comme être-là'
  },
  {
    from: 'heidegger',
    to: 'temps',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Heidegger : temps et être'
  },
  {
    from: 'heidegger',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Heidegger : être-pour-la-mort'
  },
  {
    from: 'heidegger',
    to: 'angoisse',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Heidegger : l\'angoisse révèle le néant'
  },
  {
    from: 'heidegger',
    to: 'authenticite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Heidegger : authenticité vs inauthenticité'
  },
  {
    from: 'heidegger',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Heidegger : la vérité comme dévoilement (aletheia)'
  },
  {
    from: 'heidegger',
    to: 'langage',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Heidegger : le langage comme « maison de l\'être »'
  },
  {
    from: 'heidegger',
    to: 'technique',
    type: 'CRITIQUES',
    strength: 4,
    description: 'Heidegger : critique de la technique moderne'
  },

  // Sartre
  {
    from: 'sartre',
    to: 'existence',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : l\'existence précède l\'essence'
  },
  {
    from: 'sartre',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : l\'homme condamné à être libre'
  },
  {
    from: 'sartre',
    to: 'pour-soi',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : le pour-soi comme conscience'
  },
  {
    from: 'sartre',
    to: 'en-soi',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : l\'en-soi comme être massif'
  },
  {
    from: 'sartre',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : l\'enfer, c\'est les autres'
  },
  {
    from: 'sartre',
    to: 'regard',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : le regard objectivant'
  },
  {
    from: 'sartre',
    to: 'mauvaise-foi',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : la mauvaise foi comme auto-démenti'
  },
  {
    from: 'sartre',
    to: 'authenticite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : l\'authenticité comme reconnaissance de sa liberté'
  },
  {
    from: 'sartre',
    to: 'responsabilite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Sartre : responsabilité totale de ses choix'
  },
  {
    from: 'sartre',
    to: 'engagement',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Sartre : l\'engagement littéraire et politique'
  },

  // Camus
  {
    from: 'camus',
    to: 'absurde',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Camus : philosophie de l\'absurde'
  },
  {
    from: 'camus',
    to: 'revolte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Camus : l\'homme révolté'
  },
  {
    from: 'camus',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Camus : la liberté face à l\'absurde'
  },
  {
    from: 'camus',
    to: 'solidarite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Camus : la solidarité révoltée'
  },
  {
    from: 'camus',
    to: 'bonheur',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Camus : le bonheur dans un monde absurde'
  },

  // Foucault
  {
    from: 'foucault',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Foucault : microphysique du pouvoir'
  },
  {
    from: 'foucault',
    to: 'savoir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Foucault : pouvoir-savoir'
  },
  {
    from: 'foucault',
    to: 'subjectivite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Foucault : constitution du sujet'
  },
  {
    from: 'foucault',
    to: 'liberte',
    type: 'CRITIQUES',
    strength: 4,
    description: 'Foucault : critique de la notion libérale de liberté'
  },
  {
    from: 'foucault',
    to: 'verite',
    type: 'CRITIQUES',
    strength: 4,
    description: 'Foucault : régimes de vérité'
  },
  {
    from: 'foucault',
    to: 'histoire',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Foucault : archéologie et généalogie'
  },
];

// ============================================
// RÉSEAU DES CONCEPTS IMPLICITES NÉCESSAIRES
// ============================================
export const conceptsImplicitesNetwork: ConceptConnection[] = [
  // Esprit (Hegel)
  {
    from: 'esprit',
    to: 'sujet',
    type: 'EXTENDS',
    strength: 5,
    description: 'L\'Esprit est sujet qui se sait (Hegel)'
  },
  {
    from: 'esprit',
    to: 'conscience',
    type: 'EXTENDS',
    strength: 4,
    description: 'L\'Esprit comme conscience de soi'
  },
  {
    from: 'esprit',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'Esprit réalise la liberté'
  },
  {
    from: 'esprit',
    to: 'histoire',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'Esprit se réalise dans l\'histoire'
  },

  // Histoire
  {
    from: 'histoire',
    to: 'temps',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'histoire comme devenir dans le temps'
  },
  {
    from: 'histoire',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'histoire comme progrès de la liberté (Hegel)'
  },
  {
    from: 'histoire',
    to: 'sens',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'histoire peut avoir un sens (téléologie)'
  },

  // Morale
  {
    from: 'morale',
    to: 'bien',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La morale vise le bien'
  },
  {
    from: 'morale',
    to: 'devoir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La morale comme ensemble de devoirs'
  },
  {
    from: 'morale',
    to: 'vertu',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La morale des vertus (Aristote)'
  },
  {
    from: 'morale',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 3,
    description: 'La morale peut contraindre la liberté'
  },

  // Volonté de puissance
  {
    from: 'volonte-puissance',
    to: 'desir',
    type: 'EXTENDS',
    strength: 5,
    description: 'La volonté de puissance comme essence du désir'
  },
  {
    from: 'volonte-puissance',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La volonté de puissance veut le pouvoir'
  },
  {
    from: 'volonte-puissance',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La volonté de puissance comme affirmation de la vie'
  },

  // Surhomme
  {
    from: 'surhomme',
    to: 'homme',
    type: 'EXTENDS',
    strength: 5,
    description: 'Le Surhomme comme dépassement de l\'homme'
  },
  {
    from: 'surhomme',
    to: 'creation',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le Surhomme crée de nouvelles valeurs'
  },
  {
    from: 'surhomme',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le Surhomme comme liberté absolue'
  },

  // Dasein
  {
    from: 'dasein',
    to: 'etre',
    type: 'RELATED',
    strength: 5,
    description: 'Le Dasein est l\'être pour qui l\'être est en question'
  },
  {
    from: 'dasein',
    to: 'existence',
    type: 'RELATED',
    strength: 5,
    description: 'Le Dasein comme existence'
  },
  {
    from: 'dasein',
    to: 'monde',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le Dasein est être-dans-le-monde'
  },
  {
    from: 'dasein',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le Dasein est être-pour-la-mort'
  },
  {
    from: 'dasein',
    to: 'souci',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le Dasein est souci (Sorge)'
  },

  // En-soi (Sartre)
  {
    from: 'en-soi',
    to: 'etre',
    type: 'RELATED',
    strength: 5,
    description: 'L\'en-soi est être massif, opaque'
  },
  {
    from: 'en-soi',
    to: 'conscience',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'en-soi n\'a pas de conscience'
  },
  {
    from: 'en-soi',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'en-soi n\'est pas libre'
  },
  {
    from: 'en-soi',
    to: 'pour-soi',
    type: 'OPPOSES',
    strength: 5,
    description: 'En-soi vs pour-soi : chose vs conscience'
  },

  // Monde
  {
    from: 'monde',
    to: 'etre',
    type: 'RELATED',
    strength: 4,
    description: 'Le monde comme totalité de l\'étant'
  },
  {
    from: 'monde',
    to: 'realite',
    type: 'RELATED',
    strength: 4,
    description: 'Le monde comme réalité'
  },
  {
    from: 'monde',
    to: 'dasein',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le Dasein a un monde'
  },

  // Savoir (Foucault)
  {
    from: 'savoir',
    to: 'connaissance',
    type: 'EXTENDS',
    strength: 4,
    description: 'Le savoir comme système de connaissances'
  },
  {
    from: 'savoir',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Pouvoir et savoir sont inséparables'
  },
  {
    from: 'savoir',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le savoir produit des régimes de vérité'
  },

  // Subjectivité
  {
    from: 'subjectivite',
    to: 'sujet',
    type: 'EXTENDS',
    strength: 4,
    description: 'La subjectivité comme mode d\'être du sujet'
  },
  {
    from: 'subjectivite',
    to: 'conscience',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La subjectivité comme conscience de soi'
  },
  {
    from: 'subjectivite',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La subjectivité comme liberté'
  },

  // Technique
  {
    from: 'technique',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La technique comme pouvoir sur la nature'
  },
  {
    from: 'technique',
    to: 'etre',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La technique moderne révèle l\'être comme ressource'
  },
  {
    from: 'technique',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 3,
    description: 'La technique peut menacer la liberté'
  },

  // Amélioration (devenir ce qu'on est)
  {
    from: 'amelioration',
    to: 'devenir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'amélioration comme devenir-soi'
  },
  {
    from: 'amelioration',
    to: 'creation',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'amélioration comme création de soi'
  },
  {
    from: 'amelioration',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'amélioration comme œuvre de liberté'
  },

  // Souci
  {
    from: 'souci',
    to: 'dasein',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le Dasein est souci'
  },
  {
    from: 'souci',
    to: 'temps',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le souci est être-avant-soi (futur)'
  },
  {
    from: 'souci',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le souci peut inclure le souci d\'autrui'
  },

  // Honte
  {
    from: 'honte',
    to: 'regard',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La honte naît du regard d\'autrui (Sartre)'
  },
  {
    from: 'honte',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La honte révèle autrui comme sujet'
  },
  {
    from: 'honte',
    to: 'conscience',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La honte est conscience de soi jugée'
  },

  // Illusion
  {
    from: 'illusion',
    to: 'apparence',
    type: 'RELATED',
    strength: 4,
    description: 'L\'illusion est fausse apparence'
  },
  {
    from: 'illusion',
    to: 'realite',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'illusion s\'oppose à la réalité'
  },
  {
    from: 'illusion',
    to: 'verite',
    type: 'OPPOSES',
    strength: 4,
    description: 'L\'illusion s\'oppose à la vérité'
  },
  {
    from: 'illusion',
    to: 'desir',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Le désir peut créer des illusions'
  },

  // Manque
  {
    from: 'manque',
    to: 'desir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le manque est structure du désir'
  },
  {
    from: 'manque',
    to: 'etre',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le manque comme privation d\'être'
  },
  {
    from: 'manque',
    to: 'neant',
    type: 'RELATED',
    strength: 4,
    description: 'Le manque comme expérience du néant'
  },

  // Peur
  {
    from: 'peur',
    to: 'angoisse',
    type: 'EXTENDS',
    strength: 4,
    description: 'L\'angoisse est peur sans objet'
  },
  {
    from: 'peur',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La peur de la mort'
  },
  {
    from: 'peur',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 3,
    description: 'La peur peut asservir au pouvoir'
  },

  // Espoir
  {
    from: 'espoir',
    to: 'sens',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'espoir attend un sens'
  },
  {
    from: 'espoir',
    to: 'avenir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'espoir est tourné vers l\'avenir'
  },
  {
    from: 'espoir',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 3,
    description: 'L\'espoir peut être refuge ou liberté'
  },
  {
    from: 'espoir',
    to: 'absurde',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'absurde exige de renoncer à l\'espoir'
  },

  // Avenir
  {
    from: 'avenir',
    to: 'temps',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'avenir comme dimension du temps'
  },
  {
    from: 'avenir',
    to: 'devenir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'avenir comme devenir'
  },
  {
    from: 'avenir',
    to: 'espoir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'avenir est objet d\'espoir'
  },
  {
    from: 'avenir',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 3,
    description: 'L\'avenir comme espace de liberté'
  },

  // Homme
  {
    from: 'homme',
    to: 'sujet',
    type: 'RELATED',
    strength: 5,
    description: 'L\'homme comme sujet'
  },
  {
    from: 'homme',
    to: 'existence',
    type: 'RELATED',
    strength: 5,
    description: 'L\'homme comme existence'
  },
  {
    from: 'homme',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'homme comme être libre'
  },
  {
    from: 'homme',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'homme comme être mortel'
  },
];

// ============================================
// RÉSEAU COMPLÉMENTAIRE DES PHILOSOPHES ET COURANTS
// ============================================
export const philosophesNetwork: ConceptConnection[] = [
  // Stoïcisme
  {
    from: 'stoicisme',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le stoïcisme : liberté intérieure, ataraxie'
  },
  {
    from: 'stoicisme',
    to: 'raison',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le stoïcisme : vivre selon la raison'
  },
  {
    from: 'stoicisme',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le stoïcisme : méditation sur la mort'
  },
  {
    from: 'stoicisme',
    to: 'desir',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le stoïcisme : extirper les désirs'
  },

  // Épicurisme
  {
    from: 'epicurisme',
    to: 'plaisir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'épicurisme : le plaisir comme bien suprême'
  },
  {
    from: 'epicurisme',
    to: 'bonheur',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'épicurisme : ataraxie, absence de trouble'
  },
  {
    from: 'epicurisme',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Épicure : « la mort n\'est rien pour nous »'
  },
  {
    from: 'epicurisme',
    to: 'desir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'épicurisme : distinction désirs naturels/nécessaires'
  },

  // Christianisme
  {
    from: 'christianisme',
    to: 'dieu',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le christianisme : Dieu comme amour trinitaire'
  },
  {
    from: 'christianisme',
    to: 'amour',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le christianisme : l\'amour comme commandement'
  },
  {
    from: 'christianisme',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le christianisme : résurrection, vie éternelle'
  },
  {
    from: 'christianisme',
    to: 'espoir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le christianisme : espérance du salut'
  },
  {
    from: 'christianisme',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le christianisme : libre arbitre'
  },
  {
    from: 'christianisme',
    to: 'temps',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le christianisme : temps linéaire, histoire du salut'
  },

  // Spinoza
  {
    from: 'spinoza',
    to: 'dieu',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Spinoza : Deus sive Natura'
  },
  {
    from: 'spinoza',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Spinoza : liberté comme connaissance de la nécessité'
  },
  {
    from: 'spinoza',
    to: 'raison',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Spinoza : comprendre pour agir'
  },
  {
    from: 'spinoza',
    to: 'beaute',
    type: 'INFLUENCES',
    strength: 3,
    description: 'Spinoza : la beauté comme adéquation'
  },
  {
    from: 'spinoza',
    to: 'amour',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Spinoza : amour intellectuel de Dieu'
  },

  // Schopenhauer
  {
    from: 'schopenhauer',
    to: 'volonte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Schopenhauer : la Volonté comme essence du monde'
  },
  {
    from: 'schopenhauer',
    to: 'desir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Schopenhauer : le désir comme souffrance'
  },
  {
    from: 'schopenhauer',
    to: 'souffrance',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Schopenhauer : la souffrance comme condition'
  },
  {
    from: 'schopenhauer',
    to: 'art',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Schopenhauer : l\'art comme consolation'
  },
  {
    from: 'schopenhauer',
    to: 'pessimisme',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Schopenhauer : pessimisme philosophique'
  },

  // Kierkegaard
  {
    from: 'kierkegaard',
    to: 'angoisse',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kierkegaard : le concept de l\'angoisse'
  },
  {
    from: 'kierkegaard',
    to: 'foi',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kierkegaard : le saut de la foi'
  },
  {
    from: 'kierkegaard',
    to: 'dieu',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Kierkegaard : relation paradoxale à Dieu'
  },
  {
    from: 'kierkegaard',
    to: 'subjectivite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Kierkegaard : « subjectivité est vérité »'
  },
  {
    from: 'kierkegaard',
    to: 'existence',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Kierkegaard : père de l\'existentialisme'
  },

  // Marx
  {
    from: 'marx',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Marx : le pouvoir comme lutte des classes'
  },
  {
    from: 'marx',
    to: 'histoire',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Marx : matérialisme historique'
  },
  {
    from: 'marx',
    to: 'alienation',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Marx : l\'aliénation économique'
  },
  {
    from: 'marx',
    to: 'travail',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Marx : le travail comme essence humaine'
  },
  {
    from: 'marx',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Marx : justice sociale, fin de l\'exploitation'
  },

  // Phénoménologie
  {
    from: 'phenomenologie',
    to: 'conscience',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Phénoménologie : étude de la conscience'
  },
  {
    from: 'phenomenologie',
    to: 'intentionnalite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Phénoménologie : l\'intentionnalité de la conscience'
  },
  {
    from: 'phenomenologie',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Phénoménologie : « retour aux choses mêmes »'
  },

  // Pragmatisme
  {
    from: 'pragmatisme',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Pragmatisme : la vérité comme utilité'
  },
  {
    from: 'pragmatisme',
    to: 'action',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Pragmatisme : l\'action comme critère de vérité'
  },

  // Existentialisme (courant)
  {
    from: 'existentialisme',
    to: 'existence',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'existentialisme : l\'existence précède l\'essence'
  },
  {
    from: 'existentialisme',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'existentialisme : la liberté absolue'
  },
  {
    from: 'existentialisme',
    to: 'responsabilite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'existentialisme : responsabilité totale'
  },
  {
    from: 'existentialisme',
    to: 'angoisse',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'existentialisme : l\'angoisse existentielle'
  },

  // Nihilisme (courant)
  {
    from: 'nihilisme',
    to: 'sens',
    type: 'OPPOSES',
    strength: 5,
    description: 'Le nihilisme : négation de tout sens'
  },
  {
    from: 'nihilisme',
    to: 'dieu',
    type: 'OPPOSES',
    strength: 5,
    description: 'Le nihilisme : « Dieu est mort »'
  },
  {
    from: 'nihilisme',
    to: 'verite',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le nihilisme : négation de la vérité'
  },
  {
    from: 'nihilisme',
    to: 'moral',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le nihilisme : négation de la morale'
  },
  {
    from: 'nihilisme',
    to: 'absurde',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le nihilisme mène à l\'absurde'
  },

  // Postmodernisme
  {
    from: 'postmodernisme',
    to: 'verite',
    type: 'CRITIQUES',
    strength: 5,
    description: 'Postmodernisme : déconstruction de la vérité'
  },
  {
    from: 'postmodernisme',
    to: 'sujet',
    type: 'CRITIQUES',
    strength: 4,
    description: 'Postmodernisme : mort du sujet'
  },
  {
    from: 'postmodernisme',
    to: 'histoire',
    type: 'CRITIQUES',
    strength: 4,
    description: 'Postmodernisme : fin des grands récits'
  },
];

// ============================================
// CONCEPTS SUPPLÉMENTAIRES POUR RÉSEAUX
// ============================================
export const conceptsSupplementairesNetwork: ConceptConnection[] = [
  // Volonté (Schopenhauer)
  {
    from: 'volonte',
    to: 'desir',
    type: 'EXTENDS',
    strength: 5,
    description: 'La volonté comme métadesir'
  },
  {
    from: 'volonte',
    to: 'raison',
    type: 'OPPOSES',
    strength: 4,
    description: 'La volonté s\'oppose à la raison (Schopenhauer)'
  },
  {
    from: 'volonte',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La volonté libre vs déterminisme'
  },

  // Souffrance
  {
    from: 'souffrance',
    to: 'desir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le désir comme source de souffrance'
  },
  {
    from: 'souffrance',
    to: 'mort',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La souffrance face à la mort'
  },
  {
    from: 'souffrance',
    to: 'sens',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La souffrance comme question de sens'
  },
  {
    from: 'souffrance',
    to: 'bonheur',
    type: 'OPPOSES',
    strength: 5,
    description: 'La souffrance s\'oppose au bonheur'
  },

  // Foi
  {
    from: 'foi',
    to: 'dieu',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La foi comme relation à Dieu'
  },
  {
    from: 'foi',
    to: 'raison',
    type: 'OPPOSES',
    strength: 4,
    description: 'Foi vs raison : tension classique'
  },
  {
    from: 'foi',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La foi comme vérité révélée'
  },
  {
    from: 'foi',
    to: 'espoir',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La foi comme espérance'
  },

  // Intentionnalité
  {
    from: 'intentionnalite',
    to: 'conscience',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'intentionnalité : toute conscience est conscience de...'
  },
  {
    from: 'intentionnalite',
    to: 'sujet',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'intentionnalité structure le sujet'
  },
  {
    from: 'intentionnalite',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 3,
    description: 'L\'intentionnalité comme visée de vérité'
  },

  // Aliénation
  {
    from: 'alienation',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'aliénation comme perte de liberté'
  },
  {
    from: 'alienation',
    to: 'travail',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'aliénation par le travail (Marx)'
  },
  {
    from: 'alienation',
    to: 'etre',
    type: 'OPPOSES',
    strength: 4,
    description: 'L\'aliénation comme étrangement à soi'
  },

  // Travail
  {
    from: 'travail',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le travail comme pouvoir'
  },
  {
    from: 'travail',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 3,
    description: 'Le travail peut contraindre la liberté'
  },
  {
    from: 'travail',
    to: 'creation',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le travail comme création'
  },
  {
    from: 'travail',
    to: 'alienation',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le travail comme source d\'aliénation'
  },

  // Pessimisme
  {
    from: 'pessimisme',
    to: 'souffrance',
    type: 'INFLUENCES',
    strength: 5,
    description: 'Le pessimisme : la souffrance comme fondamentale'
  },
  {
    from: 'pessimisme',
    to: 'espoir',
    type: 'OPPOSES',
    strength: 5,
    description: 'Le pessimisme s\'oppose à l\'espoir'
  },
  {
    from: 'pessimisme',
    to: 'sens',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le pessimisme : absence de sens'
  },
  {
    from: 'pessimisme',
    to: 'bonheur',
    type: 'OPPOSES',
    strength: 4,
    description: 'Le pessimisme : le bonheur impossible'
  },

  // Action
  {
    from: 'action',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'action comme exercice de la liberté'
  },
  {
    from: 'action',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'action comme pouvoir'
  },
  {
    from: 'action',
    to: 'engagement',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'action comme engagement'
  },
  {
    from: 'action',
    to: 'verite',
    type: 'OPPOSES',
    strength: 3,
    description: 'Action vs contemplation'
  },

  // Moral
  {
    from: 'moral',
    to: 'morale',
    type: 'RELATED',
    strength: 5,
    description: 'Le moral comme adjectif de la morale'
  },
  {
    from: 'moral',
    to: 'bien',
    type: 'INFLUENCES',
    strength: 4,
    description: 'Le moral comme orientation vers le bien'
  },
];

// ============================================
// RÉSEAUX THÉMATIQUES ADDITIONNELS
// ============================================
export const thematiquesNetwork: ConceptConnection[] = [
  // Réseau de la connaissance et de la science
  {
    from: 'science',
    to: 'connaissance',
    type: 'EXTENDS',
    strength: 5,
    description: 'La science comme connaissance systématique'
  },
  {
    from: 'science',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La science comme quête de vérité'
  },
  {
    from: 'science',
    to: 'raison',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La science comme application de la raison'
  },
  {
    from: 'science',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La science comme pouvoir (Bacon)'
  },
  {
    from: 'science',
    to: 'technique',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La science fonde la technique'
  },
  {
    from: 'science',
    to: 'realite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La science étudie la réalité'
  },

  // Réseau de la poésie et de la création
  {
    from: 'poesie',
    to: 'art',
    type: 'RELATED',
    strength: 5,
    description: 'La poésie comme art du langage'
  },
  {
    from: 'poesie',
    to: 'creation',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La poésie comme création'
  },
  {
    from: 'poesie',
    to: 'langage',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La poésie révèle la puissance du langage'
  },
  {
    from: 'poesie',
    to: 'verite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La poésie comme révélation (Heidegger)'
  },
  {
    from: 'poesie',
    to: 'beaute',
    type: 'EXEMPLIFIES',
    strength: 4,
    description: 'La poésie exemplifie la beauté'
  },

  // Réseau du temps et de la mémoire
  {
    from: 'memoire',
    to: 'temps',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La mémoire comme conservation du passé'
  },
  {
    from: 'memoire',
    to: 'connaissance',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La mémoire comme source de connaissance'
  },
  {
    from: 'memoire',
    to: 'identite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La mémoire constitue l\'identité'
  },
  {
    from: 'memoire',
    to: 'oubli',
    type: 'OPPOSES',
    strength: 5,
    description: 'Mémoire vs oubli'
  },

  // Identité
  {
    from: 'identite',
    to: 'sujet',
    type: 'INFLUENCES',
    strength: 5,
    description: 'L\'identité comme constitution du sujet'
  },
  {
    from: 'identite',
    to: 'etre',
    type: 'RELATED',
    strength: 4,
    description: 'L\'identité : « être le même »'
  },
  {
    from: 'identite',
    to: 'difference',
    type: 'OPPOSES',
    strength: 4,
    description: 'Identité vs différence'
  },
  {
    from: 'identite',
    to: 'temps',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'identité se construit dans le temps'
  },

  // Différence
  {
    from: 'difference',
    to: 'identite',
    type: 'OPPOSES',
    strength: 4,
    description: 'Différence vs identité'
  },
  {
    from: 'difference',
    to: 'etre',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La différence ontologique (Heidegger)'
  },
  {
    from: 'difference',
    to: 'autrui',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La reconnaissance de la différence d\'autrui'
  },

  // Oubli
  {
    from: 'oubli',
    to: 'memoire',
    type: 'OPPOSES',
    strength: 5,
    description: 'L\'oubli s\'oppose à la mémoire'
  },
  {
    from: 'oubli',
    to: 'etre',
    type: 'INFLUENCES',
    strength: 4,
    description: 'L\'oubli de l\'être (Heidegger)'
  },
  {
    from: 'oubli',
    to: 'temps',
    type: 'INFLUENCES',
    strength: 3,
    description: 'L\'oubli comme perte du passé'
  },

  // Réseau de la politique et de la démocratie
  {
    from: 'democratie',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La démocratie garantit la liberté politique'
  },
  {
    from: 'democratie',
    to: 'egalite',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La démocratie réalise l\'égalité'
  },
  {
    from: 'democratie',
    to: 'pouvoir',
    type: 'OPPOSES',
    strength: 4,
    description: 'La démocratie limite le pouvoir'
  },
  {
    from: 'democratie',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La démocratie comme recherche de la justice'
  },
  {
    from: 'democratie',
    to: 'droit',
    type: 'INFLUENCES',
    strength: 5,
    description: 'La démocratie fonde l\'État de droit'
  },

  // Réseau de la violence et de la paix
  {
    from: 'violence',
    to: 'pouvoir',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La violence comme mode d\'exercice du pouvoir'
  },
  {
    from: 'violence',
    to: 'justice',
    type: 'OPPOSES',
    strength: 5,
    description: 'La violence s\'oppose à la justice'
  },
  {
    from: 'violence',
    to: 'revolte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La révolte peut être violente'
  },
  {
    from: 'violence',
    to: 'liberte',
    type: 'OPPOSES',
    strength: 4,
    description: 'La violence détruit la liberté'
  },

  // Paix
  {
    from: 'paix',
    to: 'violence',
    type: 'OPPOSES',
    strength: 5,
    description: 'La paix s\'oppose à la violence'
  },
  {
    from: 'paix',
    to: 'justice',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La justice est condition de la paix'
  },
  {
    from: 'paix',
    to: 'liberte',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La paix permet la liberté'
  },
  {
    from: 'paix',
    to: 'solidarite',
    type: 'INFLUENCES',
    strength: 4,
    description: 'La paix repose sur la solidarité'
  },
];

// ============================================
// EXPORT COMPLET
// ============================================
export const conceptNetwork: ConceptConnection[] = [
  ...absurdeNetwork,
  ...metaphysiqueNetwork,
  ...epistemologieNetwork,
  ...existentialismeNetwork,
  ...ethiqueNetwork,
  ...politiqueNetwork,
  ...esthetiqueNetwork,
  ...conscienceNetwork,
  ...desirNetwork,
  ...langageNetwork,
  ...theologieNetwork,
  ...engagementNetwork,
  ...passionsNetwork,
  ...realiteNetwork,
  ...relationsNetwork,
  ...droitNetwork,
  ...esthetiqueExtendedNetwork,
  ...historiqueNetwork,
  ...conceptsImplicitesNetwork,
  ...philosophesNetwork,
  ...conceptsSupplementairesNetwork,
  ...thematiquesNetwork,
];

// ============================================
// HELPERS
// ============================================

/**
 * Récupère toutes les connexions pour un concept donné
 */
export function getConnectionsForConcept(conceptSlug: string): ConceptConnection[] {
  return conceptNetwork.filter(c => c.from === conceptSlug || c.to === conceptSlug);
}

/**
 * Récupère les concepts directement liés à un concept
 */
export function getRelatedConcepts(conceptSlug: string): string[] {
  const connections = getConnectionsForConcept(conceptSlug);
  const related = new Set<string>();
  connections.forEach(c => {
    if (c.from === conceptSlug) related.add(c.to);
    if (c.to === conceptSlug) related.add(c.from);
  });
  return Array.from(related);
}

/**
 * Récupère une connexion spécifique entre deux concepts
 */
export function getConnectionType(
  from: string,
  to: string
): ConceptConnection | undefined {
  return conceptNetwork.find(c => c.from === from && c.to === to);
}

/**
 * Récupère les connexions d'un certain type
 */
export function getConnectionsByType(
  type: ConceptConnection['type']
): ConceptConnection[] {
  return conceptNetwork.filter(c => c.type === type);
}

/**
 * Récupère les connexions au-dessus d'un certain seuil de force
 */
export function getStrongConnections(minStrength: number = 4): ConceptConnection[] {
  return conceptNetwork.filter(c => c.strength >= minStrength);
}

/**
 * Trouve le chemin le plus court entre deux concepts (BFS)
 */
export function findShortestPath(
  from: string,
  to: string
): string[] | null {
  if (from === to) return [from];

  const visited = new Set<string>();
  const queue: Array<{ node: string; path: string[] }> = [
    { node: from, path: [from] }
  ];

  while (queue.length > 0) {
    const { node, path } = queue.shift()!;

    if (node === to) return path;

    if (visited.has(node)) continue;
    visited.add(node);

    const neighbors = getRelatedConcepts(node);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push({
          node: neighbor,
          path: [...path, neighbor]
        });
      }
    }
  }

  return null; // Pas de chemin trouvé
}

/**
 * Calcule la force moyenne des connexions d'un concept
 */
export function getAverageConnectionStrength(conceptSlug: string): number {
  const connections = getConnectionsForConcept(conceptSlug);
  if (connections.length === 0) return 0;
  const total = connections.reduce((sum, c) => sum + c.strength, 0);
  return total / connections.length;
}

/**
 * Trouve les concepts les plus connectés (hubs)
 */
export function findConceptHubs(limit: number = 10): Array<{
  slug: string;
  connectionCount: number;
  avgStrength: number;
}> {
  const conceptStats = new Map<string, { count: number; totalStrength: number }>();

  conceptNetwork.forEach(c => {
    // Compte les connexions sortantes
    const fromStats = conceptStats.get(c.from) ?? { count: 0, totalStrength: 0 };
    fromStats.count++;
    fromStats.totalStrength += c.strength;
    conceptStats.set(c.from, fromStats);

    // Compte les connexions entrantes
    const toStats = conceptStats.get(c.to) ?? { count: 0, totalStrength: 0 };
    toStats.count++;
    toStats.totalStrength += c.strength;
    conceptStats.set(c.to, toStats);
  });

  return Array.from(conceptStats.entries())
    .map(([slug, stats]) => ({
      slug,
      connectionCount: stats.count,
      avgStrength: stats.totalStrength / stats.count
    }))
    .sort((a, b) => b.connectionCount - a.connectionCount)
    .slice(0, limit);
}

/**
 * Détecte les communautés de concepts (connectivité)
 */
export function detectCommunities(): Array<{
  concepts: string[];
  internalConnections: number;
}> {
  const visited = new Set<string>();
  const communities: Array<{ concepts: string[]; internalConnections: number }> = [];

  // Pour chaque concept non visité, trouver sa composante connexe
  const allConcepts = new Set<string>();
  conceptNetwork.forEach(c => {
    allConcepts.add(c.from);
    allConcepts.add(c.to);
  });

  for (const concept of Array.from(allConcepts)) {
    if (visited.has(concept)) continue;

    const community: string[] = [];
    const queue: string[] = [concept];
    visited.add(concept);

    while (queue.length > 0) {
      const node = queue.shift()!;
      community.push(node);

      const neighbors = getRelatedConcepts(node);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    // Compter les connexions internes
    let internalConnections = 0;
    for (let i = 0; i < community.length; i++) {
      for (let j = i + 1; j < community.length; j++) {
        const hasConnection = conceptNetwork.some(
          c => (c.from === community[i] && c.to === community[j]) ||
               (c.from === community[j] && c.to === community[i])
        );
        if (hasConnection) internalConnections++;
      }
    }

    communities.push({
      concepts: community,
      internalConnections
    });
  }

  return communities.sort((a, b) => b.internalConnections - a.internalConnections);
}

/**
 * Statistiques sur le réseau
 */
export function getNetworkStats() {
  const totalConnections = conceptNetwork.length;
  const concepts = new Set<string>();
  conceptNetwork.forEach(c => {
    concepts.add(c.from);
    concepts.add(c.to);
  });

  const typeDistribution = conceptNetwork.reduce((acc, c) => {
    acc[c.type] = (acc[c.type] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const strengthDistribution = conceptNetwork.reduce((acc, c) => {
    acc[c.strength] = (acc[c.strength] ?? 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return {
    totalConcepts: concepts.size,
    totalConnections,
    averageConnectionsPerConcept: totalConnections / concepts.size,
    typeDistribution,
    strengthDistribution
  };
}
