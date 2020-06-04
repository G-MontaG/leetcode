const { Comparator } = require("../comparator");

function insertionSort(array, comparatorFunction) {
  comparator = new Comparator(comparatorFunction);
  // Go through all array elements...
  for (let i = 0; i < array.length; i += 1) {
    let currentIndex = i;

    // Go and check if previous elements and greater then current one.
    // If this is the case then swap that elements.
    while (
      array[currentIndex - 1] !== undefined &&
      comparator.lessThan(array[currentIndex], array[currentIndex - 1])
    ) {
      // Swap the elements.
      const tmp = array[currentIndex - 1];
      array[currentIndex - 1] = array[currentIndex];
      array[currentIndex] = tmp;

      // Shift current index left.
      currentIndex -= 1;
    }
  }

  return array;
}

console.log("from: ", [2, 5, 1, 0, 4], " to: ", insertionSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
