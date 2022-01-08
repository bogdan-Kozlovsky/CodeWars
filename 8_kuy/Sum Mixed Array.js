/*
Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
 */

const sumMix = (x) =>  x.map(e => typeof e === "string" ? +e : e).reduce((a,b) => a + b)