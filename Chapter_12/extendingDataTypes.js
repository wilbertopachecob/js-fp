//Boolean.map:: Boolean ⇝ (Boolean → a) → Boolean
Boolean.prototype.map = function (fn) {
  return !!fn(this);
};
//String.map:: String ⇝ (String → a) → String
String.prototype.map = function (fn) {
  return String(fn(this));
};
//Number.map:: Number ⇝ (Number → a) → Number
Number.prototype.map = function (fn) {
  return Number(fn(this));
};

//Function.map:: (a → b) ⇝ (b → c) → (a → c)
Function.prototype.map = function (fn) {
  return (...args) => fn(this(...args));
};
