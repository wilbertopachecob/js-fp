const partialByEval = require("./partialByEval");

// partialByEval calls the function by name via eval, so it must exist on globalThis.
globalThis.nonsense = function nonsense(a, b, c, d, e) {
  return `${a}/${b}/${c}/${d}/${e}`;
};
const nonsense = globalThis.nonsense;

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
