const deepFreeze = require("./deepFreeze");

describe("deepFreeze", () => {
  test("freezes nested objects", () => {
    const obj = deepFreeze({ a: { b: 1 } });
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.a)).toBe(true);
  });
});
