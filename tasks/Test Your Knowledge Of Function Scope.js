/*
Test Your Knowledge Of Function Scope

Write a function that adds from two invocations.

All inputs will be integers.
 */

function add(x) {
  return function(y) {
    return x + y;
  };
}