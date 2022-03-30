/*
Numerical Palindrome #1.5

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.
 */


function palindrome(num, s) {
    if (typeof num === 'string' || typeof s === 'string' || num < 0) {
        return "Not valid"
    }
    let arr = []
    for (let i = num; arr.length + 1 <= s; i++) {
        if (i < 10) {
            i = 10
        }
        if (+((i + '').split('').reverse().join('')) === i) {
            arr.push(i)
        }
    }
    return arr
}