/*
Duplicate Arguments

Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.
 */

const solution = (...arg) => {
    return arg.length !== [...new Set(arg)].length
}