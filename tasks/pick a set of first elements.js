/*
pick a set of first elements

https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript
 */

function first(arr, n) {
    return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
}
