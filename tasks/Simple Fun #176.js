/*
Simple Fun #176: Reverse Letter

Given a string str, reverse it omitting all non-alphabetic characters.
 */

const reverseLetter = str => {
    let newStr = str.replace(/[^a-zа-яё]/gi, '')
    return newStr.split('').reverse().join('')
}