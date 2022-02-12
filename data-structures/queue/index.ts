import {
  LinkedList,
  LinkedListNode as Node,
} from "../linked-list";

class Queue extends LinkedList
{
  last: Node;

  constructor() {
    super();

    this.last = null;
  }

  enqueue(element: any): Node {
    const node = new Node(element);

    if (this.size === 0) {
      this.head = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size += 1;
    return node;
  }

  dequeue(): Node {
    if (this.size === 0) return new Node();

    const dequeueNode = this.head;
    const newHeadNode = this.head.next;

    this.head = newHeadNode;
    if (!newHeadNode) this.last = newHeadNode;

    dequeueNode.next = null;

    this.size -= 1;

    return dequeueNode;
  }
}

export {
  Queue,
  Node as QueueNode
}