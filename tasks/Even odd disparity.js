/*
Even odd disparity

Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.
 */

function solve(a){
  let filteredArray = a.filter(item => typeof item === 'number')
  let even = filteredArray.filter(item => item % 2 === 0);
  let odd = filteredArray.filter(item => item % 2 !== 0)
  return even.length - odd.length;
};