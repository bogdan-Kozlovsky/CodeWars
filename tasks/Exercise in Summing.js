/*
Exercise in Summing

Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:

values: an array of integers with an arbitrary length; may be positive and negative
n: how many integers should be summed; always 0 or bigger

All values given to the functions will be integers. Also take care of the following special cases:

if values is empty, both functions should return 0
if n is 0, both functions should also return 0
if n is larger than values's length, use the length instead

 */

const minimumSum = (values, n) => {
    values = values.sort((a, b) => a - b);
    return values.slice(0, n).reduce((a, b) => a + b, 0)
}

const maximumSum = (values, n) => {
    values = values.sort((a, b) => b - a);
    return values.slice(0, n).reduce((a, b) => a + b, 0)
}
