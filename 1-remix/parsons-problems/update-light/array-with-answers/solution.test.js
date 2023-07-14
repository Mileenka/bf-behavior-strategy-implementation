function updateLight(current) {
    if (current === 'green') {
        current = 'yellow';
    } else if (current === 'yellow') {
        current = 'red';
    } else if (current === 'red') {
        current = 'green';
    } else {
    }

    return current;
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
