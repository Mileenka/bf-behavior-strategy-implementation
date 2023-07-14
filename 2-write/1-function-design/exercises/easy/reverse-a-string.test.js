'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

// First solution

function reverseString(toReverse = '') {
    if (typeof toReverse !== 'string') {
        throw new TypeError('toReverse is not a string');
    }

    let reversed = '';
    for (let i = toReverse.length - 1; i >= 0; i--) {
        reversed += toReverse[i];
    }

    return reversed;
}

// Second solution

function reverseString2(toReverse = '') {
    if (typeof toReverse !== 'string') {
        throw new TypeError('toReverse is not a string');
    }

    return [...toReverse].reverse().join('');
}

for (const solution of [secretSolution, reverseString, reverseString2]) {
    // the main test suite for the function
    describe(solution.name + ': reverses a string', () => {
        it('default parameter is an empty string -> ""', () => {
            expect(solution()).toEqual('');
        });
        it('an empty string -> ""', () => {
            expect(solution('')).toEqual('');
        });
        it('a string with all capital letters', () => {
            expect(solution('ASDF')).toEqual('FDSA');
        });
        it('reverse string', () => {
            expect(solution('asdf')).toEqual('fdsa');
        });
        it('reverse convert number to string', () => {
            expect(solution(String(32))).toEqual(String(23));
        });
        it('reverse sentence', () => {
            expect(solution('Welcome to HYF')).toEqual('FYH ot emocleW');
        });
        it('concatenation two strings and reverse', () => {
            expect(solution('1' + '2')).toBe('21');
        });
        it('reverse concatenation two strings and a number that is converted to a string', () => {
            expect(solution('1' + '2' + String(3))).toBe('321');
        });

        // write at least 5 more tests ...
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
