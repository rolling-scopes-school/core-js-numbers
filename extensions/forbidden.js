function isCommented(fn) {
  return /\/\/|\*(?=\/)/g.test(fn.toString());
}

function isNumberUsed(fn) {
  return fn.toString().includes('Number.');
}

function isMathUsed(fn) {
  return fn.toString().includes('Math.');
}

function isArrayUsed(fn) {
  const methods = [
    '.forEach(',
    '.at(',
    '.concat(',
    '.copyWithin(',
    '.entries(',
    '.every(',
    '.fill(',
    '.filter(',
    '.find(',
    '.findIndex(',
    '.findLast(',
    '.findLastIndex(',
    '.flat(',
    '.flatMap(',
    '.forEach(',
    '.from(',
    '.fromAsync(',
    '.includes(',
    '.indexOf(',
    '.isArray(',
    '.join(',
    '.keys(',
    '.lastIndexOf(',
    '.map(',
    '.of(',
    '.pop(',
    '.push(',
    '.reduce(',
    '.reduceRight(',
    '.reverse(',
    '.shift(',
    '.slice(',
    '.some(',
    '.sort(',
    '.splice(',
    '.toLocaleString(',
    '.toReversed(',
    '.toSorted(',
    '.toSpliced(',
    '.toString(',
    '.unshift(',
    '.values(',
    '.with(',
  ];
  const fnStr = fn.toString();
  return methods.some((method) => fnStr.includes(method));
}

function isStringUsed(fn) {
  const methods = [
    '.anchor(',
    '.at(',
    '.big(',
    '.blink(',
    '.bold(',
    '.charAt(',
    '.charCodeAt(',
    '.codePointAt(',
    '.concat(',
    '.endsWith(',
    '.fixed(',
    '.fontcolor(',
    '.fontsize(',
    '.fromCharCode(',
    '.fromCodePoint(',
    '.includes(',
    '.indexOf(',
    '.isWellFormed(',
    '.italics(',
    '.lastIndexOf(',
    '.link(',
    '.localeCompare(',
    '.match(',
    '.matchAll(',
    '.normalize(',
    '.padEnd(',
    '.padStart(',
    '.raw(',
    '.repeat(',
    '.replace(',
    '.replaceAll(',
    '.search(',
    '.slice(',
    '.small(',
    '.split(',
    '.startsWith(',
    '.strike(',
    '.sub(',
    '.substr(',
    '.substring(',
    '.sup(',
    '.toLocaleLowerCase(',
    '.toLocaleUpperCase(',
    '.toLowerCase(',
    '.toString(',
    '.toUpperCase(',
    '.toWellFormed(',
    '.trim(',
    '.trimEnd(',
    '.trimStart(',
    '.valueOf(',
  ];
  const fnStr = fn.toString();
  return methods.some((method) => fnStr.includes(method));
}

function isUtilityUsed(fn) {
  const methods = [
    'getRotateMatrixUtil',
    'getBalanceIndexUtil',
    'getRandomNumberUtil',
    'getRandomArrayUtil',
    'getBalancedArrayUtil',
    'getSpiralMatrixUtil',
    'getNumberToStringUtil',
    'getShuffleStringUtil',
    'getNearestBiggerUtil',
  ];
  const fnStr = fn.toString();
  return methods.some((method) => fnStr.includes(method));
}

module.exports = {
  isCommented,
  isNumberUsed,
  isMathUsed,
  isArrayUsed,
  isStringUsed,
  isUtilityUsed,
};
