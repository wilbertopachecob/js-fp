const pipeTwo = require("./pipeTwo");

describe("pipeTwo", () => {
  it("runs the first function then passes its result to the second", () => {
    const fn1 = jest.fn((x) => x + 1);
    const fn2 = jest.fn((x) => x * 2);
    const p = pipeTwo(fn1, fn2);

    expect(p(3)).toBe(8);
    expect(fn1).toHaveBeenCalledWith(3);
    expect(fn2).toHaveBeenCalledWith(4);
  });

  it("forwards all arguments to the first function", () => {
    const fn1 = jest.fn((a, b, c) => a + b + c);
    const fn2 = jest.fn((x) => x * 2);
    const p = pipeTwo(fn1, fn2);

    expect(p(3, 4, 5)).toBe(24);
    expect(fn1).toHaveBeenCalledWith(3, 4, 5);
    expect(fn2).toHaveBeenCalledWith(12);
  });
});
