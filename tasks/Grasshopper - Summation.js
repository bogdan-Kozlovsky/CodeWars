/*
Grasshopper - Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
 */

// const summation = n => (n * (n + 1)) / 2;

var summation = function (num) {
    let a = 0
    for(let i = 1; i <= num; i++){
        a = a + i
    }
    return a
}