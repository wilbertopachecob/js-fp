const partialByEval = require("./partialByEval");

nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;

describe("partialByEval - ", () => {
  it("should work with all parameters", () => {
    const nonsenseP = partialByEval(nonsense, 1, 2, 3, 4, 5);
    expect(nonsenseP()).toBe(nonsense(1, 2, 3, 4, 5));
  });
  it("should work when you skip last parameter", () => {
    const nonsenseP = partialByEval(nonsense, 1, 2, 3, 4);
    expect(nonsenseP(5)).toBe(nonsense(1, 2, 3, 4, 5));
  });

  it("should work when you skip more than one parameter", () => {
    const nonsenseP = partialByEval(nonsense, undefined, 2, undefined, 4);
    expect(nonsenseP(1, 3, 5)).toBe(nonsense(1, 2, 3, 4, 5));
  });
});
