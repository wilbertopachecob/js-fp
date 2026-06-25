const unary = require("./unary");

describe("unary - ", () => {
  it("should pass only the first argument to the wrapped function", () => {
    const fn = jest.fn((x) => x);
    const wrapped = unary(fn);
    wrapped(1, 2, 3);
    expect(fn).toHaveBeenCalledWith(1);
  });
});
