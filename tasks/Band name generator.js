/*
Band name generator

https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript
 */

const bandNameGenerator = str => {
    if (str[0] === str[str.length - 1]) {
        return `${str[0].toUpperCase()}${str.substring(1)}${str.substring(1)}`
    }

    return `The ${str[0].toUpperCase()}${str.substring(1)}`;
}

console.log(bandNameGenerator('knife'));
