export const printRateWithStars = (starts: number) => {
  starts = Math.round(starts);
  return `${"★".repeat(starts)}${"☆".repeat(5 - starts)}`;
};
