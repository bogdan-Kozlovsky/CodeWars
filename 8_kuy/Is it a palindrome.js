/*
Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.


 */

function isPalindrome(x) {
    x = x.toLowerCase()
    return x.split('').reverse().join('') === x
}