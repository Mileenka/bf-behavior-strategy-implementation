'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------

// First solution

function reverseAndCasify(text = '', lowerCase = true) {
  if (typeof text !== 'string') {
    throw new TypeError('text is not a string');
  }

  if (typeof lowerCase !== 'boolean') {
    throw new TypeError('lowerCase is not a boolean');
  }

  let reversedText = '';

  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }

  return lowerCase ? reversedText.toLowerCase() : reversedText.toUpperCase();
}

// Second solution

function reverseAndCasify2(text = '', lowerCase = true) {
  if (typeof text !== 'string') {
    throw new TypeError('text is not a string');
  }

  if (typeof lowerCase !== 'boolean') {
    throw new TypeError('lowerCase is not a boolean');
  }

  const reversedText = [...text].reverse().join('');

  return lowerCase ? reversedText.toLowerCase() : reversedText.toUpperCase();
}

for (const solution of [secretSolution, reverseAndCasify, reverseAndCasify2]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('when the text is an empty string', () => {
          expect(solution('')).toEqual('');
        });
        // when the text is all upper case
        it('when the text is all upper case', () => {
          expect(solution('HYF', true)).toEqual('fyh');
        });
        // when the text is all lower case
        it('when the text is all lower case', () => {
          expect(solution('programming', true)).toEqual('gnimmargorp');
        });
        // when the text is mixed upper and lower case
        it('when the text is mixed upper and lower case', () => {
          expect(solution('CoMpUtEr', true)).toEqual('retupmoc');
        });
        // when the text contains punctuation
        it('when the text contains punctuation', () => {
          expect(solution('object.is', true)).toEqual('si.tcejbo');
        });
        // when the text contains numbers
        it('when the text contains numbers', () => {
          expect(solution('2win', true)).toEqual('niw2');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('when the text is an empty string', () => {
          expect(solution('')).toEqual('');
        });
        // when the text is all upper case
        it('when the text is all upper case', () => {
          expect(solution('MAP', false)).toEqual('PAM');
        });
        // when the text is all lower case
        it('when the text is all lower case', () => {
          expect(solution('cat', false)).toEqual('TAC');
        });
        // when the text is mixed upper and lower case
        it('when the text is mixed upper and lower case', () => {
          expect(solution('DoG', false)).toEqual('GOD');
        });
        // when the text contains punctuation
        it('when the text contains punctuation', () => {
          expect(solution('THIS.', false)).toEqual('.SIHT');
        });
        // when the text contains numbers
        it('when the text contains numbers', () => {
          expect(solution('3BIT', false)).toEqual('TIB3');
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
