const deepFreeze = require("./deepFreeze");
const getByPath = require("./getByPath");

describe("getByPath", () => {
  const obj = deepFreeze({
    d: 22,
    o: { c: "MVD", f: { a: 56 } },
  });

  test("reads top-level values", () => {
    expect(getByPath(["d"], obj)).toBe(22);
  });

  test("reads nested values", () => {
    expect(getByPath(["o", "c"], obj)).toBe("MVD");
    expect(getByPath("o.f.a", obj)).toBe(56);
  });

  test("returns undefined for missing paths", () => {
    expect(getByPath(["missing"], obj)).toBeUndefined();
  });
});
