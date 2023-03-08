/*
Word values

https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript
 */

const wordValue = a => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];

    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = 0; j < a[i].length; j++) {
            const letterPosition = alphabet.indexOf(a[i][j]) + 1;
            sum += letterPosition;
        }
        result.push(sum);
    }

    return result.map((el, index) => el * (index + 1));
}

console.log(wordValue(["codewars", "abc", "xyz"]))
