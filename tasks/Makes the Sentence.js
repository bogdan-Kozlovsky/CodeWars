/*
Makes the Sentence

https://www.codewars.com/kata/59fb4d89ff58e5e816002efc/train/javascript
 */

function makesTheSentence(characterArray, sentenceString) {
    return characterArray.sort().join('') === sentenceString.replace(/\s/g, '').split('').sort().join('');
}

console.log(makesTheSentence(['D', 'u', 'c', 'k', 's', 'q', 'u', 'a', 'c', 'k', '.'], "Ducks quack."))
