const { curryByEval, curryByEval2 } = require("./curryByEval");

function sum3(a, b, c) {
  return a + b + c;
}

describe("curryByEval - ", () => {
  it("should curry a named function in global scope", () => {
    global.sum3 = sum3;
    expect(curryByEval(sum3)(1)(2)(3)).toBe(6);
    delete global.sum3;
  });
});

describe("curryByEval2 - ", () => {
  it("should curry an anonymous function", () => {
    const anonymousSum3 = function (a, b, c) {
      return a + b + c;
    };
    expect(curryByEval2(anonymousSum3)(1)(2)(3)).toBe(6);
  });
});
