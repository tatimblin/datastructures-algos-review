
class Stack {
  array: any[];

  constructor() {
    this.array = [];
  }

  /**
   * Add a node to the top of the stack
   * 
   * @param {any} node
   * @returns the updated stack
   */
  push(node: any): any[] {
    this.array = [...this.array, node];
    return this.array;
  }

  /**
   * Remove a node from the top of the stack
   * @returns {any} last node
   */
  pop(): any {
    const last = this.array[this.array.length - 1];
    this.array = this.array.slice(0, this.array.length - 2);
    return last;
  }

  /**
   * Get the entire stack
   * @returns {any[]} the current stack
   */
  get() {
    return this.array;
  }
}

export {
  Stack,
}
