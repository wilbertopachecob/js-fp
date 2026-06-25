/**
 * @module Chapter_7/curryBind
 * Builds a curried version of a function using `bind`.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function to curry.
 * @returns {Function} Curried function; call one argument at a time.
 * @example
 * const make3 = (a, b, c) => String(100 * a + 10 * b + c);
 * curryBind(make3)(6)(5)(8); // "658"
 */
const curryBind = (fn) =>
  fn.length === 0 ? fn() : (p) => curryBind(fn.bind(null, p));

if (require.main === module) {
  const make3 = (a, b, c) => String(100 * a + 10 * b + c);

  const step1 = make3.bind(null, 6);
  const step2 = step1.bind(null, 5);
  const step3 = step2.bind(null, 8);

  console.log(step3()); // 658
}

module.exports = curryBind;
