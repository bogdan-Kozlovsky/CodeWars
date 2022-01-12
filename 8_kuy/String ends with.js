/*
String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 */

const solution = (str, ending) => {
    const a = str.split('')
    const b = ending.length
    return a.slice(b - 1).join('') === ending
}