import { Stack } from './index';

test('Stack: push node', () => {
  const stack = new Stack();

  expect(stack.push(5)).toEqual([5]);
});

test('Stack: pop node', () => {
  const stack = new Stack();
  stack.push(1);

  expect(stack.pop()).toEqual(1);
  expect(stack.get()).toEqual([]);
});
