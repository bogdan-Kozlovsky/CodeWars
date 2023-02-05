/*
Trimming a string

https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript
 */

function trim(str, size) {
    if (str.length <= size) return str;
    return str.slice(0, size > 3 ? size - 3 : size) + '...';
}

