const not = require("./not");

describe("not - ", () => {
  it("should negate a predicate", () => {
    const isEven = (n) => n % 2 === 0;
    expect([1, 2, 3, 4].filter(not(isEven))).toEqual([1, 3]);
  });
});
