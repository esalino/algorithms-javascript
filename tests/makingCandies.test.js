const minimumPasses = require('../src/greedy/makingCandies.js')

describe('productionLineMinTime()', () => {
    test('Find minimum time to produce target goal A', () => {
        const m = 3;
        const w = 1;
        const p = 2;
        const n = 12;
        const result = minimumPasses(m, w, p, n);
        expect(result).toBe(3);
    });

    test('Find minimum time to produce target goal B', () => {
        const m = 1;
        const w = 1;
        const p = 6;
        const n = 45;
        const result = minimumPasses(m, w, p, n);
        expect(result).toBe(16);
    });

    test('Find minimum time to produce target goal C', () => {
        const m = 5184889632;
        const w = 5184889632;
        const p = 20;
        const n = 10000;
        const result = minimumPasses(m, w, p, n);
        expect(result).toBe(1);
    });

    test('Find minimum time to produce target goal D', () => {
        const m = 1;
        const w = 100;
        const p = 10000000000;
        const n = 1000000000000;
        const result = minimumPasses(m, w, p, n);
        expect(result).toBe(617737754);
    });

    test('Find minimum time to produce target goal E', () => {
        const m = 499999;
        const w = 1000000;
        const p = 999996;
        const n = 1000000000000 ;
        const result = minimumPasses(m, w, p, n);
        expect(result).toBe(2);
    });

    test('Find minimum time to produce target goal F', () => {
        const m = 7;
        const w = 1;
        const p = 456;
        const n = 398;
        const result = minimumPasses(m, w, p, n);
        expect(result).toBe(57);
    });
});
