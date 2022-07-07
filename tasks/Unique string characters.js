/*
Unique string characters

In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
 */

function solve(a,b){
  let strOne = a.split('').filter(item => !b.split('').includes(item)).join('')
  let strTwo = b.split('').filter(item => !a.split('').includes(item)).join('')

  return `${strOne}${strTwo}`
};
