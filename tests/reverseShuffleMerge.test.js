const reverseShuffleMerge = require('../src/greedy/reverseShuffleMerge.js')

describe('reverseShuffleMerge()', () => {
    test('reverseShuffleMerge A', () => {
        const str = 'bdabaceadaedaaaeaecdeadababdbeaeeacacaba';
        const result = reverseShuffleMerge(str);
        expect(result).toEqual('aaaaaabaaceededecbdb');
    });

    test('reverseShuffleMerge B', () => {
        const str = 'djjcddjggbiigjhfghehhbgdigjicafgjcehhfgifadihiajgciagicdahcbajjbhifjiaajigdgdfhdiijjgaiejgegbbiigida';
        const result = reverseShuffleMerge(str);
        expect(result).toEqual('aaaaabccigicgjihidfiejfijgidgbhhehgfhjgiibggjddjjd');
    });
})