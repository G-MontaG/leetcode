# Longest Increasing Subsequence

In computer science, the longest increasing subsequence problem is to find a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible. This subsequence is not necessarily contiguous, or unique. The longest increasing subsequence problem is solvable in time O(n log n), where n denotes the length of the input sequence.

```lang-none
P = array of length N
M = array of length N + 1

L = 0
for i in range 0 to N-1:
    // Binary search for the largest positive j ≤ L
    // such that X[M[j]] <= X[i]
    lo = 1
    hi = L
    while lo ≤ hi:
        mid = ceil((lo+hi)/2)
        if X[M[mid]] < X[i]:
            lo = mid+1
        else:
            hi = mid-1

    // After searching, lo is 1 greater than the
    // length of the longest prefix of X[i]
    newL = lo

    // The predecessor of X[i] is the last index of
    // the subsequence of length newL-1
    P[i] = M[newL-1]
    M[newL] = i

    if newL > L:
        // If we found a subsequence longer than any we've
        // found yet, update L
        L = newL

// Reconstruct the longest increasing subsequence
S = array of length L
k = M[L]
for i in range L-1 to 0:
    S[i] = X[k]
    k = P[k]

return S
```

See better code in js solution.

## Longest Decreasing Subsequence

## Longest Non-Decreasing Subsequence
