import {
  memoize,
  once,
  onceAndAfter,
  loggingWrapper,
  promisify,
  addTiming,
} from "../src/higherOrder";

describe("higher-order utilities", () => {
  it("memoize caches repeated calls", () => {
    const spy = jest.fn((n: number) => n * 2);
    const fn = memoize(spy);

    expect(fn(2)).toBe(4);
    expect(fn(2)).toBe(4);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("once runs only the first time", () => {
    const spy = jest.fn();
    const fn = once(spy);

    fn();
    fn();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("onceAndAfter switches functions after the first call", () => {
    const first = jest.fn();
    const next = jest.fn();
    const fn = onceAndAfter(first, next);

    fn("a");
    fn("b");

    expect(first).toHaveBeenCalledWith("a");
    expect(next).toHaveBeenCalledWith("b");
  });

  it("loggingWrapper logs start and finish", () => {
    const logger = jest.fn();
    const double = loggingWrapper((n: number) => n * 2, logger);

    expect(double(4)).toBe(8);
    expect(logger).toHaveBeenCalled();
  });

  it("promisify converts callback functions to promises", async () => {
    const callbackFn = (
      value: number,
      done: (error: Error | null, result: number) => void
    ) => done(null, value * 2);

    await expect(promisify(callbackFn)(5)).resolves.toBe(10);
  });

  it("addTiming returns the original result", () => {
    const logger = jest.fn();
    const sum = addTiming((a: number, b: number) => a + b, undefined, logger);

    expect(sum(2, 3)).toBe(5);
    expect(logger).toHaveBeenCalled();
  });
});
