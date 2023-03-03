/*
No Loops 1 - Small enough?

https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2/train/javascript
 */

const smallEnough = (a, limit) => a.every(element => element <= limit);

console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
