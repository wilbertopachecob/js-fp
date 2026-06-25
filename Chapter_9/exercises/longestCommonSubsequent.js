/**
 * @module Chapter_9/exercises/longestCommonSubsequent
 */

const memoize = require("../../Chapter_6/memoize");

/**
 * Finds a longest common subsequence between two strings (greedy + memoization).
 *
 * @param {string} s1 - First string.
 * @param {string} s2 - Second string.
 * @returns {string[]} Characters of one longest common subsequence.
 * @example
 * longestCommonSubsequent("INTERNATIONAL", "CONTRACTOR"); // ["N","T","R","A","T","O"]
 */
const longestCommonSubsequent = (s1, s2) => {
  const results = [[]];
  let i = 0;
  let searchForMatches = (left, right) => {
    if (left.length === 0 || right.length === 0) {
      return;
    }
    const index = right.indexOf(left[0]);
    if (index !== -1) {
      results[i].push(left[0]);
      return searchForMatches(left.slice(1), right.slice(index + 1));
    }
    return searchForMatches(left.slice(1), right);
  };

  searchForMatches = memoize(searchForMatches);

  while (i < s1.length) {
    searchForMatches(s1.slice(i), s2);
    i++;
    results[i] = [];
  }
  return results.reduce((acc, next) =>
    acc.length < next.length ? (acc = next) : acc
  );
};

module.exports = longestCommonSubsequent;

if (require.main === module) {
  console.log(longestCommonSubsequent("INTERNATIONAL", "CONTRACTOR"));
}
