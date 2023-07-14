/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5b16df8ca6d5f9f11e000a41 */

const updateLight = (current) =>
    current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';

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