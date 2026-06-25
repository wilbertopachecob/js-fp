const updateObject = require("./updateObject");

describe("updateObject", () => {
  test("returns frozen clone with updated path", () => {
    const original = { d: 22, m: 9, o: { c: "MVD" } };
    const updated = updateObject(["d"], 99, original);
    expect(updated.d).toBe(99);
    expect(original.d).toBe(22);
    expect(Object.isFrozen(updated)).toBe(true);
  });
});
