const findOptimum = require("./findOptimum");

describe("findOptimum - ", () => {
  it("should find the maximum value in an array", () => {
    const findMaximum = findOptimum((x, y) => (x > y ? x : y));
    expect(findMaximum([22, 9, 60, 12])).toBe(60);
  });

  it("should find the minimum value in an array", () => {
    const findMinimum = findOptimum((x, y) => (x < y ? x : y));
    expect(findMinimum([22, 9, 60, 12])).toBe(9);
  });
});
