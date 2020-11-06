# Sorting

### Insertion sort

Insertion sort is a simple sorting algorithm that builds
the final sorted array (or list) one item at a time.
It is much less efficient on large lists than more
advanced algorithms such as quicksort, heapsort, or merge
sort.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

| Name               | Best |    Average    |     Worst     | Memory | Stable | Comments |
| ------------------ | :--: | :-----------: | :-----------: | :----: | :----: | :------- |
| **Insertion sort** |  n   | n<sup>2</sup> | n<sup>2</sup> |   1    |  Yes   |          |

[Wiki](https://en.wikipedia.org/wiki/Insertion_sort)

### Merge sort

In computer science, merge sort (also commonly spelled
mergesort) is an efficient, general-purpose,
comparison-based sorting algorithm. Most implementations
produce a stable sort, which means that the implementation
preserves the input order of equal elements in the sorted
output. Mergesort is a divide and conquer algorithm that
was invented by John von Neumann in 1945.

An example of merge sort. First divide the list into
the smallest unit (1 element), then compare each
element with the adjacent list to sort and merge the
two adjacent lists. Finally all the elements are sorted
and merged.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

A recursive merge sort algorithm used to sort an array of 7
integer values. These are the steps a human would take to
emulate merge sort (top-down).

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

| Name           |     Best      |    Average    |     Worst     | Memory | Stable | Comments |
| -------------- | :-----------: | :-----------: | :-----------: | :----: | :----: | :------- |
| **Merge sort** | n&nbsp;log(n) | n&nbsp;log(n) | n&nbsp;log(n) |   n    |  Yes   |          |

[Wikipedia](https://en.wikipedia.org/wiki/Merge_sort),
[YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

## Merge Sorted Array

See python solution

## Sort Colors (Dutch Partitioning Problem)

We are classifying the array into four groups: red, white, unclassified, and blue. Initially we group all elements into unclassified. We iterate from the beginning as long as the white pointer is less than the blue pointer.

If the white pointer is red `(nums[white] == 0)`, we swap with the red pointer and move both white and red pointer forward. If the pointer is white `(nums[white] == 1)`, the element is already in correct place, so we don't have to swap, just move the white pointer forward. If the white pointer is blue, we swap with the latest unclassified element.

## Top K Frequent Elements

Complexity: `n log n`

## Kth Largest Element in an Array

See comments
