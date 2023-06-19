/*
All Star Code Challenge #15

https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript
 */

function rotate(str) {
    const result = []
    let copyStr = str
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        copyStr = copyStr.replace(letter, '')
        copyStr = copyStr + letter
        result.push(copyStr)
    }

    return result
}

console.log(rotate('Hello')) // ["elloH", "lloHe", "loHel", "oHell", "Hello"]
