const concat = require("./concat");
const mapTransducer = require("./mapTransducer");
const composeTransducers = require("./composeTransducers");

describe("composeTransducers - ", () => {
  it("should compose two map transducers", () => {
    const addOneAndDouble = composeTransducers(
      mapTransducer((x) => x + 1),
      mapTransducer((x) => x * 2)
    );

    expect([1, 2, 3, 4].reduce(addOneAndDouble(concat), [])).toEqual([
      4, 6, 8, 10,
    ]);
  });
});
