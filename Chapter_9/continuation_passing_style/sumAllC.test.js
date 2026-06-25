const { trampoline, sumAllC, sumAllT, sumAll2 } = require("./sumAllC");

describe("sumAllC", () => {
  test("sums with continuation passing", () => {
    expect(sumAllC(3, (x) => x)).toBe(6);
  });
});

describe("trampoline and sumAll2", () => {
  test("trampoline resolves nested thunks", () => {
    expect(trampoline(() => () => 42)).toBe(42);
  });

  test("sumAll2 sums large n without stack overflow", () => {
    expect(sumAll2(100)).toBe(5050);
  });

  test("sumAllT works with trampoline", () => {
    expect(trampoline(sumAllT(5, (x) => x))).toBe(15);
  });
});
