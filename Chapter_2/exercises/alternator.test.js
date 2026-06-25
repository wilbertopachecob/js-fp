const alternator = require("./alternator");

it("should alternate between functions after ech call", () => {
  const f1 = jest.fn();
  const f2 = jest.fn();

  const alternate = alternator(f1, f2);

  alternate();

  expect(f1).toHaveBeenCalledTimes(1);
  expect(f2).toHaveBeenCalledTimes(0);

  alternate();

  expect(f1).toHaveBeenCalledTimes(1);
  expect(f2).toHaveBeenCalledTimes(1);
});
