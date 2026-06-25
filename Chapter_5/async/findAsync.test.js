const findAsync = require("./findAsync");

describe("findAsync - ", () => {
  it("should find the first matching element asynchronously", async () => {
    const arr = [1, 2, 3, 4];
    const mapFn = async (n) => n * 2;
    const isMatch = (mapped) => mapped > 4;
    await expect(findAsync(arr, mapFn, isMatch)).resolves.toBe(3);
  });

  it("should return undefined when no element matches", async () => {
    const arr = [1, 2, 3];
    const mapFn = async (n) => n;
    const isMatch = () => false;
    await expect(findAsync(arr, mapFn, isMatch)).resolves.toBeUndefined();
  });
});
