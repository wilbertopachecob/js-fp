const range2 = require("./range2");

describe("range2 - ", () => {
  it("should generate a range from start to stop", () => {
    expect(range2(1, 5)).toEqual([1, 2, 3, 4]);
  });
});
