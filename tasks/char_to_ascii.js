/*
char_to_ascii

https://www.codewars.com/kata/55e9529cbdc3b29d8c000016/train/javascript
 */

const charToAscii = (string) => {

    if (!string.length) {
        return null;
    }

    const deleteDuplicateString = [...new Set(string.replace(/[^a-zA-Z]/g, '').split(''))];
    const resultObj = {};

    for (let i = 0; i < deleteDuplicateString.length; i++) {
        resultObj[deleteDuplicateString[i]] = deleteDuplicateString[i].charCodeAt();
    }

    return resultObj;
}

console.log(charToAscii('aaab'));
