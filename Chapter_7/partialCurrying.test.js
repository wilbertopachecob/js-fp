const partialCurrying = require("./partialCurrying");
const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;

describe("partialCurrying - ", () => {
  it("should fix all parameters", () => {
    const nonsensePC = partialCurrying(nonsense)(1, 2, 3, 4, 5);
    expect(nonsensePC).toBe(nonsense(1, 2, 3, 4, 5));
  });
  it("should fix parameters in more than one step", () => {
    const nonsensePC = partialCurrying(nonsense)(1, 2);
    expect(nonsensePC(3, 4, 5)).toBe(nonsense(1, 2, 3, 4, 5));
  });
  it("should fix parameters one at a time", () => {
    const nonsensePC = partialCurrying(nonsense)(1)(2)(3)(4)(5);
    expect(nonsensePC).toBe(nonsense(1, 2, 3, 4, 5));
  });
});
