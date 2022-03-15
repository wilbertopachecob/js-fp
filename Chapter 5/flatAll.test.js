const flatAll = require("./flatAll");

describe("flatAll - ", () => {
  it("should flat every array in array", () => {
    const arr = [1, [2, 3], [4, [5, 6]]];
    expect(flatAll(arr).join(",")).toBe(arr.flat(Infinity).join(","));
  });
});
