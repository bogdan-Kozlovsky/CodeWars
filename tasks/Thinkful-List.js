/*
Thinkful - List and Loop Drills: Lists of lists

You have a two-dimensional list in the following format:
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.
 */


function processData(data){
  let result = [];
  let a = data.map(item => result.push(item[0] - item[1]))
  return result.reduce((acc , item) => item * acc);
}