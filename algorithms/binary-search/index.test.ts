import { BinaryTreeNode } from '../../data-structures/binary-tree/index';
import { BinarySearch } from './index';

test('BinarySearch: populate binary tree through extend', () => {
  const BS = new BinarySearch({
    values: [1],
  });

  expect(BS.root).toEqual(new BinaryTreeNode(1));
});

test('BinarySearch: depth first search', () => {
  const BS = new BinarySearch({
    values: [1, 2, 3, 7, 8, 9, 4],
  });

  expect(BS.depthFirst(4)).toEqual({
    node: new BinaryTreeNode(4),
    depth: 4,
  });
});

test('BinarySearch: depth first search not found', () => {
  const BS = new BinarySearch({
    values: [1, 2, 3, 7, 8, 9],
  });

  expect(BS.depthFirst(4)).toEqual({
    node: null,
    depth: 3,
  });
});

test('BinarySearch: breadth first search', () => {
  const BS = new BinarySearch({
    values: [1, 2, 3, 7, 8, 9, 4],
  });

  expect(BS.breadthFirst(4)).toEqual({
    node: new BinaryTreeNode(4),
    depth: 4,
  });
});

test('BinarySearch: breadth first search not found', () => {
  const BS = new BinarySearch({
    values: [1, 2, 3, 7, 8, 9],
  });

  expect(BS.breadthFirst(4)).toEqual({
    node: null,
    depth: 6,
  });
});
