# String tricks

### Reverse String

Two pointer solution. Pointers moving toward each other until reach the middle of the string.

### Reverse String 2

Same logic but applied to subarrays

### Reverse Integer

Convert to string, split and reverse. Double check boundaries.

### First Unique Character in a String

Store indexes Map `{ letter: first index of this in string }`. If letter not unique value becomes `-1`, if unique it keeps the original index. Then you just search for any key with value greater `-1`. In this case, Map help as with order of keys, a plane object couldn't guarantee order for us. Otherwise we can store same information in to arrays `states = Array(26).fill(-1)` and `order = []`.

In Python dictionaries remember the order of items inserted. It is the rule after Python 3.7 and we can relay on that.

### Valid Anagram

Create Map (could be a plane object in this case) of `{ letter from a first string: counter }`. Then go through the second string and decrease counters. If one letter not found in Map, we can instantly return false. If no, then double-check that all counters equal to `0`. Otherwise again, return false immediately.

### Valid Palindrome

Filter all special characters -> split to array of letters -> reverse -> join them back -> compare filtered and reversed strings.
If they equal, it is a palindrome.

Works for both javascript and python. But in python, I have an alternative solution.

### ATOI

Match regexp and convert to integer if number in boundaries.

### Implement indexOf() (strStr in C)

Slice string to pieces and compare them to needle.

Comment from Leetcode: When you slice the string like `haystack` here for example, you're creating a copy of the string. Sure it's only the size of `needle`, but just wanted to point out. The string comparison is `O(n)` where `n` is size of `needle` so solution is `O(n * h)` at best where `h` is size of `haystack`.
