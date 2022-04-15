const setField = (attr, value) => (obj) =>
  obj === null || obj === undefined ? obj : { ...obj, [attr]: value };

module.exports = setField;
