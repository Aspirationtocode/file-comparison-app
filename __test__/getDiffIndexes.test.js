import { getDiffIndexes } from '../client/src/components/Result/helpers';

test('test getDiffIndexes func', () => {
	expect(getDiffIndexes(['1', '2'], ['1', '3'])).toEqual([1]);
	expect(
		getDiffIndexes(['1', '2', '3', '4', '5'], ['1', '2', '4', '5', '3']),
	).toEqual([2, 3, 4]);
	expect(
		getDiffIndexes(['honey', 'help', 'bear'], ['honey', 'help', 'me']),
	).toEqual([2]);
});
