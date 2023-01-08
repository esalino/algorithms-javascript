const sortedListToBST = require('../src/divideAndConquer/linkedListToBST.js')

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

describe('solveSudoku()', () => {
    test('Find path exists', () => {
        const list = [-10, -3, 0, 5, 9]
        const head = new ListNode(list[0], null);
        let node = head;
        for (let index = 1; index < list.length; index++) {
            const next = new ListNode(list[index], null);
            node.next = next;
            node = next;
        }
        sortedListToBST(head);
    });
})
