/*
Fix string case
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:
 */

const solve = s => {
    let a = 0
    let b = 0
    for (let i = 0; i < s.length; i++){
        s[i] === s[i].toUpperCase() ?  a += 1 :  b += 1
    }
    return b >= a ? s.toLowerCase() : s.toUpperCase()
}