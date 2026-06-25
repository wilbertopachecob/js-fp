const tap = require("./tap");

describe("tap - ", () => {
  it("should run a side effect and return the original value", () => {
    const fn = jest.fn();
    const result = tap(fn)(5);

    expect(fn).toHaveBeenCalledWith(5);
    expect(result).toBe(5);
  });
});
