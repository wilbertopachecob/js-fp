const someR = require("./someR");

describe("someR", () => {
  test("returns true when any pass", () => {
    expect(someR([1, 2, 3, 5], (x) => x % 2)).toBe(true);
  });

  test("returns false when none pass", () => {
    expect(someR([0, 2, 4], (x) => x % 2)).toBe(false);
  });
});
