/*
Array Deep Count

codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript
 */

const runLengthEncoding = a => {
    if (!a.length) return [];

    const result = [];
    let count = 1;
    let char = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] === char) {
            ++count;
        } else {
            result.push([count, char]);
            count = 1;
            char = a[i];
        }
    }

    result.push([count, char]);

    return result;
}

console.log(runLengthEncoding('hello world!')); // 3
