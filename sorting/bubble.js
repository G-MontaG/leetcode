const { Comparator } = require("../comparator");

function bubbleSort(originalArray, comparatorFunction) {
  comparator = new Comparator(comparatorFunction);
  // Flag that holds info about whether the swap has occur or not.
  let swapped = false;
  // Clone original array to prevent its modification.
  const array = [...originalArray];

  for (let i = 1; i < array.length; i += 1) {
    swapped = false;

    for (let j = 0; j < array.length - i; j += 1) {
      // Swap elements if they are in wrong order.
      if (this.comparator.lessThan(array[j + 1], array[j])) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        // Register the swap.
        swapped = true;
      }
    }

    // If there were no swaps then array is already sorted and there is
    // no need to proceed.
    if (!swapped) {
      return array;
    }
  }

  return array;
}

console.log("from: ", [2, 5, 1, 0, 4], " to: ", bubbleSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
