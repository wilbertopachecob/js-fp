const myFindIndex = require("./myFindIndex");

describe("myFindIndex - ", () => {
  it("should return -1 when no element matches", () => {
    expect(myFindIndex([1, 2, 3], (n) => n > 5)).toBe(-1);
  });
  it("should return the index of the first matching element", () => {
    expect(myFindIndex([1, 2, 3, 4], (n) => n > 2)).toBe(2);
  });
});
