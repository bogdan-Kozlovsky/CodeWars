/*
Convert an array of strings to array of numbers

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
 */

const toNumberArray = stringarray => stringarray.map(m => +m)