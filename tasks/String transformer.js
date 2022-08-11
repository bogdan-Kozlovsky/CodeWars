/*
String transformer

Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

 */

const stringTransformer = str => {
    return str.split(' ').reverse().map(el => el.split('').map(item => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('')).join(' ');
}