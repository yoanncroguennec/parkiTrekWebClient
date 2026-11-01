// Vérifie si une valeur est réellement numérique et valide, qu’elle soit de type number ou une chaîne cde caractères représentant un nombre.
export function isNumeric(value: unknown): boolean {
  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  if (typeof value !== "string" || value.trim() === "") {
    return false;
  }

  return Number.isFinite(Number(value));
}
