class Node {
  constructor(data, isCompleteWord = false) {
    this.data = data;
    this.children = {};
    this.isCompleteWord = isCompleteWord;
  }
}

class Tries {
  constructor(dict = []) {
    this.root = new Node();
    this.isWordPartCache = {
      depth: 0,
      node: this.root
    };
    this.dict = dict || [];
    this.populate(this.dict);
  }

  populate(words) {
    for (let word of words) {
      this.addWordToDict(word.split(''));
    }
  }

  addWordToDict(chars, node = this.root) {
    if (chars.length === 0) {
      node.isCompleteWord = true;
      return;
    };

    const char = chars.shift();

    if (node.children[char]) {
      // If char at this path exists
      this.addWordToDict(chars, node.children[char]);
    } else {
      // If char at this path doesn't exist
      const newNode = new Node(char);
      node.children[char] = newNode;
      this.addWordToDict(chars, newNode);
    }
  }

  hasChild(char, node = this.root) {
    if (!node) return false;
    return node.children ? node.children[char] : false;
  }

  isWordPart(string, node = this.isWordPartCache.node) {
    let { depth } = this.isWordPartCache;

    while (depth < string.length) {
      if (!node) break;
      node = this.hasChild(string[depth], node);
      depth += 1;
    }

    this.isWordPartCache = { depth, node };

    return node;
  }

  resetWordPartCache() {
    this.isWordPartCache = {
      depth: 0,
      node: this.root
    };
  }
}

// const spellCheck = new Tries(['car', 'card', 'cat', 'catholic', 'cartoon', 'camp', 'high', 'hike', 'hiker']);
// spellCheck.populate(['tristan', 'timblin']);
// const test1 = spellCheck.isWordPart('tris');
// const test2 = spellCheck.isWordPart('tristan');
// console.log(test1.isCompleteWord, test2.isCompleteWord);

module.exports = {
  Tries,
  Node,
};
