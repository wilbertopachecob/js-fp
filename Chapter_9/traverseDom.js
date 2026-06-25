/**
 * @module Chapter_9/traverseDom
 */

/**
 * Recursively logs the DOM tree using a for loop.
 *
 * @param {Node} node - Root DOM node.
 * @param {number} [depth=0] - Current depth for indentation.
 * @returns {void}
 * @example
 * traverseDOM(document.body);
 */
const traverseDOM = (node, depth = 0) => {
  console.log(`${"| ".repeat(depth)}<${node.nodeName.toLowerCase()}>`);
  for (let i = 0; i < node.children.length; i++) {
    traverseDOM(node.children[i], depth + 1);
  }
};

/**
 * Recursively logs the DOM tree using `forEach`.
 *
 * @param {Node} node - Root DOM node.
 * @param {number} [depth=0] - Current depth for indentation.
 * @returns {void}
 * @example
 * traverseDom2(document.body);
 */
const traverseDom2 = (node, depth = 0) => {
  console.log(`${"| ".repeat(depth)}<${node.nodeName.toLowerCase()}>`);
  Array.from(node.children).forEach((child) => traverseDom2(child, depth + 1));
};

/**
 * Recursively logs the DOM tree without explicit loops over children.
 *
 * @param {Node} node - Root DOM node.
 * @param {number} [depth=0] - Current depth for indentation.
 * @returns {void}
 * @example
 * traverseDom3(document.body);
 */
const traverseDom3 = (node, depth = 0) => {
  console.log(`${"| ".repeat(depth)}<${node.nodeName.toLowerCase()}>`);
  const traverseChildren = (children, i = 0) => {
    if (i < children.length) {
      traverseDom3(children[i], depth + 1);
      return traverseChildren(children, i + 1);
    }
    return;
  };
  return traverseChildren(Array.from(node.children));
};

module.exports = { traverseDOM, traverseDom2, traverseDom3 };

if (require.main === module) {
  const { JSDOM } = require("jsdom");
  const dom = new JSDOM("<html><body><div><p>hi</p></div></body></html>");
  traverseDom3(dom.window.document.body);
}
