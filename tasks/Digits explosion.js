/*
Digits explosion

https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript
 */

const explode = s => {
    const result = [];

    for (let i = 0; i < s.length; i++) {
        result.push(new Array(Number(s[i])).fill(Number(s[i])).join(''));
    }

    return result.join('');
}

console.log(explode('312'));
