const addLogging = require("./loggingWrapper");

describe("addLogging", () => {
  it("should call the function passed as an argument", () => {
    const fn = jest.fn();
    const dummy = addLogging(fn);
    dummy();
    expect(fn).toHaveBeenCalled();
  });
});
