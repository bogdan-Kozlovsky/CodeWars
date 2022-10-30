/*
Squares sequence

https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
 */

function squares(x, n) {
    if (n < 1) return [];

    let result = [x];

    while (result.length !== n) {
        result.push(result[result.length - 1] * result[result.length - 1])
    }

    return result;
}
