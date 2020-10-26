const insert = require('../src/trees/avlTreeInsert.js')

describe('avlTreeInsert()', () => {
  test('Insert into AVL tree keeping balance', () => {
	let root = null;
	const arr = [14, 25, 21, 10, 23, 7, 26, 12, 30, 16, 19]
	for (let i in arr) {
		root = insert(root, arr[i]);
	}
	const testString = createTestString(root);
    expect(testString).toEqual('21:3,14:2,10:1,7:0,12:0,16:1,19:0,25:2,23:0,26:1,30:0');
  })
})

function  createTestString(node){
	if (node === null){
		return null;
	}
	const left = createTestString(node.left)
	const right = createTestString(node.right)
	let testString = node.val + ':' + node.ht;
	if (left){
		testString = testString + ',' + left;
	}
	if (right) {
		testString = testString + ',' + right;
	}
	return testString
}