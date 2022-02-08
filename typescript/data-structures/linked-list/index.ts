class Node {
  element: any;
  next: string | null;

  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    let current;

    if (this.head === null) this.head = node;
    else {
      current = this.head;

      // go to last node
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size += 1;
  }
}

export {
  Node as LinkedListNode,
  LinkedList,
};
