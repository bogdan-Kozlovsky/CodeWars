/*
Between Extremes

https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript
 */

const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);

console.log(betweenExtremes([23, 3, 19, 21, 16]))
