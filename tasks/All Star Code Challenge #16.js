/*
All Star Code Challenge #16

https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript
 */

function noRepeat(str) {
    let hash = {};
    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]]) {
            hash[str[i]]++;
        } else {
            hash[str[i]] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]] === 1) {
            return str[i];
        }
    }
}

console.log(noRepeat('aabbccdde'));
