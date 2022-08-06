/*
Is Integer Array?

returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.

 */

const isIntArray = arr => {
  if(arr === null || arr === undefined || Number.isNaN(arr) || typeof arr === 'string') return false;
  if(arr.length === 0) return true;
  return arr.every((element) => Number.isInteger(element));
}