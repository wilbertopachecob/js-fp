const Try = require("./try");

describe("Try", () => {
  test("returns Right for successful functions", () => {
    expect(Try.of(() => 42).isLeft()).toBe(false);
    expect(Try.of(() => 42).valueOf()).toBe(42);
  });

  test("returns Left for throwing functions", () => {
    const result = Try.of(() => {
      throw new Error("fail");
    });
    expect(result.isLeft()).toBe(true);
  });

  test("uses custom error message when provided", () => {
    const result = Try.of(
      () => {
        throw new Error("fail");
      },
      "custom"
    );
    expect(result.valueOf()).toBe("custom");
  });
});
