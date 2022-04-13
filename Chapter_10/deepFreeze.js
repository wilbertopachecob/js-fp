const deepFreeze = (obj) => {
  if (obj && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(
      (prop) => typeof obj[prop] === "object" && deepFreeze(obj[prop])
    );
  }
  return obj;
};
