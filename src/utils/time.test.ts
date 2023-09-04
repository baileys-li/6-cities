import { compareDates, getTime } from './time';

describe('Time helpers', () => {
	const CASES = [
		{ date: 'Thu, 01 Jan 1970 00:00:00 GMT', expected: 0 },
		{ date: 'Thu, 01 Jan 1970 00:00:01 GMT', expected: 1_000 },
		{ date: 'Thu, 01 Jan 1970 00:01:00 GMT', expected: 60_000 },
		{ date: 'Thu, 01 Jan 1970 01:00:00 GMT', expected: 3_600_000 },
	];

	describe('Function: getTime', () => {
		it.each(CASES)('getTime($date) -> $expected', ({ date, expected }) => {
			expect(getTime(date)).toBe(expected);
		});
	});

	describe('Function: compareDates', () => {
		it('should return 0 if dates are equal', () => {
			expect(compareDates(CASES[0], CASES[0])).toBe(0);
		});

		it('should return negative number if first date is greater than second', () => {
			expect(compareDates(CASES[1], CASES[0])).toBeLessThan(0);
		});

		it('should return positive number if first date is less than second', () => {
			expect(compareDates(CASES[0], CASES[1])).toBeGreaterThan(0);
		});
	});
});
