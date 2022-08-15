/*
Lowest product of 4 consecutive numbers

Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".
 */

const lowestProduct = input => {
    if (input.length < 4) return "Number is too small"
    let arr = [];
    for (let i = 0; i < input.length - 3; i++) {
        arr.push(input.slice(i, i + 4).split('').map(a => +a).reduce((a, b) => a * b, 1))
    }
    return Math.min(...arr);
}
