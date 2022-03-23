const addLogging = require("./loggingWrapper");

describe("addLogging", () => {
  let dummy;
  beforeEach(() => {
    dummy = {
      logger: jest.fn(),
    };
  });
  it("should call the function passed as an argument", () => {
    const fn = jest.fn();
    const fnToLog = addLogging(fn, dummy.logger);

    fnToLog();

    expect(fn).toHaveBeenCalled();
  });

  it("should call our logger twice", () => {
    const fn = jest.fn();
    const fnToLog = addLogging(fn, dummy.logger);

    fnToLog();

    expect(dummy.logger).toHaveBeenCalledTimes(2);
  });

  test(`should throw an error`, () => {
    const broken = () => {
      throw new Error("this was a mistake");
    };
    const fnToLog = addLogging(broken, dummy.logger);
    expect(() => {
      fnToLog();
    }).toThrow();
  });
});
