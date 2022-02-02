import { BinaryTree, BinaryTreeNode } from './index';

test('BinaryTree: insert root node', () => {
  const BT = new BinaryTree();
  BT.insert(6);

  expect(BT.root).toStrictEqual(new BinaryTreeNode(6));
});
