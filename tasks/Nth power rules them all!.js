/*
Nth power rules them all!

You are provided with an array of positive integers and an additional integer n (n > 1).

Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.
 */

function modifiedSum(a, n) {
    const powNum = a.map((x) => Math.pow(x, n));
    const reducer = (x, y) => x + y;

    return powNum.reduce(reducer) - a.reduce(reducer);
}