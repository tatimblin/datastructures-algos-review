const funcs = require('./MaxSubarray');

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

test('Max Subarray: Kadane\'s algo', () => {
  const res = funcs.kadane(arr);

  expect(res).toBe(6)
});
