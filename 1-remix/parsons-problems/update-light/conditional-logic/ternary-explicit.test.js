/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad9bc6a0be029ab0800071b */

/* this exercise has 2 distractions */

function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}

describe('updateLight', () => {
  it('should return the next light color in the sequence', () => {
    expect(updateLight('green')).toEqual('yellow');
  });

  it('should return "green" when the current light color is "red"', () => {
    expect(updateLight('red')).toEqual('green');
  });

  it('should return "red" when the current light color is "yellow"', () => {
    expect(updateLight('yellow')).toEqual('red');
  });
});