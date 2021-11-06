# Data Sructure and Algorithm Review

This repo is a collection of basic data structure and algorithm implementations. Its creation is intended to be my review of core computer science concepts. It is currently only implemented in Javascript, but I would like to take a second pass in another branch using Golang.

## Contents

1. [Memoization](/memoization)
2. [Trees](/trees)

## Usage

Node.js is required to run Javascript files in the terminal

You can clone the repo and run `npm install` to add Jest, which is used to run the tests.

## Tests

There are tests included for each algorithm to ensure the optimizations they provide are correctly implemented. For example in `fibonacci.test.js` there is a test checking how many times the function calls itself to ensure it properly uses memoization to not make the same calculation multiple times.

## Resources

1. [Gayle Laakman McDowell / HackerRank video series](https://www.youtube.com/playlist?list=PLzg3FkRs7fcRt7D4D9w9dPyc2e7Eqvrw9)
2. [Grokking Algorithms by Aditya Bhargava](https://www.manning.com/books/grokking-algorithms)
