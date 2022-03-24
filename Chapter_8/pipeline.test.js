const pipeline = require("./pipeline");

describe("pipeline - ", () => {
  let dummy = {};
  beforeEach(() => {
    dummy = {
      fn1: () => {},
      fn2: () => {},
      fn3: () => {},
      fn4: () => {},
    };
  });
  test("that works with a single fn", () => {
    jest.spyOn(dummy, "fn1").mockReturnValue(11);
    const { fn1 } = dummy;
    const p = pipeline(fn1);
    const result = p(20);
    expect(fn1).toHaveBeenCalledWith(20);
    expect(result).toBe(11);
  });
  test("that works with a multiple fns", () => {
    jest.spyOn(dummy, "fn1").mockReturnValue(11);
    jest.spyOn(dummy, "fn2").mockReturnValue(20);
    jest.spyOn(dummy, "fn3").mockReturnValue(33);
    jest.spyOn(dummy, "fn4").mockReturnValue(45);
    const { fn1, fn2, fn3, fn4 } = dummy;
    const p = pipeline(fn1, fn2, fn3, fn4);
    const result = p(59);
    expect(fn4).toHaveBeenCalledWith(59);
    expect(fn3).toHaveBeenCalledWith(45);
    expect(fn2).toHaveBeenCalledWith(33);
    expect(fn1).toHaveBeenCalledWith(20);
    expect(result).toBe(11);
  });
  test("that works with a multiple params", () => {
    jest.spyOn(dummy, "fn1").mockReturnValue(11);
    const { fn1 } = dummy;
    const p = pipeline(fn1);
    const result = p(20, 21, 22, 23);
    expect(fn1).toHaveBeenCalledWith(20, 21, 22, 23);
    expect(result).toBe(11);
  });
});
