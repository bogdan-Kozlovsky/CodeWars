/*
Decreasing Inputs

https://www.codewars.com/kata/555de49a04b7d1c13c00000e
 */

const add = (arguments) => {
    if (!arguments.length) {
        return 0;
    }

    return Math.round(arguments.reduce((acc, element, index) => acc += (element / (index + 1)), 0));
}

console.log(add([ 4, -3, -2 ]))
