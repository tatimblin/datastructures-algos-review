class QuickSort {
  constructor(arr = []) {
    this.increment = this._cacheIncrement || this.quickSort(arr);
    this._cacheIncrement = null;
  }

  quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;

    // get mid point of sub array
    const pivot = arr[Math.floor((left + right) / 2)];
    let index = this.partition(arr, left, right, pivot);

    this.quickSort(arr, left, index - 1);
    this.quickSort(arr, index, right);

    // cache result for future lookups
    if (right === arr.length - 1) {
      this._cacheIncrement = arr;
    }

    return arr;
  }

  partition(arr, left, right, pivot) {
    while (left <= right) {
      // if correctly less than pivot
      while (arr[left] < pivot) {
        left++;
      }

      // if correctly greater than pivot
      while (arr[right] > pivot) {
        right--;
      }

      // when found a pair to switch
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        // move both pointers
        left++;
        right--;
      }
    }
    return left;
  }
}

const sort = new QuickSort([1,2,5,24,52,13,11,7]);
console.log(sort.increment);
console.log('running again...');
console.log(sort.increment);

module.exports = {
  QuickSort,
};