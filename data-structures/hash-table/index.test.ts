import { HashTable } from './index';

test('HashTable: set string key value pair', () => {
  const hash = new HashTable();

  hash.set('someKey', 'someValue');

  expect(hash.get('someKey')).toBe('someValue');
});

test('HashTable: set number key value pair', () => {
  const hash = new HashTable();

  hash.set(0, 'someValue');

  expect(hash.get(0)).toBe('someValue');
});

const hashes = [
  [0, 0], [1, 1], [127, 0], ['data', 29], ['response', 117],
  ['a', 97], ['aa', 67]
];

test.each(hashes)('HashTable: create hash for %p', (before, after) => {
  const hash = new HashTable();

  expect(hash.set(before, 'test')).toBe(after);
});