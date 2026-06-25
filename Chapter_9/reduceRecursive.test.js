const { reduceRecursive, reduceR } = require("./reduceRecursive");

describe("reduceRecursive", () => {
  test("reduces with index-based recursion", () => {
    expect(reduceRecursive([1, 2, 3, 4], (acc, n) => acc + n, 0)).toBe(10);
  });
});

describe("reduceR", () => {
  test("reduces with slice recursion", () => {
    expect(reduceR([1, 2, 3], (acc, n) => acc + n, 0)).toBe(6);
  });
});
