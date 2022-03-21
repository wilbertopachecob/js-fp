const getField = (attr) => (obj) =>
  obj === null || obj === undefined ? obj : obj[attr];

module.exports = getField;
