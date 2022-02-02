class Node {
  data: string | number;
  left: Node | null;
  right: Node | null;

  constructor(data: string | number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  insert(value: string | number): Node {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return newNode;
    } else {
      return this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: Node, newNode: Node): Node {
    // look left
    if (newNode.data <= node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    // look right
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }

    return newNode;
  }
}

export {
  Node as BinaryTreeNode,
  BinaryTree,
};
