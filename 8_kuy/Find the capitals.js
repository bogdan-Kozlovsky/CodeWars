/*
Find the capitals

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
 */

var capitals = function (word) {
    return word.split('').map((m, idx) => m === m.toUpperCase() ? idx : false).filter(f => f >= 0 && f !== false )
};