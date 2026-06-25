const mapAsync = require("./mapAsync");

describe("mapAsync - ", () => {
  it("should map an array asynchronously", async () => {
    const arr = [1, 2, 3];
    const fn = async (n) => n * 2;
    await expect(mapAsync(arr, fn)).resolves.toEqual([2, 4, 6]);
  });
});
