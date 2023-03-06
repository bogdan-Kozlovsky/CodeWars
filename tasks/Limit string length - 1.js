/*
Limit string length - 1

https://www.codewars.com/kata/5208fc3cb613bc725f000142/train/javascript
 */

const solution = (string, limit) => {
    if (string.length <= limit) return string;

    return `${string.substring(0, limit)}...`;
}

console.log(solution('Test', 8))
