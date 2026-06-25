const reduceAsync = require("./reduceAsync");

describe("reduceAsync - ", () => {
  it("should reduce an array asynchronously", async () => {
    const arr = [1, 2, 3];
    const fn = async (acc, n) => acc + n;
    await expect(reduceAsync(arr, fn, 0)).resolves.toBe(6);
  });
});
