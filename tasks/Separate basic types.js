/*
Separate basic types

https://www.codewars.com/kata/60113ded99cef9000e309be3
 */

const separateTypes = (input) => {

    let obj = {
        number: [],
        string: [],
        boolean: []
    };

    for (let i = 0; i < input.length; i++) {
        let type = typeof input[i];
        if (obj[type] !== undefined) {
            obj[type].push(input[i]);
        }
    }

    for (let key in obj) {
        if (!obj[key].length) {
            delete obj[key]
        }
    }

    return obj;
}

console.log(separateTypes(['a']));

