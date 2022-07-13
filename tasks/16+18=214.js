/*
16+18=214

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme
 */
function add(num1, num2) {
  num1 = num1.toString().split("").reverse().join("");
  num2 = num2.toString().split("").reverse().join("");

  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }

  let returnString = "";
  for (let i = 0; i < num1.length; i++) {
    let int1 = parseInt(num1[i]);
    let int2 = parseInt(num2[i] || 0);

    returnString = (int1 + int2).toString() + returnString;
  }

  return parseInt(returnString);
}
