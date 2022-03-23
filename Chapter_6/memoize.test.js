const memoize = require("./memoize");

describe("memoize", () => {
  it("should call fn the first time its called", () => {
    const dummy = {
      double: (x) => x * 2,
    };
    jest.spyOn(dummy, "double");
    const fn = memoize(dummy.double);

    fn(2);

    expect(dummy.double).toHaveBeenCalledTimes(1);

    fn(2);

    expect(dummy.double).toHaveBeenCalledTimes(1);
  });
});
