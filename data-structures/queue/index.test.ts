import {
  Queue,
  QueueNode,
} from './index';

const sampleData = [1, 2, 3, 4, 5];

test('Queue: enqueue an element', () => {
  const queue = new Queue();
  const element = 5;

  expect(queue.enqueue(element)).toStrictEqual(new QueueNode(element));
});

test('Queue: enqueue multiple elements', () => {
  const queue = new Queue();

  sampleData.forEach(element => queue.enqueue(element));

  expect(queue.size).toBe(5);
});

test('Queue: dequeue an element', () => {
  const queue = new Queue();

  sampleData.forEach(element => queue.enqueue(element));

  expect(queue.dequeue()).toStrictEqual(new QueueNode(1));
  expect(queue.size).toBe(4);
});
