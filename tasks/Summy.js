/*
Summy

Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.
 */

const summy = stringOfInts => stringOfInts.split(' ').map(item => +item).reduce((acc , item) => acc + item);