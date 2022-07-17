/*
Loop Array

Write a function loopArr that loops array in a specified direction by some number of steps.

By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

Function should accept three arguments:

array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);
 */

const loopArr = (arr, direction, steps) => {
  let leftResult;
  let rightResult;

  if(direction === 'left'){
    leftResult = arr.splice(0, steps)
    arr.splice(Infinity , 0 , ...leftResult)
  }

  if(direction === 'right'){
    rightResult = arr.splice(-steps , steps)
    arr.splice(0 , 0, ...rightResult)
  }

  return arr;
}