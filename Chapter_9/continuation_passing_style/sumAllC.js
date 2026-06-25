/**
 * @module Chapter_9/continuation_passing_style/sumAllC
 */

/**
 * Trampoline helper: repeatedly invokes thunks until a non-function value is returned.
 *
 * @param {Function} fn - Initial thunk or final value.
 * @returns {*} Final result.
 * @example
 * trampoline(() => () => 42); // 42
 */
const trampoline = (fn) => {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
};

/**
 * Sums integers from 1 to `n` using continuation-passing style.
 *
 * @param {number} n - Upper bound (inclusive).
 * @param {(value: number) => *} cont - Continuation receiving the sum.
 * @returns {*} Result of `cont(sum)`.
 * @example
 * sumAllC(3, (x) => x); // 6
 */
const sumAllC = (n, cont) => {
  return n === 0 ? cont(0) : sumAllC(n - 1, (v) => cont(v + n));
};

/**
 * Trampoline-friendly CPS sum returning thunks instead of direct calls.
 *
 * @param {number} n - Upper bound (inclusive).
 * @param {(value: number) => Function} cont - Continuation returning a thunk.
 * @returns {Function} Thunk that eventually yields the sum.
 * @example
 * trampoline(sumAllT(3, (x) => x)); // 6
 */
const sumAllT = (n, cont) =>
  n === 0 ? () => cont(0) : () => sumAllT(n - 1, (v) => () => cont(v + n));

/**
 * Sums 1..n using CPS + trampoline (avoids stack overflow).
 *
 * @param {number} n - Upper bound (inclusive).
 * @returns {number} Sum from 1 to n.
 * @example
 * sumAll2(100); // 5050
 */
const sumAll2 = (n) => trampoline(sumAllT(n, (x) => x));

module.exports = { trampoline, sumAllC, sumAllT, sumAll2 };

if (require.main === module) {
  console.log(sumAll2(100));
}
