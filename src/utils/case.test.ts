import { capitalize } from './case';

describe('Function: capitalize', () => {
	it('should capitalize the first letter of a string', () => {
		expect(capitalize('hello')).toBe('Hello');
		expect(capitalize('hello world')).toBe('Hello world');
	});

	it('should return an empty string if the input is empty', () => {
		expect(capitalize('')).toBe('');
	});

	it('should return the same string if the first letter is already capitalized', () => {
		expect(capitalize('Hello')).toBe('Hello');
		expect(capitalize('Hello world')).toBe('Hello world');
	});

	it('should return the same string if the first character is not a letter', () => {
		expect(capitalize('1hello')).toBe('1hello');
		expect(capitalize('!hello')).toBe('!hello');
		expect(capitalize(' hello')).toBe(' hello');
	});
});
