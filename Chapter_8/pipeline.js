/**
 * @module Chapter_8/pipeline
 * Runs functions left to right and passes the result to the next one.
 * @see src/composition.ts
 *
 * @param {...Function} fns - Functions to run in pipeline order.
 * @returns {Function} Pipeline function.
 * @example
 * pipeline((x) => x * 2, (x) => x + 1)(3); // 7
 */
const pipeTwo = require("./pipeTwo");

const pipeline = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );

const pipeline2 = (...fns) => fns.reduce(pipeTwo);

const pipelineDeclarative =
  (...fns) =>
  (...args) => {
    let result = fns[0](...args);
    for (let i = 1; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };

const pipelineDeclarative2 =
  (...fns) =>
  (...args) =>
    fns.reduce((acc, fn) => fn(acc), fns.shift()(...args));

const double = (x) => x * 2;

if (require.main === module) {
  console.log(pipelineDeclarative2(double, double, double)(2));
}

module.exports = pipeline2;
module.exports.pipeline = pipeline2;
module.exports.pipelineDeclarative = pipelineDeclarative;
module.exports.pipelineDeclarative2 = pipelineDeclarative2;
