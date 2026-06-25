const compose = require("./compose");

describe("compose", () => {
  it("composes multiple functions right to left", () => {
    const fn1 = jest.fn(() => 11);
    const fn2 = jest.fn(() => 20);
    const fn3 = jest.fn(() => 33);
    const fn4 = jest.fn(() => 45);
    const p = compose(fn1, fn2, fn3, fn4);

    expect(p(59, 80, 73)).toBe(11);
    expect(fn4).toHaveBeenCalledWith(59, 80, 73);
    expect(fn3).toHaveBeenCalledWith(45);
    expect(fn2).toHaveBeenCalledWith(33);
    expect(fn1).toHaveBeenCalledWith(20);
  });
});
