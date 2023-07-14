// you can use this to check the argument

import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */

export const findGreatestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('does not accept arrays containing not-numbers');
    }

    if (numbers.length === 0) {
        return;
    }

    return Math.max(...numbers);
};
