const arity = require("./arity");

describe("arity - ", () => {
  it("should set the length property of the wrapped function", () => {
    const fn = (x, y) => x + y;
    expect(arity(fn, 1).length).toBe(1);
  });

  it("should pass only the first n arguments", () => {
    const fn = jest.fn((x, y) => x + y);
    const wrapped = arity(fn, 1);
    wrapped(1, 2);
    expect(fn).toHaveBeenCalledWith(1);
  });
});
