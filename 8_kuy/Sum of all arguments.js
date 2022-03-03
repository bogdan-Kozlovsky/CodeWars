/*
Sum of all arguments

Write a function that finds the sum of all its arguments.
 */

const sum() => Object.values(arguments).reduce((a,b) => a + b)