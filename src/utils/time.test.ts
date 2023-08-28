import { compareDates, getTime } from './time';

describe('Time helpers', () => {
	describe('Function: getTime', () => {
		it.each([
			{ date: 'Thu, 01 Jan 1970 00:00:00 GMT', expected: 0 },
			{ date: 'Thu, 01 Jan 1970 00:00:01 GMT', expected: 1_000},
			{ date: 'Thu, 01 Jan 1970 00:01:00 GMT', expected: 60_000 },
			{ date: 'Thu, 01 Jan 1970 01:00:00 GMT', expected: 3_600_000 },
		])('getTime($date) -> $expected', ({ date, expected }) => {
			expect(getTime(date)).toBe(expected);
		});
	});

	describe('Function: compareDates', () => {
		it('should return 0 if dates are equal', () => {
			expect(compareDates({ date: 'Thu, 01 Jan 1970 00:00:00 GMT' }, { date: 'Thu, 01 Jan 1970 00:00:00 GMT' })).toBe(0);
		});

		it('should return negative number if first date is greater than second', () => {
			expect(compareDates({ date: 'Thu, 01 Jan 1970 00:00:01 GMT' }, { date: 'Thu, 01 Jan 1970 00:00:00 GMT' })).toBeLessThan(0);
		});

		it('should return positive number if first date is less than second', () => {
			expect(compareDates({ date: 'Thu, 01 Jan 1970 00:00:00 GMT' }, { date: 'Thu, 01 Jan 1970 00:00:01 GMT' })).toBeGreaterThan(0);
		});
	});
});
