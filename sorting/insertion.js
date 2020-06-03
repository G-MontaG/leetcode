function compare(a, b) {
  return a - b;
}

/**
 * Insertionsort algorithm.
 * Time complexity: O(N^2).
 */
function insertionSort(array, cmp) {
  cmp = cmp || compare;
  const length = array.length;
  for (let i = 1; i < length; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && cmp(array[j], current) > 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log("from: ", [2, 5, 1, 0, 4], " to: ", insertionSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
