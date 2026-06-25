const myEvery = require("./myEvery");

describe("myEvery - ", () => {
  it("should return true for an empty array", () => {
    expect(myEvery([], () => false)).toBe(true);
  });
  it("should return true when every element passes", () => {
    expect(myEvery([2, 4, 6], (n) => n % 2 === 0)).toBe(true);
  });
  it("should return false when one element fails", () => {
    expect(myEvery([2, 3, 4], (n) => n % 2 === 0)).toBe(false);
  });
});
