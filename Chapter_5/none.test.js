const none = require("./none");

describe("none - ", () => {
  it("should return true when no element passes", () => {
    expect(none([2, 3, 5], (n) => n === 1)).toBe(true);
  });
  it("should return false when at least one element passes", () => {
    expect(none([2, 1, 5], (n) => n === 1)).toBe(false);
  });
});
