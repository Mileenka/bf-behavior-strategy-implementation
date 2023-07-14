// #todo

"use strict";

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------

const forEachLoop = (arrayOfNumbers) => {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new TypeError("arrayOfNumbers is not an array");
  }

  const filteredArray = [];
  arrayOfNumbers.forEach((number) => {
    if (typeof number !== "number") {
      throw new TypeError("arrayOfNumbers does not contain only numbers");
    }
    if (number % 2 === 0) {
      filteredArray.push(number);
    }
  });

  return filteredArray;
};


for (const solution of [secretSolution, forEachLoop]) {
  describe(solution.name + ": Removing Odd Numbers", () => {
    describe("when removing odd numbers from the array", () => {
      it("should return an array with only even numbers", () => {
        // Test cases for secretSolution

        const input1 = [1, 2, 3, 4, 5];
        const expected1 = [2, 4];
        const result1 = solution(input1);
        expect(result1).toEqual(expected1);

        const input2 = [10, 15, 20, 25, 30];
        const expected2 = [10, 20, 30];
        const result2 = solution(input2);
        expect(result2).toEqual(expected2);

        // Test cases for forEachLoop

        const input3 = [1, 2, 3, 4, 5];
        const expected3 = [2, 4];
        const result3 = solution(input3);
        expect(result3).toEqual(expected3);

        const input4 = [10, 15, 20, 25, 30];
        const expected4 = [10, 20, 30];
        const result4 = solution(input4);
        expect(result4).toEqual(expected4);
      });
    });
  });
}


// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
