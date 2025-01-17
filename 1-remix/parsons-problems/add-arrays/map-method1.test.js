/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 */

function addArrays(a1, a2) {
    if (a1.length !== a2.length)
        throw new Error('arrays have different length');
    return a1.map((v, i) => v + a2[i]);
}

describe('addArrays', () => {
    it('[1, 2], [4, 5] -> [5, 7]', () => {
        expect(addArrays([1, 2], [4, 5])).toEqual([5, 7]);
    });

    it('[-1, 3, 8], [10, 2, -5] -> [9, 5, 3]', () => {
        expect(addArrays([-1, 3, 8], [10, 2, -5])).toEqual([9, 5, 3]);
    });

    it(' [0], [0] -> [0]', () => {
        expect(addArrays([0], [0])).toEqual([0]);
    });

    it('should throw an error ', () => {
        expect(() => addArrays(['a'], ['b', 'c'])).toThrow(
            'arrays have different length',
        );
    });

    it('should throw an error', () => {
        expect(() => addArrays(['a'], ['b', 'c'])).toThrow(
            'arrays have different length',
        );
    });
});
