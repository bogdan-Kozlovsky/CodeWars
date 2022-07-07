/*
Find all occurrences of an element in an array

Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.
 */

const findAll = (array, n) => {
  const result = [];

  array.map((item , index) => item === n ? result.push(index) : item);
  return result;
}