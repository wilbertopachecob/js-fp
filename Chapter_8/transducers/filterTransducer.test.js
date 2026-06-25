const concat = require("./concat");
const filterTransducer = require("./filterTransducer");

describe("filterTransducer - ", () => {
  it("should keep only values that pass the predicate", () => {
    const evens = filterTransducer((n) => n % 2 === 0);
    expect([1, 2, 3, 4].reduce(evens(concat), [])).toEqual([2, 4]);
  });
});
