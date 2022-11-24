/*
I love big nums and I cannot lie

https://www.codewars.com/kata/56121f3312baa28c8500005b/train/javascript
 */

function biggest(arr) {
    return arr.map(String).sort((a, b) => (b + a) - (a + b)).join('').replace(/^0+/, '0');
}

