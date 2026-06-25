/**
 * @module Chapter_8/transducers/composeTransducers
 * Chains two transducers so their transforms run in one pass before the reducer.
 * @see src/transducers.ts
 *
 * @param {Function} transducerOne - Outer transducer.
 * @param {Function} transducerTwo - Inner transducer.
 * @returns {Function} Composed transducer.
 * @example
 * const addOneAndDouble = composeTransducers(
 *   mapTransducer((x) => x + 1),
 *   mapTransducer((x) => x * 2)
 * );
 * [1, 2, 3].reduce(addOneAndDouble(concat), []); // [4, 6, 8]
 */
const concat = require("./concat");
const mapTransducer = require("./mapTransducer");

const composeTransducers = (transducerOne, transducerTwo) => (reducingFn) =>
  transducerOne(transducerTwo(reducingFn));

if (require.main === module) {
  const double = (x) => x * 2;
  const doubleTransducer = mapTransducer(double);
  const increment = (x) => ++x;
  const addOneTransducer = mapTransducer(increment);

  const addOneAndDoubleTransducer = composeTransducers(
    addOneTransducer,
    doubleTransducer
  );
  const reducingFn = addOneAndDoubleTransducer(concat);
  const result = [1, 2, 3, 4].reduce(reducingFn, []);
  console.log(result);
}

module.exports = composeTransducers;
