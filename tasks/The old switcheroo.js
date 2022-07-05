/*
The old switcheroo

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
 */

const vowel2index = str => str.replace(/[aeiou]/ig, (m, i) => i + 1);
