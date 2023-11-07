const convertToCelsius = function(tempFar) {
  let tempCel = (tempFar - 32) * 5/9;
  return +tempCel.toFixed(1);
};

const convertToFahrenheit = function(tempCel) {
  let tempFar = (tempCel * 9/5) + 32;
  return +tempFar.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
