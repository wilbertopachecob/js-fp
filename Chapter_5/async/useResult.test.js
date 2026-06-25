const useResult = require("./useResult");

describe("useResult - ", () => {
  it("should log the value with a timestamp", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    useResult(42);
    expect(spy).toHaveBeenCalledWith(expect.any(Date), 42);
    spy.mockRestore();
  });
});
