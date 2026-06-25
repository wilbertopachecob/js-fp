const forEachAsync = require("./forEachAsync");

describe("forEachAsync - ", () => {
  it("should call the async function for each element in order", async () => {
    const arr = [1, 2, 3];
    const order = [];
    const fn = async (n) => {
      order.push(n);
    };
    await forEachAsync(arr, fn);
    expect(order).toEqual([1, 2, 3]);
  });
});
