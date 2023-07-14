const updateLight = (current) => {
    return {
        red: 'green',
        yellow: 'red',
        green: 'yellow',
    }[current];
};

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
