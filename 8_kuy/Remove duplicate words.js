/*
Remove duplicate words

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
 */

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')