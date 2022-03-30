/*
Numerical Palindrome #1

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:


 */

function palindrome(num) {
    if(num < 0 || typeof num === 'string') return 'Not valid'
    num += ''
    return num === num.split('').reverse().join('')
}