const uncurry = require("./uncurry");
const curry = require("../curryBind");

describe("uncurry - ", () => {
  it("should convert a curried function back to normal form", () => {
    const make3 = (a, b, c) => String(100 * a + 10 * b + c);
    const make3c = curry(make3);
    const remake3 = uncurry(make3c);

    expect(remake3(1, 2, 3)).toBe("123");
    expect(make3c(1)(2)(3)).toBe("123");
  });
});
