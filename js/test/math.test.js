const mathMini = require('../math.js');


test('Pow should return the value of the number to the power of 3', () => {
    expect(mathMini.pow(2, 3)).toBe(8);
});
