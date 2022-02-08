import { BinaryTree, BinaryTreeNode } from '../../data-structures/binary-tree/index';

export class BinarySearch extends BinaryTree {
  root: BinaryTreeNode | null;

  constructor(params = {}) {
    super(params);
  }

  depthFirst(key: string | number, node: BinaryTreeNode = this.root, depth: number = 0): { node: BinaryTreeNode, depth: number } {
    if (node === null) return { node: null, depth };
    if (key === node.data) return { node, depth };

    if (key < node.data && node.left !== null) {
      return this.depthFirst(key, node.left, depth += 1);
    } else if (key > node.data && node.right !== null) {
      return this.depthFirst(key, node.right, depth += 1);
    }

    return {
      node: null,
      depth
    };
  }

  breadthFirst(key: string | number, node: BinaryTreeNode = this.root, depth: number = 0) {
    if (node === null) return { node: null, depth };

    return { node: null, depth }
  }
}
