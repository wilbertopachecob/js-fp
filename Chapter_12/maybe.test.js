const Maybe = require("./maybe");

describe("Maybe", () => {
  test("Just maps over present values", () => {
    expect(Maybe.of(5).map((n) => n + 1).toString()).toBe("Just(6)");
  });

  test("Nothing ignores map", () => {
    expect(Maybe.of(null).map((n) => n + 1).toString()).toBe("Nothing()");
  });

  test("orElse returns fallback for Nothing", () => {
    expect(Maybe.of(undefined).orElse(0)).toBe(0);
    expect(Maybe.of(5).orElse(0)).toBe(5);
  });
});
