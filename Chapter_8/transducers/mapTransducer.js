/**
 * @module Chapter_8/transducers/mapTransducer
 * Transducer that maps each value before it reaches the reducer.
 * @see src/transducers.ts
 *
 * @param {Function} transformFn - Mapping function.
 * @returns {Function} Transducer that wraps a reducer.
 * @example
 * const double = mapTransducer((x) => x * 2);
 * [1, 2, 3].reduce(double(concat), []); // [2, 4, 6]
 */
const mapTransducer = (transformFn) => (reducer) => (acc, val) =>
  reducer(acc, transformFn(val));

module.exports = mapTransducer;
