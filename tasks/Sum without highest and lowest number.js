/*
Sum without highest and lowest number

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
 */

const sumArray = array => array === null || array === [] || array.length < 3
    ? 0
    : array.sort((a, b) => a - b)
        .slice(0, -1).splice(1)
        .reduce((a, b) => a + b)