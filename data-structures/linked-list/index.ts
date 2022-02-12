class Node {
  element: any;
  next: Node | null;

  constructor(element = null) {
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

    if (this.head === null) this.head = node;
    else {
      let current = this.head;

      // go to last node
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size += 1;
  }

  insertAt(element: any, index: number) {
    if (index < 0 || index > this.size) return console.warn('Index out of bounds');
    else {
      const node = new Node(element);
      
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let current = this.head;
        let previous = null;
        let iteration = 0;

        // Stop at the index
        while (iteration < index) {
          previous = current;
          current = current.next;
          iteration += 1;
        }

        // Add what's left to the new node and
        // then replace it with the new node
        node.next = current;
        previous.next = node;
      }

      this.size += 1;
    }
  }

  removeFrom(index: number) {
    if (index < 0 || index > this.size) return console.warn('Index out of bounds');
    else {
      if (index === 0) this.head = this.head.next;
      else {
        let current = this.head;
        let previous = null;
        let iteration = 0;

        while (iteration < index) {
          previous = current;
          current = current.next;
          iteration += 1;
        }

        previous.next = current.next;
      }

      this.size -= 1;
    }
  }

  removeElement(element: any): Node {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.element === element) {
        if (previous === null) this.head = current.next;
        else previous.next = current.next;

        this.size -= 1;
        return current;
      }

      previous = current;
      current = current.next;
    }

    return new Node();
  }

  indexOf(element: any): number {
    let current = this.head;
    let iteration = 0;

    while (current !== null) {
      if (current.element === element) return iteration;

      current = current.next;
      iteration += 1;
    }

    return -1;
  }
}

export {
  Node as LinkedListNode,
  LinkedList,
};
