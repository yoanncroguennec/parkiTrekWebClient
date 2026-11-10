export interface TrekDuration {
  title: string;
  showValue: boolean;
}

export const formatTrekDuration = (days: number): TrekDuration => {
  if (days <= 30) {
    return {
      title: days === 1 ? "Jour de trek" : "Jours de trek",
      showValue: true,
    };
  }

  const months = Math.floor(days / 30);
  const remainingDays = days % 30;

  if (remainingDays === 0) {
    return {
      title: months === 1 ? "1 mois de trek" : `${months} mois de trek`,
      showValue: false,
    };
  }

  return {
    title:
      months === 1
        ? `1 mois et ${remainingDays} jour${remainingDays > 1 ? "s" : ""} de trek`
        : `${months} mois et ${remainingDays} jour${remainingDays > 1 ? "s" : ""} de trek`,
    showValue: false,
  };
};
