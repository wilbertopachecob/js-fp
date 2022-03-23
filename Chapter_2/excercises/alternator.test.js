const alternator = require("./alternator");

it("should alternate between functions after ech call", () => {
  f1 = () => {};
  f2 = () => {};
  jest.spyOn(global, "f1");
  jest.spyOn(global, "f2");

  const alternate = alternator(f1, f2);

  alternate();

  expect(global.f1).toBeCalledTimes(1);
  expect(global.f2).toBeCalledTimes(0);

  alternate();

  expect(global.f1).toBeCalledTimes(1);
  expect(global.f2).toBeCalledTimes(1);
});
