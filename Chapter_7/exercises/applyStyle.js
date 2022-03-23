const curryBind = require("../curryBind");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const {
  window: { document },
} = new JSDOM(`<body>
<div id="myCity"></div>
<div id="myCountry"></div>
</body>`);

let applyStyle = (tagName, text) => {
  const elem = document.createElement(tagName);
  elem.appendChild(document.createTextNode(text));
  return elem.outerHTML;
};

applyStyle = curryBind(applyStyle);

const makeBold = applyStyle("b");
document.getElementById("myCity").innerHTML = makeBold("Montevideo");
// <b>Montevideo</b>, to produce Montevideo
const makeUnderline = applyStyle("u");
document.getElementById("myCountry").innerHTML = makeUnderline("Uruguay");
// <u>Uruguay</u>, to produce Uruguay

console.log(
  document.getElementById("myCountry").innerHTML,
  document.getElementById("myCity").innerHTML
);
