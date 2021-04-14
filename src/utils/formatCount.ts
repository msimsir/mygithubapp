export const formatCount = (count: number): string => {
  return Math.abs(count) > 999
    ? ((Math.sign(count) * Math.abs(count)) / 1000).toFixed(1).toString() + "k"
    : (Math.sign(count) * Math.abs(count)).toString();
};
