const { flattenArray } = require('./FlattenArray');

test('FlattenArray', () => {
  const originalArray = [1, [3, 2, 6], 2, [3, 4, [6, 2]], 5];
  const flatArray = [1, 3, 2, 6, 2, 3, 4, 6, 2, 5];

  expect(flattenArray(originalArray)).toEqual(expect.arrayContaining(flatArray));
});
