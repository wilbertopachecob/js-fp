const traverseDom3C = (node, depth = 0, cont = () => {}) => {
  console.log(`${`| `.repeat(depth)}<${node.nodeName.toLowerCase()}>`);
  const traverseChildren = (children, i = 0) => {
    if (i < children.length) {
      return traverseDom3C(children[i], depth + 1, () =>
        traverseChildren(children, i + 1)
      ); //loop
    }
    return cont();
  };
  return traverseChildren(Array.from(node.children));
};
