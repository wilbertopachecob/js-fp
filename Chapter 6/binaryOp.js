const binaryOp = (op) => {
  switch (op) {
    case ">":
      return (x, y) => x > y;
    case "<":
      return (x, y) => x < y;
  }
};

module.exports = binaryOp;
