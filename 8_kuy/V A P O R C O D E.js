/*
V A P O R C O D E

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.


 */

const vaporcode = string =>  {
    return string.split('').map(e => e.toUpperCase()).filter(f => f !== ' ').join('  ')
}