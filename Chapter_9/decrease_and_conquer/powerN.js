/**
 * @module Chapter_9/decrease_and_conquer/powerN
 */

/**
 * Computes `base ** power` using decrease-and-conquer (binary exponentiation for evens).
 *
 * @param {number} base - Base value.
 * @param {number} power - Non-negative exponent.
 * @returns {number} Result of exponentiation.
 * @example
 * powerN(2, 10); // 1024
 * powerN(3, 0); // 1
 */
const powerN = (base, power) => {
  if (power === 0) {
    return 1;
  } else if (power % 2) {
    return base * powerN(base, power - 1);
  } else {
    return powerN(base * base, power / 2);
  }
};

module.exports = powerN;
