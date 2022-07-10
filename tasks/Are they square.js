/*
Are they square?

Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.
 */

const isSquare = arr => {
  if (!arr.length) return;

  for (let i = 0; i < arr.length; i++) {
    if (Math.sqrt(arr[i]) % 1 !== 0) return false;
  }
  return true;
}