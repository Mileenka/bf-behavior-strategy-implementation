'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------

// First solution

function countup(max = 0) {
  if (typeof max !== 'number') {
    throw new TypeError('max is not a number');
  }
  if (!Number.isInteger(max)) {
    throw new Error('max is not an integer');
  }
  if (max < 0) {
    throw new RangeError('max is less than 0');
  }

  const result = [];
  for (let i = 0; i <= max; i++) {
    result.push(i);
  }

  return result;
}

// Second solution

function countup2(max = 0) {
  if (typeof max !== 'number') {
    throw new TypeError('max is not a number');
  }
  if (!Number.isInteger(max)) {
    throw new Error('max is not an integer');
  }
  if (max < 0) {
    throw new RangeError('max is less than 0');
  }

  return Array.from({ length: max + 1 }, (_, i) => i);
}

for (const solution of [secretSolution, countup, countup2]) {
  // the main test suite for the function
  describe(solution.name + ': counts up from 0', () => {
    it('default parameter is 0 -> [0]', () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [0, 1]', () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    it('2 -> [0, 1, 2]', () => {
      expect(solution(2)).toEqual([0, 1, 2]);
    });
    it('3 -> [0, 1, 2, 3]', () => {
      expect(solution(3)).toEqual([0, 1, 2, 3]);
    });
    it('4 -> [0, 1, 2, 3, 4]', () => {
      expect(solution(4)).toEqual([0, 1, 2, 3, 4]);
    });
    it('5 -> [0, 1, 2, 3, 4, 5]', () => {
      expect(solution(5)).toEqual([0, 1, 2, 3, 4, 5]);
    });
    it('6 -> [0, 1, 2, 3, 4, 5, 6]', () => {
      expect(solution(6)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
