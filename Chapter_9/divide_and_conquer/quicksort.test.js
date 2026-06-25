const quicksort = require("./quicksort");

describe("quicksort", () => {
  test("sorts numbers", () => {
    expect(quicksort([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
  });

  test("returns short arrays unchanged", () => {
    expect(quicksort([])).toEqual([]);
    expect(quicksort([1])).toEqual([1]);
  });
});
