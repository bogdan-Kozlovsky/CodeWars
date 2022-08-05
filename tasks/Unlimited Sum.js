/*
Unlimited Sum

Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

The function should reject any arguments that are not integers, and sum the remaining integers.
 */

const sum = (...args) => {
  return args.filter(el => Number.isInteger(el)).reduce((acc , item) => acc + item)
}