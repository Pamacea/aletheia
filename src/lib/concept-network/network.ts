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
