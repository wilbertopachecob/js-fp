import {
  mapAsync,
  filterAsync,
  reduceAsync,
  findAsync,
} from "@/async";

describe("async utilities", () => {
  it("mapAsync waits for every mapped value", async () => {
    const result = await mapAsync([1, 2, 3], async (n) => n * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  it("filterAsync keeps values that pass an async test", async () => {
    const result = await filterAsync([1, 2, 3, 4], async (n) => n % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  it("reduceAsync builds a total asynchronously", async () => {
    const result = await reduceAsync(
      [1, 2, 3],
      async (total, n) => total + n,
      0
    );
    expect(result).toBe(6);
  });

  it("findAsync returns the first matching item", async () => {
    const result = await findAsync(
      [1, 2, 3],
      async (n) => n * 10,
      (mapped) => mapped > 15
    );
    expect(result).toBe(2);
  });
});
