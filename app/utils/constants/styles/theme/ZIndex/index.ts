// GOOD
export const zIndex = {
  mobileStepper: 1000, // Indicateur de progression par étapes sur mobile
  fab: 1050, // Bouton unique, généralement circulaire, permettant de déclencher une action principale.
  speedDial: 1050, // Boutton cachant un menu d'actions flottant => Bouton flottant et qu'on clique dessus, déploie plusieurs actions secondaires.
  appBar: 1100, // Barre de navigation supérieure contient un menu de navigation, mais ce n'est pas obligatoire
  drawer: 1200, // Panneau latéral de navigation
  modal: 1300, // Fenêtres modales et des dialogues (Modal / Dialog).
  snackbar: 1400, // Notifications temporaires (Snackbar / Toast)
  tooltip: 1500, // Infobulles contextuelles
  fullScreenMenu: 1550, // Menu de navigation occupant la totalité de l'écran (mobile et desktop)
  idleScreen: 1600, // Écran de veille
  cursor: 999999, // Conteneur principal du curseur personnalisé
  cursorCircle: 1000000, // Cercle principal du curseur
  cursorDot: 1000001, // Point central lumineux du curseur
} as const;
