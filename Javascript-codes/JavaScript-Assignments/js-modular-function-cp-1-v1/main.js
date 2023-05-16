//Code by Rachmat Ghaly
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return Number((((kelvin - 273.15) * 9) / 5 + 32).toFixed(2));
}

function celsiusToFahrenheit(celsius) {
  return Number(((celsius * 9) / 5 + 32).toFixed(2));
}

function celsiusToKelvin(celsius) {
  return Number((celsius + 273.15).toFixed(2));
}

function fahrenheitToKelvin(fahrenheit) {
  return Number((((fahrenheit - 32) * 5) / 9 + 273.15).toFixed(2));
}

function fahrenheitToCelsius(fahrenheit) {
  return Number((((fahrenheit - 32) * 5) / 9).toFixed(2));
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  if (initialUnit == "K" && finalUnit == "C") {
    let result = kelvinToCelsius(temperature);
    return result;
  } else if (initialUnit == "K" && finalUnit == "F") {
    let result = kelvinToFahrenheit(temperature);
    return result;
  } else if (initialUnit == "C" && finalUnit == "F") {
    let result = celsiusToFahrenheit(temperature);
    return result;
  } else if (initialUnit == "C" && finalUnit == "K") {
    let result = celsiusToKelvin(temperature);
    return result;
  } else if (initialUnit == "F" && finalUnit == "K") {
    let result = fahrenheitToKelvin(temperature);
    return result;
  } else if (initialUnit == "F" && finalUnit == "C") {
    let result = fahrenheitToCelsius(temperature);
    return result;
  }

  return null;
}

console.log(convertTemperature(0, "C", "K")); // 273.15
console.log(convertTemperature(0, "C", "F")); // 32

console.log(convertTemperature(0, "F", "C")); // -17.78
console.log(convertTemperature(0, "F", "K")); // 255.37

console.log(convertTemperature(0, "K", "C")); // -273.15
console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
