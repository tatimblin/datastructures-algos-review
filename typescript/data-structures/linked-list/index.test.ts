import { LinkedList, LinkedListNode } from './index';

const sampleText = 'A little learning is a dangerous thing';

test('LinkedList: add head node', () => {
  const LL = new LinkedList();
  LL.add('test');

  expect(LL.head).toEqual(new LinkedListNode('test'));
  expect(LL.size).toEqual(1);
});

test('LinkedList: add multiple nodes', () => {
  const LL = new LinkedList();
  LL.add('test');
  LL.add('test');

  expect(LL.size).toEqual(2);
});

test('LinkedList: add node at specific index', () => {
  const LL = new LinkedList();

  sampleText.split(' ').forEach(word => LL.add(word));
  LL.insertAt('really', 4);

  expect(LL.size).toEqual(8);
});

test('LinkedList: remove node at specific index', () => {
  const LL = new LinkedList();

  sampleText.split(' ').forEach(word => LL.add(word));
  LL.removeFrom(2);

  expect(LL.size).toEqual(6);
});
