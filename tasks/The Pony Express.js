/*
The Pony Express

https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9/train/javascript
 */

const riders = s => s.reduce(([a, r], d) => a + d <= 100 ? [a+d, r] : [d, r + 1], [0,1])[1]



console.log(riders([43, 23, 40, 13])); //2
