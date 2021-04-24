const minimumBribes = require('../src/arrays/newYearChaos.js')

describe('minimumBribes()', () => {
    test('minimumBribes A', () => {
        const arr = [2, 1, 5, 3, 4];
        const result = minimumBribes(arr);
        expect(result).toEqual(3);
    });

    test('minimumBribes B', () => {
        const arr = [2, 5, 1, 3, 4];
        const result = minimumBribes(arr);
        expect(result).toEqual('Too chaotic');
    });
})