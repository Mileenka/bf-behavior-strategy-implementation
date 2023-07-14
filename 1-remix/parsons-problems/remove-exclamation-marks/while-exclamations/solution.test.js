function removeExclamationMarks(string) {
    let i = 0;

    while (i <= string.length) {
        string = string.replace('!', '');
        i++;
    }

    return string;
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
