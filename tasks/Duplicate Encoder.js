/*
Duplicate Encoder

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 */

const duplicateEncode = word => {
    let result = '';

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        let copyWord = word.toLowerCase();
        copyWord = copyWord.replace(letter, '');

        if (copyWord.includes(letter)) {
            result += ')';
        } else {
            result += '(';
        }

        copyWord = letter;
    }

    return result;
}

console.log(duplicateEncode('Success'));
