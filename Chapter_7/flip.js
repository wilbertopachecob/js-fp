/**
 * @module Chapter_7/flip
 * Swaps the order of function arguments.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function whose first two arguments should be swapped.
 * @returns {Function} Function calling `fn` with swapped arguments.
 * @example
 * const subtract = (a, b) => a - b;
 * flip2(subtract)(10, 3); // 3 - 10 = -7
 */
const flip2 = (fn) => (p1, p2) => fn(p2, p1);

/**
 * Rotates the first three arguments: calls `fn(p3, p1, p2)`.
 *
 * @param {Function} fn - Function whose first three arguments should be rotated.
 * @returns {Function} Function with rotated argument order.
 * @example
 * const pick = (a, b, c) => `${a}-${b}-${c}`;
 * flip3(pick)(1, 2, 3); // "3-1-2"
 */
const flip3 = (fn) => (p1, p2, p3) => fn(p3, p1, p2);

module.exports = flip2;
module.exports.flip2 = flip2;
module.exports.flip3 = flip3;
