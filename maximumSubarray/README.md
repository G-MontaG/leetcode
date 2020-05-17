# Maximum subarray

### A brute-force solution

We can easily devise a brute-force solution to this problem: just try every possible pair of buy and sell dates in which the buy date precedes the sell date. O(n^2)

The maximum-subarray problem is interesting only when the array **contains some negative numbers**. If all the array entries were nonnegative, then the maximum-subarray problem would present no challenge, since the entire array would give the greatest sum.

### A solution using divide-and-conquer

**O(n log n)**

### Kadane's algorithm

**O(n)**

This version of the algorithm will return 0 if the input contains no positive elements (including when the input is empty). For the variant of the problem which disallows empty subarrays, `best_sum` should be initialized to negative infinity instead and also in the for loop `current_sum` should be updated as `max(x, current_sum + x)`. In that case, if the input contains no positive element, the returned value is that of the largest element (i.e., the least negative value), or negative infinity if the input was empty.
