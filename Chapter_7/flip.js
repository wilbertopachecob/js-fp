const flip2 = (fn) => (p1, p2) => fn(p2, p1);
const flip3 = (fn) => (p1, p2, p3) => fn(p3, p1, p2);

module.exports = flip2;
module.exports.flip2 = flip2;
module.exports.flip3 = flip3;
