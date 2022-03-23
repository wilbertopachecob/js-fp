const once = require("./onlyExecuteOnce");

describe("once - ", () => {
  beforeEach(() => {
    global.myFn = () => {};
    jest.spyOn(global, "myFn");
  });

  it("with 'once', a function runs one time", () => {
    global.myCall = once(myFn);
    jest.spyOn(global, "myCall");
    myCall();
    myCall();
    myCall();
    expect(myCall).toHaveBeenCalledTimes(3);

    expect(myFn).toHaveBeenCalledTimes(1);
  });
});
