/*
Regex count lowercase letters

Your task is simply to count the total number of lowercase letters in a string.

 */

const lowercaseCount = str => str.length - str.replace(/[a-z]/g, '').length;