/*
Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
 */

const remove = (string) => `${string.split('').filter(f => f !== '!').join('')}!`
