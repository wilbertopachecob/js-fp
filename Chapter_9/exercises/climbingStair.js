/**
 * @module Chapter_9/exercises/climbingStair
 */

/**
 * Counts ways to reach `stepAmount` using steps from `steps` (order matters).
 *
 * @param {number} stepAmount - Target step count.
 * @param {number[]} steps - Allowed step sizes.
 * @returns {number} Number of distinct ways.
 * @example
 * climbingStair(4, [2, 1]); // 3
 */
const climbingStair = (stepAmount, steps) => {
  if (stepAmount < 0) {
    return 0;
  } else if (stepAmount == 0) {
    return 1;
  } else if (steps.length == 0) {
    return 0;
  } else {
    return (
      climbingStair(stepAmount, steps.slice(1)) +
      climbingStair(stepAmount - steps[0], steps)
    );
  }
};

module.exports = climbingStair;

if (require.main === module) {
  console.log(climbingStair(4, [2, 1]));
}
