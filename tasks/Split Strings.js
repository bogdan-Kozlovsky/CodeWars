/*
Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

 */

const solution = (str) => str.split(/(.{2})/).filter(f => f).map(m => m.length !== 2 ? m = m + '_' : m)