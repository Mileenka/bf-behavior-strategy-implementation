/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5adb82cd43f6f7525400142f */

/* this exercise has 1 distractions */

const updateLight = (current) =>
    ({
        green: 'yellow',
        yellow: 'red',
        red: 'green',
    }[current]);

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
