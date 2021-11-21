const { test, expect } = require("@jest/globals");
const funcs = require('./binarySearch');

test('Binary Search: find a present value in the tree', () => {
  const { node } = funcs.populate()
    .breadthFirstSearch(9);

  expect(node.data).toBe(9)
});
