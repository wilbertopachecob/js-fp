/**
 * @module Chapter_8/transducers/theSimplestTransducer
 * Identity transducer that forwards values to the wrapped reducer.
 * @see src/transducers.ts
 *
 * @param {Function} reducer - Reducing function to wrap.
 * @returns {Function} Reducer with the same behavior.
 * @example
 * const reducingFn = theSimplestTransducer(concat);
 * [1, 2, 3, 4].reduce(reducingFn, []); // [1, 2, 3, 4]
 */
const concat = require("./concat");

const theSimplestTransducer = (reducer) => (acc, val) => reducer(acc, val);

if (require.main === module) {
  const reducingFn = theSimplestTransducer(concat);
  const result = [1, 2, 3, 4].reduce(reducingFn, []);
  console.log(result);
}

module.exports = theSimplestTransducer;
