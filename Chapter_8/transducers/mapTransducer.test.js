const concat = require("./concat");
const mapTransducer = require("./mapTransducer");

describe("mapTransducer - ", () => {
  it("should map values before reducing", () => {
    const double = mapTransducer((x) => x * 2);
    expect([1, 2, 3].reduce(double(concat), [])).toEqual([2, 4, 6]);
  });
});
