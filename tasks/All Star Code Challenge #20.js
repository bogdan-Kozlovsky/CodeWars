/*
All Star Code Challenge #20

https://www.codewars.com/kata/5865a75da5f19147370000c7/train/javascript
 */

const addArrays = (array1, array2) => {
    if (array1.length !== array2.length) {
        return throw new Error("Arrays must have the same length.");;
    }

    const result = [];

    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }

    return result;
}

console.log(addArrays([1, 2], [4, 5]))
