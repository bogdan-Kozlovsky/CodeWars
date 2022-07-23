/*
Scrolling Text

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:
 */

const scrollingText = text => {

  text = text.toUpperCase();
  let res = [text];


  for (let i = 0; i < text.length - 1; i++) {
    text = text.slice(1) + '' + text[0];
    res.push(text)
  }

  return res;
}