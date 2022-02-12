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

test('BinaryTree: remove node', () => {
  const BT = new BinaryTree();
  BT.insert(6);
  BT.insert(12);
  BT.remove(12);

  expect(BT.contains(12)).toEqual(false);
});

test('BinaryTree: remove child node', () => {
  const BT = new BinaryTree();
  BT.insert(6);
  BT.insert(12);
  BT.insert(24);
  BT.remove(12);

  expect(BT.contains(24)).toEqual(false);
});

test('BinaryTree: reset tree', () => {
  const BT = new BinaryTree();
  BT.insert(6);
  BT.reset();

  expect(BT.root).toEqual(null);
});

test('BinaryTree: populate tree', () => {
  const BT = new BinaryTree({
    values: [1, 2, 3, 6, 7, 8],
  });

  expect(BT.contains(8)).toEqual(true);
});
