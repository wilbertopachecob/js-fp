/**
 * @module Chapter_7/exercises/sumMany
 * Curried reducer that sums any number of arguments.
 * @see src/currying.ts
 *
 * @param {...number} args - Numbers passed one curried call at a time.
 * @returns {number} Sum of all provided numbers.
 * @example
 * sumMany(1)(2)(3)(4)(5); // 15
 */
const partialCurrying2 = require("../partialCurrying2");

const sum = (...args) => args.reduce((x, y) => x + y, 0);
const sumMany = partialCurrying2(sum, 5);

if (require.main === module) {
  console.log(sumMany(1)(2)(3)(4)(5));
}

module.exports = sumMany;
