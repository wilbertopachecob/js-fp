const flatOne = require("./flatOne");

describe("flatOne - ", () => {
  it("should flatten nested arrays by one level", () => {
    expect(flatOne([[1, 2], 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });
});
