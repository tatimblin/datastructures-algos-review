# Memoization

Functions especially recursive ones can preform the same calculation multiple times. Memoization is the technique of storing the result the first time, and looking it up for subsequent calls.

## Count Paths

The `traverseGrid()` function uses memoization on line 13, by storing the count to each cell in an object called `paths`. This means that each cell just has to be iterated through once, and `countPaths()` will determine the number of paths by looking up memoized data in the `paths` object from prior calls.

Memoization has reduced the runtime from O(2n^2) => O(n^2).

## Fibonacci

The fibonacci sequence is calculated by adding the result of two numbers by the previous result in the sequence.

### For example:

1 + 1 = 2        8 + 13 = 21
1 + 2 = 3       13 + 21 = 34
2 + 3 = 5       21 + 34 = 55
3 + 5 = 8       34 + 55 = 89
5 + 8 = 13      55 + 89 = 144

This recursive alogrithm can benefit greatly from memoization, exponentially so as numbers get bigger. By incorporating memoization in `fib()` calculating the fibonacci sequence of `6` was reduced from `40` executions to just `11`.

### Execution Tree

                            fib(5)
                     /                   \
                    /                   fib(3)
                fib(4)                  /    \
             /          \           fib(2)  fib(1)
            /            \          /    \
        fib(3)          fib(2)  fib(1)  fib(0)
        /    \          /    \
    fib(2)  fib(1)  fib(1)  fib(0)
    /    \
fib(1)  fib(0)

See how `fib(1)` is called 5 separate times, with memoization it is only run once and subsequent times its value is needed it can be looked up.

Memoization has reduced the runtime from O(2^n) ==> O(n)
