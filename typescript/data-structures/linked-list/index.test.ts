import { LinkedList, LinkedListNode } from './index';

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
