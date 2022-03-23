const onceAndAfter = require("./onceAndAfter");

describe("onceAndAfter", () => {
  it("should execute first function only once and second n times", () => {
    func1 = () => {};
    func2 = () => {};
    jest.spyOn(global, "func1");
    jest.spyOn(global, "func2");

    onceFn = onceAndAfter(func1, func2);
    jest.spyOn(global, "onceFn");

    onceFn();
    onceFn();

    expect(global.func1).toHaveBeenCalledTimes(1);
    expect(global.func2).toHaveBeenCalledTimes(1);

    onceFn();

    expect(global.func1).toHaveBeenCalledTimes(1);
    expect(global.func2).toHaveBeenCalledTimes(2);
  });
});
