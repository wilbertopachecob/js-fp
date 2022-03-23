const partialCurryingByClosure2 = (fn, len = fn.length) => {
  const curryize =
    (...args1) =>
    (...args2) => {
      const allParams = [...args1, ...args2];
      return (allParams.length < len ? curryize : fn)(...allParams);
    };
  return curryize();
};
module.exports = partialCurryingByClosure2;
