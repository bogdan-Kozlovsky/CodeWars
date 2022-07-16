/*
Pairs of integers from 0 to n

Write a function generatePairs (Javascript) / generate_pairs (Python / Ruby) that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:

0 <= a <= b <= n
The pairs should be sorted by increasing values of a then increasing values of b.
 */

function generatePairs(n) {
  const result = [];

  for(let i = 0; i <= n; i++){
    for(let j = 0; j <= n; j++){
      j >= i? result.push([i,j]) :null
    }
  }

  return result;
}