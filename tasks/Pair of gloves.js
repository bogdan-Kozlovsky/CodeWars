/*
Pair of gloves

https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript
 */

const numberOfPairs = gloves => {
    let pairs = 0;
    let colors = {};

    for (let i = 0; i < gloves.length; i++) {
        if (colors[gloves[i]]) {
            colors[gloves[i]]++;
        } else {
            colors[gloves[i]] = 1;
        }
    }

    for (let color in colors) {
        pairs += Math.floor(colors[color] / 2);
    }
}

console.log(numberOfPairs([
    'Maroon', 'Teal', 'Red',
    'Red', 'Teal', 'Silver',
    'Gray', 'White', 'Silver',
    'Purple', 'Navy', 'Silver',
    'Olive', 'Yellow', 'Navy'
]))
