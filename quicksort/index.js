class QuickSort {
  constructor(arr = []) {
    this.increment = this.quickSort(arr, 0, arr.length - 1);
  }

  quickSort(arr, left, right, max = 0) {
    if (left >= right || max === 5) return;

    // get mid point of sub array
    const pivot = arr[Math.floor((left + right) / 2)];
    let index = this.partition(arr, left, right, pivot);

    this.quickSort(arr, left, index - 1);
    this.quickSort(arr, index, right);

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

// const sorted = new QuickSort([2, 4, 16, 21, 3, 5, 23, 6, 55]);

module.exports = {
  QuickSort,
};