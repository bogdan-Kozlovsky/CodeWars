/*
Summing a number's digits

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.


 */

function sumDigits(number) {
    let b = 0
    let a = Math.abs(number).toString().split('').forEach(e => b += +e)
    return b
}