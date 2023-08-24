const enum Default {
	Compensation = 1,
	MaxNumber = 100,
	// eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
	MinNumber = 1,
	Slice = 10
}

const enum RandomResult {
	EQUAL = 0,
	LESS = -1,
	MORE = 1,
}

const enum RandomBoolean {
	FALSE,
	TRUE,
}

/**
 *
 * @param min min < max
 * @param max
 */
const getRandomInteger = (min: number = Default.MinNumber, max: number = Default.MaxNumber) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + Default.Compensation)) + min;
};

/**
 * Use for random sorting
 */
const randomSort = () => getRandomInteger(RandomResult.LESS, RandomResult.MORE) as RandomResult;

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const getRandomElement = <Element>(array: Element[] | readonly Element[]) => array[getRandomInteger(0, array.length - 1)];

const getRandomBoolean = () => Boolean(getRandomInteger(RandomBoolean.FALSE, RandomBoolean.TRUE));

function getRandomSlice<Element>(array: Element[] | readonly Element[], size: number = Default.Slice) {
	if (size >= array.length) {
		return [...array].sort(randomSort);
	}

	const sortedElements: Element[] = [];

	while (sortedElements.length < size) {
		let element = getRandomElement(array);
		while (sortedElements.includes(element)) {
			element = getRandomElement(array);
		}
		sortedElements.push(element);
	}

	return sortedElements;
}

export { getRandomBoolean, getRandomElement, getRandomInteger, getRandomSlice, randomSort };
