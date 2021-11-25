class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null; 
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
    this._inOrder = [];
    this._preOrder = [];
    this._postOrder = [];
  }

  insert (value) {
    // Create a new node to add
    const newNode = new Node(value);
  
    // Check if should initialize tree,
    // or add to existing
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }  

  _insertNode (node, newNode) {
    // If insert is less than existing data, look left
    if (newNode.data <= node.data) {
      if (node.left === null) {
        node.left = newNode; // When you find an empty branch, add it
      } else {
        this._insertNode(node.left, newNode); // Look again one level down tree
      }
    // If insert is greated than existing data, look right
    } else {
      if (node.right === null) {
        node.right = newNode; // When you find an empty branch, add it
      } else {
        this._insertNode(node.right, newNode); // Look again one level down tree
      }
    }
  }

  getInOrder(node = this.root) {
    // This is the most useful, it goes all the way left before going all
    // the way right. Getting nodes in order.
    if (node.left !== null) {
      this.getInOrder(node.left);
    }

    this._inOrder.push(node.data);

    if (node.right !== null) {
      this.getInOrder(node.right);
    }

    return this._inOrder;
  }

  getPreOrder(node = this.root) {
    this._preOrder.push(node.data);

    if (node.left !== null) {
      this.getPreOrder(node.left);
    }

    if (node.right !== null) {
      this.getPreOrder(node.right);
    }


    return this._preOrder;
  }

  getPostOrder(node = this.root) {
    if (node.left !== null) {
      this.getPostOrder(node.left);
    }
    
    if (node.right !== null) {
      this.getPostOrder(node.right);
    }
    
    this._postOrder.push(node.data);

    return this._postOrder;
  }
}

module.exports = {
  Node,
  BinaryTree,
};
