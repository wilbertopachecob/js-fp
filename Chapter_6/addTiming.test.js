const addTiming = require("./addTiming");

describe("addTiming - ", () => {
  it("should call the wrapped function and return its result", () => {
    const timer = jest.fn(() => 0);
    const logger = jest.fn();
    const fn = jest.fn((x) => x * 2);
    const timed = addTiming(fn, timer, logger);

    expect(timed(5)).toBe(10);
    expect(fn).toHaveBeenCalledWith(5);
    expect(logger).toHaveBeenCalled();
  });
});
