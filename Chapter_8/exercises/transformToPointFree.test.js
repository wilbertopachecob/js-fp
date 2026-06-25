const getSomeResults = require("./transformToPointFree");

describe("transformToPointFree - ", () => {
  it("should filter and sort values in a point-free pipeline", () => {
    expect(getSomeResults([3, -1, 2, 0, 1])).toEqual([1, 2, 3]);
  });
});
