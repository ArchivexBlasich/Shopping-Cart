export const printRateWithStars = (starts: number) => {
  return `${"★".repeat(starts)}${"☆".repeat(5 - starts)}`;
};
