const promisify = require("./promisify");

describe("promisify - ", () => {
  it("should resolve when the callback succeeds", async () => {
    const fn = (value, cb) => cb(null, value * 2);
    const promised = promisify(fn);
    await expect(promised(5)).resolves.toBe(10);
  });

  it("should reject when the callback fails", async () => {
    const fn = (value, cb) => cb(new Error("fail"));
    const promised = promisify(fn);
    await expect(promised("x")).rejects.toThrow("fail");
  });
});
