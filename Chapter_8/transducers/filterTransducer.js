/**
 * @module Chapter_8/transducers/filterTransducer
 * Transducer that keeps only values that pass the test.
 * @see src/transducers.ts
 *
 * @param {Function} predicate - Filter predicate.
 * @returns {Function} Transducer that wraps a reducer.
 * @example
 * const evens = filterTransducer((n) => n % 2 === 0);
 * [1, 2, 3, 4].reduce(evens(concat), []); // [2, 4]
 */
const filterTransducer = (predicate) => (reducer) => (acc, val) =>
  predicate(val) ? reducer(acc, val) : acc;

module.exports = filterTransducer;
