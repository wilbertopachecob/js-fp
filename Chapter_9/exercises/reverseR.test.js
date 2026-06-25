const reverseR = require("./reverseR");

describe("reverseR", () => {
  test("reverses in place", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(reverseR(arr)).toEqual([5, 4, 3, 2, 1]);
    expect(arr).toEqual([5, 4, 3, 2, 1]);
  });
});
