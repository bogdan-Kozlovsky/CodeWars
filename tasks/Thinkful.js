/*
Thinkful - String Drills: Repeater

Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
 */

const repeater = (string, n) => {
    let str = ''
    for(let i = 0; i < n; i++){
        str += string
    }
    return str
}