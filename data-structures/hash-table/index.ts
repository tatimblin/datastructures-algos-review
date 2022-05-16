
class HashTable {
  table: any[];
  size: number;

  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  set(key: string | number, value: any): number {
    const index = this.#hash(key);

    this.table[index] = [key, value];
    this.size++;

    return index;
  }

  get(key: string | number): any {
    const index = this.#hash(key);
    return this.table[index] && this.table[index][1];
  }

  remove(key: string | number) {
    const index = this.#hash(key);
    let temp = undefined;

    if (this.table[index] && this.table[index].length) {
      temp = this.table[index];
      this.table[index] = undefined;
      this.size--;
    }
  
    return temp;
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
