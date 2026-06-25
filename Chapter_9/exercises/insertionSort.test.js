const insertionSort = require("./insertionSort");

describe("insertionSort", () => {
  test("sorts ascending", () => {
    expect(insertionSort([8, 9, 5, 4, 7])).toEqual([4, 5, 7, 8, 9]);
  });
});
