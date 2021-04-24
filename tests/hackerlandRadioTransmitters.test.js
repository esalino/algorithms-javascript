const hackerlandRadioTransmitters = require('../src/search/hackerlandRadioTransmitters.js')

describe('hackerlandRadioTransmitters()', () => {
    test('test A', () => {
        const arr = [1,2,3,4,5];
        const k = 1;
        const result = hackerlandRadioTransmitters(arr, k);
        expect(result).toBe(2);
    });

    test('test B', () => {
        const arr = [7, 2, 4, 6, 5, 9, 12, 11];
        const k = 2;
        const result = hackerlandRadioTransmitters(arr, k);
        expect(result).toBe(3);
    });

    test('test C', () => {
        const arr = [9, 5, 4, 2, 6, 15, 12];
        const k = 2;
        const result = hackerlandRadioTransmitters(arr, k);
        expect(result).toBe(4);
    });

    test('test D', () => {
        const arr = [2, 2, 2, 2, 1, 1, 1, 1];
        const k = 2;
        const result = hackerlandRadioTransmitters(arr, k);
        expect(result).toBe(1);
    });

});
