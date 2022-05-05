import { BinaryTree, BinaryTreeNode } from '../binary-tree/index';
import { Queue } from '../queue/index';

interface BinarySearchResponse {
  node: BinaryTreeNode,
  depth: number,
}

export class BinarySearch extends BinaryTree {
  root: BinaryTreeNode | null;

  constructor(params = {}) {
    super(params);
  }

  depthFirst(key: string | number, node: BinaryTreeNode = this.root, depth: number = 0): BinarySearchResponse {
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

  breadthFirst(key: string | number, node: BinaryTreeNode = this.root): BinarySearchResponse {
    if (node === null) return { node: null, depth: 0 };

    const queue = new Queue();
    let depth = 0;
    let depthSize = 1;
    let nextDepthSize = 0;

    queue.enqueue(node);

    while (queue.size !== 0) {
      node = queue.head.element;

      // Check for match
      if (key === node.data) return { node, depth };

      // Queue nodes at the next depth,
      // in case no match found
      if (node.left !== null) {
        nextDepthSize += 1;
        queue.enqueue(node.left);
      }
      if (node.right !== null) {
        nextDepthSize += 1;
        queue.enqueue(node.right);
      }

      depthSize -= 1;

      // When finished processing nodes at depth,
      // move on to the next one and reset tracker
      if (depthSize === 0) {
        depth += 1;
        depthSize = nextDepthSize;
        nextDepthSize = 0;
      }

      queue.dequeue();
    }

    return {
      node: null,
      depth
    };
  }
}
