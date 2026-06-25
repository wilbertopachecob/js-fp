/**
 * @module invert
 */

const spanishComparison = (a, b) => a.localeCompare(b, "es");

/**
 * Negates the numeric result of a comparison function.
 *
 * @param {Function} fn - Comparison function returning a number.
 * @returns {Function} Inverted comparison function.
 * @example
 * [3, 1, 2].sort(invert((a, b) => a - b)); // descending order
 */
const invert =
  (fn) =>
  (...args) =>
    -fn(...args);

module.exports = invert;

if (require.main === module) {
  const palabras = ["ñandú", "oasis", "mano", "natural", "mítico", "musical"];
  console.log(palabras.sort(spanishComparison));
  console.log(palabras.sort(invert(spanishComparison)));
}
