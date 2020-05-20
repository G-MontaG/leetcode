# Array tricks

### Remove Duplicates From Sorted Array

In javascript, I literally remove duplicates from the array by splice method. But in python, I use the trick. I rewrite numbers in the array and leave the dummy tail because the task description allows me to do that.

### Rotate array

First of all, you should implement a reverse function. In both languages, it is possible to do it without a temporary variable.
Then execute three reverse steps.

Original: `[1, 2, 3, 4, 5, 6, 7]` and `k = 3`

Step 1: `[7, 6, 5, 4, 3, 2, 1]` reverse whole array

Step 2: `[5, 6, 7, 4, 3, 2, 1]` reverse from `0` to `k - 1`

Step 3: `[5, 6, 7, 1, 2, 3, 4]` reverse from `k` to `arr.length`

### Contains Duplicate

The first solution convert array to set and compare the length of the array and set. The set cannot contain duplicate values, so his length will be shorter.

Second solution base on converting array to map or dic in python. A key is a number from the array, and value is an index. With this data, we can calculate the distance between duplicated numbers. Actually, in javascript, a plane object can be used.

### Single Number

XOR operator

### Intersection of Two Arrays

Convert one array (would be great if smaller one) into count mapping. Then search for same numbers.
