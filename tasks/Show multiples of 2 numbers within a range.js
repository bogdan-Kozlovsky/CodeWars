/*
Show multiples of 2 numbers within a range

https://www.codewars.com/kata/583989556754d6f4c700018e/train/javascript
 */

const multiples = (s1, s2, s3) => {
    const array = [];

    for (let i = s1; i < s3; i++) {
        if (i % s1 === 0 && i % s2 === 0) {
            array.push(i);
        }
    }

    return array;
}

console.log(multiples(2, 4, 40))
