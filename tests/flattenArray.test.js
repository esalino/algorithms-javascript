const flattenArray = require('../src/recursion/flattenArray.js')

describe('flattenArray()', () => {
    test('Find path exists', () => {
        const array = [5, [4, 2], [[7, 1], [3], 9]];
        const expected = [5, 4, 2, 7, 1, 3, 9];
        let results = flattenArray(array);
        expect(results).toEqual(expected);
    });
})
