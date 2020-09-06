# Design

The Fisher–Yates shuffle is an algorithm for generating a random permutation of a finite sequence—in plain terms, the algorithm shuffles the sequence. The algorithm effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. The algorithm produces an unbiased permutation: every permutation is equally likely. The modern version of the algorithm is efficient: it takes time proportional to the number of items being shuffled and shuffles them in place.

```lang-none
-- To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 downto 1 do
j ← random integer such that 0 ≤ j ≤ i
exchange a[j] and a[i]
```

An equivalent version which shuffles the array in the opposite direction (from lowest index to highest) is:

```lang-none
-- To shuffle an array a of n elements (indices 0..n-1):
for i from 0 to n−2 do
j ← random integer such that i ≤ j < n
exchange a[i] and a[j]
```

## Shuffle an Array

Fisher–Yates shuffle algorithm. Python ans JS have same algorithm but different implementation.
