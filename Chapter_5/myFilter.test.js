const myFilter = require("./myFilter");

describe("myFilter - ", () => {
  it("should return an empty array for an empty input", () => {
    expect(myFilter([], () => true)).toEqual([]);
  });
  it("should keep elements that pass the predicate", () => {
    expect(myFilter([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4]);
  });
});
