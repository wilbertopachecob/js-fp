const traverseDOM = (node, depth = 0) => {
  console.log(`${"| ".repeat(depth)}<${node.nodeName.toLowerCase()}>`);
  for (let i = 0; i < node.children.length; i++) {
    traverseDOM(node.children[i], depth + 1);
  }
};

const traverseDom2 = (node, depth = 0) => {
  console.log(`${"| ".repeat(depth)}<${node.nodeName.toLowerCase()}>`);
  Array.from(node.children).forEach((child) => traverseDom2(child, depth + 1));
};

//recursive, no loop
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
