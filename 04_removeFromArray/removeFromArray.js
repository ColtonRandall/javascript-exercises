const removeFromArray = function (array, ...args) {
	/**
	 * TODO
	 * this is a fair simpler option:
	 * return array.filter((index) => !args.includes(index));
	 */

	// create new array
	const newArray = [];

	// loop through each item and add to new array
	array.forEach((item) => {
		// chuck each item into the new array unless it's the item
		if (!args.includes(item)) {
			newArray.push(item);
		}
	});
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
