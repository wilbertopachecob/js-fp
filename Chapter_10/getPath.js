const getPath = (path) => {
  if (!(Array.isArray(path) || typeof path === "string")) {
    throw new Error("invalid type for path. Accepted types: Array | String");
  }
  path = Array.isArray(path) ? path : path.split(".");
  return path;
};

module.exports = getPath;
