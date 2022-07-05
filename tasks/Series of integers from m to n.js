/*
Series of integers from m to n

Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.
 */

function generateIntegers(m, n) {
  let result = [];
  for(let i = m; i <= n; i++){
    result.push(i);
  }

  return result;
}