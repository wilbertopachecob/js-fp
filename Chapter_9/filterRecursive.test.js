const filterRecursive = require("./filterRecursive");

describe("filterRecursive", () => {
  test("filters with recursive implementation", () => {
    const odd = (x) => x % 2;
    expect(filterRecursive([1, 2, 3, 4], odd)).toEqual([1, 3]);
  });
});
