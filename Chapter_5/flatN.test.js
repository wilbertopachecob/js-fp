const flatN = require("./flatN");

describe("flatN - ", () => {
  it("should flatten nested arrays by n levels", () => {
    const arr = [1, 2, [3, 4, [5, 6, [7, 8]]], 9];
    expect(flatN(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, [7, 8], 9]);
  });
});
