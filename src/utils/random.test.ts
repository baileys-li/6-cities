import { randomElement } from './random';

describe('Function: randomElement', () => {
	it('should return a random element from an array', () => {
		const array = [1, 2, 3, 4, 5];
		const element = randomElement(array);
		expect(array).toContain(element);
	});
});
