const pipeline = require("./pipeline");

describe("pipeline", () => {
  it("works with a single function", () => {
    const fn1 = jest.fn((x) => x + 1);
    const p = pipeline(fn1);

    expect(p(20)).toBe(21);
    expect(fn1).toHaveBeenCalledWith(20);
  });

  it("pipes multiple functions left to right", () => {
    const fn1 = jest.fn(() => 11);
    const fn2 = jest.fn(() => 20);
    const fn3 = jest.fn(() => 33);
    const fn4 = jest.fn(() => 45);
    const p = pipeline(fn1, fn2, fn3, fn4);

    expect(p(59)).toBe(45);
    expect(fn1).toHaveBeenCalledWith(59);
    expect(fn2).toHaveBeenCalledWith(11);
    expect(fn3).toHaveBeenCalledWith(20);
    expect(fn4).toHaveBeenCalledWith(33);
  });

  it("forwards all arguments to the first function", () => {
    const fn1 = jest.fn((a, b, c, d) => a + b + c + d);
    const p = pipeline(fn1);

    expect(p(20, 21, 22, 23)).toBe(86);
    expect(fn1).toHaveBeenCalledWith(20, 21, 22, 23);
  });
});
