const concat = require("./concat");

describe("concat - ", () => {
  it("should append values to an accumulator array", () => {
    expect([1, 2, 3].reduce(concat, [])).toEqual([1, 2, 3]);
  });
});
