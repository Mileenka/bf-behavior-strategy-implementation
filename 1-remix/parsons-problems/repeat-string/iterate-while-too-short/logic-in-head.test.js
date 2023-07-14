/* 3 extra lines */

/* parsons-collapse: iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new
      c. repeat
    return: the new repeated string

*/

const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (repeatedText.length < finalLength) {
    repeatedText += text;
  }
  return repeatedText;
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
