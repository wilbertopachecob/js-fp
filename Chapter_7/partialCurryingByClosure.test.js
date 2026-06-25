const partialCurryingByClosure = require("./partialCurryingByClosure");
const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;

describe("partialCurryingByClosure - ", () => {
  it("should fix all parameters", () => {
    const nonsensePC = partialCurryingByClosure(nonsense)(1, 2, 3, 4, 5);
    expect(nonsensePC).toBe(nonsense(1, 2, 3, 4, 5));
  });

  it("should fix parameters in more than one step", () => {
    const nonsensePC = partialCurryingByClosure(nonsense)(1, 2);
    expect(nonsensePC(3, 4, 5)).toBe(nonsense(1, 2, 3, 4, 5));
  });

  it("should fix parameters one at a time", () => {
    const nonsensePC = partialCurryingByClosure(nonsense)(1)(2)(3)(4)(5);
    expect(nonsensePC).toBe(nonsense(1, 2, 3, 4, 5));
  });
});
