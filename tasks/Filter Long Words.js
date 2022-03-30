/*
Filter Long Words

Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.
 */

const filterLongWords = (sentence, n) =>  sentence.split(' ').filter(f =>  f.length > n)