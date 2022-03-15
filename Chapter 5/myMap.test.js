const myMap = require("./myMap");

describe("myMap - ", () => {
  it("should return an empty array if an empty array is supplied as a parameter", () => {
    const fn = () => {};
    const arr = [];
    expect(myMap(arr, fn)).toEqual([]);
  });
  it("should apply fn to every element in array", () => {
    const fn = (elem) => elem * 2;
    const arr = [1, 2, 3];
    expect(myMap(arr, fn).join(",")).toBe([2, 4, 6].join(","));
  });
});
