/*
Array Appender

https://www.codewars.com/kata/53a8a476947277a3020001cc/train/javascript
 */

function appendArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(appendArrays([['x', 'x'], 'B'], ['c', 'D'])); // -- > [['x', 'x'], 'B', 'c', 'D']


