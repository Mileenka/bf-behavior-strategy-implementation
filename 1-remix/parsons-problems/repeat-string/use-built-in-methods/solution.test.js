/* 
1. Create an array with a length equal to the specified repetitions
2. Concatenate all elements of the array into a single string
3. Return the repeated string 
*/

const repeatString = (text = '', repetitions = 1) => {
    const oneEntryPerRepetition = Array(repetitions).fill(text);

    const repeatedString = oneEntryPerRepetition.join('');

    return repeatedString;
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
