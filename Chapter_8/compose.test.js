const compose = require("./compose");

describe("compose - ", () => {
  let dummy = {};
  beforeEach(() => {
    dummy = {
      fn1: () => {},
      fn2: () => {},
      fn3: () => {},
      fn4: () => {},
    };
  });
  test("that works with miultiple fns and params", () => {
    jest.spyOn(dummy, "fn1").mockReturnValue(11);
    jest.spyOn(dummy, "fn2").mockReturnValue(20);
    jest.spyOn(dummy, "fn3").mockReturnValue(33);
    jest.spyOn(dummy, "fn4").mockReturnValue(45);
    const { fn1, fn2, fn3, fn4 } = dummy;
    const p = compose(fn1, fn2, fn3, fn4);
    const result = p(59, 80, 73);
    expect(fn1).toHaveBeenCalledWith(59, 80, 73);
    expect(fn2).toHaveBeenCalledWith(11);
    expect(fn3).toHaveBeenCalledWith(20);
    expect(fn4).toHaveBeenCalledWith(33);
    expect(result).toBe(45);
  });
});
