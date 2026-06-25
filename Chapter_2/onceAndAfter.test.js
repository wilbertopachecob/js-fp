const onceAndAfter = require("./onceAndAfter");

describe("onceAndAfter", () => {
  it("should execute first function only once and second n times", () => {
    const func1 = jest.fn();
    const func2 = jest.fn();

    const onceFn = onceAndAfter(func1, func2);

    onceFn();
    onceFn();

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);

    onceFn();

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(2);
  });
});
