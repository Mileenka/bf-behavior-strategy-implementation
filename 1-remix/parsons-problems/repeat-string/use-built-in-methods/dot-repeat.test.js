/* 4 extra lines */

/* parsons-collapse: use built-in .js methods

  repeatString(text, repetitions) =>
    1. make sure the data is the correct type and format for the method you're using
    2. use the method
    return: the result

*/

const repeatString = (text = '', repetitions = 1) => {
    return text.repeat(repetitions);
};

describe('repeatString', () => {
    it('should repeat the text the specified number of times', () => {
        const result1 = repeatString('abc', 3);
        expect(result1).toEqual('abcabcabc');

        const result2 = repeatString('123', 5);
        expect(result2).toEqual('123123123123123');

        const result3 = repeatString('yes', 0);
        expect(result3).toEqual('');

        const result4 = repeatString('hello', 1);
        expect(result4).toEqual('hello');

        const result5 = repeatString('', 10);
        expect(result5).toEqual('');

        const result6 = repeatString('123', 0);
        expect(result6).toEqual('');
    });
});
