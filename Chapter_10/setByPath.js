const getPath = require("./getPath");

const setByPath = (path, value, obj) => {
  path = getPath(path);
  if (!(path[0] in obj)) {
    obj[path[0]] =
      path.length === 1 ? null : Number.isInteger(path[1]) ? [] : {};
  }
  if (path.length > 1) {
    return setByPath(path.slice(1), value, obj[path[0]]);
  }
  obj[path[0]] = value;
  return obj;
};

module.exports = setByPath;
