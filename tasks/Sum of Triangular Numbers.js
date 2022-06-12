/*
Sum of Triangular Numbers

Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
 */

function sumTriangularNumbers(n) {
  let sum = 0;
  let total = 0;
  for (let i = 0; i <= n; i++) {
    sum += i * 1;
    total += sum;
  }
  return total;
}