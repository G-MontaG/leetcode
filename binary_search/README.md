# Binary search

In computer science, binary search, also known as half-interval search, logarithmic search, bisection method, or binary chop, is a search algorithm that finds the position of a target value within a sorted array.

Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

Binary search runs in logarithmic time in the worst case, making O(log n) comparisons. Binary search is faster than linear search except for small arrays. However, the array **must be sorted** first to be able to apply binary search. There are specialized data structures designed for fast searching, such as *hash tables*, that can be searched more efficiently than binary search. However, binary search can be used to solve a wider range of problems, such as finding the next-smallest or next-largest element in the array relative to the target even if it is absent from the array.

#### Procedure for finding the leftmost element (support duplicates)
```
function binary_search_leftmost(A, n, T):
    L := 0
    R := n
    while L < R:
        m := floor((L + R) / 2)
        if A[m] < T:
            L := m + 1
        else:
            R := m
    return L
```
