/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5cd2a41a7c59b20001be8dda */

/* this exercise has 3 distractions */

let removeExclamationMarks = (s) =>
  s
    .split('')
    .filter((e) => e != '!')
    .join('');

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