const deepClone = require("./deepClone");

describe("deepClone", () => {
  test("clones nested objects", () => {
    const original = { a: { b: 1 }, c: [1, 2] };
    const copy = deepClone(original);
    copy.a.b = 99;
    expect(original.a.b).toBe(1);
    expect(copy.c).not.toBe(original.c);
  });

  test("returns primitives as-is", () => {
    expect(deepClone(5)).toBe(5);
    expect(deepClone("x")).toBe("x");
  });
});
