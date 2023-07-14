'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// First solution
const concatStrings = (arrayOfStrings) => {
    const arrCopy = [...arrayOfStrings];
    return arrCopy.reverse().join('');
};

// Second solution
const concatStrings2 = (arrayOfStrings2) => {
    return arrayOfStrings2.reduce((result, str) => str + result, '');
};
const mySolutions = [concatStrings, concatStrings2];
// -------- your solutions --------

for (const solution of mySolutions) {
    describe(solution.name + ': concatStrings', () => {
        describe('concatenate strings and reverse order', () => {
            it("['hello', 'there'] --> 'therehello'", () => {
                expect(solution(['hello', 'there'])).toEqual('therehello');
            });
            it("['Hack', 'your', 'future'] --> 'futureyourHack'", () => {
                expect(solution(['Hack', 'your', 'future'])).toEqual(
                    'futureyourHack',
                );
            });
            it("['Life', 'is', 'beautiful'] --> 'beautifulisLife'", () => {
                expect(solution(['Life', 'is', 'beautiful'])).toEqual(
                    'beautifulisLife',
                );
            });
            it("['4', '83', '12'] --> '12834'", () => {
                expect(solution(['4', '83', '12'])).toEqual('12834');
            });
            it("['H', 'Y', 'F'] --> 'FYH'", () => {
                expect(solution(['H', 'Y', 'F'])).toEqual('FYH');
            });
            it("['Dont', 'worry'] --> 'worryDont'", () => {
                expect(solution(['Dont', 'worry'])).toEqual('worryDont');
            });
            it("['Be', 'happy'] --> 'happyBe'", () => {
                expect(solution(['Be', 'happy'])).toEqual('happyBe');
            });
            it("['apple', 'banana', 'peach'] --> 'peachbananaapple'", () => {
                expect(solution(['apple', 'banana', 'peach'])).toEqual(
                    'peachbananaapple',
                );
            });
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
