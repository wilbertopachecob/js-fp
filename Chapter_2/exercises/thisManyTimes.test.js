const thisManyTimes = require("./thisManyTimes");

it("should call function only n times", () => {
  const fn = jest.fn();

  const tManyTimes = thisManyTimes(fn, 2);

  tManyTimes();

  expect(fn).toHaveBeenCalledTimes(1);

  tManyTimes();

  expect(fn).toHaveBeenCalledTimes(2);

  tManyTimes();

  expect(fn).toHaveBeenCalledTimes(2);
});
