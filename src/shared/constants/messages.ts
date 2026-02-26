/**
 * Common UI messages
 */
export const messages = {
  // Loading states
  loading: 'Chargement...',
  saving: 'Enregistrement...',
  submitting: 'Soumission...',
  deleting: 'Suppression...',

  // Success messages
  success: 'Opération réussie',
  saved: 'Enregistré avec succès',
  created: 'Créé avec succès',
  updated: 'Mis à jour avec succès',
  deleted: 'Supprimé avec succès',
  copied: 'Copié dans le presse-papier',

  // Error messages
  error: 'Une erreur est survenue',
  networkError: 'Erreur de connexion',
  notFound: 'Élément non trouvé',
  unauthorized: 'Non autorisé',
  forbidden: 'Accès refusé',
  serverError: 'Erreur serveur',

  // Confirmation messages
  confirmDelete: 'Êtes-vous sûr de vouloir supprimer cet élément ?',
  confirmCancel: 'Êtes-vous sûr de vouloir annuler ?',
  confirmLeave: 'Des modifications non sauvegardées seront perdues. Continuer ?',

  // Empty states
  noResults: 'Aucun résultat',
  noData: 'Aucune donnée disponible',
  noItems: 'Aucun élément',

  // Actions
  retry: 'Réessayer',
  cancel: 'Annuler',
  confirm: 'Confirmer',
  close: 'Fermer',
  back: 'Retour',
  next: 'Suivant',
  previous: 'Précédent',
  submit: 'Soumettre',
  save: 'Enregistrer',
  delete: 'Supprimer',
  edit: 'Modifier',
  create: 'Créer',
  update: 'Mettre à jour',
  search: 'Rechercher',
  filter: 'Filtrer',
  sort: 'Trier',
  export: 'Exporter',
  import: 'Importer',
  download: 'Télécharger',
  upload: 'Téléverser',
  share: 'Partager',
  copy: 'Copier',
  paste: 'Coller',
  cut: 'Couper',
  undo: 'Annuler',
  redo: 'Rétablir',

  // Validation
  required: 'Ce champ est requis',
  invalidEmail: 'Email invalide',
  invalidUrl: 'URL invalide',
  minLength: (min: number) => `Minimum ${min} caractères`,
  maxLength: (max: number) => `Maximum ${max} caractères`,
  minValue: (min: number) => `Minimum ${min}`,
  maxValue: (max: number) => `Maximum ${max}`,

  // Pagination
  showing: (from: number, to: number, total: number) =>
    `Affichage de ${from} à ${to} sur ${total} éléments`,
  perPage: 'par page',
  of: 'sur',

  // Time
  justNow: "À l'instant",
  minutesAgo: (n: number) => `Il y a ${n} minute${n > 1 ? 's' : ''}`,
  hoursAgo: (n: number) => `Il y a ${n} heure${n > 1 ? 's' : ''}`,
  daysAgo: (n: number) => `Il y a ${n} jour${n > 1 ? 's' : ''}`,
} as const;
