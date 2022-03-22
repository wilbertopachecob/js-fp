const partialCurrying2 = (fn, len = fn.length) =>
  len === 0
    ? fn()
    : (...pp) => partialCurrying2(fn.bind(null, ...pp), len - pp.length);
module.exports = partialCurrying2;
