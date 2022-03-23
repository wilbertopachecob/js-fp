const shuffle = require("./shuffle");

describe("shuffle - ", () => {
  it("shouldn't change the array length", () => {
    const arr = [1, 2, 6, 9, 8, 7, 4];
    expect(shuffle(arr).length).toBe(arr.length);
  });

  it("should return proper array with repeated values", () => {
    const arr = [0, 0, 1, 3, 6, 9];
    const shuffleArr = shuffle(arr);
    expect(shuffleArr.filter((num) => num === 0).length).toBe(2);
  });

  it("shouldn't change the values", () => {
    const arr = [1, 2, 6, 9, 8, 7, 4];
    expect(shuffle(arr).sort().join(",")).toBe(arr.sort().join(","));
  });
});
