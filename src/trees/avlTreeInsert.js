class Node {
    constructor() {
        this.val = null;
        this.ht = null;
        this.left = null;
        this.right = null;
    }
}

function insert(root, val) {
    if (root == null) {
        const n = new Node();
        n.ht = 0;
        n.val = val;
        return n;
    }
    insertAndBalanceSubtrees(root, val);
    // Still need to balance root
    root = balanceSubtree(root);
    root.ht = getHeight(root) + 1;
    return root;
}

function insertAndBalanceSubtrees(node, val) {
    if (node == null) {
        return null;
    }

    const child = val < node.val ? node.left : node.right;
    const newChild = insertAndBalanceSubtrees(child, val);

    if (newChild == null) {
        const newNode = new Node();
        newNode.val = val;
        newNode.ht = 0;
        // If height is 0 it is now 1 otherwise same as it already was.
        if (node.ht == 0) {
            node.ht = 1;
        }
        if (val < node.val) {
            node.left = newNode;
        } else {
            node.right = newNode;
        }
        return node;
    }

    if (val < node.val) {
        node.left = balanceSubtree(node.left);
    } else {
        node.right = balanceSubtree(node.right);
    }
    node.ht = getHeight(node) + 1;
    return node;
}

function balanceSubtree(node) {
    const balance = getBalance(node);
    if (balance > -2 && balance < 2) {
        return node;
    }
    if (balance == 2) {
        if (getBalance(node.left) < 0) {
            // left-right case which if we have will always comes before left-left case
            const temp = node.left.right;
            node.left.right = node.left.right.left;
            temp.left = node.left;
            node.left = temp;

            node.left.left.ht = getHeight(node.left.left);
            node.left.ht = getHeight(node.left);
            node.ht = getHeight(node);
        }
        // left-left case
        const temp = node.left;
        node.left = node.left.right;
        temp.right = node;

        temp.left.ht = getHeight(temp.left) + 1;
        temp.right.ht = getHeight(temp.right) + 1;
        temp.ht = getHeight(temp) + 1;
        return temp;
    } else {
        if (getBalance(node.right) > 0) {
            // right-left case which if we have will always comes before right-right case
            const temp = node.right.left;
            node.right.left = node.right.left.right;
            temp.right = node.right;
            node.right = temp;

            node.right.right.ht = getHeight(node.right.right);
            node.right.ht = getHeight(node.right);
            node.ht = getHeight(node);
        }
        // right-right case
        const temp = node.right;
        node.right = node.right.left;
        temp.left = node;

        temp.right.ht = getHeight(temp.right) + 1;
        temp.left.ht = getHeight(temp.left) + 1;
        temp.ht = getHeight(temp) + 1;
        return temp;
    }
}

function getBalance(node) {
    const leftHeight = node.left == null ? -1 : node.left.ht;
    const rightHeight = node.right == null ? -1 : node.right.ht;
    return leftHeight - rightHeight;
}

function getHeight(node) {
    const leftHeight = node.left == null ? -1 : node.left.ht;
    const rightHeight = node.right == null ? -1 : node.right.ht;
    return Math.max(leftHeight, rightHeight);
}

module.exports = insert;
