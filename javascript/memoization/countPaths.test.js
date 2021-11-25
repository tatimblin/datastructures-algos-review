const { expect } = require('@jest/globals');
const funcs = require('./countPaths');
const { grid } = require('./countPaths.json');

test('count paths: get the number of possible paths', () => {
  expect(funcs.traverseGrid(grid)).toBe(3);
});

test('count paths: ensure optimization with memoization', () => {
  const mock = jest.spyOn(funcs, 'countPaths');

  expect(funcs.traverseGrid(grid)).toBe(3);
  expect(mock).toHaveBeenCalledTimes(40);

  mock.mockRestore();
});
