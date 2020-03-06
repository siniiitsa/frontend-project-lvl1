export const getRandomInt = (min, max) => (
  Math.floor(min + Math.random() * (max + 1 - min))
);

export const stringToNum = (string) => Number(string) || string;
