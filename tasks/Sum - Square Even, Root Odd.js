/*
Sum - Square Even, Root Odd

https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript
 */

const sumSquareEvenRootOdd = ns => {
    return Number(ns.map(el => {
        if (el % 2 === 0) {
            return Math.pow(el, 2)
        } else {
            return Math.sqrt(el)
        }
    }).reduce((acc, el) => acc + el, 0).toFixed(2))
};

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]))
