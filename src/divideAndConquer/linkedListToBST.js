

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {

    let length = 0;
    let node = head;
    while (node) {
        length++;
        node = node.next;
    }

    return buildBST(head, 0, Math.floor(length / 2), length - 1);

};

var buildBST = function (head, startIndex, midIndex, endIndex) {
    console.log(head);
    console.log(startIndex + "," + midIndex + "," + endIndex);
    if (endIndex < startIndex) {
        return null;
    }
    if (startIndex === endIndex) {
        return new TreeNode(head.val, null, null);
    }
    const midListNode = getListNodeAtIndex(head, midIndex - startIndex);
    const leftMidIndex = startIndex + Math.floor(((midIndex - 1) - startIndex) / 2);
    const leftChildBST = buildBST(head, startIndex, leftMidIndex, midIndex - 1);
    const rightMidIndex = midIndex + 1 + Math.floor((endIndex - (midIndex + 1)) / 2);
    const rightChildBST = buildBST(midListNode.next, midIndex + 1, rightMidIndex, endIndex);
    const node = new TreeNode(midListNode.val, leftChildBST, rightChildBST);
    return node;
}

var getListNodeAtIndex = function (head, index) {
    console.log("headGet:" + head.val);
    console.log("indexGet:" + index);
    let node = head;
    for (let i = 1; i <= index; i++) {
        node = node.next;
    }
    return node;
}

module.exports = sortedListToBST;
