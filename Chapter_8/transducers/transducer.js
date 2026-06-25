/**
 * @module Chapter_8/transducers/transducer
 * Transducers are reusable transforms you plug into reduce.
 * They map or filter values in one pass without building intermediate arrays.
 * @see src/transducers.ts
 *
 * @example
 * const doubleEvens = compose(filter(isEven), map(double));
 * [1, 2, 3, 4, 5, 6].reduce(doubleEvens(arrayConcat), []); // [4, 8, 12]
 */
const compose = require("../compose");

/**
 * @param {Function} fn - Mapping function.
 * @returns {Function} Map transducer.
 */
const map = (fn) => (step) => (acc, next) => step(acc, fn(next));

/**
 * @param {Function} predicate - Filter predicate.
 * @returns {Function} Filter transducer.
 */
const filter = (predicate) => (step) => (acc, next) =>
  predicate(next) ? step(acc, next) : acc;

const isEven = (n) => n % 2 === 0;
const double = (n) => n * 2;

const doubleEvens = compose(filter(isEven), map(double));
const arrayConcat = (a, c) => a.concat([c]);

if (require.main === module) {
  const xform = doubleEvens(arrayConcat);
  const result = [1, 2, 3, 4, 5, 6].reduce(xform, []);
  console.log(result);
}

module.exports = { map, filter, doubleEvens, arrayConcat };
