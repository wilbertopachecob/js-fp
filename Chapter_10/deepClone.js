const deepClone = (obj) => {
  let aux = obj;
  if (obj && typeof obj === "object") {
    aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(
      (prop) => (aux[prop] = deepClone(obj[prop]))
    );
  }
  return aux;
};

module.exports = deepClone;
