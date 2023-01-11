/*
Find the calculation type

https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript
 */

const calcType = (a, b, res) => {
    if(a + b === res) return 'addition';
    if(a - b === res) return 'subtraction';
    if(a * b === res) return 'multiplication';
    if(a / b === res) return 'division';
}

console.log(calcType(1, 2, 3));
