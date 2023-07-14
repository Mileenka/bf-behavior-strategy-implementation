'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// Solution function
function filterNumberStrings(arrayOfStrings) {
    if (!Array.isArray(arrayOfStrings)) {
        throw new TypeError('arrayOfStrings is not an array');
    }

    const hasNonStrings = arrayOfStrings.some((str) => typeof str !== 'string');
    if (hasNonStrings) {
        throw new TypeError('arrayOfStrings contains non-strings');
    }

    const numbers = arrayOfStrings.map(Number);
    const filteredNumbers = numbers.filter((num) => !Number.isNaN(num));

    return filteredNumbers;
}

// Testing
for (const solution of [secretSolution, filterNumberStrings]) {
    describe(solution.name + ': _', () => {
        describe('filterNumberStrings: ', () => {
            it('should return an array containing only numbers from the input array', () => {
                const arrayOfStrings = ['1', '2', 'e', '.'];
                const expectedResult = [1, 2];

                const result = filterNumberStrings(arrayOfStrings);

                expect(result).toEqual(expectedResult);
            });

            it('should return an empty array if the input array is empty', () => {
                const arrayOfStrings = [];
                const expectedResult = [];

                const result = filterNumberStrings(arrayOfStrings);

                expect(result).toEqual(expectedResult);
            });

            it("should return an empty array if the input array doesn't contain any numbery strings", () => {
                const arrayOfStrings = ['abc', 'def', 'xyz'];
                const expectedResult = [];

                const result = filterNumberStrings(arrayOfStrings);

                expect(result).toEqual(expectedResult);
            });

            it('should handle negative numbers correctly', () => {
                const arrayOfStrings = ['1', '-2', '3', '-4'];
                const expectedResult = [1, -2, 3, -4];

                const result = filterNumberStrings(arrayOfStrings);

                expect(result).toEqual(expectedResult);
            });

            it('should handle decimal numbers correctly', () => {
                const arrayOfStrings = ['1.5', '2.7', '3.14'];
                const expectedResult = [1.5, 2.7, 3.14];

                const result = filterNumberStrings(arrayOfStrings);

                expect(result).toEqual(expectedResult);
            });

            it('should handle scientific notation numbers correctly', () => {
                const arrayOfStrings = ['1e2', '3.5e-1', '2E3'];
                const expectedResult = [100, 0.35, 2000];

                const result = filterNumberStrings(arrayOfStrings);

                expect(result).toEqual(expectedResult);
            });

            it('should not modify the input array', () => {
                const arrayOfStrings = ['1', '2', '3'];
                const originalArray = arrayOfStrings.slice();

                filterNumberStrings(arrayOfStrings);

                expect(arrayOfStrings).toEqual(originalArray);
            });

            it('should throw TypeError if the input is not an array', () => {
                const invalidInput = 'not an array';

                expect(() => {
                    filterNumberStrings(invalidInput);
                }).toThrow(TypeError);
            });

            it('should throw TypeError if the input array contains non-strings', () => {
                const arrayOfStrings = ['1', '2', 3];

                expect(() => {
                    filterNumberStrings(arrayOfStrings);
                }).toThrow(TypeError);
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
