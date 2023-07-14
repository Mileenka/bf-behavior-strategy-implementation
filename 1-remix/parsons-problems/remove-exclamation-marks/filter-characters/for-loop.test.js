/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

/* this exercise has 3 distractions */

function removeExclamationMarks(s) {
    var newString = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] != '!') {
            newString += s[i];
        }
    }
    return newString;
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
