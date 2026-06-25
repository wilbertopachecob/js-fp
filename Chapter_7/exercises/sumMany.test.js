const sumMany = require("./sumMany");

describe("sumMany - ", () => {
  it("should sum numbers passed one curried call at a time", () => {
    expect(sumMany(1)(2)(3)(4)(5)).toBe(15);
  });
});
