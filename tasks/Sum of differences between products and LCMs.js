/*
Sum of differences between products and LCMs

In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

 */

function sumDifferencesBetweenProductsAndLCMs(pairs) {
  const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x));
  const lcm = (x, y) => (x * y === 0 ? 0 : (x * y) / gcd(x, y));
  const product = pairs.map(v => v.reduce((a, b) => a * b, 1));
  const respectiveLCM = pairs.map(v => lcm(v[0], v[1]));
  return product.map((v, i) => v - respectiveLCM[i]).reduce((a, b) => a + b, 0);
}