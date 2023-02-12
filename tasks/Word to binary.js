/*
Word to binary

https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript
 */

function wordToBin(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i).toString(2).padStart(8, '0'));
    }
    return result;
}

