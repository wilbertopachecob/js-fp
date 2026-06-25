const demethodize = require("./demethodize");

describe("demethodize - ", () => {
  it("should turn a method into a standalone function", () => {
    const map = demethodize(Array.prototype.map);
    expect(map([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);
  });
});
