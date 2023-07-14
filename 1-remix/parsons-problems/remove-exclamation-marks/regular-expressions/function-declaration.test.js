/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f94b0a2faf02e74c000557 */

/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
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
        expect(removeExclamationMarks('Welcome to JS!')).toEqual(
            'Welcome to JS',
        );
    });
});
