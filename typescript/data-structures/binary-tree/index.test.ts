import { BinaryTree, BinaryTreeNode } from './index';

test('BinaryTree: insert root node', () => {
  const BT = new BinaryTree();
  BT.insert(6);

  expect(BT.root).toEqual(new BinaryTreeNode(6));
});

test('BinaryTree: contains node', () => {
  const BT = new BinaryTree();
  BT.insert(6);
  BT.insert(12);

  expect(BT.contains(12)).toEqual(true);
});
