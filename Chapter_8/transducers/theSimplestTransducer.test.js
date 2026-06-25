const concat = require("./concat");
const theSimplestTransducer = require("./theSimplestTransducer");

describe("theSimplestTransducer - ", () => {
  it("should forward values to the wrapped reducer", () => {
    const reducingFn = theSimplestTransducer(concat);
    expect([1, 2, 3, 4].reduce(reducingFn, [])).toEqual([1, 2, 3, 4]);
  });
});
