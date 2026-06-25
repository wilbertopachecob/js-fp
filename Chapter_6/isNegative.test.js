const isNegative = require("./isNegative");

describe("isNegative - ", () => {
  it("should return true for negative numbers", () => {
    expect(isNegative(-3)).toBe(true);
  });

  it("should return false for zero or positive numbers", () => {
    expect(isNegative(0)).toBe(false);
    expect(isNegative(3)).toBe(false);
  });
});
