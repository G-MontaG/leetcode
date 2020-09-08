# Math

Division
[Wiki](<https://en.wikipedia.org/wiki/Division_(mathematics)>)

Prime number
[Wiki](https://en.wikipedia.org/wiki/Prime_number)

Radix
[Wiki](https://en.wikipedia.org/wiki/Radix)

## Fizz Buzz

Fizz buzz is a group word game for children to teach them about division.

In javascript solution with mod operator and in python without.

## Count Primes

Sieve of Eratosthenes solution

It does so by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between them that is equal to that prime. This is the sieve's key distinction from using trial division to sequentially test each candidate number for divisibility by each prime.

```lang-none
algorithm Sieve of Eratosthenes is
    input: an integer n > 1.
    output: all prime numbers from 2 through n.

    let A be an array of Boolean values, indexed by integers 2 to n,
    initially all set to true.

    for i = 2, 3, 4, ..., not exceeding √n do
        if A[i] is true
            for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
                A[j] := false

    return all i such that A[i] is true.
```

[Wiki](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

## Power of Three

Javascript use radix-3 or Math logarithms, python use loop.

## Roman to Integer

Note for python: The trick is that the last letter is always added. Except the last one, if one letter is less than its latter one, this letter is subtracted.
