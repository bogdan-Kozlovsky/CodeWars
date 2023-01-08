/*
Count consonants

https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
 */

const consonantCount = str => str.split('').filter(v => /[qzwsxdcrfvtgbyhnjmklp]/gi.test(v)).length;

console.log(consonantCount("helLo world"));
