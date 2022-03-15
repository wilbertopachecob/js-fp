const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const {
  window: { document },
} = new JSDOM(`<body></body>`);

const characters = [
  { name: "Fred", plays: "bowling" },
  { name: "Barney", plays: "chess" },
  { name: "Wilma", plays: "bridge" },
  { name: "Betty", plays: "checkers" },
  { name: "Pebbles", plays: "chess" },
];

const checkPlayer = (elem) => ["chess", "checkers"].includes(elem.plays);
const generateList = (arr) =>
  arr
    .filter(checkPlayer)
    .map((elem) =>
      document
        .createElement("li")
        .appendChild(document.createTextNode(elem.name))
    )
    .reduce((acc, next) => {
      acc.appendChild(next);
      return acc;
    }, document.createElement("ul"));

// console.log(generateList(characters).childNodes);
