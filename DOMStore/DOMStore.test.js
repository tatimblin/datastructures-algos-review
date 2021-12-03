const { DOMStore = TestDOMStore } = require('./DOMStore');

test('DOMStore: get new key', () => {
  const store = new DOMStore();
  store.set('test', true);
  expect(store.get('test')).toBe(true);
});

test('DOMStore: get updated key', () => {
  const store = new DOMStore();
  store.set('test', true);
  expect(store.get('test')).toBe(true);
  store.set('test', false);
  expect(store.get('test')).toBe(false);
});

test('DOMStore: check has key', () => {
  const store = new DOMStore();
  store.set('test', false);
  expect(store.has('test')).toBe(true);
});