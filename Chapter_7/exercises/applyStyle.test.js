const createApplyStyle = require("./applyStyle");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("applyStyle - ", () => {
  it("should wrap text in the requested tag", () => {
    const {
      window: { document },
    } = new JSDOM("<body></body>");

    const applyStyle = createApplyStyle(document);
    const makeBold = applyStyle("b");

    expect(makeBold("Montevideo")).toBe("<b>Montevideo</b>");
  });
});
