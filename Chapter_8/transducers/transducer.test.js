const { doubleEvens, arrayConcat } = require("./transducer");

describe("transducer - ", () => {
  it("should double only even numbers while reducing", () => {
    expect([1, 2, 3, 4, 5, 6].reduce(doubleEvens(arrayConcat), [])).toEqual([
      4, 8, 12,
    ]);
  });
});
