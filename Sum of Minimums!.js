/*
Sum of Minimums!

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
 */

function sumOfMinimums(arr) {
    let b = []
    let a = [...arr].map(m => m.sort((a,b) => a - b)).map(m => b.push(m[0]))
    return b.reduce((a, b) => a + b)
}
