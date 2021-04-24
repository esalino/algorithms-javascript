const maxSubsetSum = require('../src/dynamic/maxSubsetSum.js')
const lineByLine = require('n-readlines');

describe('maxSubsetSum()', () => {
    test('maxSubsetSum A', () => {
        const arr = [-2, 1, 3, -4, 5];
        const result = maxSubsetSum(arr);
        expect(result).toEqual(8);
    });

    test('maxSubsetSum B', () => {
        const liner = new lineByLine('tests/maxSubsetSum.txt');
        let arr = liner.next().toString('ascii');
        arr = arr.split(' ').map(x => parseInt(x, 10));
        const result = maxSubsetSum(arr);
        expect(result).toEqual(107352889);
    });
})