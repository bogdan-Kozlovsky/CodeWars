/*
Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s){
    let a = s.split(' ')
    let arr = (a.map(str => str.length)).sort((a , b) => a - b)
    return  arr[0]
}