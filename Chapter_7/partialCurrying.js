const partialCurrying = (fn) =>
  fn.length === 0 ? fn() : (...pp) => partialCurrying(fn.bind(null, ...pp));
module.exports = partialCurrying;
