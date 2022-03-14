/*
Substring fun

Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.
 */

function nthChar(words){
    let a = ''
    words.forEach((f, i) => a += f[i])
    return a
}