const { expect } = require('@jest/globals');
const funcs = require('./fibonacci');

test('fibonacci sequence: get value at n', () => {
  expect(funcs.fib(6)).toBe(8);
});

test('fibonacci sequence: ensure optimization with memoization', () => {
  const mock = jest.spyOn(funcs, 'fib');

  expect(funcs.fib(6)).toBe(8);
  expect(mock).toHaveBeenCalledTimes(11);

  mock.mockRestore();
});
