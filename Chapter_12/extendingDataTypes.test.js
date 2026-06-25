const { extendNativeTypes } = require("./extendingDataTypes");

describe("extendingDataTypes", () => {
  beforeAll(() => {
    extendNativeTypes();
  });

  test("Number.prototype.map works", () => {
    expect((5).map((n) => n + 1)).toBe(6);
  });

  test("String.prototype.map works", () => {
    expect("hi".map((s) => s.toUpperCase())).toBe("HI");
  });

  test("Boolean.prototype.map works", () => {
    expect(true.map(() => 1)).toBe(true);
  });

  test("Function.prototype.map composes", () => {
    const add1 = (x) => x + 1;
    expect(add1.map((n) => n * 2)(3)).toBe(8);
  });
});
