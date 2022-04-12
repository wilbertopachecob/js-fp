const thisManyTimes = require("./thisManyTimes");

it("should call function only n times", () => {
  fn = () => {};
  jest.spyOn(global, "fn");

  const tManyTimes = thisManyTimes(fn, 2);

  tManyTimes();

  expect(global.fn).toHaveBeenCalledTimes(1);

  tManyTimes();

  expect(global.fn).toHaveBeenCalledTimes(2);

  tManyTimes();

  expect(global.fn).toHaveBeenCalledTimes(2);
});
