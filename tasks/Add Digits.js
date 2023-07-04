/*
Add Digits

https://leetcode.com/problems/add-digits/
 */

function addDigits(num) {
    if (num < 10) return num;

    return num % 9 || 9;
}

console.log(addDigits(38))
