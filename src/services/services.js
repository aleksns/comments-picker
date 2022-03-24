export const getColors = [
  "#8B0000",
  "#FF0000",
  "#F87217",
  "#FFD414",
  "#008000",
  "#3BB9FF",
  "#1F45FC",
  "#800080",
  "#AF7817",
  "#FAAFBE",
  "#FBB917",
  "#8AFB17",
  "#82CAFF",
  "#F535AA",
];

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function removeQuotesFromString(string) {
  var convertedString = string.replace(/^"(.*)"$/, '$1');
  return convertedString;
}

export function formatDate(string) {
  var convertedString = removeQuotesFromString(string);
  convertedString = convertedString.replace('T', ' : ');
  return convertedString;
}

export function formatUserID(string) {
  var convertedString = string.replace('user', '');
  return convertedString;
}
