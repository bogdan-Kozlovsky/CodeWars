/*
Basic JS - Building a calculator

https://www.codewars.com/kata/529f2d1c403a58f660000656/train/javascript
 */

const Calculator = {
    add(one, two) {
        return one + two;
    },
    subtract(one, two) {
        return one - two;
    },
    multiply(one, two) {
        return one * two;
    },
    divide(one, two) {
        if (two === 0) {
            return Infinity; // Division by zero returns Infinity
        }
        return one / two;
    },
};

console.log(Calculator.add(2, 4))
