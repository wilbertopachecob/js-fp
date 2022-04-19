const { VALUE } = require("./functor");
const Monad = require("./monad");
const axios = require("axios");

require("dotenv").config({ path: __dirname + "/../.env" });

class Left extends Monad {
  isLeft() {
    return true;
  }

  map(fn) {
    return this;
  }
}

class Right extends Monad {
  isLeft() {
    return false;
  }

  map(fn) {
    return Either.of(null, fn(this[VALUE]));
  }
}

class Either extends Monad {
  constructor(left, right) {
    return right === undefined || right === null
      ? new Left(left)
      : new Right(right);
  }
  static of(left, right) {
    return new Either(left, right);
  }
}

module.exports = Either;

const getAlerts2 = (lat, long, callback) => {
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;
  const SERVER = `https://api.openweathermap.org/data/2.5/weather`;
  const UNITS = "units=imperial";
  axios
    .get(`${SERVER}?lat=${lat}&lon=${long}&appid=${API_KEY}&${UNITS}`)
    .then(({ data }) => {
      callback(Either.of(null, data.main));
    })
    .catch((err) => callback(Either.of("AJAX FAILURE", null)));
};

const produceAlertsTable2 = (weatherObj) => {
  return weatherObj
    .chain((obj) => {
      const alerts = getField("alerts")(obj);
      return alerts ? Either.of(null, alerts) : Either.of("NO ALERTS", null);
    })
    .chain((a) =>
      a.map(
        (x) =>
          `<tr><td>${x.title}</td>` +
          `<td>${x.description.substr(0, 500)}...</td></tr>`
      )
    )
    .chain((a) => a.join(os.EOL))
    .chain((s) => `<table>${s}</table>`);
};

getAlerts2(36.000488274342146, -95.97024564371841, (x) =>
  console.log(produceAlertsTable2(x).toString())
);
