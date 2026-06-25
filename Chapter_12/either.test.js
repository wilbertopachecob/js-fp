const Either = require("./either");

describe("Either", () => {
  test("Right stores success", () => {
    const right = Either.of(null, 42);
    expect(right.isLeft()).toBe(false);
    expect(right.valueOf()).toBe(42);
  });

  test("Left stores failure", () => {
    const left = Either.of("error", null);
    expect(left.isLeft()).toBe(true);
  });

  test("Right maps over value", () => {
    expect(Either.of(null, 2).map((n) => n * 10).valueOf()).toBe(20);
  });

  test("Left ignores map", () => {
    expect(Either.of("err", null).map((n) => n * 10).isLeft()).toBe(true);
  });
});
