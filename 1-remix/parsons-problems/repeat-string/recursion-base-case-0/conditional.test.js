/* 2 extra lines */

/* parsons-collapse: recursion with base-case 0

  i'm using 0 as the base-case because that is the fewest possible repetitions
  zero repetitions is an empty string, so if repetitions is 0 it will return ''

  otherwise i'll need to combine the text with a string that has one fewer repetitions

  repeatString(text, repetitions) =>
    base-case: repetitions is 0
      return: an empty string
    recursive case: repetitions is greater than 0
      nextRepetitions = subtract one from repetitions
      recursedValue = recursively call repeatString with text and nextRepetitions
      return: text + recursedValue

*/

const repeatString = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return '';
  } else {
    const nextRepetitions = repetitions - 1;
    const oneRepetitionShort = repeatString(text, nextRepetitions);
    return text + oneRepetitionShort;
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