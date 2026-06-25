const fibonacci = require("./fibonacci");

describe("fibonacci", () => {
  test("returns 1 for n <= 1", () => {
    expect(fibonacci(0)).toBe(1);
    expect(fibonacci(1)).toBe(1);
  });

  test("computes sequence values (1 for n <= 1)", () => {
    expect(fibonacci(5)).toBe(8);
    expect(fibonacci(10)).toBe(89);
  });
});
