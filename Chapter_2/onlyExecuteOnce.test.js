const once = require("./onlyExecuteOnce");

describe("once - ", () => {
  it("with 'once', a function runs one time", () => {
    const myFn = jest.fn();
    const myCall = once(myFn);

    myCall();
    myCall();
    myCall();

    expect(myFn).toHaveBeenCalledTimes(1);
  });
});
