const fakeAPI = require("./fakeApi");

describe("fakeAPI - ", () => {
  it("should resolve with the given value after a delay", async () => {
    jest.useFakeTimers();
    const promise = fakeAPI(1000, 42);
    jest.advanceTimersByTime(1000);
    await expect(promise).resolves.toBe(42);
    jest.useRealTimers();
  });
});
