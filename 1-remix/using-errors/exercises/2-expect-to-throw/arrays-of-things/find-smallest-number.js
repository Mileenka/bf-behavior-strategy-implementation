import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param { * } numbers
 * @returns { number }
 */

export const findSmallestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('does not accept arrays containing not-numbers');
    }

    if (numbers.length === 0) {
        return;
    }

    return Math.min(...numbers);
};
