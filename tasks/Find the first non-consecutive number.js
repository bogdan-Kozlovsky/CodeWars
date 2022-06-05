/*
Find the first non-consecutive number

Your task is to find the first element of an array that is not consecutive.

 */

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != 1)
      return arr[i];
  }
  return null;

}