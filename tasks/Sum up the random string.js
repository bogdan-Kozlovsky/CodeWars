/*
Sum up the random string

Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

 */

function sumFromString(str) {
    return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)
}