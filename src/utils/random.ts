const enum Default {
	Compensation = 1,
	MaxNumber = 100,
	// eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
	MinNumber = 1,
	Slice = 10
}

/**
 *
 * @param min min < max
 * @param max
 */
const randomInteger = (min: number = Default.MinNumber, max: number = Default.MaxNumber) => {
	min = Math.ceil(min)
	max = Math.floor(max)

	return Math.floor(Math.random() * (max - min + Default.Compensation)) + min
}

const randomElement = <Element>(array: Element[] | readonly Element[]) => array[randomInteger(0, array.length - Default.Compensation)]

export { randomElement, randomInteger }
