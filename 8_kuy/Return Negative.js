/*
Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
 */


const makeNegative = number => (Math.sign(number) === 1 ? -number : number)