/*
Palindromes Here and There

https://www.codewars.com/kata/5838a66eaed8c259df000003/train/javascript
 */
const isPalindromesNumbers = number => String(number) === String(number).split('').reverse().join('')

const convertPalindromes = numbers => numbers.map(number => isPalindromesNumbers(number) ? 1 : 0);


console.log(convertPalindromes([101, 2, 85, 33, 14014]))
