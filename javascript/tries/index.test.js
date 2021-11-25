const { Tries } = require('./index');

const sampleDictionary = ['cat', 'cart', 'carts', 'cartoon', 'dog', 'doable', 'dongle', 'dont'];

test('Tries: populate dictionary', () => {
  const spellCheck = new Tries(sampleDictionary);
  // get how many children the root node has
  expect(Object.keys(spellCheck.root.children).length).toBeGreaterThan(0);
});

test('Tries: node has child node', () => {
  const spellCheck = new Tries(sampleDictionary);
  const hasChild = spellCheck.hasChild('c');

  expect(hasChild.data).toBe('c');
});

test('Tries: string is valid wordpart', () => {
  const spellCheck = new Tries(sampleDictionary);
  const isWordPart = spellCheck.isWordPart('carto');

  expect(isWordPart.data).toBe('o');
});

test('Tries: string is complete word', () => {
  const spellCheck = new Tries(sampleDictionary);
  const isWordPart = spellCheck.isWordPart('cart');

  expect(isWordPart.isCompleteWord).toBe(true);
});
