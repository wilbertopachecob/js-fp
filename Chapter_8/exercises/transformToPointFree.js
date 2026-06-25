/**
 * @module Chapter_8/exercises/transformToPointFree
 * Point-free style builds a pipeline by composing functions without naming each step's input.
 * Here, filter → group → sort is wired with `compose` instead of intermediate variables.
 * @see src/composition.ts
 *
 * @param {Array} things - Input collection.
 * @returns {Array} Transformed collection.
 * @example
 * getSomeResults([3, 1, 2]); // [1, 2, 3]
 */
const compose = require("../compose");

const select = (things) => things;
const filter = (things) => things.filter((item) => item > 0);
const group = (things) => things;
const sort = (things) => [...things].sort((a, b) => a - b);

const getSomeResults = compose(sort, group, filter, select);

if (require.main === module) {
  console.log(getSomeResults([3, -1, 2, 0, 1]));
}

module.exports = getSomeResults;
module.exports.select = select;
module.exports.filter = filter;
module.exports.group = group;
module.exports.sort = sort;
