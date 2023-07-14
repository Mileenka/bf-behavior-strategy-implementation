const repeatString = (text = '', repetitions = 1) => {
    let repeatedText = '';
    let count = 0;

    do {
        repeatedText += text;
        count++;
    } while (count < repetitions);

    return repeatedText;
};

describe('repeatString', () => {
    it('repeats the text "hello" 3 times', () => {
        expect(repeatString('hello', 3)).toEqual('hellohellohello');
    });

    it('repeats an empty string 5 times', () => {
        expect(repeatString('', 5)).toEqual('');
    });

    it('repeats the text "123" 1 time', () => {
        expect(repeatString('123', 1)).toEqual('123');
    });
});
