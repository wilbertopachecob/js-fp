const deepClone = require("./deepClone");
const deepFreeze = require("./deepFreeze");
const setByPath = require("./setByPath");

const updateObject = (arr, value, obj) => {
  let newObject = deepClone(obj);
  newObject = setByPath(arr, value, obj);
  return deepFreeze(newObject);
};

module.exports = updateObject;
