const lineByLine = require('n-readlines');
const poisonousPlants = require('../src/stacks/poisonousPlants.js');

describe('poisonousPlants()', () => {

    test('Find A', async () => {
        data = [6, 5, 8, 4, 7, 10, 9];
        const results = poisonousPlants(data);
        expect(results).toEqual(2);
    });

    test('Find B', async () => {
        data = [3, 1, 10, 7, 3, 5, 6, 6];
        const results = poisonousPlants(data);
        expect(results).toEqual(3);
    });

    test('Find C', async () => {
        data = [20, 5, 6, 15, 2, 2, 17, 2, 11, 5, 14, 5, 10, 9, 19, 12, 5];
        const results = poisonousPlants(data);
        expect(results).toEqual(4);
    });

    test('Find D', async () => {
        data = [4, 3, 7, 5, 6, 4, 2];
        const results = poisonousPlants(data);
        expect(results).toEqual(3);
    });

    test('Find E', async () => {
        const liner = new lineByLine('tests/poisonousPlants.txt');
        liner.next();
        let data = liner.next().toString('ascii');
        data = data.split(' ').map(x => parseInt(x, 10));
        const results = poisonousPlants(data);
        expect(results).toEqual(32399);
    });
});
