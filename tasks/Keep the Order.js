/*
Keep the Order

https://www.codewars.com/kata/582aafca2d44a4a4560000e7/train/javascript
 */

const keepOrder = (arr, val) => {
    return [...arr, val].sort((a , b) => a - b).indexOf(val);
}

console.log(keepOrder([1, 2, 3, 4, 7], 5)); // 4
