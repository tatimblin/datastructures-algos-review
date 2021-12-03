export class DOMStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(node, value) {
    const index = this.keys.indexOf(node);

    if (index === -1) {
      // create
      this.keys.push(node);
      this.values.push(value);
    } else {
      // update
      this.values[index] = value;
    }
  }

  has(node) {
    return this.keys.indexOf(node) !== -1;
  }

  get(node) {
    const index = this.keys.indexOf(node);

    if (index === -1) return null;

    return this.values[index];
  }
}
