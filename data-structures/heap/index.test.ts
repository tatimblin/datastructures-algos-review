import { MinHeap } from './index';

test('Heap: add one element', () => {
  const heap = new MinHeap();
  heap.add(1);

  expect(heap.peek()).toBe(1);
});

test('Heap: add increasing elements', () => {
  const heap = new MinHeap();
  heap.add(1);
  heap.add(2);
  heap.add(3);
  heap.add(4);

  expect(heap.getItems()).toEqual([1, 2, 3, 4]);
});

test('Heap: add decreasing elements', () => {
  const heap = new MinHeap();
  heap.add(4);
  heap.add(3);
  heap.add(2);
  heap.add(1);

  expect(heap.getItems()).toEqual([1, 2, 3, 4]);
});

test('Heap: add randomly ordered elements', () => {
  const heap = new MinHeap();
  heap.add(7);
  heap.add(12);
  heap.add(3);
  heap.add(21);
  heap.add(6);

  expect(heap.getItems()).toEqual([3, 6, 7, 21, 12]);
});