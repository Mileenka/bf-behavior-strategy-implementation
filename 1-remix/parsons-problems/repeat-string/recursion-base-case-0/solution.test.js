/** Recursive implementation of repeatString 

 1. repeatString function takes two parameters: text (string) and repetitions (number)
 2. Base case: If repetitions is 0, return an empty string
 3. Recursive case: If repetitions is greater than 0
 4. Define nextRepetitions as repetitions minus one
 5. Recursively call repeatString with text and nextRepetitions
 6. Return the concatenation of text and recursedValue 
 
 */

const repeatString = (text = '', repetitions = 1) => {
    if (repetitions === 0) {
        return '';
    } else {
        const nextRepetitions = repetitions - 1;

        const recursedValue = repeatString(text, nextRepetitions);

        return text + recursedValue;
    }
};

describe('repeatString', () => {
    it('should repeat the text the specified number of times', () => {
        const result1 = repeatString('abc', 3);
        expect(result1).toEqual('abcabcabc');

        const result2 = repeatString('123', 5);
        expect(result2).toEqual('123123123123123');

        const result3 = repeatString('xyz', 0);
        expect(result3).toEqual('');
    });
});
