const { QuickSort } = require('./index.js');

test("QuickSort", () => {
  const unsortedArr = [2, 4, 16, 21, 3, 5, 23, 6, 55];
  const quickSort = new QuickSort(unsortedArr);

  expect(quickSort.increment).toBe(unsortedArr.sort());
});