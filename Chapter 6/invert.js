const spanishComparison = (a, b) => a.localeCompare(b, "es");

var palabras = ["ñandú", "oasis", "mano", "natural", "mítico", "musical"];

console.log(palabras.sort(spanishComparison));

const invert =
  (fn) =>
  (...args) =>
    -fn(...args);

console.log(palabras.sort(invert(spanishComparison)));
