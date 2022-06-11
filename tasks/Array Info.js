/*
Array Info

Sometimes we need information about the list/arrays we're dealing with. You'll have to write such a function in this kata. Your function must provide the following informations:

Length of the array
Number of integer items in the array
Number of float items in the array
Number of string character items in the array
Number of whitespace items in the array
The informations will be supplied in arrays that are items of another array. Like below:

Output array = [[array length],[no of integer items],[no of float items],[no of string chars items],[no of whitespace items]]

Added Difficulty
If any item count in the array is zero, you'll have to replace it with a None/nil/null value (according to the language). And of course, if the array is empty then return 'Nothing in the array!. For the sake of simplicity, let's just suppose that there are no nested structures.
Output ====== If you're head is spinning (just kidding!) then these examples will help you out-
 */


function arrayInfo(arr) {
  if (!arr.length) return 'Nothing in the array!';
  let resault = [];
  let wholeNumber = [];
  let notWholeNumber = [];
  let countStr = [];
  let emptyLine = [];

  arr.forEach(elem => {
    if (Number.isInteger(elem)) {
      wholeNumber.push(elem);
    } else {
      notWholeNumber.push(elem);
    }

    if (typeof elem === 'string') {
      countStr.push(elem);
    }

    if (typeof elem === 'string') {
      emptyLine.push(elem);
    }
  });

  emptyLine = emptyLine.filter(f => f === ' ');
  notWholeNumber = notWholeNumber.filter(f => typeof f === 'number');
  countStr = countStr.filter(f => f !== ' ');

  resault.push(
    [arr.length || null],
    [wholeNumber.length || null],
    [notWholeNumber.length || null],
    [countStr.length || null],
    [emptyLine.length || null],
  );

  return resault;
}