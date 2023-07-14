/*

 1. Create an array with a length equal to the specified repetitions
 2. Fill each element of the array with the given text string
 3. Concatenate all elements of the array into a single string
 4. Return the repeated text
 
*/

const repeatString = (text = '', repetitions = 1) => {
    return Array(repetitions).fill(text).join('');
};

describe('repeatString', () => {
    it('repeats the text "hello" 3 times', () => {
        expect(repeatString('hello', 3)).toEqual('hellohellohello');
    });

    it('repeats an empty string 5 times', () => {
        expect(repeatString('', 5)).toEqual('');
    });

    it('repeats the text "abc" 0 times', () => {
        expect(repeatString('abc', 0)).toEqual('');
    });

    it('repeats the text "123" 1 time', () => {
        expect(repeatString('123', 1)).toEqual('123');
    });
});
