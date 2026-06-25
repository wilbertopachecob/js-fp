const newCounter = require("./newCounter");

describe("newCounter", () => {
  it("should return incrementing values starting at 1", () => {
    const counter = newCounter();

    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
  });

  it("should keep separate state for each counter", () => {
    const first = newCounter();
    const second = newCounter();

    expect(first()).toBe(1);
    expect(second()).toBe(1);
    expect(first()).toBe(2);
  });
});
