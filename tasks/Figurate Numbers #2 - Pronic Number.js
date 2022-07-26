/*
Figurate Numbers #2 - Pronic Number
You have to create a function isPronic to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.

Description:
Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number, is a number which is the product of two consecutive integers, that is, n(n + 1).

The first few Pronic Numbers are - 0, 2, 6, 12, 20, 30, 42...

Negative numbers are tested as well.
 */

const isPronic = n => {
  let res = false;
  for (let i = 0; i <= n; i++) {
    if (i * (i + 1) == n) res = true;
  }

  return res;
}