/*
Truncate a string!

https://www.codewars.com/kata/57af26297f75b57d1f000225/train/javascript
 */

const truncateString = (str, num) => {
    if (str.length <= num) {
        return str;
    } else if (num <= 3) {
        return str.slice(0, num) + "...";
    } else {
        return str.slice(0, num - 3) + "...";
    }
};

console.log(truncateString('chingel', 6));

