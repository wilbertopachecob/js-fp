/**
 * @module Chapter_7/exercises/uncurry
 * Converts a curried function back into one that accepts all arguments at once.
 * @see src/currying.ts
 *
 * @param {Function} fn - Curried function to uncurry.
 * @returns {Function} Function accepting all arguments in a single call.
 * @example
 * const make3c = curry(make3);
 * const remake3 = uncurry(make3c);
 * remake3(1, 2, 3); // "123"
 */
const curry = require("../curryBind");

/**
 * @param {Function} fn
 * @returns {Function}
 */
function uncurry(fn) {
  return (...args) => args.reduce((acc, next) => acc(next), fn);
}

if (require.main === module) {
  const make3 = (a, b, c) => String(100 * a + 10 * b + c);
  const make3c = curry(make3);

  console.log(make3c(1)(2)(3)); // 123

  const remake3 = uncurry(make3c);

  console.log(remake3(1, 2, 3)); // 123
}

module.exports = uncurry;
