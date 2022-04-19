const VALUE = Symbol;
class Container {
  constructor(value) {
    this[VALUE] = value;
  }
  map(fn) {
    return fn(this[VALUE]);
  }

  of(x) {
    return new Container(x);
  }

  toString() {
    return `${this.constructor.name}(${this[VALUE]})`;
  }

  valueOf() {
    return this[VALUE];
  }
}

// of :: Functor f ⇒ a → f a
// Functor.toString :: Functor f ⇒ f a ⇝ String
// Functor.valueOf :: Functor f ⇒ f a ⇝ a
// Functor.map :: Functor f ⇒ f a ⇝ (a → b) → f a → f b
class Functor extends Container {
  static of(x) {
    return new Functor(x);
  }
  map(fn) {
    return Functor.of(fn(this[VALUE]));
  }
}

module.exports = { Functor, VALUE, Container };
