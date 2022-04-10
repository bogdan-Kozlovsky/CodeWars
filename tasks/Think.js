/*
Thinkful - List Drills: Longest word

Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:
 */

const longest = words =>  {
    let str = words.sort((a , b) => b.length - a.length)
    return str[0].length
}