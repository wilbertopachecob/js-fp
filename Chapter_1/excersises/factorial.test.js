const factorial = require("./factorial");

describe("factorial", () => {
  it("should return 1 for 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should compute factorial for positive integers", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return -1 for negative inputs", () => {
    expect(factorial(-1)).toBe(-1);
  });
});
