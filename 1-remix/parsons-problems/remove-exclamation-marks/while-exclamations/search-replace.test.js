/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5e5ed30f4013f00001a33813 */

/* this exercise has 2 distractions */

function removeExclamationMarks(s) {
  while (s.search('!') >= 0) {
    s = s.replace('!', '');
  }
  return s;
}

describe('addArrays', () => {
  it('"hi!" -> "hi"', () => {
    expect(removeExclamationMarks('hi!')).toEqual('hi');
  });

  it('"Hello there!" -> "Hello there"', () => {
    expect(removeExclamationMarks('Hello there!')).toEqual('Hello there');
  });

  it('"HYF!" -> "HYF"', () => {
    expect(removeExclamationMarks('HYF!')).toEqual('HYF');
  });

  it('"Welcome to JS!" -> "Welcome to JS"', () => {
    expect(removeExclamationMarks('Welcome to JS!')).toEqual('Welcome to JS');
  });
});

