/**
 * Nihilisme - Philosophical Movement Data
 * Courant philosophique centré sur la négation des valeurs traditionnelles et du sens de l'existence
 */

import { MovementData, PhilosopherLink } from './existentialisme';

export const nihilisme: MovementData = {
  id: 'nihilisme',
  name: "Nihilisme",
  slug: 'nihilisme',
  category: 'philosophie-moderne',

  description: `Courant philosophique et culturel qui affirme la négation des valeurs traditionnelles, du sens de l'existence et des certitudes métaphysiques. Le terme "nihilisme" vient du latin "nihil" (rien) et désigne la position selon laquelle la vie n'a pas de sens intrinsèque, que les valeurs morales sont des inventions humaines, et que l'univers est indifférent à l'humain.

Le nihilisme émerge au XIXe siècle avec la "mort de Dieu" annoncée par Nietzsche : l'effondrement des valeurs religieuses et métaphysiques qui donnaient sens à l'existence occidentale. Ce nihilisme peut être passif (renoncement, désespoir) ou actif (destruction des anciennes valeurs pour créer du nouveau).

Le mouvement se divise en plusieurs formes : le nihilisme métaphysique (affirmation que le monde n'a pas de sens), le nihilisme moral (rejet de toutes les valeurs morales), le nihilisme existentialiste (l'existence est absurde), et le nihilisme épistémologique (scepticisme radical sur la connaissance).

Le nihilisme a profondément marqué la philosophie contemporaine. Il a influencé l'existentialisme (Sartre, Camus), le postmodernisme (Foucault, Derrida), et la pensée de la déconstruction. En littérature, il inspire le roman noir, le théâtre de l'absurde et la littérature de l'absurde (Céline, Bernhard, Houellebecq).

Critiqué pour son pessimisme et son danger politique (le nihilisme peut mener au relativisme moral et à la violence), le nihilisme reste une position philosophique majeure qui interroge les fondements mêmes de notre culture.`,

  shortDefinition: "Négation des valeurs traditionnelles et du sens intrinsèque de l'existence",

  period: "XIXe-XXe siècle (1860-présent)",

  origins: {
    context: "Effondrement progressif de l'ordre religieux traditionnel en Europe. La critique de la religion par les Lumières, la révolution industrielle et ses bouleversements sociaux, l'émergence des sciences humaines (Marx, Freud) qui déplacent le sens du transcendant vers l'immanent. Contexte de crise de la modernité européenne.",
    predecessors: [
      "Socrate - le scepticisme socratique comme remise en question",
      "Sextus Empiricus - le scepticisme pyrrhonien",
      "Pascal - l'angoisse de l'homme face à l'infini et le néant",
      "Diderot - matérialisme et critique de la religion",
      "Schopenhauer - le monde comme Volonté irrationnelle, souffrance",
      "Dostoevsky - Si Dieu n'existe pas, tout est permis",
      "Stirner - l'égoïsme et la critique de toutes les aliénations"
    ],
    reactionAgainst: [
      "Christianisme et religions révélées - les valeurs divines sont illusoires",
      "Humanisme des Lumières - la foi en la raison et le progrès est naïve",
      "Idéalisme allemand - les systèmes philosophiques sont des fictions",
      "Moralisme traditionnel - les valeurs morales sont des inventions humaines",
      "Sens de l'histoire - l'histoire n'a pas de direction ni de but"
    ]
  },

  keyPrinciples: [
    "Mort de Dieu - effondrement des valeurs religieuses et métaphysiques",
    "Absence de sens intrinsèque - l'univers est indifférent à l'humain",
    "Critique des valeurs morales - la morale est une invention humaine",
    "Vérité comme perspective - pas de vérité objective, seulement des interprétations",
    "Néant de l'être - derrière les apparences, rien de substantiel",
    "Volonté de puissance comme seul moteur - forces et affects, pas de raisons",
    "Éternel retour - accepter l'absence de sens et affirm er la vie quand même"
  ],

  keyPhilosophers: [
    'friedrich-nietzsche',
    'albert-camus',
    'emil-cioran',
    'giacomo-leopardi',
    'martin-heidegger',
    'jean-paul-sartre',
    'lev-shestov',
    'oswald-spengler'
  ],

  keyConcepts: [
    'mort-de-dieu',
    'nihil',
    'nihilisme-passif',
    'nihilisme-actif',
    'nihilisme-metaphysique',
    'dernier-homme',
    'surhomme',
    'eternel-retour',
    'volonte-de-puissance',
    'devaluation',
    'desenchantement',
    'absurde'
  ],

  variations: [
    {
      name: "Nihilisme métaphysique",
      description: "Affirmation que la réalité n'a pas de sens, de but ou de valeur intrinsèque. L'univers est aveugle et indifférent.",
      philosophers: ['friedrich-nietzsche', 'giacomo-leopardi', 'emil-cioran']
    },
    {
      name: "Nihilisme moral",
      description: "Rejet de toutes les valeurs morales comme illusoires ou arbitraires. La morale est une invention humaine sans fondement objectif.",
      philosophers: ['friedrich-nietzsche', 'lev-shestov', 'albert-camus']
    },
    {
      name: "Nihilisme existentiel",
      description: "L'existence est absurde et dénuée de sens. La réponse peut être le désespoir (nihilisme passif) ou la révolte (nihilisme actif).",
      philosophers: ['albert-camus', 'jean-paul-sartre', 'emil-cioran']
    }
  ],

  criticisms: [
    "Conduite au désespoir et au suicide - philosophie destructrice",
    "Relativisme moral dangereux - si rien n'a de valeur, tout est permis",
    "Auto-contradiction - affirmer qu'aucune vérité n'existe est une vérité",
    "Négation de la créativité humaine - oubli de notre capacité à créer du sens",
    "Conservatisme politique - le pessimisme nihiliste favorise le statu quo",
    "Élitisme intellectuel - philosophie de luxe pour occidentaux désabusés",
    "Illusion négative - nier les valeurs est encore une position axiologique"
  ],

  influence: {
    on: [
      "Existentialisme - à partir du néant, créer du sens par la liberté",
      "Postmodernisme - critique des métarécits et déconstruction du sens",
      "Décadence littéraire - esthétique de la décadence et du déclin",
      "Théâtre de l'absurde - Ionesco, Beckett, Genet",
      "Littérature noire - roman policier et vision pessimiste",
      "Arts contemporains - happening, performance, art conceptuel",
      "Mouvements punk et underground - rejet des valeurs établies"
    ],
    in: [
      "Allemagne - Nietzsche et la crise des valeurs allemandes",
      "France - existentialisme et post-structuralisme",
      "Russie - nihilisme russe des années 1860 (Tchernychevski)",
      "Roumanie - Cioran et le pessimisme",
      "Italie - Leopardi et le pessimisme poétique",
      "Autriche - Wien moderne et le déclin de l'Empire"
    ]
  },

  metadata: {
    representativeWorks: [
      "Ainsi parlait Zarathoustra - Nietzsche (1883-1885)",
      "Le Gai Savoir - Nietzsche (1882)",
      "Par-delà bien et mal - Nietzsche (1886)",
      "Le Mythe de Sisyphe - Camus (1942)",
      "Précis de décomposition - Cioran (1949)",
      "Chants - Leopardi (1835)",
      "La Conquête du bonheur - Leopardi (1828-1832)",
      "L'Homme révolté - Camus (1951)"
    ],
    relatedMovements: [
      "Existentialisme",
      "Pessimisme",
      "Décadentisme",
      "Postmodernisme",
      "Désenchantement du monde"
    ]
  }
};

