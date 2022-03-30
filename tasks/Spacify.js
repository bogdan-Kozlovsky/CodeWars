/*
Spacify

Modify the spacify function so that it returns the given string with spaces inserted between each character.

*/

const spacify = str => str.split('').map(m => m += ' ').join('').trim()