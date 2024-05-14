function isCommented(fn) {
  return /\/\/|\*(?=\/)/g.test(fn.toString());
}

module.exports = {
  isCommented,
};
