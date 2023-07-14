// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param { * } numbers
 * @returns
 */

export const sumNumbers = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('input should be a number');
    }
    return numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );
};
