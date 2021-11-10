const { BinaryTree } = require('./binaryTree');
const { Queue } = require('./Queue');

class BinarySearch extends BinaryTree {
  depthFirstSearch(key, node = this.root, depth = 0) {
    if (node.data === null) return null;
    if (key === node.data) return { node, depth };

    if (key < node.data && node.left !== null) {
      return this.depthFirstSearch(key, node.left, depth += 1);
    } else if (key > node.data && node.right !== null) {
      return this.depthFirstSearch(key, node.right, depth += 1);
    }

    return null;
  }

  breadthFirstSearch(key, node = this.root) {
    if (node.data === null) return null;
    const queue = new Queue();
    let depth = 0;
    let depthSize = 1; // only 1 root node
    let nextDepthSize = 0;

    queue.enqueue(node);

    while (queue.size !== 0) {
      const node = queue.first.value;

      if (key === node.data) return { node, depth };

      if (node.left !== null) {
        nextDepthSize += 1;
        queue.enqueue(node.left);
      }
      if (node.right !== null) {
        nextDepthSize += 1;
        queue.enqueue(node.right);
      }

      depthSize -= 1;
      // when childCount === 0, must be at end of depth
      if (depthSize === 0) {
        depth += 1;
        // reset depth tracker
        depthSize = nextDepthSize;
        nextDepthSize = 0;
      }

      queue.dequeue();
    }

    return null;
  }
}

const funcs = {
  populate: () => {
    const BST = new BinarySearch();
    const arr = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27];

    for (let i = 0; i < arr.length - 1; i++) {
      BST.insert(arr[i]);
    }

    return BST;
  },
};

const test = funcs.populate().depthFirstSearch(9);

console.log(test);

module.exports = funcs;
