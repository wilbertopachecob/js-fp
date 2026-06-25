/**
 * @module Chapter_9/continuation_passing_style/traverseDom3C
 */

/**
 * Logs a DOM tree using continuation-passing style (no explicit child loop).
 *
 * @param {Node} node - Root DOM node.
 * @param {number} [depth=0] - Current depth for indentation.
 * @param {Function} [cont=() => {}] - Continuation after finishing this subtree.
 * @returns {*} Result of the final continuation.
 * @example
 * traverseDom3C(document.body);
 */
const traverseDom3C = (node, depth = 0, cont = () => {}) => {
  console.log(`${`| `.repeat(depth)}<${node.nodeName.toLowerCase()}>`);
  const traverseChildren = (children, i = 0) => {
    if (i < children.length) {
      return traverseDom3C(children[i], depth + 1, () =>
        traverseChildren(children, i + 1)
      );
    }
    return cont();
  };
  return traverseChildren(Array.from(node.children));
};

module.exports = traverseDom3C;

if (require.main === module) {
  const { JSDOM } = require("jsdom");
  const dom = new JSDOM("<html><body><div><span></span></div></body></html>");
  traverseDom3C(dom.window.document.body);
}
