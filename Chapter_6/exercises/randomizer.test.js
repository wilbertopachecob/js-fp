const randomizer = require("./randomizer");

describe("randomizer - ", () => {
  it("should call a random function from the array", () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const pick = randomizer([fn1, fn2]);

    jest.spyOn(Math, "random").mockReturnValue(0);
    pick();
    expect(fn1).toHaveBeenCalled();

    Math.random.mockRestore();
  });
});
