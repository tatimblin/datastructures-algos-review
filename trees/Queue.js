// TODO (ttimblin): rename LinkedList, when needed for other applications

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue (value) {
    const newNode = new QueueNode(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // set next for soon to be second to last
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return this;
  }

  dequeue () {
    if (this.size === 0) return false;

    const dequeueNode = this.first;
    const newFirstNode = this.first.next;

    if (!newFirstNode) this.last = newFirstNode;
    this.first = newFirstNode;
    dequeueNode.next = null;

    this.size -= 1;

    return dequeueNode;
  }
}

module.exports = {
  Queue,
};
