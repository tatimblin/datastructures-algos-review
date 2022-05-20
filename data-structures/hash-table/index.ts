import { LinkedList } from '../linked-list';
class HashTable {
  keys: any[];
  table: any[];
  size: number;

  constructor() {
    this.keys = new Array(127);
    this.table = new Array(127);
    this.size = 0;
  }

  set(key: string | number, value: any): number {
    const index = this.#hash(key);

    if (!this.keys[index]) {
      this.keys[index] = new LinkedList();
      this.table[index] = new LinkedList();
    }

    const linkedListIndex = this.keys[index].indexOf(key);
    if (linkedListIndex === -1) {
      this.keys[index].add(key);
      this.table[index].add(value);
    } else {
      this.keys[index].insertAt(key, linkedListIndex);
      this.table[index].insertAt(value, linkedListIndex);
    }

    this.size++;

    return index;
  }

  get(key: string | number): any {
    const index = this.#hash(key);
    if (!this.keys[index]?.size) return;
    const linkedListIndex = this.keys[index].indexOf(key);
    if (linkedListIndex === -1) return;

    return this.table[index].getFrom(linkedListIndex);
  }

  remove(key: string | number) {
    const index = this.#hash(key);
    const linkedListIndex = this.keys[index].indexOf(key);
    if (linkedListIndex === -1) return;

    return this.table[index].removeFrom(linkedListIndex);
  }

  #hash(key: string | number): number {
    if (typeof key === 'number') return key % this.table.length;

    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.table.length;
  }
}

export {
  HashTable,
}
