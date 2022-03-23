//with variable arguments
const curryBind2 = (fn, len = fn.length) =>
  len === 0 ? fn() : (p) => curryBind2(fn.bind(null, p), len - 1);

module.exports = curryBind2;
