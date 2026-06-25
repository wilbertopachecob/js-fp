import { myMap, flatAll, range, shuffle } from "../src/arrays";

describe("array utilities", () => {
  it("myMap transforms every item", () => {
    expect(myMap([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);
  });

  it("myMap returns an empty array for empty input", () => {
    expect(myMap([], (n) => n)).toEqual([]);
  });

  it("flatAll flattens nested arrays", () => {
    expect(flatAll([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
  });

  it("range builds a stepped list", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  it("shuffle keeps the same number of items", () => {
    expect(shuffle([1, 2, 3, 4])).toHaveLength(4);
  });
});
