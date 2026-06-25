const powerN = require("./powerN");

describe("powerN", () => {
  test("computes powers", () => {
    expect(powerN(2, 10)).toBe(1024);
    expect(powerN(3, 4)).toBe(81);
  });

  test("returns 1 for power 0", () => {
    expect(powerN(99, 0)).toBe(1);
  });
});
