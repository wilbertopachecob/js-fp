const filterAsync = require("./filterAsync");

describe("filterAsync - ", () => {
  it("should filter an array asynchronously", async () => {
    const arr = [1, 2, 3, 4];
    const fn = async (n) => n % 2 === 0;
    await expect(filterAsync(arr, fn)).resolves.toEqual([2, 4]);
  });
});
