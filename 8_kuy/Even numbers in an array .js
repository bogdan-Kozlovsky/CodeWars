/*
Even numbers in an array

Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.


 */

const evenNumbers = (array, number) =>  array.filter(f => f % 2 === 0).slice(-number)
