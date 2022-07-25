/*
Consecutive letters

In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

*/

const solve = s => {
  let arr = s.split('').sort().map(item => item.charCodeAt());
  return arr.map((item, i , arr) => item + 1 === arr[i + 1]).filter(f => f === false).length < 2;
}