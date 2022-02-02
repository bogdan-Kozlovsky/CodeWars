/*
Largest pair sum in array

Given a sequence of numbers, find the largest pair sum in the sequence.

 */

const largestPairSum = (numbers) => {
    let a = numbers.sort((a,b) => a - b)
    return a[a.length - 2] + a[a.length - 1]
}