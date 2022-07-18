/*
Single digit

The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

If the passed integer is already a single digit there is no need to reduce
n will be an integer such that 0 < n < 10⁹
 */

function singleDigit(n) {
  const getBin = num => [...num.toString(2)].reduce((acc, r) => +r + acc, 0);
  let res = n;
  while (res > 9) { res = getBin(res) }
  return res;
}