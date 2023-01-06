/*
Simple Fun #37: House Numbers Sum

https://www.codewars.com/kata/58880c6e79a0a3e459000004/train/javascript
 */

function houseNumbersSum(inputArray) {
    const indexZero = inputArray.indexOf(0);

    const newArr = inputArray.splice(0, indexZero);

    return newArr.reduce((acc, el) => acc + el, 0);
}

console.log(houseNumbersSum([0, 1, 2, 3, 4, 5]))
