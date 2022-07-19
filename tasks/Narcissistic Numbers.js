/*
Narcissistic Numbers

A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.
 */

const isNarcissistic = n => {
  const arr = n.toString().split('');

  return arr.map(item => Math.pow(item, arr.length)).reduce((acc, item ) => Number(item) + acc) === n;
}
