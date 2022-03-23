const binaryOp = require("./binaryOp");
const binaryRigthOp = (op, x) => (y) => binaryOp(op)(x, y);
const isNegative = binaryRigthOp(">", 0);

module.exports = isNegative;

console.log(isNegative(-3));
