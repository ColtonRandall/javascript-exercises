const sumAll = function (int1, int2) {
	let finalSum = 0;

	// to get the range and start with the smaller number
	smallerNum = Math.min(int1, int2);
	largerNum = Math.max(int1, int2);

	if (int1 < 0 || int2 < 0) {
		return "ERROR";
	} else if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
		return "ERROR";
	} else {
		for (let i = smallerNum; i <= largerNum; i++) {
			// for each number, add the number to finalSum
			finalSum += i;
		}
	}
	return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
