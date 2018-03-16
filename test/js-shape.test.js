let Parser = require('../src/js-shape');

test('initialize parser', () => {
    expect(new Parser(1)).toBe(new Object());
});