/**
 * Detailed philosopher-movement links
 */
export const nihilismePhilosopherLinks: PhilosopherLink[] = [
  {
    philosopherSlug: 'friedrich-nietzsche',
    role: "Fondateur et critique du nihilisme",
    contribution: `Diagnostique le nihilisme comme destin de l'Occident : "Dieu est mort" signifie l'effondrement des valeurs chrétiennes qui donnaient sens à la civilisation européenne. Distingue nihilisme passif (renoncement, dernier homme) et nihilisme actif (destruction créatrice des anciennes valeurs). Le surhomme (Übermensch) comme celui qui surmonte le nihilisme en créant de nouvelles valeurs. Éternel retour comme test d'acceptation de la vie. Volonté de puissance comme principe vital qui remplace les valeurs morales. Nietzsche n'est pas nihiliste mais le philosophe qui diagnostique le nihilisme pour le surmonter. Son œuvre tente de penser "après" le nihilisme.`
  },
  {
    philosopherSlug: 'albert-camus',
    role: "Philosophe de l'absurde",
    contribution: `Analyse l'absurde comme divorce entre le désir humain de sens et le silence du monde ("Le Mythe de Sisyphe", 1942). L'absurde est notre condition fondamentale : le monde est dénué de sens, mais nous aspirons au sens. Face à l'absurde, trois solutions : le suicide (échec), le saut philosophique (renoncement à la raison), ou la révolte (accepter l'absurde tout en refusant l'espoir illusoire). Sisyphe comme figure de l'homme révolté : "Il faut imaginer Sisyphe heureux". "L'Homme révolté" (1951) développe une philosophie de la révolte créatrice contre l'injustice et les totalitarismes. Camus se distancie du nihilisme en affirmant la solidarité humaine.`
  },
  {
    philosopherSlug: 'emil-cioran',
    role: "Maître du pessimisme nihiliste",
    contribution: `Philosophe roumain de langue française, maître du pessimisme et du nihilisme lucide. "Précis de décomposition" (1949) analyse la décadence de l'Europe moderne avec ironie désabusée. Thèmes : l'ennui comme torture suprême, la conscience comme malédiction, l'histoire comme farce sanglante, la décréation comme idéal (contraire de la création). Style aphoristique incisif et poétique. Vit l'expérience du néant comme libération des illusions. Refuse tout système et toute rédemption. "La Tentation d'exister" (1956) et "Écartellement" (1979) poursuivent cette méditation sur le néant de l'existence. Influence les penseurs de la déconstruction et les écrivains pessimistes contemporains.`
  },
  {
    philosopherSlug: 'giacomo-leopardi',
    role: "Poète du pessimisme métaphysique",
    contribution: `Génie italien du XIXe siècle, Leopardi développe un pessimisme poétique et philosophique. "Chants" (1831-1835) et "Pensées" (1827-1837) exposent sa vision : la nature est bienveillante en nous donnant l'oubli, mais cruelle en nous donnant le désir d'infini qu'elle ne peut satisfaire. L'homme est un être imparfait, conscient de sa misère. Le bonheur est impossible, la douleur omniprésente. Néanmoins, la poésie peut créer des moments de beauté et de communauté ("Le Chant du cultivateur de Rhèzes"). "La Conquête du bonheur" est une ironie : le bonheur est chimère. Leopardi influence le pessimisme schopenhauerien et nietzschéen, et la poésie moderne (Montale, Quasimodo).`
  },
  {
    philosopherSlug: 'martin-heidegger',
    role: "Penseur du néant de l'être",
    contribution: `Analyse le néant comme expérience fondamentale dans "Qu'est-ce que la métaphysique?" (1929). L'angoisse nous révèle le néant : le monde s'effondre, l'étant dans son ensemble glisse vers le néant. Cette expérience du néant est aussi expérience de l'être. Le nihilisme moderne comme "oubli de l'Être" : la métaphysique occidentale a oublié la question de l'être en se concentrant sur l'étant. Nietzsche comme dernier métaphysicien, accomplissement du nihilisme. La tâche de la pensée est de "surmonter" la métaphysique par un retour à l'Être. Heidegger n'est pas nihiliste mais diagnostique le nihilisme de la technique moderne qui réduit tout à ressource calculable.`
  }
];
