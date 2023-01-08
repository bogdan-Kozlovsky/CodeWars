/*
Dictionary from two lists

https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript
 */

function createDict(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i] !== undefined ? values[i] : null;
    }
    return obj
}


console.log(createDict(['a', 'b', 'c'], [1, 2, 3])); //{'a': 1, 'b': 2, 'c': 3})
