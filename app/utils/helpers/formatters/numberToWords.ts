type NumberToWordsOptions = {
  capitalize?: boolean;
};

const units = [
  "zéro",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
  "dix",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
];

export const numberToWords = (
  number: number,
  options: NumberToWordsOptions = {},
): string => {
  const { capitalize = false } = options;

  const convert = (value: number): string => {
    if (value < 17) {
      return units[value];
    }

    if (value < 20) {
      return `dix-${units[value - 10]}`;
    }

    if (value < 70) {
      const tens = ["vingt", "trente", "quarante", "cinquante", "soixante"];

      const ten = Math.floor(value / 10);
      const unit = value % 10;
      const base = tens[ten - 2];

      if (unit === 0) return base;
      if (unit === 1) return `${base} et un`;

      return `${base}-${units[unit]}`;
    }

    if (value < 80) {
      const unit = value - 60;

      if (unit === 11) {
        return "soixante et onze";
      }

      return `soixante-${convert(unit)}`;
    }

    if (value < 100) {
      const unit = value - 80;

      if (unit === 0) {
        return "quatre-vingts";
      }

      if (unit === 1) {
        return "quatre-vingt-un";
      }

      return `quatre-vingt-${convert(unit)}`;
    }

    if (value < 1000) {
      const hundred = Math.floor(value / 100);
      const remainder = value % 100;

      let result = hundred === 1 ? "cent" : `${units[hundred]} cent`;

      if (remainder === 0 && hundred > 1) {
        result += "s";
      }

      if (remainder > 0) {
        result += ` ${convert(remainder)}`;
      }

      return result;
    }

    return value.toString();
  };

  const result = convert(number);

  return capitalize ? result.charAt(0).toUpperCase() + result.slice(1) : result;
};
