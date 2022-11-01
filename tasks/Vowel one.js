/*
Vowel one

https://www.codewars.com/kata/580751a40b5a777a200000a1
 */

function vowelOne(s) {
    return s.replace(/./g,v=>/[aeiou]/i.test(v)?'1':'0');
}
