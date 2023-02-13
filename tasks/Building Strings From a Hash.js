/*
Building Strings From a Hash

https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript
 */

const solution = pairs => {
    return Object.entries(pairs)
        .sort((a, b) => a[0] > b[0] ? 1 : -1)
        .map(entry => entry[0] + ' = ' + entry[1])
        .join(',');
}

console.log(solution({b: 1, a: '2'}));
