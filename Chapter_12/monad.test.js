const Monad = require("./monad");

describe("Monad", () => {
  test("map transforms inner value", () => {
    expect(Monad.of(2).map((n) => n + 1).valueOf()).toBe(3);
  });

  test("chain flattens nested monads", () => {
    expect(Monad.of(2).chain((n) => Monad.of(n * 10)).valueOf()).toBe(20);
  });

  test("ap applies wrapped function", () => {
    const result = Monad.of((n) => n + 1).ap(Monad.of(5));
    expect(result.valueOf()).toBe(6);
  });
});
