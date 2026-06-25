const { JSDOM } = require("jsdom");
const traverseDom3C = require("./traverseDom3C");

describe("traverseDom3C", () => {
  test("logs DOM using CPS", () => {
    const dom = new JSDOM("<html><body><div><span></span></div></body></html>");
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    traverseDom3C(dom.window.document.body);
    const output = logSpy.mock.calls.map(([line]) => line).join("\n");
    logSpy.mockRestore();
    expect(output).toContain("<body>");
    expect(output).toContain("<div>");
    expect(output).toContain("<span>");
  });
});
