/*
Exclamation marks series #1: Remove an exclamation mark from the end of string

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
 */

function remove (string) {
    let a = string.split('').reverse()
    return a[0] === '!' ? a.slice(1).reverse().join('') : a.reverse().join('')
}