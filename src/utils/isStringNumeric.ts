export const isStringNumeric = (value: string) => {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
};
