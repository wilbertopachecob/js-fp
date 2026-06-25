const mapRecursive = require("./mapRecursive");

describe("mapRecursive", () => {
  test("maps values recursively", () => {
    expect(mapRecursive([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
  });

  test("passes index and original array to callback", () => {
    const orig = [10, 20];
    const indices = [];
    mapRecursive(orig, (_x, i) => indices.push(i));
    expect(indices).toEqual([0, 1]);
  });
});
