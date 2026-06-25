const selectionSort = require("./selectionSort");

describe("selectionSort", () => {
  test("sorts ascending", () => {
    expect(selectionSort([8, 6, 3, 4, 7])).toEqual([3, 4, 6, 7, 8]);
  });
});
