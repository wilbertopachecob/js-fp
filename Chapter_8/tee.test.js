const tee = require("./tee");

describe("tee - ", () => {
  it("should log a value and return it unchanged", () => {
    const logger = jest.fn();
    const result = tee(7, logger);

    expect(logger).toHaveBeenCalledWith(7);
    expect(result).toBe(7);
  });
});
