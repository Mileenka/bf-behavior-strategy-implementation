'use strict';

/**
 *  checks if a number is divisible by 5, 3 or both:
 *    numbers divisible by 3 and 5 return "fizzbuzz"
 *    numbers divisible by only 3 return "fizz"
 *    numbers divisible by only 5 return "buzz"
 *    all other numbers are returned un-changed
 *  @param {number} [num=0] - the number to convert
 *    num must be an integer greater than or equal to 0
 *  @returns {number|string} either "fizz", "buzz", "fizzbuzz" or the original number
 */

// -------- your solutions --------

function fizzBuzz(num = 0) {
  if (typeof num !== 'number') {
    throw new TypeError('num is not a number');
  }

  if (num < 0) {
    throw new RangeError('num is less than 0');
  }

  if (!Number.isInteger(num)) {
    throw new RangeError('num is not an integer');
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

for (const solution of [secretSolution, fizzBuzz]) {
  console.time(`${solution.name}`);
  describe(solution.name + ': fizbuzzish', () => {
    describe('default parameter is 0', () => {
      it('returns "fizzbuzz" when no argument is passed', () =>
        expect(solution()).toEqual('fizzbuzz'));
    });

    describe('not divisible by 3 or 5', () => {
      it('1 -> 1', () => {
        expect(solution(1)).toEqual(1);
      });
      it('2 -> 2', () => {
        expect(solution(2)).toEqual(2);
      });
      it('4 -> 4', () => {
        expect(solution(4)).toEqual(4);
      });
      it('7 -> 7', () => {
        expect(solution(7)).toEqual(7);
      });
      it('8 -> 8', () => {
        expect(solution(8)).toEqual(8);
      });
      // write more tests in this category
    });

    describe('only divisible by only 3', () => {
      const expectedValue = 'fizz';
      it('3 -> "fizz"', () => {
        expect(solution(3)).toEqual(expectedValue);
      });
      it('6 -> "fizz"', () => {
        expect(solution(6)).toEqual(expectedValue);
      });
      it('9 -> "fizz"', () => {
        expect(solution(9)).toEqual(expectedValue);
      });
      it('12 -> "fizz"', () => {
        expect(solution(12)).toEqual(expectedValue);
      });
      it('18 -> "fizz"', () => {
        expect(solution(18)).toEqual(expectedValue);
      });
      // write more tests in this category
    });

    describe('only divisible by only 5', () => {
      const expectedValue = 'buzz';
      it('5 -> "buzz"', () => {
        expect(solution(5)).toEqual(expectedValue);
      });
      it('10 -> "buzz"', () => {
        expect(solution(10)).toEqual(expectedValue);
      });
      it('20 -> "buzz"', () => {
        expect(solution(20)).toEqual(expectedValue);
      });
      it('25 -> "buzz"', () => {
        expect(solution(25)).toEqual(expectedValue);
      });
      it('35 -> "buzz"', () => {
        expect(solution(35)).toEqual(expectedValue);
      });
      // write more tests in this category
    });

    describe('divisible by 5 and 3', () => {
      const expectedValue = 'fizzbuzz';
      it('15 -> "fizzbuzz"', () => {
        expect(solution(15)).toEqual(expectedValue);
      });
      it('30 -> "fizzbuzz"', () => {
        expect(solution(30)).toEqual(expectedValue);
      });
      it('45 -> "fizzbuzz"', () => {
        expect(solution(45)).toEqual(expectedValue);
      });
      it('60 -> "fizzbuzz"', () => {
        expect(solution(60)).toEqual(expectedValue);
      });
      it('75 -> "fizzbuzz"', () => {
        expect(solution(75)).toEqual(expectedValue);
      });
      // write more tests in this category
    });
  });
  console.timeEnd(`${solution.name}`);
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) { throw new TypeError("num is not a number"); } if (0 > a) { throw new RangeError("num is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("num is not an integer"); } return 0 == a % 3 && 0 == a % 5 ? "fizzbuzz" : 0 == a % 3 ? "fizz" : 0 == a % 5 ? "buzz" : a }
