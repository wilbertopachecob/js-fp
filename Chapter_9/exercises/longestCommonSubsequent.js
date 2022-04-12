const memoize = require("../../Chapter_6/memoize");

const longestCommonSubsequent = (s1, s2) => {
  const results = [[]];
  let i = 0;
  let searchForMatches = (s1, s2) => {
    if (s1.length === 0 || s2.length === 0) {
      return;
    }
    const index = s2.indexOf(s1[0]);
    if (index !== -1) {
      results[i].push(s1[0]);
      return searchForMatches(s1.slice(1), s2.slice(index + 1));
    }
    return searchForMatches(s1.slice(1), s2);
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

const solution = longestCommonSubsequent("INTERNATIONAL", "CONTRACTOR"); //N...T...R...A...T...O
console.log(solution);
