const addCurryToFnPrototype = require("./addCurryToFnPrototype");

describe("addCurryToFnPrototype - ", () => {
  it("should add a curry method to functions", () => {
    addCurryToFnPrototype();
    const sum3 = (a, b, c) => 100 * a + 10 * b + c;
    expect(sum3.curry()(1)(2)(4)).toBe(124);
  });
});
