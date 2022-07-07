/*
Return String of First Characters

In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
 */

const makeString = s => s.split(' ').map(item => item[0]).join('');
