/*
Sum of Minimums!
 */

function sumOfMinimums(arr) {
    let b = []
    let a = [...arr].map(m => m.sort((a,b) => a - b)).map(m => b.push(m[0]))
    return b.reduce((a, b) => a + b)
}
