const range = require("./range");

describe("range - ", () => {
  it("should generate a range with step", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });
  it("should return [0] when called with no end and start <= 0", () => {
    expect(range(0)).toEqual([0]);
  });
});
