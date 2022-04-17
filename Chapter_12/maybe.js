const { Functor, VALUE } = require("./functor");

class Nothing extends Functor {
  isNothing() {
    return true;
  }

  toString() {
    return "Nothing()";
  }

  map(fn) {
    return this;
  }
}

class Just extends Functor {
  isNothing() {
    return false;
  }

  map(fn) {
    return Maybe.of(fn(this[VALUE]));
  }
}

class Maybe extends Functor {
  constructor(x) {
    return x === undefined || x === null ? new Nothing() : new Just(x);
  }

  static of(x) {
    return new Maybe(x);
  }

  orElse(v) {
    return this.isNothing() ? v : this.valueOf();
  }
}

module.exports = Maybe;

const plus1 = (x) => x + 1;

console.log(Maybe.of(2112).map(plus1).map(plus1).toString());
console.log(Maybe.of(null).map(plus1).map(plus1).toString());
