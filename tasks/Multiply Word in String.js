/*
Multiply Word in String

https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript

 */

const modifyMultiply = (str, loc, num) => {
    const newStr = str.split(' ')[loc];
    const result = [];

    let i = 0;
    while (i < num) {
        result.push(`${newStr}`);
        i++;
    }

    return result.join('-');
}