function getRandomNumbers(min = 0, max = 10) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueArray(min, max, count) {
	const uniqueNumbers = new Set();

	// Ensure count is not greater than the range of possible unique numbers
	count = Math.min(count, max - min + 1);

	while (uniqueNumbers.size < count) {
		uniqueNumbers.add(getRandomNumbers(min, max));
	}

	return Array.from(uniqueNumbers);
}

export const exampleIndexes = getUniqueArray(0, 99, 3);
console.log(exampleIndexes);
