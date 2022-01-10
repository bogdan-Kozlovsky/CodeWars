/*
Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 */
function reverseWords(str) {
    return str.split(' ').map(m => m.split('')).map(m => m.reverse()).map(m => m.join('')).join(' ')
}
