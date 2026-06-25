const myFind = require("./myFind");

describe("myFind - ", () => {
  it("should return undefined when no element matches", () => {
    expect(myFind([1, 2, 3], (n) => n > 5)).toBeUndefined();
  });
  it("should return the first matching element", () => {
    expect(myFind([1, 2, 3, 4], (n) => n > 2)).toBe(3);
  });
});
