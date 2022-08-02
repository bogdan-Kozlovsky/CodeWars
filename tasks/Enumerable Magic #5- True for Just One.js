/*
Enumerable Magic #5- True for Just One?

Create a function called one that accepts two params:

a sequence
a function
and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
 */

const one = (arr, fun) => {
  return arr.filter(fun).length == 1;
}