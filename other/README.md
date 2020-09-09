# Other

The **Hamming weight** of a string is the number of symbols that are different from the zero-symbol of the alphabet used. It is thus equivalent to the Hamming distance from the all-zero string of the same length. For the most typical case, a string of bits, this is the number of 1's in the string, or the digit sum of the binary representation of a given number and the ℓ₁ norm of a bit vector. In this binary case, it is also called the population count, popcount, sideways sum, or bit summation.

![A plot for the population count (Hamming weight for binary numbers) for (decimal) numbers 0 to 256](https://en.wikipedia.org/api/rest_v1/page/graph/png/Hamming_weight/0/0a895ebc9101580d5f8521a14376e799468ed13e.png)

```C
//This is better when most bits in x are 0
//This is algorithm works the same for all data sizes.
//This algorithm uses 3 arithmetic operations and 1 comparison/branch per "1" bit in x.
int popcount64d(uint64_t x) {
    int count;
    for (count=0; x; count++)
        x &= x - 1;
    return count;
}
```

[Wiki](https://en.wikipedia.org/wiki/Hamming_weight)

In information theory, the **Hamming distance** between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, it measures the minimum number of substitutions required to change one string into the other, or the minimum number of errors that could have transformed one string into the other. In a more general context, the Hamming distance is one of several string metrics for measuring the edit distance between two sequences. It is named after the American mathematician Richard Hamming.

![3-bit binary cube for finding Hamming distance](https://upload.wikimedia.org/wikipedia/commons/b/b4/Hamming_distance_3_bit_binary.svg)
![Two example distances: 100→011 has distance 3; 010→111 has distance 2](https://upload.wikimedia.org/wikipedia/commons/6/6e/Hamming_distance_3_bit_binary_example.svg)

Definition: The Hamming distance between two equal-length strings of symbols is the number of positions at which the corresponding symbols are different.

[Wiki](https://en.wikipedia.org/wiki/Hamming_distance)

## Number of 1 Bits

Solution is Hamming weight algorithm.

## Hamming Distance

Solution is Hamming distance algorithm.

## Reverse Bits

Bit operations.

## Pascal's Triangle

![GIF](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

[Wiki](https://en.wikipedia.org/wiki/Pascal%27s_triangle)

## Valid Parentheses

Solution in using stack and dictionary.

## Missing Number

Two counters.
