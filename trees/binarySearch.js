const { BinaryTree } = require('./binaryTree');

class BinarySearch extends BinaryTree {
  depthFirstSearch(key, node = this.root) {
    if (node === null) return null;

    if (key === node.data) {
      console.log(node);
      return node; // TODO: For some reason return is not working as expected
    }

    if (key < node.data && node.left !== null) {
      this.depthFirstSearch(key, node.left);
    } else if (key > node.data && node.right !== null) {
      this.depthFirstSearch(key, node.right);
    }

    return null;
  }

  breadthFirstSearch() {
    return true;
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
