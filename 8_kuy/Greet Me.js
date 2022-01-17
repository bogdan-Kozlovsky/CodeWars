/*
Greet Me

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:
 */

var greet = function(name) {
    let a = name.split('')[0].toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${a}!`
};