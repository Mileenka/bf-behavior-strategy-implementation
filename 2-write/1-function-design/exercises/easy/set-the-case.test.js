'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------

// First solution

function casifyText(text = '', lowerCase = true) {
  if (typeof text !== 'string') {
    throw new TypeError('text is not a string');
  }

  if (typeof lowerCase !== 'boolean') {
    throw new TypeError('lowerCase is not a boolean');
  }

  return lowerCase ? text.toLowerCase() : text.toUpperCase();
}

// Second solution

function casifyText2(text = '', lowerCase = true) {
  if (typeof text !== 'string') {
    throw new TypeError('text is not a string');
  }

  if (typeof lowerCase !== 'boolean') {
    throw new TypeError('lowerCase is not a boolean');
  }

  let casifiedText = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    casifiedText += lowerCase ? char.toLowerCase() : char.toUpperCase();
  }

  return casifiedText;
}

for (const solution of [secretSolution, casifyText, casifyText2]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
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
        expect(solution('CODE', true)).toEqual('code');
      });
      // when the text is all lower case
      it('when the text is all lower case', () => {
        expect(solution('character', true)).toEqual('character');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('MaNgO', true)).toEqual('mango');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('document.', true)).toEqual('document.');
      });
      // when the text contains numbers
      it('when the text contains numbers', () => {
        expect(solution('hi5', true)).toEqual('hi5');
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('when the text is an empty string', () => {
        expect(solution('')).toEqual('');
      });
      // when the text is all upper case
      it('when the text is all upper case', () => {
        expect(solution('FALSE', false)).toEqual('FALSE');
      });
      // when the text is all lower case
      it('when the text is all lower case', () => {
        expect(solution('true', false)).toEqual('TRUE');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('RabbiT', false)).toEqual('RABBIT');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('.TOUPPERCASE', false)).toEqual('.TOUPPERCASE');
      });
      // when the text contains numbers
      it('when the text contains numbers', () => {
        expect(solution('1IT1', false)).toEqual('1IT1');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
