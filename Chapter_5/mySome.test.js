const mySome = require("./mySome");

describe("mySome - ", () => {
  it("should return false for an empty array", () => {
    expect(mySome([], () => true)).toBe(false);
  });
  it("should return true when at least one element passes", () => {
    expect(mySome([1, 2, 3], (n) => n > 2)).toBe(true);
  });
  it("should return false when no element passes", () => {
    expect(mySome([1, 2, 3], (n) => n > 5)).toBe(false);
  });
});
