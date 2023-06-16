/*
Find array

https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055/train/javascript
 */

function findArray(arr1, arr2) {
    if(!arr1.length) return [];

    const results = [];

    for (let i = 0; i < arr2.length; i++) {
        results.push(arr1[arr2[i]])
    }

    return results;
}

console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]))
