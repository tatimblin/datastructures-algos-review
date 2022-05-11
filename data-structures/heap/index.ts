class MinHeap {
  size: number;
  items: number[];

  constructor() {
    this.size = 0;
    this.items = [];
  }

  #getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  #getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  #getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  #hasLeftChild(index: number): boolean {
    return this.#getLeftChildIndex(index) < this.size;
  }

  #hasRightChild(index: number): boolean {
    return this.#getRightChildIndex(index) < this.size;
  }

  #hasParent(index: number): boolean {
    return this.#getParentIndex(index) >= 0;
  }

  #leftChild(index: number): number {
    return this.items[this.#getLeftChildIndex(index)];
  }

  #rightChild(index: number): number {
    return this.items[this.#getRightChildIndex(index)];
  }

  #parent(index: number): number {
    return this.items[this.#getParentIndex(index)];
  }

  #swap(indexOne: number, indexTwo: number): void {
    const temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  /**
   * Get the minimum value from the Heap
   * 
   * @returns {number} - the min number in the Heap
   */
  peek(): number {
    if (this.size === 0) return;
    return this.items[0];
  }

  /**
   * Get and remove the minimum value from the Heap
   *
   * @returns {number} - the min number in the Heap
   */
  poll(): number {
    if (this.size === 0) return;
    const item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size -= 1;
    this.#heapifyDown();
    return item;
  }

  /**
   * Add an element to the Heap
   * 
   * @param {number} item - a number to add to the Heap
   */
  add(item: number): void {
    this.items[this.size] = item;
    this.size += 1;
    this.#heapifyUp();
  }

  /**
   * Swap an element with its parents while it is less than it
   */
  #heapifyUp(): void {
    let index = this.size - 1;
    while (this.#hasParent(index) && this.#parent(index) > this.items[index]) {
      this.#swap(this.#getParentIndex(index), index);
      index = this.#getParentIndex(index);
    }
  }

  /**
   * Swap an element with its smallest child while it is greater than it
   */
  #heapifyDown(): void {
    let index = 0;
    while (this.#hasLeftChild(index)) {
      // determine the smallest child element
      let smallerChildIndex = this.#getLeftChildIndex(index);
      if (this.#hasRightChild(index) && this.#rightChild(index) < this.#leftChild(index)) {
        smallerChildIndex = this.#getRightChildIndex(index);
      }

      if (this.items[index] < this.items[smallerChildIndex]) {
        break;
      } else {
        this.#swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  getItems() {
    return this.items;
  }
}

export {
  MinHeap,
}
