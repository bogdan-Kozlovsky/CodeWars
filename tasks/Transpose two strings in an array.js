/*
Transpose two strings in an array

You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
 */

function transposeTwoStrings (array) {
  let lengthStr = array[0].length > array[1].length ? array[0].length : array[1].length;
  let result = [];

  for(let i = 0; i < lengthStr; i++){
    let str = (array[0][i] || " ") + " " + (array[1][i] || " ");
    result.push(str);
  }

  return result.join("\n");
}