/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/60743965cb7e980001c7bc44 */

/* this exercise has 2 distractions */

function updateLight(current) {
    const lights = ['green', 'yellow', 'red'];

    return current === 'red' ? 'green' : lights[lights.indexOf(current) + 1];
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
