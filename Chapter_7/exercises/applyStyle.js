/**
 * @module Chapter_7/exercises/applyStyle
 * Curried helper that wraps text in an HTML tag.
 * @see src/currying.ts
 *
 * @param {string} tagName - HTML tag name.
 * @param {string} text - Text content for the element.
 * @returns {string} HTML string for the styled element.
 * @example
 * const applyStyle = createApplyStyle(document);
 * const makeBold = applyStyle("b");
 * makeBold("Montevideo"); // "<b>Montevideo</b>"
 */
const curryBind = require("../curryBind");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const createApplyStyle = (document) => {
  let applyStyle = (tagName, text) => {
    const elem = document.createElement(tagName);
    elem.appendChild(document.createTextNode(text));
    return elem.outerHTML;
  };

  return curryBind(applyStyle);
};

if (require.main === module) {
  const {
    window: { document },
  } = new JSDOM(`<body>
<div id="myCity"></div>
<div id="myCountry"></div>
</body>`);

  const applyStyle = createApplyStyle(document);

  const makeBold = applyStyle("b");
  document.getElementById("myCity").innerHTML = makeBold("Montevideo");

  const makeUnderline = applyStyle("u");
  document.getElementById("myCountry").innerHTML = makeUnderline("Uruguay");

  console.log(
    document.getElementById("myCountry").innerHTML,
    document.getElementById("myCity").innerHTML
  );
}

module.exports = createApplyStyle;
