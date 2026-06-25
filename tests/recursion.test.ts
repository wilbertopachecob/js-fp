import {
  fibonacci,
  quicksort,
  mapRecursive,
  filterRecursive,
} from "../src/recursion";

describe("recursion utilities", () => {
  it("fibonacci returns expected values", () => {
    expect(fibonacci(5)).toBe(8);
  });

  it("quicksort sorts numbers", () => {
    expect(quicksort([22, 9, 60, 12, 4, 56])).toEqual([4, 9, 12, 22, 56, 60]);
  });

  it("mapRecursive maps with recursion", () => {
    expect(mapRecursive([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);
  });

  it("filterRecursive keeps matching values", () => {
    expect(filterRecursive([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4]);
  });
});
