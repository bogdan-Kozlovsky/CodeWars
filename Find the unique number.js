/*
Find the unique number
There is an array with some numbers. All numbers are equal except for one. Try to find it!
 */

const findUniq = arr =>  arr.find((e, i) => arr.indexOf(e) == arr.lastIndexOf(e))