/*
Recursion #1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

 */

const factorial = n => {

  if (n < 1) return 1;

  if (n === 1) return 1;

  return  n * factorial(n - 1);
};