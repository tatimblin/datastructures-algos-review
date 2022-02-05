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

  contains(value: string | number, node: Node = this.root): boolean {
    if (node === null) return false;

    if (node.data > value) {
      return this.contains(value, node.left);
    } else if (node.data < value) {
      return this.contains(value, node.right);
    } else {
      return true;
    }
  }

  remove (value: string | number, node: Node = this.root): boolean {
    if (node === null) return false;

    if (node.left && node.left.data === value) {
      node.left = null;
      return true;
    }

    if (node.right && node.right.data === value) {
      node.right = null;
      return true;
    }

    return this.remove(value, node.data > value ? node.left : node.right);
  }

  reset() {
    this.root = null;
  }
}

export {
  Node as BinaryTreeNode,
  BinaryTree,
};
