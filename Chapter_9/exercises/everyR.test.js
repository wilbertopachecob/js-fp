const everyR = require("./everyR");

describe("everyR", () => {
  test("returns true when all pass", () => {
    expect(everyR([2, 4, 6], (x) => x % 2 === 0)).toBe(true);
  });

  test("returns false when one fails", () => {
    expect(everyR([1, 2, 5, 7], (x) => x % 2)).toBe(false);
  });
});
