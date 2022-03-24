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

module.exports = chaining;

// ex
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
