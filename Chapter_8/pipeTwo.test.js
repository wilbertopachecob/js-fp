const pipeTwo = require("./pipeTwo");

describe("pipeTwo - ", () => {
  let dummy = {};
  beforeEach(() => {
    dummy = {
      fn1: () => {},
      fn2: () => {},
    };
  });
  it("should call fns with the rigth params", () => {
    jest.spyOn(dummy, "fn1").mockReturnValue(1);
    jest.spyOn(dummy, "fn2").mockReturnValue(2);
    const { fn1, fn2 } = dummy;
    const p = pipeTwo(fn1, fn2);
    const result = p(3);
    expect(fn1).toHaveBeenCalledWith(2);
    expect(fn2).toHaveBeenCalledWith(3);
    expect(result).toBe(1);
  });
  it("should work with multiple params", () => {
    jest.spyOn(dummy, "fn1").mockReturnValue(1);
    jest.spyOn(dummy, "fn2").mockReturnValue(2);
    const { fn1, fn2 } = dummy;
    const p = pipeTwo(fn1, fn2);
    const result = p(3, 4, 5);
    expect(fn1).toHaveBeenCalledWith(2);
    expect(fn2).toHaveBeenCalledWith(3, 4, 5);
    expect(result).toBe(1);
  });
});
