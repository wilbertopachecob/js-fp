const pipeTwo = require("./pipeTwo");

const pipeline = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
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

// console.log(pipelineDeclarative2(double, double, double)(2));
//(...args) => ((...args) => f(g(...args))(g(...args))

module.exports = pipeline2;
