/*
Move all vowels

https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript
 */

const moveVowel = input => {
    let vowel = '';
    let consonant = '';

    for (let i = 0; i < input.length; i++) {
        if ('aeiouAEIOU'.indexOf(input[i]) !== -1) {
            vowel += input[i];
        } else {
            consonant += input[i];
        }
    }

    return `${consonant}${vowel}`;
}

console.log(moveVowel('apple'))
