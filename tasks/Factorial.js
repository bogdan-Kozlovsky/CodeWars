/*
Factorial

https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
 */

const factorial = n => {

    if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')
    if (n < 1) return 1;


    const sumArray = [];
    let index = 1;

    while (index <= n) {
        sumArray.push(index);
        index++;
    }

    return sumArray.reduce((acc, el) => el * acc);
}
