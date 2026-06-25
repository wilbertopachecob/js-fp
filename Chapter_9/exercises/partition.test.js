const partition = require("./partition");

describe("partition", () => {
  test("splits by predicate", () => {
    expect(partition([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([
      [2, 4],
      [1, 3],
    ]);
  });
});
