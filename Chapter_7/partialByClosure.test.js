const partialByClosure = require("./partialByClosure");
const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;

describe("partialByClosure - ", () => {
  it("should simulate currying", () => {
    const nonsenseP = partialByClosure(nonsense);
    expect(nonsenseP(1)(2)(3)(4)(5)).toBe(nonsense(1, 2, 3, 4, 5));
  });
});
