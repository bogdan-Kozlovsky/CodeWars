/*
Basics 04: Rotate Matrix

Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...
 */

const rotateMatrix = arr => {
  return arr[0].map((_ , index) => arr.map(item => item[index])).reverse()
}