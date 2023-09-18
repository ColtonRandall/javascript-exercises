const convertToCelsius = function (numberInFahrenheit) {
	/* 
    formula: F -> C 
    xC = (xF - 32) x 5/9
  */

	let result = (numberInFahrenheit - 32) * (5 / 9);

	return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (numberInCelsius) {
	/* 
    formula: C -> F 
    xF = (xC x 9/5 32) + 32
  */

	let result = numberInCelsius * (9 / 5) + 32;

	return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
