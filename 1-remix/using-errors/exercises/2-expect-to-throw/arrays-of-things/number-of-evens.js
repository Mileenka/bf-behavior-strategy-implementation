// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param { * } numbers
 * @returns { number }
 */
export const numberOfEvens = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('does not accept arrays containing not-numbers');
    }

    let isEven = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            isEven++;
        }
    }
    return isEven;
};
