const findRecursive = require("./findRecursive");

describe("findRecursive", () => {
  const isTwentySomething = (x) => 20 <= x && x <= 29;

  test("finds first matching element", () => {
    expect(findRecursive([1, 12, 5, 22, 9], isTwentySomething)).toBe(22);
  });

  test("returns undefined when nothing matches", () => {
    expect(findRecursive([1, 2, 3], isTwentySomething)).toBeUndefined();
  });
});
