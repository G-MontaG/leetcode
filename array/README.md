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

### Plus One

#### For Python

We can create long numbers. I mean crazy long, as long as your RAM allows [stackoverflow](https://stackoverflow.com/questions/5470693/python-number-limit).

We're given a list of digits, and the idea here is to convert that list to an integer, num. So each digit is multiplied by the proper place value and added to num. For example, if `digits = [3, 8, 2, 5]` then on the first iteration `3` is multiplied by `10` to the power of `4-1-0 = 3`, so this results in `3000`, which is added to num. Then `8` is multiplied by `10^2` and added to num, and so on.

The last step is to add `1` to num, convert it to a list and return that list.

#### For Javascript

We cannot create such big numbers due to integers overflow. So we will manipulate with array.

First, I add 1 anyway. If there is a carry-over, the new digit will also add 1. If the current digit is less than 9 then return the array.

Last, when running over for loop, I just put fill 1 in front of the array.

### Move Zeroes

A two-pointer approach records the position of `0` and the current number

### Two Sum

In one cycle, we go through all the array storing numbers as a dictionary and compare keys to the current number.

```js
const secondAddend = target - nums[i];
```

### Valid Sudoku

This topic require additional investigation.

### Rotate Image

Transpose the matrix and reverse each row.

### Three Sum

Two pointers technique.
[Youtube](https://www.youtube.com/watch?v=cF1DEqn4HLw)

Code complexity - `O(n^2)`

### Set Matrix Zeroes

Add some background to save time for future people to understand

```javascript
console.log(0 === -0); // true
console.log(Object.is(-0, 0)); // false
console.log(1 / -0 === Infinity); // -0
console.log(1 / 0 === Infinity); // 0

console.log(0 && 0); // 0
console.log(0 && -0); // 0
console.log(-0 && 0); // -0
console.log(-0 && -0); // -0
```

Code complexity - `O(n * m)`

### Group Anagrams

Code complexity - `O(nmlog(m))`
There is a `O(KN)` algorithm for this, slightly faster than `O(Klog(K)N)`. Instead of sorting, we just keep the counts of each letter.
But I personally don't like it.

### Longest Substring Without Repeating Characters

Two pointers technique. Second pointer is reducer accumulator.
Code complexity - `O(n)`
