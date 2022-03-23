const memoize = (fn) => {
  let cache = {};
  const PRIMITIVES = ["number", "string", "boolean"];
  return (...args) => {
    const key =
      args.length === 1 && PRIMITIVES.includes(typeof args[0])
        ? args[0]
        : JSON.stringify(args);
    return key in cache ? cache[key] : (cache[key] = fn(...args));
  };
};

module.exports = memoize;
