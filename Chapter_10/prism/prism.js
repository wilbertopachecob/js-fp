const getFieldP = (attr, obj) => (obj && attr in obj ? obj[attr] : undefined);

const setFieldP = (attr, newValue, obj) =>
  obj && attr in obj ? { ...obj, [attr]: newValue } : { ...obj };

//instead of generating a new copy of an object with deepClone we generate a new obj with the changed value
//the rest of the attrs are pointers to the original obj data. This way of persisten data
//saves computation time. See https://facebook.github.io/immutable- js/ for more info
const setIn = (path, newValue, obj) => {
  const newObj = Number.isInteger(path[0]) ? [] : {};

  Object.keys(obj).forEach(
    (key) => (newObj[key] = key !== path[0] ? obj[key] : null)
  );

  newObj[path[0]] =
    path.length > 1 ? setIn(path.slice(1), newValue, obj[path[0]]) : newValue;
  return newObj;
};

let myObj1 = {
  a: 111,
  b: 222,
  c: 333,
  d: {
    e: 444,
    f: 555,
    g: {
      h: 666,
      i: 777,
    },
    j: [{ k: 100 }, { k: 200 }, { k: 300 }],
  },
};

// console.log(setIn(["d", "f"], "Frijoles", myObj1));
// console.log(myObj.d === myObj2.d); // false
// console.log(myObj.d.f === myObj2.d.f); // false
// console.log(myObj.d.g === myObj2.d.g); // true

const deleteIn = (path, obj) => {
  const newObj = Number.isInteger(path[0]) ? [] : {};
  Object.keys(obj).forEach((key) => {
    if (key !== path[0]) {
      newObj[key] = obj[key];
    }
  });
  if (path.length > 1) {
    newObj[path[0]] = deleteIn(path.slice(1), obj[path[0]]);
  }
  return newObj;
};

// console.log(deleteIn(["d", "f"], myObj1));
