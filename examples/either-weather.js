require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const { Either } = require("../dist");

const getAlerts = (lat, long, callback) => {
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;
  const SERVER = "https://api.openweathermap.org/data/2.5/weather";
  const UNITS = "units=imperial";
  const url = `${SERVER}?lat=${lat}&lon=${long}&appid=${API_KEY}&${UNITS}`;

  fetch(url)
    .then((res) =>
      res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))
    )
    .then((data) => callback(Either.of(null, data.main)))
    .catch(() => callback(Either.of("FETCH FAILURE", null)));
};

module.exports = { getAlerts };

if (require.main === module) {
  const lat = Number(process.argv[2]) || 36.000488274342146;
  const lon = Number(process.argv[3]) || -95.97024564371841;

  if (!process.env.OPEN_WEATHER_API_KEY) {
    console.log("Set OPEN_WEATHER_API_KEY in .env to run this demo.");
    process.exit(0);
  }

  getAlerts(lat, lon, (result) => {
    console.log(result.toString());
    console.log(result.isLeft() ? "Failed" : result.valueOf());
  });
}
