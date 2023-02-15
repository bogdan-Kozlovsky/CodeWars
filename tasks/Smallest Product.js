/*
Smallest Product

https://www.codewars.com/kata/5b6b128783d648c4c4000129
 */

const smallestProduct = arr => Math.min(...arr.map(el => el.reduce((next, element) => next * element)));

console.log(smallestProduct([[3, 2], [1, 2, 1], [7, 8]]));
