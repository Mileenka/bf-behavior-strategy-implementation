'use strict';

/**
 * sums all numbers strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all number strings
 */

// -------- your solutions --------

const mapFilterReduce = (arr) => {
    // these work, you need to pass them to the right array methods
    const isNotNaN = (entry) => !Number.isNaN(entry);
    const sumNumbers = (acc, next) => acc + next;
    const castToNumber = (entry) => Number(entry);

    // fill in the array methods and pass in the correct logic
    const sumOfNumbers = arr
        .filter(isNotNaN)
        .map(castToNumber)
        .reduce(sumNumbers, 0);

    return sumOfNumbers;
};

// -------- your solutions --------

for (const solution of [secretSolution, mapFilterReduce]) {
    describe(solution.name + ': Adding Arrays', () => {
        describe('when adding two arrays', () => {
            it('should return the sum of elements', () => {
                const array1 = ['1', '2', '3'];
                const array2 = ['4', '5', '6'];
                const expected = 21;
                const result = solution([...array1, ...array2]);
                expect(result).toEqual(expected);
            });
            it('should return the sum of elements', () => {
                const array1 = ['0', '25', '10'];
                const array2 = ['1', '2', '3'];
                const expected = 41;
                const result = solution([...array1, ...array2]);
                expect(result).toEqual(expected);
            });
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c; }
