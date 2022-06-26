/*
L2: Triple X

Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
 */

function tripleX(str){
  const index = str.indexOf('x');
  if(str[index + 1] === 'x' && str[index + 2] === 'x') return true;

  return false;
}