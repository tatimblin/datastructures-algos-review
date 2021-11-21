const { Queue } = require('./Queue');

test('Queue: get size of linked list', () => {
  const queue = new Queue();
  [1, 2, 3, 4, 5].forEach(val => queue.enqueue(val));

  expect(queue.size).toBe(5);
});

test('Queue: get first value of linked list', () => {
  const queue = new Queue();
  [1, 2, 3, 4, 5].forEach(val => queue.enqueue(val));

  expect(queue.first.value).toBe(1);
});

test('Queue: get last value of linked list', () => {
  const queue = new Queue();
  [1, 2, 3, 4, 5].forEach(val => queue.enqueue(val));

  expect(queue.last.value).toBe(5);
});

test('Queue: dequeue a node from the linked list', () => {
  const queue = new Queue();
  [1, 2, 3, 4, 5].forEach(val => queue.enqueue(val));

  expect(queue.size).toBe(5);

  queue.dequeue();

  expect(queue.size).toBe(4);
});