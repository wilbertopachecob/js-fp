/**
 * @module Chapter_8/chaining
 * Wraps an object in a Proxy so method calls chain when they return `undefined`.
 * @see src/composition.ts
 *
 * @param {object} obj - Object whose methods should become chainable.
 * @returns {Proxy} Proxy that returns itself after void-returning methods.
 * @example
 * const city = chaining(new City("Havana", -20.9, -57.1));
 * city.setName("OK").setLat(50).getCoords();
 */
const getHandler = {
  get(target, property, receiver) {
    if (typeof target[property] === "function") {
      return (...args) => {
        const result = target[property](...args);
        return result === undefined ? receiver : result;
      };
    }
    return target[property];
  },
};

const chaining = (obj) => new Proxy(obj, getHandler);

if (require.main === module) {
  class City {
    constructor(name, lat, long) {
      this.name = name;
      this.lat = lat;
      this.long = long;
    }
    getName() {
      return this.name;
    }
    setName(newName) {
      this.name = newName;
    }
    setLat(newLat) {
      this.lat = newLat;
    }
    setLong(newLong) {
      this.long = newLong;
    }
    getCoords() {
      return [this.lat, this.long];
    }
  }

  let myCity = new City("Havana, Cuba", -20.9011, -57.1645);
  myCity = chaining(myCity);

  myCity.setName("Broken Arrow, OK, USA").setLat("50.698").setLong("99.368");

  console.log(myCity.getCoords());
}

module.exports = chaining;
