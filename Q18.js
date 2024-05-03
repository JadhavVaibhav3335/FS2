// Define functions in main.js
function getPower(base, exponent) {
  return Math.pow(base, exponent);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function roundToDecimalPlace(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}

// Export only capitalize and roundToDecimalPlace functions
export { capitalize, roundToDecimalPlace };