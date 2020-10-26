const makeAnagram = require('../src/maps/makeAnagram.js')

describe('makeAnagram()', () => {
    test('Given "cde", "abc" should required 4 deletions', () => {
        const result = makeAnagram('cde', 'abc');
        expect(result).toEqual(4)
    })
})