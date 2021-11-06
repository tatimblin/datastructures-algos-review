const { expect, test } = require('@jest/globals');
const { BinaryTree, Node } = require('./binaryTree');

test('BinaryTree: insert root node', () => {
  const BST = new BinaryTree();
  BST.insert(6);

  expect(BST.root).toStrictEqual(new Node(6));
});

test('BinaryTree: getInOrder', () => {
  const BST = new BinaryTree();
  const arr = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27];
  const sortedArr = [5,  7,  9, 10, 13, 15, 17, 22, 25];

  for (let i = 0; i < arr.length; i++) {
    BST.insert(arr[i]);
  }

  expect(BST.getInOrder()).toEqual(expect.arrayContaining(sortedArr));
});
