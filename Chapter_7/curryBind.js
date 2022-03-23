const curryBind = (fn) =>
  fn.length === 0 ? fn() : (p) => curryBind(fn.bind(null, p));

//ex
const make3 = (a, b, c) => String(100 * a + 10 * b + c);

const step1 = make3.bind(null, 6);
const step2 = step1.bind(null, 5);
const step3 = step2.bind(null, 8);

step3(); // 658

module.exports = curryBind;
