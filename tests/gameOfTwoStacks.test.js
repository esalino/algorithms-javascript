const lineByLine = require('n-readlines');
const twoStacks = require('../src/stacks/gameOfTwoStacks.js');

describe('gameOfTwoStacks()', () => {
    test('Find', async () => {
        const expected = [64853,16946,54290,43735,64370,55153,31015,85857,44221,18962,65694,74639,86599,40286,95519];
        const liner = new lineByLine('tests/gameOfTwoStacks.txt');
        let line = liner.next();
        const testCount = parseInt(line.toString('ascii'));
        const results = [];
        for(let i = 0; i < testCount; i++) {
            line = liner.next();
            const split = line.toString('ascii').split(' ');
            let n = parseInt(split[0], 10);
            let m = parseInt(split[1], 10);
            let x = parseInt(split[2], 10);
            let a = liner.next().toString('ascii');
            a = a.split(' ').map(x => parseInt(x, 10));
            let b = liner.next().toString('ascii');
            b = b.split(' ').map(x => parseInt(x, 10));
            results.push(twoStacks(x, a, b));
        }
        expect(results).toEqual(expected);
    });
});
