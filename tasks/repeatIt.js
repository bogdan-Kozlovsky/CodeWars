/*
    repeatIt

    Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"
 */


const repeatIt = (string, n) =>
    typeof string === 'string' ? string.repeat(n) : 'Not a string'